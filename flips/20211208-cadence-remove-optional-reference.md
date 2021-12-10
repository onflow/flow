# Optional References to Indexed Accesses

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [722](https://github.com/onflow/flow/pull/722) |
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2021-12-09                                           |

## Objective

This removes the ability to create a reference to an optional value in Cadence by 
creating a reference to the result of an indexed access. This was previously the 
only way to obtain a reference to an optional, and as such this change effectively 
removes these references from the language entirely. 

## Motivation

As detailed in https://github.com/onflow/cadence/issues/747, it is possible to 
crash execution with a failed dereference that is not caught by the typechecker
by creating a reference to the result of an indexed access, and then accessing
a field on that reference. This occurs because while references to optional 
values are normally disallowed, references to indexed accesses are special cased
in the checker. In order to proceed with a stable release of Cadence, this bug 
needs to be addressed. 

## User Benefit

This removes an unsound behavior from the type checker, preventing an error
from occurring at runtime. 

## Design Proposal

When creating a reference value, the Cadence type checker includes a
check to ensure that the type of the referenced value is not optional.
However, prior to this change, there was a special case included that would
"unwrap" one layer of an optional obtained from an indexed access, effectively
allowing people to create optional references when the optional was the 
result of an indexed access. 

This worked without issue when the indexed access succeeded, but if the
access would have returned `nil`, users were able to access the fields of the
non-`nil` case of the optional value, which was unsafe and caused a crash at
runtime.

This FLIP proposes that instead of creating a reference to the result of the 
access and assuming that the access succeeded, instead the reference itself 
will be optional. In the case where the access succeeded, the reference will
point to the value that was returned, and when it failed, the reference itself
will be `nil` (as opposed to a reference to `nil`).

So, the following code would now be a type error, where it was not before:

```
pub struct S {
    pub let foo : Number
    init() {
        self.foo = 0
    }
}
let dict: {String : S} = {}
let s = &dict[""] as &S // s has type &S?
let n: Number = s.foo // optional does not have member "foo"
```

### Drawbacks

This is a breaking change, and will require existing contracts to be updated to 
account for this change. 

### Best Practices

Users will now need to handle the case where the result of a dictionary or array
access is `nil`, by checking the optional reference for `nil`. To obtain the 
same behavior as before, users can force the reference they create this way, 
and execution will abort if the access was `nil` (previously execution would
have aborted on a `nil` access when the reference was used).

### Compatibility

This change is not backwards compatible with existing Cadence smart contracts, but
is being made in service of a future version of Cadence wherein no backwards incompatible
changes will be required going forwards. It should not affect any other parts of Flow.

### User Impact

Users may encounter new type errors in their smart contracts, and will need to refactor
or restructure any code that previously relied on this unsafe behavior. 