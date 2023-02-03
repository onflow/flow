---
title: Minting NFTs
description: Learn about the NFT minting process
sidebar_title: Minting NFTs
---

Most NFT marketplaces give their users the ability to mint NFTs from user-provided digital media. Users can, later on, post the minted NFTs for sale.

An NFT marketplace can add support for minting NFTs on the Flow blockchain using a contract based on the [Flow NFT Standard](https://github.com/onflow/flow-nft). [Here](https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc) is an illustration of how to write a contract for your own NFT.

A few important points to note:

- Do implement your NFT contract to conform to the [NFT Metadata Standard](https://github.com/onflow/flow-nft/#nft-metadata). You should implement the “Display” view to provide the rendering information for the NFTs. This [code snippet](https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc#L73) shows how to implement metadata in the NFT contract. Conforming to the metadata standard will facilitate rendering by wallets, tools, and other applications.
- Do make sure to register your contract in the [Flow NFT Catalog](https://github.com/dapperlabs/nft-catalog). Doing so will ensure that wallets and other applications will render your NFTs. It will also guarantee the authenticity of NFTs minted by your application on other platforms.
- Individual collections per user are not currently supported. So NFTs for all the users will have to share the same contract. You can include a field in the contract indicating a collection name specific to a creator.

## ​​Lazy Minting

Some blockchains have super high gas fees. That compels NFT platforms, especially marketplaces, to implement "[lazy minting](https://medium.com/rarible-dao/nft-minting-vs-lazy-minting-mining-explained-4330dd57a4c4)" to save on gas/transaction fees.

Flow blockchain's mission is to make blockchain accessible for the masses. We will never expect to see high transaction fees on the Flow blockchain.

> **Note**: You can check the details on Flow fees [here](../flow-token/concepts/#fees).

Based on current and future low fees on the Flow blockchain, NFT marketplaces do not need to implement lazy minting.
