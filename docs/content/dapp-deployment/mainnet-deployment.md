---
title: Mainnet Deployment Guidelines
sidebar_title: 4. Deploy to Mainnet
---

In the early days of the Flow network, applications deployed to the Flow Mainnet are required to be review and tested by the Flow team. For details about the testing and approval process, please read through our guide [Testnet Testing Guidelines](/dapp-deployment/testnet-testing/) If your app has passed the review process you're ready to deploy on Flow's Mainnet!

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

## Deploying on Mainnet

Currently, deploying to Mainnet requires manual intervention from the Flow team. To make your deployment as fast and as smooth as possible please use the steps in the guide to prepare your project.

### Prerequisites

Before considering your application for deployment to Mainnet, it has to have been live on Testnet handling real world traffic for a fixed period of time as suggested here: [Testnet Testing Guidelines](/dapp-deployment/testnet-testing).

Your project's smart contracts should include test coverage and follow any additional guidelines set out here: [Smart Contract Testing Guidelines](/dapp-deployment/contract-testing).

Your reviewers will be using the following criterion when assessing your project: [Flow Project Technical Analysis](/dapp-deployment/contract-testing) Keeping these points in mind while developing your project will help speed up the review and deployment process.

### Smart Contract Review

To ensure that Flow Mainnet works well for everyone in the early days, all smart contracts being deployed will be reviewed by the Flow team. The aim of the review process is to attempt to discover any issues that may affect your users or the operation of the network before your application is live.

**To submit your contract for review, use this: [Contract Review Submission Form](https://flowsolutionseng.zendesk.com/hc/en-us/requests/new?ticket_form_id=360001936012&tc_360045236671=b5ba92954c2f2692b56099fe653ac92d35c1e6e6)**

After submission, a member of the review team will contact you to discuss how long the review will take,
**though the minimum timeline is usually 2-3 weeks**.

### Deployment Process

When your application is approved for deployment, you'll need to make the Flow team aware of some important information:

- Provide a git tag pointing to the source code of the smart contracts you would like to deploy, so the team can perform a checkout of the correct version.
- Provide all the required public keys for all necessary Mainnet accounts.
- For projects requiring multiple contracts, you'll need to provide a deployment script and/or instructions explaining how to perform your multi-contract deployment correctly.

Once this information has been provided the Flow team will deploy your project and notify you!

### Mainnet NFT Discoverabilty

You should follow the [steps listed in the Alchemy repository](https://github.com/alchemyplatform/alchemy-flow-contracts#adding-a-new-contract) to get your NFT disovered through the Alchemy API. Make sure you added files needed to support your NFT on mainnet specifically.

## Iterating on Mainnet

In the early days, Iterating (re-deploying) on Mainnet will be a manual process. Once your application is live, and you'd like to make updates or add features, you'll need to re-submit your updated smart contracts for review using the submission form, or by reaching out to your Flow point-of-contact directly.

Depending on the scope of the changes you're making, the team may be able to re-deploy them quickly, as long as all the required tests are in place. However, it may be the case that you'll need to test your updates on Testnet again. Decisions about re-deployment and re-testing as well as timelines for each will be made by the reviewing team on a case-by-case basis.
