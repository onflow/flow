---
title: "[x] Token Distribution Process at Network Initialization"
slug: "token-distribution-process-at-network-initialization"
hidden: true
createdAt: "2020-04-27T17:35:51.948Z"
updatedAt: "2020-05-05T01:52:53.652Z"
---
[block:api-header]
{
  "title": "Genesis Process"
}
[/block]
Flow's genesis process is currently completely decoupled from the Flow protocol. The genesis information will be generated before network launch. It contains all data required for the Flow nodes to start with the protocol directly in the normal happy path.

As part of generating the genesis information, we construct the initial starting state for the Execution Nodes: the _genesis execution state_. The genesis execution state contains 
1. A single root account, for which Dapper Labs holds the private key:
   * The Flow Token Contract
   * A Vault holding 125M Flow Tokens 

(additional fields omitted for brevity)
[block:api-header]
{
  "title": "On-Chain Token Distribution"
}
[/block]
At network launch, only the root account exist. As transactions must be authorized by a valid payer, the root account is required to sign the transactions for creating the first(s) account(s). 
* create accounts (incl. transferring initial tokens) for  
    * Dapper Labs
    * node operators
    * partners 
    * investors
    * ...

All these operations are executed by means of submitting conventional transactions to Flow. 

### TestNet
We will launch public TestNet(s) where we can test account creation and transferring tokens. 
* In general, we expect that account creation and token transfers will be generally (a little) slower on the TestNet compared to the MainNet.