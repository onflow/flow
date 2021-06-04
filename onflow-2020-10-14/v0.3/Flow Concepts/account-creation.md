---
title: "User Acounts & Key Management"
slug: "account-creation"
excerpt: "Creating User Accounts on Flow"
hidden: true
createdAt: "2020-04-22T18:57:18.475Z"
updatedAt: "2020-06-29T21:56:47.507Z"
---
# Accounts
An account on Flow is a record in the chainstate that holds the following information:

  * Address - unique identifier for the account
  * Balance - default token balance
  * Public Keys - public keys authorized on the account
  * Code - Cadence contracts deployed to the account
  * Storage - area of the account used to store resource assets

Information on Generating Accounts can be found [here](https://github.com/onflow/flow/blob/master/docs/accounts-and-keys.md#accounts) 

### Accounts for Node Operators 
Node Operators assign a User-Account Address (associated with their [Account Key](https://docs.onflow.org/docs/node-keys)) to the Staking Key which is used to operate the node. 
[block:callout]
{
  "type": "info",
  "body": "Conceptually, the  account address and staking key are generated separately. In the future, when we support Epochs, where new nodes can join, a staking-request transaction will be sent to the network. This staking transaction will specify both the account address and staking key. \nHowever, for the beta network, we will start with only the staking keys and subsequently link the account address to each flow node. Rewards are credited for operating a node also if no account address for distributing the rewards has been assigned yet.",
  "title": ""
}
[/block]
### Accounts for Stake Holders 
Rewards are tracked for each [Network Identity](doc:nodes-network-identity) (independently of the stake). In regular time intervals, the accumulated rewards a node earned are deposited into the Account Address(es) which the node Operator registered for that specific node. 
[block:api-header]
{
  "title": "Creating an Account Address on Flow"
}
[/block]
Account Addresses for managing funds and signing transactions are created as follows:

1. The user (or user's agent)
   1. generates the private account key (off-chain)
   2. prepares a Cadence script to create their own account
2. Dapper Labs
    1. co-signs the account creation transaction (for authorization, and payment)
    2. submits the transaction to the network

Once the account creation transaction has been executed and the result sealed, the user can use their private key to authorize transactions through their account. 
[block:callout]
{
  "type": "info",
  "body": "At network launch, Dapper Labs will co-sign account creation transactions as both the payer and authorizer to manage both spam to the network and onboarding costs for you and your users."
}
[/block]

[block:api-header]
{
  "title": "Key Format"
}
[/block]
We are supporting ECDSA with the curves `P-256` and `secp256k1`. For these curves, the public key is encoded into 64 bytes as `X||Y` where `||` is the concatenation operator. 

 - `X` is 32 bytes and is the big endian byte encoding of the `x`-coordinate of the public key padded to 32, i.e. `X=x_31||x_30||...||x_0`  or `X =  x_31*256^31 + ... + x_i*256^i + ... + x_0`. 
 - `Y` is 32 bytes and is the big endian byte encoding of the `y`-coordinate of the public key padded to 32, i.e. `Y=y_31||y_30||...||y_0` or `Y =  y_31*256^31 + ... + y_i*256^i + ... + y_0`

[block:api-header]
{
  "title": "FAQ"
}
[/block]
#### Will I need to replace the key which my account is initially created with?
This question in motivated by account-creation processes on some platforms _other than Flow_, where the system defines an "initial password", which you have to change on your first login. Hence, people ask: "How does it work in Flow? Do I have to change the key my account is initially created with?"  

* When you create an account, you have to specify an initial public key. Anyone who possess the corresponding private key, will have full access to the created account. 
* Dapper only co-signs your account-creation transaction to authorize your transaction and pay for it. You only share the public account key in the account creation transaction which Dapper co-signs. The private portion of your account key stays in your hands and remains completely confidential. 
* Therefore, you do not have to replace the initial keys on an account.  Nevertheless, you have the ability at any time to add a new key to your account and revoke old key(s).

#### How do I acquire tokens on day 1? How do I get tokens to my users?
* On the very first day of your very first transaction, you'll be able to submit an account creation transaction to the network. Dapper Labs needs to co-sign this transaction with Account 0's private key (the root account of the Flow protocol) as the payer and authorizer of your account. This will instantiate your account with the necessary [account deposit](https://docs.onflow.org/docs/fees), provide the transaction fee needed for this transaction, and will also instantiate your account with a small balance of tokens to get you started sending your first transactions to the network. 
* Getting tokens to your users is the same process, request Flow Account 0 as the authorizer and payer. Please feel free to reach out to us directly if you'd like support pre-minting a larger batch of accounts for your users. 
* Giving your users tokens will require you to be in possession of some balance of FLOW that's already been minted by the protocol. You will receive rewards for participation in staking and these rewards will be liquid to share with your users. 

#### How do I get more than one account quickly? I have lots of users!
We are happy to create the accounts in bulk for you. The simplest option would be to initially grant account access to one public key. 
* This method has the advantage that you would receive a large list of pre-created account addresses which you can use or hand out later. 
* We would only require a *public ECDSA key* in the raw format (see [Key Format](doc:account-creation) for details).
* Using the [SDK](https://github.com/onflow/flow-go-sdk/), you can (on a per-account basis) add new keys to any of the accounts later and revoke access to any of the existing keys. Note that Dapper never has (or needs) access to your private keys, as they are generated locally on your machine and remain under your full custody.