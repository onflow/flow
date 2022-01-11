# {{classname}}

All URIs are relative to *https://rest-mainnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransactionResultsTransactionIdGet**](TransactionsApi.md#TransactionResultsTransactionIdGet) | **Get** /transaction_results/{transaction_id} | Gets a transaction result by ID.
[**TransactionsIdGet**](TransactionsApi.md#TransactionsIdGet) | **Get** /transactions/{id} | Gets a transaction by ID.
[**TransactionsPost**](TransactionsApi.md#TransactionsPost) | **Post** /transactions | Submits a transaction to the network.

# **TransactionResultsTransactionIdGet**
> TransactionResult TransactionResultsTransactionIdGet(ctx, transactionId, optional)
Gets a transaction result by ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | [**string**](.md)| The transaction ID of the transaction result to get. | 
 **optional** | ***TransactionsApiTransactionResultsTransactionIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionsApiTransactionResultsTransactionIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
Gets a transaction by ID.

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
Submits a transaction to the network.

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

