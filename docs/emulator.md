# Flow Emulator

The Flow Emulator is a lightweight tool that emulates the behaviour of the real Flow network. 

The emulator exposes a gRPC server that implements the [Flow Access API](access-api-spec.md), which is designed to have near feature parity with the real network API.

## Running the emulator with the Flow CLI

The emulator is bundled with the [Flow CLI](cli.md), a command-line interface for working with Flow.

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
- `--persist` Enable persistent storage (uses [Badger](https://github.com/dgraph-io/badger) key-value DB)
- `--dbpath` Path to store database (default: `./flowdb`)

> ⚙️ All configuration options and flags are listed [here](#all-configuration-options).

### Using the emulator in a project	

You can start the emulator in your project context by running the above command
in the same directory as `flow.json`. This will configure the emulator with your 
project's root account, meaning you can use it to sign and submit transactions.	
## Running the emulator with Docker

Docker builds for the emulator are automatically built and pushed to 
`gcr.io/dl-flow/emulator`, tagged by commit and semantic version.

### Configuration

In addition to using command-line flags, the emulator can also be configured with environment variables, which can be passed into the Docker image.

Here's a sample configuration:

```
FLOW_VERBOSE=true
FLOW_PORT=3596
FLOW_BLOCKTIME=5s
FLOW_PERSIST=true
FLOW_DBPATH=./path/to/db
```

Here's how to run the emulator Docker image on port 9001 in verbose mode:

```bash
docker run -e FLOW_PORT=9001 -e FLOW_VERBOSE=true gcr.io/dl-flow/emulator
```

> ⚙️ All environment variable options are listed [here](#all-configuration-options).

#### Accounts

The emulator uses a `flow.json` configuration file to store persistent
configuration, including account keys. In order to start, at least one
key (called the root key) must be configured. This key is used by default
when creating other accounts.

Because Docker does not persist files by default, this file will be 
re-generated each time the emulator image restarts. For situations
where it is important that the emulator always uses the same root key (ie.
unit tests) you can specify a hex-encoded key as an environment variable.

```bash
docker run -e FLOW_ROOTPRIVATEKEY=<hex-encoded key> gcr.io/dl-flow/emulator
```

To generate a root key, use the `keys generate` command in the Flow CLI.
```bash
flow keys generate
```

## All Configuration Options

| Environment Variable | CLI Flag           | Default      | Description |
|----------------------|--------------------|--------------|-------------|
| FLOW_PORT            | `--port,-p`        | `3569`       | port to run RPC server |
| FLOW_HTTPPORT        | `--http-port`      | `3569`       | port to run HTTP server |
| FLOW_VERBOSE         | `--verbose,-v`     | `false`      | enable verbose logging |
| FLOW_BLOCKTIME       | `--block-time,-b`  | `5s`          | time between sealed blocks |
| FLOW_ROOTPRIVATEKEY  | `--root-priv-key`  | optional     | root account private key |
| FLOW_ROOTPUBLICKEY   | `--root-pub-key`   | optional     | root account public key |
| FLOW_ROOTKEYSIGALGO  | `--root-sig-algo`  | `ECDSA_P256` | root account key signature algorithm |
| FLOW_ROOTKEYHASHALGO | `--root-hash-algo` | `SHA3_256`   | root account key hash algorithm |
| FLOW_INIT            | `--init`           | `false`      | whether to initialize a new account profile |
| FLOW_GRPCDEBUG       | `--grpc-debug`     | `false`      | enable gRPC server reflection for debugging with grpc_cli |
| FLOW_PERSIST         | `--persist`        | `false`      | enable persistent storage |
| FLOW_DBPATH          | `--dbpath`         | `./flowdb`   | path to database directory |
