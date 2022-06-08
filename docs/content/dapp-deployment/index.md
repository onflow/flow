---
title: Dapp Deployment Guide
sidebar_title: Introduction
description: How to deploy an application on Flow
---

## Introduction

This guide covers the steps a developer should take to prepare their application for deployment
on Flow Mainnet.

The steps below present a framework that Flow dapp developers are encouraged to follow
when developing and preparing their applications for Mainnet.
Flow is still new, and the process of defining best practices is ongoing.
This guide aims to lay the foundation for secure and robust dapp development on Flow.

### Who created this guide?

These documents were compiled by the Flow core developers in collaboration with the wider development community.
Suggestions for additions, changes or others improvements are gladly welcomed.

## The Road to Mainnet

**1. [Smart Contract Testing](/dapp-deployment/contract-testing/)**

Smart contracts are the most important component of any dapp:
they often manage user assets, application state and other vital pieces of data.
As such, smart contracts should be rigorously tested.

**2. [Deploy to Testnet](/dapp-deployment/testnet-deployment/)**

Testnet is the perfect proving ground for any new application.
Learn how to use the Flow toolchain to deploy your dapp to Testnet.

**3. [Testnet Testing](/dapp-deployment/testnet-testing/)**

Testnet is the closest you will get to the real thing.
In order to uncover bugs that may only appear on a real network,
you should thoroughly test your dapp on Testnet before considering a Mainnet release.

**4. [Deploy to Mainnet](/dapp-deployment/mainnet-deployment/)**

> **Important**: The mainnet deployment process will change as soon as Flow rolled out [permissionless deployment (ETA summer 2022)](https://permissionless.onflow.org/). Once rolled out, you can deploy directly to mainnet without going through a review process.

Until permissionless deployment is rolled out, your dapp must go through a review process before it can be deployed to Mainnet.
This is to ensure a smooth and safe experience for Flow users, developers, and maintainers while the network is still maturing.
Learn about the steps you will need to take to promote your dapp from Testnet to Mainnet.
