# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecutionReceiptsGet**](ExecutionReceiptsApi.md#ExecutionReceiptsGet) | **Get** /execution_receipts | Get Execution Receipts by Block ID
[**ExecutionReceiptsResultsIdGet**](ExecutionReceiptsApi.md#ExecutionReceiptsResultsIdGet) | **Get** /execution_receipts/results/{id} | Get Execution Receipts by Result ID

# **ExecutionReceiptsGet**
> []ExecutionReceipt ExecutionReceiptsGet(ctx, blockId, optional)
Get Execution Receipts by Block ID

Get all execution receipts for the provided block ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **blockId** | [**string**](.md)| The ID of the block. | 
 **optional** | ***ExecutionReceiptsApiExecutionReceiptsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ExecutionReceiptsApiExecutionReceiptsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**[]ExecutionReceipt**](ExecutionReceipt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ExecutionReceiptsResultsIdGet**
> []ExecutionReceipt ExecutionReceiptsResultsIdGet(ctx, id, optional)
Get Execution Receipts by Result ID

Get all execution receipts for the provided execution result ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The ID of the execution result. | 
 **optional** | ***ExecutionReceiptsApiExecutionReceiptsResultsIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ExecutionReceiptsApiExecutionReceiptsResultsIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**[]ExecutionReceipt**](ExecutionReceipt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

