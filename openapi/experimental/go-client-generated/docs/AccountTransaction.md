# AccountTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockHeight** | **string** | Block height where the transaction was included. | [default to null]
**Timestamp** | [**time.Time**](time.Time.md) | Timestamp of the block where the transaction was included. | [default to null]
**TransactionId** | **string** |  | [default to null]
**TransactionIndex** | **string** | Index of the transaction within the block. | [default to null]
**Roles** | **[]string** |  | [default to null]
**Transaction** | [***Transaction**](Transaction.md) |  | [optional] [default to null]
**Result** | [***TransactionResult**](TransactionResult.md) |  | [optional] [default to null]
**Expandable** | [***AccountTransactionExpandable**](AccountTransaction__expandable.md) |  | [default to null]
**Links** | [***Links**](Links.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

