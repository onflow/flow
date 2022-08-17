# Extensibility

| Status        | (Proposed)                                           |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2022-08-17                                           |

## Objective

This FLIP proposes to add a new `extension` feature to Cadence, allowing users to extend existing
composite types (structs and resources) with additional fields and methods, without modifying the
original declaration. This feature is purely additive, i.e. no existing functionality is changed or removed.

## Motivation

It is currently not possible to extend existing types unless the original author explicitly made provisions for future extensions.

For example, to make a resource declaration extensible, its author may add a field that allows any other code to store an extension. However, this requires a lot of boilerplate and is brittle. The original type must be prepared to store additional data with potentially additional functionality.

Instead, this would allow users to extend existing types whether or not the original author planned for that use case. 

## User Benefit

This enables a number of uses cases that were previously difficult or impossible, including [adding autographs to TopShot moments](https://github.com/onflow/cadence/issues/357#issuecomment-683387179)(or generally adding signature/edition info to existing NFTs), or [adding apparel to CryptoKitties](https://kittyhats.co/#/). 

## Design Proposal

This is the meat of the document where you explain your proposal. If you have
multiple alternatives, be sure to use sub-sections for better separation of the
idea, and list pros/cons to each approach. If there are alternatives that you
have eliminated, you should also list those here, and explain why you believe
your chosen approach is superior.

Make sure you’ve thought through and addressed the following sections. If a 
section is not relevant to your specific proposal, please explain why, e.g. 
your FLIP addresses a convention or process, not an API.

### Drawbacks

Adding a new language feature has the downside of complexity: users have to learn yet another 
concept, and it also complicates the language implementation.

However, this language feature can be disclosed progressively, users can discover and use it when needed, 
it is not necessary to be understood for core use-cases of the language, i.e. the target audience is mostly “power-users”.

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

This is backwards compatible, as it does not invalidate any existing Cadence code. 

## Related Issues

Adding extensions for structs and resources implies the ability to extend contracts, transactions, interfaces or enumerations as well, 
but these extensions are out of scope for this proposal. 

Some types may wish to require that they be extended; i.e. users may wish to define a set of methods on a type
that define a base functionality, but in order for the type to be used it should be extended with additional features. The
ability to require an extension on a type may be added in a future proposal, but is out of scope for this one. 

## Prior Art

Extensions exist in [C#](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)
where they are static methods defined in an "Extension Class" that function like additional instance methods on the extended type.
This syntax is fairly unintuitive since the actual functionality of the new methods is very different than it appears based on 
the syntax. Extensions are named and brought into scope explicitly. 

[Scala](http://dotty.epfl.ch/docs/reference/contextual/extension-methods.html) allows `extension` structures to be defined on 
a type after it is created, defining computed fields or methods on that type within the `extension`. Extensions are not named.

[Kotlin](https://kotlinlang.org/docs/extensions.html) allows extending a type by prefixing a function name with the receiver type
that is being extended. Extensions are not named, and are resolved statically (are not subject to dynamic dispatch).

[Swift](https://docs.swift.org/swift-book/LanguageGuide/Extensions.html) allows defining an `extension` structure that adds functionality
to an existing type, and allows for the extension to be annotated with any interfaces to which it conforms. Extensions can define 
additional methods, computed properties and initializers.

## Questions and Discussion Topics


