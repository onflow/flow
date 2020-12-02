---
title: Build a Transaction
description: How to prepare a transaction with the Flow Go SDK
---

Flow, like most blockchains, allows anybody to submit a transaction that mutates
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

```cadence:title=Greeting1.cdc
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

  greeting, err := outil.ReadFile("Greeting1.cdc")
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

  greeting, err := outil.ReadFile("Greeting1.cdc")
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
Until dedicated gas estimation tooling exists, it's best to use the emulator
to test complex transactions and determine a safe limit.

```go
import (
  "github.com/onflow/flow-go-sdk"
)

func main() {
  // ...

  tx.SetGasLimit(100)
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
  "context"
  "github.com/onflow/flow-go-sdk"
  "github.com/onflow/flow-go-sdk/client"
)

func main() {
  // ...

  var accessAPIHost string

  // Establish a connection with an access node
  flowClient, err := client.New(accessAPIHost)
  if err != nil {
    panic("failed to establish connection with Access API")
  }

  // Get the latest sealed block to use as a reference block
  latestBlock, err := flowClient.GetLatestBlockHeader(context.Background(), true)
  if err != nil {
    panic("failed to fetch latest block")
  }

  tx.SetReferenceBlockID(latestBlock.ID)
}
```

## Proposal Key

A transaction must specify a [sequence number](/concepts/transaction-signing/#sequence-numbers)
to prevent replays and other potential attacks.

Each account key maintains a separate transaction sequence counter; 
the key that lends its sequence number to a transaction is called the _proposal key_.

A proposal key contains three fields:

- Account address
- Key index
- Sequence number

A transaction is only valid if its declared sequence number matches the current
on-chain sequence number for that key. The sequence number increments by one after
the transaction is executed.

```go
import (
  "context"
  "github.com/onflow/flow-go-sdk"
  "github.com/onflow/flow-go-sdk/client"
)

func main() {
  // ...

  proposerAddress := flow.HexToAddress("9a0766d93b6608b7")

  // Use the 4th key on the account
  proposerKeyIndex := 3

  // Get the latest account info for this address
  proposerAccount, err := flowClient.GetAccountAtLatestBlock(context.Background(), proposerAddress)
  if err != nil {
    panic("failed to fetch proposer account")
  }

  // Get the latest sequence number for this key
  sequenceNumber := proposerAccount.Keys[proposerKeyIndex].SequenceNumber

  tx.SetProposalKey(address, keyIndex, sequenceNumber)
}
```

## Payer

The transaction payer is the account that pays the fees for the transaction.
A transaction must specify exactly one payer. The payer is only responsible
for paying the network and gas fees; the transaction is not authorized to access
resources or code stored in the payer account.

```go
import (
  "github.com/onflow/flow-go-sdk"
)

func main() {
  // ...

  payerAddress := flow.HexToAddress("631e88ae7f1d7c20")

  tx.SetPayer(payerAddress)
}
```

## Authorizers

An authorizer is an account that authorizes a transaction to read and mutate its resources.
A transaction can specify zero or more authorizers, 
depending on how many accounts the transaction needs to access.

The number of authorizers on the transaction must match the number of `AuthAccount` 
parameters declared in the `prepare` statement of the Cadence script.

```cadence
transaction {

  prepare(authorizer1: AuthAccount, authorizer2: AuthAccount) {
    log(authorizer1.address)
    log(authorizer2.address)
  }

  // ...
}
```

```go
import (
  "github.com/onflow/flow-go-sdk"
)

func main() {
  // ...

  authorizer1Address := flow.HexToAddress("7aad92e5a0715d21")
  authorizer2Address := flow.HexToAddress("95e019a17d0e23d7")

  tx.AddAuthorizer(authorizer1Address)
  tx.AddAuthorizer(authorizer2Address)
}
```

## Put it all together

Below is a complete example of how to build a transaction with the Flow Go SDK.

```cadence:title=Greeting2.cdc
transaction(greeting: String) {

  let guest: Address

  prepare(authorizer: AuthAccount) {
    self.guest = authorizer.address
  }

  execute { 
    log(greeting.concat(",").concat(guest.toString())) 
  }
}
```

```go
import (
  "context"
  "ioutil"
  "github.com/onflow/flow-go-sdk"
  "github.com/onflow/flow-go-sdk/client"
)

func main() {

  greeting, err := outil.ReadFile("Greeting2.cdc")
  if err != nil {
    panic("failed to load Cadence script")
  }

  proposerAddress := flow.HexToAddress("9a0766d93b6608b7")
  proposerKeyIndex := 3

  payerAddress := flow.HexToAddress("631e88ae7f1d7c20")
  authorizerAddress := flow.HexToAddress("7aad92e5a0715d21")

  var accessAPIHost string

  // Establish a connection with an access node
  flowClient, err := client.New(accessAPIHost)
  if err != nil {
    panic("failed to establish connection with Access API")
  }

  // Get the latest sealed block to use as a reference block
  latestBlock, err := flowClient.GetLatestBlockHeader(context.Background(), true)
  if err != nil {
    panic("failed to fetch latest block")
  }

  // Get the latest account info for this address
  proposerAccount, err := flowClient.GetAccountAtLatestBlock(context.Background(), proposerAddress)
  if err != nil {
    panic("failed to fetch proposer account")
  }

  // Get the latest sequence number for this key
  sequenceNumber := proposerAccount.Keys[proposerKeyIndex].SequenceNumber

  tx := flow.NewTransaction().
    SetScript(greeting).
    SetGasLimit(100).
    SetReferenceBlockID(latestBlock.ID).
    SetProposalKey(proposerAddress, proposerKeyIndex, sequenceNumber).
    SetPayer(payerAddress).
    AddAuthorizer(authorizerAddress)

  // Add arguments last
  
  hello := cadence.NewString("Hello")

  err = tx.AddArgument(hello)
  if err != nil {
    panic("invalid argument")
  }
}
```
