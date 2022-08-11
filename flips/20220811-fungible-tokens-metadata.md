# Cadence Style Guide

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #tbd**    | [tbd](tbd)|
| **Author** | Álvaro Lillo Igualada (alvaro.lillo@dapperlabs.com) |
| **Sponsor**   | Josh Hannan (joshua.hannan@dapperlabs.com)             |
| **Updated**   | 2022-08-11                                           | 

## Objective

This proposal, in a similar fashion as the NFT Metadata, will make possible to create generic solutions that will interoperate through views rather than through hard-coded types. This will allow better interoperability between fungible tokens and external applications. 

## Motivation

TBD

## User Benefit

TBD

## Design Proposal

The core of this proposal is to add the following interface and have the `FungibleToken.Vault`s implement it. This is the same interface that can be found in the NFTs metadata contract.

```cadence
    /// Provides access to a set of metadata views. A struct or 
    /// resource (e.g. a Vault) can implement this interface to provide access to 
    /// the views that it supports.
    ///
    pub resource interface Resolver {
        pub fun getViews(): [Type]
        pub fun resolveView(_ view: Type): AnyStruct?
    }
```

Also, based on the experience acquired developing the NFT views a `FTView` that gives a fill picture of the FT, wrapping other views, is considered necessary

```cadence
    /// FTView wraps FTDisplay and FTVaultData, and is used 
    /// to give a complete picture of a FT. Most FTs should implement this 
    /// view.
    ///
    pub struct FTView {
        pub let ftDisplay: FTDisplay?     
        pub let vaultData: FTVaultData?
        init(
            ftDisplay : FTDisplay?,
            vaultData : FTVaultData?
        ) {
            self.ftDisplay = ftDisplay
            self.vaultData = vaultData
        }
    }
```

The views contained on the `FTView` will be two; `FTDisplay` that will help retrieving all the "human readable" information about the FT and the `FTVaultData` that will expose the data needed to interact with the FT (paths, types linked to those paths, similar to `NFTCollectionData`) 

```cadence
    /// View to expose the information needed to showcase this FT. 
    /// This can be used by applications to give an overview and 
    /// graphics of the FT.
    ///
    pub struct FTDisplay {
        // Name that should be used when displaying this FT.
        pub let name: String

        // Description that should be used to give an overview of this FT.
        pub let description: String

        /// A small logo that represents the FT.
        ///
        /// This field should be a web-friendly file (i.e JPEG, PNG)
        /// that can be displayed in lists, link previews, etc.
        pub let logo: AnyStruct{File}

        // External link to a URL to view more information about this collection.
        pub let externalURL: ExternalURL

        // Square-sized image to represent this collection.
        pub let squareImage: Media

        // Banner-sized image for this collection, recommended to have a size near 1200x630.
        pub let bannerImage: Media

        // Social links to reach this collection's social homepages.
        // Possible keys may be "instagram", "twitter", "discord", etc.
        pub let socials: {String: ExternalURL}

        init(
            name: String,
            description: String,
            logo: AnyStruct{File},
            externalURL: ExternalURL,
            squareImage: Media,
            bannerImage: Media,
            socials: {String: ExternalURL}
        ) {
            self.name = name
            self.description = description
            self.logo = logo
            self.externalURL = externalURL
            self.squareImage = squareImage
            self.bannerImage = bannerImage
            self.socials = socials
        }
    }
```

```cadence
    /// View to expose the information needed store and interact with a FT vault.
    /// This can be used by applications to setup a FT vault with proper 
    /// storage and public capabilities.
    ///
    pub struct FTVaultData {
        /// Path in storage where this FT vault is recommended to be stored.
        pub let storagePath: StoragePath

        /// Public path which must be linked to expose public capabilities of
        /// this FT, including standard FT interfaces and metadataviews 
        /// interfaces
        pub let publicPath: PublicPath

        /// Private path which should be linked to expose the provider
        /// capability to withdraw funds from the vault
        pub let providerPath: PrivatePath

        /// Type that should be linked at the aforementioned public path. This 
        /// is normally a restricted type with many interfaces. Notably the 
        /// `FT.Balance`, `FT.Receiver`, and `FungibleMetadataViews.Resolver` 
        /// interfaces are required.
        pub let publicLinkedType: Type

        /// Type that should be linked at the aforementioned private path. This 
        /// is normally a restricted type with at a minimum the `FT.Provider` 
        /// interface
        pub let providerLinkedType: Type

        /// Function that allows creation of an empty FT vault that is intended
        /// to store the funds.
        pub let createEmptyVault: ((): @FungibleToken.Vault)

        init(
            storagePath: StoragePath,
            publicPath: PublicPath,
            providerPath: PrivatePath,
            publicCollection: Type,
            publicLinkedType: Type,
            providerLinkedType: Type,
            createEmptyVaultFunction: ((): @FungibleToken.Vault)
        ) {
            pre {
                publicLinkedType.isSubtype(of: Type<&{FungibleToken.Receiver, FungibleToken.Balance, Resolver}>()): "Public type must include FungibleToken.Receiver, FungibleToken.Balance and FungibleMetadataViews.Resolver interfaces."
                providerLinkedType.isSubtype(of: Type<&{FungibleToken.Provider, Resolver}>()): "Provider type must include NonFungibleToken.Provider and FungibleMetadataViews.Resolver interface."
            }
            self.storagePath=storagePath
            self.publicPath=publicPath
            self.providerPath = providerPath
            self.publicLinkedType=publicLinkedType
            self.providerLinkedType = providerLinkedType
            self.createEmptyVault = createEmptyVaultFunction
        }
    }
```

In order to be able to use the `FTDisplay` we will need to re-use or re-implement (depending on if this ends up being part of the original `MetadataViews.cdc` contract or having its own contract) the following views: `ExternalURL`, `File`, `HTTPFile`, `IPFSFile`, `Media` and `Medias`. 

### Drawbacks

TBD

### Alternatives Considered

Since the `MetadataViews` contract has been a successful solution for increasing NFT interoperability no alternatives have been considered for the FT. 

### Performance Implications

Due to the potentially dynamic nature of this proposal, the methods that return metadata views can be implemented in any way that the author sees fit which could lead to some non-performant implementations.

### Dependencies

This proposal builds on the existing FT interface defined [here](https://github.com/onflow/flow-ft).

### Engineering Impact

When the style guide is defined, we should update all existing Cadence code to fullfil the agreed patterns.

### Best Practices

Fungible Token issuers should implement (as much as possible?) views to achieve the maximum ecosystem compatibility possible. 

### Tutorials and Examples

Guidelines on how to implement the new views will be added to the `ExampleToken.cdc` contract, and their used will be documented on the `flow-ft` repo docs.

### Compatibility

Fungible Token contract owners will need to update them to add implementations for the new methods.

### User Impact

This feature can be rolled out with no fear of changes to the user. However documentation should be provided on how they can change their contracts and add views.

## Related Issues

TBD

## Prior Art

None.

## Questions and Discussion Topics

Main friction point will be if we want this standard to be in a new different contract of if we want it to be part of the existent `MetadataViews.cdc` contract.

Am I missing any core views that should be mandatory from the beginning?

Could there be some view, like serial, that differentiates tokens from the same `Vault` depending for instance of when they where minted? (think of different years coins with the same value) Would that make them NFT rather than FT? Would ever any developer want to do that? How could we keep track of a single balance which contains slightly different tokens? Would that introduce an unnecessary complication when transferring tokens? (of course it would). This could make sense along with the [streamlined tokens proposal new `FungibleToken.Balance` interface that exposes a `getBalance()` function rather than a field just in case the FT owner wants to compute the balance](https://forum.onflow.org/t/streamlined-token-standards-proposal/3075)