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
  - [Block](#block)
  - [Block Header](#block-header)
  - [Block Seal](#block-seal)
  - [Collection](#collection)
  - [Collection Guarantee](#collection-guarantee)
  - [Transaction](#transaction)
  - [Account](#account)
    - [Account Public Key](#account-public-key)
  - [Event](#event)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## RPC Service

The following functions are implemented as a [gRPC service](https://grpc.io/). 

The language-agnostic spec for this API is defined using [Protocol Buffers](https://developers.google.com/protocol-buffers), which allows for client libraries to be generated in most popular programming languages.

- [Flow Access API Protobuf source files](/proto)

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

The following methods query information about [block headers](#block-header).

#### GetLatestBlockHeader

`GetLatestBlockHeader` gets the latest sealed or unsealed [block header](#block-header).

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

`GetBlockHeaderByID` gets a [block header](#block-header) by ID.

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

`GetBlockHeaderByHeight` gets a [block header](#block-header) by height.

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

The following methods query information about [full blocks](#block).

#### GetLatestBlock

`GetLatestBlock` gets the full payload of the latest sealed or unsealed [block](#block).

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

`GetBlockByID` gets a [full block](#block) by ID.

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

`GetBlockByHeight` gets a [full block](#block) by height.

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

The following methods query information about [collections](#collection).

#### GetCollectionByID

`GetCollectionByID` gets a [collection](#collection) by ID.

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

The following methods can be used to submit [transactions](#transaction) and fetch their results.

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

`GetTransaction` gets a [transaction](#transaction) by ID.

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

`GetAccount` gets an [account](#account) by address.

The access node queries an execution node for the account details, which are stored as part of the execution state.

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

#### ExecuteScriptAtLatestBlock

`ExecuteScriptAtLatestBlock` executes a read-only Cadance script against the latest sealed execution state.

This method can be used to read execution state from the blockchain. The script is executed on an execution node and the return value is encoded using the [JSON-Cadence data interchange format](/docs/json-cadence-spec.md).

```
rpc ExecuteScriptAtLatestBlock (ExecuteScriptAtLatestBlockRequest) returns (ExecuteScriptResponse)
```

This method is a shortcut for the following:

```
header = GetLatestBlockHeader()
value = ExecuteScriptAtBlockID(header.ID, script)
```

<details>
  <summary>Request</summary>

  ```
  message ExecuteScriptAtLatestBlockRequest {
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

#### ExecuteScriptAtBlockID

`ExecuteScriptAtBlockID` executes a ready-only Cadence script against the execution state at the block with the given ID.

This method can be used to read account state from the blockchain. The script is executed on an execution node and the return value is encoded using the [Cadence JSON value specification](/docs/cadence-json-spec.md).

```
rpc ExecuteScriptAtBlockID (ExecuteScriptAtBlockIDRequest) returns (ExecuteScriptResponse)
```

<details>
  <summary>Request</summary>

  ```
  message ExecuteScriptAtBlockIDRequest {
    bytes block_id
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

#### ExecuteScriptAtBlockHeight

`ExecuteScriptAtBlockHeight` executes a ready-only Cadence script against the execution state at the given block height.

This method can be used to read account state from the blockchain. The script is executed on an execution node and the return value is encoded using the [Cadence JSON value specification](/docs/cadence-json-spec.md).

```
rpc ExecuteScriptAtBlockHeight (ExecuteScriptAtBlockHeightRequest) returns (ExecuteScriptResponse)
```

<details>
  <summary>Request</summary>

  ```
  message ExecuteScriptAtBlockHeightRequest {
    uint64 block_height
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

#### GetEventsForHeightRange

`GetEventsForHeightRange` retrieves events matching a given query.

```
rpc GetEventsForHeightRange(GetEventsForHeightRangeRequest) returns (GetEventsForHeightRangeResponse)
```

Events can be requested for a specific sealed block range via the `start_height` and `end_height` (inclusive) fields and further filtered by the event type via the `type` field.
If maximum chain height is less than end_height, then events until and including maximum height will be returned
Event types are namespaced with the address of the account and contract in which they are declared. Events are provided by execution nodes.

<details>
  <summary>Request</summary>

  ```
  message GetEventsForHeightRangeRequest {
    string type
    uint64 start_height = 2;
    uint64 end_height = 3;
  }
  ```
</details>

<details>
  <summary>Response</summary>
  
  ```
  message GetEventsForHeightRangeResponse {
    repeated Event events
  }
  ```
</details>

#### GetEventsForBlockIDs

`GetEventsForBlockIDs` retrieves all events for the given block ids.

```
rpc GetEventsForBlockIDs(GetEventsForBlockIDsRequest) returns (GetEventsForBlockIDsResponse)
```

Events can be requested for a list of block ids via the `block_ids` field and further filtered by the event type via the `type` field.

<details>
  <summary>Request</summary>

  ```
  message GetEventsForBlockIDsRequest {
    string type = 1;
    repeated bytes block_ids = 2;
  }
  ```
</details>

<details>
  <summary>Response</summary>

  ```
  message GetEventsForBlockIDsResponse {
    repeated flow.Event events = 1;
  }
  ```
</details>

## Entities

Below are in-depth descriptions of each of the data entities returned or accepted by the Access API.

### Block
 
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
| id                       | SHA3-256 hash of the entire block payload |
| height                   | Height of the block in the chain |
| parent_id                | ID of the previous block in the chain |
| timestamp                | Timestamp of when the block was proposed |
| collection_guarantees    | List of [collection guarantees](#collection-guarantee) |
| block_seals              | List of [block seals](#block-seal) |
| signatures               | BLS signatures of consensus nodes |

The detailed semantics of block formation are covered in the [block formation guide](/docs/transaction-lifecycle.md#block-formation).

### Block Header

A block header is a summary of a block and contains only the block ID, height, and parent block ID.

```
message BlockHeader {
  bytes id
  bytes parent_id
  uint64 height
}
```

| Field               | Description   |
|---------------------|---------------|
| id                  | SHA3-256 hash of the entire block payload |
| parent_id           | ID of the previous block in the chain |
| height              | Height of the block in the chain |

### Block Seal

A block seal is an attestation that the execution result of a specific block has been verified and approved by a quorum of verification nodes.

```
message BlockSeal {
  bytes block_id
  bytes execution_receipt_id
  repeated bytes execution_receipt_signatures
  repeated bytes result_approval_signatures
}
```

| Field                        | Description   |
|------------------------------|---------------|
| block_id                     | ID of the block being sealed |
| execution_receipt_id         | ID execution receipt being sealed |
| execution_receipt_signatures | BLS signatures of verification nodes on the execution receipt contents |
| result_approval_signatures   | BLS signatures of verification nodes on the result approval contents |

### Collection

A collection is a batch of transactions that have been included in a block. Collections are used to improve consensus throughput by increasing the number of transactions per block.

```
message Collection {
  bytes id
  repeated bytes transaction_ids
}
```

| Field               | Description   |
|---------------------|---------------|
| id                  | SHA3-256 hash of the collection contents |
| transaction_ids     | Ordered list of transaction IDs in the collection |

### Collection Guarantee

A collection guarantee is a signed attestation that specifies the collection nodes that have guaranteed to store and respond to queries about a collection.

```
message CollectionGuarantee {
  bytes collection_id
  repeated bytes signatures
}
```

| Field               | Description   |
|---------------------|---------------|
| collection_id       | SHA3-256 hash of the collection contents |
| signatures          | BLS signatures of the collection nodes guaranteeing the collection |


### Transaction

A transaction represents a unit of computation that is submitted to the Flow network.

```
message Transaction {
  bytes script
  bytes reference_block_id
  bytes payer_account
  repeated bytes script_accounts
  repeated AccountSignature signatures
  TransactionStatus status
}
```

| Field                | Description    |
| ---------------------|----------------| 
| script               | Raw source code for a Cadence script, encoded as UTF-8 bytes |
| reference_block_id   | Block ID used to determine transaction expiry |
| payer_account        | Address of account paying for gas and network fees |
| script_accounts      | Addresses of accounts authorizing the transaction to mutate their state |
| signatures           | Signatures from payer and script accounts |
| status               | One of `unknown`, `pending`, `finalized`, or `sealed` |

The detailed semantics of transaction creation, signing and submission are covered in the [transaction submission guide](/docs/transaction-lifecycle.md#submission).

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

More information on accounts can be found [here](/docs/accounts-and-keys.md).

#### Account Public Key

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
| public_key    | Public key encoded as bytes |
| sign_algo     | [Signature algorithm](/docs/accounts-and-keys.md#supported-signature--hashing-algorithms) |
| hash_algo     | [Hashing algorithm](/docs/accounts-and-keys.md#supported-signature--hashing-algorithms) |
| weight        | [Weight assigned to the key](/docs/accounts-and-keys.md#weighted-keys) |

More information on account keys and weights can be found [here](/docs/accounts-and-keys.md).

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
| -----------------|----------------| 
| type             | Fully-qualified unique type identifier for the event |
| transaction_id   | ID of the transaction the event was emitted from |
| index            | Zero-based index of the event within the transaction |
| payload          | Event fields encoded as [JSON-Cadence values](/docs/json-cadence-spec.md)|
