---
title: NFT Storefront Smart Contract
---

## Primer

The `NFTStorefrontV2` contract lets you create a *non-custodial Resource (NFT) marketplace* on the FLOW blockchain. 

`NFTStorefrontV2` makes it simple for Sellers to list NFTs in dApp specific marketplaces. DApp developers leverage the APIs provided by the contract to manage listings being offered for sale and to transact NFT trades.

![dapps_1](https://user-images.githubusercontent.com/14581509/191749748-714f9d8f-cb41-4be4-a3d2-ec84cb8b5ffb.png)

Developers should use the `NFTStorefrontV2` to create their marketplace and to enable p2p purchases. The diagram below shows how dApps can facilitate the creation of NFT listings for different marketplaces and how marketplaces can filter their listings.

Listings made through a specific dApp storefront can be simultaneously listed on 3rd party marketplaces beyond that dApp. Well known 3rd party marketplaces listen for compatible NFT listing events enabling the automation of listings into their marketplace dashboards.

![dapps_2](https://user-images.githubusercontent.com/14581509/191753605-e1c48a57-0c3c-4509-808b-8fee4e7d32e8.png)

Using the `NFTStorefrontV2`, marketplaces can instantly and easily tap into the vibrant FLOW NFT ecosystem and allow NFT holders to list their NFTs and enables creator royalties.

Marketplaces then process an NFT trade by interacting directly with seller storefronts. Flow's account based model ensures that NFTs listed for sale always reside in the Seller account until traded, regardless of how many listings are posted across any number of marketplaces, for the same NFT.

![marketplace_1](https://user-images.githubusercontent.com/14581509/191755699-fe0570cb-80a3-408c-8eef-4051e3209481.png)

## Functional Overview

A general purpose sale support contract for NFTs implementing the Flow [`NonFungibleToken`](https://github.com/onflow/flow-nft/blob/master/contracts/NonFungibleToken.cdc) standard.
Each account that wants to list NFTs for sale creates a `Storefront` resource to store in their account and lists individual sales within that Storefront as Listings. There is usually one Storefront per account held at the `/storage/NFTStorefrontV2`.

Each listing can define one or more sale cuts taken out of the sale price to go to one or more addresses. Listing fees, royalties, or other considerations can be paid using sale cuts. Also, the listing can include a commission as one of these sale cuts is paid to whoever facilitates the purchase. 

Listings can have an optional list of marketplace [receiver capabilities](https://developers.flow.com/cadence/language/capability-based-access-control) used to receive the commission for fulfilling the listing. An NFT may be listed in one or more Listings, and the validity of each listing can easily be checked.

Interested parties can globally track Listing events on-chain and filter by NFT types, IDs and other characteristics to determine which to make available for purchase within their own marketplace UIs."
## Selling NFTs

`NFTStorefrontV2` offers a generic process for creating the listing for an NFT. It provides all the essential APIs to manage those listings independently. 

Many marketplaces create a single storefront resource to manage different individual listings. We recommend creating the listing under the user-owned storefront resource to make it trustless and platform-independent. Users should possess the `Storefront` resource under their account to create the listing using the storefront contract.

## Creating a successful listing using the NFTStorefrontV2 contract.

As recommended above, the first step is to create and store the [Storefront resource](#resource-storefront) in the user account using the [setup_account](https://github.com/onflow/nft-storefront/blob/main/transactions/setup_account.cdc) transaction. 

The next step is to create a listing under the newly created storefront resource. If the user (repetitive) already holds the storefront resource, then use the existing resource. The seller can come with multiple requirements for listing their NFTs, and We try our best to cover most of them below.

### **Scenario 1:** Selling NFTs corresponds to more than one cryptocurrency, i.e. FLOW, FUSD etc.

The `NFTStorefrontV2` contract doesn’t support selling an NFT for multiple different currencies with a single listing. However, this can be achieved by creating multiple listings for the same NFT for each different currency.

**Example -** Alice wants to sell a kitty and is open to receiving FLOW and FUSD

![scenario_1](https://user-images.githubusercontent.com/14581509/190966672-e1793fa3-112c-4273-b2a3-e81b8c94fd70.png)

Putting an NFT on sell called listing, seller can create a listing using [sell_item](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item.cdc) transaction by providing some required details to list an NFT, i.e. Receiving currency type, [Capability](https://developers.flow.com/cadence/language/capability-based-access-control) from where NFT will be deducted etc. If interested look [here](#fun-createListing()) for more details. 

To receive a different currency seller has to provide a different __Receiver currency type__ , i.e. `salePaymentVaultType` As depicted in the above diagram, There are two listing formations with almost the same inputs. The only differentiator is the `salePaymentVaultType` parameter that needs to be different when creating duplicate NFT listings with different sale currency types.  

### **Scenario 2:**  Peer-to-Peer (p2p) listing of NFT: A listing anyone can fulfil.

Dapps can leverage the **NFTStorefrontV2** to facilitate the creation of a listing for the seller independent of any marketplace. Dapps or marketplaces can list those listings on their platforms, or seller can settle it p2p.

The seller can use [sell_item](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item.cdc) transaction to create a p2p listing, providing the `marketplacesAddress` with an empty array. The seller has a choice of providing [commission](#commission) to the facilitator of sale, which can also act as a discount if the facilitator and the purchaser are the same.

### **Scenario 3:** The seller wants to list its NFT in different marketplaces.

`NFTStorefrontV2` offers two different ways of doing it.

- The seller can create a listing and provide the `marketplacesAddress` that it wants to have a listing on using [sell_item](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item.cdc) transaction.
    
    Marketplaces can listen to `ListingAvailable` events and check whether their address is included in the `commissionReceivers` list; If yes, the marketplace would be rewarded during the successful fulfilment of the listing.
    
    Example - Bob wants to list on marketplace 0xA, 0xB & 0xC and is willing to offer 10% commission on the sale price of the listing to the marketplaces.
    
    ![scenario_3](https://user-images.githubusercontent.com/14581509/190966834-8eda4ec4-e9bf-49ef-9dec-3c47a236d281.png)
    

- Another way to accomplish this is to create separate listings for each marketplace on which a user wants their listing using [sell_item_with_marketplace_cut](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item_with_marketplace_cut.cdc) transaction. In this case, the marketplace would be incentivized by earning one of the parts of the [`saleCut`](https://github.com/onflow/nft-storefront/blob/160e97aa802405ad26a3164bcaff0fde7ee52ad2/contracts/NFTStorefrontV2.cdc#L104) by appending marketplace saleCut in `saleCuts` array during the creation of the listing.


### Considerations

1. **Ghost listings -** *Ghost listings are listings which don’t have an underlying NFT in the seller’s account. However, the listing is still available for buyers to attempt to purchase*. StorefrontV2 is not immune to ghost listings. Usually, ghost listings will cause a purchaser’s transaction to fail, which is annoying but isn’t a significant problem. Ghost listings become a problem for the seller when the listed NFT comes back to the seller’s account after its original sale. The ghost listing will no longer be invalid when it comes back, and anyone can purchase it even if the seller doesn’t want to sell it at that price anymore.
    
    **Note -** *We recommend that marketplaces and p2p dApps create an off-chain notification service that tells their users (i.e., sellers) to remove the listings if they don’t hold the NFT anymore in the same account.*
    
2. **Expired listings -** `NFTStorefrontV2` introduces a safety measure to specify that a listing will expire after a certain period that can be set during the creation so no one can purchase the listing anymore. It is not a fool-proof safety measure, but it does give some safe ground to the sellers for the ghost listings & stale listings.
    
    **Note -** *We recommended for marketplaces and p2p dApps not to show the expired listings on their dashboards.*

## Purchasing NFTs

Purchasing NFTs through the `NFTStorefrontV2` is simple. The buyer has to provide the payment vault and the `commissionRecipient` , if applicable, during the purchase. p2p dApps don’t need any intermediaries to facilitate the purchase of listings. [`purchase`](#fun-purchase) API offered by the `Listing` resource gets used to facilitate the purchase of NFT.

During the listing purchase all saleCuts are paid automatically. This also includes distributing royalties for that NFT, if applicable. If the vault provided by the buyer lacks sufficient funds then the transaction will fail.

### Considerations

1. **Auto cleanup -** `NFTStorefrontV2` offers a unique ability to do auto cleanup of duplicate listings during a purchase. It comes with a drawback if one NFT has thousands of duplicate listings. It will become the bottleneck during purchasing one of the listings as it will likely trigger an out-of-gas error. 

    **Note -** *We recommended NOT to have more than 50 (TBD) duplicate listings of any given NFT.*

2. **Unsupported receiver capability** - A common pitfall during the purchase of an NFT that some saleCut receivers don’t have a supported receiver capability because that entitled sale cut would transfer to first valid sale cut receiver. However, it can be partially solved by providing the generic receiver using the [`FungibleTokenSwitchboard`](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenSwitchboard.cdc) contract and adding all the currency capabilities the beneficiary wants to receive. More on the `FungibleTokenSwitchboard` can be read [here](https://github.com/onflow/flow-ft#fungible-token-switchboard)


## Enabling creator royalties for NFTs

The `NFTStorefrontV2` contract optionally supports paying royalties to the minter account for secondary resales of that NFT after the original sale. Marketplaces decide for themselves whether to support creator royalties when validating listings for sale eligibility. We encourage all marketplaces to support creator royalties and support community creators in the **FLOW** ecosystem.

Providing that a seller's NFT supports the [Royalty Metadata View](https://github.com/onflow/flow-nft/blob/21c254438910c8a4b5843beda3df20e4e2559625/contracts/MetadataViews.cdc#L335) standard, then marketplaces can honor royalties payments at time of purchase. `NFTStorefrontV2` dynamically calculates the royalties owed at the time of listing creation and applies it as a saleCut of the listing at the time of purchase.

```cadence
// Check whether the NFT implements the MetadataResolver or not.
if nft.getViews().contains(Type<MetadataViews.Royalties>()) {
		// Resolve the royalty view
    let royaltiesRef = nft.resolveView(Type<MetadataViews.Royalties>())?? panic("Unable to retrieve the royalties")
	  // Fetch the royalties.
		let royalties = (royaltiesRef as! MetadataViews.Royalties).getRoyalties()
		// Append the royalties as the salecut
    for royalty in royalties {
        self.saleCuts.append(NFTStorefrontV2.SaleCut(receiver: royalty.receiver, amount: royalty.cut * effectiveSaleItemPrice))
        totalRoyaltyCut = totalRoyaltyCut + royalty.cut * effectiveSaleItemPrice
    }
}
```

Complete transaction can be viewed [here](https://github.com/onflow/nft-storefront/blob/main/transactions/sell_item.cdc).

saleCut only supports a single token receiver type and therefore beneficiaries of a `saleCut` can also only receive the token type used for the purchase. To support different token types for saleCuts we recommend using the [FungibleTokenSwitchboard](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenSwitchboard.cdc) contract. The contract defines a generic receiver for fungible tokens which itself handles routing of tokens to the respective vault for that token type. Learn more about this [here](https://github.com/onflow/flow-ft#fungible-token-switchboard).

## Enabling marketplace commissions for NFT sales

`NFTStorefrontV2` enables optional commissions on trades for marketplaces which require it as a condition to list a NFT for sale. Commission & commission receivers are set by the seller during initial listing creation. At time of purchase the commission amount is paid once only to the commission receiver matching the marketplace receiver address which facilitated the sale.

For NFT listings in marketplaces which don't require commission, commission receivers can be set as nil. Setting the buyer of the NFT and `commissionRecipient` to the same has the effect of applying a discount for the buyer.

![scenario_2](https://user-images.githubusercontent.com/14581509/190966499-c176203f-b6a6-4422-860f-1bf6f2bcdbb6.png).

## APIs & Events offered by NFTStorefrontV2

## Resource Interface `ListingPublic`

```cadence
resource interface ListingPublic {
    pub fun borrowNFT(): &NonFungibleToken.NFT?
    pub fun purchase(
          payment: @FungibleToken.Vault, 
          commissionRecipient: Capability<&{FungibleToken.Receiver}>?,
      ): @NonFungibleToken.NFT
    pub fun getDetails(): ListingDetail
    pub fun getAllowedCommissionReceivers(): [Capability<&{FungibleToken.Receiver}>]?
}
```
An interface providing a useful public interface to a Listing.

### Functions

**fun `borrowNFT()`**

```cadence
fun borrowNFT(): &NonFungibleToken.NFT?
```
This will assert in the same way as the NFT standard borrowNFT()
if the NFT is absent, for example if it has been sold via another listing.

---

**fun `purchase()`**

```cadence
fun purchase(payment FungibleToken.Vault, commissionRecipient Capability<&{FungibleToken.Receiver}>?): NonFungibleToken.NFT
```
Facilitates the purchase of the listing by providing the payment vault
and the commission recipient capability if there is a non-zero commission for the given listing.
Respective saleCuts are transferred to beneficiaries and funtion return underlying or listed NFT.

---

**fun `getDetails()`**

```cadence
fun getDetails(): ListingDetails
```
Fetches the details of the listings

---

**fun `getAllowedCommissionReceivers()`**

```cadence
fun getAllowedCommissionReceivers(): [Capability<&{FungibleToken.Receiver}>]?
```
Fetches the allowed marketplaces capabilities or commission receivers for the underlying listing.
If it returns `nil` then commission is up to grab by anyone.

---

## Resource `Storefront`

```cadence
resource Storefront {
    pub fun createListing(
            nftProviderCapability: Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>,
            nftType: Type,
            nftID: UInt64,
            salePaymentVaultType: Type,
            saleCuts: [SaleCut],
            marketplacesCapability: [Capability<&{FungibleToken.Receiver}>]?,
            customID: String?,
            commissionAmount: UFix64,
            expiry: UInt64
         ): UInt64
    pub fun removeListing(listingResourceID: UInt64)
    pub fun getListingIDs(): [UInt64]
    pub fun getDuplicateListingIDs(nftType: Type, nftID: UInt64, listingID: UInt64): [UInt64]
    pub fun cleanupExpiredListings(fromIndex: UInt64, toIndex: UInt64)
    pub fun borrowListing(listingResourceID: UInt64): &Listing{ListingPublic}?
}
```
A resource that allows its owner to manage a list of Listings, and anyone to interact with them
in order to query their details and purchase the NFTs that they represent.

Implemented Interfaces:
  - `StorefrontManager`
  - `StorefrontPublic`


### Initializer

```cadence
fun init()
```

### Functions

**fun `createListing()`**

```cadence
fun createListing(nftProviderCapability Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>, nftType Type, nftID UInt64, salePaymentVaultType Type, saleCuts [SaleCut], marketplacesCapability [Capability<&{FungibleToken.Receiver}>]?, customID String?, commissionAmount UFix64, expiry UInt64): UInt64
```
insert
Create and publish a Listing for an NFT.

---

**fun `removeListing()`**

```cadence
fun removeListing(listingResourceID UInt64)
```
removeListing
Remove a Listing that has not yet been purchased from the collection and destroy it.

---

**fun `getListingIDs()`**

```cadence
fun getListingIDs(): [UInt64]
```
getListingIDs
Returns an array of the Listing resource IDs that are in the collection

---

**fun `getDuplicateListingIDs()`**

```cadence
fun getDuplicateListingIDs(nftType Type, nftID UInt64, listingID UInt64): [UInt64]
```
getDuplicateListingIDs
Returns an array of listing IDs that are duplicates of the given `nftType` and `nftID`.

---

**fun `cleanupExpiredListings()`**

```cadence
fun cleanupExpiredListings(fromIndex UInt64, toIndex UInt64)
```
cleanupExpiredListings
Cleanup the expired listing by iterating over the provided range of indexes.

---

**fun `borrowListing()`**

```cadence
fun borrowListing(listingResourceID UInt64): &Listing{ListingPublic}?
```
borrowListing
Returns a read-only view of the listing for the given listingID if it is contained by this collection.

---

## Resource Interface `StorefrontPublic`

```cadence
resource interface StorefrontPublic {
    pub fun getListingIDs(): [UInt64]
    pub fun getDuplicateListingIDs(nftType: Type, nftID: UInt64, listingID: UInt64): [UInt64]
    pub fun cleanupExpiredListings(fromIndex: UInt64, toIndex: UInt64)
    pub fun borrowListing(listingResourceID: UInt64): &Listing{ListingPublic}?
    pub fun cleanupPurchasedListings(listingResourceID: UInt64)
    pub fun getExistingListingIDs(nftType: Type, nftID: UInt64): [UInt64]
}
```

StorefrontPublic
An interface to allow listing and borrowing Listings, and purchasing items via Listings
in a Storefront.

### Functions

**fun `getListingIDs()`**

```cadence
fun getListingIDs(): [UInt64]
```
getListingIDs Returns an array of the Listing resource IDs that are in the collection

---

**fun `getDuplicateListingIDs()`**

```cadence
fun getDuplicateListingIDs(nftType Type, nftID UInt64, listingID UInt64): [UInt64]
```
getDuplicateListingIDs Returns an array of listing IDs that are duplicates of the given nftType and nftID.

---

**fun `borrowListing()`**

```cadence
fun borrowListing(listingResourceID UInt64): &Listing{ListingPublic}?
```
borrowListing Returns a read-only view of the listing for the given listingID if it is contained by this collection.

---

**fun `cleanupExpiredListings()`**

```cadence
fun cleanupExpiredListings(fromIndex UInt64, toIndex UInt64)
```
cleanupExpiredListings Cleanup the expired listing by iterating over the provided range of indexes.

---

**fun `cleanupPurchasedListings()`**

```cadence
fun cleanupPurchasedListings(listingResourceID: UInt64)
```
cleanupPurchasedListings
Allows anyone to remove already purchased listings.

---

**fun `getExistingListingIDs()`**

```cadence
fun getExistingListingIDs(nftType Type, nftID UInt64): [UInt64]
```
getExistingListingIDs
Returns an array of listing IDs of the given `nftType` and `nftID`.

---

## Events

**event `StorefrontInitialized`**

```cadence
event StorefrontInitialized(storefrontResourceID: UInt64)
```
A Storefront resource has been created. Consumers can now expect events from this Storefront. Note that we do not specify an address: we cannot and should not. Created resources do not have an owner address, and may be moved
after creation in ways we cannot check. `ListingAvailable` events can be used to determine the address
of the owner of the Storefront at the time of the listing but only at that precise moment in that precise transaction. If the seller moves the Storefront while the listing is valid, that is on them.

---

**event `StorefrontDestroyed`**

```cadence
event StorefrontDestroyed(storefrontResourceID: UInt64)
```
A Storefront has been destroyed. Event consumers can now stop processing events from this Storefront.
Note - we do not specify an address.

---

**event `ListingAvailable`**

```cadence
event ListingAvailable(storefrontAddress: Address, listingResourceID: UInt64, nftType: Type, nftUUID: UInt64, nftID: UInt64, salePaymentVaultType: Type, salePrice: UFix64, customID: String?, commissionAmount: UFix64, commissionReceivers: [Address]?, expiry: UInt64)
```

Above event gets emitted when a listing has been created and added to a Storefront resource. The Address values here are valid when the event is emitted, but the state of the accounts they refer to may change outside of the
`NFTStorefrontV2` workflow, so be careful to check when using them.

---

**event `ListingCompleted`**

```cadence
event ListingCompleted(listingResourceID: UInt64, storefrontResourceID: UInt64, purchased: Bool, nftType: Type, nftUUID: UInt64, nftID: UInt64, salePaymentVaultType: Type, salePrice: UFix64, customID: String?, commissionAmount: UFix64, commissionReceiver: Address?, expiry: UInt64)
```
The listing has been resolved. It has either been purchased, removed or destroyed.

---

**event `UnpaidReceiver`**

```cadence
event UnpaidReceiver(receiver: Address, entitledSaleCut: UFix64)
```
A entitled receiver has not been paid during the sale of the NFT.

---


**Holistic process flow diagram of NFTStorefrontV2 -** 

![NFT Storefront Process flow](https://user-images.githubusercontent.com/14581509/191960793-ff153e5d-2934-410c-b724-5c5dffd2c20f.png)


## Glossary

SaleCut - A struct consists a recipient and amount of token ,i.e. cut that must be sent to recipient when a NFT get sold.
