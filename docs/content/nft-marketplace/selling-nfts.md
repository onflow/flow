---
title: Selling NFTs
description: Learn about the selling process
sidebar_title: Selling NFTs
---

Most NFT marketplaces performing on-chain sales use the [NFT Storefront Contract](https://github.com/onflow/nft-storefront). The contract allows NFT sellers to list their NFT for sale in any fungible token. NFT buyers send the fungible token amount equal to the listed price and receive the listed NFT in return.

A few important points to note regarding listing NFTs for sale through the [NFT Storefront Contract](https://github.com/onflow/nft-storefront):

- Same NFT can have multiple sale listings created. The NFT owner can create multiple listings on the same marketplace or different marketplaces.
- NFT owners can create different sale listings for the same NFT with different fungible tokens as payment methods. For example, the NFT owner can list the same NFT for sale in both FLOW and FUSD tokens.
- NFT listed for sale using the [NFT Storefront Contract](https://github.com/onflow/nft-storefront) is not locked. It remains in complete control of the NFT owner before the sale, and the NFT owner can transfer it before the sale.
- Any sale listing created allows for multiple sale cuts. That can enable royalty payments to multiple entities for sale.
- For an NFT, the NFT owner can create different listings with different sale cuts. That allows each listing to have unique royalty payment schemes.
- An NFT marketplace platform can create sale listings for NFTs minted by it and NFTs minted by third-party projects.
- [NFT Storefront Contract](https://github.com/onflow/nft-storefront) allows for only simple sale schemes of individual NFTs. You will need to write your version of the contract if
  - NFT has to be sold through an auction
  - Instead of NFTs, packs of NFTs need to be sold on-chain

## Listing NFTs for sales

[Here](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item.cdc) is an example of a transaction creating an NFT sale listing. The listing creator provides sale cuts (royalties, platform fees). The [NFT Storefront Contract](https://github.com/onflow/nft-storefront) does not determine the sale cuts by itself. The listing creator (NFT marketplace) should figure out the royalties to be paid and populate the sale cuts fields of the transaction.

The sale listing specifies the fungible token the NFT is sold in. Typical fungible tokens used are FLOW and FUSD.

## Purchasing NFTs

[Here](https://github.com/onflow/nft-storefront/blob/main/transactions/buy_item.cdc) is an example of a transaction purchasing an NFT from an [NFT Storefront Contract](https://github.com/onflow/nft-storefront) listing. The buyer needs to use the same fungible token specified in the listing.

### Setting up accounts to receive NFTs

Flow blockchain has a feature that unless an account is setup to receive a particular NFT type, they can not receive NFTs of that type. That is why users need to authorize a transaction through their account to receive a specific NFT type. See [this](https://github.com/StarlyIO/flowfest-contracts/blob/master/transactions/setup_account.cdc#L218) for an example of a transaction code doing that.

An NFT marketplace should enable users to set up their accounts to receive an NFT before purchasing that NFT. [Flow NFT Catalog](https://github.com/dapperlabs/nft-catalog) can provide the storage path information to let platforms craft such account set up transactions.

After the NFT purchase operation is complete on the blockchain, the NFT marketplace platform should explicitly [remove](https://github.com/onflow/nft-storefront/blob/main/transactions/cleanup_purchased_listings.cdc) the sale listings. Leaving dangling sale listings is not a good practice.

## Payment options

Currently, for the on-chain sale of NFTs, the most common option is to let sellers list NFTs for sale in fungible tokens like FUSD or FLOW.

The marketplace will have the NFT owner sign a transaction like [this](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item.cdc) to create the sale listing. The transaction [specifies](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item.cdc#L35) the type of fungible token the NFT seller will accept.

If accepting any fungible token other than FLOW like FUSD, the seller needs to set up their account to accept that token. Here is a [setup transaction](https://github.com/onflow/fusd/blob/main/transactions/setup_fusd_vault.cdc) for FUSD that the marketplace needs the seller to sign.

### Fiat payments

NFT marketplaces can reduce UX friction for the crypto-uninitiated NFT buyers by accepting payments in fiat (credit/debit cards and bank payments).

But enabling fiat payments invariably requires the NFT marketplace platform to take custody of users' funds and/or NFTs. And in doing so, the platforms will have to handle regulatory and payment-fraud/chargeback/AML issues.

Following are typical ways NFT marketplaces can enable fiat payments for P2P sales:

- Using payment providers like Stripe: NFT marketplaces can enable fiat P2P sales by onboarding the sellers on a payment provider like Stripe, taking custody of the NFTs from the sellers, and accepting payments from the buyers using credit cards. NFT sale is completed through a transfer of NFT. Sellers may have to go through KYC with Stripe to get onboarded. Sellers will get paid in their bank accounts by Stripe. The downside is that seller onboarding can take time, and the platform can be hostage to the capricious rules of the payment providers.
- Using crypto on-ramps like Moonpay: With this approach, the NFT marketplace facilitates NFT sales on-chain but leverages crypto on-ramps such as Moonpay/Wyre to help NFT buyers obtain crypto to make the purchase. The downside is that the crypto on-ramps charge hefty fees, and NFT sellers still need to find off-ramps for the proceeds of the crypto sale.
- Using a payment gateway to maintain user fund balances: This is the approach that NBA Topshot/Dapper wallet follows. The marketplace uses a payment gateway like Circle where users use fiat payment methods to maintain fund balances. The marketplace also maintains a custodial wallet for each user. It makes the on-chain NFT purchase on behalf of users if sufficient fund balance is maintained with the payment gateway. Fund balances with the payment gateway are updated based on sale/purchase activity on the blockchain. The downside of this approach is that it requires the marketplace to maintain a custodial wallet service. Additionally, the marketplace must incorporate multiple operational checks and balances to comply with the payment/AML regulations and protect against chargeback/fraud risks.

See this [section](../dapp-development/in-dapp-payments/) in the developer onboarding guide as well.

## Royalty payments

A marketplace can gather the royalty information for an NFT listed for sale through the following ways:

- Offline methods: The project behind the NFT can inform the marketplace of the royalty percentage it expects from the NFT sale.
- NFT metadata: NFT projects can specify the “Royalty” view per the [NFT Metadata Standard](https://github.com/onflow/flow-nft/#nft-metadata). Marketplaces can use that information to enforce royalty payments when creating the NFT sale listings. [_Currently, “Royalty” view specification is unspecified. Proposals from NFT Marketplace projects are welcome._]
