# Application of BIP 44 in Flow Wallets

| Status        | Accepted |
:-------------- |:---------|
| **FLIP #**    | [200](https://github.com/onflow/flow/pull/200) |
| **Author(s)** | Peter Siemens (peter@dapperlabs.com), Jeffery Doyle (jeffrey.doyle@dapperlabs.com) |
| **Sponsor**   | Peter Siemens (peter@dapperlabs.com) |
| **Updated**   | 2022-03-03 |

## Objective

This document aims to define a standard pattern for the application of [Bitcoin
Improvement Proposal
44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) (BIP 44) in
Flow-compatible hardware and software wallets.

## Motivation

This proposal was prompted by the recent development of the first Flow hardware
wallet application (Ledger) and its companion host software (FCL-Ledger-Web among
others).

In the near term, this proposal affects users of the Flow Ledger application. In
the long term, it affects Flow wallet developers and their users.

## User Benefit

By following this standard, developers of existing BIP 44 crypto wallets will be
able to reduce friction for users who wish to create accounts on Flow.

By standardizing BIP 44 usage across wallets, users should be able to use their
BIP 39 mnemonic codes across wallets to manage access to the same keys and accounts.

## Design Proposal

### Path Levels

BIP 44 defines an implementation of [Bitcoin Improvement Proposal
32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) (BIP 32)
that standardizes a format for hierarchical deterministic (HD) key derivation
paths that support multiple coins and multiple accounts per coin.

Flow accounts support keys on two different elliptic curves (secp256k1 and NIST P-256).
While BIP 32 describes the key derivation process for the secp256k1 curve, [SLIP-0010]
(https://github.com/satoshilabs/slips/blob/master/slip-0010.md) generalizes the derivation 
process to the NIST P-256 curve. In the rest of this document, BIP 44 is applicable for 
both elliptic curves. 

The BIP 44 path format is as follows:

```
m / purpose' / coin_type' / account' / change / address_index
```

When using this format to construct or discover a Flow user wallet, the value(s)
of each path parameter should follow the specifications below.

#### Purpose

Purpose is always the constant 44' (0x8000002C), as described in [BIP
44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#purpose).

#### Coin Type

Coin type is always the constant 539' (0x8000021b), the unique identifier for
the Flow protocol, as defined in [SatoshiLabs Improvement Proposal
44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) (SLIP 44).

#### Account

Account is the index of a distinct account address owned by the wallet user. No
two account indices should be used to generate child public keys that are
assigned to the same Flow account address. Furthermore, a single account index
should not be used to generate keys for more than one account address.

The motivation for these accounts is the same set forth in BIP 44:

> Users can use these accounts to organize the funds in the same fashion as bank
> accounts; for donation purposes (where all addresses are considered public),
> for saving purposes, for common expenses etc.

When generating a key pair to be added on a new account, use the smallest 
account index that has not already been used to generate keys for an existing account.

Unlike [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account),
new accounts should be able to be created even if previously created accounts
have no transaction history.

#### Change

Unlike Bitcoin, Flow does not utilize change addresses. Change is always the
constant 0.

#### Index

In BIP 44, each index generates a public key that is used to derive a unique
address for an account. Although Flow does not derive account addresses from
public keys, index can still be used to generate multiple public keys for a
single account.

When applying BIP 44 to Flow, each subsequent value for index should be used to
generate a new key pair for the same account, starting from 0 and incrementing
by 1.

This index should not be confused with the on-chain account key index. It must
not be assumed that this index will reflect the on-chain account key index for
any key.

When generating a new key pair for an account, the key index to use in the path to 
generate the new key should be the smallest unused key index available which 
has not yet been used to generate a key on the account.

### Legacy Path

There exist Flow accounts with keys assigned to them which have been generated
by wallets using the legacy path.

The legacy path has been previously used by FCL-Ledger-Web and is what has been used to
generate keys for Ledger Flow users. As far as we are aware, this is the only
application which has used the legacy path.

The legacy path is _deprecated_ by this FLIP, and should not be used to
generate new keys.

The legacy path is:

```
m / 44' / 1' / 769 / 0 / 0
```

All keys generated with the legacy path as of today (Dec 2021) have been done so using the
NIST P-256 elliptic curve.

### Account Discovery

Wallet developers should use a modified version of the original account
discovery procedure [described in BIP
44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account-discovery).

Modified constants from BIP 44 include:

The key index gap limit should be `5`.
The account index gap limit should be `2`.
(The key index gap limit and account index gap limit are flexible.
Developers should use their best judgement when choosing a key index gap limit
or account index gap limit.)

The prescribed account discovery procedure is as follows:

1. Derive the key pair using the legacy path and P-256 curve, 
   checking its use with the public key registry. If an address is found, 
   query the Flow network to fetch the account's details. If an account 
   is found, remember the relationship between the path used to generate 
   this key and the account's details.
2. Derive the key pair(s) (starting with account index = 0 and key index = 0) 
   using the path specified in this FLIP and each elliptic curve that
   both you and Flow support (Flow currently supports keys generated on the
   P-256 and secp256k1 curves).
   Note: If you are unable to derive keys for a certain elliptic curve, 
   you may fail to discover an account / key that the user has generated 
   previously.
3. Scan for each keys usage by querying the public key registry with the key and
   elliptic curve used to generate it.
   If the gap limit has been reached for both key index and account index, stop
   discovery.
    - 3.1. If no addresses are found in the registry
        - 3.1.1 If the key index gap limit has been reached without finding any
        addressed in the registry, then go to step 2, incrementing the account index
        by one and starting with key index = 0 again.
        - 3.1.2 If the key index gap limit has not been reached, go to step 2 and
        increment the key index by one.
    - 3.2. If one or more addresses are found, query the Flow network to fetch each
      account's details.
        - 3.2.1. If no accounts are found<sup>1</sup>, go to step 2, incrementing
        the account index by one.
        - 3.2.2. For each account found<sup>1</sup>, remember the relationship between the path
        used to generate this key, the curve used to generate this key,
        and the hash algorithm corresponding to this key and the account's details.
        Then go to step 2, incrementing the key index by one.

<sup>1</sup>Flow supports account deletion, meaning that an address found in the
registry may refer to a nonexistent account. In this case the address should be
skipped but discovery should continue.

#### Account Discovery Conflict Resolution

It is possible for a wallet to incorrectly apply the specifications in this FLIP
to generate keys.

Should this scenario occur, compliant wallets may be required to work around any
such previous incorrect usage.

##### Conflict Resolution: Incorrect Use of Account Index

If a wallet has used the account index field incorrectly to generate keys for a
user, conflict resolution logic may be required when attempting to generate new
keys.

When generating additional keys, the correct account index to use in the path to
generate the additional key should be:

- If adding a key to a new account:
  - The smallest account index which has not yet been used to generate keys
    set on any account.
- If adding a key to an existing account:
  - The largest account index that account discovery determines has been
    previously used to generate existing keys set on the account, which has also
    not been used incorrectly to generate keys set on another account.
  - Otherwise, the smallest account index which has not yet been used to
    generate keys set on any account.

##### Conflict Resolution: Incorrect Use of Key Index

When generating additional keys for an account, the correct key index to
use in the path to generate the new key should be the smallest unused key index
available which has not yet been used to generate a key on the account.

##### Conflict Resolution: Multiple Signature & Hashing Algorithms Used for Keys Generated Using the Same Path

The same derivation path should not be used with multiple combinations of signature and
hashing algorithms to generate keys set on an account.

The prescribed account discovery algorithm will find keys generated using
all combinations of derivation paths, supported signature algorithms and supported hashing
algorithms. However, wallets should not use the same path twice to apply
it to multiple signature and hashing algorithms to generate keys.

When generating a new key pair for an account, a new path, which has not yet been used in
combination with any signature or hashing algorithm to generate keys set on the account,
should be used.

### Drawbacks

#### Mapping Public Keys to Addresses

A Flow account address is not derived from a public key and is instead assigned
during an on-chain transaction. Flow supports a many-to-many relationship
between accounts and public keys; multiple public keys can be added to a single
account, and a single public key can be added to multiple accounts. 

The Flow protocol maintains an index from `address => [publicKey]`, but there is
currently no on-chain reverse mapping from `publicKey => [address]`.

Implementers of this standard will require a separate source of truth, the
public key registry, to return the associated user address for a given public
key. This requirement is mentioned in the [related issues](#related-issues)
section below.

#### Account Key Index Alignment

The Flow protocol assigns an index to each account key that is registered on
chain. When discussing this proposal, Flow contributors considered a variation
that would require the path index to always align with the on-chain index for
the corresponding account.

For example, a user may create an account from a seed phrase and generate public
keys at indices 0, 1 and 2. If added to the account in order, their on-chain
indices would also be 0, 1, 2, resulting in a clear mapping from each on-chain
key to its corresponding derivation path.

The authors of this proposal chose to omit this restriction after considering
that, in many cases, a user may add additional public keys from other sources,
thus breaking the perfect alignment between on-chain and key path indices. Even
without outside keys, it is still possible for keys to be added out of order.

Wallet developers or users should therefore not rely on the false assumption
that the path index of a public key always matches its on-chain account key
index, as doing so will cause confusion and errors.

#### Potential Misuse of BIP 44

One could argue that this is a misuse of the original BIP 44, BIP 43 and BIP 32
standards based on the fact that Flow does not derive addresses directly from
cryptographic public keys.

#### Overdependence on BIP 44

This proposal may also promote an overdependence on the BIP 44 standard,
especially for wallets that do not already implement it. In some cases it may be
better to use a new implementation or adaptation of BIP 32 that is better suited
to the Flow account model.

### Dependencies

* Dependent projects: Flow Ledger application, Flow Port, FCL-Ledger-Web

### Tutorials and Examples

TODO: add examples 

### Compatibility

This proposal does not change any existing APIs. The chosen path structure is
meant to maximize forward compatibility in a variety of use cases.

The convention proposed in this document is intended for use by any wallet that
supports the BIP 44 standard.

In particular, this proposal impacts wallet software that is compatible with the
Flow Ledger application, such as FCL-Ledger-Web.

## Related Issues

### Mapping Public Keys to Addresses

As mentioned in the [drawbacks](#drawbacks) section, this proposal necessitates
a public key registry that maps public keys to account addresses.

## Prior Art

This document outlines a specific application of the standard described by [BIP
44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki). This
standard has been widely adopted by Bitcoin, Ethereum and many other
cryptocurrency projects and communities.

[SLIP-0010](https://github.com/satoshilabs/slips/blob/master/slip-0010.md) 
is a document that generalizes the BIP 32 key derivation process
to other curves, in particular the NIST P-256 curve supported by Flow accounts.

[SLIP 48](https://github.com/satoshilabs/slips/blob/master/slip-0048.md)
describes an alternative to BIP 44 for Graphene-based networks which, similar to
Flow, do not derive account addresses directly from cryptographic public keys.

## Questions and Discussion Topics

Should the index path parameter be used?
