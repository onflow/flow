# TransactionsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Script** | **string** | Base64 encoded content of the Cadence script. | [default to null]
**Arguments** | **[]string** | A list of arguments each encoded as Base64 passed in the [JSON-Cadence interchange format](https://docs.onflow.org/cadence/json-cadence-spec/). | [default to null]
**ReferenceBlockId** | **string** |  | [default to null]
**GasLimit** | **string** | The limit on the amount of computation a transaction is allowed to preform. | [default to null]
**Payer** | **string** |  | [default to null]
**ProposalKey** | [***ProposalKey**](ProposalKey.md) |  | [default to null]
**Authorizers** | **[]string** |  | [default to null]
**PayloadSignatures** | [**[]TransactionSignature**](TransactionSignature.md) | A list of Base64 encoded signatures. | [default to null]
**EnvelopeSignatures** | [**[]TransactionSignature**](TransactionSignature.md) | A list of Base64 encoded signatures. | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

