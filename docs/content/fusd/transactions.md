---
title: FUSD Transactions & Scripts
sidebar_title: Transactions & Scripts
description: Transaction templates for the FUSD stablecoin on Flow 
---

## Contract

The `FUSD` contract defines the Flow USD stablecoin token.

FUSD implements the standard [FungibleToken](/core-contracts/fungible-token/)
contract interface on Flow.

| Network  | Contract Address     |
| -------- | -------------------- |
| Testnet  | [0xe223d8a629e49c68](https://flow-view-source.com/testnet/account/0xe223d8a629e49c68/contract/FUSD) |
| Mainnet  | [0x3c5959b568896393](https://flowscan.org/contract/A.3c5959b568896393.FUSD) |

Source: [FUSD.cdc](https://github.com/onflow/fusd/blob/main/contracts/FUSD.cdc)

## Transactions & Scripts

### Setup FUSD Vault & Receiver

This transaction configures the signer's account
with an empty FUSD vault.

It also links the following capabilities:

- `FungibleToken.Receiver` - This capability allows this account to accept FUSD deposits.
- `FungibleToken.Balance` - This capability allows anybody to inspect the FUSD balance of this account.

```cadence:title=setup_fusd_vault.cdc
// Mainnet
import FungibleToken from 0xf233dcee88fe0abe
import FUSD from 0x3c5959b568896393

// Testnet
// import FungibleToken from 0x9a0766d93b6608b7
// import FUSD from 0xe223d8a629e49c68

transaction {

  prepare(signer: AuthAccount) {

    // It's OK if the account already has a Vault, but we don't want to replace it
    if(signer.borrow<&FUSD.Vault>(from: /storage/fusdVault) != nil) {
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

Source: [setup\_fusd\_vault.cdc](https://github.com/onflow/fusd/blob/main/transactions/setup_fusd_vault.cdc)

### Transfer FUSD

This transaction withdraws FUSD from the signer's
account and deposits it into a recipient account.
This transaction will fail if the recipient 
does not have an FUSD receiver.
No funds are transferred or lost if the transaction fails.

- `amount`: The amount of FUSD transfer (e.g. 10.0)
- `recipient`: The recipient account address.

```cadence:title=transfer_fusd.cdc
// Mainnet
import FungibleToken from 0xf233dcee88fe0abe
import FUSD from 0x3c5959b568896393

// Testnet
// import FungibleToken from 0x9a0766d93b6608b7
// import FUSD from 0xe223d8a629e49c68

transaction(amount: UFix64, recipient: Address) {

  // The Vault resource that holds the tokens that are being transferred
  let sentVault: @FungibleToken.Vault

  prepare(signer: AuthAccount) {
    // Get a reference to the signer's stored vault
    let vaultRef = signer.borrow<&FUSD.Vault>(from: /storage/fusdVault)
      ?? panic("Could not borrow reference to the owner's Vault!")

    // Withdraw tokens from the signer's stored vault
    self.sentVault <- vaultRef.withdraw(amount: amount)
  }

  execute {
    // Get the recipient's public account object
    let recipientAccount = getAccount(recipient)

    // Get a reference to the recipient's Receiver
    let receiverRef = recipientAccount.getCapability(/public/fusdReceiver)!
      .borrow<&{FungibleToken.Receiver}>()
      ?? panic("Could not borrow receiver reference to the recipient's Vault")

    // Deposit the withdrawn tokens in the recipient's receiver
    receiverRef.deposit(from: <-self.sentVault)
  }
}
```

Source: [transfer_fusd.cdc](https://github.com/onflow/fusd/blob/main/transactions/transfer_fusd.cdc)

### Get FUSD Balance for an Account

This script returns the FUSD balance of an account.

```cadence:title=get_fusd_balance.cdc
// Mainnet
import FungibleToken from 0xf233dcee88fe0abe
import FUSD from 0x3c5959b568896393

// Testnet
// import FungibleToken from 0x9a0766d93b6608b7
// import FUSD from 0xe223d8a629e49c68

pub fun main(address: Address): UFix64 {
  let account = getAccount(address)

  let vaultRef = account
    .getCapability(/public/fusdBalance)
    .borrow<&FUSD.Vault{FungibleToken.Balance}>()
    ?? panic("Could not borrow Balance capability")

  return vaultRef.balance
}
```

Source: [get\_fusd\_balance.cdc](https://github.com/onflow/fusd/blob/main/transactions/scripts/get_fusd_balance.cdc)
