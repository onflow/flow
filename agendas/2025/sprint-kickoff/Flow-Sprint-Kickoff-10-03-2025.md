# Overview

### Team Wins 🎉

* Completed [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059) - over 14K transactions tested for correctness, including varied load from TPS loader.
* Completed migration and bootstrapping of Forte release candidate on migration mainnet test network.
* New CLI releases with Scheduled Transaction scaffolding, new commands, and other misc improvements.

---

### Mainnet Uptime - Last 14 days (09/19/25 to 10/03/25) \[Manny]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |     100%      |        0%         |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
|------------------------|-----------|------------|-----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |            |           | 7         |              | 7      |               |
| HCU                    | 6/3/2025  |            |           | 9         |              | 9      |               |
| HCU                    | 6/16/2025 |            |           | 12        |              | 12     |               |
| HCU                    | 8/7/2025  |            |           | 9         |              | 9      |               |
| Total downtime in mins |           | 210        | 210       | 272       | 210          | 272    |               |
| YTD SLA                |           | 99.95%     | 99.95%    | 99.93%    | 99.95%       | 99.93% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

- [P0](https://status.flow.com/incidents/kdngmc7jgf8r) on **Testnet** on 9/23, 19:17 UTC to ~19:27 UTC
  - Block rate dropped to zero
  - Root cause: Manual error during a rolling upgrade of the testnet nodes.

### Key Release Dates & Breaking Changes

- Testnet HCU - ~next week, exact date is still TBD

- Forte Network upgrade (Spork) Fall 2025.
  - Mainnet in **Oct, 22nd (Wednesday)**

---

### FLIPs Tracker \[Manny]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    7    |     0      |    10    | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    2     | **10**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    5    |     1      |    0     |  **9**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **20**    | **52**  |   **17**   |  **19**  | **108** |

#### New FLIPs

- No new FLIPS added.

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)
    - [[Compiler] Refactor dynamic method invocation](https://github.com/onflow/cadence/pull/4226)
    - [[Compiler] Use global's index instead of array index during linking](https://github.com/onflow/cadence/pull/4227)
    - [[Compiler] Improve transaction program init function](https://github.com/onflow/cadence/pull/4229)
    - [[Compiler] Avoid creating an array for resource default-destroy events](https://github.com/onflow/cadence/pull/4230)
    - [[Compiler] Attachments #3/3](https://github.com/onflow/cadence/pull/4111)
    - [[Compiler] Fix result variable transfer](https://github.com/onflow/cadence/pull/4236)
    - [[Compiler] Fix Account.contracts.borrow](https://github.com/onflow/cadence/pull/4241)
    - [[Compiler] Fix function types for capability value methods](https://github.com/onflow/cadence/pull/4243)
    - [[Compiler] Ensure program is initialized whenever type-info is requested](https://github.com/onflow/cadence/pull/4242)
    - [[Compiler] Improve error position/location info](https://github.com/onflow/cadence/pull/4247)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - [[Compiler] Trace event emission](https://github.com/onflow/cadence/pull/4231)
    - [[Compiler] Skip encoding-decoding of constants](https://github.com/onflow/cadence/pull/4214)
    - [Improve tracing and CI](https://github.com/onflow/cadence/pull/4246)
    - [[Compiler] Always transfer on move operator. Remove redundent transfers](https://github.com/onflow/cadence/pull/4208)
    - [[Compiler] Generate opcode.isControlFlow from instructions.yml.](https://github.com/onflow/cadence/pull/4238)
    - [Unify move-operator interpretation to match the VM](https://github.com/onflow/cadence/pull/4245)
    - [[Compiler] Create unified interface for native/host functions](https://github.com/onflow/cadence/pull/4232)
- Compiler Bugfixes:
    [[Compiler] Fix `invokeMethodDynamic`](https://github.com/onflow/cadence/pull/4225)
- Compiler testing
    - [[Compiler] Add tests for importing same program from multiple paths](https://github.com/onflow/cadence/pull/4228)

**Cadence Execution**

- [Badger -> Pebble remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
    - [Deprecate pebble dir flag](https://github.com/onflow/flow-go/pull/7919)
    - [[Testing] Refactor AcquireLock with WithLock in tests](https://github.com/onflow/flow-go/pull/7865)
    - [[Database] Remove execution data mode](https://github.com/onflow/flow-go/pull/7880)
    - [All low-level storage operations have been reviewed for risk of state corrupion](https://github.com/onflow/flow-go/issues/7912)
        - [[Storage] Refactor insert chunk data pack](https://github.com/onflow/flow-go/pull/7939)
        - [[Storage] Refactor insert proposal sig](https://github.com/onflow/flow-go/pull/7963)
        - [[Storage] Refactor operations to update parent children block index](https://github.com/onflow/flow-go/pull/7930)
        - [[Storage] Refactor index cluster height](https://github.com/onflow/flow-go/pull/7954)
        - [[Storage] Refactor epoch protocol state](https://github.com/onflow/flow-go/pull/7964)
    - Presented as part of [Core Protocol Working Group call](https://github.com/onflow/Flow-Working-Groups/blob/main/core_protocol_working_group/meetings/2025-09-25.md): Introduction of the new storage backend and API for Flow nodes
- Scheduled Transactions
    - System transaction execution result logging fix:
        - [[Scheduled Callbacks] Update logger values](https://github.com/onflow/flow-go/pull/7944)
        - [Change system chunk logging](https://github.com/onflow/flow-go/pull/7993)
- Atree debugging improvements:
    - [Add support for iterating over map data slab elements](https://github.com/onflow/atree/pull/577)
    - [Return more data from String() for debugging](https://github.com/onflow/atree/pull/560)
- Public key de-duplication content
    - [Write intro and outline for public key de-duplication](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/1)
    - [Add more info about testing both migration and runtime public key deduplication](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/2)
    - [Mention RLE++ encoding and reducing payload count by more than total number of duplicate payloads](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/3)
    - [Describe RLE++ encoding more and introduce data format design without technical details (yet)](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/4)
- Bugfix
    - [[Storage] Fix memory caches getting out of sync with db (BadgerDB & Pebble)](https://github.com/onflow/flow-go/pull/7597)
- util
    - [Support account status v4 in checkpoint-collect-stats util](https://github.com/onflow/flow-go/pull/7925)
    - [Update storage health check to add account key validation, etc.](https://github.com/onflow/flow-go/pull/7917)
    - [[Util] Logging - fix the log when generating key for bootstrap](https://github.com/onflow/flow-go/pull/7842)
    - Cadence VM testing
        - [[Cadence VM] Handle invalid addresses](https://github.com/onflow/flow-go/pull/7968)
- Testing flakiness improvement: [Refactor and cleanup progress logger](https://github.com/onflow/flow-go/pull/7889)
- Performance testing: [Tweak loader parameters](https://github.com/onflow/flow-execution-effort-estimation/pull/72)
- Tooling
    - Flow management - update tool for setting on-chain node addresses
        - [Fix lint](https://github.com/onflow/flow-mgmt/pull/100)
        - [set-networking-addresses fixes](https://github.com/onflow/flow-mgmt/pull/99)
- chores
    - [Prevent actions/stale from closing pull requests with "Preserve" label](https://github.com/onflow/flow-go/pull/7936)
    - [[Cadence VM] Update to latest Cadence, various tooling improvements ](https://github.com/onflow/flow-go/pull/7955)
    - [[Cadence VM] Sync v0.43 feature branch](https://github.com/onflow/flow-go/pull/7965)
    - [[Cadence VM] Sync feature branch](https://github.com/onflow/flow-go/pull/7979)

**Flow EVM**

- Core
    - [Introduce MaxGasConsumed field on EVM Result type](https://github.com/onflow/flow-go/issues/7950)
- Gateway
    - [Integrating JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)
        - [Add E2E tests for state override functionality on `eth_call`](https://github.com/onflow/flow-evm-gateway/pull/875)
        - [Check the returned error code on empty revert data](https://github.com/onflow/flow-evm-gateway/pull/880)
        - [Use execution result's `MaxGasConsumed` for gas estimation](https://github.com/onflow/flow-evm-gateway/pull/889)
    - tech-debt removal:
        - [Deprecate `--init-cadence-height` CLI flag](https://github.com/onflow/flow-evm-gateway/pull/886)
    - bugfix:
        - [Infinite loop in spork backfill when the Cadence start height equals the spork's last height](https://github.com/onflow/flow-evm-gateway/pull/888)


**This sprint**

- Cadence Language
      - Continue tackling compiler tech-debt & optimizations
      - Investigate feasibility of further developer experience improvements - IDE plugin displaying execution effort.

- Cadence Execution
  - Complete [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) - publish FLIP
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Complete working on new storage format documentation & key de-duplication comms/blog.
  - Stretch goal - start work on [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Stretch goal - start working on [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)

- EVM
  - Complete: [Improve Tracking of the Surge factor](https://github.com/onflow/flow-evm-gateway/issues/863)
  - Continue: [Improve resilience on connections with upstream ANs](https://github.com/onflow/flow-evm-gateway/issues/764)
  - Continue: [Integrate JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)

**On Hold**
- New Trie research
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Alex]
Q3 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Overload resilience  [IN PROGRESS]
* Q3 Network Upgrade (Spork) [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]

**Done last sprint**

* <ins>Overload resilience</ins>
  - Create [runbook (mature draft)](https://www.notion.so/flowfoundation/Runbook-Collection-Throttling-27e1aee1232480b18450d9e32a594448) on how to use or adjust the collection throttling mechanism during times of overload.
  - Added additional pannels to mainnet dashboard for improved visibility

* Q3 Network Upgrade (Spork)
  - Dry run of root block voting with consensus node partner - Figment.
  - Sync with QuickNode on steps for mainnet network upgrade.

* <ins>Data Availability</ins>
  - PR reviews
  - Backfilled data required to shutdown historic ENs for MN 24, 25 and TN 52
  - Started new APIs for Scheduled Transactions
  - Investigate the execution data sync issues observed on FF testnet access nodes. ([Issue 7120](https://github.com/onflow/flow-go-internal/issues/7120))
  - [Access] Request collections immediately ([PR 7926](https://github.com/onflow/flow-go/pull/7926))
  - [Access] Allow streaming from the spork root block ([PR 7913](https://github.com/onflow/flow-go/pull/7913))
  - [Access] Fix unsynchronized concurrent access in downloader ([PR 7989](https://github.com/onflow/flow-go/pull/7989))
  - Add ExecutionStateQuery parameter to GetSystemTransactionRequest ([PR 1636](https://github.com/onflow/flow/pull/1636))
  - Update apis to return executor metadata by reference ([PR 7953](https://github.com/onflow/flow-go/pull/7953))
  - Testing and CI [1](https://github.com/onflow/flow-go/pull/7973), [2](https://github.com/onflow/flow-go/pull/7966), [3](https://github.com/onflow/flow-go/pull/7948), [4](https://github.com/onflow/flow-go/pull/7777), [5](https://github.com/onflow/flow-go/pull/7687), [6](https://github.com/onflow/flow-go/pull/7904)
  * KROK Team
    - [DataAvailability] Add ExecuteScriptResponse to openapi ([PR 1637](https://github.com/onflow/flow/pull/1637))
    * In Review:
      - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)
      - [[Data Availability] Refactor events test in http package #7923](https://github.com/onflow/flow-go/issues/7923)

    * In Progress:
      - [[Data Availability] Implement fork-aware Execution Data Endpoints #7656](https://github.com/onflow/flow-go/issues/7656)
      - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
      - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
      - [[Data Availability] Implement fork-aware Script Endpoints #7651](https://github.com/onflow/flow-go/issues/7651)

    * Milestones status:
      - milestone 1: completed
      - milestone 2:
        - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 4 done, 3 in progress out of 12
        - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
      - milestone 3:
        - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 6/17 done ( some new sub-issues added )
        - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 5 in progress, 3 in review, out of 12
        - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 0 in progress


* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team
    * Done:
      - Work on Immutable models finished for KROK team atm, all assigned tasks closed

* <ins>Cryptography</ins>
  * SPoCK:
    - continued on SPoCK aggregation for distinct secrets (different from multi-SPoCK):
      - more on the security proof
      - exploring a way to further aggregate proofs (special case when "matching" provers are known)
        - working on defining the aggregation and its security requirements
        - working on proof feasibility (ongoing)
      - paper: minor progress in editing
      - followed up with Riad (to check his availability for review)

* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  * Continuing development on Collector Bootstrapping
  * Addressing tx deduplication edge case https://github.com/onflow/flow-go/issues/7758

* Other items not covered in OKRs:
  - Mitigating double-counting attack for byzantine primary [6127](https://github.com/onflow/flow-go-internal/issues/6127)
  - Content pieces for Forte - Malleability, Key deduplication, execution effort calibration.

**This sprint**

* <ins>Overload resilience</ins>
  - Complete the [runbook](https://www.notion.so/flowfoundation/Runbook-Collection-Throttling-27e1aee1232480b18450d9e32a594448) on collection throttling.
  - Add metrics for tx prioritization

* <ins>Data Availability:</ins>
  - New APIs for Scheduled Transactions
  - Roll out the fix for the execution sync issue.
  - PR Reviews
  - KROK Team:
     - Continue work on Access API execution state endpoints ( milestone 3 )

* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  - Continuing development on Collector Bootstrapping
  - Addressing tx deduplication edge case https://github.com/onflow/flow-go/issues/7758

* <ins>Cryptography</ins>
  * SPoCK:
    - continue on SPoCK aggregation for distinct secrets (different from multi-SPoCK)
    - make progress on the paper

* Other items not covered in OKRs:
  - Finish implementation for mitigating double-counting attack for byzantine primary [6127](https://github.com/onflow/flow-go-internal/issues/6127)

**On Hold**

**Active Epics**

* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] Access Node supports soft-finality updates](https://github.com/onflow/flow-go/issues/6646)

---

### **DeFi** \[Kan]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### Tidal:

- Liquidation logic merged
- Testnet integration with More Markets vault
- Band Oracle integration
- Tidal Protocol repo polish in preparation for audit submission

**This sprint**

#### Tidal:

- Finalize Testnet integration with More Markets vault
- Work through general Oracle abstraction
- Internal live testing

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* React SDK/FCL
  * Created passkeys demo
  * Finished React SDK demo playground for showcasing components and hooks
  * Broke up documentation into hooks, components, and overview sections
  * Supported DevRel team for bridging wrapped BTC to Cadence
  * Added `useFlowAuthz` hook
  * Added `useFlowSchedule` hook

* CLI Improvements
  * Introduced new command to check `flow.json` configured accounts validity against emulator state to improve `flow.json` and emulator syncing issue
  * Started adding Scheduled Transactions Manager functionality to the CLI
  * Created Scheduled Transactions scaffold
  * Revamped `flow init` with basic, Scheduled Transactions, or custom scaffolding
  * Added support for funding emulator accounts with `flow accounts fund`  in CLI
  * Added dependency tree installation view to CLI Dependency Manager
  * Bugfix: mixing testnet and mainnet dependency sources

* Scheduled Callbacks
  * Created Scheduled Transactions scaffold
  * Fixed bugs in the Scheduled Transactions emulator integration

* Testnet <-> Mainnet
  * Created USDF project scaffold with testnet mock

**This Sprint**

* React SDK / FCL
  * Deploy playground to react.flow.com
  * Improve docs overview with playground
  * Launch React SDK demo playground
  * Work with design to get a React SDK banner on flow.com
  * Finish `useBridgeTokenFromEvm`, `useBridgeNftFromEvm`, and `useFlowNft` hooks
  * Finish NFT card component
  * Update docs for new hooks and components
  * Integrate scheduled transactions viewer in `<Connect />` button profile modal
  * Create passkeys doc on creating and signing with Flow user passkeys
  * Continue support on LDK work with DevRel

* DeFi Actions
  * DeFi Actions scaffold to use mainnet forking emulator
  * Add tooling support for mainnet forking
  * Add docs for mainnet forking

* CLI Improvements
  * Update this DeFi Actions scaffold to be used in `flow init`
  * Continue work on Scheduled Transactions manager feature
  * Improve outputs with branded colors for better readability
  * Create command to migrate accounts with key to key/file location for best practice security
  * Begin creating more scaffolding for different project types
  * Add support for contract mocks to Dependency Manager

* Scheduled Callbacks
  * Get FlowCron contract reviewed and tested

* Testnet <-> Mainnet
  * Integrate dynamic USDF scaffold into `flow init`


---

### Applications / Wallet [Jeff]


**Done last sprint**

- Completed v1.1 of our React Native integration, fixing issues with the send workflow
- ~50% completed support for Surge Pricing across all platforms.

**This sprint**

- MVP of Surge Pricing support across all platforms
- Release MVP support for EOAs in Flow Wallet extension
- FTUE/Onboarding workflows for Full/Secure profile support on mobile

---

### **Infra** \[Manny]

**Done last sprint**

**Tidal**
- [Configure Crypto KMS Permissions via Terraform](https://github.com/onflow/ff-sre-infrastructure/issues/777)

**Spork**
- [Scale Down TN52 Nodes after the TN53 Spork](https://github.com/onflow/ff-sre-infrastructure/issues/770)
- [Deploy New Util to TN53](https://github.com/onflow/ff-sre-infrastructure/issues/772)
- [Execute Rolling Deploy to TN53 to Replace Pebble Flag](https://github.com/onflow/ff-sre-infrastructure/issues/773)
- [Update Automation Snapshot Schedule from TN52 to TN53](https://github.com/onflow/ff-sre-infrastructure/issues/797)

**Observability**
- [Create Monitoring Resources for Forte War Room](https://github.com/onflow/ff-sre-infrastructure/issues/741)

**Support**
- [Configure Public Buckets for EVM GW DB Backups](https://github.com/onflow/ff-sre-infrastructure/issues/784)
- [Configure Registry Permissions for DL Access to Flow Emulator Image](https://github.com/onflow/ff-sre-infrastructure/issues/783)
- [Deploy New Util to MN26](https://github.com/onflow/ff-sre-infrastructure/issues/801)
- [Update OS Version of Migration MN and TN Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/771)
- [Update DNS Records for Migration of Sites between Webflow Accounts](https://github.com/onflow/ff-sre-infrastructure/issues/790)
- [Create DNS Records for Playground App](https://github.com/onflow/ff-sre-infrastructure/issues/811)

**Costs**
- [Review Snapshot Policy Document](https://github.com/onflow/ff-sre-infrastructure/issues/796)
- [Disable Snapshots for Historical Networks in `flow-hosting` project](https://github.com/onflow/ff-sre-infrastructure/issues/794)
- [Disable Snapshots for Historical Networks in `flow-multi-region` project](https://github.com/onflow/ff-sre-infrastructure/issues/803)
- [Disable Snapshots for Migration Networks](https://github.com/onflow/ff-sre-infrastructure/issues/789)

---

### **Governance** \[Kan]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Infused token discussion.

**This sprint**

* Add panels to community dashboard explaining when and why surge pricing is active.
* Continue tokenomics discussion with Dete.

---
