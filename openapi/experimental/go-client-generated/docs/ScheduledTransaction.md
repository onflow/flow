# ScheduledTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [default to null]
**Status** | [***ScheduledTransactionStatus**](ScheduledTransactionStatus.md) |  | [default to null]
**Priority** | [***ScheduledTransactionPriority**](ScheduledTransactionPriority.md) |  | [default to null]
**Timestamp** | [**time.Time**](time.Time.md) | The time at which the transaction is scheduled to execute. | [default to null]
**Handler** | [***TransactionHandler**](TransactionHandler.md) |  | [default to null]
**Transaction** | [***Transaction**](Transaction.md) |  | [optional] [default to null]
**Result** | [***TransactionResult**](TransactionResult.md) |  | [optional] [default to null]
**Expandable** | [***AccountTransactionExpandable**](AccountTransaction__expandable.md) |  | [default to null]
**Links** | [***Links**](Links.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

