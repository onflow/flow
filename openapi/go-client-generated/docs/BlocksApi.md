# {{classname}}

All URIs are relative to *https://access.mainnet.nodes.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlocksGet**](BlocksApi.md#BlocksGet) | **Get** /blocks | Gets full blocks by height.
[**BlocksIdGet**](BlocksApi.md#BlocksIdGet) | **Get** /blocks/{id} | Gets full blocks by ID.

# **BlocksGet**
> []Block BlocksGet(ctx, height, optional)
Gets full blocks by height.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **height** | [**[]BlockHeight**](BlockHeight.md)| A comma-separated list of block heights to get. | 
 **optional** | ***BlocksApiBlocksGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a BlocksApiBlocksGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startHeight** | [**optional.Interface of BlockHeight**](.md)| The start height of the block range to get. Must be used together with &#x60;end_height&#x60;. This parameter is incompatible with &#x60;height&#x60;. | 
 **endHeight** | [**optional.Interface of BlockHeight**](.md)| The ending height of the block range to get. Must be used together with &#x60;start_height&#x60;. This parameter is incompatible with &#x60;height&#x60;. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**[]Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BlocksIdGet**
> []Block BlocksIdGet(ctx, id, optional)
Gets full blocks by ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**[]string**](string.md)| A comma-separated list of block IDs to get. | 
 **optional** | ***BlocksApiBlocksIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a BlocksApiBlocksIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**[]Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

