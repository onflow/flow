# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CollectionsIdGet**](CollectionsApi.md#CollectionsIdGet) | **Get** /collections/{id} | Gets a Collection by ID

# **CollectionsIdGet**
> Collection CollectionsIdGet(ctx, id, optional)
Gets a Collection by ID

Get a collection by provided collection ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The collection ID. | 
 **optional** | ***CollectionsApiCollectionsIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a CollectionsApiCollectionsIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**Collection**](Collection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

