# Extensibility

| Status        | (Proposed)                                           |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [1101](https://github.com/onflow/flow/pull/1101) |
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2022-09-02                                           |

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

### Extension Declarations

The new extension feature would be used with a new `extension` keyword, which would be declared using a new form of composite declaration:
`<access modifier> extension <Name> for <Type>: <Interfaces> { ... }`, where the extension methods and fields are declared in the body. As such, 
the following would be examples of legal declarations of extensions:

```cadence
pub extension Foo for MyStruct: MyInterface {
    ...
}

priv extension Bar for MyResource {
    ...
}

priv extension Baz for MyResource: MyOtherInterface, MyThirdInterface {
    ...
}
```

Specifying the kind (struct or resource) of an extension is not necessary, as its kind will necessarily be the same as the type it is extending. At this time,
extensions can only be defined for a resource or struct composite type. 

The access modifier defines the scope in which the extension can be used: a `pub` extension can extend its original type anywhere that imports it, 
while an `access(contract)` extension can only be used within the contract that defines it.  Note that this access is different than the access 
of the fields or methods within the extension itself; a `pub` extension can declare a `priv` field, for example. 

Within the extension, fields and methods can be defined the same way they would be in a struct or resource declaration, with an access modifier and 
a declaration kind. Any fields and methods on the original type would be accessible to the extension on the `self` value. 
Note, however, that extensions only have access to the same fields and functions as other code declared in the same place would have; 
i.e. an extension defined in the same contract as its original type would have access to `pub` and `access(contract)` fields and methods, but not `priv` fields
or methods, while an extension defined in a different contract and account to its original type would only be able to reference `pub` fields and methods on its 
original type. Extensions may also not override or overload fields or methods on the original type, even if the original fields are not accessible to the extension. 
Hence, if the original type `T` declared a `priv` field named `foo`, an extension `E` of `T` would not be able to declare any fields or methods named `foo`, even
though `foo` is not accessible to `E`. This is to avoid any confusion or ambiguity when reading code. 

Interface conformances are checked against the combination of the original type with the extension applied. In particular, this means that it is possible to declare
an extension with an interface annotation if neither the extension nor the original type conform to that interface, as long as the resultant extended type would conform. 
For example:

```cadence
pub struct interface I {
    pub fun foo(): Int
    pub fun bar(): String
}

pub struct S {
    pub fun foo(): Int { ... }
}

pub extension E for S: I {
    pub fun bar(): String { ... }
}
```

In this case, S does not conform to `I`, but `E`'s declaration does conform to `I` because type of `S` with the extension `E` applied produces a type that conforms to `I`. 

Any additional fields that are declared in an extension must be initialized, just as any fields declared in a composite must be. An extension
that declares fields must declare an additional (partial) initializer, which is run when the extension is created. For this reason, the `init`
method in an extension cannot make reference to any fields or methods of the base type, as it will be run before extension is attached to that type. It is
recommended that users simply initialize any fields as simply as possible here, and save any complex set-up for the extension's `attach` method (explained
later in this section).

The same checks on normal initializers apply to extension initializers; namely that all the fields declared in the extensions must receive a value in the
extension's initializer. So, the following would be a legal extension:

```cadence
pub struct S {}

pub extension E for S {
    pub let x: String
    init(_ x: String) {
        self.x = x
    }
}
```

while these would not:

```cadence
pub struct S {}

pub extension E for S {
    pub let x: String
    pub let y: String
    init(_ x: String) {
        self.x = x
    }
}
```

```cadence
pub struct S {
    pub let y: String
     init(_ y: String) {
        self.y = y
    }
}

pub extension E for S {
    init(_ y: String) {
        self.y = y // E cannot reference S's fields in the initializer
    }
}
```

Any resource fields (which are only legal when extending resources) must also be explicitly handled in a `destroy` method, which is run when
the extension is destroyed. Like `init`, because `destroy` may be run when the extension is not attached to a base type, it may not reference 
any fields or methods of its base type, and should simply destroy any resources declared on the extension itself. 

Extensions may also declare two special methods: `attach() { ... }` and `remove() { ... }` that are not considered conflicting when attaching
multiple extensions to a single value. The `attach` method is automatically run after the extension is attached to a type, while the `remove` method
is run automatically when the extension is removed from a value (before the removal occurs). These functions exist to perform any necessary setup
and teardown for the extended type that requires using values from the base type, and thus cannot be performed in `init` or `destroy`. It is also recommended that 
users check any pre-conditions or post-conditions they would like to hold before or after the extended type is created in these functions. 

If a resource type with attached extensions is `destroy`ed, the extensions will be implicitly `remove`d and then `destroy`ed. For reasons that will be further
detailed in the Extended Types section below, there are no guarantees made about the order in which the `remove` and `destroy` methods will be run in the case
of destroying a resource type with multiple extensions attached, other than that a) `destroy` on the base type will always be the last method run, and b) the
`remove` method for an extension will always be run before the `destroy` method of that same extension. If developers wish to enforce that `remove`s and `destroy`s
run in a specific order, it is recommended that they explicitly `remove` extensions from a resource and `destroy` them, rather than `destroy`ing the entire extended
resource type all at once. 

Some may wonder why `init` and `attach` are separate functions (and have a similar question about `destroy` and `remove`). The primary reason for this
is to allow extensions to be re-used across multiple instances of the same base type. By separating `init` and `attach` (and `destroy` and `remove`), 
we can have separate code that runs once when the extension is created (destroyed), and then multiple times each time the extension is attached to (removed from) 
a base type. A motivating example for this would be a hat for a CryptoKitty: by separating the code to initialize the hat and the code to "equip" a Kitty with the 
hat, the hat can be added and removed from various Kitties, as well as sold and traded independently of the Kitties themselves.  

### Extended Types

The `with` type operator can be used to describe the type of an extended composite. Hence, given some resource `R` and an extension `E` defined as such:

```cadence
resource R {}
extension E for R {}
```

The type `@R with @E` describes the type of `R` extended with `E`. An extension can only appear on the right side of the `with` type operator 
when it is a valid extension for the type on the left. 

The extension type itself also can be referenced with just `E`, but no operations can be performed on a value of type `E` other than to 
move it around or to attach it to a value using `extend` syntax (see below). That is to say, a method or field defined in the declaration of `E` 
exists on values of type `@R with @E`, not on values of type `E`. 

If the extension has any interface conformances, then the extended `with` type conforms to those interfaces. Hence, given these declarations:

```cadence
resource R {}
extension E for R: I {}
```

`@R with @E` conforms to `I`. 

The original type is always a supertype of any extended versions of itself; i.e. `T` is a supertype of `T with E`. 

Because `T with E` is itself a type, `T with E1 with E2` would also be an acceptable type to describe the type of `T` extended with both `E1`
and `E2`. However, because this syntax has the potential for unneccessary verbosity and confusion, we also allow the use of comma separated
lists in these types: `T with E1, E2` is equivalent to `T with E1 with E2`. With the subtyping rules described above, `T with E1, E2`, is a
subtype of `T`, `T with E1` and `T with E2`. 

The order of the extensions in the type are interchangeable: `T with E1, E2` is the same type as `T with E2, E1`, and both are 
subtypes of `T`, `T with E1` and `T with E2`. 

### Creating Extensions

Extensions are created using similar syntax to creating composites: for an extension `E`, `E()` creates a struct-kinded extension,
and `create E()` creates a resource-kinded extension. The values created by these expressions have type `E`, and any types or 
methods defined in the extension cannot be used on those values; the extension must be attached before its methods can be used. 

### Adding Extensions to a Type

An extension can be attached to a base type using the `extend e1 with e2` expression. This expression requires that `e1` have a struct
or resource type, and that `e2` be a valid extension of that type. It will fail to typecheck otherwise. If `e1` has type `@R` and `e2` 
has type `@E`, then a successfully checking expression of this form will have type `@R with @E`, and then `E`'s `attach` method will be run.
So, given resource definition:

```cadence
resource R {}
extension E for R {}
```

The following would be valid ways to create `@R with @E`:

```cadence 
let r <- create R()
let e <- create E()
let r2 <- extend <-r with <-e
```

or 

```cadence 
let r2 <- extend <-create R() with <-create E()
```

Note that extending `r` in the first example moves both the resource and the extension; `r` cannot be referenced after the creation of `r2`,
nor can `e` be attached to any other types. Compare with the same example using structs:

```cadence
struct S {}
extension E for S {}
```

and

```cadence 
let s = S()
let e = E()
let s2 = extend s with e
```

or 

```cadence 
let s2 = extend S() with E()
```

Here, in the first example, `s` is copied when it is extended, so when `s2` is created it has a copy of all of `s`'s fields and data. If
the data in `s2` is modified, those modifications would not be reflected in `s`. `e` can be attached to other values as well, and writes to 
its data in `s2` are similarly not reflected in other values created with that extension.

If the extension has an initializer, the arguments to that initializer are provided in the creation of the extension like so:

```cadence
struct S {
    pub let x: String
    init(x: String) {
        self.x = x
    }
}

extension E for S {
    pub let y: Int 
    init(y: Int) {
        self.y = y
    }
}

let se = extend S(x: "foo") with E(y: 3)
```

Values can be extended more than once; given resource `R` and extensions `E1` and `E2` of `R`, `extend <-r with <-create E2()` is 
valid whether `r` has type `@R` or `@R with @E1`, since both are subtypes of `@R` which `@E2` extends. 
In the latter case, the type of that expression would be `@R with @E1, @E2`,  or equivalently `@R with @E1 with @E2`. Note, however, 
that if `E1` and `E2` declare any fields or methods with the same name, this extension will fail statically, as this would result 
in conflicts between the two extended types. 

At runtime, fields and methods are namespaced, so if `E1` and `E2` both declare a field named `foo`, so while a type `S with E1 and E2`
cannot be created, `E1` and `E2` can still both be attached to `S` at the same time at runtime:

```cadence
let s = S()
let s2 = extend s with E1(foo: 3)
let s3 = s2 as S
let s4 = extend s3 with E2(foo: 3)
``` 

Because `s3` has type `S` statically, the extra data added by extending it with `E1` is "hidden" from view and not accessible, and
then extending that value with `E2` to create `s4` will create a value of type `S with E2`. The two `foo` fields are namespaced, 
and do not interact. Referencing `s4.foo` will access the `foo` defined in `E2`, while referencing `s2.foo` will access the `foo`
defined in `E1`. Attempting to downcast `s4` to `S with E1 and E2` would fail at runtime, as despite how it may otherwise appear, 
that type is not a subtype of `S with E2` because it is not a valid type. 

If people wish to extend a resource with multiple extensions at once, in order to avoid necessitating expressions like
`extend extend <-r with <-e1 with <-e2` or similar, we allow the use of the `and` keyword to declare multiple extensions at once:
`extend <-r with <-e1 and <-e2`. This latter expression is syntactic sugar for the former. 

### Removing Extensions from a Type

Extensions can be removed with a new statement: `let x, y <- remove t from e` (or `let x, y = remove t from e` for structs). 
The `t` value here is a type name, rather than a value, as the extension being removed cannot be referenced as a value. 
In order to typecheck, if `t` is the name of some type `T2`, `e` must have type `T1 with T2`. Before the expression executes, 
`T2`'s `remove` method will be executed. After the expression executes, `x` will contain a value of type `T1`, while `y` will 
contain an extension with type `T2`. If these are resource-kinded, these values will have been moved out of `e`, so any alias 
to the resource with type `T1 with T2` will be invalidated. 

Extensions may be removed from a multiply extended type in any order, as multiple extensions on the same base type cannot interact. 
Users should still take care however not to design any extensions that rely on specific behaviors of other extensions, as there is no
way in this proposal to require that an extension depend on another or to require that a type has a given extension when another extension 
is present. 

### References to Extended Resources

When a reference is taken to a resource that has been extended, in addition to all the other circumstances in which that reference
might get invalidated, the reference will also be invalidated when any extensions are removed from that resource. This is to 
prevent users from attempting to access fields or calling methods that only exist on the extension after the extension has been removed. 
Consider:

```cadence
resource R {
    fun foo() {}
}
extension E1 for R {
    fun bar() {}
}
extension E2 for R {
    fun baz() {}
}

let r <- create R()
let e1 <- create E1()
let e2 <- create E2()
let refBase: &@R = &r
let r1 <- extend <-r with <-e1
let ref1: &@R with E1 = &r1
let r3 <- extend <-r with <-e2
let ref2: &@R with E1 = &r3 
let ref3: &@R with E1, E2 = &r3 
// at this point, refBase, ref1, ref2 and ref3 all refer to the same underlying value, 
// but permit different sets of method calls on each
let r2, e3 <- remove E1 from r3
// ref1, ref2 and ref3 are now invalid, as an extension has been removed from the resource they reference
let r0, e4 <- remove E2 from r2
// refBase remains valid however, because the reference was not taken while the resource was extended
destroy r0
destroy e3
destroy e4
```

### Drawbacks

Adding a new language feature has the downside of complexity: users have to learn yet another 
concept, and it also complicates the language implementation.

However, this language feature can be disclosed progressively, users can discover and use it when needed, 
it is not necessary to be understood for core use-cases of the language, i.e. the target audience is mostly “power-users”.

### Tutorials and Examples

* TODO: fill in later once the details of the design are decided

### Compatibility

This is backwards compatible, as it does not invalidate any existing Cadence code. 

## Related Issues

In the interest of keeping this proposal tractable, we are keeping the scope deliberately limited, and a number
of useful features beyond the basic ones for extension are deliberately out of scope for this FLIP. 

Adding extensions for structs and resources implies the ability to extend contracts, transactions, interfaces or enumerations as well, 
but these extensions are out of scope for this proposal. 

Some types may wish to require that they be extended; i.e. users may wish to define a set of methods on a type
that define a base functionality, but in order for the type to be used it should be extended with additional features. The
ability to require an extension on a type may be added in a future proposal, but is out of scope for this one. 

Similarly, some types may wish to prevent themselves from being extended; users may wish to prevent derivative works of an NFT, for
example. Such a restriction might be added in a future proposal with an `inextensible` or `final` keyword, for example. 

A future proposal may wish to add the ability to dynamically get a list of all the current extensions on a type. 

Having user-defineable type aliases would be very helpful for types that are multiply-extended. If we could write something like
`type T = X with Y`, then we could also write a type like `T with Z` instead of `X with Y, Z` or `X with Y with Z`, which is much 
easier to read and understand. It also enables abstractions where users can use an (aliased) type without even having to know that
it was created using an extension. We should propose this in a future FLIP to complement this one. 

Currently, users can only declare extensions for a base resource or struct type, and extensions for the same type cannot interact with
or depend on each other. The benefit of this is that the order that extensions were added to the base type does not matter, and they 
can be removed in any order interchangeably. However, allowing users to build extensions on top of each other to create dependency chains, 
e.g. to declare an extension `E2 for R with E1`, where `E2` is able to rely both on the fields/methods of `R` and those of `E1` would enable
powerful new use cases. A future proposal that adds this ability would need to contend with the order of these extensions and how they would be added
and removed. 

## Alternatives

In the comments of the PR where this FLIP was added, @turbolent proposed an alternative wherein every resource or struct has an implicit
`extensions` field that contains all of the extensions that are added to that composite. The extensions on a resource or struct would be 
accessible, addable and removeable without changing the static type of that composite, and accessing the fields on an extension would require
accessing the specific extension from the base type and then accessing the field from that extension specifically. This has the nice property 
that there would be no potential for naming conflicts between the base type and the extensions, as every method or field access on an 
extension is always fully qualified. 

The downside of this alternative is that it does not provide any static typing guarantees. The proposal in the FLIP has the nice property 
that the extensions present on a value are expressed in the type of that value; this makes it possible for a contract developer to write an 
application that is designed to work with, say, CryptoKitties with Hats, and statically require its inputs to be of that extended type. If 
extensions are stored on the base type like in the alternative though, expressing the type of a CryptoKitty with a Hat statically is no 
longer possible, and the author of such an application would only be able to statically require its inputs be CryptoKitties, and then would 
need to dynamically validate that the Hat extension is present on each of them.

Simply requiring fields to be fully qualified on an extended type, even when the extensions are also reflected in the static type, also breaks
a nice property that the current proposal upholds, which is that the resulting type of extending `R with E` is equivalent to a composite type `RE`
that contains the fields and methods of both `R` and `E` on it. This makes extended values "first-class" similar to resources and structs, and 
makes them more user-friendly to work with. 

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

* If Cadence had support for tuples or multiple return values, we would be able to make removing extensions more 
ergonomic by simply making the return of the `remove from` expression a tuple, or to make the expression return multiple values.
We would then not need to special cast the bindings created from this expression. 

