# Overview

 ### Team Wins 🎉

* [EVM GW] Fixed the `no signing keys available` error on EVM GW by improving key handling logic. Transaction error rate dropped from 200 per sec to almost 0.
* [EVM GW] Switched the Geth dependency in EVM GW from the forked version to the original version. EN, AN, VN updates coming soon.
* [Data availability] Switched Testnet traffic to QuickNode nodes.
* [Sceduled Callbacks] Managed to successfully run scheduled callbacks execution on localnet, which is a step closer to mainnet.
* [Tidal] Completed first round of Mathematical Precision improvements

---

### Mainnet Uptime - Last 14 days (07/26/25 to 08/08/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |    99.975%    |       24.8%       |
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
| YTD SLA                |           | 99.93%     | 99.93%    | 99.91%    | 99.93%       | 99.91% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

1. Testnet and Mainnet: HCU on 8/6 and 8/7 respectively to roll out a Cadence update
2. Testnet: 7/25, 9:54 AM to 10:05, Sealing halt due to a large transaction hitting a metering edge case.

### Key Release Dates & Breaking Changes


Forte Network upgrade (Spork) Fall 2025.
- Testnet in **Sept, 17th (Wednesday)**
- Mainnet in **Oct, 1st (Wednesday)**

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    10    | **25**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     2      |    2     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    5    |     1      |    0     |  **9**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **19**    | **50**  |   **17**   |  **19**  | **106** |

#### New FLIPs
1. [FLIP 336: Dynamic Transaction Fees](https://github.com/onflow/flips/pull/337)
2. [FLIP 338: Flow Actions: Composable Standards for Protocols](https://github.com/onflow/flips/pull/339)

---


# Working Group Updates

### **Cadence Language and Execution** \[Bastian]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language** \[Bastian]

- Compiler:
  - [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)
  - [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
  - [[Compiler] Attachments #3/3](https://github.com/onflow/cadence/pull/4111)
  - [[Compiler] Fix optional chaining in compiler](https://github.com/onflow/cadence/pull/4118)
  - [[Compiler] Improve naming and meter UUID field and value creation in VM](https://github.com/onflow/cadence/pull/4120)
  - [[Compiler] Print stacktrace for VM errors](https://github.com/onflow/cadence/pull/4121)
  - [[Compiler] Improve tracing in interpreter, add support for tracing to VM](https://github.com/onflow/cadence/pull/4122)
  - [[Compiler] Import Aliasing](https://github.com/onflow/cadence/pull/4125)
  - Can re-execute blocks without crashers, but execution state differences
  - On halt, new priorities below

- [Fixed-point type improvements](https://github.com/onflow/flow-okrs/issues/142)
  - Add `Fix128` using new library (https://github.com/onflow/fixed-point), for Tidal and DeFi Actions
  - [[WIP] Add Fix128 type to Cadence](https://github.com/onflow/cadence/pull/4131)
  - Later: Add `UFix128`, replace `UFix64`/`Fix64` implementation

- [Make Cadence development great with AIs](https://github.com/onflow/flow-okrs/issues/143)
  - [Improve Cadence Errors to Support LLM Efficiency](https://github.com/onflow/cadence/issues/4062)
  - [[4062-part-3] Update Cadence Errors](https://github.com/onflow/cadence/pull/4126)
  - [[4062-part-4] Update Cadence Errors](https://github.com/onflow/cadence/pull/4128)
  - [Improve errors and suggested fixes, add tests](https://github.com/onflow/cadence/pull/4129)
  - [Show migration note and documentation link in pretty error printer](https://github.com/onflow/cadence/pull/4130)
  - [Validate documentation links of errors](https://github.com/onflow/cadence/pull/4132)
  - [Improve errors](https://github.com/onflow/cadence/pull/4137)
  - [[LS] Add documentation link as code description, and migration note](https://github.com/onflow/cadence-tools/pull/485)
  - [[LS] Render unreachable code as unnecessary](https://github.com/onflow/cadence-tools/pull/486)

- Security fixes
  - [Fix conformance kind mismatch error reporting](https://github.com/onflow/cadence/pull/4134)

**Cadence Execution** \[Leo]

- Badger -> Pebble migration
    - [[Storage] Replace with lockctx Manager](https://github.com/onflow/flow-go/pull/7628)
    - [[Storage] Refactor storage for Follower Engine](https://github.com/onflow/flow-go/pull/7262)
    - [[Storage] Refactor mutator.Extend with DeferredDBOps](https://github.com/onflow/flow-go/pull/7609)
    - [[Storage] Collection Cluster State](https://github.com/onflow/flow-go/pull/7452)
    - Deployed latest version to one of each node type on both mainnet and testnet.
    - Finished data migration to pebble for one of each node type on Testnet, been running on pebble for 2 weeks now without issues.

- TPS loader improvements - network stress testing
    - [[Tweak error handling](https://github.com/onflow/flow-execution-effort-estimation/pull/71)

- Sceduled Callbacks
    - Successfully run scheduled callbacks execution on localnet,
    - FLIP closed to being approved.

- Storage Key Deduplication
    - [Deduplicate storage keys in the execution state, updated estimation of register reduction: ~86millions](https://github.com/onflow/flow-go/issues/7573#issuecomment-3162242757)
    - [Add empty-migration flag to execution-state-extract to measure minimum spork migration time](https://github.com/onflow/flow-go/pull/7643)
    - [Remove unused migration flags in execution-state-extract](https://github.com/onflow/flow-go/pull/7641)
    - Measured the migration time on mainnet snapshot (with no migration)

**Flow EVM**

- Improvements:
    - [Give blocks a better chance to become sealed before calling `NotifyBlock`](https://github.com/onflow/flow-evm-gateway/pull/853)
    - [Improve performance of `BatchTxPool` for single-tx EOAs](https://github.com/onflow/flow-evm-gateway/pull/852)
    - [flow-go: Replace Geth fork with original Geth](https://github.com/onflow/flow-go/pull/7676)
    - [Add reconnect logic to RPCEventSubscriber](https://github.com/onflow/flow-evm-gateway/pull/856)
    - [Replace custom-defined FilterCriteria type with the relevant type from Geth](https://github.com/onflow/flow-evm-gateway/pull/849)
    - [flow-evm-gateway: Replace Geth fork with original Geth](https://github.com/onflow/flow-evm-gateway/pull/859)
- Chores:
    - [Update onflow/go-ethereum to latest v1.16.2](https://github.com/onflow/flow-evm-gateway/pull/855)
    - [Bump onflow/go-ethereum dependency to v1.16.2](https://github.com/onflow/flow-go/pull/7660)

**This sprint**

- Cadence Language


- Cadence Execution
    - Continue [Badger -> Pebble migration](https://github.com/onflow/flow-go/issues/7265)
    - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598).
    - Continue [Scheduled callbacks](https://github.com/onflow/flow-go/issues/7482).

- EVM
  - Continue [Improve resilience on connections with upstream ANs](https://github.com/onflow/flow-evm-gateway/issues/764)
  - Continue [Integrate JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)
  - Continue [flow-go: Replace Geth fork with original Geth](https://github.com/onflow/flow-go/pull/7676)
  - Continue [flow-evm-gateway: Replace Geth fork with original Geth](https://github.com/onflow/flow-evm-gateway/pull/859)

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
* Q3 Network Upgrade (Spork) [TODO]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [TODO]

**Done last sprint**

* <ins>Overload resilience</ins>
  - Implemented and tested Collection size throttling mechanism.
  - Implemented a service transaction prioritization mechanism
  - Continue running more tests with different combination of load and collection throttling mechanism plus service transaction prioritization.
  - Internal review for network benchmarking

* <ins>Data Availability</ins>
  - Optimistic Sync PR reviews
  - Completed Milestone 3 API design and issues.
  - Initial Access API Error handling refactor ([PR 7106](https://github.com/onflow/flow-go/pull/7106))
  - KROK Team
    - Done:
      - [[Data Availability] Refactor execution state APIs into local and EN query modules #7547](https://github.com/onflow/flow-go/issues/7547)
      - [[Data Availability] Refactor scripts backend package #7577](https://github.com/onflow/flow-go/issues/7577)
      - [[Data Availability] Refactor transactions backend package #7574](https://github.com/onflow/flow-go/issues/7574)
      - [[Data Availability] Add functional tests for processing pipeline #7526](https://github.com/onflow/flow-go/issues/7526)
      - [[Data Availability] Create module to get ExecutionResult for request criteria #7546](https://github.com/onflow/flow-go/issues/7546)
      - [[Data Availability] Define storage layer api interface #7613](https://github.com/onflow/flow-go/issues/7613)
      - [[Data Availability] Figure out where backend's script executor used and move it to appropriate package #7664](https://github.com/onflow/flow-go/issues/7664)
      - [[Data Availability] post refactoring clean-up #7663](https://github.com/onflow/flow-go/issues/7663)

    - In Review (Working on review remarks):
      - [[Data Availability] Add new execution state request and response params #7616](https://github.com/onflow/flow-go/issues/7616)
    
    - In Progress:
      - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652) 


* <ins>Malleability</ins>
  * Malleability PR reviews
  * Wrote the implementation plan for extending immutable constructors to network and database boundary ([issue 7449](https://github.com/onflow/flow-go/issues/7449))
  * Updating and testing [Rosetta for malleability](https://github.com/onflow/rosetta/issues/80) changes.
  * KROK Team
    * Done:
      * [[Malleability] Remaining TODOs and Cleanup #7311](https://github.com/onflow/flow-go/issues/7311)
      * [[Bootstrapping] Spork root block view extends previous spork #6784](https://github.com/onflow/flow-go/issues/6784)
      * [[Malleability Immutable] Enforce immutability for TransactionBody #7303](https://github.com/onflow/flow-go/issues/7303)
      * [[Malleability Immutable] Enforce immutability for Transaction #7304](https://github.com/onflow/flow-go/issues/7304)

    * In Review:
      * [[Protocol KV Store] Update bootstrapping to support transferring KVStore from old network to new #5973](https://github.com/onflow/flow-go/issues/5973)
      * [[Malleability] Remaining TODOs and Cleanup #7311](https://github.com/onflow/flow-go/issues/7311) (Low Priority task with renaming [PR #7637](https://github.com/onflow/flow-go/pull/7637))


* <ins>Cryptography</ins>
  * Multi-SPoCK:
    - Deep dive into updating simple-SPoCK security proof from the KOSK to the PoP assumption.
      - Tried scenarios and constructions to use a BLS-SPoCK-PoP forger to solve co-DCDH, co-CDH, BLS-SPoCK-KOSK, BLS existential forgery
      - Documented this work. Will be revisiting it later


**This sprint**

* <ins>Overload resilience</ins>
  - Second round of internal review (today).
  - Continue network benchmarking.

* <ins>Data Availability:</ins>
  - PR Reviews
  - Debug memory corruption [issue](https://github.com/onflow/flow-go/issues/7684)
  - Milestone 2 Optimistic Sync: Continue work on result forest.
  - KROK Team:
    - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)
    - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)


* <ins>Malleability</ins>
  - Migrationnet testing malleability branch.
  - Merging malleability branch to master
  - Resolving merge conflicts with Pebble
  - KROK Team:
    - Addressing review remarks from the previous sprint


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  - Start the design.

* <ins>Cryptography</ins>
  - SPoCK: continue with multi-SPoCK definitions using KOSK as key registration

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
- New Tidal re-design completed this week
- Completion of first round of math and precision enhancements
- Started Tidal Protocol refactoring


#### DeFi Actions:

- DeFi Actions FLIP in review
- Preparation to Open Source
- Preparation for Audit starting next week
- Deployment to Mainnet/Testnet


**This sprint**

#### Tidal:

- Continue refactor / Polish
- Continue integration work with KittyPunch


#### DeFi Actions:

- Assist Auditors
- Assist Hackathon Demo

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* DeFi Actions / AI
  * Created & tested 3 new DeFi Actions connectors required for demo
    * Increment Fi Staking Rewards Source
    * Increment Fi Staking Rewards Sink
    * Increment Fi LP Token Swapper
  * Completed the DeFi Actions restaking transaction output for demo
  * Created first pass of context files for AI generation of demo transaction & demo scaffold
  * Exposed emulator scheduled callbacks through CLI

**This Sprint**

* DeFi Actions / AI
  * Deploy connectors & test restaking transaction on Mainnet
  * Iterate on demo AI context files to improve quality & consistency of generated code
  * Create scheduled callback restaking transaction for demo
  * Continue work on AI benchmarking framework
  * Document usage of scheduled callbacks in emulator on Developer Docs
  * Support Education Team in creating materials for third-party builders using DeFi Actions at hackathon
  * Expose scheduled callbacks through `flow cadence test` CLI command

* Misc
  * Update Developer Tooling repos to use non-forked Geth dependency

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.25 per week on a 4-week rolling average.
 - Current (Aug 8: 0.25/week -> 98% decrease in bugs since Jan/Feb!)

**Done last sprint**
- Completed initial demo of new send workflow within the product
  - Consolodated codebase into new shared monorepo
  - Using same core logic to power each platform

**This sprint**
- Ship send workflow updates across iOS/Android + finish and ship on Extension
- Starting secure/full profile updates -> adding full seed phrase + EOA support to Flow Wallet



---

### **Infra** \[JP / Manny]

**Done last sprint**

**Tidal Observability**
- [Refactor Synthetic Checks for Tidal](https://github.com/onflow/ff-sre-infrastructure/issues/662)
- [Create Tidal Team On-Call Schedule and Alert Routing](https://github.com/onflow/ff-sre-infrastructure/issues/469)
- [Create Runbook for Cloud SQL Database Alerts](https://github.com/onflow/ff-sre-infrastructure/issues/471)
- [Monitor Health Check Endpoints for Cloud Run Services](https://github.com/onflow/ff-sre-infrastructure/issues/464)

**Node Hosting**
- [Update transit tool to support generation of keys without push](https://github.com/onflow/ff-sre-infrastructure/issues/684)
- [Update transit pull to bucket command line arg](https://github.com/onflow/ff-sre-infrastructure/issues/683)
- [Update flow-network terraform module to support role based service account](https://github.com/onflow/ff-sre-infrastructure/issues/598)
- [Create documentation for executing HCU](https://github.com/onflow/ff-sre-infrastructure/issues/593)

**Security**
- [Triage Security Issue FLOWWEB-77](https://github.com/onflow/ff-sre-infrastructure/issues/687)
- [Triage Security Issue FLOWWEB-66](https://github.com/onflow/ff-sre-infrastructure/issues/659)
- [Triage Security Issue FLOWWEB-65](https://github.com/onflow/ff-sre-infrastructure/issues/658)

**Support**
- [Update Flix DNS Record on Cloudflare](https://github.com/onflow/ff-sre-infrastructure/issues/673)
- [Update DNS records for Move to QN](https://github.com/onflow/ff-sre-infrastructure/issues/690)
- [Copy SSH keys to 1Pass](https://github.com/onflow/ff-sre-infrastructure/issues/689)
- [Create KMS keys for new smart contracts](https://github.com/onflow/ff-sre-infrastructure/issues/686)
- [Remove Sentora EVM GW Endpoint](https://github.com/onflow/ff-sre-infrastructure/issues/678)
- [Increase rate limits for Gemini](https://github.com/onflow/ff-sre-infrastructure/issues/620)

---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Published Surge pricing FLIP
* Internal discussion on Surge pricing effect on EVM.
* Continue work on infused tokens

**This sprint**

* Drive Surge pricing FLIP to `Accepted` state.
* Continue work on infused tokens

---
