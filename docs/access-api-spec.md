# Flow Access API Specification

> Version 0.1.1

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [RPC Service](#rpc-service)
  - [Ping](#ping)
  - [Block Headers](#block-headers)
    - [GetLatestBlockHeader](#getlatestblockheader)
    - [GetBlockHeaderByID](#getblockheaderbyid)
    - [GetBlockHeaderByHeight](#getblockheaderbyheight)
  - [Blocks](#blocks)
    - [GetLatestBlock](#getlatestblock)
    - [GetBlockByID](#getblockbyid)
    - [GetBlockByHeight](#getblockbyheight)
  - [Collections](#collections)
    - [GetCollectionByID](#getcollectionbyid)
  - [Transactions](#transactions)
    - [SendTransaction](#sendtransaction)
    - [GetTransaction](#gettransaction)
    - [GetTransactionResult](#gettransactionresult)
  - [Accounts](#accounts)
    - [GetAccount](#getaccount)
  - [Scripts](#scripts)
    - [ExecuteScript](#executescript)
  - [Events](#events)
    - [GetEvents](#getevents)
- [Entities](#entities)
  - [Account](#account)
  - [Account Public Key](#account-public-key)
  - [Transaction](#transaction)
  - [Block](#block)
  - [Block Header](#block-header)
  - [Event](#event)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## RPC Service

The following functions are implemented as a [gRPC service](https://grpc.io/). 

The language-agnostic spec for this API is defined using [Protocol Buffers](https://developers.google.com/protocol-buffers), which allows for client libraries to be generated in most popular programming languages.

- [Flow Access API Protobuf source files]()

---

### Ping

`Ping` will return a successful response if the Access API is ready and available.

```
rpc Ping(PingRequest) returns (PingResponse)
```

If a ping request returns an error or times out, it can be assumed that the Access API is unavailable.

<details>
  <summary>Request</summary>

  ```
  message PingRequest {}
  ```
</details>

<details>
  <summary>Response</summary>

  ```
  message PingResponse {}
  ```
</details>

---

### Block Headers

The following methods query information about [block headers](#block-headers).

#### GetLatestBlockHeader

`GetLatestBlockHeader` gets the latest sealed or unsealed block header.

```
rpc GetLatestBlockHeader (GetLatestBlockHeaderRequest) returns (BlockHeaderResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetLatestBlockHeaderRequest {
    bool is_sealed
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message BlockHeaderResponse {
    flow.BlockHeader block
  }
  ```
</details>

#### GetBlockHeaderByID

`GetBlockHeaderByID` gets a block header by ID.

```
rpc GetBlockHeaderByID (GetBlockHeaderByIDRequest) returns (BlockHeaderResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetBlockHeaderByIDRequest {
    bytes id
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message BlockHeaderResponse {
    flow.BlockHeader block
  }
  ```
</details>

#### GetBlockHeaderByHeight

`GetBlockHeaderByHeight` gets a block header by height.

```
rpc GetBlockHeaderByHeight (GetBlockHeaderByHeightRequest) returns (BlockHeaderResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetBlockHeaderByHeightRequest {
    uint64 height
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message BlockHeaderResponse {
    flow.BlockHeader block
  }
  ```
</details>

---

### Blocks

The following methods query information about [full blocks]().

#### GetLatestBlock

`GetLatestBlock` gets the full payload of the latest sealed or unsealed block.

```
rpc GetLatestBlock (GetLatestBlockRequest) returns (BlockResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetLatestBlockRequest {
    bool is_sealed
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message BlockResponse {
    flow.Block block
  }
  ```
</details>

#### GetBlockByID

`GetBlockByID` gets a full block by ID.

```
rpc GetBlockByID (GetBlockByIDRequest) returns (BlockResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetBlockByIDRequest {
    bytes id
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message BlockResponse {
    flow.Block block
  }
  ```
</details>

#### GetBlockByHeight

`GetBlockByHeight` gets a full block by height.

```
rpc GetBlockByHeight (GetBlockByHeightRequest) returns (BlockResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetBlockByHeightRequest {
    uint64 height
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message BlockResponse {
    flow.Block block
  }
  ```
</details>

---

### Collections

The following methods query information about [collections]().

#### GetCollectionByID

`GetCollectionByID` gets a collection by ID.

```
rpc GetCollectionByID (GetCollectionByIDRequest) returns (CollectionResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetCollectionByIDRequest {
    bytes id
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message CollectionResponse {
    flow.Collection collection
  }
  ```
</details>

---

### Transactions

The following methods can be used to submit transactions and fetch their results.

#### SendTransaction

`SendTransaction` submits a transaction to the network.

```
rpc SendTransaction (SendTransactionRequest) returns (SendTransactionResponse)
```

`SendTransaction` determines the correct cluster of collector nodes that is responsible for collecting the transaction based on the hash of the transaction and forwards the transaction to that cluster.

<details>
  <summary>Request</summary>

  `SendTransactionRequest` message contains the transaction that is being request to be executed.

  ```
  message SendTransactionRequest {
    flow.Transaction transaction
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  `SendTransactionResponse` message contains the ID of the submitted transaction.

  ```
  message SendTransactionResponse {
    bytes id
  }
  ```
</details>

#### GetTransaction

`GetTransaction` gets a transaction by ID.

If the transaction is not found in the access node cache, the request is forwarded to a collection node.

_Currently, only transactions within the current epoch can be queried._

```
rpc GetTransaction (GetTransactionRequest) returns (TransactionResponse)
```

<details>
  <summary>Request</summary>

  `GetTransactionRequest` contains the ID of the transaction that is being queried.

  ```
  message GetTransactionRequest {
    bytes id
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  `TransactionResponse` contains the basic information about a transaction, but does not include post-execution results.

  ```
  message TransactionResponse {
    flow.Transaction transaction
  }
  ```
</details>

#### GetTransactionResult

`GetTransactionResult` gets the execution result of a transaction.

```
rpc GetTransactionResult (GetTransactionRequest) returns (TransactionResultResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetTransactionRequest {
    bytes id
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message TransactionResultResponse {
    flow.TransactionStatus status
    repeated flow.Event events
  }
  ```
</details>

--- 

### Accounts

#### GetAccount

`GetAccount` gets an account by address.

The access node queries the execution node for the account details stored as part of the execution state.

```
rpc GetAccount(GetAccountRequest) returns (GetAccountResponse)
```

<details>
  <summary>Request</summary>

  ```
  message GetAccountRequest {
    bytes address
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message GetAccountResponse {
    Account account
  }
  ```
</details>

---

### Scripts

#### ExecuteScript

`ExecuteScript` executes a read-only Cadance script against the latest sealed execution state.

This function can be used to read execution state from the Flow blockchain. The script is executed on an execution node and the return value is encoded using the [Cadence JSON value specification]().

```
rpc ExecuteScript(ExecuteScriptRequest) returns (ExecuteScriptResponse)
```

<details>
  <summary>Request</summary>

  ```
  message ExecuteScriptRequest {
    bytes script
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message ExecuteScriptResponse {
    bytes value
  }
  ```
</details>

---

### Events

#### GetEvents

`GetEvents` retrieves events matching a given query.

```
rpc GetEvents(GetEventsRequest) returns (GetEventsResponse)
```

Events can be requested for a specific block range via the `start_block` and `end_block` (inclusive) fields and further filtered by the event type via the `type` field. Event types are namespaced with the address of the account and contract in which they are declared. Events are provided by execution nodes.

<details>
  <summary>Request</summary>

  ```
  message GetEventsRequest {
    string type
    uint64 start_block
    uint64 end_block
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message GetEventsResponse {
    repeated Event events
  }
  ```
</details>

## Entities

Below are in-depth descriptions of each of the data entities returned or accepted by the Access API.

### Account

An account is a user's identity on the Flow blockchain. It contains a unique address, balance, a list of public keys and any code that has been deployed to the account. 

```
message Account {
  bytes address
  uint64 balance
  bytes code
  repeated AccountPublicKey keys
}
```

| Field        | Description    |
|--------------|----------------|
| address      | A unique account address |
| balance      | The account balance |
| code         | The code deployed to this account |
| keys         | A list of the public keys for this account |

### Account Public Key

An account public key is a reference to a public key associated with a Flow account. Accounts can be configured with zero or more public keys, each of which can be used for signature verification when authorizing a transaction.

```
message AccountPublicKey {
  bytes public_key
  uint32 sign_algo
  uint32 hash_algo
  uint32 weight
}
```

| Field         | Description    |
|---------------|----------------|
| public_key    | The public key encoded as bytes |
| sign_algo     | The signature algorithm (currently ECDSA-P256 or ECDSA-SECp256k1) |
| hash_algo     | The hashing algorithm (SHA2-256 or SHA3-256) |
| weight        | The weight assigned to this key |

### Transaction

A transaction represents a unit of computation that is submitted to the Flow network. It is signed by one or more Flow accounts, and also specifies limits for the network and computation fees required for processing.

```
message Transaction {
  bytes script
  bytes reference_block_hash
  uint64 nonce
  uint64 compute_limit
  bytes payer_account
  repeated bytes script_accounts
  repeated AccountSignature signatures
  TransactionStatus status
}
```

| Field        | Description    |
| ------------- |---------------| 
| script               | Raw source code for a Cadence script, encoded as UTF-8 bytes |
| reference_block_hash | The reference block hash is the hash of an existing block used to specify the expiry window for this transaction. Transactions expire after `N` blocks are sealed on top of the specified reference hash |
| nonce                | An arbitrary nonce |
| compute_limit        | The gas limit for the transaction execution |
| payer_account        | The account that is paying for the gas and network fees of the transaction |
| script_accounts      | The accounts that have authorized the transaction to update their state. A transaction can have zero to many script accounts. |
| signatures           | Signature of either the payer or script accounts |
| status               | One of `unknown`, `pending`, `finalized`, or `sealed` |

Note: The total weight of the  keys of each of the signing account should be greater than or equal to 1000.

### Block

A block includes the transactions as well as the other inputs (incl. the random seed) required for execution, but not the resulting state after block execution.

A block may be sealed or unsealed depending on whether it has been computed and the resulting execution state has been verified.
 
```
message Block {
  bytes id
  bytes parent_id
  uint64 height
  google.protobuf.Timestamp timestamp
  repeated CollectionGuarantee collection_guarantees
  repeated BlockSeal block_seals
  repeated bytes signatures
}
```

| Field                    | Description    |
| -------------------------|----------------|
| id                       | The hash of the entire block payload, acts as the unique identifier for the block |
| height                   | The height of the block in the chain |
| parent_id                | ID of the previous block in the chain |
| timestamp                | Timestamp when the block was proposed |
| collection_guarantees    | List of IDs of all the collections in the block |
| block_seals              | List of block seals |
| signatures               | Signatures of the consensus nodes |

### Block Header

A block header is a short description of a block and does not contain the full block contents. It contains the block hash and the hash of the previous block.

The latest sealed block header represents the last block that was added to the chain, while the latest unsealed header represents the last finalized block that has not yet been verified.

```
message BlockHeader {
  bytes id
  bytes parent_id
  uint64 height
}
```

| Field               | Description   |
|---------------------|---------------|
| id                  | The hash of the entire block payload, acts as the unique identifier for the block |
| parent_id           | ID of the previous block in the chain |
| height              | The height of the block in the chain |

### Event

An event is emitted as the result of a transaction execution. Events can either be user-defined events originating from a Cadence smart contract, or Flow system events such as `AccountCreated`, `AccountUpdated`, etc.

```
message Event {
  string type
  bytes transaction_id
  uint32 index
  bytes payload
}
```

| Field            | Description    |
| -----------------|---------------| 
| type             | The fully-qualified unique type identifier of the event |
| transaction_id   | ID of the transaction associated with this event |
| index            | index defines the ordering of events in a transaction. The first event emitted has index 0, the second has index 1, and so on |
| payload          |  Event fields encoded as  [Cadence JSON values]()|
