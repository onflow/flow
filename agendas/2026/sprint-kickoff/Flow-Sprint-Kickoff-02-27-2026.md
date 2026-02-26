# Overview

### Team Wins 🎉

- Successfully executed the first zero-downtime execution upgrade on mainnet
- Cross-VM optimizations show 15-20% improvement in the FYV transaction cost in benchmarks.
- Transaction scheduling contract optimizations show ~25% improvement in the execution effort consumed.

---

#### YTD SLA \[Vishal]

Total Downtime in minutes

| Incident/upgrade   | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                         |
|--------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|--------------------------------------------------|
| HCU                | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                                 |
| HCU                | 1/6/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| EVM GW Issue       | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable                  |
| HCU                | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| HCU                | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| Sealing halt       | 2/11/2026 |            |           | 7         |              |             |        | 7       | FF and DL execution nodes went OOM and restarted |
| HCU                | 2/13/2026 |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| Sealing Halt       | 2/23/2026 |            | 240       | 240       |              |             |        | 240     | Consensus halted                                 |
| HCU                | 2/24/2026 |            |           | 0.13      |              |             |        | 9       | EN update caused a sealing halt                  |
| Total downtime     |           | 0          | 0         | 68        | 0            | 0           | 32     | 100     |                                                  |
| YTD (01/06/26) SLA |           | 100.00%    | 99.71%    | 99.61%    | 100.00%      | 100.00%     | 99.96% | 99.57%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]


#### Planned downtime

- HCUs on 2/13 and 2/24

#### Unplanned downtime

- Sealing halt on 2/23/2026
  - [Retrospective](https://status.flow.com/incidents/d2rdc04vx65w)


---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    8    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **55**  |   **19**   |  **21**  | **115** |

- 1 new FLIP Added
  - [FLIP 359: Allow for-in loop over dictionary keys](https://github.com/onflow/flips/issues/359)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

**Done last sprint**

**Cadence Language**

- Latest security improvements: [[v1.9.10](https://github.com/onflow/cadence/pull/4444)
- more work on improving security: [1]](https://github.com/onflow/cadence-internal/pull/427), [2](https://github.com/onflow/cadence-internal/pull/422), [3](https://github.com/onflow/cadence-internal/pull/432)
- Update [compiler to keep up with the security improvements](https://github.com/onflow/cadence-internal/pull/428)
- chores:
    - [[v1.9] Port v1.9.9-rc.2](https://github.com/onflow/cadence/pull/4439)
    - [Port v1.9.9-rc.2](https://github.com/onflow/cadence/pull/4440)
    - [Port v1.9.10-rc.1](https://github.com/onflow/cadence/pull/4445)
    - [Update to Cadence v1.9.9](https://github.com/onflow/flow-go-sdk/pull/992)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flow-go-sdk/pull/1005)
    - [[v0.46] Update to Cadence v1.9.9](https://github.com/onflow/flow-go/pull/8413)
    - [Update to Cadence v1.9.9](https://github.com/onflow/flow-go/pull/8412)
    - [[v0.47] Update to Cadence v1.9.10](https://github.com/onflow/flow-go/pull/8461)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flow-go/pull/8464)
    - [[v0.47] Update to Cadence v1.9.10-rc.1](https://github.com/onflow/flow-go-internal/pull/7163)

**Cadence Execution**

- 
- Bugfix:
    - [Remove unnecessary CAS guard from SubscriptionProvider.updateTopics()](https://github.com/onflow/flow-go/pull/8407)
    - [[Access] Fix `ParseAddress()` by only removing prefix "0x"](https://github.com/onflow/flow-go/pull/8453)
- Improvement:
    - related to the consensus outage triggered by dynamic bootstrap: [[Consensus] Add --require-beacon-key flag to fail fast on missing DKG keys at consensus node startup](https://github.com/onflow/flow-go/pull/8410)
- Tech-debt: 
    - [[FVM] Remove legacy account status formats code](https://github.com/onflow/flow-go/pull/8299)
- Chores:
    - [Cleanup unused kubernetes related deployments](https://github.com/onflow/flow-go/pull/8384)
    - [Mockery fixes](https://github.com/onflow/flow-go/pull/8423)
    - [add ledger image build](https://github.com/onflow/flow-go-internal/pull/7146)

**Flow EVM**
- Core:
    - Imporovement
        - metering: [[Flow EVM] Add proper meter and gas limit checks for EVM dry operations](https://github.com/onflow/flow-go/pull/8416)
        - system contract: [[Flow EVM] Apply general suggestions from QuantStamp audit report](https://github.com/onflow/flow-go/pull/8439)
    - Bugfix:
        - [[Flow EVM] Add strict hex-prefix check when parsing `EVM` addresses from `String`](https://github.com/onflow/flow-go/pull/8437)
- Gateway:
    - [Add parent hash verification during block ingestion](https://github.com/onflow/flow-evm-gateway/pull/954)


**This sprint**

- Cadence Language
    - Continue work on security improvements
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete testing [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571) - epoch switchover
    - On-hold [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
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
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* Building towards few Permissionless Collection Nodes [PAUSED]
* SPoCK Research [IN PROGRESS]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**


* <ins>Cryptography</ins>



---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
  - [FCM: 5/5](https://github.com/orgs/onflow/projects/99/views/15) ✅
  - [FlowActions: 15/20](https://github.com/onflow/FlowActions/issues/95)
  - [FYV: 6/11](https://github.com/onflow/FlowYieldVaults/issues/131)
  - [FYV EVM: 5/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP

  - KROK Team:
      * Done:


      * In Review:   

      
      * In Progress


- FYV



- FYV Testing



- FCM Whitepaper/Documentation



**This sprint**

- ALP


- FYV


- FYV Testing



- FCM Whitepaper



---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements: covered in Cadence language section
- In-house financial analytics & fraud detection tooling
    - Chase TBD
- Update of bug bounty program with HackenProof.
    - [Program updated](https://hackenproof.com/programs/flow-protocol) with more details on scope and rewrite to reduce repetitive statements.
- Fungible token supply monitoring
    - [flow-go PR](https://github.com/onflow/flow-go/pull/8424) in progress, [Cadence dependency](https://github.com/onflow/cadence/pull/4442) merged.


**This Sprint**

- Cadence security improvements: Continue work on more improvements, maybe start experimentation with Claude security
- In-house financial analytics & fraud detection tooling
    - Chase TBD
- Update of bug bounty program with HackenProof.
    - update program to add more info on reproducers and reports priotitization
- Fungible token supply monitoring
    - complete the initial version and run on one EN

- On Hold (capacity)


### Performance [Jan]

**Done Last Sprint**

- [Cross-VM operations](https://github.com/onflow/flow-go/issues/8401) performance improvements:
        - [[Flow EVM] Add new EVM functions that can be used to reduce computation cost of transactions](https://github.com/onflow/flow-go/pull/8418)
        - [[Flow EVM] Optimize and reduce computation cost of four EVM functions](https://github.com/onflow/flow-go/pull/8434)
- Completed [scheduler contract performance improvements](https://github.com/onflow/flow-core-contracts/pull/580)

**This Sprint**

- Complete: simplify transaction scheduler to improve performance 
- Continue: Cross-vm bridging performance improvements


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/176
https://github.com/onflow/flow-okrs/issues/175

**Done Last Sprint**

- Assist on security analytics tool, block explorer, and FCM testing (covered in other sections)
- Block Explorer


**This Sprint**


- Block Explorer



---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**


---

### **Infra** \[Manny]

**Done last sprint**


**Observability**


**FCM**

**Execution Ledger Service**


**TN54 Spork**


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
