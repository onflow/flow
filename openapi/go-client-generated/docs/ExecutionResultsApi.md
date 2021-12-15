# {{classname}}

All URIs are relative to *https://rest-mainnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecutionResultsGet**](ExecutionResultsApi.md#ExecutionResultsGet) | **Get** /execution_results | Gets execution results by block ID.
[**ExecutionResultsIdGet**](ExecutionResultsApi.md#ExecutionResultsIdGet) | **Get** /execution_results/{id} | Gets an execution result by ID.

# **ExecutionResultsGet**
> []ExecutionResult ExecutionResultsGet(ctx, blockId)
Gets execution results by block ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **blockId** | [**[]string**](string.md)| A comma-separated list of block IDs to get the execution results for. | 

### Return type

[**[]ExecutionResult**](ExecutionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ExecutionResultsIdGet**
> ExecutionResult ExecutionResultsIdGet(ctx, id)
Gets an execution result by ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The ID of the execution result to get. | 

### Return type

[**ExecutionResult**](ExecutionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

