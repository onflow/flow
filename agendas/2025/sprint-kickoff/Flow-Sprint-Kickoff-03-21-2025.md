# Overview

 ### Team Wins 🎉
 - Successfully tested EFM recovery on testnet

--- 

### Mainnet Uptime - Last 14 days (03/07/25 to 03/20/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |      0%         |
| Block Finalization      | 99.9%   |    100%       |      0%         |
| Transaction Execution   | 99.9%   |    100%       |      0%         |
| Block Sealing           | 99.9%   |    100%       |      0%         |
| Access API Liveness     | 99.9%   |    99.97%      |      24.8%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification  | Total  | Comments      |
| ---------------------- | --------- | ---------- | --------- | --------- | ------------ | ------ | ------------- |
| HCU                    | 1/27/2025 |            |           | 5         | 5            | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         | 5            | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         | 5            | 5      |               |
| Total downtime in mins |           | 210        | 210       | 225       | 225          | 225    |               |
| YTD (03/20/25) SLA     |           | 99.81%     | 99.81%    | 99.80%    | 99.80%       | 99.80% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 99.96%       | 99.96% |               |

#### Incidents
- P0 and P1: None
- P2: Incident - Block rate fell to 1 block per second. Root cause: Incorrect networking setup on consensus nodes run by a partner.

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 9 |    7      |       0       |       8        |        **24**        |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1     |       2       |       2          |        **7**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **19** |    **50**   |       **14**       |       **16**         |        **99**         |

- No changes since last sprint.
  
### Key Release Dates & Breaking Changes
* Rolling upgrade
  - Mainnet: ~Week of 17th March

* EFM Recovery testing
  - Testnet: Ongoing. Will be complete by 4 PM Pacific, 7th March.
---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q1 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**

**Cadence Execution**

**This sprint**

- Cadence Language
  

- Cadence Execution
  

**On Hold**
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* Address vectors which risk network downtime
  1. Operationalize EFM Recovery [DONE]
  2. Protocol level HCU [IN PROGRESS] 
* EVM Gateway phase 2 [IN PROGRESS]
* Support full spork history across HCU version boundaries (PoC) [BLOCKED]
* Faster transaction results to improve user experience [DONE]
* Add passkey support: Protocol design and scoping [DONE]
* Furthering permissionless participation
  1. Proof of Possession [DONE]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**
* <ins>Data Availability</ins>
  - KROK Team

    Done:
  
    Started:


* <ins>Malleability</ins>
  - KROK Team
  
    Done:

    
    In Review:
   
   Started:
   
* <ins>EFM and Protocol HCU</ins>
  -

* <ins>EVM Gateway</ins>
  - Continue integration of Ethereum Pectra updates

* <ins>Cryptography</ins>

* <ins>Protocol misc</ins>
   
**This sprint**

* <ins>Data Availability</ins>
  - KROK Team
  - Support KROK data availability PR reviews

* <ins>Malleability</ins>
 - KROK Team:
  - Support KROK malleability PR reviews

* <ins>EVM Gateway</ins>
  - Continue integration of Ethereum Pectra updates
  - Update Quicknode and Alchemy GW nodes to use stopgap soft-finality version

* <ins>Cryptography</ins>
  -       

**On Hold**

**Active Epics**
* [[EPIC] Malleability A](https://github.com/onflow/flow-go/issues/6649)
* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] Malleability: Herocache](https://github.com/onflow/flow-go/issues/6646)
* [[EPIC] EVM Gateway Phase 2](https://github.com/onflow/flow-evm-gateway/issues/700)
* [[EPIC] Access Node supports soft-finality updates]

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**

**This sprint**
 - Continue DeFi vision proposal doc
 - Support/track contract audit for More Markets product launch
 - Support/track second contract audit for Kittypunch with Zenith

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**

**This sprint**


- N/A

---

### Applications / Wallet [Jeff] 

**Cycle Objective(s):** 

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Mar 7): 3.5/week - Down from 5.5/week just two weeks ago.
 - Positive signal: 2 bugs/week last week!

**Done last sprint**

**This sprint**

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**
 

**Observability**

**Deployment Prep**

**Key Management**

**This sprint**
  * Consolidation of cloud-init configs between TN and MN
  * Release automation for terraform modules with semantic versioning 
  * Rollout of a fix of the issue where the last logs before a crash were not being pushed to grafana

**On Hold**

**Active Epics**
  * [Terraform Module Consolidation](https://github.com/onflow/ff-sre-infrastructure/issues/94)

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
* 

**This sprint**

* Contract signing with Alchemy.
* Contract review with Tibles, Hoodlums, Quicknode.

---
