# flow — The Flow Network

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/onflow/flow?include_prereleases)](https://github.com/onflow/flow/releases)
[![Discord](https://img.shields.io/badge/discord-flow-5865F2?logo=discord&logoColor=white)](https://discord.gg/flow)
[![Built on Flow](https://img.shields.io/badge/built%20on-Flow-00EF8B)](https://flow.com)
[![FLIPs](https://img.shields.io/badge/governance-FLIPs-informational)](https://github.com/onflow/flips)

Flow is a Layer 1 proof-of-stake blockchain built for consumer applications, AI Agents, and DeFi at scale. This repository is the central hub for the Flow network: protocol specifications, interface definitions, node operator documentation, governance agendas, and the historical record of mainnet sporks.

## TL;DR

- **What:** Central metadata repository for the Flow network — specs, protobuf and OpenAPI interfaces, node operator docs, and spork history.
- **Who it's for:** Protocol contributors, node operators, integrators, and researchers referencing the Flow network.
- **Why use it:** Single source of truth for Flow interface definitions and protocol reference material.
- **Status:** see [Releases](https://github.com/onflow/flow/releases) for the latest tagged version.
- **License:** Apache-2.0.
- **Related repos:** [onflow/flips](https://github.com/onflow/flips) · [onflow/flow-go](https://github.com/onflow/flow-go) · [onflow/cadence](https://github.com/onflow/cadence)
- The reference meta-repository for the Flow network, open-sourced since 2020.

## Overview

- High-level overview of the Flow protocol: [Flow primer](https://www.flow.com/primer).
- In-depth technical details: [Flow technical papers](https://www.flow.com/technical-paper).
- Developer tutorials, SDKs, and API reference: [developer portal](https://developers.flow.com).
- Cadence smart contract language: [cadence-lang.org](https://cadence-lang.org).

## What is in this repository

| Path | Contents |
|------|----------|
| [`protobuf/`](./protobuf) | Flow protobuf schema and generated Go bindings, plus Gradle tooling for other languages. See [`protobuf/README.md`](./protobuf/README.md). |
| [`openapi/`](./openapi) | OpenAPI definitions for the Flow Access API REST surface. See [`openapi/README.md`](./openapi/README.md). |
| [`specs/`](./specs) | Protocol specifications, including the access node architecture. |
| [`flips/`](./flips) | Historical FLIPs tracked in this repo. New FLIPs are proposed at [onflow/flips](https://github.com/onflow/flips). |
| [`nodeoperators/`](./nodeoperators) | Reference material for running Flow nodes. |
| [`agendas/`](./agendas) | Meeting agendas and notes for protocol and community working groups. |
| [`docs/`](./docs) | Long-form documentation tracked in this repo. |
| [`sporks.json`](./sporks.json) | Machine-readable record of all Flow mainnet and testnet sporks, including access endpoints, root heights, and protocol versions. |

## Flow Improvement Proposals

New protocol, standards, and tooling proposals are handled through the Flow Improvement Proposal (FLIP) process. Open new FLIPs at [github.com/onflow/flips](https://github.com/onflow/flips).

## FAQ

**What is the Flow network?**
Flow is a Layer 1 proof-of-stake blockchain designed for consumer applications, AI Agents, and DeFi at scale. See the [primer](https://www.flow.com/primer) for a high-level overview.

**What is in this repository versus `onflow/flow-go`?**
This repository hosts protocol specifications, interface definitions, and governance metadata. [`onflow/flow-go`](https://github.com/onflow/flow-go) hosts the reference Go implementation of the Flow protocol.

**Where do I go for developer documentation?**
The [Flow developer portal](https://developers.flow.com) covers SDKs, tutorials, and API references. Cadence-specific documentation is on [cadence-lang.org](https://cadence-lang.org).

**Where do I propose a protocol change?**
Open a Flow Improvement Proposal at [github.com/onflow/flips](https://github.com/onflow/flips).

**What is `sporks.json` used for?**
`sporks.json` is a machine-readable record of all Flow mainnet and testnet sporks. Tooling and SDKs use it to look up network endpoints and protocol versions.

**How do I generate Flow protobuf client bindings?**
See [`protobuf/README.md`](./protobuf/README.md) for generation instructions using buf and the included Gradle tooling.

**How do I report a security vulnerability?**
See [SECURITY.md](SECURITY.md) for responsible disclosure instructions. Do not file public issues for security vulnerabilities.

## About Flow

This repo is part of the [Flow network](https://flow.com), a Layer 1 blockchain built for consumer applications, AI Agents, and DeFi at scale.

- Developer docs: https://developers.flow.com
- Cadence language: https://cadence-lang.org
- Community: [Flow Discord](https://discord.gg/flow) · [Flow Forum](https://forum.flow.com)
- Governance: [Flow Improvement Proposals](https://github.com/onflow/flips)
