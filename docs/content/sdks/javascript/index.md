---
title: Flow JavaScript SDK
sidebar_title: Introduction
---

**EARLY PUBLIC ALPHA**

All changes to a module will be reflected in the modules version number (including breaking changes) as a patch, until we are confident the module is working and stable, at which point we will release a `v1.0.0`. After a `v1.0.0` release of a module we will strictly follow SemVer.

## Requirements

Please note, that some code provided - e.g. `Object.fromEntries` - will require Node version `v12.0.0 or higher`.

## Overview

- Higher Level

  - [`@onflow/fcl`](/sdks/javascript/fcl/) _(mvp)_ -- A high level dapp framework built on top an opinionated use of the sdk.
  - [`@onflow/sdk`](https://github.com/onflow/flow-js-sdk/tree/master/packages/sdk) _(mvp)_ -- Tools that enable developers to [build](https://github.com/onflow/flow-js-sdk/tree/master/packages/sdk/src/build), [resolve](https://github.com/onflow/flow-js-sdk/tree/master/packages/sdk/src/resolve), [send](https://github.com/onflow/flow-js-sdk/tree/master/packages/send) and [decode](https://github.com/onflow/flow-js-sdk/tree/master/packages/decode) interactions with the Flow blockchain.
  - [`@onflow/types`](https://github.com/onflow/flow-js-sdk/tree/master/packages/types) _(early wip)_ -- Type casting interaction params to cadence compatible values.
  - [`@onflow/send`](https://github.com/onflow/flow-js-sdk/tree/master/packages/send) _(mvp)_ -- Send [interactions](https://github.com/onflow/flow-js-sdk/tree/master/packages/interaction) to the Flow blockchain get [responses](https://github.com/onflow/flow-js-sdk/tree/master/packages/response) back.
  - [`@onflow/decode`](https://github.com/onflow/flow-js-sdk/tree/master/packages/decode) _(mvp)_ -- Decodes [responses](https://github.com/onflow/flow-js-sdk/tree/master/packages/response) return values into Javascript (No need for an ABI).

- Lower Level

  - [`@onflow/protobuf`](https://github.com/onflow/flow-js-sdk/tree/master/packages/protobuf) _(mvp)_ -- Dependency of [send](https://github.com/onflow/flow-js-sdk/tree/master/packages/protobuf). Provides transport between the browser and the Flow blockchain.
  - [`@onflow/interaction`](https://github.com/onflow/flow-js-sdk/tree/master/packages/interaction) _(mvp)_ -- A data structure that can be [built](https://github.com/onflow/flow-js-sdk/tree/master/packages/sdk/src/build), [resolved](https://github.com/onflow/flow-js-sdk/tree/master/packages/sdk/src/resolve) and [sent](https://github.com/onflow/flow-js-sdk/tree/master/packages/send) to the Flow blockchain.
  - [`@onflow/response`](https://github.com/onflow/flow-js-sdk/tree/master/packages/response) _(mvp)_ -- A data structure that represents a response from the Flow blockchain. If the interaction returns something, it can be [decoded](https://github.com/onflow/flow-js-sdk/package/decode) without something like an ABI.
  - [`@onflow/encode`](https://github.com/onflow/flow-js-sdk/tree/master/packages/encode) _(mvp)_ -- Transactions needs signatures, this module knows how to create the values that get signed.

- Development Tools
  - [`@onflow/dev-wallet`](https://github.com/onflow/flow-js-sdk/tree/master/packages/dev-wallet) _(mvp)_ -- A local fcl wallet provider for local development and testing.
