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

- Flips (new features):

- Testing

- Tools:


**Cadence Execution**


**Flow EVM**

- Core
 

**This sprint**

- Cadence Language


- Cadence Execution


- EVM


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

- Update of bug bounty program with HackenProof.

- Fungible token supply monitoring

- EVM Core - enable emergency pausing of all EVM-related APIs by governance comittee multisig:

- Smart contracts review and bugfixes:

**This Sprint**

- Update of bug bounty program with HackenProof.

- Fungible token supply monitoring


- On Hold (capacity)


### Performance [Jan]

**Done Last Sprint**

- Cross-vm bridging performance improvements:
    - [Cross-VM operations](https://github.com/onflow/flow-go/issues/8401) performance improvements:
        - Cadence:

        - Atree:


- Completed work on simplifying transaction scheduler contract to improve performance


**This Sprint**

- Continue: Cross-vm bridging performance improvements
    - start updating contracts to use optimized functions.
    - start re-calibration of execution effort weights to reflect optimized functions in operations pricing.


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/206

**Last Sprint**

* Explorer & UI
  * Added previous searches suggestions
  * Add NFT transfer tabs to account page
  * Add FT transfer tabs to account page
  * Deployed live indexer
  * Backfilled core data for mainnet 27
  * Started backfill core data for mainnet 26 - in progress
  * Deployed contract deployments indexer
  * Started indexers for accounts, transfers, scheduled tx
  * Various performance and observability improvements to the live and backfill indexers
  * Created Access API (rest/grpc) that can server current and historical data

**Next Sprint**

* Explorer & UI
  * Finish backfilling mainnet26
  * Start backfilling mainnet24-25
  * Deploy and backfill indexers for accounts, transfers, scheduled tx
  * Start indexers for contracts, tokens, staking rewards, evm blocks & tx
  * Integrate indexer data into flow explorer

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
