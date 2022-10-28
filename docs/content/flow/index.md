---
title: Introduction to Flow
---

‍Flow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and the [digital assets](https://www.onflow.org/post/flow-blockchain-cadence-programming-language-resources-assets) that power them. It is based on a unique, [multi-role architecture](https://www.onflow.org/primer), and designed to [scale without sharding](https://www.onflow.org/post/flow-blockchain-multi-node-architecture-advantages), allowing for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant environment.

## What makes Flow unique

- **Multi-role architecture:** Flow's node architecture allows the network to scale to serve billions of users without sharding or reducing the decentralization of consensus.
- **Resource-oriented programming:** Smart contracts on Flow are written in Cadence, an easier and safer programming language for crypto assets and apps.
- **Developer ergonomics:** This network is designed to maximize developer productivity. Examples range from upgradeable smart contracts and built-in logging support to the Flow Emulator.
- **Consumer onboarding:** Flow was designed for mainstream consumers, with payment onramps catalyzing a safe and low-friction path from fiat to crypto.

The following chapters summarize the content in this section. Read on more for details.

## Dapp Development

The [development guide](/dapp-development/) covers the Flow core concepts, including:

- **Dapp Client:** The dapp client is the interface through which users interact with your dapp. Web and mobile applications are typical examples of dapp clients.
- **Smart Contract:** A smart contract is a collection of code deployed to a permanent location on the blockchain that defines the core logic for a dapp.
- **User Account:** A user account is a record on the blockchain that stores the digital assets owned by a single user.
- **Transaction:** A transaction is a code submitted to the blockchain that mutates the state of one or more user accounts and smart contracts.
- **User Wallet:** A user wallet is software or hardware that controls access to a user's account on the blockchain.
- **State Query:** A state query is a request made to the blockchain that returns information about the state of your dapp's smart contracts.
- **Flow Client Library (FCL):** The Flow Client Library is a framework that provides a standard interface to connect client applications and user wallets.

## Core Contracts

The Flow blockchain implements core functionality using its own smart contract language, Cadence. The core functionality is split into a set of contracts, so-called [core contracts](/core-contracts/):

- **Fungible Token:** The FungibleToken contract implements the Fungible Token Standard. It is the second contract ever deployed on Flow.
- **Flow Token:** The FlowToken contract defines the FLOW network token.
- **Flow Fees:** The FlowFees contract is where all the collected flow fees are gathered.
- **Service Account:** tracks transaction fees and deployment permissions and provides convenient methods for Flow Token operations.
- **Staking Table:** The FlowIDTableStaking contract is the central table that manages staked nodes, delegation, and rewards.
- **Epoch Contract:** The FlowEpoch contract is the state machine that manages Epoch phases and emits service events.

## FLOW Token

The [FLOW](/flow-token/) token is the native currency for the Flow network. Developers and users can use FLOW to transact on the network. Developers can integrate FLOW directly into their apps for peer-to-peer payments, service charges, or consumer rewards. Flow can be held, transferred, or transacted peer-to-peer.

## NFT marketplace

A unique digital asset known as an NFT represents a real-world item, such as artwork, music, in-game items, or films. They can be purchased and sold online via an [NFT marketplace](/kitty-items/next-steps/#learn-more-about-nft-marketplaces).
