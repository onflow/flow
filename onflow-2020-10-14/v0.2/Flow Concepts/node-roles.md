---
title: "Node Roles"
slug: "node-roles"
excerpt: "Understanding the different Node types and what they're responsible for."
hidden: true
createdAt: "2020-03-31T20:56:37.345Z"
updatedAt: "2020-04-07T15:23:36.207Z"
---
Unlike most blockchains, not all Flow nodes are equal. Flow nodes all specialize and fulfill a specific role in the operation of the network.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cd9a005-flow-diagram.gif",
        "flow-diagram.gif",
        900,
        900,
        "#f8f4f1"
      ],
      "caption": "",
      "sizing": "smart"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Node Roles"
}
[/block]
## Collection

Collection Nodes are bandwidth-optimized nodes divided by the protocol into several cooperating Clusters. Their first task is managing the transaction pool and collecting well-formed transactions to propose to Consensus Nodes. Transactions are assigned to a cluster pseudorandomly by transaction hash. A well-formed transaction must include credentials from the guarantor of the transaction. When a Collection Node sees a well-formed transaction, it hashes the text of that transaction and signs the transaction to indicate two things: first, that it is well-formed, and second, that it will commit to storing the transaction text until the Execution Nodes have finished processing it. Each cluster collects transactions, assembles them into Collections and submits a Collection Guarantee signed by a super-majority of the cluster to the Consensus Nodes. 

## Consensus

Consensus Nodes form and propose blocks in a manner similar to traditionally-structured proof-of-stake blockchains, using the HotStuff consensus algorithm to create a globally consistent chain of blocks. Consensus Nodes are validating that the signed collection hashes submitted to them by Collection Nodes were, in fact, signed by the required majority of Collection Nodes. Thereafter, the Consensus Nodes assemble the transactions into blocks and finalize them through voting. 
The more participants there are in this process, the more decentralized the network. However, consensus algorithms typically bottleneck the limit to the number of participants. The Flow protocol chose the HotStuff algorithm because it is flexible enough to add participants and currently supports about 100 operators. Adding participants above 100 to the protocol by adapting HotStuff will continue to be an area of active development. 

These nodes act as a checkpoint against Collection Nodes because they are the group checking that a critical number of Collectors reviewed and signed for the transaction. This group is notably held accountable only by its fellow Consensus Nodes. A common concern with Proof of Work- and Proof of Stake-based systems it that a small subset of the population can control important resources such as the mining or stake needed to produce and vote on blocks, which is a degradation of the security of the system. By lowering the requirements to participate, Flow makes it extremely difficult and expensive to coordinate a Byzantine majority of consensus nodes. 

This group of nodes has minimal bandwidth and computation requirements, allowing even a modest computing device, such as a smartphone, to participate in the voting process and ensure the safety of the network. Many networks claim open participation although substantial resources -- stake, computation, or otherwise -- are needed to partake. Maintaining such a threshold undermines the security of the network. Lowering the participation requirements preserves the coordination problem, which is central to providing a high degree of byzantine fault tolerance because it's exceedingly difficult for a subset of bad actors to subvert the network.

## Execution
Execution Nodes are the most resource-intensive nodes on the Flow network, responsible for executing transactions and maintaining the Execution State, a cryptographically-verifiable data store for all user accounts and smart contract states, as well as responding to queries related to it. Execution Nodes compute the outputs of the blocks they are provided. They then ask the Collection Nodes for the collections containing transactions that are to be executed. With this data they are able to compute the output, which is later verified by Verification Nodes to ensure honesty (allocation of Verification Nodes is via a sortition algorithm). The Execution Nodes are primarily responsible for Flow's improvements in scale and efficiency because only a very small number of these powerful compute resources are required to compute and store the historical state.

Execution Nodes give the Flow network its performance characteristics: highly scalable within a single shared state environment (i.e., no sharding). However, the significant hardware requirements make them the least accessible option for participation as a Validator. Because the revenue pool splits between relatively few nodes, the revenue per-node should more than compensate for the high capital costs of operating this node. 

An Execution Node presents a hashed commitment once it has computed the output. The output is only revealed once its co-executors have also submitted their outputs. This is important to ensure nodes aren't spoofing each other's work. Once they've all submitted their answers, the output is revealed and subject to random queries and checks run by Verification Nodes. The Execution Nodes have relatively low byzantine fault tolerance. However, this does not compromise the overall security of the system because the process they perform is deterministic -- any bad actor will easily be detected and punished by Verification Nodes.

This relatively small group of nodes has the most substantial technical requirements for processor speed and bandwidth because they are tasked with all the computations necessary to determine the output of the network. Allowing for this degree of specialization can reduce computation costs by at least one thousand times, and possibly much more, when compared to Ethereum.

## Verification

Verification Nodes are responsible for confirming the correctness of the work done by Execution Nodes. Individual Verification Nodes only check a small amount of the total computation, but collectively they check every computation many times in parallel. Verification nodes verify Execution Receipts provided by Execution Nodes and issue Result Approvals. A sortition algorithm determines which chunks of the Execution Receipt from the Execution Nodes the Verification Node must query to check they were computed correctly. Ultimately, these nodes keep the Execution Nodes honest; this balance of power maintains the access, security, and verifiability criteria of decentralization. It is highly byzantine fault tolerant because even if there is a substantial number of byzantine errors in the Verification Node
pool, the Consensus Nodes are still required to approve the transactions they signed were reviewed by a critical amount of the network.

## Access
Access Nodes act as a proxy to the Flow network. The Access Node routes transactions to the correct Collector and routes state queries to available nodes (while likely caching state to answer queries in a timely manner in the future). Anyone can run an Access node - these nodes are not staked and are rather based on a reputation system. Dapps and user agents can submit their transactions to any Access node or run their own if they can't find a service provider they're happy with. 
[block:api-header]
{
  "title": "Resource Requirements"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Node Type",
    "h-1": "CPU",
    "h-2": "Memory",
    "h-3": "Disk",
    "h-4": "Disk",
    "0-0": "Collector",
    "1-0": "Consensus",
    "2-0": "Execution",
    "3-0": "Verification",
    "4-0": "Access",
    "0-1": "4 cores",
    "0-3": "200 GiB",
    "1-1": "4 cores",
    "2-1": "8 cores",
    "3-1": "8 cores",
    "4-1": "2 cores",
    "2-3": "5 TiB",
    "3-3": "100 GiB",
    "4-3": "200 GiB",
    "1-3": "100 GiB",
    "0-2": "15 GiB",
    "1-2": "15 GiB",
    "2-2": "32 GiB",
    "3-2": "30 GiB",
    "4-2": "8 GiB"
  },
  "cols": 4,
  "rows": 5
}
[/block]