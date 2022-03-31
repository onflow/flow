# Contracts Import Syntax

| Status        | Proposed       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | |
| **Author(s)** | Gregor Gololicic @sideninja gregor.gololicic@dapperlabs.com |
| **Sponsor**   | Gregor Gololicic @sideninja gregor.gololicic@dapperlabs.com |
| **Updated**   | 2022-03-23                                           |

## Objective
Uniforming the import syntaxes that are used in Cadence contracts. Currently there are few established patterns in the community for how to 
write imports that would then be replaced before deploying the code to the network. The replacement mechanism is needed because depending 
on the network you develop on, the addresses will change, and in some cases it might even reference a local file.

## Motivation
Currently there is no single standard for how to solve this problem and hence few have been established which makes it super hard 
when switching between environments. Example one format is used locally when developing using the CLI and another with FCL which makes 
switching betwen those environments hard.

## Design Proposal

### Declaring an Import

There are currently two import replacement mechanisms used in Cadence contracts:

#### **Imports referencing a placeholder**

**Import syntax**

`import <declarations to import> from 0x<placeholder>`

Example:
`import Foo from 0xFoo`

**Mechanics**

Source code is loaded and searched for `0x<placeholder>` string and then replaced with configured value. Configuration is not specified but it's assumed to be handled by the software loading the contract.

**Used by**

- FCL
- Core contracts
- Flow testing library

#### **Imports referencing a relative path**

**Import syntax**

`import <declarations to import> from <relative path>` 

Example:
`import Foo from ./Foo.cdc`

**Mechanics**

Source code is loaded and parsed with the Cadence library, the import statements are iterated over and replaced with the values set in `flow.json` configuration. 

**Used by**

- VSCode Extension
- CLI

### Current Implementation Problems

**Imports referencing a relative path**

- there will not always be a contract present locally (or at least it shouldn't be as the network is the source of truth for a contract and downloading the contract has definite downsides especially contracts that are still able to update)
- potential problems across different file systems

**Imports referencing a placeholder**

- Not a valid cadence syntax
- Impossible to know what contract is `0xFoo` really referencing by reading the contract code, the resolution of contract location is hidden in the complexity of the code

### The Current State

We can observe some common patterns established in the community:

- Contracts are published on version control platforms (eg Github) and the best-established practice is for the code to be published on its own without other application code (which usually is part of another repository)
- The community is using and switching between CLI and SDKs (FCL) and is facing problems between different import formats. This problem is validated with the existence of tools that handle switching between import formats (such as [github link])

### Possible Solutions?

**New Import Syntax**

`import <declarations to import> from "<namespaced location>"`

Example:

`import NonFungibleToken from "onflow/NonFungibleToken"`

The source files should be accompanied by a configuration/dependency resolution file, defining locations of contracts addresses on a specific network. Including this file is beneficial so developers exploring contract source files in public repositories can understand which contracts this Cadence code imports. Think of this as go.mod, package.json or any other implementation of this idea where source code that imports something needs to define what that is in the supporting "configuration" file.

Example flow.json for the above syntax:

```jsx
{
...
"contracts": {
	"onflow/NonFungibleToken": "./NonFungibleToken.cdc",
	"onflow/FungibleToken": {
		"testnet": "github.com/flow/FungibleToken/Fungible.cdc",
		"mainnet": "0x2",
		"emulator": "./FungibleToken.cdc", 
		"e2e-testnet": "0x3"
	}
}
...
}
```

Another benefit to this file is to have a way to define mock contracts for testing. You wouldn't be limited to defining one address per network but you could define multiple environments.

The above example is just an idea for values this file needs to include, the file format is up for discussion, but we could argue `flow.json` might be a good place to put this information especially since it can be used that it just defines this section and nothing else.

### Implementation

**Frontend Applications**

Frontend applications could fetch the configuration as a resource from the webserver or build it in the source using any build tools available or any third way to get the values on the frontend after that the source of the contracts should be modified to change the import statement. This could be done simply using a simple regex.

**Backend Applications**

Backend applications should import the configuration and replace the imports based on the environment in which the backend application is being run.

### Future-Proofing

There is a good chance in the future there will be a decentralized index or name resolution service that would allow registering a name which would then be referenced in the contracts and the single source of truth will be that service. I believe the proposed syntax will work well with such an improvement. There is also a big chance we will be implementing a package manager for contracts and the proposed solution should work nicely with such a solution.

### Retrofitting

This proposed solution would actually work with previous solutions since the import syntax is an arbitrary string which then is used as a key when searching for its definition in the configuration. So even if the import is referencing a filename then that same filename could actually be used to define a contract in the configuration and then resolve it to either a file or another address. Not ideal but would work which is a plus. It would also work with current import by a placeholder with 0x formats.


### Drawbacks
There are multiple places that need to change acordingly with this proposal.

### Dependencies
Dependencies is all software that currently parses or includes contract code
- FCL, Core contracts, Go SDK, CLI

### Compatibility
The support for this new format should be implemented in SDKs and potentially live inside a new repo for flow configuration which would include all this code specific to building/replacing imports.


### User Impact
Users would benefit from this changes by not having to switch import syntaxes when switching between environemnts (emulator, testnet).

## Questions and Discussion Topics
Open questions on the import syntax.
