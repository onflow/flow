---
title: FUSD Stablecoin on Flow Testnet
sidebar_title: FUSD on Testnet
description: Mock FUSD is live on Flow Testnet for development purposes
---

## Contract

The `FUSD` contract defines the Flow USD stablecoin token.

FUSD implements the standard [FungibleToken](https://docs.onflow.org/core-contracts/fungible-token/)
contract interface on Flow.

| Network  | Contract Address     |
| -------- | -------------------- |
| Testnet  | [0xe223d8a629e49c68](https://flow-view-source.com/testnet/account/0xe223d8a629e49c68/contract/FUSD) |

## Transactions & Scripts

### Setup FUSD Vault & Receiver

This transaction configures the signer's account
with an empty FUSD vault.

It also links the following capabilities:

- `FungibleToken.Receiver` - This capability allows this account to accept FUSD deposits.
- `FungibleToken.Balance` - This capability allows anybody to inspect the FUSD balance of this account.

```cadence
import FungibleToken from 0x9a0766d93b6608b7
import FUSD from 0xe223d8a629e49c68

transaction {
  prepare(signer: AuthAccount) {

    let existingVault = signer.borrow<&FUSD.Vault>(from: /storage/fusdVault)

    // If the account is already set up that's not a problem, but we don't want to replace it
    if (existingVault != nil) {
        return
    }
    
    // Create a new FUSD Vault and put it in storage
    signer.save(<-FUSD.createEmptyVault(), to: /storage/fusdVault)

    // Create a public capability to the Vault that only exposes
    // the deposit function through the Receiver interface
    signer.link<&FUSD.Vault{FungibleToken.Receiver}>(
      /public/fusdReceiver,
      target: /storage/fusdVault
    )

    // Create a public capability to the Vault that only exposes
    // the balance field through the Balance interface
    signer.link<&FUSD.Vault{FungibleToken.Balance}>(
      /public/fusdBalance,
      target: /storage/fusdVault
    )
  }
}
```

### Transfer FUSD

This transaction withdraws FUSD from the signer's
account and deposits it into a recipient account.
This transaction will fail if the recipient 
does not have an FUSD receiver. 
No funds are transferred or lost if the transaction fails.

- `amount`: The amount of FUSD transfer (e.g. 10.0)
- `to`: The recipient account address.

```cadence
import FungibleToken from 0x9a0766d93b6608b7
import FUSD from 0xe223d8a629e49c68

transaction(amount: UFix64, to: Address) {

  // The Vault resource that holds the tokens being transferred
  let sentVault: @FungibleToken.Vault

  prepare(signer: AuthAccount) {
    // Get a reference to the signer's stored vault
    let vaultRef = signer
      .borrow<&FUSD.Vault>(from: /storage/fusdVault)
      ?? panic("Could not borrow reference to the owner's Vault!")

    // Withdraw tokens from the signer's stored vault
    self.sentVault <- vaultRef.withdraw(amount: amount)
  }

  execute {
    // Get the recipient's public account object
    let recipient = getAccount(to)

    // Get a reference to the recipient's Receiver
    let receiverRef = recipient
      .getCapability(/public/fusdReceiver)!
      .borrow<&{FungibleToken.Receiver}>()
      ?? panic("Could not borrow receiver reference to the recipient's Vault")

    // Deposit the withdrawn tokens in the recipient's receiver
    receiverRef.deposit(from: <-self.sentVault)
  }
}
```

### Get FUSD Balance for an Account

This script returns the FUSD balance of an account.

```cadence
import FungibleToken from 0x9a0766d93b6608b7
import FUSD from 0xe223d8a629e49c68

pub fun main(address: Address): UFix64 {
  let account = getAccount(address)

  let vaultRef = account
    .getCapability(/public/fusdBalance)!
    .borrow<&FUSD.Vault{FungibleToken.Balance}>()
    ?? panic("Could not borrow Balance capability")

  return vaultRef.balance
}
```

## Where to Get FUSD

### Blocto Swap

FUSD is available on Testnet through the 
[Blocto Swap decentralized exchange](https://swap-testnet.blocto.app/) (DEX).

You can exchange (swap) Testnet FLOW for 
Testnet FUSD using a Blocto wallet.
If you don't have a Blocto wallet on Testnet,
you can create one directly from the Blocto Swap app.

Once the FUSD is in your Blocto wallet,
you can transfer to any Testnet address that has an FUSD receiver.
