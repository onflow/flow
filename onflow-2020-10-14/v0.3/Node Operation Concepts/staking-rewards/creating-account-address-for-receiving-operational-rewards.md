---
title: "Accounts & Tokens on Day 1"
slug: "creating-account-address-for-receiving-operational-rewards"
excerpt: "How to create an account to receive your Flow tokens and rewards"
hidden: true
createdAt: "2020-04-27T21:13:06.602Z"
updatedAt: "2020-06-30T16:39:27.115Z"
---
Accounts for receiving Rewards are conventional user accounts. They can be created in exactly the same [account-creation process](account-creation). Whoever is putting up the tokens to stake the node will have the right to select which User-Account Address will receive rewards associated with that network identity. In regular time intervals, the accumulated rewards a node earns are deposited into the Account Address(es) associated with the specific node.
[block:callout]
{
  "type": "info",
  "title": "The Address for receiving rewards can be created/updated after network launch.",
  "body": "For the beta network, the node assignments will be static and so we can update the Address receiving rewards for a particular staked node after the fact."
}
[/block]
## FAQ

#### When will the User Accounts for Node Operators be created?*

  * Once the network is running, we'll issue a series of transactions to create accounts for all the partners who are running nodes and/or building on Flow. While the account-creation transactions will be co-signed by Dapper Labs for authorization and paying, your account will be fully owned and controlled by you immediately after creation. 
Creating accounts should be possible right after network launch but we certainly appreciate your patience as we roll everyone's accounts out.

#### What is the relationship between nodes and account addresses

* For the beta network, you assign a _single_ account address to receive the operational rewards for a Flow node. It is possible for the rewards from operating _multiple_ nodes to be deposited into the same account. Formally, we have a `N Nodes`-to-`Single Account` relationship, with `N ≥ 1`.
* If you would like to subsequently disburse the received rewards to accounts of multiple parties, you have the full expressiveness of the Cadence smart contract language at your disposal to define any rules which fit your business model. We are happy to support you and your team with implementing the desired contracts.