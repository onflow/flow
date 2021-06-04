---
title: "[x] Keys and Accounts"
slug: "custody-accounts"
excerpt: "Understanding Keys and Accounts for Custody"
hidden: true
createdAt: "2020-04-27T17:35:36.484Z"
updatedAt: "2020-05-05T01:52:33.770Z"
---
Conceptually, it is important to distinguish between a node participating in the network and the account address . Until Epochs are introduced, there is no direct coupling needed between
1. a staked node with its operational keys:
   -  In Flow's beta Mainnet, the private operational keys for a node are managed by the node operator. 
2. and an account address to which rewards from operating a node are payed.:
   -  Flow keeps a user account on-file to which operational rewards are payed out to. 
[block:callout]
{
  "type": "info",
  "body": "Nodes' operational keys enforce authenticity and integrity of the nodes' protocol messages. A node's operational keys do *not* grant access to any funds, such as the stake."
}
[/block]

[block:api-header]
{
  "title": "Account Address to Manage (Operational) Funds"
}
[/block]
Addresses for receiving operational rewards and managing funds are conventional User Addresses.  The can be created in exactly the [same process](account-creation).

### FAQ


#### When will the Account Addresses for Custody Providers be created?

Dapper Labs will co-sign your account creation transaction. This should be possible right after network launch.  The determining factor here will simply be the degree of automation.  Node operator accounts being created on the order of a day after launch seems very reasonable to expect.

#### *I require a large number of accounts*
We are happy to create the accounts in bulk for you. The simplest option would be to initially grant account access to one public key. 
* This method has the advantage that you would receive a large list of pre-created account addresses which you can use or hand out later. 
* We would only require a *public ECDSA key* in the raw format (see [Key Format](doc:account-creation) for details).
* Using the [SDK](https://github.com/onflow/flow-go-sdk/), you can (on a per-account basis) add new keys to any of the accounts later and revoke access to any of the existing keys.