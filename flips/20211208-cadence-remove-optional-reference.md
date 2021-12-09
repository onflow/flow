# Title of FLIP

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [722](https://github.com/onflow/flow/pull/722) (update when you have PR #)|
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
runtime. This FLIP proposes to remove this special case, treating the 
result of an indexed access the same as any other optional value, and 
not allowing users to directly create references to them. 

So, the following code would now be a type error, where it was not before:

```
pub struct S {
    pub let foo : Number
    init() {
        self.foo = 0
    }
}
let dict: {String : S} = {}
let s = &dict[""] as &S // cannot create reference to optional
let n: Number = s.foo
```

### Drawbacks

This is a breaking change, and will require existing contracts to be updated to 
account for this change. 

### Best Practices

This removes the ability to create references to the results of indexed accesses. For
arrays and dictionaries containing regular values or structs, one can simply look up the 
value and either force it with a `!`, or assign it to a variable and check it for `nil`. 

So, for example, this code, where `S` is some struct:

```
let s = &dict["s"] as &S
```
can be rewritten as:
```
var s: &S? = nil
if dict["s"] != nil {
    s = &dict["s"]! as &S
}
```

For arrays or dictionaries that contain resources however, it is no longer possible to 
obtain a reference to a value in this dictionary or array simply by using an indexed access.
If a developer wants to obtain a reference to a resource in a dictionary, they will
need to move the value out of the dictionary (or swap it with another value). To see why, 
consider this code, where `R` is some resource:

```
let r = &dict["r"] as &R
```
if we rewrite this as:
```
var s : &R? = nil
if dict["r"] != nil {
    s = &dict["r"]! as &R
}
```
we get a "cannot move nested resource" error, as the resource moved out of the dictionary 
is not properly moved or destroyed. 

### Compatibility

This change is not backwards compatible with existing Cadence smart contracts, but
is being made in service of a future version of Cadence wherein no backwards incompatible
changes will be required going forwards. It should not affect any other parts of Flow.

### User Impact

Users may encounter new type errors in their smart contracts, and will need to refactor
or restructure any code that previously relied on this unsafe behavior. 