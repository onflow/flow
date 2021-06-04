---
title: "Composable Resources: Kitty Hats"
slug: "composable-resources-kitty-hats"
hidden: false
createdAt: "2020-02-24T19:19:56.095Z"
updatedAt: "2020-04-01T17:06:49.771Z"
---
In this tutorial, we're going to walkthrough how resources can own other resources by creating, deploying, and moving composable NFTs.

---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/068f7218-98b7-4674-bf13-774155d145f0\" target=\"_blank\">https://play.onflow.org/068f7218-98b7-4674-bf13-774155d145f0</a>\nThe tutorial will be asking you do take various actions to interact with this code."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."
}
[/block]
Resources owning other resources is a powerful feature in the world of blockchain and smart contracts. To showcase how this feature works on Flow, this tutorial will take you through these steps with a composable NFT:

1. Deploy the `Kitty` and `KittyHat` definitions to account `0x01`
2. Create a `Kitty` and two `KittyHat`s and store them in your account
3. Move the Kitties and Hats around to see how composable NFTs function on Flow

**Before proceeding with this tutorial**, we recommend following the instructions in [Getting Started](doc:getting-started) and [Hello, World!](doc:hello-world) to learn about the Playground and Cadence.

For additional support, see the [Playground Manual](doc:playground-manual)

# Resources Owning Resources

---

The NFT collections talked about in [Non-Fungible Tokens](doc:non-fungible-tokens) are examples of resources that own other resources. We have a resource, the NFT collection, that has ownership of the NFT resources that are stored within it. The owner and anyone with a reference can move these resources around, but they still belong to the collection while they are in it and the code defined in the collection has ultimate control over the resources.

When the collection is moved or destroyed, all of the NFTs inside of it are moved or destroyed with it.

If the owner of the collection transferred the whole collection resource to another user's account, all of the tokens will move to the other user's account with it. The tokens don't stay in the original owner's account. This is like handing someone your wallet instead of just a dollar bill. It isn't a common action, but certainly is possible.

References cannot be created for resources that are stored in other resources. The owning resource has control over it and therefore controls the type of access that external calls have on the stored resource.

## Resources Owning Resources: An Example

---

The NFT collection is a simple example of how resources can own other resources, but innovative and powerful versions can be made. 

An important feature of CryptoKitties (and other applications on the Ethereum blockchain) is that any developer can make new experiences around the existing application. Even though the original contract didn't include specific support for CryptoKitty accessories (like hats), an independent developer was still able to make hats that Kitties from the original contract could use.

Here is a basic example of how we can replicate this feature in Cadence:
[block:callout]
{
  "type": "info",
  "body": "Open the account `0x01` tab which has the contract named `KittyVerse.cdc` \nDeploy the code to account `0x01`"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// KittyVerse.cdc\n\naccess(all) contract KittyVerse {\n\n    access(all) resource KittyHat {\n        access(all) let id: Int\n        access(all) let name: String\n\n        init(id: Int, name: String) {\n            self.id = id\n            self.name = name\n        }\n\n        // An example of a function someone might put in their hat resource\n        access(all) fun tipHat(): String {\n            if self.name == \"Cowboy Hat\" {\n                return \"Howdy Y'all\"\n            } else if self.name == \"Top Hat\" {\n                return \"Greetings, fellow aristocats!\"\n            } \n\n            return \"Hello\"\n        }\n    }\n\n    access(all) fun createHat(id: Int, name: String): @KittyHat {\n        return <-create KittyHat(id: id, name: name)\n    }\n\n    access(all) resource Kitty {\n\n        access(all) let id: Int\n\n        // place where the Kitty hats are stored\n        access(all) let items: @{String: KittyHat}\n\n        init(newID: Int) {\n            self.id = newID\n            self.items <- {}\n        }\n\n        destroy() {\n            destroy self.items\n        }\n    }\n\n    access(all) fun createKitty(): @Kitty {\n        return <-create Kitty(newID: 1)\n    }\n}",
      "language": "swift",
      "name": "KittyVerse.cdc"
    }
  ]
}
[/block]
These definitions show how a Kitty resource could own hats.

The hats are stored in a variable in the Kitty resource.

    // place where the Kitty hats are stored
    access(all) let items: <-{String: KittyHat}

A Kitty owner can take the hats off the Kitty and transfer them individually. Or the owner can transfer a Kitty that owns a hat, and the hat will go along with the Kitty. 

Here is a transaction to create a `Kitty` and a `KittyHat`, store the hat in the Kitty, then store it in your account storage.
[block:callout]
{
  "type": "info",
  "body": "- Open `Transaction1.cdc` \n- Select account `0x01` as the only signer\n- Send the transaction by clicking the Send button\n`Transaction1.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction1.cdc\n\nimport KittyVerse from 0x01\n\ntransaction {\n\n    prepare(acct: AuthAccount) {\n\n        // create the Kitty object\n        let kitty <- KittyVerse.createKitty()\n\n        // create the KittyHat objects\n        let hat1 <- KittyVerse.createHat(id: 1, name: \"Cowboy Hat\")\n        let hat2 <- KittyVerse.createHat(id: 2, name: \"Top Hat\")\n\n        // Put the hat on the cat!\n        let oldCowboyHat <- kitty.items[\"Cowboy Hat\"] <- hat1\n        destroy oldCowboyHat\n        let oldTopHat <- kitty.items[\"Top Hat\"] <- hat2\n        destroy oldTopHat\n\n        log(\"The Cat has the Hats\")\n\n        // Store the Kitty in storage\n        let oldKitty <- acct.storage[KittyVerse.Kitty] <- kitty\n        destroy oldKitty\n    }\n}",
      "language": "swift",
      "name": "Transaction1.cdc"
    }
  ]
}
[/block]
You should see an output that looks something like this:

```
> "The Cat has the Hats"
```

Now we can run a transaction to move the Kitty along with its hat, remove the cowboy hat from the Kitty, then make the Kitty tip its hat.
[block:callout]
{
  "type": "info",
  "body": "- Open `Transaction2.cdc`\n- Select account `0x01` as the only signer\n- Send the transaction\n`Transaction2.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction2.cdc\n\nimport KittyVerse from 0x01\n\ntransaction {\n\n    prepare(acct: AuthAccount) {\n\n        // move the Kitty out of storage, which moves its hat along with it\n        let kittyOpt <- acct.storage[KittyVerse.Kitty] <- nil\n        let kitty <- kittyOpt ?? panic(\"Kitty doesn't exist!\")\n\n        // take the cowboy hat off the Kitty\n        let cowboyHatOpt <- kitty.items.remove(key: \"Cowboy Hat\")\n        let cowboyHat <- cowboyHatOpt ?? panic(\"cowboy hat doesn't exist!\")\n\n        // Tip the cowboy hat\n        log(cowboyHat.tipHat())\n        destroy cowboyHat\n\n        // Tip the top hat that is on the Kitty\n        log(kitty.items[\"Top Hat\"]?.tipHat())\n\n        // move the Kitty to storage\n        // which moves its hat along with it\n        let oldKitty <- acct.storage[KittyVerse.Kitty] <- kitty\n        destroy oldKitty\n    }\n}",
      "language": "swift",
      "name": "Transaction2.cdc"
    }
  ]
}
[/block]
You should see something like this output:

```
> "Howdy Y'all"
> "Greetings, fellow aristocats!"
```

Whenever the Kitty is moved, its hats are implicitly moved along with it. This is because the hats are owned by the Kitty. 

## The Future is Meow!

---

The above is a simple example of composable resources. We had to explicitly say that a Kitty could own a Hat in this example, but in the near future, Cadence will support more powerful ways of achieving resource composability where developers can declare types that separate resources can own even if the owning resource never specified the ownership possibility in the first place.

After these tutorials, you should have enough info to start making some simple smart contracts of your own. Don't hesitate to reach out to the Flow team on our Discord chat channel if you have any questions!

Practice what you're learned in the Flow Playground!