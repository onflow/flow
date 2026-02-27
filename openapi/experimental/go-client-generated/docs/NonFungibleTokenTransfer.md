# NonFungibleTokenTransfer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionId** | **string** |  | [default to null]
**BlockHeight** | **string** | Block height where the transfer was included. | [default to null]
**Timestamp** | [**time.Time**](time.Time.md) | Timestamp of the block where the transfer was included. | [default to null]
**TransactionIndex** | **string** | Index of the transaction within the block. | [default to null]
**EventIndices** | **[]string** | Indices of the events within the transaction that represent this transfer. | [default to null]
**TokenType** | **string** | Fully qualified NFT collection type (e.g. &#x60;A.1654653399040a61.MyNFT&#x60;). | [default to null]
**NftId** | **string** | Unique identifier of the NFT within its collection. | [default to null]
**SourceAddress** | **string** |  | [default to null]
**RecipientAddress** | **string** |  | [default to null]
**Transaction** | [***Transaction**](Transaction.md) |  | [optional] [default to null]
**Result** | [***TransactionResult**](TransactionResult.md) |  | [optional] [default to null]
**Expandable** | [***AccountTransactionExpandable**](AccountTransaction__expandable.md) |  | [default to null]
**Links** | [***Links**](Links.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

