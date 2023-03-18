---
title: Walletless Onboarding
---

Walletless onboarding is an approach through which developers can meet new users where they are in their Web3 journey, delivering a familiar experience while they progressively expose new users to the benefits of Web3.  On Flow, developers can help users realize the benefits of both custodial and non-custodial experiences with a seamless path to real ownership and self-sovereignty at a user’s own pace.

### Introduction

To build a walletless onboarding experience, developers can design their first-time user experiences in a way that abstracts away the existence of an underlying blockchain from the user, so users don’t have to worry about wallets right away.  Apps can leverage familiar Web2 onboarding features, such as social/email login and payments via credit card in order to help users experience the value of the app up front.

Underneath these onboarding features, developers can provide new users with an in-app custodial Flow account and handle all transactions on behalf of the user so that the user can begin using your app without the need to immediately set up a wallet.  In this case, any collectibles that a user acquires through the use of the app are held within this app custody account.

While this approach can deliver an effective onboarding experience for users new to Web3, it’s important to provide these users with a seamless path to real ownership and control over the digital items that they’ve acquired.  Given the benefits of an app custody experience (seamless on-chain transactions), we’ll want to establish this transition in a way that combines these benefits with those of self-custody (real ownership, portability of assets).

On Flow, developers can establish this state of hybrid custody - where a user realizes the benefits of both app and self custody through shared control between app custody and self custody accounts.  With hybrid custody, users can continue to seamlessly use your app without needing to approve transactions while having full control to take their digital items elsewhere in the ecosystem without the need to transfer them out of your app.

Hybrid custody is enabled on Flow through Account Linking & Delegation.  With Account Linking & Delegation, your app establishes a parent-child relationship by allowing the app custody account (child) to opt into being controlled by the self-custody account (parent).  Read Account Linking & Delegation for more details on how hybrid custody is established on Flow.

### Design Considerations

While developers will choose the best solution to onboard new users to their app, there are some considerations to take into account when designing a walletless onboarding experience.

### Account Creation

In order to use a Web3 account built on Flow, a user will need to have a Flow account.  In apps where users bring their own wallet, it can simplify things quite a bit for developers, as they don’t need to worry about account creation and custody of keys.  But with a walletless onboarding flow, we’re enabling users to use the app without a wallet - so developers will need to handle account creation and custody on behalf of the user.

For most apps, developers will create a Flow account for each user and associate this account with the user’s account in the app itself.  [Account creation on Flow](https://developers.flow.com/cadence/language/accounts#account-creation) requires a payer, so developers will need to determine whether they subsidize creation of Flow accounts or if they’ll require users to pay to sign up for the app.

Additionally, since the user’s Flow account will be managed by the app, developers will need to consider their preferred approach for secure storage and management of the keys for each account.

### NFT Minting and Purchase

In the walletless onboarding flow, developers will need to provide an abstracted way for users to purchase NFTs without needing to interact with a wallet.  This approach will require developers to enable users to purchase using Web2 methods such as credit card or in-app payments and handle all relevant interactions with the Flow blockchain on the user’s behalf.  If the user is purchasing a new NFT, developers will need to handle minting and transfer of the NFTs to the user’s account managed within the app.

### Connecting Wallets

To facilitate a user transitioning to a state of hybrid custody in the app, developers will need to design a path for users to connect a self-custody wallet.  Developers should aim to design this step in context for users, so there is a clear benefit to how hybrid custody benefits the user and how connecting a wallet unlocks new experiences.

Read Account Linking & Delegation for more details on how hybrid custody is established on Flow.

### Example Apps

To help demonstrate a walletless onboarding experience, we’ve [built a pair of sample apps](https://github.com/onflow/walletless-arcade-example) that showcase the end-to-end flow of a user journey that begins in a walletless, app custody experience and ends with a hybrid custody state where a user can seamlessly use their digital items in other apps.