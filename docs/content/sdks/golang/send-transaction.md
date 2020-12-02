---
title: Send a Transaction
description: How to send a transaction with the Flow Go SDK
---

After a transaction has been [constructed](../build-transaction) and 
[signed](../sign-transaction), 
it can be sent to the Flow blockchain where it will then be executed.

## Connect to an access node

Start by establishing a connection with a Flow access node:

```go
import (
  "github.com/onflow/flow-go-sdk"
  "github.com/onflow/flow-go-sdk/client"
)

func main() {
  var accessAPIHost string

  // Establish a connection with an access node
  flowClient, err := client.New(accessAPIHost)
  if err != nil {
    panic("failed to establish connection with Access API")
  }
}
```

## Send a transaction

Submit a transaction using the `SendTransaction` method:

```go
import (
  "context"
  "github.com/onflow/flow-go-sdk"
  "github.com/onflow/flow-go-sdk/client"
)

func main() {
  // ...

  var tx *flow.Transaction

  ctx := context.Background()

  // Send transaction to the access node
  err := flowClient.SendTransaction(ctx, *tx)
  if err != nil {
    panic("failed to submit transaction")
  }
}
```

`SendTransaction` will return an error if the access node rejects the transaction.
This can happen if the transaction is incomplete or contains invalid fields.

## Get a transaction result

After a transaction has been submitted, call the `GetTransactionResult` method to 
get its status and result.

```go
import (
  "context"
  "fmt"
  "github.com/onflow/flow-go-sdk"
  "github.com/onflow/flow-go-sdk/client"
)

func main() {
  // ...

  var tx *flow.Transaction

  ctx := context.Background()

  // Send transaction to the access node
  result, err := flowClient.GetTransactionResult(ctx, tx.ID())
  if err != nil {
    panic("failed to get transaction result")
  }

  if result.Status == TransactionStatusSealed {
    fmt.Println("transaction is sealed")
  } else {
    fmt.Println("transaction is still pending")
  }
}
```
