# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAccountTransactions**](AccountsApi.md#GetAccountTransactions) | **Get** /experimental/v1/accounts/{address}/transactions | Get account transactions

# **GetAccountTransactions**
> AccountTransactionsResponse GetAccountTransactions(ctx, address, optional)
Get account transactions

Returns a paginated list of transactions for the given account address, ordered descending by block height (newest first). 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | [**string**](.md)| The account address (hex-encoded without 0x prefix). | 
 **optional** | ***AccountsApiGetAccountTransactionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsApiGetAccountTransactionsOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | [**optional.Interface of string**](.md)| Opaque pagination cursor from a previous response&#x27;s &#x60;next_cursor&#x60; field. | 
 **limit** | **optional.Int32**| The maximum number of results to return. | [default to 50]
 **roles** | [**optional.Interface of Role**](.md)| A comma-separated list indicating which roles to filter by. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**AccountTransactionsResponse**](AccountTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

