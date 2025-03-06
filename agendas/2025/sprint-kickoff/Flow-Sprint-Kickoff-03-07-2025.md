# Overview

 ### Team Wins 🎉
 
  
--- 

### Mainnet Uptime - Last 14 days (02/20/25 to 03/06/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    98.96%       |      1041.7%         |
| Block Finalization      | 99.9%   |    98.96%       |       1041.7%         |
| Transaction Execution   | 99.9%   |    98.91%     |       1091.27%      |
| Block Sealing           | 99.9%   |    98.91%     |       1091.27%      |
| Access API Liveness     | 99.9%   |    98.96%       |       1041.7%         |

YTD SLA 99.69%

#### P0 or P1 Incidents
* 2 P0 incidents - [Postmortem](https://status.onflow.org/incidents/tp2zb9chpfk3)

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
* Protocol HCU
  - Testnet: Week of 3rd March (after EthDenver)
  - Mainnet: Week of 10th March

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q1 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**This sprint**

- Cadence Language
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)

- Cadence Execution
  - Continue new Trie research
  - Continue [Atree - Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516) and [execution state migration](https://github.com/onflow/flow-go/issues/6527)
  - Continue [Execution performance loader](https://github.com/onflow/flow-go/issues/6896)

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
* EVM Gateway hardening - phase 2 [IN PROGRESS]
* Support full spork history across HCU version boundaries (PoC) [BLOCKED]
* Faster transaction results to improve user experience [WRAPPING UP]
* Add passkey support: Protocol design and scoping [DONE]
* Furthering permissionless participation
  1. Proof of Possession [WRAPPING UP]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**
* <ins>Data Availability</ins>
  - KROK Team


* <ins>Malleability</ins>
  - KROK Team

* <ins>EFM and Protocol HCU</ins>

* <ins>Cryptography</ins>

* <ins>Protocol misc</ins>

**This sprint**

* <ins>EFM and Protocol HCU</ins>
   
* <ins>Data Availability</ins>
  - KROK Team

* <ins>Malleability</ins>
  - KROK Team: 

* <ins>EVM Gateway</ins>
      
* <ins>Cryptography</ins>
      
**On Hold**

**Active Epics**
* [[EPIC] Malleability A](https://github.com/onflow/flow-go/issues/6649)
* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**

**This sprint**


**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**

**This sprint**

* [FCL Ethereum Provider for Cross-VM Apps](https://github.com/onflow/fcl-js/issues/2053)
  * Wrap up the remaining p2 provider/adapter issues
  * Write documentation for the provider and adapters
  * Create a demo video
* [FCL React Hooks](https://github.com/onflow/flow-okrs/issues/86)
  * Start work on the FCL React Hooks library
  * Solve FCL blockers around config

**On Hold**

- N/A

---

### Applications / Wallet [Jeff] 

**Cycle Objective(s):** 

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Feb 2): 6.25/week
 - Positive early signal: 2 bugs/week last week!

**Done last sprint**

**This sprint**
  
- Focusing on resolving immediate customer problems in Flow Wallet Extension:
  - Token Display and Manipulation (6 issues in the past month)
  - UI / Profile Stability (4 issues in the past month)
  - Backups / Recovery / Security (3 issues in the past month)
 
- Flow Wallet Extension:
  - Release v2.7.3 - Fixes many customer problems in FT display/manipulation, app stability and more.
  - Working on: UI Updates, NFT display/manipulation hardening
 
- Flow Wallet iOS/Android:
  - Continued focus on quick-win polish items: Copy fixes, UI tweaks, FTUE improvements.
  - Targeting release early next week in advance of EthDenver

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**


**Node Hosting**

**Observability**

**Deployment Prep**

**Key Management**

**This sprint**
  * Network module codebase merge between Testnet and Mainnet
  * Automation of new tagging strategy for terraform modules
  * New logic to permit egress firewall rule exceptions with allow action

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

**This sprint**

* Contract signing with Alchemy.
* Work with Dorahacks to onboard 4 new SN nodes.
* Sharing contracts with one more SN node operators.

---
