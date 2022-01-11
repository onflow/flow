# {{classname}}

All URIs are relative to *https://rest-mainnet.onflow.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AccountsAddressGet**](AccountsApi.md#AccountsAddressGet) | **Get** /accounts/{address} | Gets an account by address at the given block height.

# **AccountsAddressGet**
> Account AccountsAddressGet(ctx, address, blockHeight)
Gets an account by address at the given block height.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | [**string**](.md)| The address of the account to get. | 
  **blockHeight** | [**BlockHeight**](.md)| The block height to query for the account details at. | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

