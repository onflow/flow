# Flow SDK for Unity

The Flow SDK for Unity allows Unity developers to integrate their games and applications with the Flow blockchain.

## Introduction

As games developers ourselves, we understand that most games developers don’t have any background in blockchain technology or even understand why it is used. The Flow SDK for Unity has been developed by games developers, for games developers. Our aim is to make blockchain integration as easy as possible, so that you can focus on making a great game.

First, it helps to understand why you would want to make a game on blockchain, and what you can do.

## Why Blockchain?

Here at Dapper Labs we’re big believers in Web3. The two main advantages of blockchain that we believe in are:

**Trustlessness** – there is no trust required in any particular platform or service. Once something is on the blockchain, it’s there to stay. Users have full confidence that the data you put on-chain will always be available – there are no servers or databases that can be taken down.

**Composability** – once your Smart Contracts have been deployed, other developers can utilize them. They can deploy additional Smart Contracts that leverage your own, or develop other client applications which use them. Creating composable pieces of software like this gives new experiences to existing audiences – it's a win-win for everyone.

## So blockchains are awesome... why Flow?

Flow is a fast, decentralized and developer-friendly layer-1 blockchain. It was created to solve problems that Dapper Labs encountered while scaling CryptoKitties on Ethereum. Flow differs from other blockchains because it was explicitly designed to support games and consumer applications on day one, with the throughput necessary to scale to millions of active users. Some points which are unique to Flow include:

-   Multi-node architecture which facilitates scalability
-   Very low transaction fees
-   Eco-friendly due to its proof-of-stake consensus and multi-node architecture
-   Cadence – Flow's Smart Contract language, a resource-oriented programming language which has in-built security features
-   Upgradable Smart Contracts

## Overview of the Flow SDK

The Flow SDK allows Unity games to read and write from\\to a Flow blockchain. There are three chains\\environments\\networks developers should be aware of:

-   Emulator – this is an executable you can run locally, or on your own network, which emulates a Flow blockchain.
-   Testnet – the publicly available Flow blockchain used for testing.
-   Mainnet – the publicly available Flow blockchain used for production.

We highly recommend you do most of your development against a local emulator, and only deploy to Testnet when your Smart Contracts are finalised. While Flow does have “upgradable Smart Contracts”, there are many caveats to this, and you should get into the mindset that Smart Contracts are completely immutable once deployed. On an emulator, you can simply erase the entire chain and start again.

The types of things you can do with the Flow blockchain include:

-   Mint, burn and trade NFTs and Fungible Tokens
-   Store game data
-   Read any publicly available information
-   Run game logic

It is completely up to you, the developer, to decide how much data\\logic you want to store\\run on-chain, and how much (if any) on off-chain architecture such as servers and databases. We encourage you to experiment on an emulator, and when you’re ready, test on Testnet to get an indication of performance.

## Adding the Flow SDK

Once you have obtained the Flow SDK from the Unity Asset Store, you can add it to your project via the Package Manager.

See: [https://docs.unity3d.com/Manual/upm-ui-install.html](https://docs.unity3d.com/Manual/upm-ui-install.html)

## Samples

To add any of the SDKs Samples, click the related import button, from the Flow SDK package panel, in the Unity Package Manager window.

## Requirements

The Flow SDK is compatible with Unity version 2021.3 or higher.

Supported Platforms: Windows, OSX, Android
