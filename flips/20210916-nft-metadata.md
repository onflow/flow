# Non Fungible Token Metadata

## Objective
This proposal will make it possible to create generic solutions that will interoperate 
through views and not hard coded NFT types. Want to create a Marketplace? If you know 
how to display a certain Type that defines a sellable Item you can do so. And it will 
work for any contract, not just a single one. 

## Motivation
Currently there is no standard for defining NFT metadata. At best, most implementations 
employ a simple `{String: AnyStruct}` dictionary. Due to the various methods that NFT 
authors use it’s hard / impossible to create applications that use NFTs whether it be 
for something as simple as viewing them or as complex as integrating them into a game 
or application.

If you want to create an Auction contract on Flow today you have to hardcode all the NFTs 
you want to support. This will often lead to duplicated contracts and code and just lots 
of things to maintain. This standard will enable you to create a single Auction contract 
and define the Type of views you need to expose in your NFT in order to support the contract. 
So it will enable a design-by-contract pattern where the creator of a contract can define 
the views it requires and an NFT can tell what views they export. 

All NFTs and contracts using NFTs on flow are affected by this problem. This is most 
visible in the number of contracts that Viv3 needs in order to support all their different 
sellable items. With all the oncoming marketplaces/auction houses and things like that 
coming to flow a good standard for NFTs will help everybody. 

## User Benefit
We feel that a standard that authors can implement that enables easy consumption of metadata 
will lead to more applications that integrate NFTs. This will make NFTs intrinsically more 
useful and valuable to the end users holding the NFTs.

A user will be much more likely to transfer his NFT to other marketplaces and sell his NFT 
in different ways with this solution. Without it all marketplaces need to hardcode support 
for all NFTs directly. 

It will also open up the possibility to standardize on some shared structs like Royalty 
and SaleItem/Auction aso.

## Design Proposal

The core of this proposal is to add the following two new methods to the INFT interface:
```
pub fun availableViews(): [Type]
pub fun resolveView(_ type: Type): AnyStruct?
```

We will also add default implementations for these methods so that no compatibility will be broken 
for existing NFT solutions. The new NFT interface could look something like this: 
```
pub resource NFT: INFT {
    pub let id: UInt64
    pub fun availableViews(): [Type] {
       return []
    }
    pub fun resolveView(_ type: Type): AnyStruct? {
        return nil
    }
}
```
We propose that all metadata be expressed in cadence types. The `pub fun availableViews(): [Type]` 
method allows for discovery of the various types of metadata supported by the NFT by returning a `Type` 
for each supported type of metadata. An instance of any supported type could then be retrieved by 
calling the `pub fun resolveView(_ type: Type): AnyStruct?` method passing the desired type in as 
an argument.

This proposal by no means precludes the use of member variable on the NFT resource itself, in fact 
ideally all immutable data for an NFT is stored as immutable members of the NFT resource and views 
are resolved and created by accessing those immutable members.

### Usage Scenarios

### Basic Example

For example, an NFT implementation for artwork may want to allow for the image data to be retrieved 
as an `HostedImage` struct:
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

The same NFT author may also want expose other metadata about the artwork:
```
struct Artwork {
    let name: String
    let dateCreated: UInt64
    let medium: String
    let artistName: String
}

...

let artwork = nft.resolveView(Type<ArtNFT.Artwork>()) as? ArtNFT.Artwork
```

If an art piece had more than one image then they could be retrieved using an array type as such:
```

   import ArtNFT from 0x01010101
   
   ...
   
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

### Royalty Example

Another common issue that needs to be solved is Royalty. One option here is to use a structs like
```
    pub struct Royalties{
        pub let royalty: [Royalty]
        init(royalty: [Royalty]) {
            self.royalty=royalty
        }
    }


    pub enum RoyaltyType: UInt8 {
        pub case fixed
        pub case percentage
    }

    pub struct Royalty{
        pub let wallet:Capability<&{FungibleToken.Receiver}>
        pub let cut: UFix64

        //can be percentage
        pub let type: RoyaltyType

        init(wallet:Capability<&{FungibleToken.Receiver}>, cut: UFix64, type: RoyaltyType) {
            self.wallet=wallet
            self.cut=cut
            self.type=type
        }
    }
```

### Versus

The versus project at versus.auction has the following royalty that could easily be reused by others. 

```
pub struct Art.Metadata {
        pub let name: String
        pub let artist: String
        pub let artistAddress:Address
        pub let description: String
}

pub struct Art.Editioned {
        pub let edition: UInt64
        pub let maxEdition: UInt64
}

pub struct ViewPointer{
        pub let collection: Capability<&{NonFungibleToken.CollectionPublic}>
        pub let id: UInt64
        pub let view: Type

        init(collection: Capability<&{NonFungibleToken.CollectionPublic}>, id: UInt64, view:Type) {
            self.collection=collection
            self.id=id
            self.scheme=scheme
        }

        pub fun resolve() : AnyStruct {
            return self.collection.borrow()!.borrowNFT(id: self.id).resolveView(self.view)

        }
    }

pub struct Base64Image{
  pub let content: String //base64 encoded image url
}
```
The view pointer can be used to share views between editioned NFTs. For Versus this would be 
the onChain content blob. 

If multiple NFTs expose royalties in this way and contract owners start to honor that it could be very 
positive for the Flow ecosystem. 

Using interfaces as Views  can lead to some very powerful implementations. You can have multiple different
structs implement a `Person` interface and then have a method that resolves a list of Person to get them all. 

## Drawbacks
This standard does not include any required ways to store the metadata, and therefore some of the metadata 
could be dynamic depending on how the NFTs are authored. This is a double edged sword, it allows for greater 
flexibility, but also means that some of the metadata returned by an NFT’s view may not be immutable. This, 
however, may be desirable. For instance, a game may allow an NFT to be used as a character in the game and 
expose a view that exposes a member containing the character's health.

## Alternatives Considered
A number of alternatives were discussed [here](https://github.com/onflow/flow-nft/issues/9)

## Performance Implications
Due to the potentially dynamic nature of this proposal, the methods that return metadata views can be implemented 
in any way that the NFT author sees fit which could lead to some non-performant implementations.

## Dependencies
This builds on the existing NFT interfaces.

## Engineering Impact

Adhering to this standard will require contract authors to implement a few new methods as part of their NFT. 
They will also likely need to import standard types into their contracts.

There may also need to be a committee, process, and code repository put in place for managing the standard metadata 
types.

## Best Practices
NFT Authors should do their best to implement as many views from the standard metadata set as appropriate for 
their application. 

NFT authors should document the views they support and contracts creators should document the views they require. 
It could be worth exploring a design-by-contract paradigm to formalize this in a forthcoming FLIP.

## Tutorials and Examples
The following examples show the flexibility of this proposal with varying implementations.

### Example one:
https://github.com/bjartek/flow-nfmt/tree/types is an example of how this standard can be implemented. When you 
create a GenericNFT you send in the types you want to support as views. These types then become content addressable 
using the form `<address>/<collection>/<id>/<type identifier>`

A concrete example of this would be:
`0xf8d6e0586b0a20c7/nft/0/A.f8d6e0586b0a20c7.NFTMetadata.Editioned`

### Example two:
This example shows how you might implement this specification with the ability to add new view types to your NFT 
contract after it has already been published through the use of a `ViewResolver` pattern.
[Gist available here](https://gist.github.com/briandilley/962e94682b7945d882fcd99702011ea4),
[Playground available here](https://play.onflow.org/a71203b9-a03a-47f9-ab70-7285fcf4c56a?type=account&id=0)

## Compatibility
Provided support for default methods on interfaces is added to cadence there are no backwards compatibility issues. 
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

