# Overview

### Team Wins 🎉

- Token supply tracker now successfully tested.
- Concurrent Tx execution runs on Testnet for ~2w.

---

#### YTD SLA \[Vishal]

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
| HCU                | 2/24/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| Total downtime     |           | 0          | 240       | 317.13    | 0            | 0           | 32     | 349.13  |                                                  |
| YTD (03/12/26) SLA |           | 100.00%    | 99.80%    | 99.74%    | 100.00%      | 100.00%     | 99.97% | 99.71%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.94%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- No planned downtime

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    9    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **55**  |   **19**   |  **21**  | **115** |

- No new FLIP added

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

**Done last sprint**

**Cadence Language**

- tooling 
    - [[lint] Don't report unused parameters for interface functions](https://github.com/onflow/cadence-tools/pull/602)
    - [[lint] Don't report public global variables as unused](https://github.com/onflow/cadence-tools/pull/611)
    - [[lint] Add a new analyzer to detect unused imports](https://github.com/onflow/cadence-tools/pull/590)
    - CLI: [add --warnings-as-errors flag to flow cadence lint](https://github.com/onflow/flow-cli/pull/2290)
    - emulator: [Add support for EVM test helpers](https://github.com/onflow/flow-emulator/pull/975)
    - remote debuger for backwards-compatibility testing: [[Util] Improve remote debugging tooling](https://github.com/onflow/flow-go/pull/8440)
- Testing
    - [[test] Fix Test.reset() not persisting time rollback across blocks](https://github.com/onflow/cadence-tools/pull/604)
    - [[test] Update to Cadence v1.9.10](https://github.com/onflow/cadence-tools/pull/605)
    - [[test] Enable EVM test helpers](https://github.com/onflow/cadence-tools/pull/608)
- chores (prep for network updates)
    - [[languageserver] Update to Cadence v1.9.10](https://github.com/onflow/cadence-tools/pull/606)
    - [[languageserver] Update to Cadence v1.9.10](https://github.com/onflow/cadence-tools/pull/609)
    - [[lint] Update to Cadence v1.10.0](https://github.com/onflow/cadence-tools/pull/612)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flow-cli/pull/2297)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flow-cli/pull/2298)
    - [Update to flow-go f6e2e8f41961](https://github.com/onflow/flow-emulator/pull/976)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flow-evm-gateway/pull/957)
    - [Update to Cadence v1.10.0](https://github.com/onflow/flow-go/pull/8501)
    - [Update to Cadence v1.10.0](https://github.com/onflow/flow-go-sdk/pull/1010)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flowkit/pull/201)

**Cadence Execution**
- CBOR bugfix [Reject encoding nil inside CBOR indefinite-length string](https://github.com/fxamacker/cbor/pull/750)
- Enable tests concurency: [Make Greetings generator counter thread-safe](https://github.com/onflow/flow-go-sdk/pull/1009)

**Flow EVM**
- Core
    - test helpers
        - [[Flow EVM] Add context option to enabled `EVM` testing helpers](https://github.com/onflow/flow-go/pull/8490)
        - [[Flow EVM] Add options to enable the `EVM` testing helpers](https://github.com/onflow/flow-go/pull/8487)

**This sprint**

- Cadence Language
    - Deploy security improvements
    - Complete AI-assisted code review
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
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

Last sprint:

- SPoCK: 


Next sprint:


---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
    - [Second review Flow ALP: 0/32](https://github.com/onflow/FlowALP/issues/209)
    - [FlowActions: 18/20](https://github.com/onflow/FlowActions/issues/95)
    - [FYV: 11/12](https://github.com/onflow/FlowYieldVaults/issues/131)
    - [FYV EVM: 12/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP

    - KROK Team:
        * Done:

        
                
      * In Review: 


                
      * In Progress


- FYV



- FYV Testing



- FCM Whitepaper/Documentation


**This sprint**

Goals:
1. Continue FYV internal testing
2. Kick off second round of the QS review for FYV.

- ALP
  - Continue the work to make FCM contracts more upgradabale - [#166](https://github.com/onflow/FlowALP/issues/166)

- FYV


- FYV Testing
  - Continue on the work to convert unit-zero simulations to use the new testing framework

- FCM Whitepaper
  - Continue working on the primer

---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements:
    - [1](https://github.com/onflow/cadence-internal/pull/454)

- Update of bug bounty program with HackenProof.
    - no updates this sprint
    - Docs update to clarify functionality
        - [Update EVM bridge FLIP to clarify storage-based fee model](https://github.com/onflow/flips/pull/362)
        - [Clarify NFT bridge fee model: fees apply only to storage-consuming operations](https://github.com/onflow/flow-evm-bridge/pull/202)

- Fungible token supply monitoring
    - completed m1 (alerting)

- Smart contracts review and bugfixes:
    - [Fix division by zero in calculateRewards when all nodes are non-operational](https://github.com/onflow/flow-core-contracts/pull/585)
    - [Enable concurrent fee collection](https://github.com/onflow/flow-core-contracts/pull/575)
    - [Add clarifying comments for potential security audit false positives](https://github.com/onflow/flow-core-contracts/pull/588)
    - [Fix infinite loop and force-unwrap panic in scheduler cancel/remove logic](https://github.com/onflow/flow-core-contracts/pull/586)
    - [Standardize error message format across contracts and transactions](https://github.com/onflow/flow-core-contracts/pull/582)
    - [Fix pauseType bypass via bridge-defined type in ToEVM direction](https://github.com/onflow/flow-evm-bridge/pull/204)
    - [Replace opaque force-unwraps with descriptive panics and add FT symbol fallback](https://github.com/onflow/flow-evm-bridge/pull/205)
    - [Security review improvements across utility contracts](https://github.com/onflow/flow-ft/pull/187)
    - [Fix code review issues across contracts and transactions](https://github.com/onflow/flow-nft/pull/266)
    - [Standardize error messages: add prefixes and use string interpolation](https://github.com/onflow/flow-nft/pull/268)
    - [Fix style and low-severity findings from contract review](https://github.com/onflow/hybrid-custody/pull/179)

**This Sprint**

- Update of bug bounty program with HackenProof.
    - Complete review of core contracts before adding to scope.

- Fungible token supply monitoring
    - Enable token supply tracking on one TN and MN EN.

- On Hold (capacity)
    - In-house financial analytics & fraud detection tooling - Blocked by explorer work


### Performance [Jan]

**Done Last Sprint**

- Cross-vm bridging performance improvements:
    - contract updates to leverage optimized functions:
        - Flow Actions: [Replace COA.call with COA.callWithSigAndArgs for reduced computation cost](https://github.com/onflow/FlowActions/pull/150)
        - EVM Bridge: [Replace COA.call with COA.callWithSigAndArgs for reduced computation cost](https://github.com/onflow/flow-evm-bridge/pull/207)
        - FYV: [Replace COA.call with COA.callWithSigAndArgs for reduced computation cost](https://github.com/onflow/FlowYieldVaultsEVM/pull/77)


**This Sprint**

- Complete: Cross-vm bridging performance improvements
    - Updating contracts to use optimized functions.
    - Start re-calibration of execution effort weights to reflect optimized functions in operations pricing.

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/206

**Last Sprint**

* Explorer & UI

* Access API & Indexer

* Infrastructure & Ops


**Next Sprint**

* Explorer & UI

* Indexer

* Community


---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**


---

### **Infra** \[Manny]

**Done last sprint**

**FCM**


**DevOps**


**Node Operations**


**FinOps**


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
