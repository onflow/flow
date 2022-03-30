---
title: Next steps
description: Where to go from here
sidebar_title: Next steps
---

By now, you have a fully-functioning NFT marketplace with your own, new exclusive NFT collection. You might ask yourself where to go from here. Here are some ideas to get you inspired!

## Learn more about NFT marketplaces

Dive deeper by reading the **[NFT Marketplace Guide](/nft-marketplace/)**. It covers topics like the building blocks of marketplaces, how to handle accounts, how to mint and sell NFTs, and best practices for production-readiness.

## Improve your Kitty Items project

Below is a list of features and updates you could make to your NFT marketplace.

### Adjust rarity

You will notice that each NFT has a rarity associated with it. You could design a more complex rarity function to ensure that some NFTs are much more limited than others.

The rarity is currently represented as the background color. You could change that and have visual elements on the object itself. For instance, the Fishbowl NFT could have unique items inside.

### Update metadata

NFTs on Flow should follow the [metadata standard](https://docs.onflow.org/core-contracts/nft-metadata/). The Kitty Items contract is compatible with the metadata standard as well.

> **Note**: You can review the following Cadence contract for more details: `cadence/contracts/MetadataViews.cdc`

You can update the metadata to change the name and description of the NFTs on the marketplace. If you wanted to store your NFT resources somewhere else (instead of on IPFS), you could modify the metadata views.

### Add utility

The KittyItems NFTs on the marketplace do not have any utilitarian function. You could, however, extend your marketplace or any application to provide or unlock additional features that are only available to specific NFT holders. For instance, you could create a Discord community for NFT owners where some exclusive channels are only open to exclusive NFT holders. Another example is an application that lets users log in with their Flow profile and verifies if the account owns an NFT from your collection. If it does, the user could take an action in your application. This is often used for DAOs. The NFT indicates that a user can participate in the DAO community.

### Support naming service

If an NFT is displayed, it shows who owns the NFT. This is mostly represented by a Flow account address, something that is cryptic and difficult to remember. Users will not be able to associate addresses with other people in the community, like their friends. That's the services like [.find](https://find.xyz/) come into play - they make it possible for users to claim usernames for their address. You could integrate with a naming service to display avatars and/or usernames instead of the cryptic addresses.

### Cutting edge: Support royalties

If you want to work on a cutting edge feature, you can explore how to support royalties that live alongside the NFT itself. With that, you can ensure that an NFT creator will receive a share from secondary sales.

The Flow community is [currently working on the royalty standard](https://github.com/onflow/flow-nft/issues/53). Check it out and chime in if you have any thoughts!

## Get inspired by other projects

If you need even more inspiration, check out some of the [existing NFT marketplace on Flow](https://www.flowverse.co/projects).
