# Title of FLIP

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2022-05-19                                           |

## Objective

This FLIP proposes to reduce operator overload in Cadence by making the `as`
operator only perform casts, and only use `&` to produce a reference. 

## Motivation

The current syntax for taking a reference has the form `&v as &T`, which given a 
value `v` of some type `X` that is a subtype of `T`, will produce a reference type of
type `&T`. This, unfortunately, looks very similar to the syntax for casting, which looks
like `v as T`, which has no runtime behavior, but will cast `v` to type `T`. This similarity
can lead developers to believe that the other casting operators `as!` and `as?`, which can be
used to down-cast values (either by aborting execution or producing `nil` on failure, respectively)
can be used to take references, when they cannot. 

In order to reduce the confusion caused by these two similar-looking pieces of syntax,
we would like to change the `as` operator to no longer be overloaded. 

## User Benefit

This will improve the ergonomics of Cadence by making the language easier to read, learn and 
understand. It will also reduce the occurence of users writing code that has different semantics
than they expect. 

## Prior Art

Taking a reference (or the related operation of getting a pointer) is something that exists in many 
languages, so we have a number of sources to draw from here:

### Swift

In Swift, the `&` operator is used during a function call to make an argument into what swift calls
an "inout" parameter, more commonly known as pass-by-reference. This is a specific kind of reference,
but in Swift inout paramaters do not have a different type, they are simply denoted with different
syntax when declaring functions. 

### C/C++

In C and C++, `&` is the referencing operator, while `*` is the dereferencing operator. The
means that `&v` will create a reference to the value `v`, while `*p` will obtain the value pointed-to
by the pointer `p`. Confusingly, C uses the `*` postfix to denote a pointer type, so if `v` has an `int`
type, then `&v` has type `int*`.

Other languagues derived from C like Rust have also chosen this syntax, although in Rust's case for a
pointer type the `*` appears at the beginning of the type instead of the end, like `*int`.

### SML/OCaml/F#

SML and derived languages like OCaml or F# use the `ref` keyword to create a value has a reference type, 
as well as to denote a type that is a reference. A reference functions like a "box" that contains the 
value inside, and the value cannot be accessed directly without first "unboxing" the reference. This 
syntax has the benefit of being very obvious about what is and is not a reference, but is unfamiliar 
to most developers, and also differs from the existing `&` type prefix that Cadence already uses to 
denote a reference type. 

## Design Proposal

### Explanation

This FLIP proposes to simply remove the type component of taking a 
reference, and to allow people to write `&v` to take a reference like in C or C++. 
Additionally, the `as` operator would only be the upcasting operator; it would no 
longer have any specific relationship with referencing. This has the
nice property that it will not require most code to be changed: any existing
instances of code written as `&v as &T` will simply be interpreted as first
taking the reference `&v`, and then casting that expression to `&T`, which 
has exactly the existing behavior. 

However, when references were first added to Cadence, a primary concern was that they could
expose functionality of resources by allowing references to those resources to be distributed
to others. The original `as` cast-like syntax for references was used to require references
to be given an explicit type to make it less likely for developers to unintentionally 
expose the internals of their resources. We would like to preserve this safeguard, so we will 
also add a new check to the checker requiring that `&v` be given an explicit type.
As an example, the following code would create a reference to a value `r`:

```cadence
resource R { /* ... */ }

let r <- create R() // r has type @R
let p = &r as &R // p has type &R
```

This code would do the same thing:

```cadence
resource R { /* ... */ }

let r <- create R() // r has type @R
let p: &R = &r // p has type &R
```

Meanwhile, this code would have a type error:

```cadence
resource R { /* ... */ }

let r <- create R() // r has type @R
let p = &r // type error: `&r` does not have a type provided
```

Authorized references can be created the same way by using the `auth` keyword as normal.

```cadence
resource R { /* ... */ }

let r <- create R() // r has type @R
let p = &r as auth &R // p has type auth &R
```

### Implementation Details

This would completely change the implementation of references in the parser,
checker, and interpreter. In the parser, references would no longer expect the `as` 
operator as part of the expression; the reference expression is now simply `&` 
followed by another expression. Of course, because the reference expression is an
expression like any other, it can be followed part of a cast (or any other expression). 

In the checker, we would need to change how the type of reference expressions are computed, 
to ensure that any possible cast that was previously possible under the old model would 
still be valid in the new one. Additionally we would need to add a check to ensure that all
references are properly annotated or cast. This check is similar to one
that already exists for empty collections (`[]` or `{}`), so it should be familiar to users
already.

Finally, the two sequential operations of creating the reference object and casting it to
the provided type will need to be separated in the interpreter, while ensuring that the 
semantics of the combined operations are the same as in the original reference semantics. 

### Drawbacks

### Alternatives Considered

If it is decided that changing the syntax of an existing language feature is
too onerous, it would also be possible to change the parser to reject the use
of `as?` and `as!` for references. While this would fix the problem of users 
thinking they are taking references while in fact they are doing nothing at
runtime, this syntax for references and casts would still be confusing. 

In addition to the above, we could also create a new binary operator for 
references that has the same semantics as the current `as`. Possible choices 
for this might be `&as` (read reference-as) to convey that we are referencing
a value "as" a type, or `ref`, to convey that we are taking a reference. This 
would require a very large amount of code to change, however, and should be
carefully considered.  

A third option would be to add support for taking references with `as?` and
`as!` instead of changing the syntax. It is unclear what the semantics for
this should be, however. 

### Performance Implications

In effect, this is separating out the two operations that comprised reference-taking
in the interpreter: creating the reference object and casting it to the provided type.
Under the new design, these are now distinct, separable operations. However, 
existing code will still perform both, so there should be no change to the
performance of the interpreter.

In the checker, the additional check performed for references will 
add a very small additional cost, but it is a simple check, and all existing code will 
pass it by definition. 

### Best Practices

The best practices for how references are used or created should not change much;
the same type annotations will be required on references that were previously necessary.

### Compatibility

Existing (and previously-working) code  should continue to work correctly; 
as all currently functioning references will include a cast with `as` by definition. 
However, code that previously (incorrectly) tried to use `as!` and `as?` to create
a reference will need to change, as we will now report a missing type error in these
cases. 

### User Impact

Users will need to update any code where they incorrectly created references
in order to roll out this change. After that, however, there should be 
dramatically less confusion about the differences between referencing
and casting, as they will no longer be conflated by sharing an operator. 

