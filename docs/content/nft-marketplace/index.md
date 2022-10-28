---
title: Overview
description: An overview of the NFT marketplace guide
sidebar_title: Overview
---

This guide provides the required information to the development teams looking to build NFT marketplaces on the Flow blockchain.

Developers should read this guide in conjunction with the other materials for developers looking to build on the Flow blockchain, especially the [official developer onboarding guide](/dapp-development).

## Custodial vs. non-Custodial model

The custodial model for an NFT marketplace is where the platform controls all the user accounts, the associated private keys, and, therefore, the assets in those accounts. The non-custodial model for an NFT marketplace is where users control their assets and use their wallets to perform activities in the marketplace.

If you are building a general-purpose NFT marketplace, the preferred approach is non-custodial, allowing users to interact with their third-party NFTs, and list them for sale.

**This guide will primarily focus on the general-purpose non-custodial NFT marketplace platforms that enable users to utilize third-party NFTs on the marketplace platform for secondary sales.**

## Key capabilities

Below are the key capabilities an NFT marketplace would typically perform.

### Handling user accounts

Let users connect their wallets and ...

- Display the list of NFTs belonging to the user so that they can browse through to decide which ones to list for sale
- Display crypto balance of the user account

> **Note**: Want to jump right in? Open the [handling accounts guide](./handling-accounts.md).

### Minting NFTs

Allow users to upload images and other types of media to mint new NFTs. These NFTs, in turn, can be listed for sale by the users.

> **Note**: Want to jump right in? Open the [minting NFTs guide](./minting-nfts.md).

### Selling NFTs

Enabling sales on an NFT marketplace requires ...

- Enabling users to list their NFTs for sale
- Implement various sale methods, including auctions
- Enabling users to purchase NFTs for sale
- Display list of NFTs for sale
- Facilitating payment between buyers and sellers
- Facilitating royalty payments to the creators/IP-holders

> **Note**: Want to jump right in? Open the [selling NFTs guide](./selling-nfts.md).
