---
title: Hybrid Custody Overview
---

The Hybrid Custody model on Flow enables developers to provide seamless onboarding and in-app experiences while simultaneously empowering users with real ownership and self-sovereignty.  With this [new custodial model](https://forum.onflow.org/t/hybrid-custody/4016), developers can deliver the benefits of both app and self-custody in a unified experience.

The full Hybrid Custody model is enabled by three core components:
- Walletless Onboarding - App managed account creation, funding, and custody
- Account Linking - App custodied accounts delegate access to wallet-authenticated users
- LinkedAccounts contract - A standard contract enabling users to view and manage their linked accounts

### The Path to Hybrid Custody

1. The app creates, funds, and manages access to a Flow account initialized on user onboarding. This enables the app to abstract away the complexities of interacting with smart contract powered applications, and focus on creating slick user experiences behind familiar Web2 authentication and fiat denominated payments.
1. Once a user returns to the app with a self-custodial wallet, they can authenticate their wallet-managed account in the app, allowing the app to give the user's main account delegated access to the app managed account.
1. Upon linking, the user's main account - now the "parent" account - adds the app created account - now the "child" account - to a collection of all linked child accounts. At this point, Hybrid Custody is reached

### Why Care?

Hybrid Custody grants users full access to their linked child accounts without needing to interface with the child account's custodial app, **and** the custodial app can interact with the relevant assets in the child account on behalf of the user in a frictionless UX free from transaction prompts.

> All assets in the app account can now jump the walled garden to play in the rest of the Flow ecosystem.

This shared control over the digital items in the in-app account enables users to establish real ownership of the items beyond the context of the app, where they can use their self-custody wallet to take the items to other apps in the ecosystem, such as a marketplace or a game.

Most importantly, users are able to do this without the need to transfer the digital items between the two accounts, making it seamless to continue using the original app while also using other apps.

With account linking, developers can build walletless onboarding experiences for new users that provide a clear path to self-custody. Continue on to read our Walletless Onboarding guide for more details on how you can use Account Linking to build spectacular experiences on Flow.