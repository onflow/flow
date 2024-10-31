# Overview

### Team Wins 🎉

- Trado bugs blocking Flow Wallet fixed
- Hyperlane validators needed for BTC bridge now stood up and being tested
- Unblocked DevDock to use FCL w native Cadence for primary integration (AI domain partner builder)
- Offer for Tim accepted as Protocol Eng I, starting Nov 18th
- 

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (10/18/24 to 10/31/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%      |       0%          |
| Block Finalization      | 99.9%   |    100%      |       0%          |
| Transaction Execution   | 99.9%   |    99.95%    |       49.6%       |
| Block Sealing           | 99.9%   |    100%      |       0%          |
| Access API Liveness     | 99.9%   |    100%      |       0%          |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

YTD SLA: 99.50%


#### SLA situation

- Updated downtime reported during the last sprint kickoff. see last sprint's [SLA section](https://github.com/onflow/flow/blob/master/agendas/2024/sprint-kickoff/2024-09-13-Flow-Sprint-Kickoff.md#sla-situation-updated-on-926)
- Total downtime YTD -
  1. 4 HCUs 20 mins
  2. Sept 4th - Mainnet25(Crescendo) upgrade: 19h23m
  3. Sept 5th - P0 incident after mainnet25: 7h30m
  4. Sept 25th - Mainnet26: 3h48m
  5. Oct 8th - HCU: 5m


## Incidents
Monday, 2024-10-14 18:46:30 Pacific: Sev-3 - EVM Gateway 2 stopped processing EVM Blocks ([slack thread](https://flow-foundation.slack.com/archives/CUU2KQL4A/p1728959386019689?thread_ts=1728959285.639699&cid=CUU2KQL4A))

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - TBD

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    6 (-2)  |       1 (+1)         |       7          |        **22** (-1)       |
| Proposed    | 1  |    4 (+2)   |       3          |       0           |        **8** (+2)  |
| Accepted    | 2  |    1     |       2       |       2        |        **7**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    25    |       1       |       0           |        **29**          |
| Released    | 4  |    0     |       4       |       6          |        **14**         |
| Total       | **18**  |    **36**   |       **12** (+1)     |       **15**          |        **81** (+1)   |

**Summary**

* Overall 1 new FLIP - [Governance] - removal of decommissioned nodes from the approved list
* Movement of two cadence flips from draft to proposed (Simple String Interpolation by Raymond was one)

**REMINDER - FLIPs that need to be reassigned immediately:**

**- Application**
  - Interaction Templates (Paul Gebheim)
  - Application - Pool-Based DEX Swap Standard (Satyam A.)

**- Cadence**
  - Type Removal In Contract Updates  (Daniel Sainati)
  - Optional References to Indexed Accesses (Daniel Sainati)
  - Mutability Restrictions  (Daniel Sainati)
  - Cadence Storage API Improvements (Daniel Sainati)
  - Reference Creation Semantics (Daniel Sainati)
  - View Functions (Daniel Sainati)
  - Entitlements (Daniel Sainati)
  - New behavior for attachments with entitlements (Daniel Sainati)

# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]

**Cycle Objectives**

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**


**This sprint**

- Continue work on [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539)

- Cadence Language
  - Continue addressing [Tech Debt](https://github.com/onflow/cadence/issues/3595)
  - Start work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Maybe resume work on the [Cadence compiler POC](https://github.com/onflow/cadence/issues/3612)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)
  - [Updating Source compatibility suite for C1.0](https://github.com/onflow/cadence/issues/3608)

- Cadence Execution
  - Continue work on [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
  - Badger -> Pebble migration:continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)
  
**Completed OKRs**
  
**On Hold**

- Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
  -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
 
- Other
    * Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
    * Evaluate fixing [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)
    * Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Faster transaction results to improve user experience [IN PROGRESS]
* Address vectors which risk network downtime
  1. Protocol level HCU] [IN PROGRESS]
  2. Operationalize EFM Recovery [NOT STARTED]
* Add passkey support: Protocol design and scoping [NOT STARTED]
* Furthering permissionless participation
  1. Proof of Possession [IN PROGRESS]
  2. KR2: SPoCK Research

**Done last Sprint:**
  * Offer for Tim accepted as Protocol Eng I, starting Nov 18th
  * 

* <ins>EFM Recovery</ins>

* <ins>Cryptography</ins>

* <ins>Data Availability</ins>

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**This sprint**

* <ins>EFM Recovery</ins>
  - [Implement an integration test for EFM and DKG IndexMap](https://github.com/onflow/flow-go/issues/6331)
  - Complete main EFM recovery logic PR
  - [Merge Protocol version upgrade PR](https://github.com/onflow/flow-core-contracts/pull/419)
  - Merge open PRs that are under review
  - Finish integration test and related DKG issue
    
* <ins>Data Availability</ins>
  - KROK Team
    - Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
      - Initial design ([Issue #6508](https://github.com/onflow/flow-go/issues/6508))
    - Registers db pruning ([Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Store Tx Result in database ([Issue #6302](https://github.com/onflow/flow-go/issues/6302) - In review, [Issue #6413](https://github.com/onflow/flow-go/issues/6413) - In review)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)
    - Add Time To Seal metric ([Issue #6448](https://github.com/onflow/flow-go/issues/6448) - In review)
    - Access API / Go SDK alignment ([Epic #735](https://github.com/onflow/flow-go-sdk/issues/735))
      - Unify streaming endpoints code duplication ([Issue #763](https://github.com/onflow/flow-go-sdk/issues/763) - In review)
      - Other endpoint improvements [1](https://github.com/onflow/flow-go-sdk/issues/765), [2](https://github.com/onflow/flow-go-sdk/issues/768), [3](https://github.com/onflow/flow-go-sdk/issues/766)

* <ins>Cryptography</ins>
  - Passkeys reading (understanding the standard)
  - PoP:
    - Polish the contract - Ledger backward compatibility
    - Setup the Ledger environment to build Ledger apps
  - SPoCK aggregation: continue reading the KOSK-based proof

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**On Hold**

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**
  * Supported Hyperlane to get validator nodes setup for BTC bridge
  * Unblocked DevDock to use FCL w native Cadence for primary integration (AI domain partner builder)
  * Funded Axelar pools (nearly) critical mass of validators for bridge activation
  * Trado bugs blocking Flow Wallet fixed
  * Continuing merging update to JVM SDK to reach Go SDK parity

**This sprint**
  * Resolve 2x Axelar nodes activation issues to unblock bridge 
  * Keep helping partners and node operators
  * Review/merge upcoming JVM SDK PRs to get to Go SDK parity
  * Soft launch Hyperlane BTC bridge (hopefully)
  * Kick off Credora (off to on chain credit scoring) and Ethereum Attestion Service integration
  
**On Hold**

---

### **User Experience** \[Greg]

Cycle Objective(s):
 - [Please enter cycle objectives for Q4 2024]

**Done last sprint**

**This sprint**
**Sprint Goal: Cycle Kickoff - Refine and Assign OKR Initiatives and Drivers / Rewards Handoff / Lost and Found (Integration - Flow Port, Flow Wallet)**

- [EPIC] Verify Completion of Commitments for EVM Launch Partners #25
- [EPIC] Flow Rewards (RAIN)
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)
- [EPIC Solving Initialization/Storage Issues - Lost and Found FLIP and Port integration](https://github.com/onflow/flow-port/issues/292)
- [Flow Bridge App Epic](https://github.com/onflow/flow-bridge-app/issues/1)

**On Hold**

- bridge.flow.com

---

### **Wallet** \[Jeff]

Cycle Objective(s): 

- [Please enter cycle objectives for Q4 2024]

**Done last sprint**

**This sprint**


**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 
- [Please enter cycle objectives for Q4 2024]

**Done last sprint**

**This Sprint**
- Begin interviewing for SRE role
- Continue work to migrate to dedicated FF Atlantis
- Execute GCP IAM migration to Flow Foundation groups
