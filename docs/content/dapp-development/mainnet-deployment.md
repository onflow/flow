---
title: Mainnet Deployment Guidelines
sidebar_title: 5. Mainnet Deployment
---

> **Note**: Anyone can deploy and update contracts on mainnet. [Smart contract reviews](https://flowsolutionseng.zendesk.com/hc/en-us/requests/new?ticket_form_id=360001936012&tc_360045236671=b5ba92954c2f2692b56099fe653ac92d35c1e6e6) (to discover any issues that may affect your users) are still provided upon request. However, they are not mandatory.

## Prerequisites

- Testnet testing: Smart contracts include test coverage and follow any additional guidelines set out here: [Smart Contract Testing Guidelines](/dapp-development/contract-testing). Application live on testnet and handling real world traffic for an extended period of time as suggested here: [Testnet Testing Guidelines](/dapp-development/testnet-testing)
- [Flow CLI](https://github.com/onflow/flow-cli): You have the CLI installed and ran `flow init` in your project folder, generating a `flow.json` file
- Mainnet account: You completed the [mainnet account setup](/dapp-development/mainnet-account-setup) and have your key pair and mainnet address ready

## Configuration

First, you need to configure the `flow.json` file to add your mainnet account details:

```js:title=flow.json
{
...
  "accounts": {
    "my-mainnet-account": {
      "address": "ADDRESS_FROM_PREVIOUS_STEP",
      "key": "PRIVATE_KEY_GENERATED_IN_PREVIOUS_STEP"
    }
  }
...
}
```

Next, you need to set the [deployment target configuration](https://docs.onflow.org/flow-cli/project-contracts/#define-contract-deployment-targets) for the mainnet:

```js:title=flow.json
{
...
"deployments": {
    "mainnet": {
      "my-mainnet-account": ["Foo", "Bar"]
    }
  }
...
}
```

## Deploy a contract on mainnet using the CLI

With the configuration changes completed, run the [Flow CLI deployment command](https://docs.onflow.org/flow-cli/deploy-project-contracts):

```sh
> flow project deploy --network=mainnet

Deploying 2 contracts for accounts: my-mainnet-account

Foo -> 0xab7... (1e8fdb973...90b7ee38b8)

Bar -> 0xab7... (6c243d09e...b878111098)


✨ All contracts deployed successfully
```

> **Note**: This command automatically deploys your project's contracts based on the configuration defined in your `flow.json` file. If you encounter any errors, review the configuration first.

> **Important**: If you see `Error Code: 1103`, your new account does not have enough funds to complete the transaction. Make sure you have enough FLOW (e.g. by [sending some from your Blocto account](/dapp-development/mainnet-account-setup/#step-3-send-flow-to-non-custodial-account)).

Once all your contracts are deployed, you can visit [flow-view-source](https://flow-view-source.com/) or run the [Flow CLI get account command](/flow-cli/get-accounts/) to confirm the deployment.

## Update/Re-deploy a contract on mainnet using the CLI

You can use the [Flow CLI contract update command](/flow-cli/account-update-contract/) to re-deploy an updated version of your contract:

```sh
> flow accounts update-contract Foo ./Foo.cdc --signer=my-mainnet-account --network=mainnet

Transaction ID: e0728170165ce...6956785be50
Contract 'Foo' updated on the account 'ab7...'.

Address  0xab7...
Balance  1000.00099677
Keys     1

Key 0   Public Key               39a097c....
        Weight                   1000
        Signature Algorithm      ECDSA_P256
        Hash Algorithm           SHA3_256
        Revoked                  false
        Sequence Number          3
        Index                    0

Contracts Deployed: 2
Contract: 'Foo'
Contract: 'Bar'


Contracts (hidden, use --include contracts)
```

## NFT Discoverabilty

You should follow the [steps listed in the Alchemy repository](https://github.com/alchemyplatform/alchemy-flow-contracts#adding-a-new-contract) to get your NFT discovered through the Alchemy API. Make sure you added files needed to support your NFT on mainnet specifically.

## Risks for Early Adopters

### Breaking Changes

In these early days of Flow, version updates to Cadence, Flow Node software, and the Flow SDKs will often contain important updates as well as breaking changes.

Breaking changes will be a fact of life for early adopters of Flow's development stack, and you may often need to manually re-deploy your application's contracts after updates.

### Version Compatibility

A version compatibility table can be found here. This will help you navigate version compatibility between Emulator, SDK, and Network Node (flow-go) versions.

### Mainnet Sporking

"Sporking" (soft forking) is the process of upgrading Flow network node software, and migrating the state from the previous version.

Currently, **historical event data is not migrated between sporks,** so you'll need to design your application with this in mind. We recognize the usefulness of historical event data and plan on adding a means of accessing it in the near future.

### "Real Value" on Mainnet

Unlike Flow Testnet, once your application is launched on Flow Mainnet, your users will be exchanging real value in the form of FLOW tokens (The Flow blockchain's native token) or other resources which have been made available. You or your user will also be responsible for paying transaction fees using FLOW tokens.

You can read about Transaction fees here: [https://docs.onflow.org/flow-token/concepts/#fees](https://docs.onflow.org/flow-token/concepts/#fees)
