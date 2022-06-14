---
title: Dapp Deployment Guide
sidebar_title: The Road to Mainnet
description: How to deploy an application on Flow
---

## The Road to Mainnet

The following sections cover the steps a developer should take to prepare their application for deployment on Flow Mainnet.

**1. [Smart Contract Testing](/dapp-development/contract-testing/)**

Smart contracts are the most important component of any dapp:
they often manage user assets, application state and other vital pieces of data.
As such, smart contracts should be rigorously tested.

**2. [Testnet Deployment](/dapp-development/testnet-deployment/)**

Testnet is the perfect proving ground for any new application.
Learn how to use the Flow toolchain to deploy your dapp to Testnet.

**3. [Testnet Testing](/dapp-development/testnet-testing/)**

> **Important**: This section will change as soon as [permissionless deployment](https://permissionless.onflow.org/) rolls out on Flow (ETA summer 2022). Keep in mind, it is critical to test your applications and contracts thoroughly on the testnet as part of your road to the mainnet.

Testnet is the closest you will get to the real thing.
In order to uncover bugs that may only appear on a real network,
you should thoroughly test your dapp on Testnet before considering a Mainnet release.

**4. [Mainnet Account Setup](/dapp-development/mainnet-account-setup/)**

As soon as you are ready for mainnet, you need to create and setup a mainnet account that you can use to deploy and manage your contracts.

**5. [Mainnet Deployment](/dapp-development/mainnet-deployment/)**

> **Important**: The mainnet deployment process is changing! As soon as **[permissionless deployment](https://permissionless.onflow.org/)** is rolled out (ETA summer 2022), you will also be able to deploy *new contracts* directly to mainnet without going through a review process. Furthermore, following the mainnet spork on June 15th, the network will already be permissionless for all *existing* contracts - this means you will be able to update your existing contracts without requiring any review. Please see [this page](https://docs.onflow.org/dapp-development/mainnet-deployment/#updatere-deploy-a-contract-on-mainnet-using-the-cli) or [this video](https://www.youtube.com/watch?v=tufIo8V_f2c) for information on how to update mainnet contracts after the spork. Please check [this page](https://permissionless.onflow.org/) for all the most up to date information.

Until permissionless deployment rolls out, your dapp must go through a review process before it can be deployed to Mainnet.
This is to ensure a smooth and safe experience for Flow users, developers, and maintainers while the network is still maturing.
Learn about the steps you will need to take to promote your dapp from Testnet to Mainnet.
