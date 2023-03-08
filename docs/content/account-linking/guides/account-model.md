---
title: Account Model & Implementation
---

This doc serves as developer guidance for leveraging linked parent-child accounts. Implementing this standard will allow dapps to facilitate a user experience based not on the single authenticated account, but on the global context of all accounts linked to the authenticated user.

We believe multi-account linking and management, technical initiatives in support of [Walletless/Progressive](https://forum.onflow.org/t/hybrid-custody/4016) [Onboarding](https://flow.com/post/flow-blockchain-mainstream-adoption-easy-onboarding-wallets), will enable in-dapp experiences far superior to the current Web3 status quo and allow for industry UX to finally reach parity with traditional Web2 authentication and onboarding flows, most notably on mobile.

A new user will no longer need a preconfigured wallet to interact with Flow. When they do decide to create a wallet and link with a dapp; however, the associated accounts and assets within them will need to be accessible the same as if they were in a single account.

In order to realize a multi-account world that makes sense to users - one where they don’t have to concern themselves with managing assets across their network of accounts - we’re relying on Flow builders to cast their abstractive magic. Consider this your grimoire, fellow builder, where we’ll continue from the perspective of a wallet or marketplace dapp seeking to facilitate a unified account experience, abstracting away the partitioned access between accounts into a single dashboard for user interactions on all their owned assets.

# Objective

- Understand the parent-child account hierarchy
- Create a blockchain-native onboarding flow
- Link an existing app account as a child to a newly authenticated parent account
- Get your dapp to recognize “parent” accounts along with any associated “child” accounts
- View Fungible and NonFungible Token metadata relating to assets across all of a user’s associated accounts - their wallet-mediated “parent” account and any hybrid custody model “child” accounts
- Facilitate transactions acting on assets in child accounts

# Design Overview

The basic idea in the [(currently proposed) standard](https://forum.onflow.org/t/account-linking-authaccount-capabilities-management/4314) is relatively simple. A parent account is one that has delegated authority on another account. The account which has delegated authority over itself to the parent account is the child account.

In the [Hybrid Custody Model](https://forum.onflow.org/t/hybrid-custody/4016), this child account would have shared access between the dapp which created the account and the linked parent account.

How does this delegation occur? Typically when we think of shared account access in crypto, we think keys. However, Cadence recently enabled an [experimental feature](https://github.com/onflow/cadence/issues/2151) whereby an account can link a Capability to its AuthAccount.

We’ve leveraged this feature in a (proposed) standard so that dapps can implement a hybrid custody model whereby the dapp creates an account it controls, then later delegates authority over that account to the user once they’ve authenticate with their wallet. The delegation of that account authority is mediated by the `ChildAccountManager`, residing in the user’s parent account, and `ChildAccountTag`, residing in the child account. 

![child-account-manager.jpeg](resources/child-account-manager.jpeg)

Therefore, the presence of a `ChildAccountManager` in an account implies there are potentially associated accounts for which the owning account has delegated authority. This resource is intended to be configured with a pubic Capability enabling querying of an accounts child account addresses via `getChildAccountAddresses()`.

A wallet or marketplace wishing to discover all of a user’s accounts and assets within them can do so by first looking to the user’s `ChildAccountManager`.

## Identifying Account Hierarchy

To clarify, insofar as the standard is concerned, an account is a parent account if it contains a `ChildAccountManager` resource, and an account is a child account if it contains a `ChildAccountTag` resource.

![We can see that the user’s `ChildAccountManager.childAccounts` point to the address of its child account. Likewise, the child account’s `ChildAccountTag.parentAddress` point to the user’s account as its parent address. This makes it easy to both identify whether an account is a parent, child, or both, and its associated parent/child account(s).](resources/account-hierarchy.jpeg)

We can see that the user’s `ChildAccountManager.childAccounts` point to the address of its child account. Likewise, the child account’s `ChildAccountTag.parentAddress` point to the user’s account as its parent address. This makes it easy to both identify whether an account is a parent, child, or both, and its associated parent/child account(s).

## Consideration

Do note that this construction does not prevent an account from having multiple parent accounts or a child account from being the parent to other accounts. While initial intuition might lead one to believe that account associations are a tree with the user at the root, the graph of associated accounts among child accounts may lead to cycles of association. 

We believe it would be unlikely for a use case to demand a user delegates authority over their main account (in fact we’d discourage such constructions), but delegating access between child accounts could be useful. As an example, consider a set of local game clients across mobile and web platforms, each with self-custodied app accounts having delegated authority to each other while both are child accounts of the user’s main account.

![The user’s account is the root parent account while both child accounts have delegated access to each other. This allows assets to be easily transferable between dapp accounts without the need of a user signature to facilitate transfer.](resources/user-account.jpeg)

The user’s account is the root parent account while both child accounts have delegated access to each other. This allows assets to be easily transferable between dapp accounts without the need of a user signature to facilitate transfer.

Ultimately, it’ll be up to the implementing wallet/marketplace how far down the graph of account associations they’d want to traverse and display to the user.

# Implementation

From the perspective of a wallet or marketplace dapp, some relevant things to know about the user are:

- Does this account have associated child accounts?
- What are those associated child accounts, if any?
- What NFTs are owned by this user across all associated accounts?
- What are the balances of all FungibleTokens across all associated accounts?

And with respect to acting on the assets of child accounts and managing child accounts themselves:

- Spending FungibleTokens from a child account’s Vault
- Creating a user-funded child account
- Removing a child account

## Examples

### Query Whether an Address Has Associated Accounts

This script will return `true` if a `ChildAccountManager` is stored and `false` otherwise

```jsx
import ChildAccount from "../contracts/ChildAccount.cdc"

pub fun main(address: Address): Bool {
	// Get the AuthAccount of the specified Address
	let account: AuthAccount = getAuthAccount(address)
	// Get a reference to the account's ChildAccountManager if it
	// exists at the standard path
	if let managerRef = account.borrow<
		&ChildAccount.ChildAccountManager
	>(from: ChildAccount.ChildAccountManagerStoragePath) {
		// Identified an account as a parent account -> return true
		return true
	}
	// Account is not a parent account -> return false
	return false
}
```

### Query All Accounts Associated with Address

The following script will return an array addresses associated with a given account’s address, inclusive of the provided address.

```jsx
import ChildAccount from "../contracts/ChildAccount.cdc"

pub fun main(address: Address): [Address] {
	// Init return variable
	let addresses: [Address] = [address]
	// Get the AuthAccount of the specified Address
	let account: AuthAccount = getAuthAccount(address)
	// Get a reference to the account's ChildAccountManager if it
	// exists at the standard path
	if let managerRef = account.borrow<
		&ChildAccount.ChildAccountManager
	>(from: ChildAccount.ChildAccountManagerStoragePath) {
		// Append any child account addresses to the return value
		addresses.appendAll(
		 managerRef.getChildAccountAddresses()
		)
	}
	// Return the final array, inclusive of specified Address
	return addresses
}
```

### Query All Owned NFT Metadata

While it is possible to iterate over the storage of all associated accounts in a single script, memory limits prevent this approach from scaling well. Since some accounts hold thousands of NFTs, we recommend breaking up iteration, utilizing several queries to iterate over accounts and the storage of each account. Batching queries on individual accounts may even be required based on the number of NFTs held.

1. Get all associated account addresses (see above)
2. Looping over each associated account address client-side, get each address’s owned NFT metadata

```jsx
import NonFungibleToken from "../../contracts/utility/NonFungibleToken.cdc"
import MetadataViews from "../../contracts/utility/MetadataViews.cdc"
import ChildAccount from "../../contracts/ChildAccount.cdc"

pub fun main(address: Address): [NFTData] {
  // Get the account
  let account: AuthAccount = getAuthAccount(address)
  // Init for return value
  let data: [NFTData] = []
  // Assign the types we'll need
  let collectionType: Type = Type<@{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>()
  let displayType: Type = Type<MetadataViews.Display>()
  let collectionDisplayType: Type = Type<MetadataViews.NFTCollectionDisplay>()
  let collectionDataType: Type = Type<MetadataViews.NFTCollectionData>()

  // Iterate over each public path
  account.forEachStored(fun (path: StoragePath, type: Type): Bool {
    // Check if it's a Collection we're interested in, if so, get a reference
    if type.isSubtype(of: collectionType) {
      if let collectionRef = account.borrow<
        &{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}
    >(from: path) {
      // Iterate over the Collection's NFTs, continuing if the NFT resolves the views we want
      for id in collectionRef.getIDs() {
        let resolverRef: &{MetadataViews.Resolver} = collectionRef.borrowViewResolver(id: id)
        if let display = resolverRef.resolveView(displayType) as! MetadataViews.Display? {
            let collectionDisplay = resolverRef.resolveView(collectionDisplayType) as! MetadataViews.NFTCollectionDisplay?
            let collectionData = resolverRef.resolveView(collectionDataType) as! MetadataViews.NFTCollectionData?
            // Build our NFTData struct from the metadata
            let nftData = NFTData(
              name: display.name,
              description: display.description,
              thumbnail: display.thumbnail.uri(),
              resourceID: resolverRef.uuid,
              ownerAddress: resolverRef.owner?.address,
              collectionName: collectionDisplay?.name,
              collectionDescription: collectionDisplay?.description,
              collectionURL: collectionDisplay?.externalURL?.url,
              collectionStoragePathIdentifier: path.toString(),
              collectionPublicPathIdentifier: collectionData?.publicPath?.toString()
            )
            // Add it to our data
            data.append(nftData)
          }
        }
      }
    }
    return true
  })
  return data
}

// Where NFTData has the following schema
pub struct NFTData {
  pub let name: String
  pub let description: String
  pub let thumbnail: String
  pub let resourceID: UInt64
  pub let ownerAddress: Address?
  pub let collectionName: String?
  pub let collectionDescription: String?
  pub let collectionURL: String?
  pub let collectionStoragePathIdentifier: String
  pub let collectionPublicPathIdentifier: String?
}
```

After iterating over all associated accounts, the client will have an array of `NFTData` structs containing relevant information about each owned NFT including the address where the NFT resides. Note that this script does not take batching into consideration and assumes that each NFT resolves at minimum the `MetadataViews.Display` view type. 

### Query All Account FungibleToken Balances

Similar to the previous example, we recommend breaking up this task due to memory limits.

1. Get all linked account addresses (see above)
2. Looping over each associated account address client-side, get each address’s owned FungibleToken Vault metadata

```jsx
import FungibleToken from "../../contracts/utility/FungibleToken.cdc"
import MetadataViews from "../../contracts/utility/MetadataViews.cdc"
import FungibleTokenMetadataViews from "../../contracts/utility/FungibleTokenMetadataViews.cdc"
import ChildAccount from "../../contracts/ChildAccount.cdc"

/// Returns a dictionary of VaultInfo indexed on the Type of Vault
pub fun main(address: Address): {Type: VaultInfo} {
  // Get the account
  let account: AuthAccount = getAuthAccount(address)
  // Init for return value
  let balances: {Type: VaultInfo} = {}
  // Assign the type we'll need
  let vaultType: Type = Type<@{FungibleToken.Balance, MetadataViews.Resolver}>()
  let ftViewType: Type= Type<FungibleTokenMetadataViews.FTView>()
  // Iterate over all stored items & get the path if the type is what we're looking for
  account.forEachStored(fun (path: StoragePath, type: Type): Bool {
    if type.isSubtype(of: vaultType) {
      // Get a reference to the vault & its balance
      if let vaultRef = account.borrow<&{FungibleToken.Balance, MetadataViews.Resolver}>(from: path) {
        let balance = vaultRef.balance
        // Attempt to resolve metadata on the vault
        if let ftView = vaultRef.resolveView(ftViewType) as! FungibleTokenMetadataViews.FTView? {
          // Insert a new info struct if it's the first time we've seen the vault type
          if !balances.containsKey(type) {
            let vaultInfo = VaultInfo(
              name: ftView.ftDisplay?.name ?? vaultRef.getType().identifier,
              symbol: ftView.ftDisplay?.symbol,
              balance: balance,
              description: ftView.ftDisplay?.description,
              externalURL: ftView.ftDisplay?.externalURL?.url,
              logos: ftView.ftDisplay?.logos,
              storagePathIdentifier: path.toString(),
              receiverPathIdentifier: ftView.ftVaultData?.receiverPath?.toString(),
              providerPathIdentifier: ftView.ftVaultData?.providerPath?.toString()
            )
            balances.insert(key: type, vaultInfo)
          } else {
            // Otherwise just update the balance of the vault (unlikely we'll see the same type twice in
            // the same account, but we want to cover the case)
            balances[type]!.addBalance(balance)
          }
        }
      }
    }
    return true
  })
  return balances
}

/// Where VaultInfo has the following schema
pub struct VaultInfo {
  pub let name: String?
  pub let symbol: String?
  pub var balance: UFix64
  pub let description: String?
  pub let externalURL: String?
  pub let logos: MetadataViews.Medias?
  pub let storagePathIdentifier: String
  pub let receiverPathIdentifier: String?
  pub let providerPathIdentifier: String?
}
```

The above script returns a dictionary of `VaultInfo` structs indexed on the Vault Type and containing relevant Vault metadata. If the Vault doesn’t resolve FungibleTokenMetadataViews, your client will at least be guaranteed to receive the Type, storagePathIdentifier and balance of each Vault in storage.

The returned data at the end of address iteration should be sufficient to achieve a unified balance of all Vaults of similar types across all of a user’s associated account as well as a more granular per account view.

### Use Child Account FungibleTokens Signing As Parent

A user with tokens in one of their linked accounts will likely want to utilize said tokens. In this example, the user will sign a transaction a transaction with their authenticated account that retrieves a reference to a linked account’s Flow Provider, enabling withdrawal from the linked account having signed with the main account.

```jsx

import FungibleToken from "../../contracts/utility/FungibleToken.cdc"
import ChildAccount from "../../contracts/ChildAccount.cdc"

/// Transaction showcasing accessing a linked account's Provider
transaction(childAccountAddress: Address, withdrawalAmount: UFix64) {
	prepare(signer: AuthAccount) {
		// Get a reference to the signer's ChildAccountManager
		if let managerRef: &ChildAccountManager = signer.borrow<&ChildAccountManager>(
				from: ChildAccount.ChildAccountManagerStoragePath
			) {
			// Get a reference to the the child account's AuthAccount
			let childAccount: &AuthAccount = managerRef.getChildAccountRef(
					address: childAccountAddress
				) ?? panic("Provided address is not a child account!")
			// Get a reference to the child account's FlowToken Vault Provider Capability
			let flowProviderRef: &{FungibleToken.Provider} = childAccount.borrow<
					&FlowToken.Vault{FungibleToken.Provider}
				>( 
					from: /storage/FlowTokenVault
				) ?? panic("Could not get FlowToken Provider from child account at expected path!")
			// Can now transact with the child account's funds having signed as parent account
			// ...
		}
	}
}
```

At the end of this transaction, you’ve gotten a reference to the specified account’s Flow Provider. You could continue for a number of use cases - minting or purchasing an NFT with funds from the linked account, transfer between accounts, etc. A similar approach could get you reference to the linked account’s `NonFungibleToken.Provider`, enabling NFT transfer, etc.

### Create a User-Funded Child Account

Creating shared access linked accounts will be covered in more depth in future documentation. From the perspective of a wallet/marketplace, it may be desirable to enable users to create linked accounts themselves and delegate secondary access to other parties. This could be useful for partitioining assets across a number of accounts or other in-app use cases we haven’t even considered.

Account creation needs to be funded by an existing account on Flow. For our purposes here, we’ll consider a user-funded child account, assigning the signing user’s key access to the child account.

```jsx
import ChildAccount from "../../contracts/ChildAccount.cdc"
import MetadataViews from "../../contracts/utility/MetadataViews.cdc"

/// This transaction creates an account using the signer's public key at the
/// given index using the ChildAccountManager and the signer as the account's payer.
/// Additionally, the new account is funded with the specified amount of Flow
/// from the signing account's FlowToken Vault.
///
transaction(
    signerPubKeyIndex: Int,
    fundingAmt: UFix64,
    childAccountName: String,
    childAccountDescription: String,
    clientIconURL: String,
    clientExternalURL: String
  ) {

  prepare(signer: AuthAccount) {
    /** --- Set user up with ChildAccountManager --- */
    //
    // Check if ChildAccountManager already exists
    if signer.borrow<&ChildAccount.ChildAccountManager>(from: ChildAccount.ChildAccountManagerStoragePath) == nil {
      // Create and save the ChildAccountManager resource
      signer.save(<-ChildAccount.createChildAccountManager(), to: ChildAccount.ChildAccountManagerStoragePath)
    }
		// Ensure public Capabilities are linked in PublicStorage
    if !signer.getCapability<&{ChildAccount.ChildAccountManagerViewer}>(ChildAccount.ChildAccountManagerPublicPath).check() {
      signer.link<
        &{ChildAccount.ChildAccountManagerViewer}
      >(
        ChildAccount.ChildAccountManagerPublicPath,
        target: ChildAccount.ChildAccountManagerStoragePath
      )
    }

    /* --- Create account --- */
    //
    // Get a reference to the signer's ChildAccountManager
    let managerRef = signer.borrow<
        &ChildAccount.ChildAccountManager
      >(
        from: ChildAccount.ChildAccountManagerStoragePath
      ) ?? panic(
        "No ChildAccountManager in signer's account at "
        .concat(ChildAccount.ChildAccountManagerStoragePath.toString())
      )
    // Get the signer's key at the specified index
    let key: AccountKey = signer.keys.get(
				keyIndex: signerPubKeyIndex
			) ?? panic("No key with given index")
    // Convert to string
    let pubKeyAsString = String.encodeHex(key.publicKey.publicKey)
    // Construct the ChildAccountInfo metadata struct
    let info = ChildAccount.ChildAccountInfo(
        name: childAccountName,
        description: childAccountDescription,
        clientIconURL: MetadataViews.HTTPFile(url: clientIconURL),
        clienExternalURL: MetadataViews.ExternalURL(clientExternalURL),
        originatingPublicKey: pubKeyAsString
      )
    // Create the account
    let newAccount: AuthAccount = managerRef.createChildAccount(
      signer: signer,
      initialFundingAmount: fundingAmt,
      childAccountInfo: info,
      authAccountCapPath: ChildAccount.AuthAccountCapabilityPath
    )
		// Can then continue to configure the new account as you wish...
		// ...
  }
}
```

To recap here, we first ensure the user has a `ChildAccountManager` configured, then borrow a reference to that resource. Before creating a child account, we create a metadata struct, `ChildAccountInfo`, from the provided arguments also providing a public key from the user’s account at the specified index.

We then call on the `ChildAccountManager` to create the account, funding creation with the signing account and additionally transferring the specified amount of Flow from signer to the new account’s Flow Vault.

Note that there’s a bit nuance to creating accounts intended for use as hybrid custody linked accounts, particularly with considerations around key custody and funding party. However, we’ll save that for the progressive onboarding dapp implementation docs.

### Revoking Secondary Access on a Child Account

The expected uses of child accounts for progressive onboarding implies that they will be accounts with shared access. A user may decide that they no longer want secondary parties to have access to the child account. 

There are two ways a party can have delegated access to an account - keys and AuthAccount Capability. To revoke access via keys, a user would iterate over account keys and revoke any that the user does not custody.

Things are not as straightforward respect to AuthAccount Capabilities, at least not until Capability Controllers enter the picture. This is discussed in more detail in [the Flip](https://forum.onflow.org/t/account-linking-authaccount-capabilities-management/4314). For now, we recommend that if users want to revoke secondary access, they transfer any assets from the relevant child account and remove it altogether.

### Remove a Child Account

As mentioned above, if a user no longer wishes to share access with another party, it’s recommended that desired assets be transferred from that account to either their main account or other linked accounts and the linked account be removed from their `ChildAccountManager`. Let’s see how to complete that removal.

```jsx
import ChildAccount from "../../contracts/ChildAccount.cdc"

/// This transaction removes access to a child account from the signer's
/// ChildAccountManager. Note that the signer will no longer have access to
/// the removed child account, so care should be taken to ensure any assets
/// in the child account have been first transferred.
///
transaction(childAddress: Address) {

    let managerRef: &ChildAccount.ChildAccountManager
    
    prepare(signer: AuthAccount) {
        // Assign a reference to signer's ChildAccountmanager
        self.managerRef = signer.borrow<
                &ChildAccount.ChildAccountManager
            >(
                from: ChildAccount.ChildAccountManagerStoragePath
            ) ?? panic("Signer does not have a ChildAccountManager configured!")
    }

    execute {
        // Remove child account, revoking any granted Capabilities
        self.managerRef.removeChildAccount(withAddress: childAddress)
    }
}
```

After removal, the signer no longer has delegated access to the removed account via their `ChildAccountManager`. Also note that currently a user can grant their linked accounts generic Capabilities. During removal, those Capabilities are revoked, removing the linked account’s access via their `ChildAccountTag`.