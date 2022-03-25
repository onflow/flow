---
title: Handling accounts
description: Learn how to handle accounts
sidebar_title: Handling accounts
---

## Sign-in/up functionality for Users

On many blockchains, dapps offer the Connect Wallet button to let users connect their wallets. Flow blockchain tries to make things even mor, friendlier for the end-users. It allows applications to offer users the opportunity to register for a wallet (aka create a wallet) if they do not have a Flow wallet already. If users already have a wallet, the Sign-in/up functionality authenticates the user.

Sign-in/up functionality is implemented using [FCL](fcl/). The following documentation provides details on how to implement this functionality on the application frontend:

- [FCL Authentication Functionality](fcl/reference/authentication/)
- [Sign-in/up using FCL with Blocto Wallet](https://docs.blocto.app/blocto-sdk/flow/login-register)

Using FCL, you can get the authenticated account information for your users.

> **Note**: You can see this functionality in action on the [Vault by CNN](https://vault.cnn.com/) website.

## Displaying NFTs belonging to the User

[Alchemy NFT API ](https://docs.alchemy.com/flow/documentation/flow-nft-apis)is the best way to get the list of all NFTs owned by a user.

To be precise, Alchemy API returns information about only the NFT projects integrated with Alchemy. Also, Alchemy API needs the Flow address as an input.

The Sign-in/up step should provide the information about the user’s Flow address to the application.

For an NFT project not integrated with the Alchemy API, to find out the NFTs owned by an account, you need to know the public path of that NFT’s collection. See [this](https://github.com/onflow/flow-nft#list-nfts-in-an-account) for more information.

### Rendering NFTs

Alchemy NFT API also provides rendering information for the NFTs. Check the [getNFTMetadata API](https://docs.alchemy.com/flow/documentation/flow-nft-apis/getnftmetadata-api).

All newer NFT projects will conform to the [NFT Metadata Standard](https://github.com/onflow/flow-nft/#nft-metadata). You can use the Display view to get the rendering information from the NFTs conforming to the metadata standard. [Here](https://github.com/onflow/flow-nft/tree/nft-metadata#how-to-read-metadata) is the code example on how to do that.
