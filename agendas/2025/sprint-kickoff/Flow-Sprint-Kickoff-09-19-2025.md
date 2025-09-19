# Overview

### Team Wins 🎉

* Forte is live on testnet
* New CLI release brings a facelift and features that make life easier for AI agents and developers
* [Scheduled Callbacks FLIP](https://github.com/onflow/flips/pull/331) accepted.
* Confirmed improved Testnet execution performance (execution saturation, memory usage) after Forte upgrade.
* [FLIP 343: Fix numeric type rounding inconsistency](https://github.com/onflow/flips/pull/344/) accepted.

---

### Mainnet Uptime - Last 14 days (09/4/25 to 09/18/25) \[Vishal]

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
| YTD SLA                |           | 99.94%     | 99.94%    | 99.93%    | 99.94%       | 99.93% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

No P0 or P1 incidents.

### Key Release Dates & Breaking Changes

Forte Network upgrade (Spork) Fall 2025.
- Mainnet in **Oct, 22nd (Wednesday)**

---

### FLIPs Tracker \[Vishal]

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

N/A

---


# Working Group Updates

### **Cadence Language and Execution** \[Bastian]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Feature: Import Aliasing
    - [Improve import aliasing](https://github.com/onflow/cadence/pull/4199)
    - [[Compiler] Import Aliasing](https://github.com/onflow/cadence/pull/4125)
    - [Import Aliasing](https://github.com/onflow/cadence/pull/4203)
- [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)
    - [Improve tracing](https://github.com/onflow/cadence/pull/4217)
    - [Improve tracing](https://github.com/onflow/cadence/pull/4218)
    - [[Compiler] Simplify imported globals linking](https://github.com/onflow/cadence/pull/4220)
    - [[Compiler] Initialize all variable of all imports](https://github.com/onflow/cadence/pull/4222)
    - [[Compiler] Improve enum case value global initialization](https://github.com/onflow/cadence/pull/4221)
    - [[Compiler] Initialize all variables of a dynamically linked program](https://github.com/onflow/cadence/pull/4223)
    - [[Compiler] Refactor dynamic method invocation](https://github.com/onflow/cadence/pull/4226)
    - [[Compiler] Use global's index instead of array index during linking](https://github.com/onflow/cadence/pull/4227)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - [[Compiler] Improve globals.](https://github.com/onflow/cadence/pull/4211)
    - [[Compiler] Reuse elaboration for imports when possible.](https://github.com/onflow/cadence/pull/4215)
    - [[Compiler] Add control flow basic block visualization to program printer.](https://github.com/onflow/cadence/pull/4197)
- bugfix
    - [Fix tracing of function invocations](https://github.com/onflow/cadence/pull/4224)
    - [[Compiler] Fix `invokeMethodDynamic`](https://github.com/onflow/cadence/pull/4225)
    - internal: [1](https://github.com/onflow/cadence-internal/pull/347), [2](https://github.com/onflow/cadence-internal/pull/346), [3](https://github.com/onflow/cadence-internal/pull/333), [4](https://github.com/onflow/cadence-internal/pull/334), [5](https://github.com/onflow/cadence-internal/pull/343)
- Docs
    - [Document `Fix128` type](https://github.com/onflow/cadence-lang.org/pull/268)
- Tools
    - [[lint] Update to Cadence v1.7.0](https://github.com/onflow/cadence-tools/pull/492)
    - [[LS] Render unreachable code as unnecessary](https://github.com/onflow/cadence-tools/pull/486)
    - [[test] Update to Cadence v1.7.0](https://github.com/onflow/cadence-tools/pull/493)
    - [[languageserver] Update to Cadence v1.7.0](https://github.com/onflow/cadence-tools/pull/494)
    - [[LS] Improve hover](https://github.com/onflow/cadence-tools/pull/496)
Flips
    - [FLIP 343: Fix numeric type rounding inconsistency](https://github.com/onflow/flips/pull/344)


**Cadence Execution**

- Feature: [Public key de-duplication](https://github.com/onflow/flow-go/issues/7573)
    - [Change report format for storage used migration from JSON to CSV](https://github.com/onflow/flow-go/pull/7835)
    - [Add runtime public key duplicate detection and storage with support for account status v4 format](https://github.com/onflow/flow-go/pull/7829)
    - [Reduce register reads by using Accounts.GetRuntimeAccountPublicKey](https://github.com/onflow/flow-go/pull/7841)
    - bugfix: [Fix the RegisterSize() function](https://github.com/onflow/flow-go/pull/7834)
    - Tooling updates: 
        - [Create diff-keys utility to compare account public keys before and after migration](https://github.com/onflow/flow-go/pull/7875)
        - [Add option to validate account public key migration](https://github.com/onflow/flow-go/pull/7878)
- Feature: [Add support for tracing to debug-tx command](https://github.com/onflow/flow-go/pull/7793)
- Badger -> Pebble
    - [[Storage] Change Default DB to be Pebble for the upcoming spork](https://github.com/onflow/flow-go/pull/7796)
    - [[Storage] Enable the ByView methods](https://github.com/onflow/flow-go/pull/7806)
    - [[Storage] Minor refactor](https://github.com/onflow/flow-go/pull/7799)
    - [[Storage] Follower use protocol db](https://github.com/onflow/flow-go/pull/7833)
    - [[Storage] Change Default DB to be Pebble for the upcoming spork](https://github.com/onflow/flow-go/pull/7840)
    - [[Storage] Replace badger with pebble in tests](https://github.com/onflow/flow-go/pull/7814)
    - [[Util] Use pebble datastore](https://github.com/onflow/flow-go/pull/7861)
- Scheduled transactions
    - [[Scheduled Callbacks] API inclussion of scheduled callbacks](https://github.com/onflow/flow-go/pull/7805)
    - [Update to newest version of the FlowTransactionScheduler contract](https://github.com/onflow/flow-go/pull/7891)
    - [Add scheduled transactions default cli parameters](https://github.com/onflow/flow-go/pull/7902)
    - [[Scheduled Callbacks] Add scheduled transaction metrics](https://github.com/onflow/flow-go/pull/7901)
- Metering improvement: [Disable FVM metering inside EVM transactions](https://github.com/onflow/flow-go/pull/7825)
- Forte upgrade chores
    - [[Backport] v0.42.4 backport revert cadence](https://github.com/onflow/flow-go/pull/7831)
    - [v0.42.4 revert cadence.1.7.0](https://github.com/onflow/flow-go/pull/7813)
    - [[Feature] Pebble merge into master](https://github.com/onflow/flow-go/pull/7794)
    - [Bump `ethereum/go-ethereum` dependency to `v1.16.3`](https://github.com/onflow/flow-go/pull/7817)
    - [Update to Cadence v1.7.0](https://github.com/onflow/flow-go/pull/7853)
    - [Merge feature account public key deduplication to master](https://github.com/onflow/flow-go/pull/7869)

**Flow EVM**
- Core: [[Flow EVM] Handle non-existing accounts in all of state overrides methods](https://github.com/onflow/flow-go/pull/7737)
- Gateway
    - Integrating JSON-RPC API specification changes from Geth releases
        - [Apply block overrides in `eth_estimateGas` JSON-RPC endpoint](https://github.com/onflow/flow-evm-gateway/pull/876)
    - Improvements
        - [Include `errorCode` from EVM `txResult` in Cadence assert message](https://github.com/onflow/flow-evm-gateway/pull/874)
        - [Improve logging for eth_call & eth_estimateGas](https://github.com/onflow/flow-evm-gateway/issues/862)
- chores
    - [Update to Cadence v1.7.0](https://github.com/onflow/flow-evm-gateway/pull/877)
    - [Update Dockerfile go version to `1.25`](https://github.com/onflow/flow-evm-gateway/pull/878)
    - [[Back-port] Bump flow-go version to `v0.43.0`](https://github.com/onflow/flow-evm-gateway/pull/882)
    - [Bump flow-go version to `v0.43.0`](https://github.com/onflow/flow-evm-gateway/pull/881)
- tooling
    [Allow manual image build](https://github.com/onflow/flow-evm-gateway/pull/879)


**This sprint**

- Cadence Language
  - Back to compiler
      - Continue investigating execution state differences
      - Continue tackling tech-debt & optimizations

- Cadence Execution
  - Complete [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) Finishing up measurements, publish FLIP
  - Complete bugfix: [Fix memory caches getting out of sync with db](https://github.com/onflow/flow-go/pull/7597)
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Start work on [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Start working on new storage format documentation & key de-duplication comms/blog.

- EVM
  - Complete: [Improve Tracking of the Surge factor](https://github.com/onflow/flow-evm-gateway/issues/863)
  - Continue: [Improve resilience on connections with upstream ANs](https://github.com/onflow/flow-evm-gateway/issues/764)
  - Continue: [Integrate JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)

**On Hold**
- New Trie research
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]
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
  - Identified performance issues when testing PebbleDB changes on migration testnet
  - Documented issues [here](https://github.com/onflow/flow-go/issues/7860)
    - [Issue 7863: Re-evaluate Collector Throttling Parameters](https://github.com/onflow/flow-go/issues/7863)

* Q3 Network Upgrade (Spork)
  - Preparation for the testnet spork
    - Rosetta testing
    - Release notes review
    - Content for malleability, execution effort calibration.
    - etc.

* <ins>Data Availability</ins>
  - Enable scheduled transactions by default ([PR #7899](https://github.com/onflow/flow-go/pull/7899))
  - Update Access API endpoints to support schedule callbacks MVP ([PR #7890](https://github.com/onflow/flow-go/pull/7890))
  - Improve derived tx status handling and documentation ([PR #7844](https://github.com/onflow/flow-go/pull/7844))
  - Improve API request/response limit config ([PR #7815](https://github.com/onflow/flow-go/pull/7815))
  * KROK Team
    * In Review:
      - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)
      - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)
      - [[Data Availability] Implement fork-aware System Transaction Endpoints #7648](https://github.com/onflow/flow-go/issues/7648)
        
    * In Progress:
      - [[Data Availability] Implement fork-aware Account Endpoints #7650](https://github.com/onflow/flow-go/issues/7650)
      - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
      - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
      - [[Data Availability] Implement fork-aware Script Endpoints #7651](https://github.com/onflow/flow-go/issues/7651)

    * Milestones status:
      - milestone 1: completed
      - milestone 2:
        - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): in progress: 4 done, 3 in progress out of 12 ( 1 newly addded, 1 closed by gh )
        - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
      - milestone 3:
        - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 6/14 done, 2 in progress
        - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 4 in progress, 3 in review, out of 12 ( some tasks require extra changes and were sent back to progress ) 
        - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 0 in progress

* <ins>Immutable Models M2 (Address data structure malleability risk) </ins>
  * Immutable Models PR reviews
    
  * KROK Team
    * Done:
      - [[Immutable Models M2] flow.ResultApproval: message/internal split + validation #7714](https://github.com/onflow/flow-go/issues/7714)
      - [[Immutable Models M2] messages.DKGMessage: message/internal split + validation #7722](https://github.com/onflow/flow-go/issues/7722)
      - [[Immutable Models M2] messages.TestMessage: message/internal split + validation #7721](https://github.com/onflow/flow-go/issues/7721)
      - [[Immutable Models M2] flow.ExecutionReceipt: message/internal split + validation #7713](https://github.com/onflow/flow-go/issues/7713)
      - [[Immutable Models M2] messages.TransactionBody: message/internal split + validation #7711](https://github.com/onflow/flow-go/issues/7711)
      - [[Immutable Models M2] messages.Transaction: message/internal split + validation #7712](https://github.com/onflow/flow-go/issues/7712)
      - [[Immutable Models M2] messages.BlockVote: message/internal split + validation #7699](https://github.com/onflow/flow-go/issues/7699)
      - [[Immutable Models M2] messages.ClusterBlockVote: message/internal split + validation #7702](https://github.com/onflow/flow-go/issues/7702)
      - [[Immutable Models M2] messages.ClusterTimeoutObject: message/internal split + validation #7704](https://github.com/onflow/flow-go/issues/7704)
      - [[Immutable Models M2] messages.TimeoutObject: message/internal split + validation #7700](https://github.com/onflow/flow-go/issues/7700)
      - [[Protocol misc improvements] Avoid unittest.BlockFixture to create invalid blocks when option WithParent is given #7826](https://github.com/onflow/flow-go/issues/7826)
      - [[Protocol misc improvements] InstanceParams no longer reads anything from the database; hence remove database field #7836](https://github.com/onflow/flow-go/issues/7836)
      - [[Protocol misc improvements] Consolidate InstanceParams into one storage object #7837](https://github.com/onflow/flow-go/issues/7837)
      - [[Immutable Models M2] Test changes to the networking layer introduced in the feature/networking-layer-immutability branch #7888](https://github.com/onflow/flow-go/issues/7888)
      
    * In Review:
    * In Progress:
      - Work on Immutable models finished for KROK team


* <ins>Cryptography</ins>
  * Passkeys:
    * PR review and merge to master
    * Testing on Testnet
  * Multi-SPoCK:
    * Aggregate multi SPoCK (over distinct secrets): definition and security property.


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  * N/A


**This sprint**

* <ins>Overload resilience</ins>
  - Document how to use or adjust the collection throttling mechanism during times of overload.


* <ins>Data Availability:</ins>
  - PR Reviews
  - Allow streaming from the spork root block ([PR 7913](https://github.com/onflow/flow-go/pull/7913))
  - Refactor connection caching to address race condition in test ([PR 7859](https://github.com/onflow/flow-go/pull/7859))
  - Backfill tx error messages on last few networks (TN52, MN25, MN24)
  - Continue work on Milestone 2
  - KROK Team:
    - PR reviews
    - Continue work on 3rd milestone - Uliana and Andrii added to team to strengthen progress here

* <ins>Immutable Models M2 (Address data structure malleability risk)</ins>
  - PR reviews
  - Supporting KROK to wrap up [network layer model validation](https://github.com/onflow/flow-go/pull/7887)
  - KROK Team:
    - Work on immutable models finished for KROK team atm.


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  - Implementation for collector decentralization bootstrapping


* <ins>Cryptography</ins>
  * SPoCK:
    * aggregate multi SPoCK (over distinct secrets): security proof
    * spock paper editing

* Misc (work items not tied to OKR)
  * Content, Content, Content 😃
  * Implementing observability for emergency sealing
  * Preparing Pebble transition docs and presenting next week during the Core protocol working group meeting


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



**This sprint**

#### Tidal:


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* FCL/React SDK
  * Planned with third parties for bridging wrapped BTC to Cadence
  * Started on supporting Scheduled Transactions hooks and component
  * Added basic support for passkeys to FCL

* CLI Improvements
  * Integrated DeFi Actions into `flow init`
  * Integrated DeFi Actions into Dependency Manager
  * Started work on Scheduled Transactions Manager feature
  * Allow account funding by account name
  * Interactive account funding when no account provided
  * New look and feel with branded CLI
  * Improved lists in CLI with scroll component
  * Added support for Cadence project creation from existing directories
  * Resolve relative directories with project creation
  * Added dependencies list command
  * Improved messaging in developer pain points
  * Fixed Windows Bug
  * Fixed termination signal bug

* Scheduled Transactions
  * Soldified Scheduled Transactions Manager with smart contract team
  * Updated Scheduled Transactions scaffold with Manager changes
  * Added support to Go SDK for system transactions API changes
  * Working with smart contract team to expose Scheduled Transactions in EVM

* VSCode Extension
  * Fixed tab reloading issue
  * Fixed non-root config support

**This Sprint**

* FCL/React SDK
  * Continue on supporting Scheduled Transactions hooks and component
  * Send FT hook/component
  * Additional passkeys support in FCL Discovery
  * Additional passkeys support in the React SDK
  * React SDK marketing site

* CLI Improvements
  * Continue work on Scheduled Transactions Manager feature
  * Add easy deployment setup for DeFi Actions

* Scheduled Transactions
  * Generate a default project from `flow init` if selected
  * Continue working with smart contract team to expose Scheduled Transactions in EVM
  * Support System Transaction API changes in FCL
  * Support System Transaction API changes in CLI

* Testnet <-> Mainnet
  * Integrate testnet mocking into tooling

---

### Applications / Wallet [Jeff]

**Done last sprint**

- Released v1.0, and completed v1.1 of our React Native integration, releasing our updated Send tokens workflow across all platforms 🎉

**This sprint**

- Adding support for surge pricing across all platforms.
- Adding support for Full/Secure profiles in Flow Wallet, giving users EOAs and Seed Phrases to secure their accounts on EVM on Flow.

---

### **Infra** \[Manny]

**Done last sprint**

**TN53 Spork**
- [Remove TN52 Alerts after TN53 Spork](https://github.com/onflow/ff-sre-infrastructure/issues/766)
- [Update Synthetic Monitors for ANs to point to TN53](https://github.com/onflow/ff-sre-infrastructure/issues/765)
- [Update EVM GW Flags and Versions after the TN53 Spork](https://github.com/onflow/ff-sre-infrastructure/issues/763)
- [Configure Prometheus Node for TN53](https://github.com/onflow/ff-sre-infrastructure/issues/760)
- [Adjust Grafana Dashboards for TN53](https://github.com/onflow/ff-sre-infrastructure/issues/758)
- [Create Dashboard for Data Disk Size Definitions for TN53 and MN27](https://github.com/onflow/ff-sre-infrastructure/issues/754)
- [Update DNS Record for TN53 Secure Endpoint](https://github.com/onflow/ff-sre-infrastructure/issues/749)
- [Create Alerts for TN53 Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/748)
- [Create Resources for TN53 Infra on Terraform](https://github.com/onflow/ff-sre-infrastructure/issues/747)
- [Add Ansible Inventory and Group Vars for TN53](https://github.com/onflow/ff-sre-infrastructure/issues/746)
- [Validate Quotas for TN53 - GCP Project `flow-hosting`](https://github.com/onflow/ff-sre-infrastructure/issues/745)
- [Create SRE Spork Checklist for TN53](https://github.com/onflow/ff-sre-infrastructure/issues/744)
- [Add Validation Flag to the State Extraction Util Command](https://github.com/onflow/ff-sre-infrastructure/issues/751)

**Support**
- [Change Notification Policy for Alloy Observability Alerts](https://github.com/onflow/ff-sre-infrastructure/issues/755)
- [MN26 Data Disk Increase - AN3/8](https://github.com/onflow/ff-sre-infrastructure/issues/752)

**Security**
- [Perform a Security Check on GitHub Repositories - NPM Packages](https://github.com/onflow/ff-sre-infrastructure/issues/742)

**Costs**
- [Investigate GCP Billing Increase](https://github.com/onflow/ff-sre-infrastructure/issues/739)

---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Surge price testing on Mainnet.

**This sprint**

* Continue work on the tokenomics framework.

---
