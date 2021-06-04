---
title: "Node Keys"
slug: "node-keys"
excerpt: "Understanding the different keys that Node Operators will need"
hidden: true
createdAt: "2020-04-01T00:56:53.666Z"
updatedAt: "2020-07-30T19:43:28.232Z"
---
Flow Nodes need to manage several keys as part of the protocol; which nodes need them and what they do varies but this is a helpful overview.
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
### Staking Key
Your node uses its private staking key to sign every message it sends to the Flow network. The signature guarantees authenticity and integrity for each message. This allows to hold each node accountable for protocol compliant behaviour (or lack thereof) with its financial stake. If your messages are malicious or badly formed, other nodes can raise a slashing witness against your node which might result in your stake being slashed by the consensus nodes, if your node violated the protocol.

If your staking key is compromised, an attacker can impersonate your node and result in your stake being slashed.

Staking keys are not tied to Flow Accounts, they can not own resources or authorize transactions in the execution environment. Block rewards and other funds do not get paid into the Staking Key's balance, nor can the Staking Key authorize withdrawal of stake during the first Epoch. Therefore Staking Keys can be said to control no funds and are not monetary targets.

### Networking Key
Your networking key is much like your staking key in that it's an identifier of your node to the network. The Networking Key operates at a lower protocol level, and controls and authorizes your access to the [network communication layer](https://libp2p.io/).

Messages of any type sent to the communication layer are signed with this key, including control messages and metadata messages. If your node sends malformed messages to the network, your networking key may be blocked by other nodes and your node will no longer be able to communicate with the rest of the network.

If your Networking key is compromised, an attacker may use it to send messages to the network, creating a denial of service. If this happens and your key is blocked, you will lose access to the network, and a prolonged disconnect may lead to your stake being slashed. 

### Random Beacon Key 
This key is used as part of the Random Beacon distributed protocol for generating verifiable yet unpredictable randomness for every block. A majority of *more than 50%* of the Random Beacon keys must sign a block in order to reconstruct the block's source of randomness through a threshold signature algorithm. 

`*` Manual management of this key is only needed for genesis. In the future, consensus nodes will automatically generate their random Random Beacon Keys in a joint, interactive protocol before the new Epoch starts.

### Account Key
An Account Key is not, strictly speaking, a node key. The consensus and network messaging components of Flow do not make use of Accounts or their keys. A node operator will need to have an account and associated key to receive block rewards, but these keys do not need to be present on the node.

Accounts and Account Keys will be described in a later doc in more detail. 
[block:api-header]
{
  "title": "Operational Keys for Staked Nodes"
}
[/block]
For performance reasons, a node's *private* operational keys (Staking Key, Networking Key and (optionally) Random Beacon Key) must be *locally* available for signing. In the current node implementation, keys are held in memory. However, it is straight forward to delegate the signing functionality to a secure hardware, provided it supports the necessary operations for BLS and ECDSA. 
[block:callout]
{
  "type": "info",
  "body": "Nodes' operational keys enforce authenticity and integrity of the nodes' protocol messages. A node's operational keys do *not* grant access to any funds, such as the stake."
}
[/block]
Currently, a node loads its private operational keys from file descriptor at boot-up. A directory with all the private keys can be mounted on boot-up from a secure source into the node's machine. How they manage the private keys for their nodes is the choice of the node operators.