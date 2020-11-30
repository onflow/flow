---
title: Testnet Deployment Guidelines
sidebar_title: 2. Deploy to Testnet
---

The Flow test network, known as Flow Testnet, exists to help developers test their software and smart contracts against a live network. It's also used by the Flow core developers as a means of releasing and testing new protocol and smart contract features before they are integrated into Flow's main network (Mainnet).

When the Flow protocol is updated or a new version of Cadence is released, those updates will always be made available on the [Flow Emulator](/emulator) _before_ they're integrated into Flow Testnet or Flow Mainnet.

## Risks for Early Adopters

### Breaking Changes

In these early days of Flow, version updates to Cadence, Flow node software, and the Flow SDKs will often contain important updates as well as breaking changes.

Breaking changes will be a fact of life for early adopters of Flow's development stack, and you may often need to manually redeploy your application's contracts after updates. The Flow core team is always available to you help with this process.

Please see [Redeploying Your Application](#redeploying-your-application) below for more information.

<!-- ### Version Compatibility

A version compatibility table can be found here. This will help you navigate version compatibility between Emulator, SDK, and Network Node (flow-go) versions. -->

### Testnet Sporking

"Sporking" (soft forking) is the process of upgrading the Flow network node software and migrating the chain state from one version to another.

Currently, **historical event data is not migrated between sporks.** You'll need to design your application with this in mind. We recognize the usefulness of historical event data and plan on adding a means of accessing it in the near future.

### "Real Value" on Testnet

Flow Testnet is explicitly for experimentation and testing and should not be used to exchange "real value" (e.g. developing a fiat money on/off-ramp for your testnet application). Accounts using the testnet to exchange real value will be subject to removal.

## Getting Started on Testnet

### Creating an Account

Anybody can use the [Testnet Faucet](https://testnet-faucet.onflow.org/) to create a Testnet account.

#### Generate a Key

To start, you'll need to generate an asymmetric cryptographic key pair (see [Accounts & Keys](/concepts/accounts-and-keys) for a list of supported algorithms).

For Testnet, it's easy to generate a new key pair with the [Flow CLI](https://github.com/onflow/flow-cli):

```sh
flow keys generate
```

By default, this command generates an ECDSA key pair on the P-256 curve.

**Note: this tool is intended for development purposes only and is not recommended for production use.**

#### Request Your Account

Once you've generated a key pair, visit the [Faucet](https://testnet-faucet.onflow.org/) and input the _public key_ into the "Create Account" form at the top of the page.

After some time, you'll receive an email with your newly-created account address.

Flow isn't responsible for securing and storing the private keys for testnet accounts. You must store your private key in a safe place so that you can later use it to sign transactions that you submit to Testnet.

#### Need More FLOW?

Each account created through the Testnet Faucet comes with 1000 FLOW. However, you can always request a top up through the Faucet if needed.

Submit your testnet address through the "Funding an Account" form on the [Faucet](https://testnet-faucet.onflow.org/) page.

You'll receive an email once your request is approved and the tokens are deposited.

Likewise, you'll receive an email if there were any problems with your request.

### Accessing Flow Testnet

Use the following host address to programmatically connect to Flow Testnet:

- `access.devnet.nodes.onflow.org:9000`

Go SDK Example:

```go
import "github.com/onflow/flow-go-sdk/client"

func main() {
  flowAccessHost := "access.devnet.nodes.onflow.org:9000"
  flowClient, _ := client.New(flowAccessHost, grpc.WithInsecure())

  // ...
}
```

### Deploying a Contract

Using the account you created above, you can deploy additional contract accounts using the [Flow CLI](https://github.com/onflow/flow-cli).

Start by initializing you Flow project if you haven't already:

```sh
flow init
```

This will create a `flow.json` file in the current directory. It should look like this:

```json
{
  "accounts": {
    "service": {
      "address": "f8d6e0586b0a20c7",
      "privateKey": "<EMULATOR PRIVATE KEY>",
      "sigAlgorithm": "ECDSA_P256",
      "hashAlgorithm": "SHA3_256"
    }
  }
}
```

The `service` account entry is auto-generated for use with the [Flow Emulator](/emulator).

You'll want to add an account entry for your new testnet account:

```json
{
  "accounts": {
    "service": {
      "address": "f8d6e0586b0a20c7",
      "privateKey": "<EMULATOR PRIVATE KEY>",
      "sigAlgorithm": "ECDSA_P256",
      "hashAlgorithm": "SHA3_256"
    },
    "testnet": {
      "address": "<YOUR TESTNET ADDRESS>",
      "privateKey": "<YOUR TESTNET PRIVATE KEY>",
      "sigAlgorithm": "ECDSA_P256",
      "hashAlgorithm": "SHA3_256"
    }
  }
}
```

After this, use the `accounts create` command to deploy a new contract account:

```sh
flow accounts create \
  --host access.devnet.nodes.onflow.org:9000 \
  --signer testnet \
  --code MyContract.cdc
```

- `host` is the access node to connect to
- `signer` is the account entry used for signing
- `code` is the path to the Cadence contract being deployed

### Making Use of Core Contracts

Flow Testnet comes with some useful contracts already deployed, called **core contracts.** There are reference pages with import addresses for the core contracts here: [https://docs.onflow.org/protocol/core-contracts/](/protocol/core-contracts/)

Once you accounts are set up and you're ready to develop, you can look over some code examples from the Flow Go SDK here:

- [https://github.com/onflow/flow-go-sdk/tree/master/examples](https://github.com/onflow/flow-go-sdk/tree/master/examples)

### Redeploying Your Application

If you discover your application is broken after an update, use the latest emulator to test changes to your application. Once you are satisfied that you've patched any breaking changes, you'll need to get in touch with the Flow core team to redeploy your contracts to Testnet.

We kindly ask you to follow the steps listed in the [Testnet Testing Guidelines.](../testnet-testing) when redeploying your contracts.
