# {{classname}}

All URIs are relative to *https://rest-canary.onflow.org/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AccountsAddressBalanceGet**](AccountsApi.md#AccountsAddressBalanceGet) | **Get** /accounts/{address}/balance | Get an Account Balance By Address
[**AccountsAddressGet**](AccountsApi.md#AccountsAddressGet) | **Get** /accounts/{address} | Get an Account By Address
[**AccountsAddressKeysIndexGet**](AccountsApi.md#AccountsAddressKeysIndexGet) | **Get** /accounts/{address}/keys/{index} | Get an individual Account Key By Address and Index

# **AccountsAddressBalanceGet**
> AccountBalance AccountsAddressBalanceGet(ctx, address, optional)
Get an Account Balance By Address

Get an account balance by provided address in latest \"sealed\" block or by provided block height.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | [**string**](.md)| The address of the account. | 
 **optional** | ***AccountsApiAccountsAddressBalanceGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsApiAccountsAddressBalanceGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **blockHeight** | [**optional.Interface of BlockHeight**](.md)| The block height to query for the account details at the \&quot;sealed\&quot; is used by default. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**AccountBalance**](AccountBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountsAddressKeysIndexGet**
> AccountPublicKey AccountsAddressKeysIndexGet(ctx, address, index, optional)
Get an individual Account Key By Address and Index

Get an account data by provided address in latest \"sealed\" block or by provided block height.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | [**string**](.md)| The address of the account. | 
  **index** | **string**| The index of the account key. | 
 **optional** | ***AccountsApiAccountsAddressKeysIndexGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsApiAccountsAddressKeysIndexGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **blockHeight** | [**optional.Interface of BlockHeight**](.md)| The block height to query for the account details at the \&quot;sealed\&quot; is used by default. | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**AccountPublicKey**](AccountPublicKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

