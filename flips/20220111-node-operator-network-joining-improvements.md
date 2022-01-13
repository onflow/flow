# Epochs Dynamic Node Startup

| Status        | (Proposed / Rejected / Accepted / Implemented)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Khalil Claybon (khalil.claybon@dapperlabs.com)       |
| **Sponsor**   | Khalil Claybon (khalil.claybon@dapperlabs.com)       |
| **Updated**   | 2022-01-11                                           |

## Objective

Currently, users can only join the network during sporks. This is undesirable because it is a manual 
process, and sporks are going to be less common in the future.
We need a mechanism that will allow node operators to start their nodes at the appropriate epoch counter and 
phase. This mechanism will allow operators to utilize the main feature of epochs, joining the network 
at epoch boundaries as opposed to when sporks happen.

## Motivation

Epochs should enable node operators to dynamically join the network during epoch transitions, this is 
not possible yet without the changes described in this FLIP.

## User Benefit

Node operators will be able to join the network at any epoch boundary after staking operations
have completed.

## Design Proposal

This mechanism can be added in 1 of the 2 following ways.

1. Add code directly to the protocol that will:
- Wait for specified epoch counter & phase.
- Retrieve protocol root snapshot using flow client.
- Continue with normal module initialization.

The following CLI arguments will be added:
- startup-epoch-counter: The epoch in which to start the node.
- startup-epoch-phase: The phase within the specified epoch in which to start the node.
- root-snapshot-dir: Directory where downloaded root snapshot should be saved when using
  the dynamic join functionality.
- dynamic-join: When enabled start node using mechanism described above.

We will also add the ability to download a root protocol snapshot via flow-cli which will enable 
operators to manually start their nodes when they want.
### Drawbacks

None

### Alternatives Considered

None

### Performance Implications

None

### Dependencies

None

### Engineering Impact

We currently give a root protocol snapshot to node operators during sporks. Because this snapshot is 
coming directly from us there is an implied trust that snapshot is valid. The changes described in this doc
allow the operator to download the root snapshot themselves either via flow-cli or part of the 
dynamic mechanism for starting a node. Because of this operators need to make sure that they are connecting 
to a trusted AN for the root snapshot.

### Best Practices

Operator documentation will be updated to reflect these changes.

### Tutorials and Examples

None

### Compatibility

Upgrades needed in the flow-cli:
- Option to connect to AN via secure GRPC connection.
- Command to download root protocol snapshot.

### User Impact

Operator documentation will be updated to reflect these changes.

## Related Issues

None

## Prior Art

None

## Questions and Discussion Topics

None
