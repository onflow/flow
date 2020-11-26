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
that standardizes a format for hierarchical deterministic (HD) key derivation paths that support multiple coins and multiple accounts per coin.

The BIP 44 path format is as follows:

```
m / purpose' / coin_type' / account' / change / address_index
```

When using this format to construct or discover a Flow user wallet, 
the value(s) of each path parameter should follow the specifications below.

#### Purpose

Purpose is always the constant 44' (0x8000002C), as described in [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#purpose).

#### Coin Type

Coin type is always the constant 539' (0x8000021b), 
the unique identifier for the Flow protocol, as defined in 
[SatoshiLabs Improvement Proposal 44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) (SLIP 44).

#### Account

Account is the index of a distinct account owned by the wallet user. 
Each index should refer to a unique account: no two account indices 
should be used to generate child public keys that are assigned 
to the same Flow account address.

The motivation for these accounts is the same set forth in BIP 44:

> Users can use these accounts to organize the funds in the same fashion as bank accounts; for donation purposes (where all addresses are considered public), for saving purposes, for common expenses etc.

#### Change

Unlike Bitcoin, Flow does not utilize change addresses. 
Change is always the constant 0.

#### Index

At the time of writing, there is not a compelling use case for 
mapping multiple HD public keys to a single Flow account at this level.

To simplify account discovery, index is always the constant 0.

### Drawbacks

One could argue that this is a misuse of the original BIP 44, BIP 43 and BIP 32
standards based on the fact that Flow does not derive addresses directly 
from public keys.

This proposal may cause confusion for readers who are unfamiliar with the Flow
account model and address generation scheme.

A standard such as this may also promote on overdependence on the BIP 44 standard
for wallets that do not already implement it. For example, 
it may be better to instead define a new implementation of BIP 32 that is specific
to Flow.

### Dependencies

TODO

* Dependencies: does this proposal add any new dependencies to Flow?
* Dependent projects: are there other areas of Flow or things that use Flow 
(Access API, Wallets, SDKs, etc.) that this affects? 
How have you identified these dependencies and are you sure they are complete? 
If there are dependencies, how are you managing those changes?

### Tutorials and Examples

TODO: examples 

### Compatibility

This proposal does not change any existing APIs. 
The chosen path structure is meant to maximize forward compatibility 
in a variety of use cases.

The convention proposed in this document is intended for use by any wallet
that supports the BIP 44 standard.

In particular, this proposal impacts wallet software that is compatible
with the Flow Ledger application, such as Flow Port.

## Related Issues

**Mapping public keys to addresses**

A Flow account address is not derived from a public key and is instead
assigned during an on-chain transaction. Flow supports a many-to-many relationship
between accounts and public keys; multiple public keys can be added to a single account, and the same public key can be added to multiple accounts. 
The Flow protocol maintains an index from `address => [publicKey]`, 
but there is currently no on-chain reverse mapping from `publicKey => [address]`.

Wallets that implement this FLIP must currently rely an off-chain mapping to 
facilitate user account discovery.

## Prior Art

This document outlines a specific application of the standard described by BIP 44.
This standard has been widely adopted by Bitcoin, Ethereum and many other 
cryptocurrency projects and communities.

## Questions and Discussion Topics

Should the index path parameter be used?
