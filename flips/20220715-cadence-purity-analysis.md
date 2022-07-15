# Function Purity 

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2022-07-15                                           |

## Objective

This FLIP proposes to add a new syntax and accompanying semantic analysis to determine or 
enforce that a given function or method is "pure", that is, lacking in side effects. This
would allow additional potential checker rules to enforce immutability in certain contexts, like
in function conditions or on public fields, that are not possible without a mutability analysis of 
this sort. 

## Motivation and User Benefit

There are a number of existing issues and proposed features that require or would benefit from 
the ability to know whether an operation is "pure", or whether it has the potential to modify state. 

The [FLIP to prevent mutation of public fields](https://github.com/onflow/flow/pull/703) attempted 
to prevent fields in structs and resources, but was only able to prevent mutation of array and dictionary
fields; nested composites could not be enforced because we did not have a mechanism for knowing what 
composite methods were "mutating". However, if we could know whether a function or method is `pure`, we
could restrict the calleable methods on such fields to be only `pure` ones. 

Similarly, a [FLIP](https://github.com/onflow/flow/pull/1043) and an [issue](https://github.com/onflow/cadence/issues/1304)
that suggest improvements to references to make them less powerful and prone to safety-footguns suggest to limit the 
operations that can be performed on references, or to allow the creation of read-only references. However, these
restrictions would only be enforceable at runtime, since we do not have a way statically to decide whether an operation is
read-only. However, if we could know whether a function or method is `pure`, we could require that such references only 
perform `pure` operations or are passed to `pure` functions. 

Certain re-entrancy attacks are enabled by mutating public contract fields. It has been suggested to ban these fields entirely,
but if we could enforce immutability on these fields statically, we could prevent these kinds of attacks without having to ban
public fields entirely. 

An [issue](https://github.com/onflow/cadence/issues/1805) with function pre- and post-conditions allows arbitrary functions to be
called in these condition blocks, which can allow implementers to write underhanded code by modifying state inside of a condition. We 
could solve this by banning all function calls inside condition blocks, but a less restrictive solution could make use of function
purity information to only ban calls to "impure" functions in conditions. 

This analysis would enable more ergonomic solutions to all of the above problems, as well as generally making it easier for developers
to see at a glance where state modification (and side-effects in general) are occuring in their code. 

## Design Proposal

### Parsing

This adds two new keywords to the langauge: `pure` and `impure`. These are optionally placed before the `fun` keyword, but after the access modifier, 
in function declarations and expressions. So, for example, all of the following are valid:

```cadence
pub pure fun foo(): Void {}
```

```cadence
impure fun foo(): Void {}
```

```cadence
let x = pure fun(): Void {}
```

```cadence
pub struct S {
    pub pure fun foo(): Void {}
    impure init()
}
```

```cadence
pub resource interface R {
    priv pure fun foo(): Void {}
    impure init()
}
```

It is syntactically valid to omit the purity modifier in a function declaration or expression, although in circumstances the type checker
may reject code that is lacking required annotations (see below).

Function types can also have purity annotations, to be placed after the opening parenthesis but before the parameter list. So, for example, these are valid
types:

```cadence
    let f: (pure (Int): Int) = ...
    let g: (impure (String): String) = ...
    let h: (pure (): (impure (): Void)) = ...
```

Any function types without an explicit purity annotation will be considered `impure`. 

### Type Checking

A function that is `pure` (e.g. if it was explicitly declared with the `pure` keyword) may not perform any operations with side effects 
within its body. Operations with side effects for the purpose of this analysis are:

* Calling a function that is not `pure`

* Mutating or modifying a value that was declared outside the scope of the function body (including the parameters themselves). Variables 
that are entirely local to the function may be modified as normal. So, for example, this code would be allowed:

    ```cadence
    pure fun foo(): Int {
        let a: [Int] = []
        a.append(3)
        return a.length
    }
    ```

    while the following are not:

    ```cadence
    pure fun foo(a: [Int]): Int {
        a.append(3)
        return a.length
    }
    ```

    ```cadence
    let a: [Int] = []
    pure fun foo(): Int {
        a.append(3)
        return a.length
    }
    ```

    Note that it is not always possible to determine statically whether or not a mutation is occuring on a locally or externally scoped variable, 
as in this case, for example:

    ```cadence
    pure fun foo(a: [Int], i: Int): Int {
        let b: [Int] = []
        let c = [a, b]
        c[i].append(4) // it is impossible to tell statically whether it is `a` or `b` that is receiving the write here
        return a.length
    }
    ```

    Cases like this will have to be rejected statically for safety.

* Writing to storage. This includes operations like `save` and `load` (since if a resource is loaded it will be moved out of storage), as well as `unlink`, but
not operations like `copy`, `borrow`, `type`, or `getCapability`.

* Writing to account state. This includes operations like adding, updating or removing a contract and adding, updating or removing account keys.

* Mutating a reference. Any writes to references will have to be rejected, as it is generally not possible to know what value is being referenced. Consider code like the following:

    ```cadence
    pure fun foo(a: [Int], b: bool): Int {
        let c: [Int] = &[] as &[Int]
        if b {
            c = &a as &[Int]
        }
        c.append(4) // it is impossible to tell statically whether `a` is receiving the write here
        return a.length
    }
    ```

Any function declared to be `pure` will enforce that none of these operations occur in their bodies. If such an operation does occur, then the checker will report
an error identifying the impure operation. Impure function declarations have no additional typechecking behavior; any operations are permitted.

Note that the current design allows both emitting events and logging data from within a pure function. These are traditionally considered side effects, but 
it is perhaps worth some discussion on whether or not these should be allowed in `pure` functions.  

Purity also interacts covariantly with function subtyping: `pure` functions are a subtype of `impure` functions. So, the following declarations would typecheck:

```cadence
    let a: (pure (): Void) = pure fun() {}
    let b: ((): Void) = pure fun() {}
    let c: ((): Void) = impure fun() {}
	let d: (((pure (): Void)): Void) = fun foo(x:(impure (): Void)) {} // contravariance
```

while these would not: 


```cadence
    let x: (pure (): Void) = impure fun() {}
    let y: (((impure (): Void)): Void) = fun foo(f:(pure (): Void)) {} // contravariance
```

### Purity Inference

When explicit purity annotations are not provided, we can attempt to infer a purity value. There 3 different cases for inference:

* Private functions and methods:

    On a private method, or a function that is local to the scope it is defined in, purity annotations are not required. If they are present, then the expected purity will be enforced 
by the checker, but when they are absent, the checker will attempt to infer the purity of the function based on the content of its body. If a function is declared without a purity 
annotation, the checker will inspect all the statements and expressions in the body of the function, and if no impure operations occur, then we can determine that the function is
pure. If an impure operation does occur, then the function will be marked as impure. 

    This analysis is done on a best effort basis, and in cases where purity cannot be inferred, the type checker will ask for a purity annotation to solve the ambiguity. A common
example of where this might occur is in recursive or mutually recursive functions: e.g.

    ```cadence
    fun foo(): Int {
        return bar()
    }
    fun bar(): Int {
        return foo()
    }
    ```

    Here the purity of these functions cannot be inferred, so the checker would ask the programmer to explicitly annotate `foo` and `bar` with purity annotations. 

* Public functions and methods:

    Unlike private functions that cannot be viewed from outside the structure that contains them, public functions and methods will not do any inference on their purity. 
If a `pure` annotation is provided, then the purity of the function will be enforced, but in cases where no annotation is provided the type will simply default to `impure`.
This is important because public functions can by definition be seen from outside the contract that defined them; and as if they inferred their purity when no annotation was given, 
then upstream changes to the purity of a function you import into your contract could cause your code to fail typechecking. Preventing inference on public functions keeps the scope
of the purity analysis manageable.

* Composite initializers:

    Unlike other public functions, these default to `pure` when no annotation is provided, since it is common in these functions to simply assign the inputs
to the fields of the composite being created. This way the common case requires no additional annotation, and users who wish to modify program state from
within a composite initializer can add an `impure` annotation to their `init` declaration. 

### Drawbacks

This adds additional complexity to the langauge; users will need to think about the purity of their functions and how they interact with each other in order 
to use the new `pure` annotations. While interacting with this new system would not be required on launch, subsequent analyses that rely on it may require
users to only use `pure` functions in certain contexts, for example. 

### Alternatives Considered

All of the issues in the Motivation section do have alternative solutions; if we elected not to proceed with this proposal we could pursue those instead. 

### Performance Implications

This will add additional work to the type checking phase, so we will need to take care to ensure that this work is fast. In particular, the
purity analysis will require us to perform a topological sort of top-level function definitions in order to process them in the correct order, 
so this will need to be optimized. 

### Best Practices

In order to make use of this new analysis, users should be encourage to add `pure` annotations to public functions wherever possible, so that other 
users who would like to import their contract can use these functions in `pure` contexts. (Perhaps we could add a lint to warn when a function is 
treated as impure despite performing no impure operations). Users updating their code to have `pure` annotations where appropriate would also position 
them to better make use of any future analyses relying on purity. 

### User Impact

This will have little direct impact on users, as the existing defaults for function purities should minimize the amount of annotations users need to add. However, there
will be some amount of backwards incompatibility. The two cases where users would need to add annotations are on definitions of recursive or mutually recursive functions 
(to enable the inference to proceed), and on composite constructors that perform impure operations (since these default to `pure` with no annotation).

## Related Issues

Out of scope for this proposal are the solutions to the problems that would make use of this analysis. Should this be implemented, 
its results might be used for any number of additional checks, but the specifics of which checks these would be and how they would
work are out of scope for this discussion. 

## Prior Art

A number of other languages have similar features or related analyses from which we can learn. 

C++ has both the `pure` and the `const` keyword. `pure` functions can read from, but not modify,
any observable program state, while `const` functions can neither read nor modify any externally
observable state. C++'s `const` is likely more powerful than anything we'd need in Cadence, as 
capturing or reading global state does not have the same kind of safety concerns as modifying it. 
Note that C++ does not do any kind of purity inference, hence why `const` has a poor reputation 
among developers for requiring annotations all over the codebase. 

D has `pure` functions that behave like `const` in C++, in that they cannot access or modify
any kind of global or static mutable state. Like C++, D does not perform any purity analyses. 

Solidity has `view` and `pure` functions, which behave like `pure` and `const` in C++ respectively. 
If the distinction between `view` and `pure` is confusing for smart contract developers learning 
Cadence with some past Solidity experience, we might consider using `view` instead of `pure` for
this new syntax. 

Swift takes the opposite approach, having a `mutating` keyword that functions must use in order to
be allowed to mutate program state, essentially implying that functions are `pure` by default. Given
the large amount of existing code in Cadence however, adoption will be easier by default if impurity 
is the default assumption. 

## Questions and Discussion Topics

* Should `pure` functions be allowed to emit events and log data? These are technically side effects, but
they are not problematic for the specific use cases we have identified for this analysis. Are there any other
potential use cases for this analysis that would require events and logging to be restricted in `pure` contexts?

* Given that `pure` in Cadence is closer to `view` in Solidity, a language with which our users may be familiar, 
should we instead consider using `view` instead of `pure` in our implementation of this feature?

* What other places would benefit from being able to know statically what functions have side effects?