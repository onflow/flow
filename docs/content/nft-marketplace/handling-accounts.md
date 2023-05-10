---
title: Handling accounts
description: Learn how to handle accounts
sidebar_title: Handling accounts
---

## Sign-in/up functionality for Users

On many blockchains, decentralized apps offer the Connect Wallet button to let users connect their wallets. Flow blockchain tries to make things even more friendlier for the end-users. It allows applications to offer users the opportunity to register for a wallet (aka create a wallet) if they do not have a Flow wallet already. If users already have a wallet, the Sign-in/up functionality authenticates the user.

Sign-in/up functionality is implemented using [FCL](fcl/). The following documentation provides details on how to implement this functionality on the application frontend:

- [FCL Authentication Functionality](https://developers.flow.com/tools/fcl-js/reference/authentication)
- [Sign-in/up using FCL with Blocto Wallet](https://docs.blocto.app/blocto-sdk/flow/login-register)

Using FCL, you can get the authenticated account information for your users.

> **Note**: You can see this functionality in action on the [Vault by CNN](https://vault.cnn.com/) website.

## Displaying NFTs belonging to the User

NFT marketplaces can use the [Flow NFT Catalog](https://github.com/dapperlabs/nft-catalog), an on-chain registry of NFTs, to obtain the list of NFTs owned by an account and obtain display metadata for those NFTs and their collections. Developers should use the [example scripts](https://github.com/dapperlabs/nft-catalog#using-the-catalog-for-marketplaces-and-other-nft-applications) in conjunction with the [NFT Metadata Standard](https://github.com/onflow/flow-nft/#nft-metadata).

For an NFT project that is not yet present in the [Flow NFT Catalog](https://github.com/dapperlabs/nft-catalog), to find out the NFTs owned by an account, you need to know the public path of that NFT’s collection. See [this](https://github.com/onflow/flow-nft#list-nfts-in-an-account) for more information.

### Rendering NFTs

All newer NFT projects will conform to the [NFT Metadata Standard](https://github.com/onflow/flow-nft/#nft-metadata). You can use the Display view to get the rendering information from the NFTs conforming to the metadata standard. [Here](https://github.com/onflow/flow-nft#how-to-read-metadata) is the code example on how to do that.
