---
title: FUSD Stablecoin on Flow
sidebar_title: Introduction
description: FUSD is a 1:1 USD-backed stablecoin on Flow
---

Flow USD (FUSD) is a stablecoin 
issued by [Prime Trust](https://www.primetrust.com/)
that is backed 1:1 by the US Dollar.

## Purpose

FUSD is a USD-backed stablecoin issued as a fungible 
token on the Flow network. Its primary purpose is to provide 
a more consistently-priced payment experience for dapp developers 
and their users.

As a valid payment token, FUSD also acts as an alternative for users who may not be holding the native FLOW token.

## Building with FUSD

As a dapp developer, you can build your application to support
FUSD as a user payment method.

### FUSD on Flow Testnet

A mock version of FUSD is live on Flow Testnet for development purposes.

Testnet FUSD is not backed by any real USD and is available
only for testing purposes.

To add FUSD to your app on Testnet, use the [standard transactions and scripts](/fusd/transactions) with the
Testnet contract addresses.

### FUSD on Flow Mainnet

FUSD is made available on Mainnet through [several providers](/fusd/providers/#mainnet).

To add FUSD to your app on Mainnet, use the [standard transactions and scripts](/fusd/transactions) with the
Mainnet contract addresses.

---

## FAQs

### Who is the issuer of FUSD?

FUSD is issued by [Prime Trust](https://www.primetrust.com/), 
a Nevada-based trust company with address 330 South Rampart Blvd. Suite 260
Summerlin, NV 89145.

### How do I get an FUSD-enabled wallet?

In order to hold FUSD tokens,
you will need a Flow account (wallet) that is configured to receive FUSD. 

All FCL compatible wallets can be easily configured to also receive FUSD.

FCL compatible wallets currently supporting FUSD include:
- [Blocto](https://blocto.portto.io/)
- [NuFi](https://nu.fi/)

You can configure your Blocto wallet to hold FUSD in one of two ways:
- **On mobile:** In the Blocto mobile app, add "Flow USD" as a token asset in the "Wallet" tab.
- **In browser:** Log in to [Flow Port](https://port.onflow.org/) using your Blocto account 
and select "Configure" in the "FUSD Balance" panel.

#### For Developers

Use the [FUSD setup transaction](/fusd/transactions/#setup-fusd-vault--receiver)
to manually configure a Flow account to hold FUSD.

### Where can my users purchase FUSD?

See the [providers](/fusd/providers/) page for available FUSD providers.

### How do I sell FUSD for fiat?

See the [providers](/fusd/providers/) page for available FUSD providers.

### Does the Flow Ledger app support FUSD?

No, the Flow Ledger application does not yet support FUSD, but support is planned.
