---
title: "Slashing Conditions"
slug: "slashing-conditions"
excerpt: "How and when Nodes may be penalized by the network"
hidden: true
createdAt: "2020-04-06T21:46:08.366Z"
updatedAt: "2020-04-10T19:04:59.134Z"
---
# Introduction
Flow is a proof-of-stake system, which means holders of FLOW can earn revenue by staking their FLOW tokens to secure and operate the network. A node can participate in the Flow network by depositing a specific amount of stake (based on role types) thereby making a bonded pledge to follow the Flow protocol during the upcoming epoch. (An epoch is a finite amount of time defined by the protocol, approximately one week, during which the nodes participate to run the protocol and are responsible for their operations.)

Flow nodes follow the procedures defined in the protocol (based on their role) in order to receive rewards. Any deviation from the protocol can result in decreased reward payments or punishments. Severe infractions, which undermine the safety of the network, can lead to “slashing”, where some or all of the staked tokens are confiscated from the offending node(s). 

This reward and punishment structure is designed to guarantee the security of the protocol and optimize performance over time. This document outlines the most severe infractions against the protocol which result in some portion of a node’s stake being taken from them (“slashing conditions”). Enforcing these slashing conditions is critical to ensure the cryptoeconomic security of the protocol. Future documents will describe an incentive structure that encourages system-wide efficiency and speed, by providing bonuses to the most performant nodes and withholding payments to nodes that are unresponsive.

This document assumes a working understanding of the high-level architecture of the Flow blockchain. Readers who are new to Flow or those looking for a refresher are encouraged to read the Protocol Summary provided as Appendix A at the end of this document before continuing.

# Slashing Conditions
 
Any violation of the Flow protocol that could result in staked tokens being seized from the offending nodes is called **Slashable Behaviour.** In order for the tokens to be seized, the data necessary to prove the occurrence of Slashable Behaviour must be combined with the data necessary to attribute the behaviour to the node(s) responsible into a **Slashing Witness**. (A reduction of rewards, e.g. due to lack of active participation, is not formally included in our definition of slashing.)

Most Slashable Behaviour in Flow can be detected and attributed to the offender by a single honest node observing that behaviour. (In other words, one node can generate a Slashing Witness without coordinating with other nodes.) However, some Slashable Behaviour can only be detected and attributed by combining information from multiple nodes. In those situations, the node that first detects the potential infraction raises a **Slashing Challenge**. When a challenge is raised, other nodes are expected to provide additional information which can be combined with the original challenge into a definitive Slashing Witness that is used to adjudicate the challenge. Each type of Slashing Challenge depends on different information provided from a different subset of nodes, the details of which are provided below.

Flow adheres to a number of principles in the design of its slashing rules:

* Only Consensus Nodes can perform slashing, and only by following the BFT consensus mechanism defined in the protocol. As such, a super-majority of Consensus Nodes must inspect and confirm a Slashing Witness before any punishment is levied.

* All Slashing Witnesses are objectively decidable. Given the current protocol state (maintained by the Consensus Nodes) and a well-formed Slashing Witness, all non-Byzantine Consensus Nodes will deterministically come to the same conclusion as to which node or nodes should be slashed (if any) and the amount of stake to be seized.

* All Slashing Behaviour in Flow requires active malfeasance on the part of the offending node. In other words, a node will only be slashed if it takes an action against the rules of the protocol, and it will not be slashed if it fails to take an action prescribed by the protocol. (“If your machine is crashed, you won’t get slashed.”) The one exception is in the case of missing Collections (see the section on MCC below), where a widespread failure to respond by a large number of nodes is presumed to be coordinated and therefore punishable with slashing.

* Flow makes no attempt to detect and punish liveness failures within the protocol. A liveness failure across the network functionally slashes the stake of any participants excluded from participating in the reboot (since their stake is locked in a non-functional network). Community analysis can determine which nodes were responsible for the failure and exclude those Byzantine actors from the new instance.

* Any staked node of Flow can submit a Slashing Witness for any Slashable Behaviour, regardless of its role. (For example, a Collection Node could submit a Slashing Witness for an invalid execution receipt, even though the protocol doesn’t require Collection Nodes to verify execution receipts.)

* Submitting an invalid Slashing Witness is Slashable Behaviour. We treat the invalid Slashing Witness itself as the Slashing Witness for that case.

# Stages of Slashing 
Transitioning to a rigorous staking protocol in which all slashable conditions are checked, enforced, and punished will take place over three phases. The Slashing Challenges section below outlines the various challenges which may be submitted against an offending node but these challenges will not be fully enforced until Phase 3 of the network. 

**Phase 1: Beta **
* In the beta phase of the network, the expectation is that nodes are running error detection and logging but not submitting formal challenges. Any errors found may be submitted to the Flow team for additional testing and security improvements. 

**Phase 2: Testing Slashing Mechanics**
* At this time the slashing mechanisms will be implemented and require testing. Formal challenges should be raised and the protocol will follow the complete, formal mechanics for arbitrating challenges and slashing perpetrators, but no real slashing will take place. 

**Phase 3: BFT**
* By now, the network has been security-hardened and tested and valid challenges result in real slashing of the offending node.

# Slashing Challenges 
## 1. Collection Nodes

**1.1 Missing Collection Challenge (MCC): **Collection nodes are responsible for storing collection content (all transactions) for any collection which they guarantee during the current epoch and the first 1000 blocks of the next epoch. During this time they have to respond to any collection request from staked execution, verification and consensus nodes and should respond in a timely manner (specific timeout). If an execution node or a verification node doesn't receive the response from any of the collection guarantors (collection nodes who signed a collection), they can raise a Missing Collection Challenge and broadcast it to the consensus nodes to evaluate.

*Adjudication: Consensus nodes randomly contact some of the guarantors:*

**Valid:** if collection nodes don't respond, a portion of their stakes will be seized. if the amount of their stake goes to less than half, they will be fully slashed. Then the consensus nodes notify all the execution nodes to skip that collection.

**Invalid: **if any of the collection nodes respond, consensus nodes redirect the collection content to the execution nodes but will also set small penalties both for all the guarantors and that execution node (according to their revenue ratio).

**1.2 Invalid Collection Challenge (ICC): **Collection nodes are responsible for responding to collection content queries by collection hash from any staked nodes. The collection hash is the hash of an ordered list of transaction hashes. If a collection content sent by the collection node turns out to be invalid, any staked node can raise the Invalid Collection Challenge. This includes cases that:
the content is malformed or incomplete
There exists an invalid transaction inside the collection
the collection hash doesn't match (inside collection guarantee),

*Adjudication: Consensus nodes evaluate the content of the collection:*

**Valid: **if the collection is found invalid, the collection node (challengee) who signed the content is slashed.

**Invalid: **the challenger will be slashed.

**1.3 Double Collection Proposal Challenge (DCPC): **Collection nodes of a cluster run a mini consensus inside the cluster to decide on a collection, which requires collectors to propose the collection and aggregate votes from others. During the collection consensus, if a collection node proposes more than one proposal, any other collection node inside the cluster can raise the Double Proposal Challenge (including both proposals).

*Adjudication: Consensus nodes evaluate the content and signatures of these two proposals:*

**Valid: **the collection node who proposed two collections will get slashed.

**Invalid:** the challenger will be slashed.

**1.4 Double Collection Voting Challenge (DCVC): **Collection nodes of a cluster run a mini consensus inside the cluster to decide on a collection, which requires collectors to propose the collection and aggregate votes from others. During the collection consensus, if a collection node votes for more than one collection proposal with identical collection number and size, any other collection node inside the cluster can raise the Double Voting Challenge (including both votes).

*Adjudication: Consensus nodes evaluate the signatures of these two votes and evaluate them:*

**Valid:** the collection node who voted two times will get slashed.

**Invalid:** the challenger will be slashed.

## 2. Consensus Nodes

**2.1 Double Block Proposal Challenge (DBPC):** Consensus nodes run the consensus (HotStuff algorithm) over blocks. During these consensus steps, if a consensus node proposes more than one variation of a block proposal, any other consensus node can raise a Double Block Proposal Challenge (including both proposals). This challenge will be broadcasted to all other consensus nodes.

*Adjudication: Consensus nodes evaluate content and signatures of both proposals:*

**Valid:** the consensus node who submitted both proposals will get slashed.

**Invalid: **the challenger will be slashed.

**2.2 Double Block Voting Challenge (DBVC): **Consensus nodes run the consensus (HotStuff algorithm) over blocks. During the consensus steps, if a consensus node votes for more than one block proposal with the same height, any other consensus node can raise a Double Block Voting Challenge (including both votes). This challenge will be broadcasted to all other consensus nodes.

*Adjudication: Consensus nodes evaluate content and signatures of both votes:*

**Valid:** the consensus node who submitted both votes will get slashed.

**Invalid:** the challenger will be slashed.

**2.3 Invalid Block Vote Challenge (IBVC): I**f a consensus node votes for an invalid block or the content of the vote itself is invalid (e.g. vote for non-existing block), any other consensus nodes can raise an Invalid Block Vote Challenge.

*Adjudication: Consensus nodes evaluate the vote content and signature:*

**Valid:** the consensus node who submitted the faulty vote will get slashed.

**Invalid: **the challenger will be slashed.

**2.4 Invalid Block Proposal Challenge (IBPC):** If a consensus node proposes an invalid block proposal (e.g. quorum certificate without 2/3 vote), any other consensus nodes can raise an Invalid Block Proposal Challenge.

*Adjudication: Consensus nodes evaluate the proposal content and signature:*

**Valid:** the consensus node who submitted the invalid proposal will get slashed.

**Invalid:** the challenger will be slashed.

**2.5 Invalid Block Challenge (IBC): **If the block contents returned by any consensus node is invalid, any node can raise the Invalid Block Challenge:
It is malformed or incomplete
It doesn't match the payload hash provided by the block header

*Adjudication: Consensus nodes evaluate the block content and signatures:*

**Valid:** the consensus node who signed the block content will get slashed.

**Invalid: **the challenger will be slashed.

**2.6 Invalid Random Beacon Signature Challenge (IRBSC):** If any participant of the random beacon returns an invalid signature, an Invalid Block Challenge can be raised by other consensus nodes.

*Adjudication: Consensus nodes evaluate the random beacon signature.*

**Valid:** the consensus node who signed the invalid random beacon part will get slashed.

**Invalid:** the challenger will be slashed.

## 3. Execution Nodes

**3.1 Faulty Computation Challenge (FCC): **If any of the verification nodes find a fault in the execution of transactions by an execution node it can raise an FCC challenge. FCC challenge includes a faulty chunk and all the data needed to check it.

*Adjudication: Consensus nodes evaluate the challenge, by running the faulty chunk and compare the results against the expected state commitment. *

**Valid: **the execution node(s) who signed the faulty execution receipts will get slashed.

**Invalid: **the challenger will be slashed.

**3.2 Conflicting Execution Results Challenge (CERC): **if two or more variations of execution results are reported by execution nodes for a given block. Since only one can be valid, consensus nodes raise a conflicting execution results challenge.

*Adjudication: As soon as this challenge is raised, all the verification nodes go into full check mode (checks all the chunks)*

* The first execution result that receives result approval from at least 2/3 of verification nodes is the accurate one, and the other execution results will be considered faulty and execution nodes generating those will get slashed.

* If none of the execution results receive majority approval from verification nodes after a very long timeout, all the consensus nodes start executing chunks to determine the correct output.

**3.3 Invalid Chunk Data Package Challenge (ICDPC): **If the contents of a chunk data package doesn't match the hash provided inside the execution result, or the contents is invalid, the verification nodes can raise the Invalid Chunk Data Package Challenge.

*Adjudication: Consensus nodes evaluate the content of the chunk data package.*

**Valid: **the execution node(s) who signed the faulty chunk data package will get slashed.

**Invalid:** the challenger will be slashed.

**3.4 Missing Chunk Data Package Challenge (MCDPC):** If an execution node doesn't respond to the chunk data package request by any staked verification node, a Missing Chunk Data Package Challenge can be raised by the Verification node.

*Adjudication: When this challenge is received by the consensus nodes, they contact execution nodes and ask for the chunk data package*

**Valid:** if none of Execution nodes doesn't respond after a long timeout, all of them get slashed.

**Invalid: **if any of the execution nodes respond with a valid chunk data package, consensus nodes redirect the chunk data package to the verification nodes but will also set small penalties both for all the execution nodes and the challenge raiser (verification node) according to their revenue ratio.

**3.5 Execution Results Timeout Challenge (ERTC):** If no execution receipt received in X number of blocks after the submission of each block, the liveness of the system is compromised and consensus nodes can raise an Execution Results Timeout Challenge for all the execution nodes.

* Adjudication: When this challenge is received by the consensus nodes, they contact execution nodes and ask for an update. *

**Valid: **if none of the execution nodes respond after a long timeout, all of them get slashed.

**Invalid: **if any of the execution nodes returns the execution receipt, the case is dismissed. 

**3.6 Invalid Execution Receipt Challenge (IERC):** if an execution node provides an execution receipt that is not valid, the consensus nodes can raise this challenge.

*Adjudication: Consensus nodes evaluate the content of the execution receipt.*

**Valid: **the execution node(s) who signed the invalid execution receipt will get slashed.

**Invalid:** the challenger will be slashed.

**3.7 Non-Matching SPoCKs Challenge (ISC): **if the SPoCKs provided by the execution node don't match the ones provided by the verification node, the consensus nodes can raise this challenge.

*Adjudication: Consensus nodes will execute the chunk to compute the SPoCKs and determine the invalid SPoCK.*

**Valid: **the node which provided invalid SPoCKs will be slashed. 

**Invalid:** the challenger will be slashed.

## 4. Verification Nodes
**4.1 Non-Matching SPoCKs Challenge (ISC):** if the SPoCKs provided by the execution node don't match the ones provided by the verification node, the consensus nodes can raise this challenge.

*Adjudication: Consensus nodes will execute the chunk to compute the SPoCKs and determine the invalid SPoCK.*

**Valid:** the node which provided the invalid SPoCK will be slashed. 

**Invalid:** the challenger will be slashed.

**4.2 Invalid Result Approval Challenge (IRAC):** if a verification node provides an invalid result approval, the consensus nodes can raise this challenge. This includes cases that a verification node sends a result approval for a chunk that was not assigned to the verification node (excluding full check mode) or if the SPoCLs signature doesn't match the public key of the Verification node.

*Adjudication: Consensus nodes evaluate the content and signatures of the result approval .*

**Valid: **The verification node who signed that result approval be slashed. 

**Invalid:** the challenger will be slashed.


# Appendix A - Protocol Summary 
The details on reward and punishments in this paper presume a working knowledge of some key aspects of the Flow protocol. To facilitate understanding, this section summarizes those aspects to ensure all readers are able to follow the analysis.

The Flow protocol is executed by a set of “nodes”, each of which takes on the responsibilities of one of four roles. All nodes are required to deposit a specific amount of stake (based on the corresponding role) and follow the protocol steps during the operation of the network. Flow has four roles: Collection, Consensus, Execution, Verification.

Time in Flow is divided into Epochs; a finite amount of time defined by the protocol during which the nodes participate (e.g. 1 week). A node is said to be Active in an epoch if it is staked to a role, and is therefore responsible for the operations defined for that role. New nodes cannot join the network during an epoch, but some nodes might be removed from participating if their behaviour falls outside the requirements for their role (“slashing”). Nodes can leave or join the network freely at epoch boundaries. 

For each node, the following parameters are known to all participants (these parameters can only change at epoch boundaries):

* Amount of stake

* Public key(s) to verify signatures

* IP address to contact this node

* An account address for receiving rewards

## Collection Nodes
Collection nodes are bandwidth-optimized nodes divided by the protocol into several cooperating Clusters. Transactions are assigned to a cluster pseudorandomly by transaction hash. Each cluster collects transactions, assembles them into Collections, runs an internal “mini consensus” process to ratify collections and finally submits a Collection Guarantee signed by a super-majority of the cluster to the consensus nodes. Collection nodes are responsible for storing the complete contents of all transactions associated with the collections they have guaranteed and responding to queries related to them (most notably, providing the contents of transactions to Execution and Verifier Nodes).

## Consensus Nodes
Consensus nodes form and propose blocks in a manner similar to traditionally-structured proof-of-stake blockchains, using the HotStuff consensus algorithm to create a globally consistent chain of blocks (“the blockchain”). Consensus nodes are responsible for storing the block contents and responding to queries related to them.
Consensus nodes manage the Protocol State, the canonical data store which holds information about all participating nodes: their stake, role and network identity.
Each block holds many pieces of information including but not limited to:
* protocol state
* collection guarantees
* execution receipts
* block seals
* random beacon output
* pending challenges
* adjudicated challenges

Notably, the block does not directly contain the contents of transactions; the block instead contains signed collection guarantees, which include a hash value cryptographically derived from the contents of the entire set of transactions within the collection.

Additionally, the consensus nodes collectively implement a decentralized Random Beacon, which generates a cryptographically-secure random entropy value for each block.

## Execution Nodes
Execution nodes are compute-optimized nodes responsible for executing transactions and maintaining the Execution State (a cryptographically-verifiable data store for all user accounts and smart contract state). Execution nodes are responsible for storing execution state and responding to queries related to it.

## Verification Nodes
Verification nodes are responsible for confirming the correctness of the work done by execution nodes. Individual verification nodes only check a small amount of the total computation, but collectively they check the entire computation many times over in parallel. Verification nodes are not required to hold any data or respond to any state queries.

# Transaction Journey
A Transaction is the smallest unit of computation performed by the Flow network. Each transaction includes a short script for updating the execution state (which can call methods defined in smart contracts) and includes one or more cryptographic signatures used to authenticate the authority of the submitter. A User Agent (often called “wallet software”) is responsible for forming transactions and transmitting them to Flow.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eb750b3-txlifecycle.png",
        "txlifecycle.png",
        1292,
        698,
        "#fafafa"
      ],
      "caption": ""
    }
  ]
}
[/block]
When a transaction is ready, a user agent submits the transaction to a collection node. The collection node validates the transaction and then shares it with other nodes inside the cluster. The cluster forms a collection containing the transaction, aggregates a set of signatures from a super majority of cluster members, and then forwards the collection guarantee to the consensus nodes. A collection guarantee contains a hash derived from the contents of all transactions, the cluster id which created the collection, the count of transactions in the collection, and the signatures of collection nodes committing to the collection. By signing a collection, a collection node is responsible to store and hold on to a collection and respond to queries. A collection node only receives a reward for the collections it signs.

Consensus nodes are responsible for forming blocks containing collection guarantees. Finalized blocks are transmitted to execution nodes who then contact the collector nodes that guaranteed each collection for the contents of those collections. 

Upon receiving the content of all collections in a block, the execution nodes run the transactions referenced from that block and broadcast an Execution Receipt. The execution receipt includes a hashed commitment of the execution state resulting from correctly applying the state transitions specified in the complete transaction set for that block, plus cryptographic commitments to interim execution states at specific milestones through the block.

Consensus nodes include those execution receipts in new blocks; after a block containing an execution receipt is finalized, the verification nodes start checking the correctness of the individual parts of the execution work included in the block, by recreating the transition from one interim milestone to the next. The random beacon value from the block including the transaction receipt is used to seed a deterministic assignment algorithm. This algorithm randomly assigns a region of the computation between two milestones (a chunk) to a set of verification nodes. Every chunk is assigned a number of verifiers derived from the size of the verification pool and the number of chunks in the block (this analysis assumes 50 verifiers for each chunk, and 1,000 chunks in each block).

In order to verify a chunk, a verification node contacts an execution node for the input data (chunk data package) matching the appropriate milestone for their chunk from the execution receipt. If the verification node confirms that the transition from one milestone to the next is correct for that chunk it broadcasts a Result Approval to the consensus nodes; if it finds an error, it instead broadcasts a Faulty Computation Challenge (FCC).

If the consensus nodes receive sufficient result approvals for all chunks in an execution receipt, they will include a Result Seal for that receipt in the next new block. At least ⅔ of the validators assigned to each chunk must positively provide result approvals for a result to be sealed. If one or more chunks don’t receive enough result approvals for sealing after several blocks have passed, the consensus nodes trigger Full Check Mode for those chunks. In full check mode, all verification nodes are asked to check the chunks in question. Full check mode requires ⅔ of all validators to respond with result approvals to seal the result. Full check mode is also triggered if the execution nodes provide two or more different execution receipts for the same block.

When a result is sealed, the output of all corresponding transactions are finalized and the changes are not revertible.