# Remove Public Fields on Resources

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2021-12-22                                           |

## Objective

This FLIP proposes to remove the ability to declare public fields on resources. Instead, 
developers would be required to specify getters, setters and accessor methods for all
fields on their resources that they wish external consumers to be able to interact with. 
This increased specificity would correlate with more explicit, safe, and readable code. 

## Motivation

Public fields on resources present a usability problem for developers, by allowing them 
to unintentionally expose functionality, data or information that they did not intend 
to expose. In Cadence generally, and specifically for code constructs like resources 
that deal directly with real-world value, it is important to be explicit about what 
functionality is available. As such, using public fields on resources is already largely 
considered to be a poor practice, and should be avoided where possible.

If we would like to make it easier to write safe code in Cadence, and decentralize the
process of deploying contracts on Flow, it might be valuable to make the best practice 
of not using public fields on contracts explicit in the language by simply banning them entirely.

## User Benefit

Making it more explicit which fields and data on resources are publically accessible will
result in safer and more easily comprehensible code, which benefits both writers and consumers
of Cadence smart contracts. 

## Design Proposal

This FLIP would add a new type error in the checker that would prevent users from creating
public fields on a resource. When users attempt to declare such a field, the error message
would suggest that they instead make the field private, and write getter and/or setter methods
to allow others to interact with the data. 

### Drawbacks

This will increase the amount of code needed to specify a resource,
potentially contributing to code bloat and/or duplication. This will also 
invalidate almost every smart contract currently deployed on Flow, since almost
all of them use resources with public fields. These contracts will need to be updated 
to make these fields private with accessor methods instead. 

### Alternatives Considered

https://github.com/onflow/flow/pull/703 proposes to solve a related, but not identical,
problem, that of public fields being mutable outside of their defining scope. It is 
possible that should this FLIP be approved and merged, this FLIP will no longer be nsecessary.
However, it is not certain that the footguns associated with public mutable fields overlap
with those associated with public resource fields; and as such this FLIP may still have value. 

### Performance Implications

This is a change to the Cadence type checker, so by adding more checks and errors
for it to report, it may have a performance impact. However, this should not add
signficantly more work to typechecking of programs that succeed on typechecks. 

### Best Practices

This will change the way that resources are intended to be written and interacted with.
Instead of making fields public if developers wish their values to be read or written 
publicly, developers will instead need to provide accessor methods. It should be possible
to communicate this directly to users however, via an appropriate error message when 
they try to create a public field on a resource. 

### Tutorials and Examples

Users will need to restructure their resources to provide the appropriate getters
and setters for their newly private fields. For example, the following code:

```cadence
pub resource R {
  pub(set) var x: [Int]

  /* init and other methods omitted */
}

pub fun main() {
  let r <- create R()
  r.x.append(3)
  log(r.x)
  /* additional code */
}
```

will need to be rewritten to something along these lines:

```cadence
pub resource R {
  priv var x: [Int]

  pub fun getX(): [Int] {
    return self.x
  }

  pub fun appendToX(i: Int) {
      self.x.append(i)
  }

  /* init and other methods omitted */
}

pub fun main() {
  let r <- create R()
  r.appendToX(3)
  log(r.getX())
  /* additional code */
}
```

### Compatibility

This change is not backwards compatible with existing Cadence smart contracts, but
is being made in service of a future version of Cadence wherein no backwards incompatible
changes will be required going forwards. It should not affect any other parts of Flow.

### User Impact

This will change the way users write their smart contracts, and will require
a large number of existing smart contracts to be rewritten. In addition, it will be 
extremely difficult to provide an automated migration to upgrade existing smart contracts
to accommodate this change; while basic getter and setter methods could be added to accomodate
the basic cases of reading or writing to a field, any more complex operations on a public field
would require bespoke accessors that cannot be written automatically. 