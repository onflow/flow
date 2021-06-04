---
title: "Node's Network Identity"
slug: "nodes-network-identity"
excerpt: "The identity of a Staked Node from the view-point of the Flow Protocol"
hidden: true
createdAt: "2020-04-27T19:25:06.578Z"
updatedAt: "2020-05-05T00:42:49.220Z"
---
Conceptually, it is important to distinguish between a node participating in the network and the account address for managing funds related to the node's operation:

### The Protocol State
The state of a staked Flow node with its operational keys from the perspective of the protocol.
   - For each staked node in the network, the protocol state contains a node identity (discussed in detail below). Among other information, the node identity lists all public operational keys.  As explained in the [Node Operation Concepts](doc:node-keys), operational keys enforce authenticity and integrity of the nodes' protocol messages. A node's  **operational keys do *not* grant access to any funds**.
  - The private operational keys for a node are managed by the node operator.  

### The Execution State
The state which holds conventional user accounts, including the address for managing funds related to the nodes' operations (such as [staking and earning rewards](https://docs.onflow.org/docs/staking-rewards)).

From a protocol perspective, there is no direct coupling needed between the Protocol State and the Execution State. The execution state is managed by the Execution Nodes, while the Protocol State is governed directly by the consensus nodes. 


[block:api-header]
{
  "title": "Identity of a Staked Node"
}
[/block]
Each node in the network has a *Node Identity*. A table with the identities of all legitimate nodes is maintained by the consensus committee as part of the *Protocol State*. Updates to this Protocol State are published by consensus nodes as part of their blocks. 

From the perspective of the Flow protocol, the *Identity* of a node includes: 
* [Public Staking, Networking, and (optional) Random Beacon key](doc:node-keys)
* Current stake balance

As a node operator, you do not need to create a node Identity for your node. Instead, the network will create one for your node at genesis or when processing the initial staking transaction. 

The Protocol State also maps to a User Account Address for each node to ensure the automatic distribution of rewards to the account hoder.
[block:callout]
{
  "type": "danger",
  "body": "The current implementation is simplified and will be significantly updated with the introduction of Epochs. Currently, only partner nodes will be integrated into the network at genesis (see [bootstrapping](https://dash.readme.io/project/onflow/v0.3/docs/genesis-bootstrapping))",
  "title": "Nodes can only join at Genesis until introduction of Epochs"
}
[/block]
* Creating the Network Identity for your node will be happen during bootstrapping based on the public key and supplemental information you provide (see [Genesis Bootstrapping](https://dash.readme.io/project/onflow/v0.3/docs/genesis-bootstrapping) for details)