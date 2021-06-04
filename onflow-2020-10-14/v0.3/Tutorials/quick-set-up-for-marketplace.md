---
title: "Quick Set-up For Marketplace"
slug: "quick-set-up-for-marketplace"
hidden: false
createdAt: "2020-02-27T01:32:46.249Z"
updatedAt: "2020-07-18T15:55:22.386Z"
---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/5a5f4fdf-f499-47a4-aef7-f01713e61fde\" target=\"_blank\">https://play.onflow.org/5a5f4fdf-f499-47a4-aef7-f01713e61fde</a>\nThe tutorial will be asking you to take various actions to interact with this code."
}
[/block]
If you have already completed the Marketplace tutorial, please move on to [Composable Resources: Kitty Hats](doc:composable-resources-kitty-hats).

This guide will help you quickly get the playground to the state you need to complete the Marketplace tutorial. The marketplace tutorial uses the Fungible Token and Non-Fungible token contracts to allow users to buy and sell NFTs with fungible tokens. 

The state of the accounts are the same as if you had completed the Fungible Token and Non-Fungible Token tutorials in the same playground session. Having your playground in this state is necessary to follow the [Composable Smart Contracts: Marketplace](doc:composable-smart-contracts-marketplace) tutorial.

---

1. Open account `0x01`. Make sure the Fungible Token definitions in `FungibleToken.cdc` from the fungible token tutorial are in this account.
2. Deploy the Fungible Token code to account `0x01`.
3. Switch to account `0x02` by selecting account `0x02` from the account selection menu.
4. Make sure you have the NFT definitions in `NFTv2.cdc` from the Non-fungible token tutorial in account `0x02`. 
5. Deploy the NFT code to account `0x02`.
6. Run the transaction in Transaction 3. This is the `SetupAccount1Transaction.cdc` file. Use account `0x01` as the only signer to set up account `0x01`'s account.
[block:code]
{
  "codes": [
    {
      "code": "// SetupAccount1Transaction.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This transaction sets up account 0x01 for the marketplace tutorial\n// by publishing a Vault reference and creating an empty NFT Collection.\ntransaction {\n  prepare(acct: AuthAccount) {\n    // Create a public Receiver capability to the Vault\n    acct.link<&FungibleToken.Vault{FungibleToken.Receiver, FungibleToken.Balance}>\n             (/public/MainReceiver, target: /storage/MainVault)\n\n    log(\"Created Vault references\")\n\n    // store an empty NFT Collection in account storage\n    acct.save<@NonFungibleToken.Collection>(<-NonFungibleToken.createEmptyCollection(), to: /storage/NFTCollection)\n\n    // publish a capability to the Collection in storage\n    acct.link<&{NonFungibleToken.NFTReceiver}>(/public/NFTReceiver, target: /storage/NFTCollection)\n\n    log(\"Created a new empty collection and published a reference\")\n  }\n}\n",
      "language": "swift",
      "name": "SetupAccount1Transaction.cdc"
    }
  ]
}
[/block]
7. Run the transaction in Transaction 4. This is the `SetupAccount2Transaction.cdc` file. Use account `0x02` as the only signer to set up account `0x02`'s account.
[block:code]
{
  "codes": [
    {
      "code": "// SetupAccount2Transaction.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This transaction adds an empty Vault to account 0x02\n// and mints an NFT with id=1 that is deposited into\n// the NFT collection on account 0x01.\ntransaction {\n\n  // Private reference to this account's minter resource\n  let minterRef: &NonFungibleToken.NFTMinter\n\n  prepare(acct: AuthAccount) {\n    // create a new vault instance with an initial balance of 30\n    let vaultA <- FungibleToken.createEmptyVault()\n\n    // Store the vault in the account storage\n    acct.save<@FungibleToken.Vault>(<-vaultA, to: /storage/MainVault)\n\n    // Create a public Receiver capability to the Vault\n    let ReceiverRef = acct.link<&FungibleToken.Vault{FungibleToken.Receiver, FungibleToken.Balance}>(/public/MainReceiver, target: /storage/MainVault)\n\n    log(\"Created a Vault and published a reference\")\n\n    // Borrow a reference for the NFTMinter in storage\n    self.minterRef = acct.borrow<&NonFungibleToken.NFTMinter>(from: /storage/NFTMinter)\n    \t\t?? panic(\"Could not borrow an nft minter reference\")\n  }\n  execute {\n    // Get the recipient's public account object\n    let recipient = getAccount(0x01)\n\n    // Get the Collection reference for the receiver\n    // getting the public capability and borrowing a reference from it\n    let receiverRef = recipient.getCapability(/public/NFTReceiver)!\n                               .borrow<&{NonFungibleToken.NFTReceiver}>()\n     \t\t\t\t\t\t\t\t\t\t\t\t\t?? panic(\"Could not borrow an nft receiver reference\")\n\n    // Mint an NFT and deposit it into account 0x01's collection\n    self.minterRef.mintNFT(recipient: receiverRef)\n\n    log(\"New NFT minted for account 1\")\n  }\n}\n ",
      "language": "swift",
      "name": "SetupAccount2Transaction.cdc"
    }
  ]
}
[/block]
8. Run the transaction in Transaction 5. This is the `SetupAccount1TransactionMinting.cdc` file. Use account `0x01` as the only signer to mint fungible tokens for account 1 and 2.
[block:code]
{
  "codes": [
    {
      "code": "// SetupAccount1TransactionMinting.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This transaction mints tokens for both accounts using\n// the minter stored on account 0x01.\ntransaction {\n\n    // Public Vault Receiver References for both accounts\n    let acct1Ref: &AnyResource{FungibleToken.Receiver}\n    let acct2Ref: &AnyResource{FungibleToken.Receiver}\n\n    // Private minter references for this account to mint tokens\n    let minterRef: &FungibleToken.VaultMinter     \n\n    prepare(acct: AuthAccount) {\n        // Get the public object for account 0x02\n        let account2 = getAccount(0x02)\n\n        // Retrieve public Vault Receiver references for both accounts\n        self.acct1Ref = acct.getCapability(/public/MainReceiver)!\n                    .borrow<&FungibleToken.Vault{FungibleToken.Receiver}>()\n      \t\t\t\t\t\t\t?? panic(\"Could not borrow acct1 vault receiver reference\")\n        self.acct2Ref = account2.getCapability(/public/MainReceiver)!\n                    .borrow<&FungibleToken.Vault{FungibleToken.Receiver}>()\n      \t\t\t\t\t\t\t?? panic(\"Could not borrow acct2 vault receiver reference\")\n\n        // Get the stored Minter reference for account 0x01\n        self.minterRef = acct.borrow<&FungibleToken.VaultMinter>(from: /storage/MainMinter)\n      \t\t\t?? panic(\"Could not borrow vault minter reference\")\n    }\n\n    execute {\n        // Mint tokens for both accounts\n        self.minterRef.mintTokens(amount: UFix64(20), recipient: self.acct2Ref)\n        self.minterRef.mintTokens(amount: UFix64(10), recipient: self.acct1Ref)\n\n        log(\"Minted new fungible tokens for account 1 and 2\")\n    }\n}\n ",
      "language": "swift",
      "name": "SetupAccount1TransactionMinting.cdc"
    }
  ]
}
[/block]
9. Run the script `CheckSetupScript.cdc` file in Script 1 to ensure everything is set up.
[block:code]
{
  "codes": [
    {
      "code": "// CheckSetupScript.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This script checks that the accounts are set up correctly for the marketplace tutorial.\n//\n// Account 0x01: Vault Balance = 40, NFT.id = 1\n// Account 0x02: Vault Balance = 20, No NFTs\npub fun main() {\n    // Get the accounts' public account objects\n    let acct1 = getAccount(0x01)\n    let acct2 = getAccount(0x02)\n\n    // Get references to the account's receivers\n    // by getting their public capability\n    // and borrowing a reference from the capability\n    let acct1ReceiverRef = acct1.getCapability(/public/MainReceiver)!\n                          .borrow<&FungibleToken.Vault{FungibleToken.Balance}>()\n  \t\t\t\t\t\t\t\t\t\t?? panic(\"Could not borrow acct1 vault receiver reference\")\n    let acct2ReceiverRef = acct2.getCapability(/public/MainReceiver)!\n                          .borrow<&FungibleToken.Vault{FungibleToken.Balance}>()\n  \t\t\t\t\t\t\t\t\t\t?? panic(\"Could not borrow acct2 vault receiver reference\")\n\n    // Log the Vault balance of both accounts and ensure they are\n    // the correct numbers.\n    // Account 0x01 should have 40.\n    // Account 0x02 should have 20.\n    log(\"Account 1 Balance\")\n    log(acct1ReceiverRef.balance)\n    log(\"Account 2 Balance\")\n    log(acct2ReceiverRef.balance)\n\n    // verify that the balances are correct\n    if acct1ReceiverRef.balance != UFix64(40) || acct2ReceiverRef.balance != UFix64(20) {\n        panic(\"Wrong balances!\")\n    }\n\n    // Find the public Receiver capability for their Collections\n    let acct1Capability = acct1.getCapability(/public/NFTReceiver)!\n    let acct2Capability = acct2.getCapability(/public/NFTReceiver)!\n\n    // borrow references from the capabilities\n    let nft1Ref = acct1Capability.borrow<&{NonFungibleToken.NFTReceiver}>()\n  \t\t\t?? panic(\"Could not borrow acct1 nft receiver reference\")\n    let nft2Ref = acct2Capability.borrow<&{NonFungibleToken.NFTReceiver}>()\n  \t\t\t?? panic(\"Could not borrow acct2 nft receiver reference\")\n\n    // Print both collections as arrays of IDs\n    log(\"Account 1 NFTs\")\n    log(nft1Ref.getIDs())\n\n    log(\"Account 2 NFTs\")\n    log(nft2Ref.getIDs())\n\n    // verify that the collections are correct\n    if nft1Ref.getIDs()[0] != UInt64(1) || nft2Ref.getIDs().length != 0 {\n        panic(\"Wrong Collections!\")\n    }\n}\n",
      "language": "swift",
      "name": "CheckSetupScript.cdc"
    }
  ]
}
[/block]
10. The script should not panic and you should see something like this output

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

---

With your playground now in the correct state, you're ready to continue with the [Composable Smart Contracts: Marketplace](doc:composable-smart-contracts-marketplace) tutorial. 

You do not need to open a new playground session for the marketplace tutorial. You can just continue using this one.

[Composable Smart Contracts: Marketplace](doc:composable-smart-contracts-marketplace)