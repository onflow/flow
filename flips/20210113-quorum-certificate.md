# Epoch Collector Cluster Quorum Certificate Smart Contract

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [313](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Feature PR** | [QC Contract Draft](https://github.com/onflow/flow-core-contracts/pull/66) |
| **Author(s)** | Josh Hannan (joshua.hannan@dapperlabs.com) |
| **Sponsor**   | Josh Hannan (joshua.hannan@dapperlabs.com)            |
| **Updated**   | 2021-01-13                                           |

## Objective

Enable quorum certificate generation for bootstrapping the HotStuff consensus algorithm
in each collector cluster. The voting mechanism will be implemented in a Cadence smart contract.

## Motivation

When epochs are fully implemented on Flow, every epoch organizes all the confirmed collector
nodes into new clusters. Each cluster has to bootstrap a new HotStuff consensus algorithm
by gathering votes from a quorum of its collector nodes. (~2/3 of the nodes)

The generating of votes is left to the node software, but the smart contract will act
as a record of votes for the clusters and an arbiter for which nodes are eligible to vote.

## User Benefit

The benefits of implementing this as a smart contract are:
* Easier auditability
* Easier upgradability without having to perform a fork
* Integration with other epoch-related smart contracts

## Design Proposal

### Assumptions and Design Goals (Up for discussion)
* No imports: Quorum Cerificate generation should be as self contained as possible and not directly rely
on any other smart contracts. 
* No exessive gas: All operations should prioritize efficiency and attempt to be O(1) time complexity
* Node software will primarily be submitting these transactions. They will not be initiated by a human.
* Votes for a node can only be submitted by the node a single time. They cannot be submitted by anyone else.
* The only action nodes should have to take after registering is submitting a single vote.
* The `FlowEpoch` smart contract will monitor the QC contract for voting completion status

### High Level Design
The smart contract defines a `Cluster` struct, which holds information about the collector nodes in each cluster,
their weights, their votes, and the threshold for how many it votes it takes to consider the cluster voting completed.
When the `EpochSetupPhase` starts, new clusters are generated with no votes in them.

```cadence
pub struct Cluster {
    pub let index: UInt16
    pub let nodeWeights: {String: UInt64}
    pub let totalWeight: UInt64
    access(contract) var votes: [Vote]

    pub fun size(): UInt16 {
        // number of nodes in the cluster
    }

    pub fun voteThreshold(): UInt64 {
        // 2/3 + 1 of the total weight of the nodes in the cluser
    }
}
```
`Vote` is a struct that represents a single vote from a collector node. The smart contract cannot verify
the content of a vote, so the vote just has a raw `String` for its contents, as well as other identifying information.
```cadence
pub struct Vote {
    pub var nodeID: String
    pub(set) var raw: String?
    pub let clusterIndex: UInt16
    pub let voteWeight: UInt64
}
```

The contract will also define a `Voter` resource. This resource will be claimed by collector nodes by calling a 
privledged function to create a new object. It lives in the accounts of collector nodes and **only needs to be claimed once per node**. Once a collector node has claimed their `Voter` resource, it will be valid to vote for every subsequent epoch
where the collector node has been confirmed as a participant. The node uses this object to cast their raw vote.
```cadence
pub resource Voter {

    pub let nodeID: String

    // Submits the given vote. Can be called only once per epoch
    pub fun vote(_ raw: String) {}
}
```

The contract will also define an `Admin` resource that has the authority to create new `Voter`s, start the voting phase,
and end the voting phase. Votes are only allowed to be submitted while the voting phase is in progress, 
and voting is only allowed to be stopped once quorum has been reached for all clusters.
```cadence
pub resource Admin {
    pub fun createVoter(nodeID: String): @Voter 
    pub fun startVoting(clusters: [Cluster]) 
    pub fun stopVoting()
}
```
The `Admin` object will live in the Flow Service Account and be controlled by the central `FlowEpoch` contract,
which will be detailed in another FLIP. The epoch contract will handle the complexity of generating clusters,
restricting `Voter` creation, and timing the beginning and end of voting.

The smart contract will also define public getter functions to query all of the public information in the contract,
such as cluster information, voting completion status, etc.

See this sequence diagram for the flow of actions in QC generation.

[Diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgRmxvdyBRdW9ydW0gQ2VydGlmaWNhdGUgR2VuZXJhdGlvbgoKCm5vdGUgcmlnaHQgb2YgRXBvY2ggQ29udHJhY3Q6IFRyaWdnZXIgRW5kIG9mIHN0YWtpbmcgQXVjADoFAB8eRGV0ZXJtaW5lIGZpbmFsIHByb3Bvc2VkIGlkZW50aXR5IHRhYmxlAB0pQ29sbGVjdG9yIENsdXN0ZXJzCgCBIg4tPlFDAIEyC0luaXRpYWxpemUgYwAyCWMANAcgYW5kIGFsbG8Agg4FVm90ZXMgdG8gbm9kZQA4H1N0YXJ0IHZvdGluZwCCIB9lbWl0AIJOBlNldHVwIEV2ZW50CgCBPgpOb2RlLT4AgmUQUmVxdWVzdACBEAVyIG9iamVjdACBWREANw46IFJldHVybgAtB2FuZCBzdG9yAIJMEAAlEGZvcm11bGF0ZQAsBnVibWkAgVUFZQCCOx5RdWVyeSByZXN1bHRzIG9mAIIFCACCcwsAgUQSVgCCLAUgY29tcGxldGVkAIMeHkVuZAArBwCCOilDb21taXR0ZWQgZQCCYgUAgV0eUHJlcGFyZQCDbAUgZm9yIG5leHQgZXBvY2gKCgo&s=default)

### Drawbacks

* Still researching alternative architectures. There could be better options.
* Having votes that are opaque to the smart contract means we must trust that voters submit valid votes - the alternative is to validate votes within the smart contract which requires changes to the `Crypto` API

### Alternatives Considered

* Considered deeper coupling with the other epoch contracts, 
but this would make upgrading and unit testing more challenging

### Performance Implications

* checking `votingCompleted` has to iterate through all clusters and votes, which could take a lot of time and gas
* checking `nodeHasVoted` has to iterate through all clusters and nodes, which could take a lot of time and gas,
especially since it needs to be called by node accounts.
* `startVoting` has to iterate through all clusters and nodes to initialize contract field each epoch, which could take a lot of time and gas. This one is harder to avoid though, but it is only called by the service account, so isn't as much of a problem.
* including full votes in the `EpochCommit` service event results in significantly larger event size -- performing vote aggregation within the contract would make the data size of the resulting vote data proportional to the number of clusters rather than the number of collectors

### Dependencies

* Dependencies: no new dependencies
* Dependent projects: 
    * flow-core-contracts (adding `FlowEpochClusterQC` contract),

### Engineering Impact

* minimal changes to build time and test time.
* Joshua Hannan will maintain the code and unit tests. 

### Tutorials and Examples

* See [QC unit tests](https://github.com/onflow/flow-core-contracts/blob/josh/qc/lib/go/test/flow_qc_test.go) for how this process is handled.
* See the [QC transactions directory](https://github.com/onflow/flow-core-contracts/tree/josh/qc/transactions/quorumCertificate) for example transactions

### User Impact

* No user impact until all epoch features are enabled, which will be detailed in another document.

## Related Issues

Epoch smart contract is related, but out of scope from this proposal besides some
vague assumptions of how it will behave in relation.

## Questions and Discussion Topics

Seed this with open questions you require feedback on from the FLIP process. 
What parts of the design still need to be defined?
