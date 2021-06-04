---
title: "Staking and Rewards"
slug: "staking-and-rewards"
excerpt: "Earning Revenue and Securing the Network"
hidden: true
createdAt: "2020-04-02T19:40:33.797Z"
updatedAt: "2020-04-02T22:30:01.018Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Early Epoch",
  "body": "In the first Flow epoch there are many details around staking and rewards that are unimplemented in the protocol, and either not available or are running temporary solutions. These will be marked as such, and will definitely change in later epochs."
}
[/block]

[block:api-header]
{
  "title": "Staking In a Node"
}
[/block]

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
  "title": "Block Rewards"
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Temporary Measure",
  "body": "Block rewards are not implemented at a low level in the protocol in the current Epoch.\n\nThe system described here is a temporary measure that will change once rewards become part of the protocol."
}
[/block]
If your Node is staked and is participating in the network, it is eligible to receive rewards for its effort.

The protocol tracks all Node ID's and their associated Staking Keys, along with how much stake has been committed by the nodes, and the Staking Account that put in the funds. This mapping is also tracked in the execution state in the form of a Contract. Block rewards will be payed to this contract, which will forward reward to the Staking Account associated with the Node.

In future Epochs, the protocol itself will deal with paying these rewards directly into the Staking Accounts associated with each Node.