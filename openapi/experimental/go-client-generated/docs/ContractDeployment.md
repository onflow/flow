# ContractDeployment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractId** | **string** |  | [default to null]
**Address** | **string** |  | [default to null]
**BlockHeight** | **string** | Block height at which this deployment was applied. | [optional] [default to null]
**TransactionId** | **string** |  | [optional] [default to null]
**TxIndex** | **string** | Position of the deploying transaction within its block. | [optional] [default to null]
**EventIndex** | **string** | Position of the contract event within its transaction. | [optional] [default to null]
**Code** | **string** | Base64-encoded Cadence source code of the contract deployed. | [default to null]
**CodeHash** | **string** | Hex-encoded SHA3-256 hash of the contract code. | [default to null]
**IsPlaceholder** | **bool** | True if the deployment was created during bootstrapping based on the current chain state, not based on a protocol event. When true, block_height, transaction_id, tx_index, and event_index are absent. | [optional] [default to null]
**Transaction** | [***Transaction**](Transaction.md) |  | [optional] [default to null]
**Expandable** | [***ContractDeploymentExpandable**](ContractDeployment__expandable.md) |  | [default to null]
**Links** | [***Links**](Links.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

