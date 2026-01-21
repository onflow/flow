Comment Period throughout Flip-Fest (ends Oct 30)

# Team Coelacanth's Flip-Fest NFT Standard

| Status        | Proposed      |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [635](https://github.com/onflow/flow/pull/635)       |
| **Author(s)** | Chance Santana-Wees (figs999@gmail.com)	       |
| **Updated**   | 2021-09-17                                           |

## Objective

Flip-fest issue #16 "New Standard: NFT metadata"

NFTs are more than just numbers and bytes — at their best, they are rich 
representations of digital goods that people around the world can fall in 
love with. The current Flow NFT interface, however, does not include a metadata 
standard that allows these representations to flourish. NFTs should be able to 
include structured data, images, videos and other types of data. What 
modifications should be made to the NFT interface to support a variety of 
metadata types?

## Motivation

In the NFT Metadata discussion thread, the primary concerns that contributors have brought up are the competing needs for a flexible but parsable schema, immutable and mutable metadata, and storage cost minimization.

In order to address these concerns the following design choices were made:
* NFT Metadata Schema has been reduced to an update-able tag system, which allows NFTs to conform to multiple schemas and add conformance to new schemas as standards evolve over time.
* Immutable and Mutable metadata are both supported in this implementation. True immutability is ensured in Immutable implementations by defining access code in default contracts that cannot be modified by developers.
* Mutable metadata will utilize Capabilities to maintain pointers to external data, which allows multiple resources to point to the same large binary data (upload once for all that share that metadata)
* Usage of Capabilities in Mutable metadata elements allows the metadata data to be stored in the holder's account or in the developer's account, allowing devs the flexibility of subsidizing storage costs when using mutable metadata.
* Mutable type image metadata can be made "semi-immutable" by using the PNG_RemoteDefaultImage default implementation, allowing some ensurance of immutability while leveraging the capabilities of the Mutable metadata interface.

## User Benefit

A Metadata standard would allow off-chain systems to easily understand
how to parse and display NFT metadata. 

This would allow for exchanges and showcase clients to render the NFTs
pertinent data in an expected and consistent manner, regardless of the
metadata needs of the NFTs core project.

## Design Proposal

This Flip is for a new standard which adds client and contract parsable meta-data
to the default NFT interface. This is accomplished via a new default contract
"MetaDataUtils".

```
pub contract MetaDataUtil {
    //Utilizing MIME types as existing standard, this will allow metadata to be more easily parsed by a browser
    //Any struct type that conforms to the HasMetaData interface must use MIME type "application/flow+Schema"
    //Any other non-conformant type should use a MIME type with the following syntax "application/flow+T" where T is the Type.
    pub struct DataType {
        //This should be an IANA MIME type
        pub let MIME : String
        //Is the data a link to a file on an external service (ipfs for instance)
        pub let isLink : Bool
        //if the data is compressed or a link, this IAMA MIME type of the actual final data (after download/decompression)
        pub let innerMIME : String?

        init(MIME : String, isLink : Bool, innerMIME : String?)  {
            self.MIME = MIME
            self.isLink = isLink
            self.innerMIME = innerMIME
        }
    }

    //Interface for Partial MetaDataElement implementation.
    pub struct interface ITaggedMetaData {
        pub fun getTags() : [String]
        pub let id: UInt64
    }

    pub struct interface IMetaDataProvider {
        pub fun getData(id: UInt64) : AnyStruct
        pub fun getDataType(id: UInt64) : DataType
        pub fun getTags(id: UInt64) : [String]
    }

    pub struct interface IImmutableMetaData {
        pub let data: AnyStruct
        pub let type: DataType
    }

    pub struct interface IMutableMetaData {
        pub let dataProvider: Capability<&{IMetaDataProvider}>
    }
    
    // Interface that the NFTs have to conform to
    //
    pub struct interface HasMetaData {
        pub let metadata: MetaDataUtil.MetaDataHolder?
    }

    //Solid version of MetaDataHolder that can be passed around or returned in script call for use off-chain
    pub struct MetaData {
        pub let data : AnyStruct
        pub let tags : [String]
        pub let type : DataType
        pub let mutable : Bool

        init(data : AnyStruct, type : DataType, tags : [String], mutable : Bool) {
            self.data = data
            self.type = type
            self.tags = tags
            self.mutable = mutable
        }
    }

    pub struct SchemaElement {
        pub let requiredTags : [String]
        pub let validMIMETypes : [String]
        pub let schemaData : [MetaData]
        pub let subSchema: Schema?
        init(requiredTags : [String], validMIMETypes : [String], subSchema: Schema?) {
            self.requiredTags = requiredTags
            self.validMIMETypes = validMIMETypes
            self.schemaData = []
            self.subSchema = subSchema
        }
    }

    pub struct Schema {
        pub let elements : [SchemaElement]
        init(elements : [SchemaElement]) {
            self.elements = elements
        }
    }

    pub enum SchemaRetrievalMode : UInt8 {
        //Schema always is returned, even if empty
        pub case ALLOW_NONE
        //Schema is returned if any MetaData is found
        pub case REQUIRE_ANY
        //Schema is returned only if all SchemaElements are found
        pub case REQUIRE_ALL
        //Schema is returned if any MetaData is found, but only if each SchemaElement has 1 or less matches
        pub case SINGLE_DATA_ANY
        //Schema is only returned if exactly one MetaData is found per SchemaElement
        pub case SINGLE_DATA_ALL
    }

    pub struct MetaDataHolder {
        access(self) let elements : [MetaDataElement]

        init(metaData : [MetaDataElement]?) {
            self.elements = metaData ?? []
        }

        pub fun getFullMetaData() : [MetaData] {
            var elements : [MetaData] = []
            for element in self.elements {
                elements.append(element.toMetaData(subSchema: nil))
            }
            return elements
        }

        pub fun getFullSchema() : Schema {
            let elements : [SchemaElement] = []
            
            for element in self.getFullMetaData() {
                let schemaElement = SchemaElement(
                    requiredTags: element.tags,
                    validMIMETypes : [element.type.MIME], 
                    subSchema: nil
                )
                schemaElement.schemaData.append(element)
                elements.append(schemaElement)
            }

            return Schema(elements: elements)
        }

        pub fun getMetaDatasByTag(tag : String) : [MetaData] {
            var taggedElements : [MetaData] = []
            for element in self.elements {
                if (element.hasTag(tag : tag)) {
                    taggedElements.append(element.toMetaData(subSchema: nil))
                }
            }
            return taggedElements
        }

        pub fun getMetaDatasBySchemaElement(schemaElement: SchemaElement) : [MetaData] {
            let matchingElements : [MetaData] = []
            for element in self.elements {
                if(element.hasAllTags(requiredTags: schemaElement.requiredTags) && element.conformsToTypeRequirements(validMIMETypes: schemaElement.validMIMETypes)) {
                    matchingElements.append(element.toMetaData(subSchema: schemaElement.subSchema))
                }
            }

            return matchingElements
        }

        //When successfull, this method returns the schema object with the MetaData filled into the SchemeElements
        //If the NFTs metadata does not conform to the schema with the chosen SchemaRetrievalMode, it returns nil
        //Checking the return of this method to see if it is nil can be used to check if the NFT conforms to the required Schema
        pub fun retrieveSchemaData(schema : Schema, retrievalMode : SchemaRetrievalMode) : Schema? {
            var foundAll = true
            var foundAny = false
            var allSingle = true
            for schemaElement in schema.elements {
                let found = self.getMetaDatasBySchemaElement(schemaElement: schemaElement)
                schemaElement.schemaData.appendAll(found)

                if(found.length > 0) {
                    foundAny = true
                    if(found.length > 1) {
                        allSingle = false
                    }
                } else {
                    foundAll = false
                }
            }

            switch retrievalMode {
                case SchemaRetrievalMode.SINGLE_DATA_ALL:
                    if(!foundAll && !allSingle) {
                        return nil
                    }
                case SchemaRetrievalMode.SINGLE_DATA_ANY:
                    if(!foundAny && !allSingle) {
                        return nil
                    }
                case SchemaRetrievalMode.REQUIRE_ALL:
                    if(!foundAll) {
                        return nil
                    }
                case SchemaRetrievalMode.REQUIRE_ANY:
                    if(!foundAll) {
                        return nil
                    }
                default:
                    break
            }

            return schema
        }
    }

    //Struct wrapper around metadata implemenations.
    //Because this struct is defined in default contract, users can rest assured that the code that accesses their metadata cannot be altered.
    pub struct MetaDataElement {
        pub let metaData : {ITaggedMetaData}

        init (metadata : {ITaggedMetaData}) {
            //This forces metadata to conform to expected implementations of "ITaggedMetaData,IMutableMetaData" or "ITaggedMetaData,IImmutableMetaData"
            if (!metadata.isInstance(Type<{IMutableMetaData}>()) && !metadata.isInstance(Type<{IImmutableMetaData}>())) {
                panic("Invalid Metadata Type")
            }
            self.metaData = metadata
        }

        pub fun getData() : AnyStruct {
            let m1 = self.metaData as? {IMutableMetaData}
            if(m1 != nil) {
                return m1!.dataProvider.borrow()!.getData(id: self.metaData.id)
            }
            //Immutable data directly references storage via default contract code, ensuring it cannot be altered by contract upgrade
            let m2 = self.metaData as? AnyStruct{IImmutableMetaData}
            if(m2 != nil) {
                return m2!.data
            }

            //this cannot be reached
            panic("Invalid MetaData")
        }

        pub fun getDataType() : DataType {
            let m1 = self.metaData as? {IMutableMetaData}
            if(m1 != nil) {
                return m1!.dataProvider.borrow()!.getDataType(id: self.metaData.id)
            }
            //Immutable data directly references storage via default contract code, ensuring it cannot be altered by contract upgrade
            let m2 = self.metaData as? AnyStruct{IImmutableMetaData}
            if(m2 != nil) {
                return m2!.type
            }

            //this cannot be reached
            panic("Invalid MetaData")
        }

        pub fun getTags() : [String] {
            //ITaggedMetaData relies on function to return tags for both immutable and mutable. This allows contract upgrades to effect tags.
            return self.metaData.getTags()
        }

        pub fun hasTag(tag : String) : Bool {
            return self.metaData.getTags().contains(tag)
        }

        pub fun hasAllTags(requiredTags : [String]) : Bool {
            let tags : [String] = self.metaData.getTags()
            for tag in requiredTags {
                if(!tags.contains(tag)) {
                    return false
                }
            }

            return true
        }

        pub fun conformsToTypeRequirements(validMIMETypes : [String]) : Bool {
            if(validMIMETypes.length == 0) {
                return true
            }
            let dataType = self.getDataType()
            let mime = dataType.innerMIME ?? dataType.MIME
            for type in validMIMETypes {
                if(type == mime) {
                    return true
                }
            }
            return false
        }

        pub fun toMetaData(subSchema: Schema?) : MetaData {
            var dataType = self.getDataType()
            var data = self.getData()
            var subData = data as? {HasMetaData}
            if(subData != nil && subData!.metadata != nil) {
                dataType = DataType(MIME: "application.flow+Schema", isLink: false, innerMIME: nil)
                if(subSchema == nil) {
                    data = subData!.metadata!.getFullSchema()
                } else {
                    data = subData!.metadata!.retrieveSchemaData(schema: subSchema!, retrievalMode: SchemaRetrievalMode.ALLOW_NONE)
                }
            }
            return MetaData(data: self.getData(), type: dataType, tags: self.getTags(), mutable: self.isMutable())
        }

        //This method can be checked to determine if the associated metadata is able to be altered by developers
        pub fun isMutable() : Bool {
            return self.metaData.isInstance(Type<AnyStruct{IMutableMetaData}>())
        }
    }
}
```

### General Overview
* Every NFT possesses a MetaDataHolder property which acts as a wrapper around MetaDataElements
* MetaDataElements are wrapped custom structs that are created at the time the NFT is minted.
* MetaDataElements cannot be added after the NFT is minted, but Mutable elements can allow data to be modifiable.
* MetaDataElements are organized by String tags, and each metadata element may have multiple tags. This allows NFTs to conform to multiple tag schemas.
* Multiple MetaDataElements can share a tag. This is useful for broad catergories of metadata such as "equipment", but can also be used to provide multiple media types for the same tag to conform to varying schema requirements.

### MetaDataElements
MetaDataElements are wrappers around two possible types of structs, one of which is immutable and the other of which is Mutable.
MetaDataElements possess 3 accessible functions that access stored properties 
* The getData function can return an object of any AnyStruct type, and contains the actual metadata itself
* The getDataType function returns a DataType object that describes the MIME type of the object for reference by off-chain systems
  * MIME type is used as it is a widely used standard that can already be understood by browsers
  * DataTypes also contain isLink, which is true if the data element describes a link to externaly hosted data.
  * innerMIME is used to describe the final data type if the data blob should be decompressed or downloaded by the client 

#### IImmutableElements
Immutable elements can use default types or be defined in custom structs that implement ITaggedMetaData and IImmutableMetaData. 
* Defining a custom class allows the data elements to be immutable while allowing a developer to upgrade the contract that defines the struct to alter the tags.

#### IMutableElements
Mutable elements store Capability pointers to IMetaDataProvider instances that can be stored anywhere.
* Mutable elements can be used for metadata that can be modified, such as for leveling up a character.
* Mutable elements can also be used for metadata that is shared between multiple NFTs, to minimize redundant data storage.
  * A Side-effect (benefit?) here is that if the instance is stored in a contract in the developers account, the developer will need to cover the metaData storage costs instead of the NFT holder.

#### HasMetaData Interface
It is possible to nest metadata by defining a struct that conforms to the HasMetaData interface. When a metadata element conforms to HasMetaData, it allows that type to be queried by the Schema system and allows the client to receive full information about the sub-object as if it were another NFT.

### Schema System
Schema, SchemaElement, and SchemaRetrievalMode are data types primarily for off-chain accessing of MetaData, although it may be useful for certain on-chain functionality
* MetaDataHolder.retrieveSchemaData can be used to retrieve solid copies of the NFTs metadata for use off-chain via script
* If the Schema complies, MetaDataHolder.retrieveSchemaData returns a Schema object which contains the MetaData in its elements[?].schemaData properties
* If compliance fails, the method returns nil

The schema system allows dApps to attempt to access the metadata of an NFT by providing a known standard. SchemaRetrievalMode allows the caller to require varying degrees of schema compliance.
Schemas can allow multiple valid MIME types for the data allowing NFTs to have flexibility in their data storage types for media files.
Schemas can require multiple tags per element, which can allow interesting functionality for certain applications, such as requiring a \["Equipment","Helmet"].
Because MetaDataElements can possess multiple tags, it allows NFT developers to update their NFTs MetaData to conform to a variety of schemas with the same data.

	For instance, if DEX-A expects NFTs to comply with:
	-tag: ["name"]
	-tag: ["text"]
	-tag: ["img"]

	while Dex-B expects NFTs to comply with:
	-tag: ["dc:title"]
	-tag: ["dc:description"]
	-tag: ["dc:source"]
	
	An NFT can comply with both by providing elements tagged:
	["name","dc:title"]
	["text","dc:description"]
	["img","dc:source"]

#### Schema Tagging Standards
Using metadata tags is a well established practice, and lends itself well to conforming to existing standardized tagging ontologies.
CommonMetaDataElements contains a definition for two elements that allow NFTs to use tagging standards defined in rdf format: TagNamespace and DCNamespace

As a standard, any metadata element that has the tag "TagNamespace" or "ns" should be used to define an rdf style tag namespace prefix that is used by the other metadata elements on the nft. These namespaces are strings ("text/plain" mime type) that have a format "ns: uri" where ns is a short prefix and uri is the web location that defines the tagging standard.

DCNamespace specifies that the NFT uses metadata tags that conform to the common DublinCore /elements/1.1/ tagging standard by providing a namespace definition of "dc: http://purl.org/dc/elements/1.1/". All of the other element structs defined in CommonMetaDataElements have tags that conform to the DublinCore elements namespace.

There are many tagging ontology namespace standards in existence, and by using the TagNamespace element, developers can specify that their NFTs support any of their choice.

### Modifications to Standard
The only modification to the existing NFT interface is the addition of the metadata property:
```
// Interface that the NFTs have to conform to
//
pub resource interface INFT {
	// The unique ID that each NFT has
	pub let id: UInt64
	pub let metadata: MetaDataUtil.MetaData?
}

// Requirement that all conforming NFT smart contracts have
// to define a resource called NFT that conforms to INFT
pub resource NFT: INFT {
	pub let id: UInt64
	pub let metadata: MetaDataUtil.MetaData?
}
```

### Other Contracts

Additionally, this standard proposes two more default contracts that include some common DataTypes Metadata implementations.

MIME includes the most common datatypes for NFT metadata and can be used as reference for how developers can create their own.
The vast majority of generic client-facing metadata will conform to the TextPlain, HttpLink, and ImagePNG types.
```
pub contract MIME {
    pub let TextPlain : MetaDataUtil.DataType
    pub let LinkedPNG : MetaDataUtil.DataType
    pub let ImagePNG : MetaDataUtil.DataType
    pub let Numeric : MetaDataUtil.DataType
    pub let AnyStruct : MetaDataUtil.DataType

    init() {
        self.TextPlain = MetaDataUtil.DataType("text/plain",false,nil)
        self.LinkedPNG = MetaDataUtil.DataType("text/plain",true,"image/png")
        self.ImagePNG = MetaDataUtil.DataType("image/png",false,nil)
        //Not an official MIME type, but can be used for numeric data that will be returned in cadence object format
        self.Numeric = MetaDataUtil.DataType("application/cadence+Number",false,nil)
        //Not an official MIME type, but can be used for arbitrary data that will be returned in cadence object format
        self.AnyStruct = MetaDataUtil.DataType("application/cadence+AnyStruct",false,nil)
    }
}
```

CommonMetaDataElements contains example implementations that can be used for many common metadata elements.
The tags that this default contract returns for these common implementations should be modified by further Flips in the event that common schemas have changed as time passes.
The three most common metadata elements are Name, Description, and Image. These can all be added to an NFT by using common implementations.

DefaultName and DefaultDescription are self explanatory. They allow a string to be added with the common tags of ["name", "title"] and ["description"].

Images can be added as PNGs to an NFT by using either the PNG_DefaultImage or PNG_RemoteDefaultImage implementations.

PNG_DefaultImage stores the image locally as a unique copy of the bytes. This is good for unique NFTs that require immutability.
PNG_RemoteDefaultImage is a default implementation that can be used to give an NFT a shared and/or update-able image.
-RemotePNGProvider is an example of an implementation of IMetaDataProvider that allows multiple NFTs to share the same image via Capability reference.
```
pub contract CommonMetaDataElements {
    //This implementation allows the tags to also be immutable if required for some reason
    pub struct ImmutablyTaggedData : MetaDataUtil.IImmutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let data: AnyStruct
        pub let type: MetaDataUtil.DataType
        pub let tags: [String]
        pub let id: UInt64

        init(data : AnyStruct, type: MetaDataUtil.DataType, tags: [String]) {
            self.data = data
            self.type = type
            self.tags = tags
            self.id = 0
        }

        pub fun getTags() : [String] {
            return self.tags
        }
    }

    //Default element implementation that defines the rdf style namespaces used in the NFTs tagging ontology
    //Namespace prefix and uri may not contain white space. URI should be a valid URI of an RDF format namespace definition
    pub struct TagNamespace : MetaDataUtil.IImmutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let data: AnyStruct
        pub let type: MetaDataUtil.DataType
        pub let id: UInt64

        init(prefix : String, uri: String) {
            self.data = prefix.concat(": ").concat(uri)
            self.type = MIME.TextPlain
            self.id = 0
        }

        pub fun getTags() : [String] {
            return ["TagNamespace", "ns"]
        }
    }

    //Default element implementation that specifies that this NFT uses the common DublinCore /elements/1.1/ tagging ontology 
    pub struct DCNamespace : MetaDataUtil.IImmutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let data: AnyStruct
        pub let type: MetaDataUtil.DataType
        pub let id: UInt64

        init() {
            self.data = "dc: http://purl.org/dc/elements/1.1/"
            self.type = MIME.TextPlain
            self.id = 0
        }

        pub fun getTags() : [String] {
            return ["TagNamespace"]
        }
    }

    //Default element implementation for a named NFT, most NFTs will need this
    pub struct DefaultName : MetaDataUtil.IImmutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let data: AnyStruct
        pub let type: MetaDataUtil.DataType
        pub let id: UInt64

        init(name : String) {
            self.data = name
            self.type = MIME.TextPlain
            self.id = 0
        }

        pub fun getTags() : [String] {
            return ["dc:title", "title", "name"]
        }
    }

    //Default element implementation for an NFT with a text description, most NFTs will need this
    pub struct DefaultDescription : MetaDataUtil.IImmutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let data: AnyStruct
        pub let type: MetaDataUtil.DataType
        pub let id: UInt64

        init(description : String) {
            self.data = description
            self.type = MIME.TextPlain
            self.id = 0
        }

        pub fun getTags() : [String] {
            return ["dc:description", "description"]
        }
    }

    //Default element implementation for an NFT with unique and immutable binary data that stores a png format image
    pub struct PNG_DefaultImage : MetaDataUtil.IImmutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let data: AnyStruct
        pub let type: MetaDataUtil.DataType
        pub let id: UInt64

        init(imgData : [UInt8]) {
            self.data = imgData
            self.type = MIME.ImagePNG
            self.id = 0
        }

        pub fun getTags() : [String] {
            return ["dc:source", "image"]
        }
    }

    pub struct UpdatableStats : MetaDataUtil.IMutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let dataProvider: Capability<&AnyStruct{MetaDataUtil.IMetaDataProvider}>
        pub let id: UInt64
        
        init(id: UInt64, provider : Capability<&UpdatableStatsProvider{MetaDataUtil.IMetaDataProvider}>,) {
            self.dataProvider = provider
            self.id = id
        }

        pub fun getTags() : [String] {
            return self.dataProvider.borrow()!.getTags(id: self.id)
        }
    }

    //An instance of this struct is needed for any NFT that utilizes UpdatableStatistics. 
    //A single instance can be shared by multiple resources.
    //As a statistic entry, type of data is assumed to be a number, a string, or a complex struct (Array/Dictionary/Custom)
    //Data can be updated arbitrarily by the account that holds this struct in storage, so this should only be stored in developer controlled account
    pub struct UpdatableStatsProvider : MetaDataUtil.IMetaDataProvider {
        access(self) var data: {UInt64: AnyStruct}
        access(self) var tags: {UInt64: [String]}
        access(self) var type: {UInt64: MetaDataUtil.DataType}

        init () {
            self.data = {}
            self.tags = {}
            self.type = {}
        }

        pub fun addData (id: UInt64, data : AnyStruct, tags : [String]) {
            if(self.data[id] != nil) {
                panic("data already exists for id")
            }

            self.data[id] = data
            self.tags[id] = tags
            self.type[id] = MIME.AnyStruct

            if(data as? Number != nil) {
                self.type[id] = MIME.Numeric
            }
            else if(data as? String != nil) {
                self.type[id] = MIME.TextPlain
            }
        }

        pub fun setData(id: UInt64, data : AnyStruct) {
            if(data.getType() != self.data.getType()) {
                if(data as? Number != nil) {
                    self.type[id] = MIME.Numeric
                }
                else if(data as? String != nil) {
                    self.type[id] = MIME.TextPlain
                }
                else {
                    self.type[id] = MIME.AnyStruct
                }
            }
            
            self.data[id] = data
        }

        //Tags are not static and can be updated
        pub fun setTags(id: UInt64, tags : [String]) {
            self.tags[id] = tags
        }

        pub fun getData(id: UInt64) : AnyStruct {
            return self.data[id]!
        }

        pub fun getDataType(id: UInt64) : MetaDataUtil.DataType { 
            return self.type[id]!
        }

        pub fun getTags(id: UInt64) : [String] {
            return self.tags[id]!
        }
    }

    //Default element implementation for an NFT with mutable or shared binary data that stores a png format image
    pub struct PNG_RemoteDefaultImage : MetaDataUtil.IMutableMetaData, MetaDataUtil.ITaggedMetaData {
        pub let dataProvider: Capability<&AnyStruct{MetaDataUtil.IMetaDataProvider}>
        pub let id: UInt64
        
        init(id: UInt64, provider : Capability<&CommonMetaDataElements.RemotePNGProvider{MetaDataUtil.IMetaDataProvider}>) {
            self.dataProvider = provider
            self.id = id
        }

        pub fun getTags() : [String] {
            return self.dataProvider.borrow()!.getTags(id: self.id)
        }
    }

    //An instance of this struct is needed for any NFT that utilizes PNG_RemoteDefaultImage. 
    //A single instance can be shared by multiple resources.
    //This provider allows the data to be either mutable or semi-immutable
    //Data can be updated arbitrarily by the account that holds this struct in storage, so this should only be stored in developer controlled account
    //If needing to store the image in the storage of the resource holder, developers will need to make a custom provider.
    pub struct RemotePNGProvider : MetaDataUtil.IMetaDataProvider {
        access(self) var data: {UInt64: [UInt8]}
        access(self) var isStatic: {UInt64: Bool}

        init() {
            self.data = {}
            self.isStatic = {}
        }

        pub fun addImage (id: UInt64, imgData : [UInt8], static : Bool) {
            if(self.data[id] != nil) {
                panic("")
            }

            self.data[id] = imgData
            self.isStatic[id] = static
        }

        pub fun setImage(id: UInt64, imgData : [UInt8]) {
            if(self.isStatic[id]!) {
                panic("Cannot Set Static Image")
            }
            self.data[id] = imgData
        }

        pub fun getData(id: UInt64) : AnyStruct {
            return self.data
        }

        pub fun getDataType(id: UInt64) : MetaDataUtil.DataType { 
            return MIME.ImagePNG
        }

        pub fun getTags(id: UInt64) : [String] {
            return ["dc:source", "image"]
        }
    }
}
```

## Drawbacks

Implementing a Metadata standard of any kind will obsolete existing NFT projects,
which will force them to go through a re-minting process of some kind in order to
take advantage of the new functionality.

## Performance Implications

Metadata will, of course, impact storage size of NFTs.

## Dependencies

Cadence

## Engineering Impact

Minimal. Only adding new default contracts.

## Tutorials and Examples

The code shown in the Design Proposal includes a number of standard implementations of
meta-data types.

Additional Example implementation code:

```
pub contract ExampleNFT: NonFungibleToken {

    pub var totalSupply: UInt64
    access(contract) let sharedImages : {String: UInt64}
    access(contract) let remotePNGProvider : CommonMetaDataElements.RemotePNGProvider

    pub event ContractInitialized()
    pub event Withdraw(id: UInt64, from: Address?)
    pub event Deposit(id: UInt64, to: Address?)

    pub resource NFT: NonFungibleToken.INFT {
        pub let id: UInt64
        pub let metadata : MetaDataUtil.MetaDataHolder?

        init(initID: UInt64, metadataElements : [MetaDataUtil.MetaDataElement]) {
            self.id = initID
            self.metadata = MetaDataUtil.MetaDataHolder(metadataElements)
        }
    }

    pub resource Collection: NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic {
        // dictionary of NFT conforming tokens
        // NFT is a resource type with an `UInt64` ID field
        pub var ownedNFTs: @{UInt64: NonFungibleToken.NFT}

        init () {
            self.ownedNFTs <- {}
        }

        // withdraw removes an NFT from the collection and moves it to the caller
        pub fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {
            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic("missing NFT")

            emit Withdraw(id: token.id, from: self.owner?.address)

            return <-token
        }

        // deposit takes a NFT and adds it to the collections dictionary
        // and adds the ID to the id array
        pub fun deposit(token: @NonFungibleToken.NFT) {
            let token <- token as! @ExampleNFT.NFT

            let id: UInt64 = token.id

            // add the new token to the dictionary which removes the old one
            let oldToken <- self.ownedNFTs[id] <- token

            emit Deposit(id: id, to: self.owner?.address)

            destroy oldToken
        }

        // getIDs returns an array of the IDs that are in the collection
        pub fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        // borrowNFT gets a reference to an NFT in the collection
        // so that the caller can read its metadata and call its methods
        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT {
            return &self.ownedNFTs[id] as &NonFungibleToken.NFT
        }

        destroy() {
            destroy self.ownedNFTs
        }
    }

    // public function that anyone can call to create a new empty collection
    pub fun createEmptyCollection(): @NonFungibleToken.Collection {
        return <- create Collection()
    }

    // Resource that an admin or something similar would own to be
    // able to mint new NFTs
    //
    pub resource NFTMinter {
        // mintNFT mints a new NFT with a new ID
        // and deposit it in the recipients collection using their collection reference
        pub fun mintNFT(recipient: &{NonFungibleToken.CollectionPublic}, name : String, description : String, imgBytes : [UInt8]) {
            let capability = ExampleNFT.account.getCapability<&CommonMetaDataElements.RemotePNGProvider{MetaDataUtil.IMetaDataProvider}>(/public/ExampleNFTRemotePNGProvider)
            let hash = String.encodeHex(imgBytes) //String.encodeHex(HashAlgorithm.SHA3_256.hash(imgBytes))
            
            var providerID : UInt64? = ExampleNFT.sharedImages[hash]
            if(providerID == nil) {
                providerID = ExampleNFT.totalSupply
                ExampleNFT.AddImage(id: providerID!, imgData: imgBytes, static: true)
            }

            // create a new NFT
            let elements : [MetaDataUtil.MetaDataElement] = [
                MetaDataUtil.MetaDataElement(metadata: CommonMetaDataElements.DCNamespace()),
                MetaDataUtil.MetaDataElement(metadata: CommonMetaDataElements.DefaultName(name: name)),
                MetaDataUtil.MetaDataElement(metadata: CommonMetaDataElements.DefaultDescription(description: description)),
                MetaDataUtil.MetaDataElement(metadata: CommonMetaDataElements.PNG_RemoteDefaultImage(id: providerID!, capability: capability))
            ]

            var newNFT <- create NFT(initID: ExampleNFT.totalSupply, metadataElements: elements)

            // deposit it in the recipient's account using their reference
            recipient.deposit(token: <-newNFT)

            ExampleNFT.totalSupply = ExampleNFT.totalSupply + (1 as UInt64)
        }
    }

    access(contract) fun AddImage(id: UInt64, imgData: [UInt8], static: Bool) {
        self.remotePNGProvider.addImage(id: id, imgData: imgData, static: static)
        self.account.save(self.remotePNGProvider, to: /storage/ExampleNFTRemotePNGProvider)
    }

    init() {
        // Initialize the total supply
        self.totalSupply = 0

        // Initialize the shared image cache
        self.sharedImages = {}
        self.remotePNGProvider = CommonMetaDataElements.RemotePNGProvider()
        self.account.save(self.remotePNGProvider, to: /storage/ExampleNFTRemotePNGProvider)
        self.account.link<&CommonMetaDataElements.RemotePNGProvider{MetaDataUtil.IMetaDataProvider}>(/public/ExampleNFTRemotePNGProvider, target: /storage/ExampleNFTRemotePNGProvider)

        // Create a Collection resource and save it to storage
        let collection <- create Collection()
        self.account.save(<-collection, to: /storage/NFTCollection)

        // create a public capability for the collection
        self.account.link<&{NonFungibleToken.CollectionPublic}>(
            /public/NFTCollection,
            target: /storage/NFTCollection
        )

        // Create a Minter resource and save it to storage
        let minter <- create NFTMinter()
        self.account.save(<-minter, to: /storage/NFTMinter)

        emit ContractInitialized()
    }
}
```

## Compatibility

Current NFT projects that implement the NonFungibleToken contract interface will
be made obsolete and will require a migration process to use NonFungibleToken2 if
they want to take advantage of standardized metadata.

There is a risk that implementations of NonFungibleToken could be left out of
various future projects (such as exchanges) that rely on all assets implementing the
NonFungibleToken2 contract interface, if they do not migrate to new interface.

## User Impact

None

## Related Issues

The ability to mark functions as "locked" in cadence, so that if they are modified
a contract update will fail, would simplify the required implementation by allowing
both mutable and immutable metadata elements to inherit from the same interface.

If contract update restrictions can be modified to allow for the addition of nil-able
properties, then this standard can be implemented as a contract upgrade of the existing
default NonFungibleToken contract, allowing backwards compatibility.

## Prior Art

The Flow community has been discussing an NFT metadata standard over the past several months, with representation from many of the NFT applications currently live on mainnet.

## Questions and Discussion Topics

Please help me elaborate on the Design Proposal by commenting on anything that is
in the code that is confusing, omitted, unexplained, etc.

Seed this with open questions you require feedback on from the FLIP process. 
What parts of the design still need to be defined?
