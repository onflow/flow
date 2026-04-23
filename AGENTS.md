# AGENTS.md

Guidance for AI coding agents (Claude Code, Codex, Cursor, Copilot, and others) working in this
repository. Loaded into agent context automatically — keep it concise.

## Overview

`onflow/flow` is the central metadata and interface-definition hub for the Flow network: protobuf
schemas for the Flow Access gRPC API, OpenAPI definitions for the Access REST API, protocol
specifications, node operator reference material, governance agendas, and the mainnet/testnet
spork history (`sporks.json`). This is NOT the Go node implementation — that lives at
[`onflow/flow-go`](https://github.com/onflow/flow-go). License: Apache-2.0.

## Build and Test Commands

This repo has no unified build. Each tooling directory owns its own build commands.

### protobuf/
- `cd protobuf && make generate` — regenerate Go gRPC stubs via `buf generate` (wipes and
  rewrites `go/flow/{access,execution,entities,legacy}`).
- `cd protobuf && make format` — `clang-format -style=google` across `flow/**/*.proto`.
- `cd protobuf && ./gradlew generateProto` — compile protobufs into local Java classes.
- `cd protobuf && ./gradlew check build` — JVM build used by CI (`ci-pull-request-jvm-protobuf.yml`).
- `cd protobuf && ./gradlew publishAndReleaseToMavenCentral` — release JVM artifacts (CI-only,
  gated by `FLOW_JVM_SDK_CICD_PUBLISH_ENABLED`).

Prereqs for `make generate` (from `protobuf/README.md`):
```
go install github.com/golang/protobuf/protoc-gen-go@v1.3.2
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.3.0
```

### openapi/
- `cd openapi && make generate` — regenerate `go-client-generated/` from `access.yaml` using
  local `swagger-codegen`.
- `cd openapi && make generate-docker` — same, using `swaggerapi/swagger-codegen-cli-v3` container.
- `cd openapi/experimental && make generate` / `make generate-docker` — same flow for
  `experimental/openapi.yaml`.

## Architecture

```
protobuf/                    Protocol Buffer sources + generated Go bindings + Gradle JVM tooling
  flow/access/access.proto   Access gRPC API (current)
  flow/entities/*.proto      Core entity messages (block, transaction, account, event, ...)
  flow/execution/            Execution API
  flow/executiondata/        Execution data API
  flow/legacy/{access,entities,execution}/   Pre-migration proto definitions kept for clients
  go/flow/                   Generated Go stubs (do not edit by hand)
  buf.yaml, buf.gen.yaml     buf configuration (DEFAULT lint, FILE breaking-change detection)
  build.gradle.kts           JVM publishing config (group org.onflow, default version 1.1.1)
  go.mod                     module github.com/onflow/flow (go 1.16; tooling-only module)

openapi/
  access.yaml                Access REST API OpenAPI spec
  go-client-generated/       Generated Go client (swagger-codegen output, do not edit by hand)
  experimental/openapi.yaml  Experimental Access REST endpoints
  experimental/go-client-generated/   Generated Go client for experimental spec

specs/access-node-architecture/   Long-form access-node architecture spec (index.md + images/)
docs/content/                 Legacy long-form docs retained in-tree (account-linking, concepts,
                              core-contracts, node-operation, staking, ...)
flips/20220203-capability-controllers.md   Sole historical FLIP in this repo; new FLIPs go to onflow/flips
nodeoperators/                NodeOperatorList.md + nodelist.json
agendas/{2023,2024,2025,2026}/sprint-kickoff/   Working-group meeting agendas and notes
sporks.json                   Machine-readable mainnet/testnet spork history (root heights,
                              commits, seed/access nodes, flow-go/cadence/docker tags per spork)
.github/workflows/            CI (JVM protobuf build, JVM publish, code analysis, dep review,
                              @nocommit/flips-path block)
```

## Conventions and Gotchas

- **Do not add or edit FLIPs here.** The `call-block-merge.yaml` workflow blocks any PR that
  touches `flips/` with a message redirecting to [`onflow/flips`](https://github.com/onflow/flips).
  The single file `flips/20220203-capability-controllers.md` is retained for historical reference.
- **Default branch is `master`.** Referenced by `CONTRIBUTING.md` and every workflow trigger.
- **Generated files are tracked in git.** `protobuf/go/flow/**` and
  `openapi/{,experimental/}go-client-generated/**` are committed. Regenerate via the `make generate`
  targets above rather than hand-editing.
- **Proto changes must stay buf-clean.** `buf.yaml` enforces `DEFAULT` lint plus
  `enum_zero_value_suffix: UNKNOWN` and `service_suffix: API`; breaking detection is `FILE`-scoped.
- **JVM build requires Java 21.** Pinned in `ci-pull-request-jvm-protobuf.yml` and
  `ci-manual-publish-jvm-{release,snapshot}.yml` (`adopt` distribution, `JAVA_OPTS=-Xmx2g`).
- **`protobuf/go.mod` exists for tooling only** (`google.golang.org/protobuf`,
  `protoc-gen-go-grpc`). It is not the Flow node runtime — that is `onflow/flow-go`.
- **`sporks.json` is consumed by external tooling/SDKs.** Preserve the
  `networks.{mainnet,testnet}.<sporkName>` shape (`id`, `live`, `sporkTime`, `rootHeight`,
  `gitCommitHash`, `stateArtefacts`, `tags`, `seedNodes`, `accessNodes`) when editing.
- **Security issues never go in public issues.** See `SECURITY.md`; follow
  https://flow.com/flow-responsible-disclosure.

## Files Not to Modify

- `protobuf/go/flow/**` — generated by `make generate` (buf).
- `openapi/go-client-generated/**` and `openapi/experimental/go-client-generated/**` — generated
  by `make generate` (swagger-codegen).
- `protobuf/gradle/**`, `protobuf/gradlew`, `protobuf/gradlew.bat` — Gradle wrapper.
- `LICENSE`, `NOTICE` — licensing artifacts.
