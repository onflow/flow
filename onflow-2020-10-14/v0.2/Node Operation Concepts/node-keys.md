---
title: "Node Keys"
slug: "node-keys"
excerpt: "Understanding the different keys that Node Operators will need"
hidden: true
createdAt: "2020-04-01T00:56:53.666Z"
updatedAt: "2020-04-07T15:18:42.466Z"
---
Flow Nodes need to manage several keys as part of the protocol. What nodes need them and what they do varies, so this page captures a very high level overview of their usage.
[block:api-header]
{
  "title": "Key Types"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Key",
    "h-1": "Algortihm",
    "0-0": "Staking Key",
    "h-2": "Needed By",
    "0-1": "BLS with curve BLS12381",
    "0-2": "All Nodes",
    "1-0": "Networking Key",
    "1-1": "ECDSA with curve secp256k1",
    "1-2": "All Nodes",
    "2-0": "Random Beacon Key",
    "2-1": "BLS threshold signature with curve BLS12381",
    "2-2": "Consensus Nodes*",
    "3-0": "Account Key",
    "3-2": "Users\nNot needed by Nodes",
    "3-1": "ECDSA with curves P-256 or secp256k1"
  },
  "cols": 3,
  "rows": 4
}
[/block]
## Staking Key
Your staking key is your node identifier, and maps the messages your node sends and commits to with your committed financial stake. 

Messages your node sends to the network are signed with this key, and if your messages are malicious or badly formed, it will identify your node and your stake may be slashed by the network.

If your staking key is compromised, an attacker can impersonate your node and result in your stake being slashed.

Staking keys are not tied to Flow Accounts, they can not own resources or authorize transactions in the execution environment. Block rewards and other funds do not get paid into the Staking Key's balance, nor can the Staking Key authorize withdrawal of stake during the first Epoch. Therefore Staking Keys can be said to control no funds and are not monetary targets.

## Networking Key
Your networking key is much like your staking key in that it's an identifier of your node to the network. The Networking Key operates at a lower protocol level, and controls and authorizes your access to the gossip message network that nodes use to communicate.

Messages of any type sent to the gossip network are signed with this key, including control messages and metadata messages. If your node sends malformed messages to the network, your networking key may be invalidated and your node will no longer be able to communicate with the rest of the network.

If your Networking key is compromised, an attacker may use it to send messages to the network, creating a denial of service. If this happens and your key is revoked, you will lose access to the network, and a prolonged disconnect may lead to your stake being slashed.

## Random Beacon Key 
This key is used as part of the Random Beacon protocol to generate a distributed randomness, and every block uses all the Random Beacon Keys on the network to create a fresh randomness. This key provides the source of entropy that allows Flow executions access to random numbers.

`*` Manual management of this key is only needed for genesis. In the future, a node will automatically get assigned a Random Beacon Key

## Account Key
An Account Key is not, strictly speaking, a node key. The consensus and network messaging components of Flow do not make use of Accounts or their keys. A node operator will need to have an account and associated key to pay block rewards into, but these keys do not need to be present on the node.

Accounts and Account Keys will be described in a later doc in more detail.