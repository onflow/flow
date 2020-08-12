---
title: Flow Concepts
description: Learn the concepts and vocabulary necessary to understand Flow
---

## Node Roles

Unlike most blockchains, not all Flow nodes are equal. Flow nodes all specialize and fulfill a specific role in the operation of the network.

<!-- [block:image]
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
[/block] -->

### Collection

Collection Nodes are bandwidth-optimized nodes divided by the protocol into several cooperating Clusters. Their first task is managing the transaction pool and collecting well-formed transactions to propose to Consensus Nodes. Transactions are assigned to a cluster pseudorandomly by transaction hash. A well-formed transaction must include credentials from the guarantor of the transaction. When a Collection Node sees a well-formed transaction, it hashes the text of that transaction and signs the transaction to indicate two things: first, that it is well-formed, and second, that it will commit to storing the transaction text until the Execution Nodes have finished processing it. Each cluster collects transactions, assembles them into Collections and submits a Collection Guarantee signed by a super-majority of the cluster to the Consensus Nodes.

### Consensus

Consensus Nodes form and propose blocks in a manner similar to traditionally-structured proof-of-stake blockchains, using the HotStuff consensus algorithm to create a globally consistent chain of blocks. Consensus Nodes are validating that the signed collection hashes submitted to them by Collection Nodes were, in fact, signed by the required majority of Collection Nodes. Thereafter, the Consensus Nodes assemble the transactions into blocks and finalize them through voting.
The more participants there are in this process, the more decentralized the network. However, consensus algorithms typically bottleneck the limit to the number of participants. The Flow protocol chose the HotStuff algorithm because it is flexible enough to add participants and currently supports about 100 operators. Adding participants above 100 to the protocol by adapting HotStuff will continue to be an area of active development.

These nodes act as a checkpoint against Collection Nodes because they are the group checking that a critical number of Collectors reviewed and signed for the transaction. This group is notably held accountable only by its fellow Consensus Nodes. A common concern with Proof of Work- and Proof of Stake-based systems it that a small subset of the population can control important resources such as the mining or stake needed to produce and vote on blocks, which is a degradation of the security of the system. By lowering the requirements to participate, Flow makes it extremely difficult and expensive to coordinate a Byzantine majority of consensus nodes.

This group of nodes has minimal bandwidth and computation requirements, allowing even a modest computing device (any consumer grade hardware) to participate in the voting process and ensure the safety of the network. Many networks claim open participation although substantial resources -- stake, computation, or otherwise -- are needed to partake. Maintaining such a threshold undermines the security of the network. Lowering the participation requirements preserves the coordination problem, which is central to providing a high degree of byzantine fault tolerance because it's exceedingly difficult for a subset of bad actors to subvert the network.

### Execution

Execution Nodes are the most resource-intensive nodes on the Flow network, responsible for executing transactions and maintaining the Execution State, a cryptographically-verifiable data store for all user accounts and smart contract states, as well as responding to queries related to it. Execution Nodes compute the outputs of the blocks they are provided. They then ask the Collection Nodes for the collections containing transactions that are to be executed. With this data they are able to compute the output, which is later verified by Verification Nodes to ensure honesty (allocation of Verification Nodes is via a sortition algorithm). The Execution Nodes are primarily responsible for Flow's improvements in scale and efficiency because only a very small number of these powerful compute resources are required to compute and store the historical state.

Execution Nodes give the Flow network its performance characteristics: highly scalable within a single shared state environment (i.e., no sharding). However, the significant hardware requirements make them the least accessible option for participation as a Validator. Because the revenue pool splits between relatively few nodes, the revenue per-node should more than compensate for the high capital costs of operating this node.

An Execution Node presents a hashed commitment once it has computed the output. The output is only revealed once its co-executors have also submitted their outputs. This is important to ensure nodes aren't spoofing each other's work. Once they've all submitted their answers, the output is revealed and subject to random queries and checks run by Verification Nodes. The Execution Nodes have relatively low byzantine fault tolerance. However, this does not compromise the overall security of the system because the process they perform is deterministic -- any bad actor will easily be detected and punished by Verification Nodes.

This relatively small group of nodes has the most substantial technical requirements for processor speed and bandwidth because they are tasked with all the computations necessary to determine the output of the network. Allowing for this degree of specialization can reduce computation costs by at least one thousand times, and possibly much more, when compared to Ethereum.

### Verification

Verification Nodes are responsible for confirming the correctness of the work done by Execution Nodes. Individual Verification Nodes only check a small amount of the total computation, but collectively they check every computation many times in parallel. Verification nodes verify Execution Receipts provided by Execution Nodes and issue Result Approvals. A sortition algorithm determines which chunks of the Execution Receipt from the Execution Nodes the Verification Node must query to check they were computed correctly. Ultimately, these nodes keep the Execution Nodes honest; this balance of power maintains the access, security, and verifiability criteria of decentralization. It is highly byzantine fault tolerant because even if there is a substantial number of byzantine errors in the Verification Node
pool, the Consensus Nodes are still required to approve the transactions they signed were reviewed by a critical amount of the network.

### Access

Access Nodes act as a proxy to the Flow network. The Access Node routes transactions to the correct Collector and routes state queries to available nodes (while likely caching state to answer queries in a timely manner in the future). Anyone can run an Access node - these nodes are not staked and are rather based on a reputation system. Dapps and user agents can submit their transactions to any Access node or run their own if they can't find a service provider they're happy with.

<!-- [block:callout]
{
"type": "info",
"title": "Resource Requirements",
"body": "See [Setting Up a Node](doc:setting-up-a-node) for the expected resource use of each node type"
}
[/block]-->

## Flow Transactions

### Transaction Journey

A Transaction is the smallest unit of computation performed by the Flow network. Each transaction includes a short script for updating the execution state (which can call methods defined in smart contracts) and includes one or more cryptographic signatures used to authenticate the authority of the submitter. A User Agent (often called “wallet software”) is responsible for forming transactions and transmitting them to Flow.

When a transaction is ready, a user agent submits the transaction to a collection node. The collection node validates the transaction and then shares it with other nodes inside the cluster. The cluster forms a collection containing the transaction, aggregates a set of signatures from a super majority of cluster members, and then forwards the collection guarantee to the consensus nodes. A collection guarantee contains a hash derived from the contents of all transactions, the cluster id which created the collection, the count of transactions in the collection, and the signatures of collection nodes committing to the collection. By signing a collection, a collection node is responsible to store and hold on to a collection and respond to queries. A collection node only receives a reward for the collections it signs.

Consensus nodes are responsible for forming blocks containing collection guarantees. Finalized blocks are transmitted to execution nodes who then contact the collector nodes that guaranteed each collection for the contents of those collections.

Upon receiving the content of all collections in a block, the execution nodes run the transactions referenced from that block and broadcast an Execution Receipt. The execution receipt includes a hashed commitment of the execution state resulting from correctly applying the state transitions specified in the complete transaction set for that block, plus cryptographic commitments to interim execution states at specific milestones through the block.

Consensus nodes include those execution receipts in new blocks; after a block containing an execution receipt is finalized, the verification nodes start checking the correctness of the individual parts of the execution work included in the block, by recreating the transition from one interim milestone to the next. The random beacon value from the block including the transaction receipt is used to seed a deterministic assignment algorithm. This algorithm randomly assigns a region of the computation between two milestones (a chunk) to a set of verification nodes. Every chunk is assigned a number of verifiers derived from the size of the verification pool and the number of chunks in the block (this analysis assumes 50 verifiers for each chunk, and 1,000 chunks in each block).

In order to verify a chunk, a verification node contacts an execution node for the input data (chunk data package) matching the appropriate milestone for their chunk from the execution receipt. If the verification node confirms that the transition from one milestone to the next is correct for that chunk it broadcasts a Result Approval to the consensus nodes; if it finds an error, it instead broadcasts a Faulty Computation Challenge (FCC).

If the consensus nodes receive sufficient result approvals for all chunks in an execution receipt, they will include a Result Seal for that receipt in the next new block. At least ⅔ of the validators assigned to each chunk must positively provide result approvals for a result to be sealed. If one or more chunks don’t receive enough result approvals for sealing after several blocks have passed, the consensus nodes trigger Full Check Mode for those chunks. In full check mode, all verification nodes are asked to check the chunks in question. Full check mode requires ⅔ of all validators to respond with result approvals to seal the result. Full check mode is also triggered if the execution nodes provide two or more different execution receipts for the same block.

When a result is sealed, the output of all corresponding transactions are finalized and the changes are not revertible.

## Slashing

Flow is a proof-of-stake system, which means holders of FLOW can earn inflationary rewards by staking their FLOW tokens to secure and operate the network. A node can participate in the Flow network by depositing a specific amount of stake (based on role types) thereby making a bonded pledge to participate in the Flow protocol during the upcoming epoch. (An epoch is a finite amount of time defined by the protocol, approximately one week, during which the nodes participate to run the protocol and are responsible for their operations.)

Flow nodes follow the procedures defined in the protocol (based on their role) in order to receive rewards. Any deviation (see Slashing Challenges below) from the protocol can result in decreased reward payments or punishments. Severe infractions, which undermine the safety of the network, can lead to “slashing”, where some or all of the staked tokens are confiscated from the offending node(s).

This reward and punishment structure is designed to guarantee the security of the protocol and optimize performance over time. This document outlines the most severe infractions against the protocol which result in some portion of a node’s stake being taken from them (“slashing conditions”). Enforcing these slashing conditions is critical to ensure the cryptoeconomic security of the protocol. Future documents will describe an incentive structure that encourages system-wide efficiency and speed, by providing bonuses to the most performant nodes and withholding payments to nodes that are unresponsive.

This document assumes a working understanding of the high-level architecture of the Flow blockchain. Readers who are new to Flow or those looking for a refresher are encouraged to read the Protocol Summary [here](https://docs.onflow.org/docs/node-roles).

### Slashing Conditions

Any violation of the Flow protocol that could result in staked tokens being seized from the offending nodes is called **Slashable Behaviour.** In order for the tokens to be seized, the data necessary to prove the occurrence of Slashable Behaviour must be combined with the data necessary to attribute the behaviour to the node(s) responsible into a **Slashing Witness**. (A reduction of rewards, e.g. due to lack of active participation, is not formally included in our definition of slashing.) The Flow protocol considers only server threats to safety and liveness to be slashable conditions and as such, there are no performance related slashing penalties. The one exception is in the case of missing Collections (see the section on MCC below), where a widespread failure to respond by a large number of nodes is presumed to be coordinated and therefore punishable with slashing.

Most Slashable Behaviour in Flow can be detected and attributed to the offender by a single honest node observing that behaviour. (In other words, one node can generate a Slashing Witness without coordinating with other nodes.) However, some Slashable Behaviour can only be detected and attributed by combining information from multiple nodes. In those situations, the node that first detects the potential infraction raises a **Slashing Challenge**. When a challenge is raised, other nodes are expected to provide additional information which can be combined with the original challenge into a definitive Slashing Witness that is used to adjudicate the challenge. Each type of Slashing Challenge depends on different information provided from a different subset of nodes, the details of which are provided below.

Flow adheres to a number of principles in the design of its slashing rules:

- Only Consensus Nodes can perform slashing, and only by following the BFT consensus mechanism defined in the protocol. As such, a super-majority of Consensus Nodes must inspect and confirm a Slashing Witness before any punishment is levied.

- All Slashing Witnesses are objectively decidable. Given the current protocol state (maintained by the Consensus Nodes) and a well-formed Slashing Witness, all non-Byzantine Consensus Nodes will deterministically come to the same conclusion as to which node or nodes should be slashed (if any) and the amount of stake to be seized.

- All Slashing Behaviour in Flow requires active malfeasance on the part of the offending node. In other words, a node will only be slashed if it takes an action against the rules of the protocol, and it will not be slashed if it fails to take an action prescribed by the protocol. (“If your machine is crashed, you won’t get slashed.”) The one exception is in the case of missing Collections (see the section on MCC below), where a widespread failure to respond by a large number of nodes is presumed to be coordinated and therefore punishable with slashing.

- Flow makes no attempt to detect and punish liveness failures within the protocol. A liveness failure across the network functionally slashes the stake of any participants excluded from participating in the reboot (since their stake is locked in a non-functional network). Community analysis can determine which nodes were responsible for the failure and exclude those Byzantine actors from the new instance.

- Any staked node of Flow can submit a Slashing Witness for any Slashable Behaviour, regardless of its role. (For example, a Collection Node could submit a Slashing Witness for an invalid execution receipt, even though the protocol doesn’t require Collection Nodes to verify execution receipts.)

- Submitting an invalid Slashing Witness is Slashable Behaviour. We treat the invalid Slashing Witness itself as the Slashing Witness for that case.

### Stages of Slashing

Transitioning to a rigorous staking protocol in which all slashable conditions are checked, enforced, and punished will take place over three phases. The Slashing Challenges section below outlines the various challenges which may be submitted against an offending node but these challenges will not be fully enforced until Phase 3 of the network.

#### Phase 1: Beta

- In the beta phase of the network, the expectation is that nodes are running error detection and logging but not submitting formal challenges. Any errors found may be submitted to the Flow team for additional testing and security improvements.

#### Phase 2: Testing Slashing Mechanics

- At this time the slashing mechanisms will be implemented and require testing. Formal challenges should be raised and the protocol will follow the complete, formal mechanics for arbitrating challenges and slashing perpetrators, but no real slashing will take place.

#### Phase 3: BFT

- By now, the network has been security-hardened and tested and valid challenges result in real slashing of the offending node.

### Slashing Challenges

#### 0. All Nodes

**Invalid Report Witness (IRW): **if any nodes report an invalid/inaccurate witness, an invalid report witness will be reported by the Consensus Nodes, and the node(s) reporting the witness get slashed.

#### 1. Collection Nodes

**1.1 Missing Collection Challenge (MCC): ** Collection nodes are responsible for storing collection content (all transactions) for any collection which they guarantee during the current epoch and the first 1000 blocks of the next epoch. During this time they have to respond to any collection request from staked execution, verification and Consensus Nodes and should respond in a timely manner (specific timeout). If an Execution Node or a Verification Node doesn't receive the response from any of the collection guarantors (Collection Nodes who signed a collection), they can raise a Missing Collection Challenge and broadcast it to the Consensus Nodes to evaluate.

**Adjudication: **Consensus nodes randomly contact some of the guarantors. if Collection Nodes don't respond, a portion of their stakes will be seized. if the amount of their stake goes to less than half, they will be fully slashed. Then the Consensus Nodes notify all the Execution Nodes to skip that collection. if any of the Collection Nodes respond, Consensus Nodes redirect the collection content to the Execution Nodes but will also set small penalties both for all the guarantors and that Execution Node (according to their revenue ratio).

**1.2 Invalid Collection Witness (ICW):** Collection nodes are responsible for responding to collection content queries by collection hash from any staked nodes. The collection hash is the hash of an ordered list of transaction hashes. If a collection content sent by the Collection Node turns out to be invalid, any staked node can report an Invalid Collection Witness. This includes cases where:

- the content is malformed or incomplete,
- there exists an invalid transaction inside the collection, or
- the collection hash doesn't match (inside collection guarantee).

**Adjudication:** Consensus nodes evaluate the content of the collection, if the collection is found invalid, the Collection Node who signed the content is slashed.

**1.3 Double Collection Proposal Witness (DCPW):** Collection nodes of a cluster run a mini consensus inside the cluster to decide on a collection, which requires collectors to propose the collection and aggregate votes from others. During the collection consensus, if a Collection Node proposes more than one proposal, any other Collection Node inside the cluster can report a Double Collection Proposal Witness (including both proposals).

**Adjudication: **Consensus nodes evaluate the content and signatures of these two proposals, and if the witness turns out to be valid, the Collection Node who proposed two collections will get slashed.

**1.4 Double Collection Voting Witness (DCVW):** Collection nodes of a cluster run a mini consensus inside the cluster to decide on a collection, which requires collectors to propose the collection and aggregate votes from others. During the collection consensus, if a Collection Node votes for more than one collection proposal with identical collection number and size, any other Collection Node inside the cluster can report a Double Collection Voting Witness (including both votes).

**Adjudication: **Consensus nodes evaluate the signatures of these two votes and evaluate them, and if the witness turns out to be valid, the Collection Node who voted two times will get slashed.

#### 2. Consensus Nodes

**2.1 Double Block Proposal Witness (DBPW):** Consensus nodes run the consensus (HotStuff algorithm) over blocks. During these consensus steps, if a Consensus Node proposes more than one variation of a block proposal, any other Consensus Node can report a Double Block Proposal Witness (including both proposals). This report will be broadcasted to all other Consensus Nodes.

**Adjudication: **Consensus nodes evaluate content and signatures of both proposals. If the witness turns out to be valid, the Consensus Node who submitted both proposals will get slashed.

**2.2 Double Block Voting Witness (DBVW): ** Consensus nodes run the consensus (HotStuff algorithm) over blocks. During the consensus steps, if a Consensus Node votes for more than one block proposal with the same height, any other Consensus Node can report a Double Block Voting Witness (including both votes). This report will be broadcasted to all other Consensus Nodes.

**Adjudication: **Consensus nodes evaluate content and signatures of both votes and If the witness turns out to be valid, the Consensus Node who submitted both votes will get slashed.

**2.3 Invalid Block Vote Witness (IBVW):** If a Consensus Node votes for an invalid block or the content of the vote itself is invalid (e.g. vote for non-existing block), any other Consensus Nodes can report an Invalid Block Vote Witness.

**Adjudication: **Consensus nodes evaluate the vote content and signature. If the witness turns out to be valid, the Consensus Node who submitted the faulty vote will get slashed.

**2.4 Invalid Block Proposal Witness (IBPW):** If a Consensus Node proposes an invalid block proposal (e.g. quorum certificate without 2/3 vote), any other Consensus Nodes can raise an Invalid Block Proposal Witness.

**Adjudication: **Consensus nodes evaluate the proposal content and signature, If the witness turns out to be valid, the Consensus Node who submitted the invalid proposal will get slashed.

**2.5 Invalid Block Witness (IBW):** If the block contents returned by any Consensus Node is invalid, any node can raise the Invalid Block Witness:

- It is malformed or incomplete
- It doesn't match the payload hash provided by the block header

**Adjudication: **Consensus nodes evaluate the block content and signatures. If the witness turns out to be valid, the Consensus Node who signed the block content will get slashed.

**2.6 Invalid Random Beacon Signature Witness (IRBSW):** If any participant of the random beacon returns an invalid signature, an Invalid Random Beacon Signature Witness can be reported by other Consensus Nodes.

**Adjudication:** Consensus nodes evaluate the random beacon signature. If the witness turns out to be valid, the Consensus Node who signed the invalid random beacon part will get slashed.

#### 3. Execution Nodes

**3.1 Faulty Computation Challenge (FCC): ** If any of the Verification Nodes find a fault in the execution of transactions by an Execution Node it can raise an FCC challenge. An FCC challenge includes a faulty chunk and all the evidence.

**Adjudication: **Consensus nodes evaluate the challenge, by sending requests for collection contents and chunk data needed to run the faulty chunk and comparing the results against the expected state commitment. If Consensus Nodes detect any fault in the execution of that chunk, the Execution Node(s) who signed the faulty execution receipts will get slashed. And if no fault is found, the Verification Node who raised the challenge will get slashed.

**3.2 Conflicting Execution Results Challenge (CERC): ** If two or more variations of execution results are reported by Execution Nodes for a given block. Since only one can be valid, Consensus Nodes raise a conflicting execution results challenge.

**Adjudication: **As soon as this challenge is raised, all the Verification Nodes goes into full check mode (checks all the chunks). The first execution result that receives result approval from at least 2/3 of Verification Nodes is the accurate one, and the other execution results will be considered faulty and Execution Nodes generating those will get slashed. If none of the execution results receive majority approval from Verification Nodes after a very long timeout, all the Consensus Nodes start executing chunks to determine the correct output.

**3.3 Invalid Chunk Data Package Witness (ICDPW):** If the contents of a chunk data package doesn't match the hash provided inside the execution result, or the contents is invalid, the Verification Nodes can report an Invalid Chunk Data Package Witness.

**Adjudication: **Consensus nodes evaluate the content of the chunk data package. If the witness turns out to be valid, the Execution Node(s) who signed the faulty chunk data package will get slashed.

**3.4 Missing Chunk Data Package Challenge (MCDPC):** If an Execution Node doesn't respond to the chunk data package request by any staked Verification Node, a Missing Chunk Data Package Challenge can be raised by the Verification Node.

**Adjudication: **When this challenge is received by the Consensus Nodes, they contact Execution Nodes and ask for the chunk data package. If none of the Execution Nodes respond after a long timeout, all of them get slashed. If any of the Execution Nodes responds with a valid chunk data package, Consensus Nodes redirect the chunk data package to the Verification Nodes but will also set small penalties both for all the Execution Nodes and the challenge raiser (Verification Node) according to their revenue ratio.

**3.5 Execution Results Timeout Challenge (ERTC):** If no execution receipt received in X number of blocks after the submission of each block, the liveness of the system is compromised and Consensus Nodes can raise an Execution Results Timeout Challenge for all the Execution Nodes.

**Adjudication: **When this challenge is received by the Consensus Nodes, they contact Execution Nodes and ask for an update. If none of the Execution Nodes respond after a long timeout, all of them get slashed. If any of the Execution Nodes return the execution receipt, the case is dismissed.

**3.6 Invalid Execution Receipt Witness (IERW):** If an Execution Node provides an execution receipt that is not valid, the Consensus Nodes can report an Invalid Execution Receipt Witness.

**Adjudication: **Consensus nodes evaluate the content of the execution receipt. If the witness turns out to be valid, the Execution Node(s) who signed the invalid execution receipt will get slashed.

**3.7 Non-Matching SPoCKs Challenge (NMSC): ** If the SPoCKs provided by the Execution Node don't match the ones provided by the Verification Node, the Consensus Nodes can raise a Non-Matching SPoCKs challenge.

**Adjudication: **Consensus nodes have to re-execute the chunk to be able to compute the accurate SPoCKs secret to be able to adjudicate the challenge. This requires requesting the collection and all other data needed for execution from other nodes. Any node which provided invalid SPoCKs will be slashed.

#### 4. Verification Nodes

**4.1 Non-Matching SPoCKs Challenge (NMSC):** If the SPoCKs provided by the Execution Node don't match the ones provided by the Verification Node, the Consensus Nodes can raise a Non-Matching SPoCKs challenge.

**Adjudication: **Consensus nodes have to re-execute the chunk to determine the accurate SPoCKs secret which is needed to adjudicate the challenge. This requires requesting the collection and all other data needed for execution from the other nodes. Any node which provided invalid SPoCKs will be slashed.

**4.2 Invalid Result Approval Witness (IRAW):** If a Verification Node provides an invalid result approval, the Consensus Nodes can report this witness. This includes cases that a Verification Node sends a result approval for a chunk that was not assigned to the Verification Node (excluding full check mode) or if the SPoCK’s signature doesn't match the public key of the Verification Node.

**Adjudication: **Consensus nodes evaluate the content and signatures of the result approval. If the witness turns out to be valid, the Verification Node who signed that result approval be slashed.
