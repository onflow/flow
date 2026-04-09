# Overview

### Team Wins 🎉



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
| HCU                | 4/07/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| Total downtime     |           | 0          | 240       | 317.26    | 0            | 0           | 32     | 349.26  |                                                  |
| YTD (04/08/26) SLA |           | 100.00%    | 99.83%    | 99.77%    | 100.00%      | 100.00%     | 99.98% | 99.75%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- Zero-downtime upgrade:
  - Testnet: Monday, 4/6
  - Mainnet: Tuesday, 4/7

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

- Testing

- chores (prep for network updates)


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


- Cadence Execution


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



Next sprint:




---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
    - [Second review Flow ALP: 13/32](https://github.com/onflow/FlowALP/issues/209)
    - [FlowActions: 18/20](https://github.com/onflow/FlowActions/issues/95)
    - [FYV: 12/13](https://github.com/onflow/FlowYieldVaults/issues/131)
    - [FYV EVM: 14/21](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP


- FYV


- FYV Testing
  - Porting over the UnitZero scenarios: 9 in progress, 2 done, 3 remaining ([doc](https://www.notion.so/flowfoundation/UnitZero-Simulation-Overview-32d1aee123248019be2de5f78fb5e0c2))

  - Unit Testing:

      | Scope | Status |
      |-------|--------|
      | Multi-Position Scenarios | ✅ Done |
      | Multi-Collateral & Cross-Asset | ✅ Done |
      | Oracle Failure & Manipulation | ✅ Done |
      | On-chain oracle failure | 🚧 In review |
      | Liquidation Edge Cases |  ✅ Done |
      | Interest Rate Boundaries |  🚧 In review |
      | Deposit Capacity Attacks |🚧 In progress |
      | Rebalancing Failures | 🚧 In review |
      | Access Control | ✅ Done |
      | DeFi Connector Integration | 🚧 In progress  |


- FCM Whitepaper/Documentation


**This sprint**

Goals:
1. Continue FYV internal testing
2. Kick off second round of the QS review for FYV.
3. Evaluate the impact of excluding MOET from v1 and determine the necessary design revisions.

- ALP


- FYV


- FYV Testing


- FCM Whitepaper


---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements:
    - [1](https://github.com/onflow/cadence-internal/pull/454)

- Update of bug bounty program with HackenProof.

- Fungible token supply monitoring

- Smart contracts review and bugfixes:


**This Sprint**

- Update of bug bounty program with HackenProof.

- Fungible token supply monitoring

- On Hold (capacity)
    - In-house financial analytics & fraud detection tooling - Blocked by explorer work


### Performance [Jan]

**Done Last Sprint**

- Cross-vm bridging performance improvements:

**This Sprint**

- Complete: Cross-vm bridging performance improvements


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/206

**Last Sprint**

* Explorer

**Next Sprint**

* Explorer

---

### **Infra** \[Manny]

**Done last sprint**

**FCM**

**DevOps**

**Node Operations**

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
