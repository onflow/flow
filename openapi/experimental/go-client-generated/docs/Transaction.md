# Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [default to null]
**Script** | **string** | Base64 encoded Cadence script. | [default to null]
**Arguments** | **[]string** | Array of Base64 encoded arguments with in [JSON-Cadence interchange format](https://docs.onflow.org/cadence/json-cadence-spec/). | [default to null]
**ReferenceBlockId** | **string** |  | [default to null]
**GasLimit** | **string** | The limit on the amount of computation a transaction is allowed to perform. | [default to null]
**Payer** | **string** |  | [default to null]
**ProposalKey** | [***ProposalKey**](ProposalKey.md) |  | [default to null]
**Authorizers** | **[]string** |  | [default to null]
**PayloadSignatures** | [**[]TransactionSignature**](TransactionSignature.md) |  | [default to null]
**EnvelopeSignatures** | [**[]TransactionSignature**](TransactionSignature.md) |  | [default to null]
**Result** | [***TransactionResult**](TransactionResult.md) |  | [optional] [default to null]
**Expandable** | [***TransactionExpandable**](Transaction__expandable.md) |  | [default to null]
**Links** | [***Links**](Links.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

