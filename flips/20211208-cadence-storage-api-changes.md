# Cadence Storage API Improvements

| Status        | (Approved)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [718](https://github.com/onflow/flow/pull/718) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2021-12-08                                           |

## Objective

This change would cause the `load`, `borrow`, `copy` and capability borrow 
methods of accounts to cause a force type-cast between the type of the
value in storage and the supplied type argument. In effect, this would
abort execution in cases where the value the user is trying to load or
borrow does not match the type supplied. 

## Motivation

The load, copy, and borrow functions, as well as the capability borrow function, 
currently return `nil` both when the storage location is empty, and when the storage 
location contains a value, but does not have the requested type. The inability 
to differentiate the two cases makes debugging hard.

## User Benefit

This will result in less ambiguity between the two cases in which a load can fail,
meaning users will not need to guess whether or not the value did not exist or 
whether the type argument was wrong. 

## Design Proposal

This changes the interpreter's handling of storage accesses. Previously, if
the supplied type argument did not match the value present in storage, the 
method would return `nil`. Now, instead, it will raise a `ForceCastTypeMismatchError`
between the expected type (the supplied type argument) and the dynamic type
of the value. 

Concretely, where this code would previously have produced `nil` for the value of `v`:
```
account.save(3, to: /storage/path)
let v = account.load<String>(from: /storage/path/)
```
after this change, it will now abort execution.

### Drawbacks

This is a breaking change, and may require existing contracts to be updated to 
account for this change. However, contracts that only loaded values from storage
that were the correct type will not need to change. Users should audit their
existing contracts to determine whether or not their storage acceses need
to be rewritten.

### Best Practices

This will change how users are expected to interact with storage, as they can
no longer load values that are not guaranteed to match the supplied static type.
Instead, users can use the `type` method to inspect the runtime type of stored values
if they are not sure what they are, or use an `AnyStruct` or `AnyResource` type if
they simply wish to load the value without caring what its type is. 

### Compatibility

This change is not backwards compatible with existing Cadence smart contracts, but
is being made in service of a future version of Cadence wherein no backwards incompatible
changes will be required going forwards. It should not affect any other parts of Flow.

### User Impact

This may break existing contracts, so there will need to be a migration path in place for this change.
One possible option would be to release this change behind a flag that can be enabled in the emulator
so that users can preview the effects of this change, and rewrite their contracts as necessary for
the full release. 

In general, however, there will be a general way to migrate code to be compatible with this change.
The following code:
```
let v = account.load<T>(from: /storage/path)
```
can be rewritten as:
```
let v = nil
if account.type(at: /storage/path) == Type<T>() {
    v = account.load<T>(from: /storage/path)
}
```
However, this is only necessary to maintain the original behavior in cases where the value stored at 
`/storage/path` is not guaranteed to be of type `T`. In cases where this is guaranteed, code can 
be left as is and behavior will not change. 