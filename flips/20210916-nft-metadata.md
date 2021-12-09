# Non-Fungible Token Metadata

| Status        | Proposed |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [636](https://github.com/onflow/flow/pull/636)                                                                                       |
| **Author(s)** | Bjarte Karslen (bjartek@find.xyz), Deniz Mert Edincik (Deniz@edincik.com), Brian Dilley (briandilley@briandilley.com) |
| **Sponsor**   | Peter Siemens (peter@dapperlabs.com)                                                                                                 |
| **Updated**   | 2021-12-06                                                                                                                           |


## Objective
This proposal will make it possible to create generic solutions that will interoperate 
through views and not hard-coded NFT types. Want to create a marketplace? If you know 
how to display a certain Type that defines a sellable Item, you can do so. And it will 
work for any contract and any resource, not just a single one. 

## Motivation
Currently there is no standard for defining NFT/resource metadata. At best, most implementations 
employ a simple `{String: AnyStruct}` dictionary. Due to the various methods that NFT 
authors use, it’s hard / impossible to create applications that use NFTs whether it be 
for something as simple as viewing them or as complex as integrating them into a game 
or application.

If you want to create an Auction contract on Flow today, you have to hardcode all the NFTs 
you want to support. This will often lead to duplicated contracts and code and just lots 
of things to maintain. This standard will enable you to create a single Auction contract 
and define the Type of views you need to expose in your NFT in order to support the contract. 
So it will enable a design-by-contract pattern where the creator of a contract can define 
the views it requires and a NFT can tell what views they export. 

All NFTs and contracts using NFTs on Flow are affected by this problem. This is most 
visible in the number of contracts that Viv3 needs in order to support all their different 
sellable items. With all the oncoming marketplaces/auction houses and things like that 
coming to Flow, a good standard for NFTs will help everybody. 

## User Benefit
We feel that a standard that authors can implement that enables easy consumption of metadata 
will lead to more applications that integrate NFTs. This will make NFTs intrinsically more 
useful and valuable to the end users holding the NFTs.

A user will be much more likely to transfer their NFT to other marketplaces and sell their NFT 
in different ways with this solution. Without it, all marketplaces need to hardcode support 
for all NFTs directly. 

It will also open up the possibility to standardize on some shared structs like Royalty 
and SaleItem/Auction.

## Design Proposal

The core of this proposal is to add the following interface and have the NFT resource implement it
```
pub resource interface ViewResolver {
  pub fun getViews() : [Type]
  pub fun resolveView(_ view:Type): AnyStruct
}
```

We will also add default implementations for these methods so that no compatibility will be broken 
for existing NFT solutions. The new NFT resource could look something like this: 
```
pub resource NFT: INFT, ViewResolver {
    pub let id: UInt64
    pub fun getViews(): [Type] {
       return []
    }
    pub fun resolveView(_ type: Type): AnyStruct {
        return nil
    }
}
```

We propose that all metadata be expressed in Cadence types. The `pub fun getViews(): [Type]` 
method allows for discovery of the various types of metadata supported by the NFT by returning a `Type` 
for each supported type of metadata. An instance of any supported type could then be retrieved by 
calling the `pub fun resolveView(_ type: Type): AnyStruct` method passing the desired type in as 
an argument.

This proposal by no means precludes the use of member variable on the NFT resource itself. In fact,
ideally, all immutable data for an NFT is stored as immutable members of the NFT resource, and views 
are resolved and created by accessing those immutable members.

### Supporting other resources besides NFTs
In order to support any other resource and resource collections, like marketplaces and fungible tokens, the following new interface is proposed:
```
pub resource interface ViewResolverCollection {
    pub fun borrowViewResolver(id: UInt64): &{ViewResolver}
    pub fun getIDs(): [UInt64]
}
```

This will allow any collection to be exposed as view resolvable.

For single resources that are stored as is like a fungible token or a profile contract you can just implement the `ViewResolver` interface directly.
 
### Basic Views

The most basic example is having `String` be a view. Think of this as `toString()` in Java or a `Stringer` implementation in Go. It is a way to view your NFT as a string. 

The bigger brother of `String` would be `Display`. Here is how you could display an NFT in a wallet, marketplace or other user-facing application:
```
pub struct Display{
    pub let name: String
    pub let thumbnail: String
    pub let description: String
		
    // This is a field describing the source of this NFT. This could be Versus, Evolution, Chainmonsters, etc.
    pub let source: String

    init(name:String, thumbnail: String, description: String, source:String) {
        self.source=source
        self.name=name
        self.thumbnail=thumbnail
        self.description=description
    }
}
```

The data above is taken from what the [Blocto wallet](https://blocto.portto.io/) uses to display an NFT in their application.
 - Would it be wise to add some sort of link here to be able to know how to navigate to the source page for this resource?

### Other examples

For example, an NFT artwork implementation may want to allow for image data to be retrieved 
as an `IPFSImage` struct:
```
struct IPFSImage {
    let url: String
    let ipfsHash: String
    let width: UInt32
    let height: UInt32
    let contentType: String
}
```

It could then be retrieved from the NFT using the following:
```
import ArtNFT from 0x01010101
   
let artwork = nft.resolveView(Type<ArtNFT.IPFSImage>()) as? ArtNFT.IPFSImage
```

Another suggestion for media from FIND is:
```
pub struct Media {
    pub let data: String
    pub let contentType: String
    pub let protocol: String

    init(data:String, contentType: String, protocol: String) {
        self.data=data
        self.protocol=protocol
        self.contentType=contentType
    }
}
```
Examples here are:

An image on IPFS:
data: QmRAQB6YaCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4
contentType: image/jpeg
protocol: ipfs

An HTTP image:
data: https://test.find.xyz/find.png
contentType: image/jpeg
protocol: http

An on-chain image:
data: data:image/png;base64,SOMEPNGDATAURI/wD/
contentType: image/jpeg
protocol: data

The problem here is that the on-chain image can be quite large and you might not want to resolve those every time you fetch the media view. So what if we made a method on the struct that allowed you to retrieve the data/content instead?


The same NFT author may also want to expose other metadata about the artwork:
```
struct Artwork {
    let name: String
    let dateCreated: UInt64
    let medium: String
    let artistName: String
}

// ...

let artwork = nft.resolveView(Type<ArtNFT.Artwork>()) as? ArtNFT.Artwork
```

If an art piece had more than one image then they could be retrieved using an array type as such:
```
import ArtNFT from 0x01010101
   
// ...
   
let images = nft.resolveView(Type<[ArtNFT.IPFSImage]>()) as? [ArtNFT.IPFSImage]
```

Or if a more structured approach is desired the NFT author may want to create a composite struct:
```
struct ArtworkDetail {
    let artwork: Artwork
    let primaryImage: IPFSImage
    let secondaryImage: IPFSImage
}
```

Because this proposal relies on the Cadence type system, adding new view types for exposing various
types of metadata is trivial and very robust. A few examples that one might use as a view type are:

```
// an image
pub struct IPFSImage {
    pub let url: String
    pub let ipfsHash: String
    pub let width: UInt32
    pub let height: UInt32
    pub let contentType: String
}

// a video
pub struct IPFSVideo {
    pub let url: String
    pub let ipfsHash: String
    pub let width: UInt32
    pub let height: UInt32
    pub let codec: String
    pub let container: String
    pub let contentType: String
}

// a file stored on the blockchain
pub struct Mime {
    pub let type: String
    pub let bytes: [UInt8]
}

// a location on the planet
pub struct GeoPoint {
    pub let lat: UFix64
    pub let lng: UFix64
    pub let projection: String
}

// a file hosted by a web server with a hash for verifying it's contents
pub struct URLWithHash {
    pub let url: String
    pub let hash: String?
    pub let hashAlgo: String?
}
```

### Royalty 

This particular problem has been discussed extensively. The following suggestion was agreed upon
by @bjartek, @rheaplex and @dete. 

```
  /// a struct interface that describes how to calculate royalty 
	pub struct interface Royalty {

		/// if nil cannot pay this type
		/// if not nil withdraw that from main vault and put it into distributeRoyalty 
		pub fun calculateRoyalty(type:Type, amount:UFix64) : UFix64?

		/// call this with a vault containing the amount given in, calculate royalty and it will be distributed accordingly
		pub fun distributeRoyalty(vault: @FungibleToken.Vault) 

		/// generate a string that represents all the royalties this NFT has for display purposes
		pub fun displayRoyalty() : String?  

	}
```	

## Drawbacks
This standard does not include any required ways to store the metadata, and therefore some of the metadata 
could be dynamic depending on how the NFTs are authored. This is a double edged sword; it allows for greater 
flexibility, but also means that some of the metadata returned by an NFT’s view may not be immutable. This, 
however, may be desirable. For instance, a game may allow an NFT to be used as a character in the game and 
expose a view that exposes a member containing the character's health.

## Alternatives Considered
A number of alternatives were discussed [here](https://github.com/onflow/flow-nft/issues/9).

## Performance Implications
Due to the potentially dynamic nature of this proposal, the methods that return metadata views can be implemented 
in any way that the NFT author sees fit which could lead to some non-performant implementations.

## Dependencies
This proposal builds on the existing NFT interface defined [here](https://github.com/onflow/flow-nft).

## Engineering Impact

Adhering to this standard will require contract authors to implement a few new methods as part of their NFT. 
They will also likely need to import standard types into their contracts.

There may also need to be a committee, process, and code repository put in place for managing the standard metadata 
types.

## Best Practices
NFT authors should do their best to implement as many views from the standard metadata set as appropriate for 
their application. 

NFT authors should document the views they support and contract creators should document the views they require. 
It could be worth exploring a design-by-contract paradigm to formalize this in a forthcoming FLIP.

## Tutorials and Examples
The following examples show the flexibility of this proposal with varying implementations.

### Example 1
The Find project is going to be using metadata as lookup and index points. The project is available here:
https://github.com/findonflow/find

### Example 2
This example shows how you might implement this specification with the ability to add new view types to your NFT 
contract after it has already been published through the use of a `ViewResolver` pattern.
[Gist available here](https://gist.github.com/briandilley/962e94682b7945d882fcd99702011ea4),
[Playground available here](https://play.onflow.org/a71203b9-a03a-47f9-ab70-7285fcf4c56a?type=account&id=0)

## Compatibility
Provided support for default methods on interfaces is added to Cadence, there are no backwards compatibility issues. 
Short of that, NFT authors will need to add implementations for the new methods added to their contracts.

## User Impact
This feature can be rolled out with no fear of changes to the user. However documentation should be provided on how 
they can change their contracts and add views. 

## Related Issues
Defining how metadata stored is out of the scope of this proposal.

## Prior Art
None

## Questions and Discussion Topics
What post/pre conditions would be needed in the NFT methods (if any)?
Are the arguments strong enough?
Are more examples needed here or are the arguments strong enough?

