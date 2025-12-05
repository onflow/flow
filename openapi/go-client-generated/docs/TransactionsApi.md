# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransactionResultsGet**](TransactionsApi.md#TransactionResultsGet) | **Get** /transaction_results | Get Transaction Results by Block ID
[**TransactionResultsTransactionIdGet**](TransactionsApi.md#TransactionResultsTransactionIdGet) | **Get** /transaction_results/{transaction_id} | Get a Transaction Result by transaction ID or scheduled transaction ID.
[**TransactionsGet**](TransactionsApi.md#TransactionsGet) | **Get** /transactions | Get Transactions by Block ID
[**TransactionsIdGet**](TransactionsApi.md#TransactionsIdGet) | **Get** /transactions/{id} | Get a Transaction by ID.
[**TransactionsPost**](TransactionsApi.md#TransactionsPost) | **Post** /transactions | Submit a Transaction

# **TransactionResultsGet**
> []TransactionResult TransactionResultsGet(ctx, blockId, optional)
Get Transaction Results by Block ID

Retrieve a list of transaction results for a specific block. This includes results for system and scheduled transactions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **blockId** | [**string**](.md)| The ID of the block to retrieve transaction results for. | 
 **optional** | ***TransactionsApiTransactionResultsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiTransactionResultsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 
 **agreeingExecutorsCount** | **optional.String**| A minimum number of execution receipts for the execution result. | 
 **requiredExecutorIds** | [**optional.Interface of []string**](string.md)| A set of execution node IDs, one of which must have produced the execution result. | 
 **includeExecutorMetadata** | **optional.Bool**| Specifies whether or not to include the executor metadata in the response. | 

### Return type

[**[]TransactionResult**](TransactionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionResultsTransactionIdGet**
> TransactionResult TransactionResultsTransactionIdGet(ctx, transactionId, optional)
Get a Transaction Result by transaction ID or scheduled transaction ID.

Get transaction result by the transaction's ID. If the transaction is a scheduled transaction, it can alternatively be retrieved by the scheduled transaction ID field returned by the system contract.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | [**TransactionId**](.md)| The transaction ID of the transaction result, or id field of the scheduled transaction returned by the system contract. | 
 **optional** | ***TransactionsApiTransactionResultsTransactionIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiTransactionResultsTransactionIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **blockId** | [**optional.Interface of string**](.md)| A block ID optional parameter | 
 **collectionId** | [**optional.Interface of string**](.md)| A collection ID optional parameter. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 
 **agreeingExecutorsCount** | **optional.String**| A minimum number of execution receipts for the execution result. | 
 **requiredExecutorIds** | [**optional.Interface of []string**](string.md)| A set of execution node IDs, one of which must have produced the execution result. | 
 **includeExecutorMetadata** | **optional.Bool**| Specifies whether or not to include the executor metadata in the response. | 

### Return type

[**TransactionResult**](TransactionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionsGet**
> []Transaction TransactionsGet(ctx, blockId, optional)
Get Transactions by Block ID

Retrieve a list of transactions for a specific block. This includes system and scheduled transactions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **blockId** | [**string**](.md)| The ID of the block to retrieve transactions for. | 
 **optional** | ***TransactionsApiTransactionsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiTransactionsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**[]Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionsIdGet**
> Transaction TransactionsIdGet(ctx, id, optional)
Get a Transaction by ID.

Get a transaction data by the provided transaction ID. If the transaction is a scheduled transaction, it can alternatively be retrieved by the scheduled transaction ID field returned by the system contract.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**Id**](.md)| The ID of the transaction, or id field of the scheduled transaction returned by the system contract. | 
 **optional** | ***TransactionsApiTransactionsIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiTransactionsIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **blockId** | [**optional.Interface of string**](.md)| A block ID optional parameter | 
 **collectionId** | [**optional.Interface of string**](.md)| A collection ID optional parameter. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionsPost**
> Transaction TransactionsPost(ctx, body)
Submit a Transaction

Send a new signed transaction payload to the network with [required transaction fields](https://docs.onflow.org/flow-go-sdk/#transactions).

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionsBody**](TransactionsBody.md)| The transaction to submit. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

