# Improve Cadence Numeric Supertypes

| Status        | Proposed       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | N/A|
| **Author(s)** | Supun Setunga (supun.setunga@dapperlabs.com)       |
| **Sponsor**   | Supun Setunga (supun.setunga@dapperlabs.com)       |
| **Updated**   | 2021-12-13                                           |

## Objective

Statically disallow arithmetic and comparison operations on numeric supertypes, as they may or may
not succeed at run-time.
The idea is to make the current behavior that happens under the hood, more explicit to the developers,
and by doing so, help them to avoid any unintentional/unforeseen behaviors.

## Motivation

Cadence type system consists of several numeric supertypes, such as:
- Number
- SignedNumber
- FixedPoint
- SignedFixedPoint
- Integer
- SignedInteger

Currently, arithmetic operations (`+`, `-` `*`, `/`, etc.), equality operations (`==`, `!=`)
and comparison operations (`>`, `>=`, `<`, `<=`) are also allowed on those types.

However, it is not always guaranteed that these operations will succeed at run-time.

For example, if the two numeric values are of same type, then the operation will succeed:
```cadence
let x: Integer = 3 as Int8
let y: Integer = 4 as Int8
let z: Integer = x + y
```

However, if the two numeric values are of different types, then there will be a run-time panic.
```cadence
let x: Integer = 3 as Int8
let y: Integer = 4 as UInt16

// Panics at run-time, since the two numbers are of different types
let z: Integer = x + y
```

This leads to situations where developers would end up writing codes that were assumed to work,
but instead, fails at run-time for certain combination of inputs.
It is not intuitive enough for developers that their codes may not work for all inputs.

## User Benefit
It would be more intuitive and explicit to the developers and to anyone who read the code, about
what's happening during arithmetic and comparison operations on numeric supertypes. 
Helps them to avoid any unintentional/unforeseen behaviors.

## Design Proposal

#### Arithmetic Operations (`+`, `-` `*`, `/`, etc.)
The proposed solution is to statically disallow arithmetic operations on numeric supertypes.

```cadence
let x: Integer = 3 as Int8
let y: Integer = 4 as Int8

let z: Integer = x + y     // Static error
```

Developers will have to explicitly force-cast it to the desired type before they do the arithmetic
operation.

```cadence
let x: Integer = 3 as Int8
let y: Integer = 4 as Int8

let z: Integer = (x as! Int8) + (y as! Int8)
```
This way, it is intuitive for the developers that the code has the potential to fail at run-time. 


#### Equality Operations (`==`, `!=`)
Statically allow the equality operations, and consider the raw-value and the type for the runtime
value equality.
```cadence
let x: Integer = 3 as Int8
let y: Integer = 3 as Int16

let isEqual = x == y    // will result in 'false'
```
`isEqual` will be `false` since the type of the two values are different, even though the raw-value
is same.

#### Comparisons Operations (`>`, `>=`, `<`, `<=`)
As it is proposed in the equality operations, since the runtime value-semantics include both the
value and the type, defining comparison operations for values of different types is not possible.

One could argue that it is possible to define these operations based on the raw-value only. However,
that would lead to a situation where `!(x > y || x < y)` contradicts `x == y`, if `x` and `y` have
the same raw value but belongs to two different types (e.g: `x: Integer = 3 as Int8` and
`y: Integer = 3 as Int16`)

Thus, the suggestion is to statically disallow comparisons on numeric supertypes, similar to
arithmetic operations.

```cadence
let x: Integer = 3 as Int8
let y: Integer = 4 as Int8

let z = x < y     // Static error
```

Developers will have to explicitly force-cast it to the desired type before they do the comparison
operation.
```cadence
let x: Integer = 3 as Int8
let y: Integer = 4 as Int8

let z = (x as! Int8) < (y as! Int8)
```

### Drawbacks
- This is a breaking change, and developers will have to update their codes.
- With this change, developers would now have to write some extra bit of code for the force casts,
when performing arithmetic and comparison operations on numeric super types. However, it is very 
trivial.
- This reduces the usefulness of numeric supertypes.

### Alternatives Considered

#### 1. Relying on the run-time checks
This is the existing behavior.
- Pros:
  - No change would be needed.
- Cons:
  - Like it was discussed in the [motivation](#motivation) section, potential issues in the code
    are not intuitive enough for the developers.

#### 2. Removing numeric supertypes
As the suggested solution in the [proposal](#design-proposal) would result in the numeric supertypes
being less useful, an alternative solution is to completely remove them.
- Pros
  - Makes the type systems relatively simple
- Cons
  - Numeric supertypes may still be useful to have for certain use-cases. e.g: collections, etc.

#### 3. Defining run-time behavior for heterogeneous numeric types
A more complex alternative solution is to define a set of rules for the run-time behavior for each
combination of operands and operators of different types.
- Pros:
  - All arithmetic operations would succeed out of the box, without developers having to write any
    extra codes.
- Cons
  - There are large number of combinations of different operand types and operator types.
  - The rules may again not be intuitive for developers, and may leave unintentional behaviors in
    their codes.
  - In general, the use of supertypes for arithmetic operations can said to be less frequent.
    Along with that, given the complexity of the solution, it may not be worth implementing such a
    complex solution.
  

### User Impact

Developers will have to update their code to use explicit casting as suggested in the
[proposal](#design-proposal) section.
