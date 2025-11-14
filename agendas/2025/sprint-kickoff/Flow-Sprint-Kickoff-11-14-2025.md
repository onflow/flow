# Overview

### Team Wins 🎉

- We have realized more than 50% savings for our infra related costs (thank you Manny)
- All CEX have re-enabled Flow withdrawal and deposit (thank you Peter)
- New transaction execution weight are now live on Testnet.
- Scheduled transactions authorizer account changed deployed on Testnet.
- Investigations into transactions consuming large amount of execution resources helped to improve efficiency of some contracts by (reducing compute and memopry usage to 1/3).
- Completed EVM upgrade to Fusaka - when the Mainnet network upgrade is completed Fusaka will be enabled automatically the same day as Ethereum mainnet.
- Completed performance improvement of EVM GW which [avoids querying AN for latest block on each tx submission](https://github.com/onflow/flow-evm-gateway/issues/895) - reducing 2 access nodes API calls for each EVM transaction.

---

### Mainnet Uptime - Last 14 days (11/1/25 to 11/14/25) \[Manny]


|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |     100%      |        0%         |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA \[Manny]

| Incident/upgrade       | Date       | Collection | Consensus | Execution | Verification | Total      | Comments      |
|------------------------|------------|------------|-----------|-----------|--------------|------------|---------------|
| HCU                    | 1/27/2025  |            |           | 5         |              | 5          |               |
| P0 Incident            | 2/18/2025  | 180        | 180       | 180       | 180          | 180        | Grafana issue |
| P0 Incident            | 2/19/2025  | 30         | 30        | 30        | 30           | 30         | Grafana issue |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 4/10/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 5/15/2025  |            |           | 7         |              | 7          |               |
| HCU                    | 6/3/2025   |            |           | 9         |              | 9          |               |
| HCU                    | 6/16/2025  |            |           | 12        |              | 12         |               |
| HCU                    | 8/7/2025   |            |           | 9         |              | 9          |               |
| Forte network upgrade  | 10/22/2025 | 284        | 240       | 240       | 240          | 470        | 470           |
| Total downtime in mins |            | 210        | 210       | 272       | 210          | 272        |               |
| YTD SLA                |            | 99.89%     | 99.90%    | 99.89%    | 99.90%       | 99.84%     |               |
| SLA for 2025           |            | 99.91%     | 99.91%    | 99.90%    | 99.91%       | **99.86%** |               |

### Incidents \[Manny]

- Testnet HCU 9/12
  - Update includes the change to the account used by ScheduledTransaction, Cadence update and Fusaka on EVM GW.

### Key Release Dates & Breaking Changes \[Manny]

- Mainnet HCU on Monday, 9/17.

---

### FLIPs Tracker \[Manny]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    9     | **24**  |
| Proposed    |      1      |    2    |     3      |    1     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     9      |    10    | **58**  |
| Total       |   **20**    | **52**  |   **17**   |  **21**  | **110** |

- No change

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Performance optimization
        - [Avoid conversion from StaticType to sema.Type during runtime sub-type checking](https://github.com/onflow/cadence/issues/3691)
            - [[Subtyping Generator] Improve DSL schema](https://github.com/onflow/cadence/pull/4318)
            - [[Subtyping Generator] Fix return statement generation and add tests](https://github.com/onflow/cadence/pull/4320)
            - [[Subtyping Generator] Add support for a default rule](https://github.com/onflow/cadence/pull/4326)
            - [[Subtyping Generator] Add tests for type-checker's subtype check](https://github.com/onflow/cadence/pull/4332)
        - [Peephole optimizations](https://github.com/onflow/cadence/issues/4305)
            [Add peephole pass with potential optimizations.](https://github.com/onflow/cadence/pull/4319)
        - [Compute typeID only once for complex types](https://github.com/onflow/cadence/pull/4325)
        - [[Compiler] Pool maps created for resource reference tracking](https://github.com/onflow/cadence/pull/4328)
        - [Always call into the type-converter-context to convert from sema to static types](https://github.com/onflow/cadence/pull/4333)
- [Improve Cadence Errors to Support LLM Efficiency](https://github.com/onflow/cadence/issues/4062)
    - [Better error message when failing to decode cadence json](https://github.com/onflow/cadence/issues/4209)
        - [Improve JSON decode error messages with path context](https://github.com/onflow/cadence/pull/4302)
- Other minor optimizations:
    - [Optimize event emission](https://github.com/onflow/cadence/pull/4334)
    - [Optimize subtype check](https://github.com/onflow/cadence/pull/4338)
- Tooling
    - [Add support for collecting computation profiles](https://github.com/onflow/flow-emulator/pull/877)
    - [Fix and improve computation profiling](https://github.com/onflow/flow-emulator/pull/904)
    - [Add endpoint to download ZIP file of all contracts](https://github.com/onflow/flow-emulator/pull/905)
- Chores
    - [Add GH action to publish NPM package for parser on release](https://github.com/onflow/cadence/pull/4321)
    - [Bump onflow/atree to v0.12.0 and fxamacker/cbor to v2.9.0 of stream-mode branch](https://github.com/onflow/cadence/pull/4324)
    - [[lint] Update to Cadence v1.8.3](https://github.com/onflow/cadence-tools/pull/524)
    - [[test] Update to Cadence v1.8.3](https://github.com/onflow/cadence-tools/pull/525)
    - [[languageserver] Update to Cadence v1.8.3](https://github.com/onflow/cadence-tools/pull/528)
    - [[LS] Improve NPM publish action](https://github.com/onflow/cadence-tools/pull/526)
    - [Update code owners](https://github.com/onflow/cadence-tools/pull/527)
    - [Update to Cadence v1.8.3](https://github.com/onflow/flixkit-go/pull/98)
    - [Update to Cadence v1.8.3](https://github.com/onflow/flow-emulator/pull/900)
    - [Update to Cadence v1.8.3](https://github.com/onflow/flow-evm-gateway/pull/918)
    - [Merge `master` into Cadence VM feature branch, update to fixed Cadence version](https://github.com/onflow/flow-go/pull/8087)
    - [Update to Cadence v1.8.3](https://github.com/onflow/flowkit/pull/165)

**Cadence Execution**

- Checduled transactions - changing authorizer account
    - [[Scheduled Transactions] Update the transaction execution authorizer](https://github.com/onflow/flow-go/pull/8102)
    - [[Scheduled Transactions] Update the transaction execution authorizer](https://github.com/onflow/flow-go/pull/8122)
    - [[AN] WIP Versioned system collection](https://github.com/onflow/flow-go/pull/8119)
- Network Operation:
    - optimize execution node disk usage:
        - [Keep 3 days of chunk data pack data instead of 18 days. ](https://github.com/onflow/dapper-flow-hosting/pull/1804)
        - [change the pruning threshold for mainnet EN](https://github.com/onflow/dapper-flow-hosting/pull/1805)
        - [Change the default chunk data pack pruning threshold to 15 days](https://github.com/onflow/flow-go/pull/8118)
    - [[Util] Add --executed flag to read-protocol-state snapshot command](https://github.com/onflow/flow-go/pull/8104)
- Improvements
    - [Rename schedulde callbacks to transactions](https://github.com/onflow/flow-go/pull/8109)
- Bugfix:
    - [1](https://github.com/onflow/flow-go-internal/pull/7125)
- Automation
    - [fix checkpoint extraction script to read block ID and height](https://github.com/onflow/ff-sre-automation/pull/30)
- Network upgrade to v0.44 - preparation:
    - [Update Testnet System Colletion Version - V0.44](https://github.com/onflow/flow-go/pull/8139)
    - [Update Testnet System Colletion Version](https://github.com/onflow/flow-go/pull/8140)
    - [Fix system collection test v0.44](https://github.com/onflow/flow-go/pull/8149)
    - [Add Mainnet System Collection Version Boundary - v0.44](https://github.com/onflow/flow-go/pull/8150)
- Chore:
    - [Update flow/protobuf/go/flow v0.4.18](https://github.com/onflow/flow-go-sdk/pull/946)

**Flow EVM**
- Features
    - [Ethereum Fusaka Update](https://github.com/onflow/flow-evm-gateway/issues/912)
        - [Enable EVM Fusaka hard-fork](https://github.com/onflow/flow-evm-gateway/pull/913)
        - [Enable EVM Fusaka hard-fork for `PreviewNet` (a.k.a Emulator) & `Testnet`](https://github.com/onflow/flow-go/pull/8085)
- Optimization
    - [[Flow EVM] Optimize block formation](https://github.com/onflow/flow-go/issues/6958)
        - [Eliminate duplicate storage read operation when creating EVM `BlockContext`](https://github.com/onflow/flow-go/pull/8053)
    - [Avoid querying AN for COA account](https://github.com/onflow/flow-evm-gateway/issues/773)
        - [Update tx submission logic to only fetch a single account key from the COA](https://github.com/onflow/flow-evm-gateway/pull/911)
    - [Avoid querying AN for latest block on each tx submission](https://github.com/onflow/flow-evm-gateway/issues/895)
        - [Track the latest finalized block header for tx submission](https://github.com/onflow/flow-evm-gateway/pull/896)
- Network operation:
    - [Update `MainnetInitCadenceHeight` to the first height of `mainnet25`](https://github.com/onflow/flow-evm-gateway/pull/910)
- Chore
    - [Update `flow-go` version to `v0.44` release branch](https://github.com/onflow/flow-evm-gateway/pull/919)

**This sprint**

- Cadence Language
    - Continue tackling compiler tech-debt & optimizations

- Cadence Execution
  - Complete [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) - apply new weights on Mainnet
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Continue [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
  - Continue [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Continue [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
  - Start [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
  - Maybe: New Trie research

- EVM
  - Start: Deep-dive into EVM fees.
  - Continue: [EVM Gateway Compatibility with Surge Pricing](https://github.com/onflow/flow-evm-gateway/issues/861)
  - Complete: [Improve Tracking of the Surge factor](https://github.com/onflow/flow-evm-gateway/issues/863)
  - Complete: [Improve resilience on connections with upstream ANs](https://github.com/onflow/flow-evm-gateway/issues/764)


**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Alex]

Q4 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Network Upgrade (Spork) [Done]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Investigate root cause of sealing lag [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]
* Building blocks for Collection Nodes Decentralization [IN PROGRESS]
* Downgrade historical node hardware [IN PROGRESS]

**Done last sprint**

* Q3 Network Upgrade (Spork)
  * Debugging issues that some of the CEX has run into.
    * All issues have been resolved and all CEX have re-enabled Flow deposit and withdrawal.


* <ins>Data Availability</ins>
  * KROK Team
      * Done:
        - [[Data Availability] Deduplicate blockIDs passed to GetEventsForBlockIDs #7897](https://github.com/onflow/flow-go/issues/7897)

      * In Review:
        - [[Data Availability] Refactor events test in http package #7923](https://github.com/onflow/flow-go/issues/7923)
        - [[Data Availability] Improve Collection Endpoints error handling and documentation #7649](https://github.com/onflow/flow-go/issues/7649)
        - [[Data Availability] Implement fork-aware Script Endpoints #7651](https://github.com/onflow/flow-go/issues/7651)
        - [[Data Availability] Update LatestPersistedSealedResult module to use storage lock #7611](https://github.com/onflow/flow-go/issues/7611)
        - [[Access] TestMainCtxCancellationDuringRequestingExecutionData is flaky #7898](https://github.com/onflow/flow-go/issues/7898)
        - [[Data Availability] Refactor remaining backend structs to match updated execution state endpoints #7627](https://github.com/onflow/flow-go/issues/7627)
        - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
        - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
        - [[Data Availability] Implement fork-aware Account Endpoints #7650](https://github.com/onflow/flow-go/issues/7650)
        - [[Data Availability] Implement fork-aware Registers Endpoints #7655](https://github.com/onflow/flow-go/issues/7655)
        - [[Data Availability] Refactor subscription package #8093](https://github.com/onflow/flow-go/issues/8093)

      * In Progress:

        - [[Access] Update collection syncing to use jobqueue #8117](https://github.com/onflow/flow-go/issues/8117)
        - [[Data Availability] Implement fork-aware Execution Data subscription Endpoints #8059](https://github.com/onflow/flow-go/issues/8059)

  * Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 5 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 11/17 done
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 3 done, 7 in progress/review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 2 in progress/review

* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team


* <ins>Cryptography</ins>
  * Multi-SPoCK:
    * SPoCK paper:
      * Continued editing paper
      * Alignment on the research scope and external support
      * Consolidate the aggregate-multi-SPoCK knowledge forgery proof
      * Removed the alternative construction of SPoCK proof (more optimization) because of a security issue


* <ins>Collectors submit votes for root block for spork bootstrapping</ins>
  * Testing and automation for network bootstrapping during a spork with decentralized collector nodes

* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * [Proof of Collection Finality Design (pending feedback)](https://www.notion.so/flowfoundation/Proof-of-Collection-Finality-29c1aee1232480deb0c2e8d872e34ba9)
  * Auditing Collection Node engines for Permissionless changes
    * Transaction ingestion: [8073](https://github.com/onflow/flow-go/issues/8073)
    * Cluster block Sync protocol: [8062](https://github.com/onflow/flow-go/issues/8062)
    * Audit on request/provider engine.


* <ins>Investigate root cause of sealing lag</ins>
    * Implemented a change to increase concurrency on the Verification node.
      * change will be rolled out as part of the HCU.

* Other items not covered in OKRs:
  * Ongoing work on double-counting attack: [7918](https://github.com/onflow/flow-go/pull/7918)


**This sprint**

* <ins>Data Availability</ins>
  * Deploy Scheduled Tx Endpoints
  * Continue on milestone 2 work.
  * KROK Team
    - Continue work on Access API execution state endpoints ( milestone 3 )
    - Perform reviews
    - Fix review remarks

* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team


* <ins>Cryptography</ins>
  * Multi-SPoCK:
    * Continue editing SPoCK paper


* <ins>Collectors submit votes for root block for spork bootstrapping</ins>
  * Merging bootstrapping changes enabling decentralized collector nodes: [115](https://github.com/onflow/flow-okrs/issues/115)

* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * Continue internal review of [Proof of Collection Finality Design (pending feedback)](https://www.notion.so/flowfoundation/Proof-of-Collection-Finality-29c1aee1232480deb0c2e8d872e34ba9)
  * Continue Auditing Collection Node engines for Permissionless changes
    * Transaction ingestion: [8073](https://github.com/onflow/flow-go/issues/8073)
    * Cluster block Sync protocol: [8062](https://github.com/onflow/flow-go/issues/8062)


* Other items not covered in OKRs:
  * Rosetta scheduled transactions investigation/followup
  * Finish double-counting attack: [7918](https://github.com/onflow/flow-go/pull/7918)

---

### **DeFi** \[Kan]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### FlowALP:



**This sprint**

#### Flow ALP & Flow Vaults:



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- Fork Testing
  - Added inline fork testing syntax
  - Created fork testing video

- Mobile
  - Started building React Native scaffold for the React SDK
  - Began identifying mobile issues to tackle in scaffold

- React SDK Liquidity
  - Spec'd plan for fund component

- Misc
  - Hackathon judging
  - Implemented all missing scheduled & system transaction data access API features in the emulator
  - Implemented new websocket streaming endpoints in the emulator (was blocking forking)
  - Released NFT Card component
  - Released Scheduled Transactions component
  - Added Scheduled Transactions display to profile modal
  - Added support for multiple tokens balances in profile modal
  - Managed FlowCron deployment on testnet and make repo public with docs
  - Created documentation for new React SDK components and hooks
  - Added `discoveryAuthnExclude` support to the React SDK
  - Added support for UID & Fixed Bug In FCL Discovery Filtering
  - Add UFix128 and Fix128 fixed-point types to FCL
  - Improved JSDoc in FCL for `createFlowClient` method
	- Improved docs on `createFlowClient` for advanced FCL configuration
  - Added support for import aliasing to FCL
  - Added support for import aliasing to flowkit
  - Added flowkit docs for partners


**This Sprint**

- Fork Testing
  - Complete fork testing emulator doc
  - Document dependency mocking for forked network
  - Add analytics for fork testing usage

- Mobile
  - Fix polyfills for React Native React SDK scaffold
  - Create Expo starter
  - Create WalletConnect / Flow Wallet issues
  - Test React SDK hooks on React Native

- React SDK Liquidity
  - Build UI for Fund component
  - Build a Relay integration for the Fund component

- Misc
  - Add import alias support in Dependency Manager and CLI
  - Rename gas language across tooling to compute
  - Document React SDK Discovery Options
  - Remove legacy fallback for FCL transaction polling

---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**Cost Optimization**
- [Sync Machine Types from MN27 to TN53 for LNs and SNs](https://github.com/onflow/ff-sre-infrastructure/issues/916)
- [Terminate AN1/EN1 on TN51](https://github.com/onflow/ff-sre-infrastructure/issues/878)
- [Cleanup Snapshot Schedules for AN1/EN1 on MN26](https://github.com/onflow/ff-sre-infrastructure/issues/879)
- [Delete Data Disks from EN1s on MN24, 25, 26 and TN52](https://github.com/onflow/ff-sre-infrastructure/issues/892)
- [Terminate Blue Testing EN on MN23](https://github.com/onflow/ff-sre-infrastructure/issues/894)
- [Downsize Machine Type for EN1 MN22](https://github.com/onflow/ff-sre-infrastructure/issues/886)
- [Downsize Machine Type for EN1 MN23](https://github.com/onflow/ff-sre-infrastructure/issues/889)
- [Downsize Machine Type for EN1 MN21](https://github.com/onflow/ff-sre-infrastructure/issues/890)
- [Downsize Machine Type for EN1 MN20](https://github.com/onflow/ff-sre-infrastructure/issues/891)
- [Downsize Machine Type for EN1 MN19](https://github.com/onflow/ff-sre-infrastructure/issues/898)
- [Downsize Machine Type for EN1 MN18](https://github.com/onflow/ff-sre-infrastructure/issues/899)
- [Downsize Machine Type for EN1 MN17](https://github.com/onflow/ff-sre-infrastructure/issues/900)
- [Downsize Machine Type for EN1 MN16](https://github.com/onflow/ff-sre-infrastructure/issues/901)
- [Downsize Machine Type for EN1 MN14](https://github.com/onflow/ff-sre-infrastructure/issues/902)
- [Downsize Machine Type for EN1 MN12](https://github.com/onflow/ff-sre-infrastructure/issues/903)
- [Downsize Machine Type for EN1 MN11](https://github.com/onflow/ff-sre-infrastructure/issues/904)
- [Downsize Machine Type for EN1 MN10](https://github.com/onflow/ff-sre-infrastructure/issues/905)
- [Downsize Machine Type for EN1 MN9](https://github.com/onflow/ff-sre-infrastructure/issues/906)
- [Downsize Machine Type for EN1 MN8](https://github.com/onflow/ff-sre-infrastructure/issues/907)
- [Downsize Machine Type for EN1 MN7](https://github.com/onflow/ff-sre-infrastructure/issues/908)
- [Downsize Machine Type for EN1 MN6](https://github.com/onflow/ff-sre-infrastructure/issues/909)

**Support**
- [Rolling Deploy TN53 ENs](https://github.com/onflow/ff-sre-infrastructure/issues/885)
- [Rolling Deploy MN27 ENs](https://github.com/onflow/ff-sre-infrastructure/issues/896)
- [Increase Data Disks for ENs MN27](https://github.com/onflow/ff-sre-infrastructure/issues/911)
- [Create DNS Records for Protofire](https://github.com/onflow/ff-sre-infrastructure/issues/917)
- [Create DNS record for Amplifi](https://github.com/onflow/ff-sre-infrastructure/issues/920)
- [Update TN EVM GWs Version for the TN HCU](https://github.com/onflow/ff-sre-infrastructure/issues/922)
- [Create swap DNS Records for Protofire](https://github.com/onflow/ff-sre-infrastructure/issues/925)
- [Add KMS key ring and keys for DevEx on testnet](https://github.com/onflow/ff-sre-infrastructure/issues/883)

**Security**
- [Triage Security Issue FLOWWEB-107](https://github.com/onflow/ff-sre-infrastructure/issues/914)

---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Drafted the internal version of Transaction Fee increase FLIP.
  * Impact analysis of increase in transaction fee.

**This sprint**

* Publish the transaction Fee FLIP.

---
