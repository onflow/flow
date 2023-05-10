---
title: Mainnet Account Setup Guidelines
sidebar_title: 4. Mainnet Account Setup
---

In order to deploy your smart contracts to the mainnet, you need to register, fund, and setup a new account.

> **Note**: This account will be used for production purposes. Make sure you handle keys appropriately. Using a Key Management Service is the best practice. By default, this command generates an ECDSA key pair on the P-256 curve. Keep in mind the CLI is intended for development purposes only and is not recommended for production use. Handling keys using a Key Management Service is the best practice.

## Create an account
You can easily create a new funded account on mainnet using the Flow CLI. You only need to run a single command `flow accounts create` and select a name for the account and the network, which in this case is `mainnet`. After that the account private key is saved into a seperate file called `{name}.pkey`. We advice switching to KMS system for production use which you [can read more about here](https://developers.flow.com/tools/flow-cli/configuration#advanced-format-1).

```
flow accounts create

Enter an account name: mike
✔ Testnet

🎉 New account created with address 0x77e6ae4c8c2f1dd6 and name mike on Testnet network.

Here’s a summary of all the actions that were taken:
 - Added the new account to flow.json.
 - Saved the private key to mike.pkey.
 - Added mike.pkey to .gitignore.
```


Read more about the command in the [CLI account creation documentation](https://developers.flow.com/tools/flow-cli/create-accounts#interactive-mode).
