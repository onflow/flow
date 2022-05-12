# {{classname}}

All URIs are relative to *https://rest-canary.onflow.org/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AccountsAddressGet**](AccountsApi.md#AccountsAddressGet) | **Get** /accounts/{address} | Get an Account By Address

# **AccountsAddressGet**
> Account AccountsAddressGet(ctx, address, optional)
Get an Account By Address

Get an account data by provided address in latest \"sealed\" block or by provided block height.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | [**string**](.md)| The address of the account. | 
 **optional** | ***AccountsApiAccountsAddressGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsApiAccountsAddressGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **blockHeight** | [**optional.Interface of BlockHeight**](.md)| The block height to query for the account details at the \&quot;sealed\&quot; is used by default. | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

