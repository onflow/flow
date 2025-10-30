# Overview

### Team Wins 🎉

- Forte is now live!
- We averted a crisis by ensuring network epoch transition succeeds and does not enter the Epoch Fallback Mode - thanks to Jordan S.
- Published new technical blogs about [state optimization - account key deduplication](https://www.flow.com/engineering-blogs/optimizing-flow-for-scale-speed-and-sustainability) and nearly done with publishing [execution weight recalibration (notion link)](https://www.notion.so/flowfoundation/To-be-published-once-weights-are-live-Blog-post-for-Execution-Effort-Calibration-2-28d1aee1232480d090f6c87933bc69a6).

---

### Mainnet Uptime - Last 14 days (10/18/25 to 10/31/25) \[Vishal]

|                         | Target | Current Score | Error budget used | Downtime on Oct 22nd                                                    |
|:------------------------|:------:|:-------------:|:-----------------:|:------------------------------------------------------------------------|
| Collection Finalization | 99.9%  |    98.69%     |       1409%       | 4hr, 44m  (6AM to 10:44AM Pacific)                                      |
| Block Finalization      | 99.9%  |    98.81%     |       1190%       | 4hr (6AM to 10AM Pacific)                                               |
| Transaction Execution   | 99.9%  |    98.81%     |       1190%       | 4hr (6AM to 10AM Pacific)                                               |
| Block Sealing           | 99.9%  |    98.81%     |       1190%       | 4hr (6AM to 10AM Pacific)                                               |
| Access API Liveness     | 99.9%  |    97.77%     |       2332%       | `SendTransaction` on public endpoint - 7hr, 50m (6AM to 1:50PM Pacific) |


#### YTD SLA

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
| YTD SLA                |            | 99.89%     | 99.90%    | 99.88%    | 99.90%       | 99.89%     |               |
| SLA for 2025           |            | 99.91%     | 99.91%    | 99.90%    | 99.91%       | **99.86%** |               |

### Incidents

- Fort mainnet network upgrade 10/22.
  - Network downtime: 4hr, 44m
  - Total downtime: 7hr, 50m

### Key Release Dates & Breaking Changes

- Rolling upgrade for Fusaka on **Tesnet** ~this week/next.

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    7    |     0      |    10    | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    2     | **10**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    7    |     1      |    0     | **11**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **20**    | **54**  |   **17**   |  **19**  | **110** |

#### New FLIPs


---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Investigating security reports
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Performance optimization
        - [Avoid conversion from StaticType to sema.Type during runtime sub-type checking](https://github.com/onflow/cadence/issues/3691)
            - [[Subtyping Generator] Generate subtype checking rules from a DSL](https://github.com/onflow/cadence/pull/4262)
            - [[Subtyping Generator] Improve subtype check generation](https://github.com/onflow/cadence/pull/4299)
            - [[Subtyping Generator] Introduce `forAll` predicate](https://github.com/onflow/cadence/pull/4306)
            - [[Subtyping Generator] Support comments](https://github.com/onflow/cadence/pull/4313)
            - [[Subtyping Generator] Pretty print errors with source snippet](https://github.com/onflow/cadence/pull/4317)
            - [[Subtyping Generator] Improve DSL schema](https://github.com/onflow/cadence/pull/4318)
- Bugfix: [Fix accidental value caching and reuse in native functions when run with VM](https://github.com/onflow/cadence/pull/4315)
- Chores
    - porting internal fixes:
        - [[v1.7] Port v1.7.2-rc.1](https://github.com/onflow/cadence/pull/4309)
        - [Port v1.7.2-rc.1](https://github.com/onflow/cadence/pull/4310)
    - [Update to Cadence v1.8.2](https://github.com/onflow/flow-go-sdk/pull/936)
    - [Update to Cadence v1.8.3](https://github.com/onflow/flow-go-sdk/pull/941)

**Cadence Execution**

- Network upgrade prep & execution
    - [update finalization](https://github.com/onflow/dapper-flow-hosting/pull/1781)
    - [update devnet version to v0.43.2-cadence-v1.7.2-rc.1](https://github.com/onflow/dapper-flow-hosting/pull/1787)
    - [Mainnet27](https://github.com/onflow/dapper-flow-hosting/pull/1784)
    - [update last_sealed_state.json path to HOME](https://github.com/onflow/dapper-flow-hosting/pull/1788)
    - [stop selected collection nodes by stop_collection_indices flag](https://github.com/onflow/dapper-flow-hosting/pull/1790)
    - [add n-migrate-worker flag to state extraction](https://github.com/onflow/dapper-flow-hosting/pull/1801)
    - [[After Spork] mainnet27 enable require approvals to seal ](https://github.com/onflow/dapper-flow-hosting/pull/1785)
    - [Create disks from latest mainnet & devnet snapshots](https://github.com/onflow/ff-sre-infrastructure/pull/842)
- Performance improvement: [Add GroupCache, a new LRU optimized for removing related keys](https://github.com/fxamacker/golang-lru/pull/1)
- Technical [content preparation (account key deduplication)](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/14)
- CBOR [Improvement for interoperability/transcoding between CBOR & JSON]((https://github.com/fxamacker/cbor/pull/715))
- Atree 
    - cleanup: [Remove unused storage function FixLoadedBrokenReferences](https://github.com/onflow/atree/pull/588)
    - testing: [Add parallelism to tests to reduce atree test duration (64m -> 31m)](https://github.com/onflow/atree/pull/584)
- End-End tests:
    - [Code cleanup and rate limiting](https://github.com/onflow/flow-e2e-tests/pull/68)
    - [Prepare migration mainnet tests](https://github.com/onflow/flow-e2e-tests/pull/69)
- Tooling for performance testing & execution weights calibraton:
    - [Add more loaders for scheduled transactions](https://github.com/onflow/flow-execution-effort-estimation/pull/78)
    - [Fix tests and scheduled transaction load](https://github.com/onflow/flow-execution-effort-estimation/pull/79)
    - [More templates and fixes for calibration](https://github.com/onflow/flow-execution-effort-estimation/pull/73)
- Chores
    - atree: [Bump fxamacker/cbor to feature/stream-mode based on v2.9.0](https://github.com/onflow/atree/pull/590)
    - [Update to Cadence v1.8.1, Go SDK 1.9.0, atree 0.11.0, go-ethereum 1.16.4](https://github.com/onflow/flow-go/pull/8032)
    - [[v0.43] Update to Cadence v1.7.2](https://github.com/onflow/flow-go/pull/8068)
    - [Update to Cadence v1.8.2 and go-ethereum v1.16.5](https://github.com/onflow/flow-go/pull/8078)
    - [Update to Cadence v1.8.3](https://github.com/onflow/flow-go/pull/8094)
    - emulator: [Update to Cadence v1.8.1](https://github.com/onflow/flow-emulator/pull/876)

**Flow EVM**

- Gateway
    - Network upgrade preparation:
        - [Update to latest `flow-go` for Forte upgrade](https://github.com/onflow/flow-evm-gateway/pull/903)
        - [[Back-port] Update to latest `flow-go` for Forte upgrade](https://github.com/onflow/flow-evm-gateway/pull/905)
        - [Update `ethereum/go-ethereum` version to `v1.16.4`](https://github.com/onflow/flow-evm-gateway/pull/909)
        - [Update `MainnetInitCadenceHeight` to the first height of `mainnet25`](https://github.com/onflow/flow-evm-gateway/pull/910)
- Chores
    - [Bump `ethereum/go-ethereum` dependency to `v1.16.5`](https://github.com/onflow/flow-go-sdk/pull/931)


**This sprint**


- Cadence Language
    - Continue tackling compiler tech-debt & optimizations

- Cadence Execution
  - Complete [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) - apply new weights 
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Continue [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
  - Start [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Start [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
  - Start [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
  - Maybe: New Trie research

- EVM
  - Continue: [EVM Gateway Compatibility with Surge Pricing](https://github.com/onflow/flow-evm-gateway/issues/861)
  - Complete: [Ethereum Fusaka Update](https://github.com/onflow/flow-evm-gateway/issues/912)
  - Complete: [Improve Tracking of the Surge factor](https://github.com/onflow/flow-evm-gateway/issues/863)
  - Complete: [Improve resilience on connections with upstream ANs](https://github.com/onflow/flow-evm-gateway/issues/764)
  - Complete: [Avoid querying AN for latest block on each tx submission](https://github.com/onflow/flow-evm-gateway/issues/895)

**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q4 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Network Upgrade (Spork) [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Investigate root cause of sealing lag 🆕 [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]
* Proof of Collection Finality 🆕 [Not Started]
* Migrate EN version beacon to Dyn. Prot. State [Not Started]
* Concurrent Transaction execution [Not Started]
* Downgrade historical node hardware 🆕 [Not Started]

Q3 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Overload resilience  [Done]
* Network Upgrade (Spork) [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [Done]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]

**Done last sprint**

* <ins>Overload resilience</ins>


* Q3 Network Upgrade (Spork)


* <ins>Data Availability</ins>


  * KROK Team

      * Done:


      * In Review:


      * In Progress:

  * Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 4 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 7/17 done
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 1 done, 6 in progress, 2 in review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 0 in progress


* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team



* <ins>Cryptography</ins>

  * Multi-SPoCK:




* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>


* <ins>Investigate root cause of sealing lag</ins>


* Other items not covered in OKRs:

**This sprint**

* <ins>Q3 Network Upgrade (Spork)</ins>


* <ins>Data Availability:</ins>


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>



* <ins>Cryptography</ins>


* <ins>Investigate root cause of sealing lag</ins>


* Other items not covered in OKRs:


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

- Product discussions
- Testnet Deployment
- Adapting simulation scenarios into test cases
- Technical Documentation
- Pass TidalProtocol repo to auditors

**This sprint**

#### Tidal:


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

-React SDK / FCL


-Stablecoins


-Forking Mainnet


-Other


**This Sprint**

- React SDK


- CLI



---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**MN27 Spork Prep**


**Support**


**Security**


---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* No updates :(

**This sprint**

* Add panels to community dashboard explaining when and why surge pricing is active.
* Continue tokenomics discussion with Dete.

---
