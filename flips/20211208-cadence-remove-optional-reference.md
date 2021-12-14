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
removes these references from the language entirely. Instead, it allows users to 
make the type on the right-hand side of an `as` expression an optional, and 
allows users to create optionally-typed references in place of references
to optional values. 

## Motivation

As detailed in https://github.com/onflow/cadence/issues/747, it is possible to 
crash execution with a failed dereference that is not caught by the typechecker
by creating a reference to the result of an indexed access, and then accessing
a field on that reference. This occurs because while references to optional 
values are normally disallowed, references to indexed accesses are special cased
in the checker. In order to proceed with a stable release of Cadence, this feature
needs to be removed. 

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
will be `nil` (as opposed to a reference to `nil`). This will be denoted in the
program itself by marking the type on the right-hand side an optional.

So, the following code would now be a type error, where it was not before:

```cadence
pub struct S {
    pub let foo : Number
    init() {
        self.foo = 0
    }
}
let dict: {String: S} = {}
let s = &dict[""] as &S? // s has type &S?
let n: Number = s.foo // optional does not have member "foo"
```

This also works in the general case by allowing users to create optional
references using the same principle:

```cadence
let i: Int? = 1
let ref = &i as &Int? // ref has type &Int?
```

### Drawbacks

This is a breaking change, and will require existing contracts to be updated to 
account for this change. 

### Best Practices

Users will now need to handle the case where the result of a dictionary
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
or restructure any code that previously relied on this unsafe behavior. Specifically, any
code of the following form:

```cadence
let x = &dict[key] as T
```

can be rewritten as 

```cadence
let x = (&dict[key] as &T?)!
```

This will cause a runtime panic if `key` was not present in `dict`, but cases
where this panic would occur would already have resulted in panics when the value of `x`
was used as a `&T` even though it was `nil`. As such, it is likely that this replacement
will work in most cases. 
