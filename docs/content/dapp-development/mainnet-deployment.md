---
title: Mainnet Deployment Guidelines
sidebar_title: 5. Mainnet Deployment
---

> **Important**: The mainnet deployment process will change as soon as Flow rolled out [permissionless deployment (ETA summer 2022)](https://permissionless.onflow.org/). Once rolled out, you can deploy directly to mainnet without going through a review process.

## After Permissionless: Deploy directly

### Prerequisites

- [Flow CLI](https://github.com/onflow/flow-cli): You have the CLI installed and ran `flow init` in your project folder, generating a `flow.json` file
- Testnet testing: You tested your contracts thoroughly [locally](/dapp-development/contract-testing) and [on the testnet](/dapp-development/testnet-testing)
- Mainnet account: You completed the [mainnet account setup](/dapp-development/mainnet-account-setup) and have your key pair and mainnet address ready

### Configuration

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

Next, you need to set the [deployment target configuration](http://localhost:8000/flow-cli/project-contracts/#define-contract-deployment-targets) for the mainnet:

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

### Deployment using CLI

With the configuration changes completed, run the [Flow CLI deployment command](http://localhost:8000/flow-cli/deploy-project-contracts):

```sh
> flow project deploy --network=mainnet

Deploying 2 contracts for accounts: my-mainnet-account

Foo -> 0xab7... (1e8fdb973...90b7ee38b8)

Bar -> 0xab7... (6c243d09e...b878111098)


✨ All contracts deployed successfully
```

> **Note**: This command automatically deploys your project's contracts based on the configuration defined in your `flow.json` file. If you encounter any errors, review the configuration first.

> **Important**: If you see `Error Code: 1056`, you are trying to deploy contracts before the permissionless rollout was completed. In that case, you need to submit a review (as described below)

> **Important**: If you see `Error Code: 1103`, your new account does not have enough funds to complete the transaction. Make sure you have enough FLOW (e.g. by [sending some from your Blocto account](/dapp-development/mainnet-account-setup/#step-3-send-flow-to-non-custodial-account)).

Once all your contracts are deployed, you can visit [flow-view-source](https://flow-view-source.com/) or run the [Flow CLI get account command](/flow-cli/get-accounts/) to confirm the deployment.

### Re-deployment using CLI

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

## Before permissionless: Submit for review

Prior to the permissionless rollout, deploying to Mainnet requires manual review. To make your deployment as fast and as smooth as possible please use the steps in the guide to prepare your project.

### Prerequisites

Before considering your application for deployment to Mainnet, it has to have been live on Testnet handling real world traffic for a fixed period of time as suggested here: [Testnet Testing Guidelines](/dapp-development/testnet-testing).

Your project's smart contracts should include test coverage and follow any additional guidelines set out here: [Smart Contract Testing Guidelines](/dapp-development/contract-testing).

Your reviewers will be using the following criterion when assessing your project: [Flow Project Technical Analysis](/dapp-development/contract-testing) Keeping these points in mind while developing your project will help speed up the review and deployment process.

### Smart Contract Review

To ensure that Flow Mainnet works well for everyone in the early days, all smart contracts being deployed will be reviewed. The aim of the review process is to attempt to discover any issues that may affect your users or the operation of the network before your application is live.

**To submit your contract for review, use this: [Contract Review Submission Form](https://flowsolutionseng.zendesk.com/hc/en-us/requests/new?ticket_form_id=360001936012&tc_360045236671=b5ba92954c2f2692b56099fe653ac92d35c1e6e6)**

Once your contract has been submitted for review a member of the reviewing team will contact you and discuss how long the review might take. The timeliness of the review process will be different for every project, though the minimum timeline is usually 2-3 weeks.

### Deployment Process

When your application is approved for deployment, you'll need to share some important information:

- Provide a git tag pointing to the source code of the smart contracts you would like to deploy, so the team can perform a checkout of the correct version.
- Provide all the required public keys for all necessary Mainnet accounts.
- For projects requiring multiple contracts, you'll need to provide a deployment script and/or instructions explaining how to perform your multi-contract deployment correctly.

Once this information has been provided, the project will be deployed and you will be notified!

### Re-reployment process

Iterating (re-deploying) on Mainnet will be a manual process. Once your application is live, and you'd like to make updates or add features, you'll need to re-submit your updated smart contracts for review using the submission form, or by reaching out to your Flow point-of-contact directly.

Depending on the scope of the changes you're making, the team may be able to re-deploy them quickly, as long as all the required tests are in place. However, it may be the case that you'll need to test your updates on Testnet again. Decisions about re-deployment and re-testing as well as timelines for each will be made by the reviewing team on a case-by-case basis.

## NFT Discoverabilty

You should follow the [steps listed in the Alchemy repository](https://github.com/alchemyplatform/alchemy-flow-contracts#adding-a-new-contract) to get your NFT discovered through the Alchemy API. Make sure you added files needed to support your NFT on mainnet specifically.

## Risks for Early Adopters

### Breaking Changes

In these early days of Flow, version updates to Cadence, Flow Node software, and the Flow SDKs will often contain important updates as well as breaking changes.

Breaking changes will be a fact of life for early adopters of Flow's development stack, and you may often need to manually re-deploy your application's contracts after updates. But that's OK we're here to help!

### Version Compatibility

A version compatibility table can be found here. This will help you navigate version compatibility between Emulator, SDK, and Network Node (flow-go) versions.

### Mainnet Sporking

"Sporking" (soft forking) is the process of upgrading Flow network node software, and migrating the state from the previous version.

Currently, **historical event data is not migrated between sporks,** so you'll need to design your application with this in mind. We recognize the usefulness of historical event data and plan on adding a means of accessing it in the near future.

### "Real Value" on Mainnet

Unlike Flow Testnet, once your application is launched on Flow Mainnet, your users will be exchanging real value in the form of FLOW tokens (The Flow blockchain's native token) or other resources which have been made available. You or your user will also be responsible for paying transaction fees using FLOW tokens.

You can read about Transaction fees here: [https://docs.onflow.org/flow-token/concepts/#fees](https://docs.onflow.org/flow-token/concepts/#fees)
