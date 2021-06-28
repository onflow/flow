# [Flow](https://www.onflow.org)

Flow is a fast, secure, and developer-friendly blockchain built to support the next generation of games, apps, and the digital assets that power them.

- For a high-level overview of Flow's architecture, check out the [primer](https://www.onflow.org/primer).
- Details about the protocol can be found in the [technical papers](https://www.onflow.org/technical-paper).
- For more documentation and tutorials, check out [docs.onflow.org](https://docs.onflow.org/docs).

## Getting Started

>  🔨 Let's build!

The following sections introduce common use cases for developers building on Flow.

### Writing Smart Contracts

> 🏃‍♀️ Cadence is the smart contract programming language of the future.

Cadence introduces resource-oriented programming, a new paradigm that pairs linear types with object capabilities to create a secure and declarative model for digital ownership.

Give Cadence a try and learn the fundamentals with the [Flow Developer Playground](https://play.onflow.org/local?type=account&id=LOCAL-account-0).

### Managing Keys and Signing Transactions

> 🔑 Sign transactions from any device and stay secure with native multisig support.

Flow supports a variety of signature algorithms and curves, making it easy for users to manage keys using the secure enclave on their laptop, phone or inside a battle-ready HSM.

Every Flow account has built-in support for multi-signature transactions, making it simpler than ever to secure your account with multiple weighted keys.

Learn more about accounts, weighted keys and transactions [in this guide](https://docs.onflow.org/concepts/accounts-and-keys).

### Building Apps

> 💻 Build on Flow from the comfort of your own dev machine.

The Flow Emulator is a feature complete replica of the real network that looks, acts and talks like Flow. You can use the emulator _right now_ to build real applications that are compatible with both testnet and mainnet.

- [Install the emulator](https://github.com/onflow/flow-emulator)
- Follow the examples in the [Flow Go SDK](https://github.com/onflow/flow-go-sdk) to see it in action

### Accessing the Network

> ⛓️ Submit transactions and read chainstate with the Flow Access API.

The Flow Access API provides a single unified interface for applications and user agents to connect to the Flow network. The API is implemented by both the Flow Emulator and the network itself.

- Submit a transaction
- Query the status of a transaction
- Get the latest block
- Query events emitted by your transactions
- Read state stored in contracts and accounts

You can find an in-depth description of each of the above features in the [Flow Access API Specification](https://docs.onflow.org/access-api).

To interact with the Flow Access API from JavaScript you can use the [Flow JavaScript SDK](https://github.com/onflow/flow-js-sdk)

## Documentation

> 📖 Learn the fundamentals of Flow.

- [Introduction to Cadence](https://docs.onflow.org/cadence/)
- [Accounts, Keys & Signing](/docs/content/concepts/accounts-and-keys.md)
- [Transaction Lifecyle](/docs/content/concepts/transaction-lifecycle.md)
- [Flow Access API](/docs/content/access-api.md)
  - [JSON-Cadence Data Interchange Format](/docs/content/cadence/json-cadence-spec.mdx)
- [Using the Emulator](https://github.com/onflow/flow-emulator)
- [Technical Papers](https://www.onflow.org/technical-paper)
  - Technical Paper 1: [Separating Consensus & Compute](https://arxiv.org/pdf/1909.05821.pdf)
  - Technical Paper 2: [Block Formation](https://arxiv.org/pdf/2002.07403.pdf)
  - Technical Paper 3: [Execution Verification](https://arxiv.org/pdf/1909.05832.pdf)

## Tools

> ⚙️ Practical tools for building on Flow.

### SDKs

The Flow SDKs provide libraries for applications to connect and interact with the Flow network.

- [Flow Go SDK](https://github.com/onflow/flow-go-sdk)
- [Flow JS SDK](https://github.com/onflow/flow-js-sdk)

### Development

- [Flow Emulator](https://github.com/onflow/flow-emulator)
- [Flow CLI](https://github.com/onflow/flow-cli)
- [Flow Playground](https://play.onflow.org)
- [Cadence Visual Studio Code extension](https://github.com/onflow/vscode-flow)
