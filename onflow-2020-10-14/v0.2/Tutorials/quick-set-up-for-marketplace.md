---
title: "Quick Set-up For Marketplace"
slug: "quick-set-up-for-marketplace"
hidden: false
createdAt: "2020-02-27T01:32:46.249Z"
updatedAt: "2020-04-02T17:03:18.112Z"
---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/b7965bf0-757d-4588-825e-3e7b15c5639a\" target=\"_blank\">https://play.onflow.org/b7965bf0-757d-4588-825e-3e7b15c5639a</a>\nThe tutorial will be asking you to take various actions to interact with this code."
}
[/block]
If you have already completed the Marketplace tutorial, please move on to [Composable Resources: Kitty Hats](doc:composable-resources-kitty-hats).

This guide will help you quickly get the playground to the state you need to complete the Marketplace tutorial. The marketplace tutorial uses the Fungible Token and Non-Fungible token contracts to allow users to buy and sell NFTs with fungible tokens. 

The state of the accounts are the same as if you had completed the Fungible Token and Non-Fungible Token tutorials. Having your playground in this state is necessary to follow the [Composable Smart Contracts: Marketplace](doc:composable-smart-contracts-marketplace) tutorial.
[block:callout]
{
  "type": "info",
  "body": "First, you'll need to follow this link to open a fresh playground session with the Marketplace contracts, transactions, and scripts pre-loaded: <a href=\"https://play.onflow.org/b7965bf0-757d-4588-825e-3e7b15c5639a\" target=\"_blank\">https://play.onflow.org/b7965bf0-757d-4588-825e-3e7b15c5639a</a>"
}
[/block]
---

1. Open account `0x01`. Make sure the Fungible Token definitions in `FungibleToken.cdc` from the fungible token tutorial are in this account.
2. Deploy the Fungible Token code to account `0x01`.
3. Switch to account `0x02` by selecting account `0x02` from the account selection menu.
4. Make sure you have the NFT definitions in `NFTv3.cdc` from the Non-fungible token tutorial in account `0x02`. 
5. Deploy the NFT code to account `0x02`.
6. Run the transaction in Transaction 3. This is the `SetupAccount1Transaction.cdc` file. Use account `0x01` as the only signer to set up account `0x01`'s account.
[block:code]
{
  "codes": [
    {
      "code": "// SetupAccount1Transaction.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This transaction sets up account 0x01 for the marketplace tutorial\n// by publishing a Vault reference and creating an empty NFT Collection.\ntransaction {\n    prepare(acct: AuthAccount) {\n        // Create a public Receiver reference to the Vault\n        let receiverRef = &acct.storage[FungibleToken.Vault] as &AnyResource{FungibleToken.Receiver}\n        acct.published[&AnyResource{FungibleToken.Receiver}] = receiverRef\n\n        log(\"Created Vault references\")\n\n        // Create a new empty NFT Collection\n        let collection <- NonFungibleToken.createEmptyCollection()\n\n        // Put the NFT Collection in storage\n        let oldCollection <- acct.storage[NonFungibleToken.Collection] <- collection\n        destroy oldCollection\n\n        // Publish a public interface to the Collection\n        acct.published[&AnyResource{NonFungibleToken.NFTReceiver}] = &acct.storage[NonFungibleToken.Collection] as &AnyResource{NonFungibleToken.NFTReceiver}\n\n        log(\"Created a new empty collection and published a reference\")\n    }\n}\n",
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
      "code": "// SetupAccount2Transaction.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This transaction adds an empty Vault to account 0x02\n// and mints an NFT with id=1 that is deposited into\n// the NFT collection on account 0x01.\ntransaction {\n\n    // public receiver for account 1's NFT Collection\n    let acct1nftReceiver: &AnyResource{NonFungibleToken.NFTReceiver}\n\n    // Private reference to this account's minter resource\n    let minterRef: &NonFungibleToken.NFTMinter\n\n    prepare(acct: AuthAccount) {\n        // create a new vault instance with an initial balance of 30\n        let vaultA <- FungibleToken.createEmptyVault()\n\n        // store it in the account storage\n        // and destroy whatever was there previously\n        let oldVault <- acct.storage[FungibleToken.Vault] <- vaultA\n        destroy oldVault\n        // publish a receiver reference to the stored Vault\n        acct.published[&AnyResource{FungibleToken.Receiver}] = &acct.storage[FungibleToken.Vault] as &AnyResource{FungibleToken.Receiver}\n\n        log(\"Created a Vault and published a reference\")\n\n        // publish a public interface that only exposes ownedNFTs and deposit\n        acct.published[&AnyResource{NonFungibleToken.NFTReceiver}] = &acct.storage[NonFungibleToken.Collection] as &AnyResource{NonFungibleToken.NFTReceiver}\n\n        // get account 1's public account object\n        let account1 = getAccount(0x01)\n\n        // Get the NFT receiver public reference from account 1\n        self.acct1nftReceiver = account1.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"no receiver found\")\n\n        // Get the Minter reference from account storage for account 2\n        self.minterRef = &acct.storage[NonFungibleToken.NFTMinter] as &NonFungibleToken.NFTMinter\n    }\n    execute {\n\n        // Mint an NFT and deposit it into account 0x01's collection\n        self.minterRef.mintNFT(recipient: self.acct1nftReceiver)\n\n        log(\"New NFT minted for account 1\")\n    }\n}\n ",
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
      "code": "// SetupAccount1TransactionMinting.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This transaction mints tokens for both accounts using\n// the minter stored on account 0x01.\ntransaction {\n\n    // Public Vault Receiver References for both accounts\n    let acct1Ref: &AnyResource{FungibleToken.Receiver}\n    let acct2Ref: &AnyResource{FungibleToken.Receiver}\n\n    // Private minter references for this account to mint tokens\n    let minterRef: &FungibleToken.VaultMinter     \n    \n    prepare(acct: AuthAccount) {\n        // Get the public object for account 0x02\n        let account2 = getAccount(0x02)\n        \n        // Retrieve public Vault Receiver references for both accounts\n        self.acct1Ref = acct.published[&AnyResource{FungibleToken.Receiver}] ?? panic(\"no receiver 1 Ref\")\n        self.acct2Ref = account2.published[&AnyResource{FungibleToken.Receiver}] ?? panic(\"no receiver 2 Ref\")\n\n        // Get the stored Minter reference for account 0x01\n        self.minterRef = &acct.storage[FungibleToken.VaultMinter] as &FungibleToken.VaultMinter\n    }\n\n    execute {\n        // Mint tokens for both accounts\n        self.minterRef.mintTokens(amount: 20, recipient: self.acct2Ref)\n        self.minterRef.mintTokens(amount: 10, recipient: self.acct1Ref)\n\n        log(\"Minted new fungible tokens for account 1 and 2\")\n    }\n}\n ",
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
      "code": "// CheckSetupScript.cdc\n\nimport FungibleToken from 0x01\nimport NonFungibleToken from 0x02\n\n// This script checks that the accounts are set up correctly for the marketplace tutorial.\n//\n// Account 0x01: Vault Balance = 40, NFT.id = 1\n// Account 0x02: Vault Balance = 20, No NFTs\naccess(all) fun main() {\n    // Get both public account objects\n    let account1 = getAccount(0x01)\n\t  let account2 = getAccount(0x02)\n\n    // Get published Vault Receiver references from both accounts\n    let acct1ftRef = account1.published[&AnyResource{FungibleToken.Receiver}] ?? panic(\"missing account 1 vault reference\")\n    let acct2ftRef = account2.published[&AnyResource{FungibleToken.Receiver}] ?? panic(\"missing account 2 vault reference\")\n\n    // Log the Vault balance of both accounts and ensure they are\n    // the correct numbers.\n    // Account 0x01 should have 40.\n    // Account 0x02 should have 20.\n\n    log(\"Account 1 Vault Balance\")\n    log(acct1ftRef.balance)\n\n    log(\"Account 2 Vault Balance\")\n    log(acct2ftRef.balance)\n\n    if acct1ftRef.balance != UInt64(40) || acct2ftRef.balance != UInt64(20) {\n        panic(\"Wrong balances!\")\n    }\n\n    // Get published NFT Collection Receiver references from both accounts\n    let acct1nftRef = account1.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"missing account 1 nft reference!\")\n\tlet acct2nftRef = account2.published[&AnyResource{NonFungibleToken.NFTReceiver}] ?? panic(\"missing account 2 nft reference!\")\n\n    // Log the NFT IDs that owned by both accounts.\n    // Account 0x01 should have NFT 1\n    // Account 0x02 should have none\n    log(\"Account 1 NFTs\")\n    log(acct1nftRef.getIDs())\n\tlog(\"Account 2 NFTs\")\n    log(acct2nftRef.getIDs())\n\n    if acct1nftRef.getIDs()[0] != UInt64(1) || acct2nftRef.getIDs().length != 0 {\n        panic(\"Wrong Balances!\")\n    }\n}\n",
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