---
title: "Composable Smart Contracts: Marketplace"
slug: "composable-smart-contracts-marketplace"
hidden: false
createdAt: "2020-02-24T19:19:56.343Z"
updatedAt: "2020-09-17T14:52:25.731Z"
---
In this tutorial, we're going to create a marketplace that uses both the fungible and non-fungible token (NFTs) contracts that we have learned about in previous tutorials.

---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/5a5f4fdf-f499-47a4-aef7-f01713e61fde\" target=\"_blank\">https://play.onflow.org/5a5f4fdf-f499-47a4-aef7-f01713e61fde</a>\nThe tutorial will be asking you to take various actions to interact with this code."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."
}
[/block]
Marketplaces are a popular application of blockchain technology and smart contracts. When there are NFTs in existence, users will want to be able to buy and sell them with their fungible tokens. 

Now that there is a standard for both fungible and non-fungible tokens, we can build a marketplace that uses both. This is referred to as **composability**: the ability for developers to leverage shared resources, such as code or userbases, and use them as building blocks for new applications. Flow is designed to enable composability because it empowers developers to do more with less, which can lead to rapid innovation. 

To create a marketplace, we need to integrate the functionality of both fungible and non-fungible tokens into a single contract that gives users control over their money and assets. To accomplish this, we're going to take you through these steps to create a composable smart contract and get comfortable with the marketplace:

1. Ensure that your fungible token and non-fungible token contracts are deployed and set up correctly.
2. Deploy the marketplace type declarations to account `0x03`.
3. Create a marketplace object and store it in your account storage, putting an NFT up for sale and publishing a public capability for your sale.
4. Use a different account to purchase the NFT from the sale.
5. Run a script to verify that the NFT was purchased.

**Before proceeding with this tutorial**, you need to complete the [Fungible Tokens](doc:fungible-tokens) and [Non-Fungible Token](doc:non-fungible-tokens) tutorials to understand how the building blocks of this smart contract work. 

# Marketplace Design

---

One way to implement a marketplace is to have a central smart contract that users deposit their NFTs and their price into, and have anyone come by and be able to buy the token for that price. This approach is reasonable, but it centralizes the process. We want users to be able to maintain ownership of the NFTs that they are trying to sell while they are trying to sell them.

Instead of taking this centralized approach, each user can list a sale in their account. Then, users could either provide a reference to their sale to an application that can list it centrally, or to a central sale aggregator smart contract if they want the entire transaction to stay on-chain. This way, the owner of the token keeps custody of their token while it is on sale.
[block:callout]
{
  "type": "info",
  "body": "Before we start, we need to confirm the state of your accounts. \n\nIf you haven't already, please perform the steps in [Quick Set-up for Marketplace](quick-set-up-for-marketplace) to ensure that the Fungible Token and Non-Fungible Token contracts are deployed to account 1 and 2 and own some tokens. Your accounts should look like this:"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/998bb22-diagram-marketplace.png",
        "diagram-marketplace.png",
        1766,
        938,
        "#efefef"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "You can run the `CheckSetupScript.cdc` script to ensure that your accounts are correctly set up:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// CheckSetupScript.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This script checks that the accounts are set up correctly for the marketplace tutorial.\n//\n// Account 0x01: Vault Balance = 40, NFT.id = 1\n// Account 0x02: Vault Balance = 20, No NFTs\npub fun main() {\n  // Get the accounts' public account objects\n  let acct1 = getAccount(0x01)\n  let acct2 = getAccount(0x02)\n\n  // Get references to the account's receivers\n  // by getting their public capability\n  // and borrowing a reference from the capability\n  let acct1ReceiverRef = acct1.getCapability(/public/MainReceiver)!\n                          .borrow<&FungibleToken.Vault{FungibleToken.Balance}>()!\n  let acct2ReceiverRef = acct2.getCapability(/public/MainReceiver)!\n                          .borrow<&FungibleToken.Vault{FungibleToken.Balance}>()!\n\n  // Log the Vault balance of both accounts and ensure they are\n  // the correct numbers.\n  // Account 0x01 should have 40.\n  // Account 0x02 should have 20.\n  log(\"Account 1 Balance\")\n  log(acct1ReceiverRef.balance)\n  log(\"Account 2 Balance\")\n  log(acct2ReceiverRef.balance)\n\n  // verify that the balances are correct\n  if acct1ReceiverRef.balance != UFix64(40) || acct2ReceiverRef.balance != UFix64(20) {\n      panic(\"Wrong balances!\")\n  }\n\n  // Find the public Receiver capability for their Collections\n  let acct1Capability = acct1.getCapability(/public/NFTReceiver)!\n  let acct2Capability = acct2.getCapability(/public/NFTReceiver)!\n\n  // borrow references from the capabilities\n  let nft1Ref = acct1Capability.borrow<&{NonFungibleToken.NFTReceiver}>()!\n  let nft2Ref = acct2Capability.borrow<&{NonFungibleToken.NFTReceiver}>()!\n\n  // Print both collections as arrays of IDs\n  log(\"Account 1 NFTs\")\n  log(nft1Ref.getIDs())\n\n  log(\"Account 2 NFTs\")\n  log(nft2Ref.getIDs())\n\n  // verify that the collections are correct\n  if nft1Ref.getIDs()[0] != UInt64(1) || nft2Ref.getIDs().length != 0 {\n      panic(\"Wrong Collections!\")\n  }\n}\n",
      "language": "swift",
      "name": "CheckSetupScript.cdc"
    }
  ]
}
[/block]
    
You should see something similar to this output if your accounts are set up correctly. They are in the same state that they would have been in if you followed the [Fungible Tokens](doc:fungible-tokens) and [Non-Fungible Tokens](doc:non-fungible-tokens) tutorials in succession:

```
"Account 1 Vault Balance"
40
"Account 2 Vault Balance"
20
"Account 1 NFTs"
[1]
"Account 2 NFTs"
[]
```


Now that your accounts are in the correct state, we can build a marketplace that enables the sale of NFT's between accounts.

# Setting up an NFT **Marketplace**

---

Every user who wants to sell a NFT will store an instance of a `SaleCollection` resource in their account storage.
[block:callout]
{
  "type": "info",
  "body": "Switch to account `0x03`.\nOpen `Marketplace.cdc`\nWith `Marketplace.cdc` open, click the `Deploy` button that appears at the bottom right of the editor\n`Marketplace.cdc` should contain the following contract definition:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// Marketplace.cdc\n//\n// The Marketplace contract is a sample implementation of an NFT Marketplace on Flow.\n//\n// This contract allows users to put their NFTs up for sale. Other users\n// can purchase these NFTs with fungible tokens.\n\npub contract Marketplace {\n\n  // Event that is emitted when a new NFT is put up for sale\n  pub event ForSale(id: UInt64, price: UFix64)\n\n  // Event that is emitted when the price of an NFT changes\n  pub event PriceChanged(id: UInt64, newPrice: UFix64)\n\n  // Event that is emitted when a token is purchased\n  pub event TokenPurchased(id: UInt64, price: UFix64)\n\n  // Event that is emitted when a seller withdraws their NFT from the sale\n  pub event SaleWithdrawn(id: UInt64)\n\n  // Interface that users will publish for their Sale collection\n  // that only exposes the methods that are supposed to be public\n  //\n  pub resource interface SalePublic {\n    pub fun purchase(tokenID: UInt64, recipient: &AnyResource{NonFungibleToken.NFTReceiver}, buyTokens: @FungibleToken.Vault)\n    pub fun idPrice(tokenID: UInt64): UFix64?\n    pub fun getIDs(): [UInt64]\n  }\n\n  // SaleCollection\n  //\n  // NFT Collection object that allows a user to put their NFT up for sale\n  // where others can send fungible tokens to purchase it\n  //\n  pub resource SaleCollection: SalePublic {\n\n    // Dictionary of the NFTs that the user is putting up for sale\n    pub var forSale: @{UInt64: NonFungibleToken.NFT}\n\n    // Dictionary of the prices for each NFT by ID\n    pub var prices: {UInt64: UFix64}\n\n    // The fungible token vault of the owner of this sale.\n    // When someone buys a token, this resource can deposit\n    // tokens into their account.\n    access(account) let ownerVault: &AnyResource{FungibleToken.Receiver}\n\n    init (vault: &AnyResource{FungibleToken.Receiver}) {\n        self.forSale <- {}\n        self.ownerVault = vault\n        self.prices = {}\n    }\n\n    // withdraw gives the owner the opportunity to remove a sale from the collection\n    pub fun withdraw(tokenID: UInt64): @NonFungibleToken.NFT {\n        // remove the price\n        self.prices.remove(key: tokenID)\n        // remove and return the token\n        let token <- self.forSale.remove(key: tokenID) ?? panic(\"missing NFT\")\n        return <-token\n    }\n\n    // listForSale lists an NFT for sale in this collection\n    pub fun listForSale(token: @NonFungibleToken.NFT, price: UFix64) {\n        let id = token.id\n\n        // store the price in the price array\n        self.prices[id] = price\n\n        // put the NFT into the the forSale dictionary\n        let oldToken <- self.forSale[id] <- token\n        destroy oldToken\n\n        emit ForSale(id: id, price: price)\n    }\n\n    // changePrice changes the price of a token that is currently for sale\n    pub fun changePrice(tokenID: UInt64, newPrice: UFix64) {\n        self.prices[tokenID] = newPrice\n\n        emit PriceChanged(id: tokenID, newPrice: newPrice)\n    }\n\n    // purchase lets a user send tokens to purchase an NFT that is for sale\n    pub fun purchase(tokenID: UInt64, recipient: &AnyResource{NonFungibleToken.NFTReceiver}, buyTokens: @FungibleToken.Vault) {\n        pre {\n            self.forSale[tokenID] != nil && self.prices[tokenID] != nil:\n                \"No token matching this ID for sale!\"\n            buyTokens.balance >= (self.prices[tokenID] ?? UFix64(0)):\n                \"Not enough tokens to by the NFT!\"\n        }\n\n        // get the value out of the optional\n        let price = self.prices[tokenID]!\n\n        self.prices[tokenID] = nil\n\n        // deposit the purchasing tokens into the owners vault\n        self.ownerVault.deposit(from: <-buyTokens)\n\n        // deposit the NFT into the buyers collection\n        recipient.deposit(token: <-self.withdraw(tokenID: tokenID))\n\n        emit TokenPurchased(id: tokenID, price: price)\n    }\n\n    // idPrice returns the price of a specific token in the sale\n    pub fun idPrice(tokenID: UInt64): UFix64? {\n        return self.prices[tokenID]\n    }\n\n    // getIDs returns an array of token IDs that are for sale\n    pub fun getIDs(): [UInt64] {\n        return self.forSale.keys\n    }\n\n    destroy() {\n        destroy self.forSale\n    }\n  }\n\n  // createCollection returns a new collection resource to the caller\n  pub fun createSaleCollection(ownerVault: &{FungibleToken.Receiver}): @SaleCollection {\n    return <- create SaleCollection(vault: ownerVault)\n  }\n}\n ",
      "language": "swift",
      "name": "Marketplace.cdc"
    }
  ]
}
[/block]
This marketplace contract has resources that function similarly to the NFT `Collection` that was explained in [Non-Fungible Tokens](doc:non-fungible-tokens), with a few differences and additions:

- This marketplace contract has methods to add and remove NFTs, but these functions also involve setting and removing a price. When a user wants to put their NFT up for sale, they do so by depositing it into the collection with the `listForSale` function. Then, another user can call the `purchase` method, sending their `Vault` that contains the currency they are using to make the purchase. The buyer also includes a reference to their NFT `Collection` so that the purchased token can be immediately deposited into their collection when the purchase is made.
- This marketplace contract stores a reference: `pub let ownerVault: &FungibleToken.Receiver`. 
The owner of the sale saves a reference to their Fungible Token `Receiver` within the sale. This     allows the sale resource to be able to immediately deposit the currency that was used to buy the NFT into the owners `Vault` when a purchase is made.
- This marketplace contract includes events. Cadence supports defining events within contracts that can be emitted when important actions happen.


        pub event ForSale(id: UInt64, price: UFix64)
        pub event PriceChanged(id: UInt64, newPrice: UFix64)
        pub event TokenPurchased(id: UInt64, price: UFix64)
        pub event SaleWithdrawn(id: UInt64)


Events are declared by indicating the access level, `event`, and the name and parameters of the event, like a function declaration. Events cannot modify state at all; they indicate when important actions happen in the smart contract. Events are emitted with the `emit` keyword followed by the invocation of the event as if it were a function call. External applications can monitor the blockchain to take action when certain events are emitted.

At this point, we should have a fungible token `Vault` and a NFT `Collection` in both accounts' storage. Account `0x01` should have an NFT in their collection. 

You can create a `SaleCollection` and list account `0x01`'s token for sale by following these steps:
[block:callout]
{
  "type": "info",
  "body": "- Open `Transaction1.cdc` \n- Select account `0x01` as the only signer and click the `Send` button to submit the transaction."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction1.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\nimport Marketplace from 0x03\n\n// This transaction creates a new Sale Collection object,\n// lists an NFT for sale, puts it in account storage,\n// and creates a public capability to the sale so that others can buy the token.\ntransaction {\n\n  prepare(acct: AuthAccount) {\n\n    // Borrow a reference to the stored Vault\n    let receiver = acct.borrow<&{FungibleToken.Receiver}>(from: /storage/MainVault)\n    \t\t?? panic(\"Could not borrow a reference to the owner's vault\")\n\n    // Create a new Sale object, \n    // initializing it with the reference to the owner's vault\n    let sale <- Marketplace.createSaleCollection(ownerVault: receiver)\n\n    // borrow a reference to the NFTCollection in storage\n    let collectionRef = acct.borrow<&NonFungibleToken.Collection>(from: /storage/NFTCollection)\n    \t\t?? panic(\"Could not borrow a reference to the owner's nft collection\")\n\n    // Withdraw the NFT from the collection that you want to sell\n    // and move it into the transaction's context\n    let token <- collectionRef.withdraw(withdrawID: 1)\n\n    // List the token for sale by moving it into the sale object\n    sale.listForSale(token: <-token, price: UFix64(10))\n\n    // Store the sale object in the account storage \n    acct.save<@Marketplace.SaleCollection>(<-sale, to: /storage/NFTSale)\n\n    // Create a public capability to the sale so that others can call its methods\n    acct.link<&Marketplace.SaleCollection{Marketplace.SalePublic}>(/public/NFTSale, target: /storage/NFTSale)\n\n    log(\"Sale Created for account 1. Selling NFT 1 for 10 tokens\")\n  }\n}\n ",
      "language": "swift",
      "name": "Transaction1.cdc"
    }
  ]
}
[/block]
This transaction:

1. Borrows the reference to the owners `Vault`
2. Creates the `SaleCollection`, which stores their `Vault` reference.
3. Withdraws the owner's token from their normal collection
4. Lists that token for sale and sets its price
5. Stores the sale in their account storage and publishes a capability that allows others to purchase any NFTs for sale.

Lets run a script to ensure that the sale was created correctly.
[block:callout]
{
  "type": "info",
  "body": "- Open `Script2.cdc`\n- Click the `Execute` button to print the ID and price of the NFT that account `0x01` has for sale"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Script2.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\nimport Marketplace from 0x03\n\n// This script prints the NFTs that account 0x01 has for sale.\npub fun main() {\n  // Get the public account object for account 0x01\n  let account1 = getAccount(0x01)\n\n  // Find the public Sale reference to their Collection\n  let acct1saleRef = account1.getCapability(/public/NFTSale)!\n                             .borrow<&AnyResource{Marketplace.SalePublic}>()\n  \t\t\t\t\t\t\t\t\t\t\t\t\t?? panic(\"Could not borrow a reference to the sale\")\n\n  // Los the NFTs that are for sale\n  log(\"Account 1 NFTs for sale\")\n  log(acct1saleRef.getIDs())\n  log(\"Price\")\n  log(acct1saleRef.idPrice(tokenID: 1))\n}\n",
      "language": "swift",
      "name": "Script2.cdc"
    }
  ]
}
[/block]
This script should complete and print something like this:

```
"Account 1 NFTs for sale"
[1]
"Price"
10
```

## Purchasing an NFT

---

The buyer can now purchase the seller's NFT by using the transaction in `Transaction2.cdc`.
[block:callout]
{
  "type": "info",
  "body": "- Open the `Transaction2.cdc` file\n- Select account `0x02` as the only signer and click the `Send` button"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction2.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\nimport Marketplace from 0x03\n\n// This transaction uses the signers Vault tokens to purchase an NFT\n// from the Sale collection of account 0x01.\ntransaction {\n\n  // reference to the buyer's NFT collection where they\n  // will store the bought NFT\n  let collectionRef: &AnyResource{NonFungibleToken.NFTReceiver}\n\n  // Vault that will hold the tokens that will be used to\n  // but the NFT\n  let temporaryVault: @FungibleToken.Vault\n\n  prepare(acct: AuthAccount) {\n\n    // get the references to the buyer's fungible token Vault \n    // and NFT Collection Receiver\n    self.collectionRef = acct.borrow<&AnyResource{NonFungibleToken.NFTReceiver}>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t(from: /storage/NFTCollection)\n    \t\t?? panic(\"Could not borrow reference to the signer's nft collection\")\n    let vaultRef = acct.borrow<&FungibleToken.Vault>(from: /storage/MainVault)\n    \t\t?? panic(\"Could not borrow reference to the signer's vault\")\n\n    // withdraw tokens from the buyers Vault\n    self.temporaryVault <- vaultRef.withdraw(amount: UFix64(10))\n  }\n\n  execute {\n    // get the read-only account storage of the seller\n    let seller = getAccount(0x01)\n\n    // get the reference to the seller's sale\n    let saleRef = seller.getCapability(/public/NFTSale)!\n                        .borrow<&AnyResource{Marketplace.SalePublic}>()\n    \t\t\t\t\t\t\t\t\t\t?? panic(\"could not borrow reference to the seller's sale\")\n\n    // purchase the NFT the the seller is selling, giving them the reference\n    // to your NFT collection and giving them the tokens to buy it\n    saleRef.purchase(tokenID: 1, \n                     recipient: self.collectionRef, \n                     buyTokens: <-self.temporaryVault)\n\n    log(\"Token 1 has been bought by account 2!\")\n  }\n}\n ",
      "language": "swift",
      "name": "Transaction2.cdc"
    }
  ]
}
[/block]
This transaction:

1. Gets the public account object for account `0x01`
2. Gets the references to the buyer's stored resources
3. Withdraws the tokens that the buyer will use to purchase the NFT
4. Gets the reference to the seller's public sale
5. Calls the `purchase` function, passing in the tokens and the `Collection` reference. Then `purchase` deposits the bought NFT directly into the buyers collection.

## Verifying the NFT Was Purchased Correctly

---

You can run now run a script to verify that the NFT was purchased correctly because:

- account `0x01` has 50 tokens and does not have any NFTs for sale or in their collection and account
- account `0x02` has 10 tokens and an NFT with id=1

To run a script that verifies the NFT was purchased correctly, follow these steps: 
[block:callout]
{
  "type": "info",
  "body": "- Open the `Script3.cdc` file\n- Click `Execute` button\n`Script3.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Script3.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\nimport Marketplace from 0x03\n\n// This script checks that the Vault balances and NFT collections are correct\n// for both accounts.\n//\n// Account 1: Vault balance = 50, No NFTs\n// Account 2: Vault balance = 10, NFT ID=1\npub fun main() {\n  // Get the accounts' public account objects\n  let acct1 = getAccount(0x01)\n  let acct2 = getAccount(0x02)\n\n  // Get references to the account's receivers\n  // by getting their public capability\n  // and borrowing a reference from the capability\n  let acct1ReceiverRef = acct1.getCapability(/public/MainReceiver)!\n                          .borrow<&FungibleToken.Vault{FungibleToken.Balance}>()\n  \t\t\t\t\t\t\t\t\t\t\t?? panic(\"Could not borrow reference to acct1 vault\")\n  let acct2ReceiverRef = acct2.getCapability(/public/MainReceiver)!\n                          .borrow<&FungibleToken.Vault{FungibleToken.Balance}>()\n  \t\t\t\t\t\t\t\t\t\t\t?? panic(\"Could not borrow reference to acct2 vault\")\n\n  // Log the Vault balance of both accounts and ensure they are\n  // the correct numbers.\n  // Account 0x01 should have 50.\n  // Account 0x02 should have 10.\n  log(\"Account 1 Balance\")\n  log(acct1ReceiverRef.balance)\n  log(\"Account 2 Balance\")\n  log(acct2ReceiverRef.balance)\n\n  // verify that the balances are correct\n  if acct1ReceiverRef.balance != UFix64(50) \n  \t || acct2ReceiverRef.balance != UFix64(10) \n  {\n      panic(\"Wrong balances!\")\n  }\n\n  // Find the public Receiver capability for their Collections\n  let acct1Capability = acct1.getCapability(/public/NFTReceiver)!\n  let acct2Capability = acct2.getCapability(/public/NFTReceiver)!\n\n  // borrow references from the capabilities\n  let nft1Ref = acct1Capability.borrow<&{NonFungibleToken.NFTReceiver}>()\n  \t?? panic(\"Could not borrow reference to acct1 nft collection\")\n  let nft2Ref = acct2Capability.borrow<&{NonFungibleToken.NFTReceiver}>()\n  \t?? panic(\"Could not borrow reference to acct2 nft collection\")\n\n  // Print both collections as arrays of IDs\n  log(\"Account 1 NFTs\")\n  log(nft1Ref.getIDs())\n\n  log(\"Account 2 NFTs\")\n  log(nft2Ref.getIDs())\n\n  // verify that the collections are correct\n  if nft2Ref.getIDs()[0] != UInt64(1) || nft1Ref.getIDs().length != 0 {\n      panic(\"Wrong Collections!\")\n  }\n\n  // Get the public sale reference for Account 0x01\n  let acct1SaleRef = acct1.getCapability(/public/NFTSale)!\n                          .borrow<&AnyResource{Marketplace.SalePublic}>()!\n\n  // Print the NFTs that account 0x01 has for sale\n  log(\"Account 1 NFTs for sale\")\n  log(acct1SaleRef.getIDs())\n  if acct1SaleRef.getIDs().length != 0 { panic(\"Sale should be empty!\") }\n}\n\n",
      "language": "swift",
      "name": "Script3.cdc"
    }
  ]
}
[/block]
If you did everything correctly, the transaction should succeed and it should print something similar to this:

```
"Account 1 Vault Balance"
50
"Account 2 Vault Balance"
10
"Account 1 NFTs"
[]
"Account 2 NFTs"
[1]
"Account 1 NFTs for Sale"
[]
```

Congratulations, you have successfully implemented a simple marketplace in Cadence and used it to allow one account to buy an NFT from another!

# Scaling the Marketplace

---

A user can hold a sale in their account with these resources and transactions. Support for a central marketplace where users can discover sales is relatively easy to implement and can build on what we already have. If we wanted to build a central marketplace on-chain, we could use a contract that looks something like this:
[block:code]
{
  "codes": [
    {
      "code": "// Marketplace would be the central contract where people can post their sale\n// references so that anyone can access them\npub contract Marketplace {\n    // Data structure to store active sales\n    pub var tokensForSale: [&SaleCollection]\n\n    // listSaleCollection lists a users sale reference in the array\n    // and returns the index of the sale so that users can know\n    // how to remove it from the marketplace\n    pub fun listSaleCollection(collection: &SaleCollection): Int {\n        self.tokensForSale.append(collection)\n        return (self.tokensForSale.length - 1)\n    }\n\n    // removeSaleCollection removes a user's sale from the array\n    // of sale references\n    pub fun removeSaleCollection(index: Int) {\n        self.tokensForSale.remove(at: index)\n    }\n\n}",
      "language": "swift",
      "name": "CentralMarketplace.cdc"
    }
  ]
}
[/block]
This contract isn't meant to be a working or production-ready contract, but it could be extended to make a complete central marketplace by having:

- Sellers list a reference to their `SaleCollection` in this contract
- Other functions that buyers could call to get info about all the different sales and to make purchases.

A central marketplace in an off-chain application is easier to implement because:

- The app could host the marketplace and a user would simply log in to the app and give the app its account address.
- The app could read the user's public storage and find their sale reference.
- With the sale reference, the app could get all the information they need about how to display the sales on their website.
- Any buyer could discover the sale in the app and login with their account, which gives the app access to their public references.
- When the buyer wants to buy a specific NFT, the app would automatically generate the proper transaction to purchase the NFT from the seller.

## Creating a **Marketplace for Any Generic NFT**

---

The previous examples show how a simple marketplace could be created for a specific class of NFTs. However, users will want to have a marketplace where they can buy and sell any NFT they want, regardless of its type. Support for this feature is in development and will be shared soon.

## Composable Resources on Flow

---

Now that you have an understanding of how composable smart contracts and the marketplace work on Flow, you're ready to play with composable resources! Go to [Composable Resources: Kitty Hats](doc:composable-resources-kitty-hats) to learn more.