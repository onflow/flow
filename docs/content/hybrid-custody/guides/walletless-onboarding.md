---
title: Walletless Onboarding
---

Walletless onboarding is an approach through which developers can meet new users where they are in their Web3 journey, delivering a familiar experience while they progressively expose new users to the benefits of Web3. On Flow, developers can help users realize the benefits of both custodial and non-custodial experiences with a seamless path to real ownership and self-sovereignty at a user’s own pace.

## Overview

> :warning: Note that the documentation on Hybrid Custody covers the current state and will likely differ from the final implementation. Builders should be aware that breaking changes will deploy between current state and the stable version. Interested in shaping the conversation? [Join in!](https://github.com/onflow/flips/pull/72)

At a high level, implementing walletless onboarding is effectively a process of abstracting away the complexities of getting started in Web3. Your app will handle account creation, key management, and transaction signing behind a familiar Web2 authentication scheme and fiat denominated payments.

There are a number of business & regulatory considerations that come along with the totality of that abstraction, and this doc will seek to highlight those considerations and provide guidance as well as point to existing tools and services where possible.

How you subsidize account creation will ultimately be up to you, and the custodial pattern you choose will likely involve regulatory implications based on where you and your customers reside. You'll also want to consider whether you or your users will subsidize transaction & account storage fees.

With that said, our [Walletless Arcade example app](https://github.com/onflow/walletless-arcade-example) implemented a simple in-app custodial method and funded account creation, transaction, and storage fees with a backend developer account. Don't let these non-technical considerations keep you from building awesome apps!

If you're a smart contract developer looking to get started straight away with an example walletless onboarding transaction, take a look at the [@onflow/linked-accounts repo](https://github.com/onflow/linked-accounts).

## Introduction

To build a walletless onboarding experience, developers can design their first-time user experiences in a way that abstracts away the existence of an underlying blockchain from the user, so users don’t have to worry about wallets right away. Apps can leverage familiar Web2 onboarding features, such as social/email login and payments via credit card in order to help users experience the value of the app up front.

Underneath these onboarding features, developers can provide new users with an in-app custodial Flow account and handle all transactions on behalf of the user so that the user can begin using your app without the need to immediately set up a wallet. In this case, any collectibles that a user acquires through the use of the app are held within this app custody account.

While this approach can deliver an effective onboarding experience for users new to Web3, it’s important to provide these users with a seamless path to real ownership and control over the digital items that they’ve acquired. Given the benefits of an app custody experience (seamless on-chain transactions), we’ll want to establish this transition in a way that combines these benefits with those of self-custody (real ownership, portability of assets, composability at owner's discretion).

On Flow, developers can establish this state of hybrid custody - where a user realizes the benefits of both app and self custody through shared control between app custody and self custody accounts. With hybrid custody, users can continue to seamlessly use your app without needing to approve transactions while having full control to take their digital items elsewhere in the ecosystem without the need to transfer them out of your app.

Hybrid custody is enabled on Flow through Account Linking & Delegation. With Account Linking & Delegation, your app establishes a parent-child relationship by allowing the app custody account (child) to opt into being controlled by the self-custody account (parent). Read Account Linking & Delegation for more details on how hybrid custody is established on Flow.

## Design Considerations

While developers will choose the best solution to onboard new users to their app, there are some considerations to take into account when designing a walletless onboarding experience.

### **Account Creation**

In order to use a Web3 account built on Flow, a user will need to have a Flow account. In apps where users bring their own wallet, it can simplify things quite a bit for developers, as they don’t need to worry about account creation and custody of keys. But with a walletless onboarding flow, we’re enabling users to use the app without a wallet - so developers will need to handle account creation and custody on behalf of the user.

For most apps, developers will create a Flow account for each user and associate this account with the user’s account in the app itself. [Account creation on Flow](https://developers.flow.com/cadence/language/accounts#account-creation) requires a payer, so developers will need to determine whether they subsidize creation of Flow accounts or if they’ll require users to pay to sign up for the app.

Additionally, since the user’s Flow account will be managed by the app, developers will need to consider their preferred approach for secure storage and management of the keys for each account.

<details>
<summary>Example account creation transaction</summary>

```js
import FlowToken from "../../contracts/utility/FlowToken.cdc"
import FungibleToken from "../../contracts/utility/FungibleToken.cdc"

/// This transaction creates an account, funding creation via the signer and
/// adding the provided public key. You'll notice this transaction is pretty
/// much your standard account creation. The magic for you will be how you custody
/// the key for this account (locally, KMS, wallet service, etc.) in a manner that
/// allows your dapp to mediate on-chain interactions on behalf of your user.
/// **NOTE:** Custodial patterns have regulatory implications you'll want to consult a 
/// legal professional about.
///
/// In your dapp's walletless transaction, you'll likely also want to configure
/// the new account with resources & capabilities relevant for your use case after
/// account creation & optional funding.
///
/// For more examples like this, check out the @onflow/linked-accounts repo
/// https://github.com/onflow/linked-accounts
///
transaction(
    pubKey: String,
    initialFundingAmt: UFix64,
  ) {
	
	prepare(signer: AuthAccount) {

		/* --- Account Creation (your dApp may choose to separate creation depending on your custodial model) --- */
		//
		// Create the child account, funding via the signer
		let newAccount = AuthAccount(payer: signer)
		// Create a public key for the proxy account from string value in the provided arg
		// **NOTE:** You may want to specify a different signature algo for your use case
		let key = PublicKey(
			publicKey: pubKey.decodeHex(),
			signatureAlgorithm: SignatureAlgorithm.ECDSA_P256
		)
		// Add the key to the new account
		// **NOTE:** You may want to specify a different hash algo & weight best for your use case
		newAccount.keys.add(
			publicKey: key,
			hashAlgorithm: HashAlgorithm.SHA3_256,
			weight: 1000.0
		)

		/* --- (Optional) Additional Account Funding --- */
		//
		// Fund the new account if specified
		if initialFundingAmt > 0.0 {
			// Get a vault to fund the new account
			let fundingProvider = signer.borrow<&FlowToken.Vault{FungibleToken.Provider}>(
					from: /storage/flowTokenVault
				)!
			// Fund the new account with the initialFundingAmount specified
			newAccount.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(
				/public/flowTokenReceiver
			).borrow()!
			.deposit(
				from: <-fundingProvider.withdraw(
					amount: initialFundingAmt
				)
			)
		}

		/* --- Continue with use case specific setup --- */
		//
		// At this point, the newAccount can further be configured as suitable for
		// use in your dapp (e.g. Setup a Collection, Mint NFT, Configure Vault, etc.)
		// ...
	}
}
```
</details>

### **NFT Minting and Purchase**

In the walletless onboarding flow, developers will need to provide an abstracted way for users to purchase NFTs without interacting with a wallet or handling crypto. This approach will require developers to enable users to purchase using Web2 methods such as credit card or in-app payments and handle all relevant interactions with the Flow blockchain on the user’s behalf. If the user is purchasing a new NFT, developers will need to handle minting and transfer of the NFTs to the user’s account managed within the app.

### **Connecting Wallets**

To facilitate a user transitioning to a state of hybrid custody in the app, developers will need to design a path for users to connect a self-custody wallet. Developers should aim to design this step in context for users, so there is a clear benefit to how hybrid custody benefits the user and how connecting a wallet unlocks new experiences.

Read Account Linking & Delegation for more details on how hybrid custody is established on Flow.

### **General Considerations**

The following questions might be helpful to ask yourself as you think through your walletless onboarding solution:

- **What sort of familiar app authentication can I leverage to make for frictionless signup?**
    - SMS Authentication
    - Email address
    - Social Authentication - Google, Twitter, Facebook, etc.
- **How will I handle key management for app accounts?**
    - Cloud-based KMS
    - In-app local storage
    - Custodial service
- **How will new app accounts be funded?**
    - Backend account funding creation
    - Custodial service
- **Who will fund ongoing transaction & account storage fees?**
    - Payer service
    - Custodial service
- **How can I allow users to pay for on-chain assets with fiat?**
    - Fiat-to-crypto payment APIs - Stripe, Paypal, etc.

## Example Apps

To help demonstrate a walletless onboarding experience, we’ve [built a pair of sample apps](https://github.com/onflow/walletless-arcade-example) that showcase the end-to-end flow of a user journey that begins in a walletless, app custody experience and ends with a hybrid custody state where a user can seamlessly use their digital items in other apps.
