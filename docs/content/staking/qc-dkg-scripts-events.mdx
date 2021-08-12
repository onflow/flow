---
title: Query QC/DKG Info with Scripts or Events
sidebar_title: QC/DKG Scripts and Events
---

# Introduction

The Cluster Quorum Certificate (QC) and Distributed Key Generation (DKG) protocol smart contracts
store a lot of different state, and the state is constantly changing.
As an external party, there are two ways to keep track of these state changes. 
You can either use Cadence scripts to query the state of the contract at any given time,
or you can monitor events that are emitted by the contracts to be notified of any important occurances.

# Query Information with Scripts

These events can be queried using the Go or JavaScript SDKs to extract useful notifications and information about the
state of these processes.

## QC Scripts

These scripts allow anyone to query information about the state of the QC contract.

### Get Clusters

To return a struct representing the information associated with a collector cluster,
can use the **Get Cluster** ([QC.03](/core-contracts/epoch-contract-reference/#quorum-certificate-transactions-and-scripts)) script with the following argument:

| Argument         | Type     | Description |
|------------------|----------|-------------|
| **clusterIndex** | `UInt16` | The index of the cluster to query |

### Get QC Enabled

To return a boolean representing if the QC is enabled,
can use the **Get QC Enabled** ([QC.04](/core-contracts/epoch-contract-reference/#quorum-certificate-transactions-and-scripts)) script with no arguments.

### Get Node Has Voted

To return a boolean representing if a node has voted for the current QC, you
can use the **Get Node Has Voted** ([QC.05](/core-contracts/epoch-contract-reference/#quorum-certificate-transactions-and-scripts)) script with the following argument:

| Argument         | Type     | Description |
|------------------|----------|-------------|
| **nodeID** | `String` | The node ID to check for |


### Get Voting Complete

To return a boolean representing if the voting for the QC phase is complete,
can use the **Get Voting Complete** ([QC.06](/core-contracts/epoch-contract-reference/#quorum-certificate-transactions-and-scripts)) script with no arguments.

## QC Events

Documentation coming soon

## DKG Scripts

### Get DKG Enabled

To return a boolean representing if the DKG is enabled, you
can use the **Get DKG Enabled** ([DKG.04](/core-contracts/epoch-contract-reference/#dkg-transactions-and-scripts)) script with no arguments.

### Get DKG Completed

To return a boolean representing if the dkg is complete, you
can use the **Get DKG Complete** ([DKG.05](/core-contracts/epoch-contract-reference/#dkg-transactions-and-scripts)) script with no arguments.

### Get Whiteboard Messages

To return an array of structs representing all the whiteboard messages, you
can use the **Get DKG Whiteboard Messages** ([DKG.06](/core-contracts/epoch-contract-reference/#dkg-transactions-and-scripts)) script with no arguments.

### Get Final Submissions

To return an array of key vectors for the nodes' final submissions, you
can use the **Get Final Submissions** ([DKG.07](/core-contracts/epoch-contract-reference/#dkg-transactions-and-scripts)) script with no arguments.

### Get Node Has Submitted

To return a boolean representing if a node has sent their final submission for the DKG, you
can use the **Get Node Has Submitted** ([DKG.08](/core-contracts/epoch-contract-reference/#dkg-transactions-and-scripts)) script with the following argument:

| Argument         | Type     | Description |
|------------------|----------|-------------|
| **nodeID** | `String` | The node ID to check for |

## DKG Events

```cadence
/// Emitted when the admin enables the DKG
pub event StartDKG()

/// Emitted when the admin ends the DKG after enough submissions have been recorded
pub event EndDKG(finalSubmission: [String?]?)

/// Emitted when a consensus node has posted a message to the DKG whiteboard
pub event BroadcastMessage(nodeID: String, content: String)
```