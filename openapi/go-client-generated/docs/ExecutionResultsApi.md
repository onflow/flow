# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecutionResultsGet**](ExecutionResultsApi.md#ExecutionResultsGet) | **Get** /execution_results | Get Execution Results by Block ID
[**ExecutionResultsIdGet**](ExecutionResultsApi.md#ExecutionResultsIdGet) | **Get** /execution_results/{id} | Get Execution Result by ID

# **ExecutionResultsGet**
> []ExecutionResult ExecutionResultsGet(ctx, blockId, optional)
Get Execution Results by Block ID

Get execution result by provided block ID or multiple block IDs provided as comma-seperated list.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **blockId** | [**[]string**](string.md)| Single ID or comma-separated list of block IDs. | 
 **optional** | ***ExecutionResultsApiExecutionResultsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ExecutionResultsApiExecutionResultsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 
 **agreeingExecutorsCount** | **optional.String**| A minimum number of execution receipts for the execution result. | 
 **requiredExecutorIds** | [**optional.Interface of []string**](string.md)| A set of execution node IDs, one of which must have produced the execution result. | 
 **includeExecutorMetadata** | **optional.Bool**| Specifies whether or not to include the executor metadata in the response. | 

### Return type

[**[]ExecutionResult**](ExecutionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ExecutionResultsIdGet**
> ExecutionResult ExecutionResultsIdGet(ctx, id, optional)
Get Execution Result by ID

Get execution result by provided execution result ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The ID of the execution result. | 
 **optional** | ***ExecutionResultsApiExecutionResultsIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ExecutionResultsApiExecutionResultsIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 
 **agreeingExecutorsCount** | **optional.String**| A minimum number of execution receipts for the execution result. | 
 **requiredExecutorIds** | [**optional.Interface of []string**](string.md)| A set of execution node IDs, one of which must have produced the execution result. | 
 **includeExecutorMetadata** | **optional.Bool**| Specifies whether or not to include the executor metadata in the response. | 

### Return type

[**ExecutionResult**](ExecutionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

