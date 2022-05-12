# {{classname}}

All URIs are relative to *https://rest-canary.onflow.org/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CollectionsIdGet**](CollectionsApi.md#CollectionsIdGet) | **Get** /collections/{id} | Gets a Collection by ID

# **CollectionsIdGet**
> Collection CollectionsIdGet(ctx, id)
Gets a Collection by ID

Get a collection by provided collection ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | [**string**](.md)| The collection ID. | 

### Return type

[**Collection**](Collection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

