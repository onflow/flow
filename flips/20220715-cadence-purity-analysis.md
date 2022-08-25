# Function Purity 

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [1056](https://github.com/onflow/flow/pull/1056)     |
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2022-08-25                                           |

## Objective

This FLIP proposes to add a new syntax and accompanying semantic analysis to determine or 
enforce that a given function or method is "view", that is, lacking in side effects. We would
then add an additional checker rule to enforce purity in function conditions. 

## Motivation and User Benefit

An [issue](https://github.com/onflow/cadence/issues/1805) with function pre- and post-conditions allows arbitrary functions to be
called in these condition blocks, which can allow implementers to write underhanded code by modifying state inside of a condition. 
By allowing users to annotate their functions as `view`, we can enforce that these functions have no side effects that modify state
and thus permit these functions (and only these functions) to be called from within a condition. 

## Design Proposal

### Parsing

This adds a new keyword to the langauge: `view`. This is optionally placed before the `fun` keyword, but after the access modifier, 
in function declarations and expressions. So, for example, all of the following are valid:

```cadence
pub view fun foo(): Void {}
```

```cadence
view fun foo(): Void {}
```

```cadence
let x = view fun(): Void {}
```

```cadence
pub struct S {
    pub view fun foo(): Void {}
    view init()
}
```

```cadence
pub resource interface R {
    priv view fun foo(): Void {}
    view init()
}
```

Any function that does not have a `view` annotation will be considered impure. 

Function types can also have purity annotations, to be placed after the opening parenthesis but before the parameter list. So, for example, these are valid
types:

```cadence
    let f: (view (Int): Int) = ...
    let h: (view (): (view (): Void)) = ...
```

Any function types without an explicit purity annotation will be considered impure.

### Type Checking

A function that is `view` (it was explicitly declared with the `view` keyword) may not perform any operations with side effects 
within its body. Operations with side effects for the purpose of this analysis are:

* Calling a function that is not `view`

* Mutating or modifying a value that was declared outside the scope of the function body. Variables 
that are entirely local to the function, or are function parameters, may be modified as normal. So, for example, this code would be allowed:

    ```cadence
    view fun foo(): Int {
        let a: [Int] = []
        a.append(3)
        return a.length
    }
    ```

    while this would not:

    ```cadence
    let a: [Int] = []
    view fun foo(): Int {
        a.append(3)
        return a.length
    }
    ```

    Note that it is not always possible to determine statically whether or not a mutation is occuring on a locally or externally scoped variable, 
as in this case, for example:

    ```cadence
    let a: [Int] = []
    view fun foo(i: Int): Int {
        let b: [Int] = []
        let c = [a, b]
        c[i].append(4) // it is impossible to tell statically whether it is `a` or `b` that is receiving the write here
        return a.length
    }
    ```

    Cases like this will have to be rejected statically for safety. Field reads, of course, will remain valid, as they do not modify any state. 

* Writing to storage. This includes operations like `save` and `load` (since if a resource is loaded it will be moved out of storage), as well as `unlink`, but
not operations like `copy`, `borrow`, `type`, or `getCapability`.

* Writing to account state. This includes operations like adding, updating or removing a contract and adding, updating or removing account keys.

* Logging data (calling the `log` function)

* Emitting events

* Mutating a reference. Any writes to references will have to be rejected, as it is generally not possible to know what value is being referenced. Consider code like the following:

    ```cadence
    view fun foo(a: [Int], b: bool): Int {
        let c: [Int] = &[] as &[Int]
        if b {
            c = &a as &[Int]
        }
        c.append(4) // it is impossible to tell statically whether `a` is receiving the write here
        return a.length
    }
    ```

Any functions declared to be `view` will enforce that none of these operations occur in their bodies. If such an operation does occur, then the checker will report
an error identifying the impure operation. Impure function declarations have no additional typechecking behavior; any operations are permitted.

Note that the current design allows both emitting events and logging data from within a view function. These are traditionally considered side effects, but 
it is perhaps worth some discussion on whether or not these should be allowed in `view` functions.  

Purity also interacts covariantly with function subtyping: `view` functions are a subtype of impure functions. So, the following declarations would typecheck:

```cadence
    let a: (view (): Void) = view fun() {}
    let b: ((): Void) = view fun() {}
    let c: ((): Void) = fun() {}
    let d: (((view (): Void)): Void) = fun foo(x:((): Void)) {} // contravariance
```

while these would not: 


```cadence
    let x: (view (): Void) = fun() {}
    let y: ((((): Void)): Void) = fun foo(f:(view (): Void)) {} // contravariance
```

Once purity is enforced in functions with `view` annotations, in order to require it in function conditions we can 
simply treat pre-conditions and post-conditions as view contexts as if they had `view` annotations themselves. 

### Drawbacks

This adds additional complexity to the langauge; users will need to think about the purity of their functions and how they interact with each other in order 
to use the new `view` annotations. However, these annotations are unlikely to be frequently required; they will only be necessary for functions that are 
called from conditions (and functions called by those functions). Users will not need to interact with this system most of the time. 

### Alternatives Considered

An earlier version of this FLIP proposed a more heavyweight version of this idea that included an `impure` annotation and purity inference that would have
been usable in more situations and would have been a more significant part of the language. This version has been tabled for now, but the specific changes
proposed in this FLIP are compatible with the original proposal, and with the addition of inference could be as a basis for implementing it should the 
need arise. 

### Performance Implications

This will add additional work to the type checking phase, so we will need to take care to ensure that this work is fast. 

### Best Practices

For the most part users can ignore this new feature unless they want to call functions from inside function conditions, in which case they will need to add
`view` annotations to those functions. However, if users have other reasons for wanting to limit what mutations can be performed from inside functions they
may choose to add `view` annotations anyways. 

### User Impact

This will have little direct impact on users, as `view` annotations will only be required on functions that are called from conditions. This is, however, 
technically backwards incompatible, since users will need to add annotations to these functions in order for their code to typecheck. 

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
