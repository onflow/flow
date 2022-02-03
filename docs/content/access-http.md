---
title: Access API v1.0.0
language_tabs:
  - ruby: Ruby
  - python: Python
language_clients:
  - ruby: ""
  - python: ""
toc_footers:
  - <a href="https://docs.onflow.org/access-api/">Find out more about the Access
    API</a>
includes: []
search: false
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: widdershins v4.0.1

---

<h1 id="access-api">Access API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://rest-testnet.onflow.org/v1">https://rest-testnet.onflow.org/v1</a>

<h1 id="access-api-blocks">Blocks</h1>

## Gets full blocks by height.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/blocks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/blocks', headers = headers)

print(r.json())

```

`GET /blocks`

<h3 id="gets-full-blocks-by-height.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|height|query|array[any]|false|A comma-separated list of block heights to get.|
|start_height|query|[BlockHeight](#schemablockheight)|false|The start height of the block range to get. Must be used together with `end_height`. This parameter is incompatible with `height`.|
|end_height|query|[BlockHeight](#schemablockheight)|false|The ending height of the block range to get. Must be used together with `start_height`. This parameter is incompatible with `height`.|
|expand|query|array[string]|false|A comma-separated list indicating which properties of the content to expand.|
|select|query|array[string]|false|A comma-separated list indicating which properties of the content to return.|

> Example responses

> 200 Response

```json
[
  {
    "header": {
      "id": "string",
      "parent_id": "string",
      "height": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "parent_voter_signature": "string"
    },
    "payload": {
      "collection_guarantees": [
        {
          "collection_id": "string",
          "signer_ids": [
            "string"
          ],
          "signature": "string"
        }
      ],
      "block_seals": [
        {
          "block_id": "string",
          "result_id": "string",
          "final_state": "string",
          "aggregated_approval_signatures": [
            {}
          ]
        }
      ]
    },
    "execution_result": {
      "id": "string",
      "block_id": "string",
      "events": [
        {
          "type": "string",
          "transaction_id": "string",
          "transaction_index": "string",
          "event_index": "string",
          "payload": "string"
        }
      ],
      "_links": {
        "_self": "string"
      }
    },
    "_expandable": {
      "payload": "string",
      "execution_result": "http://example.com"
    },
    "_links": {
      "_self": "string"
    }
  }
]
```

<h3 id="gets-full-blocks-by-height.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<h3 id="gets-full-blocks-by-height.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Block](#schemablock)]|false|none|none|
|» header|[BlockHeader](#schemablockheader)|true|none|none|
|»» id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» parent_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» height|string(uint64)|true|none|none|
|»» timestamp|string(date-time)|true|none|none|
|»» parent_voter_signature|[Signature](#schemasignature)(byte)|true|none|A variable length signature.|
|» payload|[BlockPayload](#schemablockpayload)|false|none|none|
|»» collection_guarantees|[[CollectionGuarantee](#schemacollectionguarantee)]|true|none|none|
|»»» collection_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» signer_ids|[[Identifier](#schemaidentifier)]|true|none|[A 32-byte unique identifier for an entity.]|
|»»» signature|[Signature](#schemasignature)(byte)|true|none|A variable length signature.|
|»» block_seals|[[BlockSeal](#schemablockseal)]|true|none|none|
|»»» block_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» result_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» final_state|[StateCommitment](#schemastatecommitment)(hexadecimal)|true|none|The root hash of the state tree.|
|»»» aggregated_approval_signatures|[[AggregatedSignature](#schemaaggregatedsignature)]|true|none|none|
|»»»» verifier_signatures|[[Signature](#schemasignature)]|true|none|[A variable length signature.]|
|»»»» signer_ids|[[Identifier](#schemaidentifier)]|true|none|[A 32-byte unique identifier for an entity.]|
|» execution_result|[ExecutionResult](#schemaexecutionresult)|false|none|none|
|»» id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» block_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» events|[[Event](#schemaevent)]|true|none|none|
|»»» type|[EventType](#schemaeventtype)|true|none|The qualified event type.|
|»»» transaction_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» transaction_index|string(uint64)|true|none|none|
|»»» event_index|string(uint64)|true|none|none|
|»»» payload|string(byte)|true|none|none|
|»» _links|[Links](#schemalinks)|false|none|none|
|»»» _self|string|false|none|none|
|» _expandable|object|true|none|none|
|»» payload|string|false|none|none|
|»» execution_result|string(uri)|false|none|none|
|» _links|[Links](#schemalinks)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets full blocks by ID.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/blocks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/blocks/{id}', headers = headers)

print(r.json())

```

`GET /blocks/{id}`

<h3 id="gets-full-blocks-by-id.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|array[string]|true|A comma-separated list of block IDs to get.|
|expand|query|array[string]|false|A comma-separated list indicating which properties of the content to expand.|
|select|query|array[string]|false|A comma-separated list indicating which properties of the content to return.|

> Example responses

> 200 Response

```json
[
  {
    "header": {
      "id": "string",
      "parent_id": "string",
      "height": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "parent_voter_signature": "string"
    },
    "payload": {
      "collection_guarantees": [
        {
          "collection_id": "string",
          "signer_ids": [
            "string"
          ],
          "signature": "string"
        }
      ],
      "block_seals": [
        {
          "block_id": "string",
          "result_id": "string",
          "final_state": "string",
          "aggregated_approval_signatures": [
            {}
          ]
        }
      ]
    },
    "execution_result": {
      "id": "string",
      "block_id": "string",
      "events": [
        {
          "type": "string",
          "transaction_id": "string",
          "transaction_index": "string",
          "event_index": "string",
          "payload": "string"
        }
      ],
      "_links": {
        "_self": "string"
      }
    },
    "_expandable": {
      "payload": "string",
      "execution_result": "http://example.com"
    },
    "_links": {
      "_self": "string"
    }
  }
]
```

<h3 id="gets-full-blocks-by-id.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<h3 id="gets-full-blocks-by-id.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Block](#schemablock)]|false|none|none|
|» header|[BlockHeader](#schemablockheader)|true|none|none|
|»» id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» parent_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» height|string(uint64)|true|none|none|
|»» timestamp|string(date-time)|true|none|none|
|»» parent_voter_signature|[Signature](#schemasignature)(byte)|true|none|A variable length signature.|
|» payload|[BlockPayload](#schemablockpayload)|false|none|none|
|»» collection_guarantees|[[CollectionGuarantee](#schemacollectionguarantee)]|true|none|none|
|»»» collection_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» signer_ids|[[Identifier](#schemaidentifier)]|true|none|[A 32-byte unique identifier for an entity.]|
|»»» signature|[Signature](#schemasignature)(byte)|true|none|A variable length signature.|
|»» block_seals|[[BlockSeal](#schemablockseal)]|true|none|none|
|»»» block_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» result_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» final_state|[StateCommitment](#schemastatecommitment)(hexadecimal)|true|none|The root hash of the state tree.|
|»»» aggregated_approval_signatures|[[AggregatedSignature](#schemaaggregatedsignature)]|true|none|none|
|»»»» verifier_signatures|[[Signature](#schemasignature)]|true|none|[A variable length signature.]|
|»»»» signer_ids|[[Identifier](#schemaidentifier)]|true|none|[A 32-byte unique identifier for an entity.]|
|» execution_result|[ExecutionResult](#schemaexecutionresult)|false|none|none|
|»» id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» block_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» events|[[Event](#schemaevent)]|true|none|none|
|»»» type|[EventType](#schemaeventtype)|true|none|The qualified event type.|
|»»» transaction_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»»» transaction_index|string(uint64)|true|none|none|
|»»» event_index|string(uint64)|true|none|none|
|»»» payload|string(byte)|true|none|none|
|»» _links|[Links](#schemalinks)|false|none|none|
|»»» _self|string|false|none|none|
|» _expandable|object|true|none|none|
|»» payload|string|false|none|none|
|»» execution_result|string(uri)|false|none|none|
|» _links|[Links](#schemalinks)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="access-api-transactions">Transactions</h1>

## Gets a transaction by ID.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/transactions/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/transactions/{id}', headers = headers)

print(r.json())

```

`GET /transactions/{id}`

<h3 id="gets-a-transaction-by-id.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Identifier](#schemaidentifier)|true|The ID of the transaction to get.|
|expand|query|array[string]|false|A comma-separated list indicating which properties of the content to expand.|
|select|query|array[string]|false|A comma-separated list indicating which properties of the content to return.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "script": "string",
  "arguments": [
    "string"
  ],
  "reference_block_id": "string",
  "gas_limit": "string",
  "payer": "string",
  "proposal_key": {
    "address": "string",
    "key_index": "string",
    "sequence_number": "string"
  },
  "authorizers": [
    "string"
  ],
  "payload_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ],
  "envelope_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ],
  "result": {
    "block_id": "string",
    "status": "Pending",
    "error_message": "string",
    "computation_used": "string",
    "events": [
      {
        "type": "string",
        "transaction_id": "string",
        "transaction_index": "string",
        "event_index": "string",
        "payload": "string"
      }
    ],
    "_links": {
      "_self": "string"
    }
  },
  "_expandable": {
    "result": "http://example.com"
  },
  "_links": {
    "_self": "string"
  }
}
```

<h3 id="gets-a-transaction-by-id.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Transaction](#schematransaction)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a transaction result by ID.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/transaction_results/{transaction_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/transaction_results/{transaction_id}', headers = headers)

print(r.json())

```

`GET /transaction_results/{transaction_id}`

<h3 id="gets-a-transaction-result-by-id.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|path|[Identifier](#schemaidentifier)|true|The transaction ID of the transaction result to get.|
|expand|query|array[string]|false|A comma-separated list indicating which properties of the content to expand.|
|select|query|array[string]|false|A comma-separated list indicating which properties of the content to return.|

> Example responses

> 200 Response

```json
{
  "block_id": "string",
  "status": "Pending",
  "error_message": "string",
  "computation_used": "string",
  "events": [
    {
      "type": "string",
      "transaction_id": "string",
      "transaction_index": "string",
      "event_index": "string",
      "payload": "string"
    }
  ],
  "_links": {
    "_self": "string"
  }
}
```

<h3 id="gets-a-transaction-result-by-id.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TransactionResult](#schematransactionresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Submits a transaction to the network.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://rest-testnet.onflow.org/v1/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://rest-testnet.onflow.org/v1/transactions', headers = headers)

print(r.json())

```

`POST /transactions`

> Body parameter

```json
{
  "script": "string",
  "arguments": [
    "string"
  ],
  "reference_block_id": "string",
  "gas_limit": "string",
  "payer": "string",
  "proposal_key": {
    "address": "string",
    "key_index": "string",
    "sequence_number": "string"
  },
  "authorizers": [
    "string"
  ],
  "payload_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ],
  "envelope_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ]
}
```

<h3 id="submits-a-transaction-to-the-network.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|The transaction to submit.|
|» script|body|string(byte)|true|none|
|» arguments|body|[string]|true|none|
|» reference_block_id|body|[Identifier](#schemaidentifier)(hexadecimal)|true|A 32-byte unique identifier for an entity.|
|» gas_limit|body|string(uint64)|true|none|
|» payer|body|[Address](#schemaaddress)(hexadecimal)|true|The 8-byte address of an account.|
|» proposal_key|body|[ProposalKey](#schemaproposalkey)|true|none|
|»» address|body|[Address](#schemaaddress)(hexadecimal)|true|The 8-byte address of an account.|
|»» key_index|body|string(uint64)|true|none|
|»» sequence_number|body|string(uint64)|true|none|
|» authorizers|body|[[Address](#schemaaddress)]|true|[The 8-byte address of an account.]|
|» payload_signatures|body|[[TransactionSignature](#schematransactionsignature)]|true|none|
|»» address|body|[Address](#schemaaddress)(hexadecimal)|true|The 8-byte address of an account.|
|»» key_index|body|string(uint64)|true|none|
|»» signature|body|[Signature](#schemasignature)(byte)|true|A variable length signature.|
|» envelope_signatures|body|[[TransactionSignature](#schematransactionsignature)]|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "script": "string",
  "arguments": [
    "string"
  ],
  "reference_block_id": "string",
  "gas_limit": "string",
  "payer": "string",
  "proposal_key": {
    "address": "string",
    "key_index": "string",
    "sequence_number": "string"
  },
  "authorizers": [
    "string"
  ],
  "payload_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ],
  "envelope_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ],
  "result": {
    "block_id": "string",
    "status": "Pending",
    "error_message": "string",
    "computation_used": "string",
    "events": [
      {
        "type": "string",
        "transaction_id": "string",
        "transaction_index": "string",
        "event_index": "string",
        "payload": "string"
      }
    ],
    "_links": {
      "_self": "string"
    }
  },
  "_expandable": {
    "result": "http://example.com"
  },
  "_links": {
    "_self": "string"
  }
}
```

<h3 id="submits-a-transaction-to-the-network.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Transaction](#schematransaction)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|uri|The URI to the newly submitted transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="access-api-collections">Collections</h1>

## Gets a collection by ID.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/collections/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/collections/{id}', headers = headers)

print(r.json())

```

`GET /collections/{id}`

<h3 id="gets-a-collection-by-id.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Identifier](#schemaidentifier)|true|The ID of the collection to get.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "transactions": [
    {
      "id": "string",
      "script": "string",
      "arguments": [
        "string"
      ],
      "reference_block_id": "string",
      "gas_limit": "string",
      "payer": "string",
      "proposal_key": {
        "address": "string",
        "key_index": "string",
        "sequence_number": "string"
      },
      "authorizers": [
        "string"
      ],
      "payload_signatures": [
        {
          "address": "string",
          "key_index": "string",
          "signature": "string"
        }
      ],
      "envelope_signatures": [
        {
          "address": "string",
          "key_index": "string",
          "signature": "string"
        }
      ],
      "result": {
        "block_id": "string",
        "status": "Pending",
        "error_message": "string",
        "computation_used": "string",
        "events": [
          {
            "type": null,
            "transaction_id": null,
            "transaction_index": null,
            "event_index": null,
            "payload": null
          }
        ],
        "_links": {
          "_self": "string"
        }
      },
      "_expandable": {
        "result": "http://example.com"
      },
      "_links": {
        "_self": "string"
      }
    }
  ],
  "_expandable": {
    "transactions": [
      "http://example.com"
    ]
  },
  "_links": {
    "_self": "string"
  }
}
```

<h3 id="gets-a-collection-by-id.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Collection](#schemacollection)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="access-api-execution-results">Execution Results</h1>

## Gets execution results by block ID.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/execution_results',
  params: {
  'block_id' => 'array[string]'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/execution_results', params={
  'block_id': [
  "string"
]
}, headers = headers)

print(r.json())

```

`GET /execution_results`

<h3 id="gets-execution-results-by-block-id.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|block_id|query|array[string]|true|A comma-separated list of block IDs to get the execution results for.|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "block_id": "string",
    "events": [
      {
        "type": "string",
        "transaction_id": "string",
        "transaction_index": "string",
        "event_index": "string",
        "payload": "string"
      }
    ],
    "_links": {
      "_self": "string"
    }
  }
]
```

<h3 id="gets-execution-results-by-block-id.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<h3 id="gets-execution-results-by-block-id.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExecutionResult](#schemaexecutionresult)]|false|none|none|
|» id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|» block_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|» events|[[Event](#schemaevent)]|true|none|none|
|»» type|[EventType](#schemaeventtype)|true|none|The qualified event type.|
|»» transaction_id|[Identifier](#schemaidentifier)(hexadecimal)|true|none|A 32-byte unique identifier for an entity.|
|»» transaction_index|string(uint64)|true|none|none|
|»» event_index|string(uint64)|true|none|none|
|»» payload|string(byte)|true|none|none|
|» _links|[Links](#schemalinks)|false|none|none|
|»» _self|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets an execution result by ID.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/execution_results/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/execution_results/{id}', headers = headers)

print(r.json())

```

`GET /execution_results/{id}`

<h3 id="gets-an-execution-result-by-id.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Identifier](#schemaidentifier)|true|The ID of the execution result to get.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "block_id": "string",
  "events": [
    {
      "type": "string",
      "transaction_id": "string",
      "transaction_index": "string",
      "event_index": "string",
      "payload": "string"
    }
  ],
  "_links": {
    "_self": "string"
  }
}
```

<h3 id="gets-an-execution-result-by-id.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ExecutionResult](#schemaexecutionresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="access-api-accounts">Accounts</h1>

## Gets an account by address at the given block height.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/accounts/{address}',
  params: {
  'block_height' => '[BlockHeight](#schemablockheight)'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/accounts/{address}', params={
  'block_height': 'string'
}, headers = headers)

print(r.json())

```

`GET /accounts/{address}`

<h3 id="gets-an-account-by-address-at-the-given-block-height.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|[Address](#schemaaddress)|true|The address of the account to get.|
|block_height|query|[BlockHeight](#schemablockheight)|true|The block height to query for the account details at.|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "balance": "string",
  "keys": [
    {
      "index": "string",
      "public_key": "string",
      "signing_algorithm": "BLSBLS12381",
      "hashing_algorithm": "SHA2_256",
      "sequence_number": "string",
      "weight": "string",
      "revoked": true
    }
  ],
  "contracts": {
    "property1": "string",
    "property2": "string"
  },
  "_expandable": {
    "keys": "string",
    "contracts": "string"
  },
  "_links": {
    "_self": "string"
  }
}
```

<h3 id="gets-an-account-by-address-at-the-given-block-height.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Account](#schemaaccount)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="access-api-scripts">Scripts</h1>

## Executes a read-only Cadence script against the execution state at the given block height or ID. If block height or ID is not specified, then the script is executed at the latest sealed block height.

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://rest-testnet.onflow.org/v1/scripts',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://rest-testnet.onflow.org/v1/scripts', headers = headers)

print(r.json())

```

`POST /scripts`

> Body parameter

```json
{
  "script": "string",
  "arguments": [
    "string"
  ]
}
```

<h3 id="executes-a-read-only-cadence-script-against-the-execution-state-at-the-given-block-height-or-id.-if-block-height-or-id-is-not-specified,-then-the-script-is-executed-at-the-latest-sealed-block-height.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|block_id|query|[Identifier](#schemaidentifier)|false|The ID of the block to execute the script against. For a specific block height, use `block_height` instead.|
|block_height|query|[BlockHeight](#schemablockheight)|false|The height of the block to execute the script against. This parameter is incompatible with `block_id`.|
|body|body|object|true|The script to execute.|
|» script|body|string(byte)|false|none|
|» arguments|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "value": "string"
}
```

<h3 id="executes-a-read-only-cadence-script-against-the-execution-state-at-the-given-block-height-or-id.-if-block-height-or-id-is-not-specified,-then-the-script-is-executed-at-the-latest-sealed-block-height.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<h3 id="executes-a-read-only-cadence-script-against-the-execution-state-at-the-given-block-height-or-id.-if-block-height-or-id-is-not-specified,-then-the-script-is-executed-at-the-latest-sealed-block-height.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» value|string(byte)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="access-api-events">Events</h1>

## get__events

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://rest-testnet.onflow.org/v1/events',
  params: {
  'type' => '[EventType](#schemaeventtype)'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://rest-testnet.onflow.org/v1/events', params={
  'type': 'string'
}, headers = headers)

print(r.json())

```

`GET /events`

<h3 id="get__events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[EventType](#schemaeventtype)|true|The event type is name-spaced with the address of the account and contract in which the event is declared.|
|start_height|query|[BlockHeight](#schemablockheight)|false|The start height of the block range for events. Must be used together with `end_height`. This parameter is incompatible with `block_ids`.|
|end_height|query|[BlockHeight](#schemablockheight)|false|The end height of the block range for events. Must be used together with `start_height`. This parameter is incompatible with `block_ids`.|
|block_ids|query|array[string]|false|none|
|select|query|array[string]|false|A comma-separated list indicating which properties of the content to return.|

> Example responses

> 200 Response

```json
{
  "block_id": "string",
  "block_height": "string",
  "block_timestamp": "2019-08-24T14:15:22Z",
  "events": [
    {
      "type": "string",
      "transaction_id": "string",
      "transaction_index": "string",
      "event_index": "string",
      "payload": "string"
    }
  ],
  "_links": {
    "_self": "string"
  }
}
```

<h3 id="get__events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[BlockEvents](#schemablockevents)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>

<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "address": "string",
  "balance": "string",
  "keys": [
    {
      "index": "string",
      "public_key": "string",
      "signing_algorithm": "BLSBLS12381",
      "hashing_algorithm": "SHA2_256",
      "sequence_number": "string",
      "weight": "string",
      "revoked": true
    }
  ],
  "contracts": {
    "property1": "string",
    "property2": "string"
  },
  "_expandable": {
    "keys": "string",
    "contracts": "string"
  },
  "_links": {
    "_self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|The 8-byte address of an account.|
|balance|string(uint64)|true|none|none|
|keys|[[AccountPublicKey](#schemaaccountpublickey)]|false|none|none|
|contracts|object|false|none|none|
|» **additionalProperties**|string(byte)|false|none|none|
|_expandable|object|true|none|none|
|» keys|string|false|none|none|
|» contracts|string|false|none|none|
|_links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_AccountPublicKey">AccountPublicKey</h2>

<a id="schemaaccountpublickey"></a>
<a id="schema_AccountPublicKey"></a>
<a id="tocSaccountpublickey"></a>
<a id="tocsaccountpublickey"></a>

```json
{
  "index": "string",
  "public_key": "string",
  "signing_algorithm": "BLSBLS12381",
  "hashing_algorithm": "SHA2_256",
  "sequence_number": "string",
  "weight": "string",
  "revoked": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string(uint64)|true|none|none|
|public_key|string(bytes)|true|none|none|
|signing_algorithm|[SigningAlgorithm](#schemasigningalgorithm)|true|none|none|
|hashing_algorithm|[HashingAlgorithm](#schemahashingalgorithm)|true|none|none|
|sequence_number|string(uint64)|true|none|none|
|weight|string(uint64)|true|none|none|
|revoked|boolean|true|none|none|

<h2 id="tocS_SigningAlgorithm">SigningAlgorithm</h2>

<a id="schemasigningalgorithm"></a>
<a id="schema_SigningAlgorithm"></a>
<a id="tocSsigningalgorithm"></a>
<a id="tocssigningalgorithm"></a>

```json
"BLSBLS12381"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|BLSBLS12381|
|*anonymous*|ECDSAP256|
|*anonymous*|ECDSASecp256k1|

<h2 id="tocS_HashingAlgorithm">HashingAlgorithm</h2>

<a id="schemahashingalgorithm"></a>
<a id="schema_HashingAlgorithm"></a>
<a id="tocShashingalgorithm"></a>
<a id="tocshashingalgorithm"></a>

```json
"SHA2_256"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|SHA2_256|
|*anonymous*|SHA2_384|
|*anonymous*|SHA3_256|
|*anonymous*|SHA3_384|
|*anonymous*|KMAC128|

<h2 id="tocS_Collection">Collection</h2>

<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "id": "string",
  "transactions": [
    {
      "id": "string",
      "script": "string",
      "arguments": [
        "string"
      ],
      "reference_block_id": "string",
      "gas_limit": "string",
      "payer": "string",
      "proposal_key": {
        "address": "string",
        "key_index": "string",
        "sequence_number": "string"
      },
      "authorizers": [
        "string"
      ],
      "payload_signatures": [
        {
          "address": "string",
          "key_index": "string",
          "signature": "string"
        }
      ],
      "envelope_signatures": [
        {
          "address": "string",
          "key_index": "string",
          "signature": "string"
        }
      ],
      "result": {
        "block_id": "string",
        "status": "Pending",
        "error_message": "string",
        "computation_used": "string",
        "events": [
          {
            "type": null,
            "transaction_id": null,
            "transaction_index": null,
            "event_index": null,
            "payload": null
          }
        ],
        "_links": {
          "_self": "string"
        }
      },
      "_expandable": {
        "result": "http://example.com"
      },
      "_links": {
        "_self": "string"
      }
    }
  ],
  "_expandable": {
    "transactions": [
      "http://example.com"
    ]
  },
  "_links": {
    "_self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|transactions|[[Transaction](#schematransaction)]|false|none|none|
|_expandable|object|true|none|none|
|» transactions|[string]|false|none|none|
|_links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_Transaction">Transaction</h2>

<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "id": "string",
  "script": "string",
  "arguments": [
    "string"
  ],
  "reference_block_id": "string",
  "gas_limit": "string",
  "payer": "string",
  "proposal_key": {
    "address": "string",
    "key_index": "string",
    "sequence_number": "string"
  },
  "authorizers": [
    "string"
  ],
  "payload_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ],
  "envelope_signatures": [
    {
      "address": "string",
      "key_index": "string",
      "signature": "string"
    }
  ],
  "result": {
    "block_id": "string",
    "status": "Pending",
    "error_message": "string",
    "computation_used": "string",
    "events": [
      {
        "type": "string",
        "transaction_id": "string",
        "transaction_index": "string",
        "event_index": "string",
        "payload": "string"
      }
    ],
    "_links": {
      "_self": "string"
    }
  },
  "_expandable": {
    "result": "http://example.com"
  },
  "_links": {
    "_self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|script|string(byte)|true|none|none|
|arguments|[string]|true|none|none|
|reference_block_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|gas_limit|string(uint64)|true|none|none|
|payer|[Address](#schemaaddress)|true|none|The 8-byte address of an account.|
|proposal_key|[ProposalKey](#schemaproposalkey)|true|none|none|
|authorizers|[[Address](#schemaaddress)]|true|none|[The 8-byte address of an account.]|
|payload_signatures|[[TransactionSignature](#schematransactionsignature)]|true|none|none|
|envelope_signatures|[[TransactionSignature](#schematransactionsignature)]|true|none|none|
|result|[TransactionResult](#schematransactionresult)|false|none|none|
|_expandable|object|true|none|none|
|» result|string(uri)|false|none|none|
|_links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_ProposalKey">ProposalKey</h2>

<a id="schemaproposalkey"></a>
<a id="schema_ProposalKey"></a>
<a id="tocSproposalkey"></a>
<a id="tocsproposalkey"></a>

```json
{
  "address": "string",
  "key_index": "string",
  "sequence_number": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|The 8-byte address of an account.|
|key_index|string(uint64)|true|none|none|
|sequence_number|string(uint64)|true|none|none|

<h2 id="tocS_TransactionSignature">TransactionSignature</h2>

<a id="schematransactionsignature"></a>
<a id="schema_TransactionSignature"></a>
<a id="tocStransactionsignature"></a>
<a id="tocstransactionsignature"></a>

```json
{
  "address": "string",
  "key_index": "string",
  "signature": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|The 8-byte address of an account.|
|key_index|string(uint64)|true|none|none|
|signature|[Signature](#schemasignature)|true|none|A variable length signature.|

<h2 id="tocS_TransactionResult">TransactionResult</h2>

<a id="schematransactionresult"></a>
<a id="schema_TransactionResult"></a>
<a id="tocStransactionresult"></a>
<a id="tocstransactionresult"></a>

```json
{
  "block_id": "string",
  "status": "Pending",
  "error_message": "string",
  "computation_used": "string",
  "events": [
    {
      "type": "string",
      "transaction_id": "string",
      "transaction_index": "string",
      "event_index": "string",
      "payload": "string"
    }
  ],
  "_links": {
    "_self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|status|[TransactionStatus](#schematransactionstatus)|true|none|none|
|error_message|string|true|none|none|
|computation_used|string(uint64)|true|none|none|
|events|[[Event](#schemaevent)]|true|none|none|
|_links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_TransactionStatus">TransactionStatus</h2>

<a id="schematransactionstatus"></a>
<a id="schema_TransactionStatus"></a>
<a id="tocStransactionstatus"></a>
<a id="tocstransactionstatus"></a>

```json
"Pending"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Pending|
|*anonymous*|Finalized|
|*anonymous*|Executed|
|*anonymous*|Sealed|
|*anonymous*|Expired|

<h2 id="tocS_Block">Block</h2>

<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "header": {
    "id": "string",
    "parent_id": "string",
    "height": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "parent_voter_signature": "string"
  },
  "payload": {
    "collection_guarantees": [
      {
        "collection_id": "string",
        "signer_ids": [
          "string"
        ],
        "signature": "string"
      }
    ],
    "block_seals": [
      {
        "block_id": "string",
        "result_id": "string",
        "final_state": "string",
        "aggregated_approval_signatures": [
          {
            "verifier_signatures": null,
            "signer_ids": null
          }
        ]
      }
    ]
  },
  "execution_result": {
    "id": "string",
    "block_id": "string",
    "events": [
      {
        "type": "string",
        "transaction_id": "string",
        "transaction_index": "string",
        "event_index": "string",
        "payload": "string"
      }
    ],
    "_links": {
      "_self": "string"
    }
  },
  "_expandable": {
    "payload": "string",
    "execution_result": "http://example.com"
  },
  "_links": {
    "_self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[BlockHeader](#schemablockheader)|true|none|none|
|payload|[BlockPayload](#schemablockpayload)|false|none|none|
|execution_result|[ExecutionResult](#schemaexecutionresult)|false|none|none|
|_expandable|object|true|none|none|
|» payload|string|false|none|none|
|» execution_result|string(uri)|false|none|none|
|_links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_BlockHeader">BlockHeader</h2>

<a id="schemablockheader"></a>
<a id="schema_BlockHeader"></a>
<a id="tocSblockheader"></a>
<a id="tocsblockheader"></a>

```json
{
  "id": "string",
  "parent_id": "string",
  "height": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "parent_voter_signature": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|parent_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|height|string(uint64)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|parent_voter_signature|[Signature](#schemasignature)|true|none|A variable length signature.|

<h2 id="tocS_BlockPayload">BlockPayload</h2>

<a id="schemablockpayload"></a>
<a id="schema_BlockPayload"></a>
<a id="tocSblockpayload"></a>
<a id="tocsblockpayload"></a>

```json
{
  "collection_guarantees": [
    {
      "collection_id": "string",
      "signer_ids": [
        "string"
      ],
      "signature": "string"
    }
  ],
  "block_seals": [
    {
      "block_id": "string",
      "result_id": "string",
      "final_state": "string",
      "aggregated_approval_signatures": [
        {
          "verifier_signatures": [
            "string"
          ],
          "signer_ids": [
            "string"
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_guarantees|[[CollectionGuarantee](#schemacollectionguarantee)]|true|none|none|
|block_seals|[[BlockSeal](#schemablockseal)]|true|none|none|

<h2 id="tocS_CollectionGuarantee">CollectionGuarantee</h2>

<a id="schemacollectionguarantee"></a>
<a id="schema_CollectionGuarantee"></a>
<a id="tocScollectionguarantee"></a>
<a id="tocscollectionguarantee"></a>

```json
{
  "collection_id": "string",
  "signer_ids": [
    "string"
  ],
  "signature": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|signer_ids|[[Identifier](#schemaidentifier)]|true|none|[A 32-byte unique identifier for an entity.]|
|signature|[Signature](#schemasignature)|true|none|A variable length signature.|

<h2 id="tocS_BlockSeal">BlockSeal</h2>

<a id="schemablockseal"></a>
<a id="schema_BlockSeal"></a>
<a id="tocSblockseal"></a>
<a id="tocsblockseal"></a>

```json
{
  "block_id": "string",
  "result_id": "string",
  "final_state": "string",
  "aggregated_approval_signatures": [
    {
      "verifier_signatures": [
        "string"
      ],
      "signer_ids": [
        "string"
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|result_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|final_state|[StateCommitment](#schemastatecommitment)|true|none|The root hash of the state tree.|
|aggregated_approval_signatures|[[AggregatedSignature](#schemaaggregatedsignature)]|true|none|none|

<h2 id="tocS_StateCommitment">StateCommitment</h2>

<a id="schemastatecommitment"></a>
<a id="schema_StateCommitment"></a>
<a id="tocSstatecommitment"></a>
<a id="tocsstatecommitment"></a>

```json
"string"

```

The root hash of the state tree.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(hexadecimal)|false|none|The root hash of the state tree.|

<h2 id="tocS_AggregatedSignature">AggregatedSignature</h2>

<a id="schemaaggregatedsignature"></a>
<a id="schema_AggregatedSignature"></a>
<a id="tocSaggregatedsignature"></a>
<a id="tocsaggregatedsignature"></a>

```json
{
  "verifier_signatures": [
    "string"
  ],
  "signer_ids": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verifier_signatures|[[Signature](#schemasignature)]|true|none|[A variable length signature.]|
|signer_ids|[[Identifier](#schemaidentifier)]|true|none|[A 32-byte unique identifier for an entity.]|

<h2 id="tocS_ExecutionResult">ExecutionResult</h2>

<a id="schemaexecutionresult"></a>
<a id="schema_ExecutionResult"></a>
<a id="tocSexecutionresult"></a>
<a id="tocsexecutionresult"></a>

```json
{
  "id": "string",
  "block_id": "string",
  "events": [
    {
      "type": "string",
      "transaction_id": "string",
      "transaction_index": "string",
      "event_index": "string",
      "payload": "string"
    }
  ],
  "_links": {
    "_self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|block_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|events|[[Event](#schemaevent)]|true|none|none|
|_links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_BlockEvents">BlockEvents</h2>

<a id="schemablockevents"></a>
<a id="schema_BlockEvents"></a>
<a id="tocSblockevents"></a>
<a id="tocsblockevents"></a>

```json
{
  "block_id": "string",
  "block_height": "string",
  "block_timestamp": "2019-08-24T14:15:22Z",
  "events": [
    {
      "type": "string",
      "transaction_id": "string",
      "transaction_index": "string",
      "event_index": "string",
      "payload": "string"
    }
  ],
  "_links": {
    "_self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_id|[Identifier](#schemaidentifier)|false|none|A 32-byte unique identifier for an entity.|
|block_height|string|false|none|none|
|block_timestamp|string(date-time)|false|none|none|
|events|[[Event](#schemaevent)]|false|none|none|
|_links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_Event">Event</h2>

<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "type": "string",
  "transaction_id": "string",
  "transaction_index": "string",
  "event_index": "string",
  "payload": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[EventType](#schemaeventtype)|true|none|The qualified event type.|
|transaction_id|[Identifier](#schemaidentifier)|true|none|A 32-byte unique identifier for an entity.|
|transaction_index|string(uint64)|true|none|none|
|event_index|string(uint64)|true|none|none|
|payload|string(byte)|true|none|none|

<h2 id="tocS_BlockHeight">BlockHeight</h2>

<a id="schemablockheight"></a>
<a id="schema_BlockHeight"></a>
<a id="tocSblockheight"></a>
<a id="tocsblockheight"></a>

```json
"string"

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(uint64)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|final|
|*anonymous*|sealed|

<h2 id="tocS_EventType">EventType</h2>

<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"string"

```

The qualified event type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The qualified event type.|

<h2 id="tocS_Address">Address</h2>

<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
"string"

```

The 8-byte address of an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(hexadecimal)|false|none|The 8-byte address of an account.|

<h2 id="tocS_Identifier">Identifier</h2>

<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"

```

A 32-byte unique identifier for an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(hexadecimal)|false|none|A 32-byte unique identifier for an entity.|

<h2 id="tocS_Signature">Signature</h2>

<a id="schemasignature"></a>
<a id="schema_Signature"></a>
<a id="tocSsignature"></a>
<a id="tocssignature"></a>

```json
"string"

```

A variable length signature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(byte)|false|none|A variable length signature.|

<h2 id="tocS_Error">Error</h2>

<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_Links">Links</h2>

<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "_self": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_self|string|false|none|none|

