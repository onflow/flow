# Allow new fields in deployed Resources and Structs

| Status        | Proposed                                                  |
|---------------|:--------------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN)            |
| **Author(s)** | Deniz Mert Edincik (deniz@edincik.com)                    |
|               | Austin Kline (austin@flowty.io)                           | 
| **Sponsor**   |                                                           |
| **Updated**   | 2022-08-17                                                |

## Objective
This proposed change will allow existing structs and resources to add new fields to them by
using optional and default assignment embedded in the object definition itself.

## Motivation

One major challenge in smart contract design in cadence is the inability to add new fields to already deployed 
structs and resources. Not having the ability to do this means that contracts either get extended 
with data that exists in another contract, entirely new contracts are made that are essentially reprints of the
original, except with the newly added fields, or some other workaround such as storing fields as dictionaries
and building them into at runtime.

Each of these workarounds come with their downsides. 
- New contracts lead to complex migrations for applications and sunsetting existing contracts. 
- Hosting new data in another contract leads to harder-to-follow code and added complexity. 
- Factory patterns increase compute since objects must be built at runtime and also lose the benefits of type-checking
    since the underlying structure is not truly typed.

## User Benefit

- It will allow developers to add fields as they need them, making contract development more focused on the needs of the current version
    as opposed to undue complexity to take future plans into account.
- It will allow more maintainable contract code with less splintered logic as existing contracts update themselves

## Design Proposal

We propose to add the ability to define new optional fields, and the assignment of default values to fields in
structs and resources. All fields added after the first deployment of a contract must be either optional or have
a default parameter assigned so that initialization of existing instances of these objects can be properly
initialized.

```cadence
pub struct Message {
    pub let content: String
}
```

We could now add a new field to this struct in a few ways

```cadence
pub struct Message {
    pub let content: String
    
    // new fields
    // an optional new field. Existing instances of Message will have timestamp set to nil when accessed
    // unless they are set at a later date
    pub let timestamp: UInt64?
    // a default initialized field, Existing instances of Message will take the default value.
    pub let received: Bool = false 
}
```

### Limitations

- This will not allow existing fields to be altered. That is, you cannot take a field and alter its type.
- This will not allow new fields to be derived from existing ones.

### Compatibility

This should be backwards compatible

### User Impact

- Cadence developers will be able to modify their contract more to their needs instead of over-designing with
the first launch of their contract(s). 
- If new unforeseen features or fixes require new fields, those additions can be kept in the original contract instead of being silo'd off into their own contract.

## Prior Art

N/A