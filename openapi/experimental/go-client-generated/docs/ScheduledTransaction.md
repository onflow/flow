# ScheduledTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Scheduler-assigned uint64 identifier. | [default to null]
**Status** | [***ScheduledTransactionStatus**](ScheduledTransactionStatus.md) |  | [default to null]
**Priority** | [***ScheduledTransactionPriority**](ScheduledTransactionPriority.md) |  | [default to null]
**Timestamp** | **string** | Scheduled execution timestamp as a UFix64 decimal string. | [default to null]
**ExecutionEffort** | **string** | Execution effort estimate as a UFix64 decimal string. | [default to null]
**Fees** | **string** | Scheduled fee as a UFix64 decimal string. | [default to null]
**TransactionHandlerOwner** | **string** |  | [default to null]
**TransactionHandlerTypeIdentifier** | **string** | Fully qualified Cadence type identifier of the transaction handler (e.g. &#x60;A.1654653399040a61.MyScheduler.Handler&#x60;). | [default to null]
**TransactionHandlerUuid** | **string** | Resource UUID of the transaction handler. | [default to null]
**TransactionHandlerPublicPath** | **string** | Public path of the transaction handler, if set. | [optional] [default to null]
**FeesReturned** | **string** | Fees returned on cancellation, as a UFix64 decimal string. | [optional] [default to null]
**FeesDeducted** | **string** | Fees deducted on cancellation, as a UFix64 decimal string. | [optional] [default to null]
**ScheduledTransactionId** | **string** |  | [optional] [default to null]
**ExecutedTransactionId** | **string** |  | [optional] [default to null]
**CancelledTransactionId** | **string** |  | [optional] [default to null]
**FailedTransactionId** | **string** |  | [optional] [default to null]
**Expandable** | [***AccountTransactionExpandable**](AccountTransaction__expandable.md) |  | [default to null]
**Links** | [***Links**](Links.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

