# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ScheduledTransactionResultsIdGet**](TransactionsApi.md#ScheduledTransactionResultsIdGet) | **Get** /scheduled_transaction_results/{id} | Get a Scheduled Transaction Result by ID.
[**ScheduledTransactionsIdGet**](TransactionsApi.md#ScheduledTransactionsIdGet) | **Get** /scheduled_transactions/{id} | Get a Scheduled Transaction by ID.
[**SystemTransactionResultsTransactionIdGet**](TransactionsApi.md#SystemTransactionResultsTransactionIdGet) | **Get** /system_transaction_results/{transaction_id} | Get a System Transaction Result by ID.
[**SystemTransactionsIdGet**](TransactionsApi.md#SystemTransactionsIdGet) | **Get** /system_transactions/{id} | Get a System Transaction by ID.
[**TransactionResultsTransactionIdGet**](TransactionsApi.md#TransactionResultsTransactionIdGet) | **Get** /transaction_results/{transaction_id} | Get a Transaction Result by ID.
[**TransactionsIdGet**](TransactionsApi.md#TransactionsIdGet) | **Get** /transactions/{id} | Get a Transaction by ID.
[**TransactionsPost**](TransactionsApi.md#TransactionsPost) | **Post** /transactions | Submit a Transaction

# **ScheduledTransactionResultsIdGet**
> TransactionResult ScheduledTransactionResultsIdGet(ctx, id, optional)
Get a Scheduled Transaction Result by ID.

Get scheduled transaction result by the scheduled transaction ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **string**| The scheduled transaction&#x27;s &#x60;id&#x60; field returned by the system contract. | 
 **optional** | ***TransactionsApiScheduledTransactionResultsIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiScheduledTransactionResultsIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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

# **ScheduledTransactionsIdGet**
> Transaction ScheduledTransactionsIdGet(ctx, id, optional)
Get a Scheduled Transaction by ID.

Get a scheduled transaction body by the provided scheduled transaction id field.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **string**| The scheduled transaction&#x27;s &#x60;id&#x60; field returned by the system contract. | 
 **optional** | ***TransactionsApiScheduledTransactionsIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiScheduledTransactionsIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 
 **agreeingExecutorsCount** | **optional.String**| A minimum number of execution receipts for the execution result. | 
 **requiredExecutorIds** | [**optional.Interface of []string**](string.md)| A set of execution node IDs, one of which must have produced the execution result. | 
 **includeExecutorMetadata** | **optional.Bool**| Specifies whether or not to include the executor metadata in the response. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SystemTransactionResultsTransactionIdGet**
> TransactionResult SystemTransactionResultsTransactionIdGet(ctx, transactionId, optional)
Get a System Transaction Result by ID.

Get system transaction result by the transaction result ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | [**string**](.md)| The system transaction ID of the transaction result. | 
 **optional** | ***TransactionsApiSystemTransactionResultsTransactionIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiSystemTransactionResultsTransactionIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **blockId** | [**optional.Interface of string**](.md)| A block ID optional parameter | 
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

# **SystemTransactionsIdGet**
> Transaction SystemTransactionsIdGet(ctx, id, optional)
Get a System Transaction by ID.

Get a system transaction body by the provided transaction ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The ID of the system transaction to get. | 
 **optional** | ***TransactionsApiSystemTransactionsIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiSystemTransactionsIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **blockId** | [**optional.Interface of string**](.md)| A block ID optional parameter | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 
 **agreeingExecutorsCount** | **optional.String**| A minimum number of execution receipts for the execution result. | 
 **requiredExecutorIds** | [**optional.Interface of []string**](string.md)| A set of execution node IDs, one of which must have produced the execution result. | 
 **includeExecutorMetadata** | **optional.Bool**| Specifies whether or not to include the executor metadata in the response. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionResultsTransactionIdGet**
> TransactionResult TransactionResultsTransactionIdGet(ctx, transactionId, optional)
Get a Transaction Result by ID.

Get transaction result by the transaction result ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | [**string**](.md)| The transaction ID of the transaction result. | 
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

# **TransactionsIdGet**
> Transaction TransactionsIdGet(ctx, id, optional)
Get a Transaction by ID.

Get a transaction data by the provided transaction ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The ID of the transaction to get. | 
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

