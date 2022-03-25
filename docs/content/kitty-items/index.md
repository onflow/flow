---
title: Kitty Items
description: A CryptoKitties Sample App
sidebar_title: Introduction
---

Kitty Items is a complete NFT marketplace inspired by [CryptoKitties](https://www.cryptokitties.co/), a web3 game that put NFTs on the map. You can use it as a blueprint for your own marketplace and to learn how to develop on Flow.

The following chapters use the project to explain the components and concepts of the Flow blockchain and its programming language [Cadence](/cadence/). At the end, you will be able to:

- deploy and upgrade smart contracts
- mint and transfer NFTs
- add a new kind of NFTs to the marketplace
- interact with the Flow blockchain from within a web application

## Live Demo

By the end of the tutorial, you will have your own instance of Kitty Items. You can use our [deployed demo instance](https://kitty-items.onflow.org/) to explore the project.

[![Kitty Items - Landing Page](landing-page.png)](https://kitty-items.onflow.org/)

## Project overview

The project consists of 3 key components:

![Project overview](kitty-items-diagram.png)

### 1. Web application

A true dapp, client-only web app. This is a complete web application built with NextJS and React that demonstrates how to build a website that connects directly to the Flow blockchain using [FCL](/fcl/). FCL handles authentication and authorization of [Flow accounts](/concepts/accounts-and-keys/), [signing transactions](/concepts/transaction-signing/), and querying data using using Cadence scripts.

### 2. Backend API

We love decentralization, but servers are still very useful, and this one's no exception. The API helps preserve the separation of concerns, so that your process and business logic doesn't have to implemented on the front-end. Backend operations are neccessary to ensure secure handling of accounts and associated keys and to streamline blockchain interactions.

The code in this project demonstrates how to connect to Flow using [FCL](/fcl/) from a Node JS backend. It's also chalk-full of handy patterns you'll probably want to use for more complex and feature-rich blockchain applications, like storing and querying events using a SQL database (SQLite). The API demonstrates how to send transactions to the Flow blockchain, specifically for minting [Kitty Items](https://github.com/onflow/kitty-items/blob/master/cadence/contracts/KittyItems.cdc) (non-fungible tokens).

### 3. Cadence contracts, scripts, and transactions

[Cadence](/cadence) smart contracts, scripts & transactions for your viewing pleasure. This folder contains all of the blockchain logic for the marketplace application. Here you will find examples of [fungible token](https://github.com/onflow/flow-ft) and [non-fungible token (NFT)](https://github.com/onflow/flow-nft) smart contract implementations, as well as the scripts and transactions that interact with them. It also contains examples of how to _test_ your Cadence code.
