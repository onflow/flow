# {{classname}}

All URIs are relative to *https://rest-mainnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EventsGet**](EventsApi.md#EventsGet) | **Get** /events | 

# **EventsGet**
> BlockEvents EventsGet(ctx, type_, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **type_** | [**string**](.md)| The event type is name-spaced with the address of the account and contract in which the event is declared. | 
 **optional** | ***EventsApiEventsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a EventsApiEventsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startHeight** | [**optional.Interface of BlockHeight**](.md)| The start height of the block range for events. Must be used together with &#x60;end_height&#x60;. This parameter is incompatible with &#x60;block_ids&#x60;. | 
 **endHeight** | [**optional.Interface of BlockHeight**](.md)| The end height of the block range for events. Must be used together with &#x60;start_height&#x60;. This parameter is incompatible with &#x60;block_ids&#x60;. | 
 **blockIds** | [**optional.Interface of []string**](string.md)|  | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**BlockEvents**](BlockEvents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

