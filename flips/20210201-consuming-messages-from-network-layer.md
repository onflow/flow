# Handing Messages from Networking Layer to Engines (Core Protocol)

| Status        | Proposed       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [343](https://github.com/onflow/flow/pull/343) |
| **Author(s)** | Alex Hentschel (alex.hentschel@dapperlabs.com) |
| **Sponsor**   | Alex Hentschel (alex.hentschel@dapperlabs.com)             |
| **Updated**   | 2021-02-01                                           |


## Objective

FLIP to generalize the API though which the Networking Layer hands messages to Engines

## Current Implementation

An [Engine](https://github.com/onflow/flow-go/blob/782c6d4c45007406fc708be22dcfaf9859a62991/module/engine.go)
subscribes to the incoming messages from a channel by
[registering](https://github.com/onflow/flow-go/blob/782c6d4c45007406fc708be22dcfaf9859a62991/module/network.go#L19)
themselves with the networking layer:
```golang
type Network interface {
   Register(channel network.Channel, engine network.Engine) (network.Conduit, error)
}
```

The networking layer serves messages from the channel directly to the engine
(-> [code](https://github.com/onflow/flow-go/blob/9be5cca2697e78f4b2d6c06210d4ac7a4bbfdb64/network/p2p/network.go#L445-L452)):
```golang
// eng is the Engine for the respective channel
err = eng.Process(qm.SenderID, qm.Payload)
if err != nil {
  n.logger.Error().
    ...
    Msg("failed to process message")
}
```
Note that we feed the [Engine](https://github.com/onflow/flow-go/blob/782c6d4c45007406fc708be22dcfaf9859a62991/network/engine.go#L27)
using the `Process` method:
```golang
// Process processes the given event from the node with the given origin ID
// in a blocking manner. It returns the potential processing error when done.
Process(originID flow.Identifier, event interface{}) error
```
which is **blocking**. 

#### Potential problems 

Currently, the networking layer has a single priority queue for all engines it serves. It has a limited number
of workers (e.g. 5) which is uses to serve the engines. 
![Kiku](20210201-consuming-messages-from-network-layer/Networking_message_Consumer_1.png)

As the networking layer as no detailed context about the messages it transmits to the application layer,
it can't effectively decide which messages to drop, or which messages can be processed concurrently
and which messages have to be processed in a blocking manner. 

If one of the engines (e.g. `Engine C`) gets overwhelmed with large number of messages, this engine will
likely delay messages for all other engines as the workers will soon all be blocked by the overwhelmed engine.   

![Kiku](20210201-consuming-messages-from-network-layer/Networking_message_Consumer_2.png)

Furthermore, the overwhelmed engine cannot drop messages or change its behaviour depending on its backlog, 
as the message queue is not within its component. 


## Design Proposal

The detailed semantics of the message types and their processing modality are only known to the application layer.
**Overall, I think it would be beneficial to generalize the API through which the networking layer hands the messages
to the application layer. For each channel, the application layer should inject the desired message consumer.**


Thereby, we could support the following desired use-cases:
* The application layer should have access to the queued messages, so it can drop stale messages and
  protect itself from getting overwhelmed.
  ![Kiku](20210201-consuming-messages-from-network-layer/Networking_message_Consumer_3.png)
* It should be the application layer's decision whether to process messages concurrently or one-by-one
  (depending on the message type).
  ![Kiku](20210201-consuming-messages-from-network-layer/Networking_message_Consumer_4.png)
* As engines might re-request entities, it would be beneficial if re-requesting could be temporarily suspended, 
  if the engine has queued up a lot of messages.
  ![Kiku](20210201-consuming-messages-from-network-layer/Networking_message_Consumer_5.png)



### Implementation Steps: (1) API Revision


*  Generalize the API for the message sink from the viewpoint of the networking layer:
   ```golang
   type MessageConsumer func(originID flow.Identifier, event interface{})
   ```
   Note that the `MessageConsumer` has no error return as opposed to the
   Engine's [`Process` method](https://github.com/onflow/flow-go/blob/782c6d4c45007406fc708be22dcfaf9859a62991/network/engine.go#L27).
   Motivation
    * What is the networking layer supposed to do with an error? Currently, the networking layer just logs an error
      (-> [code](https://github.com/onflow/flow-go/blob/9be5cca2697e78f4b2d6c06210d4ac7a4bbfdb64/network/p2p/network.go#L445-L452)).
    * Best suited to handle occurring errors is the application layer (i.e. the `MessageConsumer`), which has the necessary 
      context about message semantics and potential errors. 
*  change the `Network`'s [`Register` method](https://github.com/onflow/flow-go/blob/782c6d4c45007406fc708be22dcfaf9859a62991/module/network.go#L19) to
   ```golang
   Register(channel network.Channel, consumer MessageConsumer) (network.Conduit, error)
   ```
   Thereby, the engine can decide which concrete function to inject into the networking layer
   (e.g. the blocking `Process` or the non-blocking `Submit` function).

### Implementation Steps: (2) Minimally-invasive update of existing code base

1. Implement a wrapper which holds the 
   [functionality to log error](https://github.com/onflow/flow-go/blob/782c6d4c45007406fc708be22dcfaf9859a62991/network/p2p/network.go#L442-L448)
   that is currently part of the networking layer:
   ```golang
    type process func(originID flow.Identifier, event interface{}) error // signature of the Engine.Process method

    type ErrorReturnLogger struct {
	    logger  zerolog.Logger
	    processor process
    }
    
    func NewErrorReturnLogger(prc process, logger zerolog.Logger) ErrorReturnLogger {
	    return ErrorReturnLogger{
		    logger: logger,
		    processor: prc,
	    }
    }
    
    func (l *ErrorReturnLogger) Consume(originID flow.Identifier, event interface{}) {
	    err := l.processor(originID, event)
	    if err != nil {
		    l.logger.Error().
			    Err(err).
			    Hex("sender_id", originID[:]).
			    Msg("failed to process message")
	    }
    }
   ```

2. Change all existing `Register` calls from
    ```
    Register(channel network.Channel, engine) (network.Conduit, error)
    ```
   to 
    ```
    Register(channel network.Channel, NewErrorReturnLogger(engine.Process, log).Consume) (network.Conduit, error)
    ```
   
Thereby, we retain the current functionality, but the engine now has the ability to change how it would like to be fed with messages. 

