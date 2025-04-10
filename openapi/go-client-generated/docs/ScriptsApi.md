# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ScriptsPost**](ScriptsApi.md#ScriptsPost) | **Post** /scripts | Execute a Cadence Script

# **ScriptsPost**
> InlineResponse200 ScriptsPost(ctx, body, optional)
Execute a Cadence Script

Executes a read-only Cadence script against the execution state at the given block height or ID. If block height or ID is not specified, then the script is executed at the latest sealed block height.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ScriptsBody**](ScriptsBody.md)| The script to execute. | 
 **optional** | ***ScriptsApiScriptsPostOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ScriptsApiScriptsPostOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **blockId** | [**optional.Interface of string**](.md)| The ID of the block to execute the script against. For a specific block height, use &#x60;block_height&#x60; instead. | 
 **blockHeight** | [**optional.Interface of BlockHeight**](.md)| The height of the block to execute the script against. This parameter is incompatible with &#x60;block_id&#x60;. | 

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

