# JSON Cadence Value Encoding Specification

> Version 0.1.1

JSON-Cadence is an encoding format used to represent Cadence values as language-agnostic JSON objects.

This format is purposefully less descriptive than a complete ABI, and instead promotes the following tenets:

- **Human-readability** - This format is easy to read and comprehend, which speeds up development and debugging.
- **Compatibility** - JSON is a common spec with built-in support in most high-level programming languages, making it easy to parse on a variety of platforms.
- **Portability** - This format is self-describing and thus can be transported and decoded without accompanying type definitions (i.e. ABI).

-- 

## Void

```json
{
  "type": "Void"
}
```

**Example**

```json
{
  "type": "Void"
}
```

---

## Optional

```json
{
  "type": "Optional",
  "value": null | <value>
}

```

**Example**

```json
// Non-nil

{
  "type": "Optional",
  "value": {
    "type": "UInt8",
    "value": "123"
  }
}

// Nil

{
  "type": "Optional",
  "value": null
}
```

---

## Bool

```json
{
  "type": "Bool"
  "value": true | false
}
```

**Example**

```json
{
  "type": "Bool",
  "value": true
}
```

---

## String

```json
{
  "type": "String",
  "value": "..."
}

```

**Example**

```json
{
  "type": "String",
  "value": "Hello, world!"
}
```

---

## Address

```json
{
  "type": "Address",
  "value": "0x0" // as hex-encoded string with 0x prefix
}
```

**Example**

```json
{
  "type": "Address",
  "value": "0x1234"
}
```

---

## Integers

`[U]Int`, `[U]Int8`, `[U]Int16`, `[U]Int32`,`[U]Int64`,`[U]Int128`, `[U]Int256`,  `Word8`, `Word16`, `Word32`, or `Word64`

All integer types are encoded as strings for consistency, even though the JSON spec supports number literals for integers up to 64 bits.

Although the static type is not strictly required for decoding, it is provided to inform client of potential range.

```json
{
  "type": "<type>",
  "value": "<decimal string representation of integer>"
}

```

**Example**

```json
{
  "type": "UInt8",
  "value": "123"
}
```

- Type: `[U]Int`, `[U]Int8`, `[U]Int16`, `[U]Int32`,`[U]Int64`,`[U]Int128`, `[U]Int256`,  `Word8`, `Word16`, `Word32`, or `Word64`
- Includes the static type to let client know about potential range
- Always encoding as string for consistency
- JavaScript:
    - `[U]Int8`, `[U]Int16`, `[U]Int32`, `Word8`, `Word16`, `Word32`: decode as JS `number`
    - `[U]Int`,`[U]Int64`,`[U]Int128`, `[U]Int256`, `Word64`: decode as JS `BigInt`
    - (JavaScript's `Number.MAX_SAFE_INTEGER` is 2^53 - 1)

---

## Fixed Point

```json
{
    "type": "[U]Fix64",
    "value": "<integer>.<fractional>"
}

```

**Example**

```json

{
    "type": "Fix64",
    "value": "12.3"
}
```

- Type: `[U]Fix64`
- JavaScript library should have `[U]Fix64` types which parse and know e.g. factor is 10^8
- As decimal for readability reasons

---

## Array

```json
{
  "type": "Array",
  "value": [
    <value for index 0>,
    <value for index 1>
    ...
  ]
}

```

**Example**

```json
{
  "type": "Array",
  "value": [
    {
      "type": "Int16",
      "value": "123"
    },
    {
      "type": "String",
      "value": "test"
    },
    {
      "type": "Bool",
      "value": true
    }
  ]
}
```

---

## Dictionary

```json
{
  "type": "Dictionary"
  "value": [
    {
      "key": <key>, 
      "value": <value>
    },
    ...
  ]
}

```

**Example**

```json
{
  "type": "Dictionary"
  "value": [
    {
      "key": {
        "type": "UInt8",
        "value": "123"
      }, 
      "value": {
        "type": "String",
        "value": "test"
      },
    }
  ],
  ...
}
```

- In order of keys
- Not a JSON dictionary, because keys might be non-string

---

## Composites (Struct, Resource, Event)

```json
{
  "type": "Struct" | "Resource" | "Event",
  "value": {
    "id": "<fully qualified type identifier>",
    "fields": [
      {
        "name": "<field name>",
        "value": <field value>
      },
      // ...
    ]
  }
}
```

**Example** 

```json
{
  "type": "Resource",
  "value": {
    "id": "0x3.GreatContract.GreatNFT",
    "fields": [
      {
        "name": "power",
        "value": {"type": "Int", "value": "1"}
      }
    ]
  }
}
```

- Type: `"Event"`, `"Struct"`, `"Resource"`
- Fields must be in alphabetical order
