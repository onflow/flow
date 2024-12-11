# {{classname}}

All URIs are relative to *https://rest-canary.onflow.org/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubscribeEventsGet**](SubscribeEventsApi.md#SubscribeEventsGet) | **Get** /subscribe_events | Subscribe events

# **SubscribeEventsGet**
> SubscribeEvents SubscribeEventsGet(ctx, optional)
Subscribe events

IMPORTANT NOTE: This is a WebSocket connection, so the `ws://` or `wss://` schema should be used to subscribe to this endpoint.  This endpoint streams on-chain events for all blocks starting at the requested start block, up until the latest available block. Once the latest block is reached, the stream will remain open, and responses will be sent for each new block as it becomes available. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***SubscribeEventsApiSubscribeEventsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubscribeEventsApiSubscribeEventsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHeight** | [**optional.Interface of BlockHeight**](.md)| The block height of the events being streamed. Either provide this parameter or &#x60;start_block_id&#x60; parameter. This parameter is incompatible with &#x60;start_block_id&#x60; parameter. | 
 **startBlockId** | [**optional.Interface of string**](.md)| The block id of the events being streamed. Either provide this parameter or &#x60;start_height&#x60; parameter. This parameter is incompatible with &#x60;start_height&#x60; parameter. | 
 **heartbeatInterval** | **optional.String**| Interval in block heights at which the server should return a heartbeat message to the client. | 
 **eventTypes** | [**optional.Interface of []string**](string.md)| A comma-separated list of events type to include. | 
 **addresses** | [**optional.Interface of []string**](string.md)| A comma-separated list of addresses who&#x27;s events should be included. | 
 **contracts** | [**optional.Interface of []string**](string.md)| A comma-separated list of contracts who&#x27;s events should be included. | 

### Return type

[**SubscribeEvents**](SubscribeEvents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

