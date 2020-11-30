# Application of BIP 44 in Flow Wallets

| Status        | Proposed |
:-------------- |:---------|
| **FLIP #**    | [200](https://github.com/onflow/flow/pull/200) |
| **Author(s)** | Peter Siemens (peter@dapperlabs.com), Jeffery Doyle (jeffrey.doyle@dapperlabs.com) |
| **Sponsor**   | Peter Siemens (peter@dapperlabs.com) |
| **Updated**   | 2020-11-25 |

## Objective

This document aims to define a standard pattern for the application of 
[Bitcoin Improvement Proposal 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) (BIP 44)
in Flow-compatible hardware and software wallets.

## Motivation

This proposal was prompted by the recent development of the first Flow hardware
wallet application (Ledger) and its companion host software (Flow Port). 

In the near term, this proposal affects users of the Flow Ledger application.
In the long term, it affects Flow wallet developers and their users.

## User Benefit

By following this standard, developers of existing BIP 44 crypto wallets will
be able to reduce friction for users who wish to create accounts on Flow.

## Design Proposal

### Path Levels

BIP 44 defines an implementation of 
[Bitcoin Improvement Proposal 32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) (BIP 32)
that standardizes a format for hierarchical deterministic (HD) 
key derivation paths that support multiple coins and multiple accounts per coin.

The BIP 44 path format is as follows:

```
m / purpose' / coin_type' / account' / change / address_index
```

When using this format to construct or discover a Flow user wallet, 
the value(s) of each path parameter should follow the specifications below.

#### Purpose

Purpose is always the constant 44' (0x8000002C), 
as described in [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#purpose).

#### Coin Type

Coin type is always the constant 539' (0x8000021b), 
the unique identifier for the Flow protocol, as defined in 
[SatoshiLabs Improvement Proposal 44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) (SLIP 44).

#### Account

Account is the index of a distinct account address owned by the wallet user. 
No two account indices should be used to generate child public keys that are assigned 
to the same Flow account address. Furthermore, a single account index should not
be used to generate keys for more than one account address.

The motivation for these accounts is the same set forth in BIP 44:

> Users can use these accounts to organize the funds in the same fashion as bank accounts; for donation purposes (where all addresses are considered public), for saving purposes, for common expenses etc.

In addition to the above, Flow wallets should follow the standards for account numbering, 
creation and discovery described in [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account).

#### Change

Unlike Bitcoin, Flow does not utilize change addresses. 
Change is always the constant 0.

#### Index

In BIP 44, each index generates a public key that is used to derive
a unique address for an account.
Although Flow does not derive account addresses from public keys,
index can still be used to generate multiple public keys for a single account.

When applying BIP 44 to Flow, each subsequent value for index should be used to
generate a new public key for the same account, starting from 0 and incrementing
by 1.

This index should not be confused with the on-chain account key index.

### Account Discovery

Wallet developers should use a modified version of the original account discovery
procedure [described in BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account-discovery).

1. Derive the first account's node (index = 0).
2. Scan for addresses by checking each public key index against the public key registry,
respecting the [gap limit described in BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#address-gap-limit).
3. If no address is found in the registry, stop discovery.
4. If an address is found, query the chain to fetch the account details.
5. If no account is found<sup>1</sup>, skip this index and go to step 1.
6. If an account is found, add it to the user's wallet and go to step 1.

<sup>1</sup>Flow supports account deletion, meaning that an address found in the registry
may refer to a nonexistent account. In this case the account should be skipped
but discovery should continue.

### Drawbacks

#### Mapping Public Keys to Addresses

A Flow account address is not derived from a public key and is instead
assigned during an on-chain transaction. Flow supports a many-to-many relationship
between accounts and public keys; multiple public keys can be added to a single account, 
and a single public key can be added to multiple accounts. 

The Flow protocol maintains an index from `address => [publicKey]`, 
but there is currently no on-chain reverse mapping from `publicKey => [address]`.

Implementers of this standard will require a separate source of truth,
the public key registry, to return the associated user address for a given public key. 
This requirement is mentioned in the [related issues](#related-issues) section below.

#### Account Key Index Alignment

The Flow protocol assigns an index to each account key that is registered on chain.
When discussing this proposal, Flow contributors considered a variation that would 
require the path index to always align with the on-chain index for the corresponding
account.

For example, a user may create an account from a seed phrase and generate public keys
at indices 0, 1 and 2. If added to the account in order, their on-chain indices would
also be 0, 1, 2, resulting in a clear mapping from each on-chain key 
to its corresponding derivation path.

The authors of this proposal chose to omit this restriction after considering that,
in many cases, a user may add additional public keys from other sources, thus breaking
the perfect alignment between on-chain and key path indices. Even without outside keys,
it is still possible for keys to be added out of order.

Wallet developers or users should therefore not rely on the false assumption that
the path index of a public key always matches its on-chain account key index,
as doing so will cause confusion and errors.

#### Potential Misuse of BIP 44

One could argue that this is a misuse of the original BIP 44, BIP 43 and BIP 32
standards based on the fact that Flow does not derive addresses directly 
from cryptographic public keys.

#### Overdependence on BIP 44

This proposal may also promote an overdependence on the BIP 44 standard,
especially for wallets that do not already implement it. 
In some cases it may be better to use a new implementation or
adaptation of BIP 32 that is better suited to the Flow account model.

### Dependencies

* Dependent projects: Flow Ledger application, Flow Port

### Tutorials and Examples

TODO: add examples 

### Compatibility

This proposal does not change any existing APIs. 
The chosen path structure is meant to maximize forward compatibility 
in a variety of use cases.

The convention proposed in this document is intended for use by any wallet
that supports the BIP 44 standard.

In particular, this proposal impacts wallet software that is compatible
with the Flow Ledger application, such as Flow Port.

## Related Issues

### Mapping Public Keys to Addresses

As mentioned in the [drawbacks](#drawbacks) section, this proposal necessitates 
a public key registry that maps public keys to account addresses.

## Prior Art

This document outlines a specific application of the standard described by 
[BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).
This standard has been widely adopted by Bitcoin, Ethereum and many other 
cryptocurrency projects and communities.

[SLIP 48](https://github.com/satoshilabs/slips/blob/master/slip-0048.md) describes an
alternative to BIP 44 for Graphene-based networks which, similar to Flow, 
do not derive account addresses directly from cryptographic public keys.

## Questions and Discussion Topics

Should the index path parameter be used?
