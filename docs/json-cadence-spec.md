# JSON-Cadence Data Interchange Format

> Version 0.1.1

JSON-Cadence is a data interchange format used to represent Cadence values as language-independent JSON objects.

This format includes less descriptive type information than a complete [ABI](https://en.wikipedia.org/wiki/Application_binary_interface), and instead promotes the following tenets:

- **Human-readability** - JSON-Cadence is easy to read and comprehend, which speeds up development and debugging.
- **Compatibility** - JSON is a common format with built-in support in most high-level programming languages, making it easy to parse on a variety of platforms.
- **Portability** - JSON-Cadence is self-describing and thus can be transported and decoded without accompanying type definitions (i.e. an ABI).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Optional](#optional)
- [Bool](#bool)
- [String](#string)
- [Address](#address)
- [Integers](#integers)
- [Fixed Point](#fixed-point)
- [Array](#array)
- [Dictionary](#dictionary)
- [Composites (Struct, Resource, Event)](#composites-struct-resource-event)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Void

```
{
  "type": "Void"
}
```

**Example**

```
{
  "type": "Void"
}
```

---

## Optional

```
{
  "type": "Optional",
  "value": null | <value>
}

```

**Example**

```
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

```
{
  "type": "Bool",
  "value": true | false
}
```

**Example**

```
{
  "type": "Bool",
  "value": true
}
```

---

## String

```
{
  "type": "String",
  "value": "..."
}

```

**Example**

```
{
  "type": "String",
  "value": "Hello, world!"
}
```

---

## Address

```
{
  "type": "Address",
  "value": "0x0" // as hex-encoded string with 0x prefix
}
```

**Example**

```
{
  "type": "Address",
  "value": "0x1234"
}
```

---

## Integers

`[U]Int`, `[U]Int8`, `[U]Int16`, `[U]Int32`,`[U]Int64`,`[U]Int128`, `[U]Int256`,  `Word8`, `Word16`, `Word32`, or `Word64`

Although JSON supports integer literals up to 64 bits, all integer types are encoded as strings for consistency.

While the static type is not strictly required for decoding, it is provided to inform client of potential range.

```
{
  "type": "<type>",
  "value": "<decimal string representation of integer>"
}

```

**Example**

```
{
  "type": "UInt8",
  "value": "123"
}
```

---

## Fixed Point

`[U]Fix64`

Although fixed point numbers are implemented as integers, JSON-Cadence uses a decimal string representation for readability.

```
{
    "type": "[U]Fix64",
    "value": "<integer>.<fractional>"
}

```

**Example**

```

{
    "type": "Fix64",
    "value": "12.3"
}
```

---

## Array

```
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

```
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

Dictionaries are encoded as a list of key-value pairs to preserve the deterministic ordering implemented by Cadence.

```
{
  "type": "Dictionary"
  "value": [
    {
      "key": "<key>", 
      "value": <value>
    },
    ...
  ]
}

```

**Example**

```
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

---

## Composites (Struct, Resource, Event)

`"Event"`, `"Struct"`, `"Resource"`

Composite fields are encoded as a list of name-value pairs in the order in which they appear in the composite type declaration.

```
{
  "type": "Struct" | "Resource" | "Event",
  "value": {
    "id": "<fully qualified type identifier>",
    "fields": [
      {
        "name": "<field name>",
        "value": <field value>
      },
      ...
    ]
  }
}
```

**Example** 

```
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
