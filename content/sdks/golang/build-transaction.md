---
title: Build a Transaction
description: How to prepare a transaction with the Flow Go SDK
---

Flow, like most blockchains, allows users to submit transactions that mutate
the shared global chain state. A transaction is an object that holds a payload,
which describes the state mutation, and one or more authorizations that permit 
the transaction to mutate the state owned by specific accounts.

You can read more about transactions in the [transaction lifecycle documentation](/concepts/transaction-lifecycle).

## Create the Transaction

You can start by creating an empty transaction with the Go SDK. 
We'll populate the remaining fields one by one.

```go
import (
  "github.com/onflow/flow-go-sdk"
)

func main() {
  tx := flow.NewTransaction()
}
```

## Script 

The `Script` field is the portion of the transaction that describes the state mutation logic.

On Flow, transaction logic is written in [Cadence](/cadence). The value of `Script` 
is a byte slice containing the UTF-8 encoded source code for a Cadence program.

Here's a simple Cadence transaction that accepts a single argument and prints
a message.

```cadence:title=Greeting.cdc
transaction(greeting: String) {
  execute { 
    log(greeting.concat(", World!")) 
  }
}
```

Let's add this script to our transaction:

```go
import (
  "ioutil"
  "github.com/onflow/flow-go-sdk"
)

func main() {
  tx := flow.NewTransaction()

  greeting, err := outil.ReadFile("Greeting.cdc")
  if err != nil {
    panic("failed to load Cadence script")
  }

  tx.SetScript(greeting)
}
```

## Arguments

A transaction can accept zero or more arguments that are passed into the Cadence script.

The arguments on the transaction must match the number and order declared in
the Cadence script. 

Our sample script accepts a single `String` argument:

```go
import (
  "ioutil"
  "github.com/onflow/cadence"
  "github.com/onflow/flow-go-sdk"
)

func main() {
  tx := flow.NewTransaction()

  greeting, err := outil.ReadFile("Greeting.cdc")
  if err != nil {
    panic("failed to load Cadence script")
  }

  tx.SetScript(greeting)

  hello := cadence.NewString("Hello")

  err = tx.AddArgument(hello)
  if err != nil {
    panic("invalid argument")
  }
}
```

## Gas Limit

A transaction must specify a limit on the amount of computation it requires,
referred to as the _gas limit_. A transaction will abort if it exceeds its gas limit.

### How is gas measured? 

Cadence uses metering to measure the number of operations per transaction. 
You can read more about it in the [Cadence documentation](/cadence).

### What should the limit be? 

The gas limit depends on the complexity of the transaction script. 

TODO

```go
import (
  "github.com/onflow/flow-go-sdk"
)

func main() {
  // ...

  tx.SetGasLimit(1000)
}
```

## Reference Block

A transaction must specify an expiration window (measured in blocks) during which it is considered valid by the network. 
A transaction will be rejected if it is submitted past its expiry block. 

Flow calculates transaction expiry using the _reference block_ field on a transaction. 
A transaction expires after `600` blocks are committed on top of the reference block,
which takes about 10 minutes at average Mainnet block rates.

```go
import (
  "github.com/onflow/flow-go-sdk"
)

func main() {
  // ...

  tx.SetGasLimit(1000)
}
```

- building transaction
  - script
  - arguments 
  - gas 
  - reference block (expiry)
  - proposal
  - payer
  - authorizers
