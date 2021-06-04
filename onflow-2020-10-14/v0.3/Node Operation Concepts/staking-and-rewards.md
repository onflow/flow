---
title: "[x] Staking and Rewards"
slug: "staking-and-rewards"
excerpt: "Earning Revenue and Securing the Network"
hidden: true
createdAt: "2020-04-02T19:40:33.797Z"
updatedAt: "2020-05-04T23:07:48.371Z"
---
[block:api-header]
{
  "title": "Staking In a Node"
}
[/block]
While the Flow network is in Beta, staking a node requires participation in the [Genesis Block](doc:genesis-bootstrapping). In order to stake on the protocol and participate as a node operator you'll need to 
[block:callout]
{
  "type": "danger",
  "title": "Unimplemented",
  "body": "You cannot stake a new node into the network in the current Epoch.\n\nThe following is a description of _roughly_ what the process _will be_, but it currently cannot be done. For you to stake a node, you must participate in the [Genesis Block](doc:genesis-bootstrapping)."
}
[/block]
To have a node participate in the network, you must lock some of your Flow tokens into Stake. These Flow Tokens must stored in an account before being staked. We will refer to this as the Staking Account, but it is simply a Flow account like any other.

When the Flow tokens are transferred into stake, they are "burned" and removed from the execution state. This means the tokens are no longer visible to any account and don't exist in any storage that you can interact with through transactions. The token balance becomes associated with a [Staking Key](doc:node-keys), and a Node using that key is staked for the equivalent balance that was removed from the account.

When a Node wishes to un-stake and cease participating in the network, the funds are unassociated with the Node's Staking Key, and reappear in the execution environment, deposited back into the Staking Account that they originally came from.
[block:api-header]
{
  "title": "Operational Rewards"
}
[/block]
A staked node earns Operational Rewards through participating in the network. 
[block:callout]
{
  "type": "danger",
  "title": "Temporary Measure",
  "body": "Operational rewards are not implemented at a low level in the protocol in the current Epoch.\n\nThe system described here is a temporary measure that will change once rewards become part of the protocol."
}
[/block]
If your Node is staked and is participating in the network, it is eligible to receive rewards for its effort.

Operational rewards are tracked for each [Network Identity](doc:nodes-network-identity) (independently of the stake). This mapping is also tracked in the execution state in the form of a Contract.  In regular time intervals, the accumulated rewards a node eared are deposited into the Account Addresses which the node Operator registered for this specific node. Tracking the node's network contributions and determining the resulting rewards is implemented on a smart-contract level, which can leverage the full expressiveness of the Cadence language. 

In future Epochs, the protocol itself will deal with paying these rewards directly to Account Addresses associated with each Node.
[block:api-header]
{
  "title": "Token Distribution Process at Network Initialization"
}
[/block]
### Genesis Process

Flow's genesis process is currently completely decoupled from the Flow protocol. The genesis information will be generated before network launch. It contains all data required for the Flow nodes to start with the protocol directly in the normal happy path.

As part of generating the genesis information, we construct the initial starting state for the Execution Nodes: the _genesis execution state_. The genesis execution state contains 
1. A single root account, for which Dapper Labs holds the private key:
   * The Flow Token Contract
   * A Vault holding 125M Flow Tokens 

(additional fields omitted for brevity)

### On-Chain Token Distribution
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