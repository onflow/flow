---
title: Accounts, Keys & Signing
---

Flow introduces new features to give applications and end users more safety and flexibility when managing keys, accounts and the assets inside them.

## Accounts

An account on Flow is a record in the chain state that holds the following information:

- **Address** - unique identifier for the account
- **Balance** - default token balance
- **Public Keys** - public keys authorized on the account
- **Code** - Cadence contracts deployed to the account
- **Storage** - area of the account used to store resource assets

### Account Creation

Unlike Bitcoin and Ethereum, Flow addresses are not derived from cryptographic
public keys. Instead, each Flow address is assigned by an on-chain function
that follows a deterministic addressing sequence.

This decoupling allows for multiple public keys to be associated with one account,
or for a single public key to be used across several accounts.

Users must submit an _account creation transaction_ to create a new account. These transactions behave like any other transaction, and therefore must have a payer.

> Who will pay to create my account?

Account creation fees are relatively low, and we expect that wallet providers and exchanges will cover the cost when a user converts fiat to crypto for the first time.

Conceptually, this isn't much different than other chains. On Bitcoin and Ethereum, it's possible to reserve an account address offline, but the account isn't visible to the network until somebody submits (and pays for) a transaction to that address.

> What does an account creation transaction look like?

Here's an example of how to submit an account creation transaction with the Go SDK: [Account Creation Example](https://github.com/onflow/flow-go-sdk/blob/master/examples/create_account/main.go).

> What about smart contracts?

Ethereum draws a distinction between accounts and contracts, both of which are addressable. Ethereum contracts are immutable and cannot be upgraded after deployment.

To achieve the same in Flow, create an account with deployed code and an empty list of authorized keys. This renders the account immutable by making it impossible to authorize a transaction that would mutate the account code.

### Account Addresses

_Documentation coming soon..._

## Keys

Flow accounts can be configured with multiple public keys that are used to control access. Owners of the associated private keys can sign transactions to mutate the account's state.

### Adding a Key to an Account

When adding a public key to an account, you must specify the following information:

- ID (used to identify key within an account)
- Raw public key (encoded as bytes)
- Signature algorithm (see codes below)
- Hash algorithm (see codes below)
- Weight (integer between 1-1000)

The signature algorithm is included because Flow has the potential to support a variety of signatures schemes with different parameters. The included hashing algorithm specifies the hashing function used to verify signatures.

> How are keys added to an account?

To add keys to an account, you can submit a transaction that is authorized to access that account.

Here's an example of how to add an account key with the Go SDK: [Add Account Key Example](https://github.com/onflow/flow-go-sdk/blob/master/examples/add_account_key/main.go).

### Revoking a Key From an Account

Feature and documentation coming soon...

### Supported Signature & Hash Algorithms

Flow will have initial support for a predefined set of signature and hash pairings, but more curves and algorithms will be added in the future.

**Signature Algorithms**

| Algorithm | Curve     | ID              | Code |
| --------- | --------- | --------------- | ---- |
| ECDSA     | P-256     | ECDSA_P256      | 2    |
| ECDSA     | secp256k1 | ECDSA_secp256k1 | 3    |

*Please note that the codes listed here are for the signature algorithms as used by the node API, and they are different from the ones [defined in Cadence](https://docs.onflow.org/cadence/language/crypto/#signing-algorithms)*

There are two curves commonly used with the ECDSA algorithm, secp256r1 ([OID 1.2.840.10045.3.1.7](http://oid-info.com/get/1.2.840.10045.3.1.7), also called the "NIST P-256." curve), and secp256k1 ([OID 1.3.132.0.10](http://oid-info.com/get/1.3.132.0.10), the curve used by "Bitcoin"). Please be sure to double-check which parameters you are using before registering a key, as presenting a key using one of the curves under the code and format of the other will generate an error.


**Hash Algorithms**

| Algorithm | Output Size | ID       | Code |
| --------- | ----------- | -------- | ---- |
| SHA-2     | 256         | SHA2_256 | 1    |
| SHA-3     | 256         | SHA3_256 | 3    |

**Compatibility Table**

|                 | SHA2_256 | SHA3_256 |
| --------------- | -------- | -------- |
| ECDSA_P256      | ✅       | ✅       |
| ECDSA_secp256k1 | ✅       | ✅       |

### Weighted Keys

Each account key has a weight that determines the signing power it holds. A transaction is not authorized to access an account unless it has a total signature weight greater than or equal to `1000`, the weight threshold.

For example, an account might contain the following keys:

- Key ID: 1, Weight: 500
- Key ID: 2, Weight: 500
- Key ID: 3, Weight: 500

This represents a 2-of-3 multisig quorum, in which a transaction is authorized to access the account if it receives signatures from _at least_ 2 out of 3 keys.

## Signing a Transaction

Signing a transaction for Flow is a multi-step process that can involve one or more accounts, each of which signs for a different purpose.

### Signer Roles

- _Proposer:_ the account that specifies a [proposal key](#proposal-key).
- _Payer:_ the account paying for the transaction fees.
- _Authorizers:_ zero or more accounts authorizing the transaction to mutate their state.

### Proposal Key

Each transaction must declare a proposal key, which can be an account key from any Flow account. The account that owns the proposal key is referred to as the proposer.

A proposal key definition declares the address, key ID, and up-to-date sequence number for the account key.

```javascript
{
  // other transaction fields
  // ...
  "proposalKey": {
    "address": "0x01",
    "keyId": 7,
    "sequenceNumber": 42
  }
}
```

### Sequence Numbers

Flow uses sequence numbers to ensure that each transaction runs at most once. This prevents many unwanted situations such as [transaction replay attacks](https://en.wikipedia.org/wiki/Replay_attack).

Sequence numbers work similarly to transaction nonces in Ethereum, but with several key differences:

- **Each key in an account has a dedicated sequence number** associated with it. Unlike Ethereum, there is no sequence number for the entire account.
- When creating a transaction, only the **proposer must specify a sequence number**. Payers and authorizers are not required to.

The transaction proposer is only required to specify a sequence number for a single account key, even it if signs with multiple keys. This key is referred to as the _proposal key_.

Each time an account key is used as a proposal key, its sequence number is incremented by 1. The sequence number is updated after execution, even if the transaction fails (reverts) during execution.

A transaction is rejected if its proposal key does not specify a sequence number equal to the sequence number stored on the account _at execution time._

**Example**

After the below transaction is executed, the sequence number for `Key 7` on `Account 0x01` will increase to 43.

```javascript
{
  // other transaction fields
  // ...
  "proposalKey": {
    "address": "0x01",
    "keyId": 7,
    "sequenceNumber": 42
  },
  "payer": "0x02",
  "authorizers": [ "0x01" ],
}
```

### Anatomy of a Transaction

Due to the existence of weighted keys and split signing roles, Flow transactions sometimes need to be signed multiple times by one or more parties. That is, multiple unique signatures may be needed to authorize a single transaction.

A transaction can contain two types of signatures: payload signatures and envelope signatures.

![Transaction Anatomy](transaction-anatomy.png)

#### Payload

The transaction _payload_ is the innermost portion of a transaction and contains the data that uniquely identifies the operations applied by the transaction. In Flow, two transactions with the same payload will never be executed more than once.

The transaction _proposer_ and _authorizer_ are only required to sign the transaction payload. These signatures are the **payload signatures**.

#### Authorization Envelope

The transaction _authorization envelope_ contains both the transaction payload and the payload signatures.

The transaction _payer_ is required to sign the authorization envelope. These signatures are the **envelope signatures**.

> ❗ Special case: if an account is both the _payer_ and either a _proposer_ or _authorizer_, it is only required to sign the envelope.

#### Payment Envelope

The outermost portion of the transaction, which contains the payload and envelope signatures, is referred to as the _payment envelope_.

#### Payer Signs Last

The payer must sign the portion of the transaction that contains the payload signatures, which means that the payer must always sign last. This allows the payer to ensure that they are signing a valid transaction with all of the required payload signatures.

#### Signature Structure

A transaction signature is a composite structure containing three fields:

- Address
- Key ID
- Signature Data

The _address_ and _key ID_ fields declare the account key that generated the signature, which is required in order to verify the signature against the correct public key.

### Common Signing Scenarios

Below are several scenarios in which different signature combinations are required to authorize a transaction.

#### Single party, single signature

The simplest Flow transaction declares a single account as the proposer, payer and authorizer. In this case, the account can sign the transaction with a single signature.

Since the proposal key must always have a valid signature, this scenario is only possible if the proposal key has full signing weight.

| Account | Key ID | Weight |
| ------- | ------ | ------ |
| `0x01`  | 1      | 1000   |

```javascript
{
  "payload": {
    "proposalKey": {
      "address": "0x01",
      "keyId": 1,
      "sequenceNumber": 42
    },
    "payer": "0x01",
    "authorizers": [ "0x01" ]
  },
  "payloadSignatures": [], // 0x01 is the payer, so only needs to sign envelope
  "envelopeSignatures": [
    {
      "address": "0x01",
      "keyId": 1,
      "sig": "0xabc123"
    }
  ]
}
```

#### Single party, multiple signatures

A transaction that declares a single account as the proposer, payer and authorizer may still specify multiple signatures if the account uses weighted keys to achieve multi-sig functionality.

| Account | Key ID | Weight |
| ------- | ------ | ------ |
| `0x01`  | 1      | 500    |
| `0x01`  | 2      | 500    |

```javascript
{
  "payload": {
    "proposalKey": {
      "address": "0x01",
      "keyId": 1,
      "sequenceNumber": 42
    },
    "payer": "0x01",
    "authorizers": [ "0x01" ]
  },
  "payloadSignatures": [], // 0x01 is the payer, so only needs to sign envelope
  "envelopeSignatures": [
    {
      "address": "0x01",
      "keyId": 1,
      "sig": "0xabc123"
    },
    {
      "address": "0x01",
      "keyId": 2,
      "sig": "0xdef456"
    }
  ]
}
```

#### Multiple parties

A transaction that declares different accounts for each signing role will require at least one signature from each account.

| Account | Key ID | Weight |
| ------- | ------ | ------ |
| `0x01`  | 1      | 1000   |
| `0x02`  | 1      | 1000   |

```javascript
{
  "payload": {
    "proposalKey": {
      "address": "0x01",
      "keyId": 1,
      "sequenceNumber": 42
    },
    "payer": "0x02",
    "authorizers": [ "0x01" ]
  },
  "payloadSignatures": [
    {
      "address": "0x01", // 0x01 is not payer, so only signs payload
      "keyId": 1,
      "sig": "0xabc123"
    }
  ],
  "envelopeSignatures": [
    {
      "address": "0x02",
      "keyId": 1,
      "sig": "0xdef456"
    },
  ]
}
```

#### Multiple parties, multiple signatures

A transaction that declares different accounts for each signing role may require more than one signature per account if those accounts use weighted keys to achieve multi-sig functionality.

| Account | Key ID | Weight |
| ------- | ------ | ------ |
| `0x01`  | 1      | 500    |
| `0x01`  | 2      | 500    |
| `0x02`  | 1      | 500    |
| `0x02`  | 2      | 500    |

```javascript
{
  "payload": {
    "proposalKey": {
      "address": "0x01",
      "keyId": 1,
      "sequenceNumber": 42
    },
    "payer": "0x02",
    "authorizers": [ "0x01" ]
  },
  "payloadSignatures": [
    {
      "address": "0x01", // 0x01 is not payer, so only signs payload
      "keyId": 1,
      "sig": "0xabc123"
    },
        {
      "address": "0x01", // 0x01 is not payer, so only signs payload
      "keyId": 2,
      "sig": "0x123abc"
    }
  ],
  "envelopeSignatures": [
    {
      "address": "0x02",
      "keyId": 1,
      "sig": "0xdef456"
    },
    {
      "address": "0x02",
      "keyId": 2,
      "sig": "0x456def"
    },
  ]
}
```
