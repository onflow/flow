# Overview

### Team Wins 🎉

- Attack recovery is now complete - all accounts have been unrestricted.
- We completed Execution node POC that separetes ledger from the EN process & enables zero-downtime EN upgrade.


---

#### YTD SLA \[Vishal]

##### 2026

| Incident/upgrade        | Date     | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Total  | Comments                                |
|-------------------------|----------|------------|-----------|-----------|--------------|-------------|--------|--------|-----------------------------------------|
| HCU                     | 1/1/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                     | 1/2/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                     | 1/3/2026 |            |           | 9         |              |             |        | 9      | Security Fix                            |
| HCU                     | 1/3/2026 |            |           | 9         |              |             |        | 9      | Repeated the HCU                        |
| Total downtime in mins  |          | 0          | 0         | 36        | 0            | 0           | 0      | 36     |                                         |
| YTD (01/06/26) SLA      |          | 100.00%    | 100.00%   | 99.53%    | 100.00%      | 100.00%     |        | 99.83% |                                         |
| SLA for 2026            |          | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     |        | 99.99% |                                         |

### Incidents \[Vishal]

- Jan 7th, 11:23 AM Pacific to 11:55 AM Pacific EVM Public endpoint became unusable.
  - Root cause: Node operator misconfigured the endpoint (human error).

- Rolling upgrade to `v0.44.19` to remove additional privileges granted to Service Account (no downtime)

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    9     | **24**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **52**  |   **19**   |  **21**  | **112** |

No change since last time.

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Compiler / VM
    - [[Cadence VM] Build execution image with Cadence VM enabled](https://github.com/onflow/flow-go/pull/8247)
    - correctness testing: [[Cadence VM] Improve compiler/VM / interpreter comparison tool](https://github.com/onflow/flow-go/pull/8221)
    - Improvements: 
        - [[Compiler] Validate static argument types in contract initializer](https://github.com/onflow/cadence/pull/4411)
        - Performance:
            - [[Compiler] Optimize call frames in the VM](https://github.com/onflow/cadence/pull/4380)
    - bugfix
        - [[Compiler] Remove additional transfers of indexing values in swap statements](https://github.com/onflow/cadence/pull/4413)
- Improvements
    - Tools
        - [Parenthesize pretty-printed types](https://github.com/onflow/cadence/pull/4402)
        - [Parenthesize sema and static type strings](https://github.com/onflow/cadence/pull/4407)
        - [Improve comments in generated Go code ](https://github.com/onflow/cadence/pull/4414)    
        - [Add the variable declaration value's actual type to the elaboration](https://github.com/onflow/cadence/pull/4415)
        - [Add support for decoding into cadence.Address and *big.Int](https://github.com/onflow/cadence/pull/4412)
    - Performance:
        - [Avoid unnecessary repeated type conversions](https://github.com/onflow/cadence/pull/4409)
- bugfixes
    - [Check move operator for resource-typed extra arguments](https://github.com/onflow/cadence/pull/4400)
    - [Add suggested fix for invalid reference to optional type error](https://github.com/onflow/cadence/pull/4408)
    - internal: [1](https://github.com/onflow/cadence-internal/pull/360), [2](https://github.com/onflow/cadence-internal/pull/361), [3](https://github.com/onflow/cadence-internal/pull/362), [4](https://github.com/onflow/cadence-internal/pull/371)
    - tooling:
        - [[LS] Fix code action for replacement diagnostic](https://github.com/onflow/cadence-tools/pull/562)
- chores
    - [[v1.8] Port v1.8.12-rc.1](https://github.com/onflow/cadence/pull/4403)
    - [Port internal v1.8.12-rc.1](https://github.com/onflow/cadence/pull/4404)
    - [[v0.44] Update to Cadence v1.8.12](https://github.com/onflow/flow-go/pull/8304)
    - [Update to Cadence v1.9.3](https://github.com/onflow/flow-go/pull/8298)
    - [Update to Cadence v1.9.4](https://github.com/onflow/flow-go/pull/8318)
    - [[v0.44.18-rc] Update to Cadence v1.8.12-rc.1](https://github.com/onflow/flow-go-internal/pull/7138)
    - [Update to Cadence v1.9.3](https://github.com/onflow/flow-go-sdk/pull/974)
    - [Update to Cadence v1.9.4](https://github.com/onflow/flow-go-sdk/pull/975)
    - [Update to Cadence v1.9.5](https://github.com/onflow/flow-go-sdk/pull/981)

**Cadence Execution**

- Related to security incident remediation:
    - [Revert: Add service account override](https://github.com/onflow/flow-go/pull/8324)
- Concurrent execution
    - [[FVM] Fix concurent execution metrics](https://github.com/onflow/flow-go/pull/8261)
    - [[FVM] Expose transaction index to Cadence](https://github.com/onflow/flow-go/pull/8252)
- Storehouse
    - [[Storehouse] Storehouse checkpoint validator](https://github.com/onflow/flow-go/pull/8257)
    - [Move ledger to standalone service](https://github.com/onflow/flow-go/issues/8308)
        - [[Breaking Change] Normalize nil payload value encoding to empty slice](https://github.com/onflow/flow-go/pull/8307)
- Improvement:
    - TPS loader
        - [Add account reuse](https://github.com/onflow/flow-execution-effort-estimation/pull/82)
    - performance: 
        - [[FVM] Refactor EVM injection and Cadence Runtime creation](https://github.com/onflow/flow-go/issues/8301)
            - [[FVM] Add chain as a parameter to the runtime pool](https://github.com/onflow/flow-go/pull/8302)
            - [[FVM] Resolve reusable runtime environment import cycle](https://github.com/onflow/flow-go/pull/8303)
            - [[FVM] Make Chain a non-optional part of context construction](https://github.com/onflow/flow-go/pull/8312)
            - [[FVM] Change InternalEVM injection to happen once](https://github.com/onflow/flow-go/pull/8313)
            - [[FVM] Split the Script and Transction runtimes earlier in the stack to avoid missuse](https://github.com/onflow/flow-go/pull/8321)
- Bugix:
    - internal: [1](https://github.com/onflow/atree-internal/pull/17)
- Tech debt
    - [Add account key metadata utility functions to FVM pkgs](https://github.com/onflow/flow-go/pull/8315)
    - [Remove public key deduplication migration and diff key program](https://github.com/onflow/flow-go/pull/8316)
    - Code cleanup: [[FVM] Remove unused ExecutedCollectionConsumer](https://github.com/onflow/flow-go/pull/8306)


**Flow EVM**

- Core
    - Related to security incident remediation:
        - [Add EVM function to reclaim ERC20 tokens from attacker's EOA addresses](https://github.com/onflow/flow-go/pull/8293)
        - [[Flow EVM] Add test cases for restricted EOA functionality](https://github.com/onflow/flow-go/pull/8297)
        - [[Flow EVM] Add functionality to restrict EOAs from accessing EVM](https://github.com/onflow/flow-go/pull/8310)
    - bugfix
        - [Panic on FLOW remainder in UInt to UFix64 conversion](https://github.com/onflow/flow-go/issues/6856)
            - [Truncate amount on `COA.withdraw` call to maximum Flow token vault precision](https://github.com/onflow/flow-go/pull/6877)
- Gateway
    - Improvement
        - [Add metric to track the Flow total supply on each block](https://github.com/onflow/flow-evm-gateway/pull/949)
        - [Add a metric to count the EVM block processing time during event ingestion](https://github.com/onflow/flow-evm-gateway/pull/944)
        - Performance
            - [Remove tx trace generation & storage from ingestion engine](https://github.com/onflow/flow-evm-gateway/pull/939)

**This sprint**

- Cadence Language
    - security incident follow-up, FCM support
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete enabling EN zero-downtime HCU
    - Continue testing [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
    - Park [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
    - On-hold [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
    - On-Hold [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
    - On-Hold: [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
    - On-Hold: New Trie research

- EVM
    - On-Hold, FCM support


**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q1 Cycle Objective(s):
* Support DeFi strategy [IN PROGRESS]
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* SPoCK Research [IN PROGRESS]
* Building towards few Permissionless Collection Nodes [PAUSED]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**

* <ins>Attack recovery</ins>

    
* <ins>Building Towards Permissionless Collection Nodes</ins>


* <ins>Data Availability</ins>
  * PR reviews
  * optimistic sync caching layer design anf fork-aware execution result processing (temporarily deprioritized)
  * KROK Team
      * Done:


      * In Review:


      * In Progress:



* <ins>Cryptography</ins>


---

### **DeFi** \[Vishal]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### Flow ALP & Flow Vaults:



**This sprint**



---


### New OKRs

Core protocol, Cadence and Execution team will be working on FCM, Security and Performance related OKRs starting this sprint.


### Security

- [Cadence security improvements](https://github.com/onflow/cadence-internal/issues/367)
    - expand defensive code, tech-debt review
    - external audit
- update bug bounty program
- Execution node fraud detection (storage layer)
- In-house tools
    - off-chain anomaly detection
    - analytics (transaction & account trails)
- Evaluate existing anomaly detection tools (contract / Tx anomalies)

### Performance

- Concurrent Tx execution
- Scheduled transactions performance deep-dive
- Cross-vm bridging performance deep-dive

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- Misc


**This Sprint**

- React SDK

- Misc



---

### Applications / Wallet [Jeff]

**Done last sprint**


**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**MN28 Spork**


**Historical Nodes**


**FCM**


**Support**


---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [In Progress]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**
* No updates


**This sprint**
* No Updates

---
