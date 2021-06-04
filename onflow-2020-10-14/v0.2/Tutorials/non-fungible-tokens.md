---
title: "Non-Fungible Tokens"
slug: "non-fungible-tokens"
hidden: false
createdAt: "2020-02-24T19:19:55.678Z"
updatedAt: "2020-04-17T15:55:06.641Z"
---
In this tutorial, we're going to deploy, store, and transfer **Non-Fungible Tokens (NFTs)**.

---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/12f3643e-522c-481a-9901-f6a0e93e17aa\" target=\"_blank\">https://play.onflow.org/12f3643e-522c-481a-9901-f6a0e93e17aa</a>\nThe tutorial will be asking you to take various actions to interact with this code."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."
}
[/block]
The NFT is an integral part of blockchain technology. We need NFTs to represent assets that are unique and indivisible (like CryptoKitties!). 

Instead of being represented in a central ledger, like in most smart contract languages, Cadence represents each NFT as a resource that users store in their accounts.

We're going to take you through these steps to get comfortable with the NFT:

1. Deploy the NFT contract and type definitions.
2. Create an NFT object and store it in your account storage.
3. Create an NFT collection object to store multiple NFTs in your account.
4. Create an `NFTMinter` and use it to mint an NFT.
5. Create references to your collection that others can use to send you tokens.
6. Set up another account the same way.
7. Transfer an NFT from one account to another.
8. Use a script to see what NFTs are stored in each account's collection.

**Before proceeding with this tutorial**, we highly recommend following the instructions in [Getting Started](doc:getting-started),  [Hello, World!](doc:hello-world), and [Fungible Tokens](doc:fungible-tokens)  to learn how to use the Playground tools and to learn the fundamentals of Cadence. We will cover some of the concepts again here, but not all.

# Non-Fungible Tokens on the Flow Emulator

---

In Cadence, each NFT is represented by a resource with an integer ID. Resources are a perfect type to represent NFTs because resources have important ownership rules that are enforced by the type system. They can only have one owner, cannot be copied, and cannot be accidentally or maliciously lost or duplicated. These protections ensure that owners know that their NFT is safe and can represent an asset that has real value.

An NFT is also usually represented by some sort of metadata like a name or a picture. Historically, most of this metadata has been stored off-chain, and the on-chain token only contains a url or something similar that points to the off-chain metadata. In Flow, this is possible, but the goal is to make it possible for all the metadata associated with a token to be stored on-chain. This is out of the scope of this tutorial though and will be covered in a separate tutorial.

When users on Flow want to transact with each other, they can do so peer-to-peer and without having to interact with a central NFT contract by calling resource-defined methods in each users' account.

## Adding an NFT Your Account

---
[block:callout]
{
  "type": "info",
  "body": "First, you'll need to follow this link to open a playground session with the Non-Fungible Token contracts, transactions, and scripts pre-loaded: <a href=\"https://play.onflow.org/12f3643e-522c-481a-9901-f6a0e93e17aa\" target=\"_blank\">https://play.onflow.org/12f3643e-522c-481a-9901-f6a0e93e17aa</a>"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Open Account `0x04` to see `NFTv1.cdc`\n`NFTv1.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// NFTv1.cdc\n\naccess(all) contract NonFungibleToken {\n\n    access(all) resource NFT {\n        access(all) let id: UInt64\n\n        access(all) var metadata: {String: String}\n\n        init(initID: UInt64) {\n            self.id = initID\n            self.metadata = {}\n        }\n    }\n\n    init() {\n        let oldNFT <- self.account.storage[NFT] <- create NFT(initID: 1)\n        destroy oldNFT\n    }\n}",
      "language": "swift",
      "name": "NFTv1.cdc"
    }
  ]
}
[/block]
In this contract, the NFT is a resource with an integer ID and a field for metadata.

In the contract's `init` function, we create a new NFT object and move it into the account storage.

    // put it in storage
    let oldNFT <- acct.storage[NFT] <- create NFT(newID: 1)
    destroy oldNFT

The two move operators `<-` in this line indicate that the newly created NFT is moving into storage to replace `oldNFT`, which was there previously.

We use `oldNFT` because we have to account for the possibility that there is already a resource stored there. We cannot overwrite resources in storage by accident. 

Normally, we would want to make sure that `oldNFT` is `nil` before destroying it, but in this example, we just destroy it for simplicity. If we wanted to be safe about how we handle this resource, we would revert the entire transaction if there was something already there, or send it to another account.
[block:callout]
{
  "type": "info",
  "body": "Deploy `NFTv1` by clicking the Deploy button in the bottom right of the editor"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df28d33-Screen_Shot_2020-03-04_at_7.07.32_PM.png",
        "Screen Shot 2020-03-04 at 7.07.32 PM.png",
        2560,
        1368,
        "#f9faf9"
      ]
    }
  ]
}
[/block]
You should now have an NFT in your account. Let's run a transaction to check. 
[block:callout]
{
  "type": "info",
  "body": "Open `Transaction1.cdc`, select account `0x04` as the only signer, and send the transaction\n`Transaction1.cdc` should look like this:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction1.cdc\n\nimport NonFungibleToken from 0x04\n\ntransaction {\n    prepare(acct: AuthAccount) {\n        if acct.storage[NonFungibleToken.NFT] != nil {\n            log(\"The token exists!\")\n        } else {\n            log(\"No token found!\")\n        }\n    }\n}",
      "language": "swift",
      "name": "Transaction1.cdc"
    }
  ]
}
[/block]
You should see something that says `"The token exists!"`. 

Good work! You have your first NFT in your account. 

# Storing Multiple NFTs in a Collection

---

Since storage is keyed by type, if we try to store an NFT at the top level, we can only store one NFT in an account. This approach is not scalable, but we can overcome this issue by using a data structure that can hold as many NFTs as we want. We can accomplish this via an array or dictionary, but those types are relatively opaque. Instead, we can use a resource as our NFT collection to enable more-sophisticated ways to interact with our NFTs.
[block:callout]
{
  "type": "info",
  "body": "Open Account `0x03` to see `NFTv2.cdc`\nDeploy the contract\n`NFTv2.cdc` should contain what was in `NFTv1.cdc` plus the following additional resource declarations in the contract body.\n**Note: This is not an entire contract that you can copy and paste to an account. This is an addition that needs to be made to the last NFT contract. If you are copying and pasting instead of using the built-in Playground templates, you'll need to add these resource definitions into the existing `NFTv1.cdc` contract file.**"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// NFTv2.cdc\n//\n// This is an extended version of the NonFungibleToken contract\n// that includes withdraw and deposit functionality, as well as a\n// collection resource that can be used to bundle NFTs together.\n//\n// Learn more about non-fungible tokens in this tutorial: https://docs.onflow.org/docs/non-fungible-tokens\n\naccess(all) contract NonFungibleToken {\n\n    // Declare the NFT resource type\n    access(all) resource NFT {\n        // The unique ID that differentiates each NFT\n        access(all) let id: UInt64\n\n        // String mapping to hold metadata\n        access(all) var metadata: {String: String}\n\n        // Initialize both fields in the init function\n        init(initID: UInt64) {\n            self.id = initID\n            self.metadata = {}\n        }\n    }\n\n    // We define this interface purely as a way to allow users\n    // to create public, restricted references to their NFT Collection.\n    // They would use this to only expose the deposit, getIDs,\n    // and idExists fields in their Collection\n    access(all) resource interface NFTReceiver {\n\n        access(all) fun deposit(token: @NFT)\n\n        access(all) fun getIDs(): [UInt64]\n\n        access(all) fun idExists(id: UInt64): Bool\n    }\n\n    // The definition of the Collection resource that\n    // holds the NFTs that a user owns\n    access(all) resource Collection: NFTReceiver {\n        // dictionary of NFT conforming tokens\n        // NFT is a resource type with an `UInt64` ID field\n        access(all) var ownedNFTs: @{UInt64: NFT}\n\n        // Initialize the NFTs field to an empty collection\n        init () {\n            self.ownedNFTs <- {}\n        }\n\n        // withdraw \n        //\n        // Function that removes an NFT from the collection \n        // and moves it to the calling context\n        access(all) fun withdraw(withdrawID: UInt64): @NFT {\n            // If the NFT isn't found, the transaction panics and reverts\n            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic(\"missing NFT\")\n\n            return <-token\n        }\n\n        // deposit \n        //\n        // Function that takes a NFT as an argument and \n        // adds it to the collections dictionary\n        access(all) fun deposit(token: @NFT) {\n            // add the new token to the dictionary which removes the old one\n            let oldToken <- self.ownedNFTs[token.id] <- token\n            destroy oldToken\n        }\n\n        // idExists checks to see if a NFT with the given ID exists in the collection\n        access(all) fun idExists(id: UInt64): Bool {\n            return self.ownedNFTs[id] != nil\n        }\n\n        // getIDs returns an array of the IDs that are in the collection\n        access(all) fun getIDs(): [UInt64] {\n            return self.ownedNFTs.keys\n        }\n\n        destroy() {\n            destroy self.ownedNFTs\n        }\n    }\n\n    // creates a new empty Collection resource and returns it \n    access(all) fun createEmptyCollection(): @Collection {\n        return <- create Collection()\n    }\n\n\tinit() {\n\t\t// store an empty NFT Collection in account storage\n        let oldCollection <- self.account.storage[Collection] <- create Collection()\n        destroy oldCollection\n\t}\n}\n ",
      "language": "swift",
      "name": "NFTv2.cdc"
    }
  ]
}
[/block]

Any user who owns NFTs will have an instance of this NFT `Collection` resource stored in their account. This collection stores all of their NFTs in a dictionary that maps integer IDs to `NFT`s, similar to how a `Vault` resource stores all the tokens in the `balance` field. Another similarity is how each collection has a `deposit` and `withdraw` function. These functions allow users to follow the pattern of first withdrawing the token from their collection and then depositing to another collection.

When a user wants to store NFTs in their account, they will instantiate an empty `Collection` by calling the `createEmptyCollection` function in the `NonFungibleToken` smart contract. This returns an empty `Collection` object that they can store in their account storage.

There are a few new features that we use in this example, so let's walk through them.

### Dictionaries

This resource uses a **Dictionary,** a mutable, unordered collection of key-value associations.

    access(all) var ownedNFTs: @{Int: NFT}

In a dictionary, all keys must have the same type, and all values must have the same type. In this case, we are mapping integer IDs to `NFT` resource objects. Dictionary definitions don't usually have the `@` symbol in the type specification. But because the `ownedNFTs` mapping stores resources, the whole field also has to become a resource type, which is why the field has the `@` symbol indicating that it is a resource type. This means that all the rules that apply to resources apply to this type.

If the NFT collection resource is destroyed with the `destroy` command, it needs to know what to do with the resources it stores in the dictionary. This is why resources that store other resources have to include a `destroy` function that runs when `destroy` is called on it. This destroy function has to either explicitly destroy the contained resources or move them somewhere else. In this example, we destroy them.

    destroy() {
    		destroy self.ownedNFTs
    }

When the collection is created, the `init` function is run and must explicitly initialize all member variables. This helps prevent issues in some smart contracts where uninitialized fields can cause bugs. The init function can never run again after this. Here, we initialize the dictionary as a resource type with an empty dictionary.

    init () {
    		self.ownedNFTs <- {}
    }

Another feature for dictionaries is the ability to get an array of the keys of the dictionary using the build-in `keys` function.

    // getIDs returns an array of the IDs that are in the collection
    access(all) fun getIDs(): [UInt64] {
    		return self.ownedNFTs.keys
    }

This can be used to iterate through the dictionary or just to see a list of what is stored. As you can see, a variable length array type is declared by enclosing the member type within square brackets.

### **Resources Owning Resources**

This NFT Collection example in `NFTv2.cdc` illustrates an important feature: resources can own other resources. 

In the example, a user can transfer one NFT to another user. Additionally, since the `Collection` explicitly owns the NFTs in it, the owner could transfer all of the NFTs at once by just transferring the single collection.

This is an important feature because it enables numerous additional use cases. In addition to allowing easy batch transfers, this means that if a unique NFT wants to own another unique NFT, like a CryptoKitty owning a hat accessory, the Kitty literally stores the hat in its own storage and effectively owns it. The hat belongs to the CryptoKitty that it is stored in, and the hat can be transferred separately or along with the CryptoKitty that owns it, 

References cannot be created for resources that are stored in other resources. The owning resource has control over it and therefore controls the type of access that external calls have on the stored resource.

This feature is covered in more detail in [Composable Resources: Kitty Hats](doc:composable-resources-kitty-hats).

## **Restricting Access to the NFT Collection**

In the NFT Collection, all the functions and fields are public, but we do not want everyone in the network to be able to call our `withdraw` function. This is where Cadence's second layer of access control comes in. Cadence utilizes capability security, which means that for any given object, a user is allowed to access a field or method of that object if they either:

- Are the owner of the object
- Have a valid reference to that field or method (note that references can only be created by the owner of the object)

When a user stores their NFT `Collection` in their account storage, it is by default not available for other users to access. A user's `[account.storage](http://account.storage)` object is inaccessible by anyone except the owner. To give external accounts read access to the `deposit` function, the `getIDs` function, and the `idExists` function, the owner would create a reference using an interface that only includes those fields:

    access(all) resource interface NFTReceiver {
    
    		access(all) fun deposit(token: @NFT)
    
    		access(all) fun getIDs(): [UInt64]
    
    		access(all) fun idExists(id: UInt64): Bool
    }

Then, using that interface, they would create a reference and cast it as that interface. From there, the user can then do whatever they want with that reference: they could pass it as a parameter to a function for one-time-use, or they could publish it in their account so that anyone can access it. If a user tried to use this interface to call the `withdraw` function, it wouldn't work because it doesn't exist in the interface or reference.

We'll work through some examples to see how this is done.

# Create a Collection

---

Setting up an NFT is similar to setting up a fungible token. The account that the NFT type is defined in has a function that any user can call to return a new NFT collection. In this case, the function is `createEmptyCollection()`. 

The collection can be stored in a user's account and then the user can make a safe, public reference to their collection so that others can send an NFT to it.

In our contract code deployment, the `init` function for the NFT contract already stored the `Collection` in the storage for account `0x02`**.**  All you have to do now is create references to the collection and store/publish them.
[block:callout]
{
  "type": "info",
  "body": "Open the file named `Transaction2.cdc`, select account `0x03` as the only signer, and send the transaction\n`Transaction2.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction2.cdc\n\nimport NonFungibleToken from 0x03\n\ntransaction {\n    prepare(acct: AuthAccount) {\n        // publish a public interface that \n        // only exposes deposit, getIDs, and idExists\n        acct.published[&AnyResource{NonFungibleToken.NFTReceiver}] = &acct.storage[NonFungibleToken.Collection] as &AnyResource{NonFungibleToken.NFTReceiver}\n      \n        log(\"Collection Reference created successfully\")\n    }\n}",
      "language": "swift",
      "name": "Transaction2.cdc"
    }
  ]
}
[/block]
This transaction is for creating and storing the references to your collection:

    // publish a public interface that 
    // only exposes ownedNFTs, deposit, getIDs, and idExists
    acct.published[&AnyResource{NonFungibleToken.NFTReceiver}] = 
    &acct.storage[NonFungibleToken.Collection] as &AnyResource{NonFungibleToken.NFTReceiver}

The `&` symbol is used to create a reference to a storage location. Additionally, the reference needs to be cast as a subtype of itself with the keyword `as`, hence why we use interfaces to create references. When creating a reference, we first have to specify the concrete type (in this case `AnyResource` because we don't want to restrict the concrete type), followed by the interfaces that we want the type to conform to in curly braces.

The owner stores a public reference in `published` that only exposes a few functions of the collection to the public.

The `published` object in an account is the object that is available to anyone who fetches the account, like your account's public API. Like the [`account.storage`](http://account.storage) object, it is a key-value store that is keyed by type, but the keys can only be reference types.

Now the user has an NFT collection in their account, along with a reference to it that others can use to see what NFTs they own and send an NFT to them. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f6efad-diagram-nft.png",
        "diagram-nft.png",
        576,
        782,
        "#ededed"
      ]
    }
  ]
}
[/block]
Let's confirm this is true by running a script! 


# Run a Script

---

Scripts in Cadence are simple transactions that run without any account permissions and only read information from the blockchain.
[block:callout]
{
  "type": "info",
  "body": "Open the script file named `Script1.cdc`.\n`Script1.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Script1.cdc \n\nimport NonFungibleToken from 0x03\n\n// Print the NFTs owned by account 0x03.\naccess(all) fun main() {\n    // Get the public account object for account 0x03\n    let nftOwner = getAccount(0x03)\n\n    // Find the public Receiver reference to their Collection\n    let collectionRef = nftOwner.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"missing reference!\")\n\n    // Log the NFTs that they own as an array of IDs\n    log(\"Account 3 NFTs\")\n    log(collectionRef.getIDs())\n}\n",
      "language": "swift",
      "name": "Script1.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Execute `Script1.cdc` by clicking the Execute button in the bottom right of the editor box.\nThis script prints a list of the NFTs that account `0x03` owns."
}
[/block]
Because account `0x03` currently doesn't own any in its collection, it will just print an empty array:

```
"Account 3 NFTs"
[]
Result > "void"
```

If the script cannot be executed, it probably means that the NFT collection hasn't been stored correctly in account `0x03`. If you run into issues, make sure that account `0x03` is the active account and that you followed the previous steps correctly.

# **Mint and Distribute Tokens as an Admin**

---

One way to create NFTs is by having an admin mint new tokens and send them to a user. Most would implement this by having an NFT Minter resource. The owner of this resource can mint tokens, or if they want to give other users and contracts the ability to mint tokens, the owner could give out a reference to the `mintNFT` function to utilize the capability security model. No need to check msg.sender!

Let's use an NFT Minter to mint some tokens. 
[block:callout]
{
  "type": "info",
  "body": "Open account `0x02` to see `NFTv3.cdc`\n`NFTv3.cdc` should contain everything that was in `NFTv2.cdc` plus the following code additions.\n**Note: This is not an entire contract that you can copy and paste to an account. This is an addition that needs to be made to the last NFT contract. If you are copying and pasting instead of using the built-in Playground templates, you'll need to add these resource definitions into the existing `NFTv2.cdc` contract file.**"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// NFTv3.cdc\n\naccess(all) resource NFTMinter {\n\n    // the ID that is used to mint NFTs\n    access(all) var idCount: UInt64\n\n    init() {\n        self.idCount = 1\n    }\n\n    // mintNFT mints a new NFT with a new ID\n    // and deposit it in the recipients colelction using their collection reference\n    access(all) fun mintNFT(recipient: &AnyResource{NFTReceiver}) {\n\n        // create a new NFT\n        var newNFT <- create NFT(initID: self.idCount)\n\n        // deposit it in the recipient's account using their reference\n        recipient.deposit(token: <-newNFT)\n\n        // change the id so that each ID is unique\n        self.idCount = self.idCount + UInt64(1)\n    }\n}\n\ninit() {\n    let oldCollection <- self.account.storage[Collection] <- create Collection()\n    destroy oldCollection\n\n    self.account.published[&AnyResource{NFTReceiver}] = &self.account.storage[Collection] as &AnyResource{NFTReceiver}\n\n    let oldMinter <- self.account.storage[NFTMinter] <- create NFTMinter()\n    destroy oldMinter\n}",
      "language": "swift",
      "name": "NFTv3.cdc"
    }
  ]
}
[/block]
After you deploy the contract, you should see that there is now a `NonFungibleToken.Collection` resource and a `NonFungibleToken.NFTMinter` resource stored in account `0x02`'s account storage. This is shown in the `Resources` box below the editor.

Now we can use our stored `NFTMinter` to mint a new NFT and deposit it into account `0x02`'s collection.
[block:callout]
{
  "type": "info",
  "body": "Open the file named `Transaction3.cdc` \nSelect account `0x02` as the only signer and send the transaction.\nThis transaction deposits the minted NFT into the account owner's NFT collection:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import NonFungibleToken from 0x02\n\n// Transaction3.cdc\n\ntransaction {\n\n    // The reference to the collection that will be receiving the NFT\n    let receiverRef: &AnyResource{NonFungibleToken.NFTReceiver}\n\n    // The reference to the Minter resource stored in account storage\n    let minterRef: &NonFungibleToken.NFTMinter\n\n    prepare(acct: AuthAccount) {\n        // get the owners collection reference\n        self.receiverRef = acct.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"No receiver\")\n        \n        // Create a Reference to the minter resource\n        self.minterRef = &acct.storage[NonFungibleToken.NFTMinter] as &NonFungibleToken.NFTMinter\n    }\n    execute {\n        // use the minter reference to mint an NFT, which deposits\n        // the NFT into the collection that is sent as a parameter\n        self.minterRef.mintNFT(recipient: self.receiverRef)\n      \n        log(\"NFT Minted and deposited to Account 2's Collection\")\n    }\n}",
      "language": "swift",
      "name": "Transaction3.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Open `Script2.cdc` and execute the script. \nThis prints a list of the NFTs that account `0x02`'s owns."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Script2.cdc \n\nimport NonFungibleToken from 0x02\n\n// Prints the NFTs that a specifc account owns\naccess(all) fun main() {\n    // get the acccounts public account object\n    let nftOwner = getAccount(0x02)\n\n    // find their public Receiver reference to their Collection\n    let collectionRef = nftOwner.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"missing reference!\")\n\n    // Log the NFTs that they own as an array of IDs\n    log(\"Account 2 NFTs\")\n    log(collectionRef.getIDs())\n}",
      "language": "swift",
      "name": "Script2.cdc"
    }
  ]
}
[/block]
You should see that account `0x02` owns the NFT with `id=1`

```
"Account 2 NFTs"
[1]
```

# Transferring a NFT

---
[block:callout]
{
  "type": "info",
  "body": "Open the file named `Transaction4.cdc` and submit the transaction, using account `0x01` as the only signer."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction4.cdc\n\nimport NonFungibleToken from 0x02\n\ntransaction {\n    prepare(acct: AuthAccount) {\n\n        // create a new empty collection\n        let collection <- NonFungibleToken.createEmptyCollection()\n\n        // put it in storage\n        let oldCollection <- acct.storage[NonFungibleToken.Collection] <- collection\n        destroy oldCollection\n      \n        log(\"Collection created for account 1\")\n\n        // publish a public interface\n        acct.published[&AnyResource{NonFungibleToken.NFTReceiver}] = &acct.storage[NonFungibleToken.Collection] as &AnyResource{NonFungibleToken.NFTReceiver}\n      \n        log(\"Reference published\")\n    }\n}",
      "language": "swift",
      "name": "Transaction4.cdc"
    }
  ]
}
[/block]
Account `0x01` should now have an empty `Collection` resource stored in its account storage. It has also created and stored a reference to the collection.
[block:callout]
{
  "type": "info",
  "body": "Open the file named `Transaction5.cdc`, select account `0x02` as the only signer, and send the transaction.\nThis transaction transfers a token from account `0x02` to account `0x01`."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import NonFungibleToken from 0x02\n\n// Transaction5.cdc\n\ntransaction {\n\n    // The field that will hold the NFT as it is being\n    // transfered to the other account\n    let transferToken: @NonFungibleToken.NFT\n\t\n    prepare(acct: AuthAccount) {\n\n        // call the withdraw function on the sender's Collection\n        // to move the NFT out of the collection\n        self.transferToken <- acct.storage[NonFungibleToken.Collection]?.withdraw(withdrawID: 1) ?? panic(\"missing collection\")\n    }\n\n    execute {\n        // get the recipient's public account object\n        let recipient = getAccount(0x01)\n\n        // get the Collection reference for the receiver\n        let receiverRef = recipient.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"missing deposit reference\")\n\n        // deposit the NFT in the receivers collection\n        receiverRef.deposit(token: <-self.transferToken)\n      \n        log(\"NFT ID 1 transferred from account 2 to account 1\")\n    }\n}",
      "language": "swift",
      "name": "Transaction5.cdc"
    }
  ]
}
[/block]
Now we can check both accounts' collections to make sure that account `0x01` owns the token and account `0x02` has nothing.
[block:callout]
{
  "type": "info",
  "body": "Execute  `Script3.cdc` to see the tokens in each account:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Script3.cdc\n\nimport NonFungibleToken from 0x02\n\n// Print the NFTs that account 0x01 and 0x02 own\n// as arrays\npub fun main() {\n    let account1 = getAccount(0x01)\n    let account2 = getAccount(0x02)\n\n    let acct1Ref = account1.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"missing account 1 reference!\")\n    let acct2Ref = account2.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"missing account 2 reference!\")\n\n    log(\"Account 1 NFTs\")\n    log(acct1Ref.getIDs())\n    log(\"Account 2 NFTs\")\n    log(acct2Ref.getIDs())\n}",
      "language": "swift",
      "name": "Script3.cdc"
    }
  ]
}
[/block]
You should see something like this in the output:

```
"Account 1 NFTs"
[1]
"Account 2 NFTs"
[]
```

Account `0x01` has one NFT with ID=1 and account `0x02` has none. This shows that the NFT was transferred from account `0x02` to account `0x01`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9729721-diagram-nft-minter.png",
        "diagram-nft-minter.png",
        1192,
        782,
        "#efefef"
      ]
    }
  ]
}
[/block]
Congratulations, you now have a working NFT! 

# Putting It All Together

---

This is the entire definition for the Non-Fungible Token contract for reference. It is the same as the one you've already deployed so there is no need to perform any more actions with this:
[block:code]
{
  "codes": [
    {
      "code": "// NFTv3.cdc\n\naccess(all) contract NonFungibleToken {\n\n    access(all) resource NFT {\n        access(all) let id: UInt64\n\n        access(all) var metadata: {String: String}\n\n        init(initID: UInt64) {\n            self.id = initID\n            self.metadata = {}\n        }\n    }\n\n    access(all) resource interface NFTReceiver {\n\n        access(all) fun deposit(token: @NFT)\n\n        access(all) fun getIDs(): [UInt64]\n\n        access(all) fun idExists(id: UInt64): Bool\n    }\n\n    access(all) resource Collection: NFTReceiver {\n        // dictionary of NFT conforming tokens\n        // NFT is a resource type with an `UInt64` ID field\n        access(all) var ownedNFTs: @{UInt64: NFT}\n\n        init () {\n            self.ownedNFTs <- {}\n        }\n\n        // withdraw removes an NFT from the collection and \n        // moves it to the caller\n        access(all) fun withdraw(withdrawID: UInt64): @NFT {\n            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic(\"missing NFT\")\n\n            return <-token\n        }\n\n        // deposit takes a NFT and adds it to the collections dictionary\n        // and adds the ID to the id array\n        access(all) fun deposit(token: @NFT) {\n            // add the new token to the dictionary which removes the old one\n            let oldToken <- self.ownedNFTs[token.id] <- token\n            destroy oldToken\n        }\n\n        // idExists checks to see if a NFT with the given ID \n        // exists in the collection\n        access(all) fun idExists(id: UInt64): Bool {\n            return self.ownedNFTs[id] != nil\n        }\n\n        // getIDs returns an array of the IDs that are in the collection\n        access(all) fun getIDs(): [UInt64] {\n            return self.ownedNFTs.keys\n        }\n\n        destroy() {\n            destroy self.ownedNFTs\n        }\n    }\n\n    access(all) fun createEmptyCollection(): @Collection {\n        return <- create Collection()\n    }\n\n    access(all) resource NFTMinter {\n\n        // the ID that is used to mint NFTs\n        access(all) var idCount: UInt64\n\n        init() {\n            self.idCount = 1\n        }\n\n        // mintNFT mints a new NFT with a new ID\n        // and deposit it in the recipients collection \n        // using their collection reference\n        access(all) fun mintNFT(recipient: &NFTReceiver) {\n\n            // create a new NFT\n            var newNFT <- create NFT(initID: self.idCount)\n\n            // deposit it in the recipient's account using their reference\n            recipient.deposit(token: <-newNFT)\n\n            // change the id so that each ID is unique\n            self.idCount = self.idCount + UInt64(1)\n        }\n    }\n\n  init() {\n      // store an empty NFT Collection in account storage\n      let oldCollection <- self.account.storage[Collection] <- create Collection()\n      destroy oldCollection\n\n      self.account.published[&NFTReceiver] = &self.account.storage[Collection] as &NFTReceiver\n\n      let oldMinter <- self.account.storage[NFTMinter] <- create NFTMinter()\n        destroy oldMinter\n  }\n}",
      "language": "swift",
      "name": "NFTv3.cdc"
    }
  ]
}
[/block]
# Create a Flow Marketplace

---

Now that you have a working NFT, you can attempt to extend its functionality on your own, or you can learn how to create a marketplace that uses both fungible tokens and NFTs. Go to [Composable Smart Contracts: Marketplace](doc:composable-smart-contracts-marketplace) to learn more.