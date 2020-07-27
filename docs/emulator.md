# Flow Emulator

> Version 0.7.0

The Flow Emulator is a lightweight tool that emulates
the behaviour of the real Flow network.

The emulator exposes a gRPC server that implements the
[Flow Access API](access-api-spec.md), which is designed
to have near feature parity with the real network API.

## Running the emulator with the Flow CLI

The emulator is bundled with the [Flow CLI](cli.md),
a command-line interface for working with Flow.

### Installation

Follow [these steps](cli.md) to install the Flow CLI.

### Starting the server

You can start the emulator with the Flow CLI:

```shell script
flow emulator start --init
```

This command has several useful flags:

- `-v` Enable verbose logging (this is useful for debugging)
- `-p` Port to listen on (default: `3569`)
- `--block-time` Time interval between blocks (default: `5s`)
- `--persist` Enable persistent storage
  (uses the [Badger](https://github.com/dgraph-io/badger) key-value DB)
- `--dbpath` Path to store database (default: `./flowdb`)

> ⚙️ All configuration options and flags [are listed below](#all-configuration-options).

### Using the emulator in a project

You can start the emulator in your project context by running the above command
in the same directory as `flow.json`. This will configure the emulator with your
project's service account, meaning you can use it to sign and submit transactions.

## Running the emulator with Docker

Docker builds for the emulator are automatically built and pushed to
`gcr.io/dl-flow/emulator`, tagged by commit and semantic version.

### Configuration

In addition to using command-line flags, the emulator can also be configured
 with environment variables, which can be passed into the Docker image.

Here's a sample configuration:

```sh
FLOW_VERBOSE=true
FLOW_PORT=3596
FLOW_BLOCKTIME=5s
FLOW_PERSIST=true
FLOW_DBPATH=./path/to/db
```

Here's how to run the emulator Docker image on port 9001 in verbose mode:

```sh
docker run -e FLOW_PORT=9001 -e FLOW_VERBOSE=true gcr.io/dl-flow/emulator
```

> ⚙️ All environment variable options [are listed below](#all-configuration-options).

#### Accounts

The emulator uses a `flow.json` configuration file to store persistent
configuration, including account keys. In order to start, at least one
key (called the service key) must be configured. This key is used by default
when creating other accounts.

Because Docker does not persist files by default, this file will be
re-generated each time the emulator image restarts. For situations
where it is important that the emulator always uses the same service key (ie.
unit tests) you can specify a hex-encoded key as an environment variable.

```sh
docker run -e FLOW_SERVICEPRIVATEKEY=<hex-encoded key> gcr.io/dl-flow/emulator
```

To generate a service key, use the `keys generate` command in the Flow CLI.

```sh
flow keys generate
```

## All Configuration Options

| Environment Variable    | CLI Flag              | Default      | Description |
|-------------------------|-----------------------|--------------|-------------|
| FLOW_PORT               | `--port,-p`           | `3569`       | port to run RPC server |
| FLOW_HTTPPORT           | `--http-port`         | `8080`       | port to run HTTP server |
| FLOW_VERBOSE            | `--verbose,-v`        | `false`      | enable verbose logging |
| FLOW_BLOCKTIME          | `--block-time,-b`     | `5s`         | time between sealed blocks |
| FLOW_SERVICEPRIVATEKEY  | `--service-priv-key`  | optional     | service account private key |
| FLOW_SERVICEPUBLICKEY   | `--service-pub-key`   | optional     | service account public key |
| FLOW_SERVICEKEYSIGALGO  | `--service-sig-algo`  | `ECDSA_P256` | service account key signature algorithm |
| FLOW_SERVICEKEYHASHALGO | `--service-hash-algo` | `SHA3_256`   | service account key hash algorithm |
| FLOW_INIT               | `--init`              | `false`      | whether to initialize a new account profile |
| FLOW_GRPCDEBUG          | `--grpc-debug`        | `false`      | enable gRPC server reflection for debugging with grpc_cli |
| FLOW_PERSIST            | `--persist`           | `false`      | enable persistent storage |
| FLOW_DBPATH             | `--dbpath`            | `./flowdb`   | path to database directory |

# Changelog

## Version 0.5.1

### SDK Compatibility

| Flow Go SDK v0.6.0 | Flow Go SDK v0.7.0 | Flow Go SDK v0.7.1 |
|--|--|--|
|❌|✅|✅|

### 🐞 Bug Fixes

- Upgrade to Cadence `v0.5.1`: https://github.com/onflow/cadence/releases/tag/v0.5.1

### ⚙️ Installing & Upgrading

#### Flow CLI

This version of the emulator is included in v0.5.1 of the [Flow CLI](./cli.md).

#### Docker

```
docker run -p 3569:3569 gcr.io/dl-flow/emulator:v0.5.1
```

---

## Version 0.7.0

## SDK Compatibility

| Flow Go SDK v0.6.0 | Flow Go SDK v0.7.0 | Flow Go SDK v0.7.1 | Flow Go SDK v0.8.0
|--|--|--|--|
|❌|✅|✅|✅|

## ⭐ Features

`GetAccount` was reintroduced to provide backwards compatibility for clients that do not yet support the `GetAccountAtLatestBlock` method.

This method is simply an alias for `GetAccountAtLatestBlock`. The emulator now implements _both_ methods.

---

## Version 0.5.0

### SDK Compatibility

| Flow Go SDK v0.6.0 | Flow Go SDK v0.7.0 | Flow Go SDK v0.7.1 |
|--|--|--|
|❌|✅|✅|

### 💥  Breaking Changes

#### Cadence v0.5.0

The emulator has been upgraded to use the latest Cadence release. Please view the Cadence release notes for an overview of the features and changes introduced in this release: https://github.com/onflow/cadence/releases/tag/v0.5.0

**Byte Array Literals**

Cadence now represents all byte arrays as `[UInt8]` rather than `[Int]`. This affects the following functions:

- `AuthAccount.addPublicKey(publicKey: [Int])` => `AuthAccount.addPublicKey(publicKey: [UInt8])` 
- `AuthAccount.setCode(code: [Int])` => `AuthAccount.setCode(code: [UInt8])`

However, array literals such as the following will still be inferred as `[Int]`, meaning that they can't be used directly:

```
myAccount.addPublicKey([1, 2, 3])
```

There are two recommended workarounds:
- Pass byte arrays as hexadecimal strings and decode in Cadence [JS Example](https://github.com/onflow/flow-js-sdk/blob/master/packages/six-create-account/src/six-create-account.js#L10-L18)
- Pass byte arrays as transaction arguments typed as `[UInt8]` [Go Example](https://github.com/onflow/flow-go-sdk/blob/master/templates/accounts.go#L28-L63)

#### Data storage format

The underlying data format used for persistent storage has changed from `gob` encoding to CBOR (https://github.com/dapperlabs/flow-emulator/pull/72). This means that existing persisted data will not be compatible with `v0.5.0` onwards.

### ⭐ Features

- The `ExecuteScriptAtLatestBlock`, `ExecuteScriptAtBlockHeight`, and `ExecuteScriptAtBlockID` methods now accept script arguments [Go Example](https://github.com/onflow/flow-go-sdk/blob/master/examples/user_signature/main.go#L149-L160)

### ⚙️ Installing & Upgrading

#### Flow CLI

This version of the emulator is included in v0.5.0 of the [Flow CLI](./cli.md).

#### Docker

```
docker run -p 3569:3569 gcr.io/dl-flow/emulator:v0.5.0
```

---

## Version 0.4.0

### 💥 Breaking Changes

- Terminology change from "root account" to "service account." This affects the following configuration parameters, but does not change functionality of the ~root~ service account:
  - `FLOW_ROOTPRIVATEKEY` => `FLOW_SERVICEPRIVATEKEY` (`--service-priv-key`)
  - `FLOW_ROOTPUBLICKEY` => `FLOW_SERVICEPUBLICKEY` (`--service-pub-key`)
  - `FLOW_ROOTKEYSIGALGO` => `FLOW_SERVICEKEYSIGALGO` (`--service-sig-algo`)
  - `FLOW_ROOTKEYHASHALGO` => `FLOW_SERVICEKEYHASHALGO` (`--service-hash-algo`)

- Address generation format changes to be non-monotonic.
  - Service account address is now `0xf8d6e0586b0a20c7`
    - Using SDK: `flow.ServiceAddress(flow.Emulator)`

- On initial startup, the emulator execution state is bootstrapped with the following reserved accounts:
  - **1. Service account**: `0xf8d6e0586b0a20c7`
  - **2. FungibleToken**: `0xee82856bf20e2aa6`
  - **3. FlowToken**: `0x0ae53cb6e3f42a79`
  - **4. FlowFees**: `0xe5a8b7f23e8b548f`
  - After this, the first user account created will have the following address:
    - **5. First user account**: `0x01cf0e2f2f715450`

### ⚙️ Installing & Upgrading

#### Flow CLI

This version of the emulator is included in v0.4.0 of the [Flow CLI](./cli.md).

#### Docker

```
docker run -p 3569:3569 gcr.io/dl-flow/emulator:v0.4.0
```
