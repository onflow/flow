---
title: Blocto NFT Collection Integration
---

## Introduction

Wallets will not automatically support all new NFT collections that are deployed on Flow. In order to get your NFT Collection to be supported by Blocto, one of our wallet providers, you have to follow several steps.

The following steps will help you get ...

- your NFT collection supported by the Alchemy API
- your NFT collection to show up in the Blocto wallet

> **Note**: You can display the NFT inside your application to confirm that users own a specific NFT. However, they might be confused because their NFTs wouldn't show up in the Blocto wallet.

## Prepare new pull request

Blocto leverages the [Alchemy API](https://alchemyapi.io/) in order to display NFT collections in their views. Therefore, support in Blocto requires support in the Alchemy API.

To to add your NFT collection, you need to submit a pull request to the [Alchemy GitHub project](https://github.com/alchemyplatform/alchemy-flow-contracts).

**Follow the steps defined in the ["Adding a new contract"](https://github.com/alchemyplatform/alchemy-flow-contracts#adding-a-new-contract) section.**

> **Note**: You need to create `getNFTs.cdc` files for both the testnet and the mainnet. The files will be located in different folders.

### Metadata

Alchemy's [Struct NFT object](https://github.com/alchemyplatform/alchemy-flow-contracts#alchemy-metadata-schema) includes a `metadata` parameter to set your NFT metadata. It takes a dictionary type that is a `String` of `AnyStructs`.

```cadence
pub struct NFT {
    pub let contract: Contract // contract defined bellow
    pub let id: UInt64 // id of the nft usually just nft.id
    pub let uuid: UInt64? // uuid of the nft usually just nft.uuid
    pub let title: String? // title of the nft
    pub let description: String? // description of the nft
    pub let external_domain_view_url: String? // api for nft view resource
    pub let media: Media? // media defined bellow used as avatar of nft
    pub let alternate_media: [Media?] // alternative media to the primary media above
    pub let metadata: {String: String?} // all the metadata in raw
}
```

> **Note**: You can only use a String for the Struct. It cannot be any Struct because the Alchemy API only returns Strings or Intereger

You have to ensure that you comply with the format. For instance, the metadata dictionary should only contain `string` or `integers`.

Here is a working example for the metadata definition:

```cadence
return NFTData(
    contract: contract,
    id: nft.id,
    uuid: nft.uuid,
    title: editionMetadata.getMetadata()["title"] ?? setMetadata.getMetadata()["title"] ?? "",
    description: editionMetadata.getMetadata()["description"] ?? setMetadata.getMetadata()["description"] ?? "", external_domain_view_url: "https://some.place",
    token_uri: nil,
    media: [
        NFTMedia(uri: editionMetadata.getMetadata()["mediaURL"] ?? setMetadata.getMetadata()["mediaURL"] ?? "", mimet ],
    metadata: {
        "editionNumber": nft.editionNumber, //THIS CAN BE AN INTEGER OR A STRING
        "editionCount": setMetadata.getMaxNumberOfEditions(),//THIS CAN BE AN INTEGER OR A STRING
        "royaltyAddress": "0x8e2e0ebf3c03aa88",//THIS CAN BE AN INTEGER OR A STRING
        "royaltyPercentage": "10.0"//THIS CAN BE AN INTEGER OR A STRING
    }
)
```

## Submit pull request

Once you completed all the steps required to add a new contract, you should have changes in your local repository. Before you submit a new pull request, it is recommended to review one of the [successfully merged PRs](https://github.com/alchemyplatform/alchemy-flow-contracts/pull/67/files#diff52ac07a32e5823cea9908ece26d09760b30077a72260acc0cd237d9ab1cfac3aR2719-R272).

This should help you to better understand what changes are needed and what format new files have to follow.

Once you are confident in your changes, submit a new pull request with a brief description and a link to your project.

## Alchemy reviews, merges, and updates their API

Alchemy engineers will review your pull request and either merge it or ask you for more details and/or changes.

Once your pull request was merged, Alchemy will have to update their API in production. The roll-out may take a couple of days.

> **Note**: If you don't see the changes after a few days, either comment on the pull request or reach out to a Flow team member.

## Verify Alchemy API support

Use the Alchemy APIs below to ensure your NFT collection is included in the responses.

### Endpoint: getNFTMetadata

The [`getNFTMetadata`](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api/getnftmetadata) endpoint returns metadata associated with a specific NFT.

```shell
curl https://flow-mainnet.g.alchemy.com/v2/demo/getNFTMetadata/?owner={ACCOUNT_ADDRESS_OF_NFT_OWNER}e&contractName={NAME_OF _DEPLOYED_CONTRACT}&contractAddress={ADDRESS_CONTRACT_IS_DEPLOYED_TO}aef&tokenId={ID_OF_NFT_IN_OWNERS_ACCOUNT}
```

> **Note**: Make sure you replace all four variables before making your API call: `ACCOUNT_ADDRESS_OF_NFT_OWNER`, `NAME_OF _DEPLOYED_CONTRACT`, `ADDRESS_CONTRACT_IS_DEPLOYED_TO`, and `ID_OF_NFT_IN_OWNERS_ACCOUNT`.

### Endpoint: getNFTs

The [`getNFTs`](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api/getnfts) endpoint returns a list of NFTs owned by a specific address.

```shell
curl https://flow-mainnet.g.alchemy.com/v2/demo/getNFTs/?owner={NFT_ACCOUNT_OWNERS_ADDRESS}&offset=0&limit=10
```

> **Note**: Make sure you replace `NFT_ACCOUNT_OWNERS_ADDRESS` with the account address.

## Request Blocto to list your NFT collection

Once your NFT collection is supported in the Alchemy API, you have to request an NFT listing with Blocto.

**[Fill out this form to request a Blocto NFT listing](https://docs.google.com/forms/d/e/1FAIpQLScrr67RLhfJ8bARJHTpp2SztOpQZwmdm7gsDmsqjTlTUUJt7Q/viewform)**.

After submitting the form, you should be all set to go with integrating your NFT collection into the Blocto wallet.
