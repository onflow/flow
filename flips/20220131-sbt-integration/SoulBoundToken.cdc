/**

## The Flow Soul-Bound Token standard

## `SoulBoundToken` contract interface

The interface that all soul-bound token contracts could conform to.
If a user wants to deploy a new sbt contract, their contract would need
to implement the SoulBoundToken interface.

Their contract would have to follow all the rules and naming
that the interface specifies.

## `SBT` resource

The core resource type that represents a SBT in the smart contract.

## `Collection` Resource

The resource that stores a user's SBT collection.
It includes a few functions to allow the others to deposit the SBT easily but 
withdraw function is not included.

## `Receiver` resource interfaces

These interfaces declare functions with some pre and post conditions
that require the Collection to follow certain naming and behavior standards.

They are separate because it gives the user the ability to share a reference
to their Collection that only exposes the fields and functions in one or more
of the interfaces. It also gives users the ability to make custom resources
that implement these interfaces to do various things with the tokens.

By using resources and interfaces, users of SBT smart contracts can deposit
tokens to peers, without having to interact with a central ledger
smart contract.


*/

// The main SBT contract interface. Other SBT contracts will
// import and implement this interface
//
pub contract interface SoulBoundToken {

    // The total number of tokens of this type in existence
    pub var totalSupply: UInt64

    // Event that emitted when the SBT contract is initialized
    //
    pub event ContractInitialized()

    // Event that emitted when a token is deposited to a collection.
    //
    // It indicates the owner of the collection that it was deposited to.
    //
    pub event Deposit(id: UInt64, to: Address?)

    // Interface that the SBTs have to conform to
    //
    pub resource interface ISBT {
        // The unique ID that each SBT has
        pub let id: UInt64
    }

    // Requirement that all conforming SBT smart contracts have
    // to define a resource called SBT that conforms to ISBT
    pub resource SBT: ISBT {
        pub let id: UInt64
    }

    // Interface to mediate deposits to the Collection
    //
    pub resource interface Receiver {

        // deposit takes a SBT as an argument and adds it to the Collection
        //
        pub fun deposit(token: @SBT)
    }

    // Interface that an account would commonly 
    // publish for their collection
    pub resource interface CollectionPublic {
        pub fun deposit(token: @SBT)
        pub fun getIDs(): [UInt64]
        pub fun borrowSBT(id: UInt64): &SBT
    }

    // Requirement for the the concrete resource type
    // to be declared in the implementing contract
    //
    pub resource Collection: Receiver, CollectionPublic {

        // Dictionary to hold the SBTs in the Collection
        pub var ownedSBTs: @{UInt64: SBT}

        // deposit takes a SBT and adds it to the collections dictionary
        // and adds the ID to the id array
        pub fun deposit(token: @SBT)

        // getIDs returns an array of the IDs that are in the collection
        pub fun getIDs(): [UInt64]

        // Returns a borrowed reference to a SBT in the collection
        // so that the caller can read data and call methods from it
        pub fun borrowSBT(id: UInt64): &SBT {
            pre {
                self.ownedSBTs[id] != nil: "SBT does not exist in the collection!"
            }
        }
    }

    // createEmptyCollection creates an empty Collection
    // and returns it to the caller so that they can own SBTs
    pub fun createEmptyCollection(): @Collection {
        post {
            result.getIDs().length == 0: "The created collection must be empty!"
        }
    }
}
