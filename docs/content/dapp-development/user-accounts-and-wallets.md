---
title: Flow User Accounts & Wallets
sidebar_title: User Accounts & Wallets
---

Each Flow blockchain user owns an account that holds their digital assets (e.g. currencies or NFTs). A Flow account is identified by an 8-byte address and is controlled by one or more public/private key pairs. Whoever has access to the private key can sign a transaction to access the assets inside the account.

## Interacting with User Accounts & Wallets

Most blockchain users manage their accounts with the help of a crypto wallet, and the same is true on Flow. In short, a wallet is a piece of software or hardware that stores the private key associated with an account.

When talking about user accounts and wallets, we use the term _custodian_ to refer to the party that stores the private key for a user account. Hardware wallets, like those provided by Ledger, allow users to be their own custodian, whereas hosted software wallets, like those provided by Dapper Wallet, can act as the custodian on behalf of the user.

## Connecting Wallets & Dapps

Dapps allow users to store their data in their own accounts, rather than a centralized database. But in order for dapps to work, they still need to be able to securely access a user’s account from time to time.

For example, to purchase an NFT from an artist on the [Versus auction website](https://www.versus-flow.art/), a user will need to send a transaction that transfers funds from their account to the Versus contract account. This transaction is prepared and initialized by the Versus application before being approved by the user.

### Flow Client Library (FCL)

The Flow Client Library (FCL) is a framework that [standardizes and simplifies the way dapps and wallets interact with each other](https://www.onflow.org/post/inside-flow-the-power-of-simplicity-with-fcl). By using FCL, a dapp developer can support a variety of wallet providers with a few lines of code.

FCL provides the following functionality out of the box:

* User registration and login
* Transaction signing and submission

FCL-powered dapps are free to construct transactions which are then passed to the user’s wallet for signing, all without gaining access to the user’s private key. Users can onboard themselves to any FCL-enabled dapp in the Flow blockchain ecosystem and can use the same wallet provider across different dapps.

In addition to the above, FCL-powered dapps have the following benefits:

* **Network effects:** FCL is an evolving ecosystem that will support additional wallets, payment providers and identity management solutions as it grows. FCL-powered dapps and their users will benefit directly from this growth.
* **Reduced technical complexity:** your dapp does not need to secure private keys or sign transactions, and can instead rely on 3rd-party wallet providers to manage this complexity.
* **Fee payments:** in many cases, wallet providers will cover storage and account creation fees for their wallet users, meaning you don’t have to.

_Sample interaction: a user clicks a button to purchase an NFT from your storefront. Your dapp submits a transaction request to the user’s wallet. The wallet displays a prompt to the user, asking them to approve or deny the transaction. After approval, the wallet signs and submits the transaction, then delivers the result to your dapp._

### Dapp Custody

If your dapp does not use FCL, you will need to run your own wallet infrastructure and act as the custodian for your users, rather than relying on 3rd-party wallets. In this case, you as the dapp developer are responsible for securing your users’ private keys.

Under this model, the accounts in your control can only be used with your application. Users will need separate accounts for other applications.

_Sample interaction: a user clicks a button to purchase an NFT from your storefront. This sends an API request to your dapp’s backend, which holds the user’s private key. Your dapp backend then signs and submits a transaction on behalf of the user._

Should your dapp take custody of user accounts? In most cases, no. We hope that you are able to focus on the experience you wish to create, without the complexity, legal responsibility, and limitations that come with being a custodian. We also want users to be able to freely experience many dapps without needing to manage a separate account for each.

With that said, there are circumstances where you may want to be a custodian:

* You are building an dapp on a platform not yet supported by FCL wallets (e.g. mobile, game console).
* You have business or product needs that necessitate a custodial approach (e.g. fraud protection, users who want a custodial option).

If you do need to build your own wallet, we recommend using the [open-source Wallet API](https://github.com/flow-hydraulics/flow-wallet-api), a service you can deploy as part of your infrastructure to manage blockchain accounts and keys.

### Recommendation

Unless you have a specific use case that requires you to manage your users’ private keys, we recommend building an FCL-powered dapp that connects with existing wallet providers: 

* [Blocto](https://blocto.portto.io/en/) is a web, iOS and Android wallet that powers FCL-enabled applications like [Vault by CNN](https://vault.cnn.com/), [MotoGP Ignition](https://motogp-ignition.com/) and [Versus](https://www.versus-flow.art/).
* [Dapper Wallet](https://www.meetdapper.com/) (used by [NBA Top Shot](https://nbatopshot.com/)) is an FCL-compatible wallet that will soon become available to more Flow developers.
