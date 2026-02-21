# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetScheduledTransactionByID**](ScheduledTransactionsApi.md#GetScheduledTransactionByID) | **Get** /experimental/v1/scheduled/transaction/{id} | Get scheduled transaction by ID
[**GetScheduledTransactions**](ScheduledTransactionsApi.md#GetScheduledTransactions) | **Get** /experimental/v1/scheduled | List scheduled transactions
[**GetScheduledTransactionsByAccount**](ScheduledTransactionsApi.md#GetScheduledTransactionsByAccount) | **Get** /experimental/v1/scheduled/account/{address} | List scheduled transactions for an account

# **GetScheduledTransactionByID**
> ScheduledTransaction GetScheduledTransactionByID(ctx, id, optional)
Get scheduled transaction by ID

Returns the scheduled transaction with the given ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The scheduled transaction identifier (hex-encoded). | 
 **optional** | ***ScheduledTransactionsApiGetScheduledTransactionByIDOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ScheduledTransactionsApiGetScheduledTransactionByIDOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**ScheduledTransaction**](ScheduledTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetScheduledTransactions**
> ScheduledTransactionsResponse GetScheduledTransactions(ctx, optional)
List scheduled transactions

Returns a paginated list of scheduled transactions, ordered descending by scheduled transaction identifier (newest first). Results can be filtered by status, priority, time range, and transaction handler properties. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ScheduledTransactionsApiGetScheduledTransactionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ScheduledTransactionsApiGetScheduledTransactionsOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**optional.Interface of string**](.md)| Opaque pagination cursor from a previous response&#x27;s &#x60;next_cursor&#x60; field. | 
 **limit** | **optional.Int32**| The maximum number of results to return. | [default to 50]
 **statuses** | [**optional.Interface of []ScheduledTransactionStatus**](ScheduledTransactionStatus.md)| A comma-separated list of scheduled transaction statuses to filter by. | 
 **priority** | [**optional.Interface of ScheduledTransactionPriority**](.md)| Filter by scheduled transaction priority. | 
 **startTime** | **optional.Time**| Filter to include only scheduled transactions with a scheduled time at or after this value (inclusive, RFC 3339). | 
 **endTime** | **optional.Time**| Filter to include only scheduled transactions with a scheduled time at or before this value (inclusive, RFC 3339). | 
 **handlerOwner** | [**optional.Interface of string**](.md)| Filter by the address of the account that owns the transaction handler. | 
 **handlerTypeIdentifier** | **optional.String**| Filter by the Cadence type identifier of the transaction handler (e.g. &#x60;A.1654653399040a61.MyScheduler.Handler&#x60;). | 
 **handlerUuid** | **optional.String**| Filter by the UUID of the transaction handler resource. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**ScheduledTransactionsResponse**](ScheduledTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetScheduledTransactionsByAccount**
> ScheduledTransactionsResponse GetScheduledTransactionsByAccount(ctx, address, optional)
List scheduled transactions for an account

Returns a paginated list of scheduled transactions associated with the given account address, ordered descending by scheduled time (newest first). Results can be filtered by status, priority, time range, and transaction handler properties. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | [**string**](.md)| The account address (hex-encoded without 0x prefix). | 
 **optional** | ***ScheduledTransactionsApiGetScheduledTransactionsByAccountOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ScheduledTransactionsApiGetScheduledTransactionsByAccountOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | [**optional.Interface of string**](.md)| Opaque pagination cursor from a previous response&#x27;s &#x60;next_cursor&#x60; field. | 
 **limit** | **optional.Int32**| The maximum number of results to return. | [default to 50]
 **statuses** | [**optional.Interface of []ScheduledTransactionStatus**](ScheduledTransactionStatus.md)| A comma-separated list of scheduled transaction statuses to filter by. | 
 **priority** | [**optional.Interface of ScheduledTransactionPriority**](.md)| Filter by scheduled transaction priority. | 
 **startTime** | **optional.Time**| Filter to include only scheduled transactions with a scheduled time at or after this value (inclusive, RFC 3339). | 
 **endTime** | **optional.Time**| Filter to include only scheduled transactions with a scheduled time at or before this value (inclusive, RFC 3339). | 
 **handlerOwner** | [**optional.Interface of string**](.md)| Filter by the address of the account that owns the transaction handler. | 
 **handlerTypeIdentifier** | **optional.String**| Filter by the Cadence type identifier of the transaction handler (e.g. &#x60;A.1654653399040a61.MyScheduler.Handler&#x60;). | 
 **handlerUuid** | **optional.String**| Filter by the UUID of the transaction handler resource. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**ScheduledTransactionsResponse**](ScheduledTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

