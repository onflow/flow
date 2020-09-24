---
title: Emulator Changelog
sidebar_title: Changelog
---

## Version 0.8.0

### SDK Compatibility

| Flow Go SDK v0.6.0 | Flow Go SDK v0.7.0 | Flow Go SDK v0.7.1 | Flow Go SDK v0.8.0 | Flow Go SDK v0.9.0 |
|--|--|--|--|--|
|❌|✅|✅|✅|✅|

### 💥  Breaking Changes

**Upgrade to Cadence `v0.8.0`:** https://github.com/onflow/cadence/releases/tag/v0.8.0

- Arguments passed to `cadence.Value#WithType` are now typed as pointers (`*cadence.Type`) rather than values (`cadence.Type`). 

  Example:

  ```go
  myEventType := cadence.EventType{...})

  // this 👇 
  myEvent := cadence.NewEvent(...).WithType(myEventType)

  // changes to this 👇 
  myEvent := cadence.NewEvent(...).WithType(&myEventType)
  ```

---

## Version 0.5.1

### SDK Compatibility

| Flow Go SDK v0.6.0 | Flow Go SDK v0.7.0 | Flow Go SDK v0.7.1 |
|--|--|--|
|❌|✅|✅|

### 🐞 Bug Fixes

- Upgrade to Cadence `v0.5.1`: https://github.com/onflow/cadence/releases/tag/v0.5.1

### ⚙️ Installing & Upgrading

#### Flow CLI

This version of the emulator is included in v0.5.1 of the [Flow CLI](./cli.md).

#### Docker

```
docker run -p 3569:3569 gcr.io/dl-flow/emulator:v0.5.1
```

---

## Version 0.5.0

### SDK Compatibility

| Flow Go SDK v0.6.0 | Flow Go SDK v0.7.0 | Flow Go SDK v0.7.1 |
|--|--|--|
|❌|✅|✅|

### 💥  Breaking Changes

#### Cadence v0.5.0

The emulator has been upgraded to use the latest Cadence release. Please view the Cadence release notes for an overview of the features and changes introduced in this release: https://github.com/onflow/cadence/releases/tag/v0.5.0

**Byte Array Literals**

Cadence now represents all byte arrays as `[UInt8]` rather than `[Int]`. This affects the following functions:

- `AuthAccount.addPublicKey(publicKey: [Int])` => `AuthAccount.addPublicKey(publicKey: [UInt8])` 
- `AuthAccount.setCode(code: [Int])` => `AuthAccount.setCode(code: [UInt8])`

However, array literals such as the following will still be inferred as `[Int]`, meaning that they can't be used directly:

```
myAccount.addPublicKey([1, 2, 3])
```

There are two recommended workarounds:
- Pass byte arrays as hexadecimal strings and decode in Cadence [JS Example](https://github.com/onflow/flow-js-sdk/blob/master/packages/six-create-account/src/six-create-account.js#L10-L18)
- Pass byte arrays as transaction arguments typed as `[UInt8]` [Go Example](https://github.com/onflow/flow-go-sdk/blob/master/templates/accounts.go#L28-L63)

#### Data storage format

The underlying data format used for persistent storage has changed from `gob` encoding to CBOR (https://github.com/dapperlabs/flow-emulator/pull/72). This means that existing persisted data will not be compatible with `v0.5.0` onwards.

### ⭐ Features

- The `ExecuteScriptAtLatestBlock`, `ExecuteScriptAtBlockHeight`, and `ExecuteScriptAtBlockID` methods now accept script arguments [Go Example](https://github.com/onflow/flow-go-sdk/blob/master/examples/user_signature/main.go#L149-L160)

### ⚙️ Installing & Upgrading

#### Flow CLI

This version of the emulator is included in v0.5.0 of the [Flow CLI](./cli.md).

#### Docker

```
docker run -p 3569:3569 gcr.io/dl-flow/emulator:v0.5.0
```

---

## Version 0.4.0

### 💥 Breaking Changes

- Terminology change from "root account" to "service account." This affects the following configuration parameters, but does not change functionality of the ~root~ service account:
  - `FLOW_ROOTPRIVATEKEY` => `FLOW_SERVICEPRIVATEKEY` (`--service-priv-key`)
  - `FLOW_ROOTPUBLICKEY` => `FLOW_SERVICEPUBLICKEY` (`--service-pub-key`)
  - `FLOW_ROOTKEYSIGALGO` => `FLOW_SERVICEKEYSIGALGO` (`--service-sig-algo`)
  - `FLOW_ROOTKEYHASHALGO` => `FLOW_SERVICEKEYHASHALGO` (`--service-hash-algo`)

- Address generation format changes to be non-monotonic.
  - Service account address is now `0xf8d6e0586b0a20c7`
    - Using SDK: `flow.ServiceAddress(flow.Emulator)`

- On initial startup, the emulator execution state is bootstrapped with the following reserved accounts:
  - **1. Service account**: `0xf8d6e0586b0a20c7`
  - **2. FungibleToken**: `0xee82856bf20e2aa6`
  - **3. FlowToken**: `0x0ae53cb6e3f42a79`
  - **4. FlowFees**: `0xe5a8b7f23e8b548f`
  - After this, the first user account created will have the following address:
    - **5. First user account**: `0x01cf0e2f2f715450`

### ⚙️ Installing & Upgrading

#### Flow CLI

This version of the emulator is included in v0.4.0 of the [Flow CLI](./cli.md).

#### Docker

```
docker run -p 3569:3569 gcr.io/dl-flow/emulator:v0.4.0
```
