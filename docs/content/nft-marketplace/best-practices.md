---
title: Best practices
description: Learn about best practices and patterns for NFT marketplaces
sidebar_title: Best practices
---

Besides following the best practices of building a scalable web application that can handle unexpected user traffic surge, NFT marketplaces should also follow the best practices listed below but often ignored.

## Maintain accuracy of displayed price

NFT purchase ultimately settles on the blockchain, but NFT buyers see the prices of the NFTs for sale on the marketplace website. The marketplace platform should ensure that the price listed on the web page, their backend, and the blockchain are in sync. If that is not the case, it can lead to ugly surprises for the NFT buyers.

## Clean up stale NFT listings

Often, sellers change their listing price for the NFT on sale. That can lead to multiple listings on the chain. After a price change, marketplace platforms should ensure that any lower price listings are deleted from the chain. Also, once the NFT is sold, the marketplace should [clean up](https://github.com/onflow/nft-storefront/blob/main/transactions/cleanup_purchased_listings.cdc) all sale listings for that NFT.

## Provide rich filtering/search capabilities

Frequently, NFT buyers are inundated by irrelevant NFTs while not being able to find what they are looking for. Having comprehensive search and filtering capabilities on the platform can help provide good UX to the NFT buyers. Filtering capability should be implemented, keeping in mind that different NFT types have different traits
