# Title of FLIP

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2022-05-12                                           |

## Objective

This FLIP proposes to change the syntax used to obtain a reference to a value from the current
`&v as &T` syntax to something else that is more visually distinct from the existing casting syntax.

## Motivation

The current syntax for taking a reference has the form `&v as &T`, which given a 
value `v` of some type `X` that is a subtype of `T`, will produce a reference type of
type `&T`. This, unfortunately, looks very similar to the syntax for casting, which looks
like `v as T`, which has no runtime behavior, but will cast `v` to type `T`. This similarity
can lead developers to believe that the other casting operators `as!` and `as?`, which can be
used to down-cast values (either by aborting execution or producing `nil` on failure, respectively)
can be used to take references, when they cannot. 

In order to reduce the confustion caused by these two similar-looking pieces of syntax,
we want to replace the syntax for references with something else that is more distinct. 

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


### Drawbacks

The largest drawback of this proposal is that it changes the syntax of an 
existing operation, requiring users to adjust to a new syntax for how to 
take references, and will require existing contracts to be updated to use
the new syntax.

### Alternatives Considered

If it is decided that changing the syntax of an existing language feature is
too onerous, it would also be possible to change the parser to reject the use
of `as?` and `as!` for references. While this would fix the problem of users 
thinking they are taking references while in fact they are doing nothing at
runtime, this syntax for references and casts would still be confusing. 

Another alternative is simply to remove the type component of taking a 
reference, and to allow people to write `&v` to take a reference. This has the
nice property that it will not require any code to be changed: any existing
instances of code written as `&v as &T` will simply be interpreted as first
taking the reference `&v`, and then casting that expression to `&T`, which 
has exactly the behavior we want. 

This would require a different operator, however, for creating an authorized
reference, as `&v as auth &T` would not be a legal cast if `&v` was 
interpreted as an unauthorized reference. 

A third option would be to add support for taking references with `as?` and
`as!` instead of changing the syntax. It is unclear what the semantics for
this should be, however. 

### Performance Implications

This is a syntactic change, so there should only be parser-level changes. Changing
a single operator should not introduce any additional ambiguity to the parser, 
however, so there should be no performance changes. 

### Best Practices

* Does this proposal change best practices for some aspect of using/developing Flow? 
How will these changes be communicated/enforced?

### Tutorials and Examples

* If design changes existing API or creates new ones, the design owner should create 
end-to-end examples (ideally, a tutorial) which reflects how new feature will be used. 
Some things to consider related to the tutorial:
    - It should show the usage of the new feature in an end to end example 
    (i.e. from the browser to the execution node). 
    Many new features have unexpected effects in parts far away from the place of 
    change that can be found by running through an end-to-end example.
    - This should be written as if it is documentation of the new feature, 
    i.e., consumable by a user, not a Flow contributor. 
    - The code does not need to work (since the feature is not implemented yet) 
    but the expectation is that the code does work before the feature can be merged. 

### Compatibility

This will not be backwards compatible, and will require all contracts that use
references to be updated. 

### User Impact

* What are the user-facing changes? How will this feature be rolled out?

## Related Issues

What related issues do you consider out of scope for this proposal, 
but could be addressed independently in the future?

## Questions and Discussion Topics

Seed this with open questions you require feedback on from the FLIP process. 
What parts of the design still need to be defined?
