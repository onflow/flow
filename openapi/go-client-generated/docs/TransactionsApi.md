# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransactionResultsTransactionIdGet**](TransactionsApi.md#TransactionResultsTransactionIdGet) | **Get** /transaction_results/{transaction_id} | Get a Transaction Result by ID.
[**TransactionsIdGet**](TransactionsApi.md#TransactionsIdGet) | **Get** /transactions/{id} | Get a Transaction by ID.
[**TransactionsPost**](TransactionsApi.md#TransactionsPost) | **Post** /transactions | Submit a Transaction

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

