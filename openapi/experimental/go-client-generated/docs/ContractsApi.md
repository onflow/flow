# {{classname}}

All URIs are relative to *https://rest-testnet.onflow.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetContractByIdentifier**](ContractsApi.md#GetContractByIdentifier) | **Get** /experimental/v1/contracts/{identifier} | Get contract by identifier
[**GetContractDeployments**](ContractsApi.md#GetContractDeployments) | **Get** /experimental/v1/contracts/{identifier}/deployments | List deployments for a contract
[**GetContracts**](ContractsApi.md#GetContracts) | **Get** /experimental/v1/contracts | List contracts
[**GetContractsByAccount**](ContractsApi.md#GetContractsByAccount) | **Get** /experimental/v1/contracts/account/{address} | List contracts for an account

# **GetContractByIdentifier**
> ContractDeployment GetContractByIdentifier(ctx, identifier, optional)
Get contract by identifier

Returns the latest deployment for the contract with the given identifier.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **identifier** | [**string**](.md)| The case sensitive address-qualified contract identifier (e.g. &#x60;A.1654653399040a61.EVM&#x60;). | 
 **optional** | ***ContractsApiGetContractByIdentifierOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContractsApiGetContractByIdentifierOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**ContractDeployment**](ContractDeployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetContractDeployments**
> ContractDeploymentsResponse GetContractDeployments(ctx, identifier, optional)
List deployments for a contract

Returns a paginated list of all historical deployments for the contract with the given identifier, ordered descending by block height (newest first). Results can be filtered by block height range. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **identifier** | [**string**](.md)| The address-qualified contract identifier (e.g. &#x60;A.1654653399040a61.EVM&#x60;). | 
 **optional** | ***ContractsApiGetContractDeploymentsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContractsApiGetContractDeploymentsOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | [**optional.Interface of string**](.md)| Opaque pagination cursor from a previous response&#x27;s &#x60;next_cursor&#x60; field. | 
 **limit** | **optional.Int32**| The maximum number of results to return. | [default to 50]
 **startBlock** | **optional.String**| Filter to include only deployments at or after this block height (inclusive). | 
 **endBlock** | **optional.String**| Filter to include only deployments at or before this block height (inclusive). | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**ContractDeploymentsResponse**](ContractDeploymentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetContracts**
> ContractsResponse GetContracts(ctx, optional)
List contracts

Returns a paginated list of contracts (latest deployment per unique contract identifier), ordered descending by contract address. Results can be filtered by contract name and block height range. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ContractsApiGetContractsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContractsApiGetContractsOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**optional.Interface of string**](.md)| Opaque pagination cursor from a previous response&#x27;s &#x60;next_cursor&#x60; field. | 
 **limit** | **optional.Int32**| The maximum number of results to return. | [default to 50]
 **contractName** | **optional.String**| Filter by case sensitive contract name (unqualified, e.g. &#x60;EVM&#x60;). | 
 **startBlock** | **optional.String**| Filter to include only deployments at or after this block height (inclusive). | 
 **endBlock** | **optional.String**| Filter to include only deployments at or before this block height (inclusive). | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**ContractsResponse**](ContractsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetContractsByAccount**
> ContractsResponse GetContractsByAccount(ctx, address, optional)
List contracts for an account

Returns a paginated list of contracts deployed to the given account address, ordered ascending by contract name. Results can be filtered by contract name and block height range. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | [**string**](.md)| The account address (hex-encoded without 0x prefix). | 
 **optional** | ***ContractsApiGetContractsByAccountOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContractsApiGetContractsByAccountOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | [**optional.Interface of string**](.md)| Opaque pagination cursor from a previous response&#x27;s &#x60;next_cursor&#x60; field. | 
 **limit** | **optional.Int32**| The maximum number of results to return. | [default to 50]
 **contractName** | **optional.String**| Filter by case sensitive contract name (unqualified, e.g. &#x60;EVM&#x60;). | 
 **startBlock** | **optional.String**| Filter to include only deployments at or after this block height (inclusive). | 
 **endBlock** | **optional.String**| Filter to include only deployments at or before this block height (inclusive). | 
 **expand** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to expand. | 
 **select_** | [**optional.Interface of []string**](string.md)| A comma-separated list indicating which properties of the content to return. | 

### Return type

[**ContractsResponse**](ContractsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

