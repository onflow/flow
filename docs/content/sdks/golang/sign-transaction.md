---
title: Sign a Transaction
description: How to sign transaction with the Flow Go SDK
---

Below is a simple example of how to sign a transaction using a `crypto.PrivateKey`.

```go
import (
    "github.com/onflow/flow-go-sdk"
    "github.com/onflow/flow-go-sdk/crypto"
)

var (
    myAddress    flow.Address
    myAccountKey flow.AccountKey
    myPrivateKey crypto.PrivateKey
)

tx := flow.NewTransaction().
    SetScript([]byte("transaction { execute { log(\"Hello, World!\") } }")).
    SetGasLimit(100).
    SetProposalKey(myAddress, myAccountKey.Index, myAccountKey.SequenceNumber).
    SetPayer(myAddress)
```

Transaction signing is done through the `crypto.Signer` interface. The simplest 
(and least secure) implementation of `crypto.Signer` is `crypto.InMemorySigner`.

Signatures can be generated more securely using keys stored in a hardware device such 
as an [HSM](https://en.wikipedia.org/wiki/Hardware_security_module). The `crypto.Signer` 
interface is intended to be flexible enough to support a variety of signer implementations 
and is not limited to in-memory implementations.

```go
// construct a signer from your private key and configured hash algorithm
mySigner := crypto.NewInMemorySigner(myPrivateKey, myAccountKey.HashAlgo)

err := tx.SignEnvelope(myAddress, myAccountKey.Index, mySigner)
if err != nil {
    panic("failed to sign transaction")
}
```

## How signatures work on Flow

Flow introduces new concepts that allow for more flexibility when 
creating and signing transactions. Before trying the examples below, 
we recommend that you read through the [transaction signature documentation](/concepts/transaction-signing).

---

### Single party, single signature

- Proposer, payer and authorizer are the same account (`0x01`).
- Only the envelope needs to be signed.
- Key must have full signing weight.

| Key | Account   | Key Index | Weight |
|-----|-----------|-----------|--------|
| 1   | `0x01`    | 0         | 1.0    |

```go
account1, _ := c.GetAccount(ctx, flow.HexToAddress("01"))

key1 := account1.Keys[0]

// create signer from securely-stored private key
key1Signer := getSignerForKey1()

tx := flow.NewTransaction().
    SetScript([]byte(`
        transaction { 
            prepare(signer: AuthAccount) { log(signer.address) }
        }
    `)).
    SetGasLimit(100).
    SetProposalKey(account1.Address, key1.Index, key1.SequenceNumber).
    SetPayer(account1.Address).
    AddAuthorizer(account1.Address)

// account 1 signs the envelope with key 1
err := tx.SignEnvelope(account1.Address, key1.Index, key1Signer)
```

[Full Runnable Example](https://github.com/onflow/flow-go-sdk/tree/master/examples#single-party-single-signature)

---

### Single party, multiple signatures

- Proposer, payer and authorizer are the same account (`0x01`).
- Only the envelope must be signed.
- Each key has weight 0.5, so two signatures are required.

| Key | Account   | Key Index | Weight |
|-----|-----------|-----------|--------|
| 1   | `0x01`    | 0         | 0.5    |
| 2   | `0x01`    | 1         | 0.5    |

```go
account1, _ := c.GetAccount(ctx, flow.HexToAddress("01"))

key1 := account1.Keys[0]
key2 := account1.Keys[1]

// create signers from securely-stored private keys
key1Signer := getSignerForKey1()
key2Signer := getSignerForKey2()

tx := flow.NewTransaction().
    SetScript([]byte(`
        transaction { 
            prepare(signer: AuthAccount) { log(signer.address) }
        }
    `)).
    SetGasLimit(100).
    SetProposalKey(account1.Address, key1.Index, key1.SequenceNumber).
    SetPayer(account1.Address).
    AddAuthorizer(account1.Address)

// account 1 signs the envelope with key 1
err := tx.SignEnvelope(account1.Address, key1.Index, key1Signer)

// account 1 signs the envelope with key 2
err = tx.SignEnvelope(account1.Address, key2.Index, key2Signer)
```

[Full Runnable Example](https://github.com/onflow/flow-go-sdk/tree/master/examples#single-party-multiple-signatures)

---

### Multiple parties

- Proposer and authorizer are the same account (`0x01`).
- Payer is a separate account (`0x02`).
- Account `0x01` signs the payload.
- Account `0x02` signs the envelope.
  - Account `0x02` must sign last since it is the payer.

| Key | Account   | Key Index | Weight |
|-----|-----------|-----------|--------|
| 1   | `0x01`    | 0         | 1.0    |
| 3   | `0x02`    | 0         | 1.0    |

```go
account1, _ := c.GetAccount(ctx, flow.HexToAddress("01"))
account2, _ := c.GetAccount(ctx, flow.HexToAddress("02"))

key1 := account1.Keys[0]
key3 := account2.Keys[0]

// create signers from securely-stored private keys
key1Signer := getSignerForKey1()
key3Signer := getSignerForKey3()

tx := flow.NewTransaction().
    SetScript([]byte(`
        transaction { 
            prepare(signer: AuthAccount) { log(signer.address) }
        }
    `)).
    SetGasLimit(100).
    SetProposalKey(account1.Address, key1.Index, key1.SequenceNumber).
    SetPayer(account2.Address).
    AddAuthorizer(account1.Address)

// account 1 signs the payload with key 1
err := tx.SignPayload(account1.Address, key1.Index, key1Signer)

// account 2 signs the envelope with key 3
// note: payer always signs last
err = tx.SignEnvelope(account2.Address, key3.Index, key3Signer)
```

[Full Runnable Example](https://github.com/onflow/flow-go-sdk/tree/master/examples#multiple-parties)

---
### Multiple parties, two authorizers

- Proposer and authorizer are the same account (`0x01`).
- Payer is a separate account (`0x02`).
- Account `0x01` signs the payload.
- Account `0x02` signs the envelope.
  - Account `0x02` must sign last since it is the payer.
  - Account `0x02` is also an authorizer.

| Key | Account   | Key Index | Weight |
|-----|-----------|-----------|--------|
| 1   | `0x01`    | 0         | 1.0    |
| 3   | `0x02`    | 0         | 1.0    |

```go
account1, _ := c.GetAccount(ctx, flow.HexToAddress("01"))
account2, _ := c.GetAccount(ctx, flow.HexToAddress("02"))

key1 := account1.Keys[0]
key3 := account2.Keys[0]

// create signers from securely-stored private keys
key1Signer := getSignerForKey1()
key3Signer := getSignerForKey3()

tx := flow.NewTransaction().
    SetScript([]byte(`
        transaction {
            prepare(signer1: AuthAccount, signer2: AuthAccount) {
              log(signer.address)
              log(signer2.address)
          }
        }
    `)).
    SetGasLimit(100).
    SetProposalKey(account1.Address, key1.Index, key1.SequenceNumber).
    SetPayer(account2.Address).
    AddAuthorizer(account1.Address).
    AddAuthorizer(account2.Address)

// account 1 signs the payload with key 1
err := tx.SignPayload(account1.Address, key1.Index, key1Signer)

// account 2 signs the envelope with key 3
// note: payer always signs last
err = tx.SignEnvelope(account2.Address, key3.Index, key3Signer)
```

[Full Runnable Example](https://github.com/onflow/flow-go-sdk/tree/master/examples#multiple-parties-two-authorizers)

---

### Multiple parties, multiple signatures

- Proposer and authorizer are the same account (`0x01`).
- Payer is a separate account (`0x02`).
- Account `0x01` signs the payload.
- Account `0x02` signs the envelope.
  - Account `0x02` must sign last since it is the payer.
- Both accounts must sign twice (once with each of their keys).

| Key | Account   | Key Index | Weight |
|-----|-----------|-----------|--------|
| 1   | `0x01`    | 0         | 0.5    |
| 2   | `0x01`    | 1         | 0.5    |
| 3   | `0x02`    | 0         | 0.5    |
| 4   | `0x02`    | 1         | 0.5    |

```go
account1, _ := c.GetAccount(ctx, flow.HexToAddress("01"))
account2, _ := c.GetAccount(ctx, flow.HexToAddress("02"))

key1 := account1.Keys[0]
key2 := account1.Keys[1]
key3 := account2.Keys[0]
key4 := account2.Keys[1]

// create signers from securely-stored private keys
key1Signer := getSignerForKey1()
key2Signer := getSignerForKey2()
key3Signer := getSignerForKey3()
key4Signer := getSignerForKey4()

tx := flow.NewTransaction().
    SetScript([]byte(`
        transaction { 
            prepare(signer: AuthAccount) { log(signer.address) }
        }
    `)).
    SetGasLimit(100).
    SetProposalKey(account1.Address, key1.Index, key1.SequenceNumber).
    SetPayer(account2.Address).
    AddAuthorizer(account1.Address)

// account 1 signs the payload with key 1
err := tx.SignPayload(account1.Address, key1.Index, key1Signer)

// account 1 signs the payload with key 2
err = tx.SignPayload(account1.Address, key2.Index, key2Signer)

// account 2 signs the envelope with key 3
// note: payer always signs last
err = tx.SignEnvelope(account2.Address, key3.Index, key3Signer)

// account 2 signs the envelope with key 4
// note: payer always signs last
err = tx.SignEnvelope(account2.Address, key4.Index, key4Signer)
```

[Full Runnable Example](https://github.com/onflow/flow-go-sdk/tree/master/examples#multiple-parties-multiple-signatures)
