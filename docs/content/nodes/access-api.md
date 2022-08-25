---
title: Flow Access API Specification
sidebar_title: Access API
---

The Access API is implemented as a [gRPC service](https://grpc.io/).

A language-agnostic specification for this API is defined using [Protocol Buffers](https://developers.google.com/protocol-buffers), which can be used to generate client libraries in a variety of programming languages.

- [Flow Access API protobuf source files](https://github.com/onflow/flow/tree/master/protobuf)

## Flow access node endpoints

The Access Nodes hosted by DapperLabs are accessible at:

#### Current Mainnet
`access.mainnet.nodes.onflow.org:9000`
##### We are still in the process of aggregating the past chain data but mainnet 5 to mainnet 1 spork data can be retrieved from the Access nodes mentioned [here](/node-operation/spork/#mainnet)

#### Testnet

`access.devnet.nodes.onflow.org:9000`

#### Canarynet

`access.canary.nodes.onflow.org:9000`

#### Rate limits for Dapper Labs access nodes

Access nodes operated by Dapper Labs are [rate limited](/access-api-rate-limits).

---

#### Alchemy Access Nodes 

Our partner, [Alchemy](https://alchemy.com) is offering robust access node infrastructure in addition to free logging, monitoring, and more tooling via their dashboard to all builders on Flow.
[Read their documentation](https://docs.alchemy.com/flow/guides/getting-started) and 
[sign up](https://www.alchemy.com/flow) to get access to their tools. 
You can find support on their [Discord server](https://discord.gg/6X635zrNUg).

**Note**: You will need to configure an API key through Alchemy to use these access nodes.

**Alchemy Testnet**:

`flow-testnet.g.alchemy.com:443`

**Alchemy Mainnet**:

`flow-mainnet.g.alchemy.com:443​`

---

## Ping

`Ping` will return a successful response if the Access API is ready and available.

```protobuf
rpc Ping(PingRequest) returns (PingResponse)
```

If a ping request returns an error or times out, it can be assumed that the Access API is unavailable.

<details>
  <summary>Request</summary>

```protobuf
message PingRequest {}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message PingResponse {}
```

</details>

---

## Block Headers

The following methods query information about [block headers](#block-header).

### GetLatestBlockHeader

`GetLatestBlockHeader` gets the latest sealed or unsealed [block header](#block-header).

```protobuf
rpc GetLatestBlockHeader (GetLatestBlockHeaderRequest) returns (BlockHeaderResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetLatestBlockHeaderRequest {
  bool is_sealed
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message BlockHeaderResponse {
  flow.BlockHeader block
}
```

</details>

### GetBlockHeaderByID

`GetBlockHeaderByID` gets a [block header](#block-header) by ID.

```protobuf
rpc GetBlockHeaderByID (GetBlockHeaderByIDRequest) returns (BlockHeaderResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetBlockHeaderByIDRequest {
  bytes id
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message BlockHeaderResponse {
  flow.BlockHeader block
}
```

</details>

### GetBlockHeaderByHeight

`GetBlockHeaderByHeight` gets a [block header](#block-header) by height.

```protobuf
rpc GetBlockHeaderByHeight (GetBlockHeaderByHeightRequest) returns (BlockHeaderResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetBlockHeaderByHeightRequest {
  uint64 height
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message BlockHeaderResponse {
  flow.BlockHeader block
}
```

</details>

---

## Blocks

The following methods query information about [full blocks](#block).

### GetLatestBlock

`GetLatestBlock` gets the full payload of the latest sealed or unsealed [block](#block).

```protobuf
rpc GetLatestBlock (GetLatestBlockRequest) returns (BlockResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetLatestBlockRequest {
  bool is_sealed
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message BlockResponse {
  flow.Block block
}
```

</details>

### GetBlockByID

`GetBlockByID` gets a [full block](#block) by ID.

```protobuf
rpc GetBlockByID (GetBlockByIDRequest) returns (BlockResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetBlockByIDRequest {
  bytes id
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message BlockResponse {
  flow.Block block
}
```

</details>

### GetBlockByHeight

`GetBlockByHeight` gets a [full block](#block) by height.

```protobuf
rpc GetBlockByHeight (GetBlockByHeightRequest) returns (BlockResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetBlockByHeightRequest {
  uint64 height
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message BlockResponse {
  flow.Block block
}
```

</details>

---

## Collections

The following methods query information about [collections](#collection).

### GetCollectionByID

`GetCollectionByID` gets a [collection](#collection) by ID.

```protobuf
rpc GetCollectionByID (GetCollectionByIDRequest) returns (CollectionResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetCollectionByIDRequest {
  bytes id
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message CollectionResponse {
  flow.Collection collection
}
```

</details>

---

## Transactions

The following methods can be used to submit [transactions](#transaction) and fetch their results.

### SendTransaction

`SendTransaction` submits a transaction to the network.

```protobuf
rpc SendTransaction (SendTransactionRequest) returns (SendTransactionResponse)
```

`SendTransaction` determines the correct cluster of collection nodes that is responsible for collecting the transaction based on the hash of the transaction and forwards the transaction to that cluster.

<details>
  <summary>Request</summary>

`SendTransactionRequest` message contains the transaction that is being request to be executed.

```protobuf
message SendTransactionRequest {
  flow.Transaction transaction
}
```

</details>

<details>
  <summary>Response</summary>

`SendTransactionResponse` message contains the ID of the submitted transaction.

```protobuf
message SendTransactionResponse {
  bytes id
}
```

</details>

### GetTransaction

`GetTransaction` gets a [transaction](#transaction) by ID.

If the transaction is not found in the access node cache, the request is forwarded to a collection node.

_Currently, only transactions within the current epoch can be queried._

```protobuf
rpc GetTransaction (GetTransactionRequest) returns (TransactionResponse)
```

<details>
  <summary>Request</summary>

`GetTransactionRequest` contains the ID of the transaction that is being queried.

```protobuf
message GetTransactionRequest {
  bytes id
}
```

</details>

<details>
  <summary>Response</summary>

`TransactionResponse` contains the basic information about a transaction, but does not include post-execution results.

```protobuf
message TransactionResponse {
  flow.Transaction transaction
}
```

</details>

### GetTransactionResult

`GetTransactionResult` gets the execution result of a transaction.

```protobuf
rpc GetTransactionResult (GetTransactionRequest) returns (TransactionResultResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetTransactionRequest {
  bytes id
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message TransactionResultResponse {
  flow.TransactionStatus status
  uint32 status_code
  string error_message
  repeated flow.Event events
}
```

</details>

---

## Accounts

### GetAccount

`GetAccount` gets an [account](#account) by address at the latest sealed block.

⚠️ Warning: this function is deprecated. It behaves identically to `GetAccountAtLatestBlock` and will be removed in a future version.

```protobuf
rpc GetAccount(GetAccountRequest) returns (GetAccountResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetAccountRequest {
  bytes address
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message GetAccountResponse {
  Account account
}
```

</details>

### GetAccountAtLatestBlock

`GetAccountAtLatestBlock` gets an [account](#account) by address.

The access node queries an execution node for the account details, which are stored as part of the sealed execution state.

```protobuf
rpc GetAccountAtLatestBlock(GetAccountAtLatestBlockRequest) returns (AccountResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetAccountAtLatestBlockRequest {
  bytes address
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message AccountResponse {
  Account account
}
```

</details>

### GetAccountAtBlockHeight

`GetAccountAtBlockHeight` gets an [account](#accounts) by address at the given block height.

The access node queries an execution node for the account details, which are stored as part of the execution state.

```protobuf
rpc GetAccountAtBlockHeight(GetAccountAtBlockHeightRequest) returns (AccountResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message GetAccountAtBlockHeightRequest {
  bytes address
  uint64 block_height
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message AccountResponse {
  Account account
}
```

## </details>

## Scripts

### ExecuteScriptAtLatestBlock

`ExecuteScriptAtLatestBlock` executes a read-only Cadence script against the latest sealed execution state.

This method can be used to read execution state from the blockchain. The script is executed on an execution node and the return value is encoded using the [JSON-Cadence data interchange format](/cadence/json-cadence-spec/).

```protobuf
rpc ExecuteScriptAtLatestBlock (ExecuteScriptAtLatestBlockRequest) returns (ExecuteScriptResponse)
```

This method is a shortcut for the following:

```
header = GetLatestBlockHeader()
value = ExecuteScriptAtBlockID(header.ID, script)
```

<details>
  <summary>Request</summary>

```protobuf
message ExecuteScriptAtLatestBlockRequest {
  bytes script
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message ExecuteScriptResponse {
  bytes value
}
```

</details>

### ExecuteScriptAtBlockID

`ExecuteScriptAtBlockID` executes a ready-only Cadence script against the execution state at the block with the given ID.

This method can be used to read account state from the blockchain. The script is executed on an execution node and the return value is encoded using the [JSON-Cadence data interchange format](/cadence/json-cadence-spec/).

```protobuf
rpc ExecuteScriptAtBlockID (ExecuteScriptAtBlockIDRequest) returns (ExecuteScriptResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message ExecuteScriptAtBlockIDRequest {
  bytes block_id
  bytes script
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message ExecuteScriptResponse {
  bytes value
}
```

</details>

### ExecuteScriptAtBlockHeight

`ExecuteScriptAtBlockHeight` executes a ready-only Cadence script against the execution state at the given block height.

This method can be used to read account state from the blockchain. The script is executed on an execution node and the return value is encoded using the [JSON-Cadence data interchange format](/cadence/json-cadence-spec/).

```protobuf
rpc ExecuteScriptAtBlockHeight (ExecuteScriptAtBlockHeightRequest) returns (ExecuteScriptResponse)
```

<details>
  <summary>Request</summary>

```protobuf
message ExecuteScriptAtBlockHeightRequest {
  uint64 block_height
  bytes script
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message ExecuteScriptResponse {
  bytes value
}
```

</details>

---

## Events

The following methods can be used to query for on-chain [events](#event).

### GetEventsForHeightRange

`GetEventsForHeightRange` retrieves [events](#event) emitted within the specified block range.

```protobuf
rpc GetEventsForHeightRange(GetEventsForHeightRangeRequest) returns (GetEventsForHeightRangeResponse)
```

Events can be requested for a specific sealed block range via the `start_height` and `end_height` (inclusive) fields and further filtered by event type via the `type` field.

If `start_height` is greater than the current sealed chain height, then this method will return an error.

If `end_height` is greater than the current sealed chain height, then this method will return events up to and including the latest sealed block.

The event results are grouped by block, with each group specifying a block ID, height and block timestamp.

Event types are name-spaced with the address of the account and contract in which they are declared.

<details>
  <summary>Request</summary>

```protobuf
message GetEventsForHeightRangeRequest {
  string type
  uint64 start_height = 2;
  uint64 end_height = 3;
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message EventsResponse {
  message Result {
    bytes block_id = 1;
    uint64 block_height = 2;
    repeated entities.Event events = 3;
    google.protobuf.Timestamp block_timestamp = 4;
  }
  repeated Result results = 1;
}
```

</details>

### GetEventsForBlockIDs

`GetEventsForBlockIDs` retrieves [events](#event) for the specified block IDs and event type.

```protobuf
rpc GetEventsForBlockIDs(GetEventsForBlockIDsRequest) returns (GetEventsForBlockIDsResponse)
```

Events can be requested for a list of block IDs via the `block_ids` field and further filtered by event type via the `type` field.

The event results are grouped by block, with each group specifying a block ID, height and block timestamp.

<details>
  <summary>Request</summary>

```protobuf
message GetEventsForBlockIDsRequest {
  string type = 1;
  repeated bytes block_ids = 2;
}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message EventsResponse {
  message Result {
    bytes block_id = 1;
    uint64 block_height = 2;
    repeated entities.Event events = 3;
    google.protobuf.Timestamp block_timestamp = 4;
  }
  repeated Result results = 1;
}
```

</details>

---

## Network Parameters

Network parameters provide information about the Flow network. Currently, it only includes the chain ID.
The following method can be used to query for network parameters.

### GetNetworkParameters

`GetNetworkParameters` retrieves the network parameters.

```protobuf
rpc GetNetworkParameters (GetNetworkParametersRequest) returns (GetNetworkParametersResponse)
```

<details>
<summary>Request</summary>

```protobuf
message GetNetworkParametersRequest {}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message GetNetworkParametersResponse {
  string chain_id = 1;
}
```

| Field    | Description                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| chain_id | Chain ID helps identify the Flow network. It can be one of `flow-mainnet`, `flow-testnet` or `flow-emulator` |

</details>

---

## Protocol state snapshot

The following method can be used to query the latest protocol state [snapshot](https://github.com/onflow/flow-go/blob/master/state/protocol/snapshot.go).

### GetLatestProtocolStateSnapshotRequest

`GetLatestProtocolStateSnapshotRequest` retrieves the latest Protocol state snapshot serialized as a byte array.
It is used by Flow nodes joining the network to bootstrap a space-efficient local state.

```protobuf
rpc GetLatestProtocolStateSnapshot (GetLatestProtocolStateSnapshotRequest) returns (ProtocolStateSnapshotResponse);
```

<details>
  <summary>Request</summary>

```protobuf
message GetLatestProtocolStateSnapshotRequest {}
```

</details>

<details>
  <summary>Response</summary>

```protobuf
message ProtocolStateSnapshotResponse {
  bytes serializedSnapshot = 1;
}
```
</details>

## Execution results

The following method can be used to query the for [execution results](https://github.com/onflow/flow-go/blob/master/model/flow/execution_result.go) for a given block.

### GetExecutionResultForBlockID

`GetExecutionResultForBlockID` retrieves execution result for given block. It is different from Transaction Results,
and contain data about chunks/collection level execution results rather than particular transactions. 
Particularly, it contains `EventsCollection` hash for every chunk which can be used to verify the events for a block.

```protobuf
rpc GetExecutionResultForBlockID(GetExecutionResultForBlockIDRequest) returns (ExecutionResultForBlockIDResponse);
```

<details>
    <summary>Request</summary>

```protobuf
message GetExecutionResultForBlockIDRequest {
  bytes block_id = 1;
}
```
</details>

<details>
    <summary>Response</summary>

```protobuf
message ExecutionResultForBlockIDResponse {
  flow.ExecutionResult execution_result = 1;
}
```

</details>


## Entities

Below are in-depth descriptions of each of the data entities returned or accepted by the Access API.

## Block

```protobuf
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

| Field                 | Description                                                                                                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | SHA3-256 hash of the entire block payload                                                                                                                                                                                                                                                                         |
| height                | Height of the block in the chain                                                                                                                                                                                                                                                                                  |
| parent_id             | ID of the previous block in the chain                                                                                                                                                                                                                                                                             |
| timestamp             | Timestamp of when the proposer claims it constructed the block. <br/> **NOTE**: It is included by the proposer, there are no guarantees on how much the time stamp can deviate from the true time the block was published. <br/> Consider observing blocks' status changes yourself to get a more reliable value. |
| collection_guarantees | List of [collection guarantees](#collection-guarantee)                                                                                                                                                                                                                                                            |
| block_seals           | List of [block seals](#block-seal)                                                                                                                                                                                                                                                                                |
| signatures            | BLS signatures of consensus nodes                                                                                                                                                                                                                                                                                 |

The detailed semantics of block formation are covered in the [block formation guide](/concepts/transaction-lifecycle#block-formation).

## Block Header

A block header is a summary of a [block](#block) and contains only the block ID, height, and parent block ID.

```protobuf
message BlockHeader {
  bytes id
  bytes parent_id
  uint64 height
}
```

| Field     | Description                               |
| --------- | ----------------------------------------- |
| id        | SHA3-256 hash of the entire block payload |
| parent_id | ID of the previous block in the chain     |
| height    | Height of the block in the chain          |

## Block Seal

A block seal is an attestation that the execution result of a specific [block](#block) has been verified and approved by a quorum of verification nodes.

```protobuf
message BlockSeal {
  bytes block_id
  bytes execution_receipt_id
  repeated bytes execution_receipt_signatures
  repeated bytes result_approval_signatures
}
```

| Field                        | Description                                                            |
| ---------------------------- | ---------------------------------------------------------------------- |
| block_id                     | ID of the block being sealed                                           |
| execution_receipt_id         | ID execution receipt being sealed                                      |
| execution_receipt_signatures | BLS signatures of verification nodes on the execution receipt contents |
| result_approval_signatures   | BLS signatures of verification nodes on the result approval contents   |

## Collection

A collection is a batch of [transactions](#transaction) that have been included in a block. Collections are used to improve consensus throughput by increasing the number of transactions per block.

```protobuf
message Collection {
  bytes id
  repeated bytes transaction_ids
}
```

| Field           | Description                                       |
| --------------- | ------------------------------------------------- |
| id              | SHA3-256 hash of the collection contents          |
| transaction_ids | Ordered list of transaction IDs in the collection |

## Collection Guarantee

A collection guarantee is a signed attestation that specifies the collection nodes that have guaranteed to store and respond to queries about a collection.

```protobuf
message CollectionGuarantee {
  bytes collection_id
  repeated bytes signatures
}
```

| Field         | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| collection_id | SHA3-256 hash of the collection contents                           |
| signatures    | BLS signatures of the collection nodes guaranteeing the collection |

## Transaction

A transaction represents a unit of computation that is submitted to the Flow network.

```protobuf
message Transaction {
  bytes script
  repeated bytes arguments
  bytes reference_block_id
  uint64 gas_limit
  TransactionProposalKey proposal_key
  bytes payer
  repeated bytes authorizers
  repeated TransactionSignature payload_signatures
  repeated TransactionSignature envelope_signatures
}

message TransactionProposalKey {
  bytes address
  uint32 key_id
  uint64 sequence_number
}

message TransactionSignature {
  bytes address
  uint32 key_id
  bytes signature
}
```

| Field                         | Description                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| script                        | Raw source code for a Cadence script, encoded as UTF-8 bytes                                         |
| arguments                     | Arguments passed to the Cadence script, encoded as [JSON-Cadence](/cadence/json-cadence-spec/) bytes |
| reference_block_id            | Block ID used to determine transaction expiry                                                        |
| [proposal_key](#proposal-key) | Account key used to propose the transaction                                                          |
| payer                         | Address of the payer account                                                                         |
| authorizers                   | Addresses of the transaction authorizers                                                             |
| signatures                    | [Signatures](#transaction-signatures) from all signer accounts                                       |

The detailed semantics of transaction creation, signing and submission are covered in the [transaction submission guide](/concepts/transaction-signing).

### Proposal Key

The proposal key is used to specify a sequence number for the transaction. Sequence numbers are covered in more detail [here](/concepts/accounts-and-keys#sequence-numbers).

| Field           | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| address         | Address of proposer account                                                          |
| key_id          | ID of proposal key on the proposal account                                           |
| sequence_number | [Sequence number](/concepts/accounts-and-keys#sequence-numbers) for the proposal key |

### Transaction Signature

| Field     | Description                               |
| --------- | ----------------------------------------- |
| address   | Address of the account for this signature |
| key_id    | ID of the account key                     |
| signature | Raw signature byte data                   |

### Transaction Status

```protobuf
enum TransactionStatus {
  UNKNOWN = 0;
  PENDING = 1;
  FINALIZED = 2;
  EXECUTED = 3;
  SEALED = 4;
  EXPIRED = 5;
}
```

| Value     | Description                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UNKNOWN   | The transaction status is not known.                                                                                                      |
| PENDING   | The transaction has been received by a collector but not yet finalized in a block.                                                        |
| FINALIZED | The consensus nodes have finalized the block that the transaction is included in                                                          |
| EXECUTED  | The execution nodes have produced a result for the transaction                                                                            |
| SEALED    | The verification nodes have verified the transaction (the block in which the transaction is) and the seal is included in the latest block |
| EXPIRED   | The transaction was submitted past its expiration block height.                                                                           |

## Account

An account is a user's identity on Flow. It contains a unique address, a balance, a list of public keys and the code that has been deployed to the account.

```protobuf
message Account {
  bytes address
  uint64 balance
  bytes code
  repeated AccountKey keys
  map<string, bytes> contracts
}
```

| Field     | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| address   | A unique account identifier                                                 |
| balance   | The account balance                                                         |
| code      | The code deployed to this account (**deprecated**, use `contracts` instead) |
| keys      | A list of keys configured on this account                                   |
| contracts | A map of contracts or contract interfaces deployed on this account          |

The `code` and `contracts` fields contain the raw Cadence source code, encoded as UTF-8 bytes.

More information on accounts can be found [here](/concepts/accounts-and-keys/).

### Account Key

An account key is a reference to a public key associated with a Flow account. Accounts can be configured with zero or more public keys, each of which can be used for signature verification when authorizing a transaction.

```protobuf
message AccountKey {
  uint32 id
  bytes public_key
  uint32 sign_algo
  uint32 hash_algo
  uint32 weight
  uint32 sequence_number
  bool revoked
}
```

| Field           | Description                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| id              | Index of the key within the account, used as a unique identifier                        |
| public_key      | Public key encoded as bytes                                                             |
| sign_algo       | [Signature algorithm](/concepts/accounts-and-keys#supported-signature--hash-algorithms) |
| hash_algo       | [Hash algorithm](/concepts/accounts-and-keys#supported-signature--hash-algorithms)      |
| weight          | [Weight assigned to the key](/concepts/accounts-and-keys#weighted-keys)                 |
| sequence_number | [Sequence number for the key](/concepts/accounts-and-keys#sequence-numbers)             |
| revoked         | Flag indicating whether or not the key has been revoked                                 |

More information on account keys, key weights and sequence numbers can be found [here](/concepts/accounts-and-keys/).

## Event

An event is emitted as the result of a [transaction](#transaction) execution. Events are either user-defined events originating from a Cadence smart contract, or built-in Flow system events.

```protobuf
message Event {
  string type
  bytes transaction_id
  uint32 transaction_index
  uint32 event_index
  bytes payload
}
```

| Field             | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| type              | Fully-qualified unique type identifier for the event                       |
| transaction_id    | ID of the transaction the event was emitted from                           |
| transaction_index | Zero-based index of the transaction within the block                       |
| event_index       | Zero-based index of the event within the transaction                       |
| payload           | Event fields encoded as [JSON-Cadence values](/cadence/json-cadence-spec/) |

## Execution Result

Execution result for a particular block.

```protobuf
message ExecutionResult {
  bytes previous_result_id
  bytes block_id
  repeated Chunk chunks
  repeated ServiceEvent service_events
}
```

| Field              | Description                                          |
| ------------------ | ---------------------------------------------------- |
| previous_result_id | Identifier of parent block execution result          |
| block_id           | ID of the block this execution result corresponds to |
| chunks             | Zero or more chunks                                  |
| service_events     | Zero or more service events                          |


### Chunk

Chunk described execution information for given collection in a block

```protobuf
message Chunk {
  bytes start_state
  bytes event_collection
  bytes block_id
  uint64 total_computation_used
  uint64 number_of_transactions
  uint64 index
  bytes end_state
}
```

| Field                  | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| start_state            | State commitment at start of the chunk               |
| event_collection       | Hash of events emitted by transactions in this chunk |
| block_id               | Identifier of a block                                |
| total_computation_used | Total computation used by transactions in this chunk |
| number_of_transactions | Number of transactions in a chunk                    |
| index                  | Index of chunk inside a block (zero-based)           |
| end_state              | State commitment after executing chunk               |

### Service Event

Special type of events emitted in system chunk used for controlling Flow system.

```protobuf
message ServiceEvent {
  string type;
  bytes payload;
}
```

| Field   | Description                         |
| ------- | ----------------------------------- |
| type    | Type of an event                    |
| payload | JSON-serialized content of an event |