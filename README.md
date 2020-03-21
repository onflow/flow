# [Flow](https://www.onflow.org)

Flow is a fast, secure, and developer-friendly blockchain built to support the next generation of games, apps, and the digital assets that power them.

- **Developer-first experience:** Flow is designed for builders. Snappy user experiences are made possible by an architecture that brings 1000x speed-ups and deterministic block finality, all without the use of sharding. The development experience is designed from the ground up, with production-quality SDKs, built-in logging and Cadence, a new programming language that makes writing smart contracts safe and easy.
‍
- **Consumer-friendly onboarding:** Flow is designed for the masses. The network is launching with mainstream-ready payment onramps to allow a safe and low-friction conversion from fiat to crypto.
‍
- **Mainstream-ready apps and distribution:** Awesome content is the best catalyst for adoption. Flow has global reach from day one, with committed partners representing leading technology firms as well as some of the most-loved brands in the world.

Read more about Flow's high-level architecture in the [technical primer](https://www.onflow.org/primer).

## Getting Started

>  🔨 Let's build!

The following section introduces common use cases for developers building on Flow.

### Writing Smart Contracts

> 🏃‍♀️ Cadence is the smart contract programming language of the future.

Cadence introduces resource-oriented programming, a new paradigm that pairs linear types with object capabilities to create a secure and declarative model for digital ownership.

Give Cadence a try and learn the fundamentals with the [Flow Developer Playground](https://docs.onflow.org/docs/getting-started-1).

### Managing Keys and Signing Transactions

> 🔑 Sign transactions from any device and stay secure with native multisig support.

Flow supports a variety of signature algorithms and curves, making it easy for users to manage keys using the secure enclave on their laptop, phone or inside a battle-ready HSM.

Every Flow account has built-in support for multi-signature transactions, making it simpler than ever to lock down your account with multiple weighted keys.

Learn more about accounts, weighted keys and transactions [in this guide]().

### Building Apps

> 💻 Build on Flow from the comfort of your own dev machine.

The Flow Emulator is a feature-complete replica of the real network that looks, acts and talks like Flow. You can use the emulator _right now_ to build real applications that are compatible with both testnet and mainnet.

- [Install the emulator]()
- Follow the examples in the [Flow Go SDK](https://github.com/dapperlabs/flow-go-sdk) to see it in action

### Accessing the Network

> ⛓️ Submit transactions and read chainstate with the Flow Access API.

The Flow Access API provides a single unified interface for applications and user agents to connect to the Flow network. The API is implemented by both the Flow Emulator and the network itself.

- Submit a transaction
- Query the status of a transaction
- Get the latest block
- Query events emitted by your transactions
- Read state stored in contracts and accounts

You can find an in-depth description of each of the above features in the [Flow Access API Specification](/docs/access-api-spec.md).

## Documentation

> 📖 Learn the fundamentals of Flow.

- Introduction to Cadence
- Accounts, Keys & Signing
- Using the Emulator
- Access API
  - Transaction Submission
  - Block Formation

## Tools

> ⚙️ Practical tools for building on Flow.

### SDKs

The Flow SDKs provide libraries for applications to connect and interact with the Flow network.

- [Flow Go SDK](https://github.com/dapperlabs/flow-go-sdk)
- Flow JS SDK (TBA)

### Code Editors

- [Flow Playground](https://play.onflow.org)
- Cadence VS Code extension (TBA)

### Testing

- [Flow Emulator]()

### Deployment

- Flow CLI (TBA)