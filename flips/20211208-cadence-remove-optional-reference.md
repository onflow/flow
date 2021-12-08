# Title of FLIP

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2021-12-08                                           |

## Objective


## Motivation

As detailed in https://github.com/onflow/cadence/issues/747, it is possible to 
crash execution with a failed dereference that is not caught by the typechecker
by creating a reference to the result of an indexed access, and then accessing
a field on that reference. This occurs because while references to optional 
values are normally disallowed, references to indexed accesses are special cased
in the checker. In order to proceed with a stable release of Cadence, this bug 
needs to be addressed. 

## User Benefit


## Design Proposal

### Drawbacks

This is a breaking change, and will require existing contracts to be updated to 
account for this change. 

### Best Practices

### Compatibility

This change is not backwards compatible with existing Cadence smart contracts, but
is being made in service of a future version of Cadence wherein no backwards incompatible
changes will be required going forwards. It should not affect any other parts of Flow.

### User Impact

