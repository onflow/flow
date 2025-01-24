# Overview

 ### Team Wins 🎉
 
 * 

--- 

### Mainnet Uptime - Last 14 days (01/10/25 to 01/23/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.973%    |       24.9%      |

#### P0 or P1 Incidents
* None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    7      |       0       |       8        |        **23**         |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1     |       2       |       2          |        **7**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **17** |    **49**   |       **14**       |       **16**         |        **98**         |

- no change from the last sprint.
  
### Key Release Dates & Breaking Changes
* Height Coordinated Upgrade:
  * Jan 24th (today) on Testnet
  * Jan 27th, Monday on mainnet

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**

**Cadence Execution**


**EVM Gateway**

**This sprint**

- Cadence Language
  - Bugfix (internal) - complete and deploy
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)
  - Continue working on Blog post to communicate status & goals of the compiler track.

- Cadence Execution
  - Complete work on [FVM Programs cache invalidation](https://github.com/onflow/flow-go/issues/6507) & port to v0.37 for deployment
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584) - Testing & deployment
  - Continue new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)

- Continue [EVM Gateway Hardening - phase 2](https://github.com/onflow/flow-evm-gateway/issues/700)

**On Hold**

- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Faster transaction results to improve user experience [IN PROGRESS]
* Address vectors which risk network downtime
  1. Operationalize EFM Recovery [IN PROGRESS]
  2. Protocol level HCU [NOT STARTED]
* Add passkey support: Protocol design and scoping [IN PROGRESS]
* Furthering permissionless participation
  1. Proof of Possession [IN PROGRESS]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**

* <ins>EFM and Protocol HCU</ins>


* <ins>Data Availability</ins>
  - KROK Team
    - WebSocket controller and data providers

* <ins>Protocol - Malleability</ins>
  - KROK Team
    - 

* <ins>Cryptography</ins>
   - PoP
      - 
  - Passkeys
      - 

**This sprint**

* <ins>EFM and Protocol HCU</ins>
  - Finish benchnet testing EFM recovery and [Protocol HCU](https://github.com/onflow/flow-go/issues/6849)
  - Finish backward compatibility issues
  - Work on leftovers of EFM recovery
  - Start prep work for [Protocol HCU](https://www.notion.so/flowfoundation/EFM-Recovery-Release-Upgrade-Plan-14d1aee1232480228a87e43933815285?pvs=4#15a1aee123248095b988c007875f0309) towards end of Jan

* <ins>Data Availability</ins>
  - KROK Team
    - WebSocket controller and data providers
      - [Add arguments getter for data providers](https://github.com/onflow/flow-go/issues/6865)
      - [Add documentation for new websockets](https://github.com/onflow/flow-go/issues/6644)
      - [Implement integration test for new websockets](https://github.com/onflow/flow-go/issues/6641)
      - [Add examples for ws conn usages](https://github.com/onflow/flow-go/issues/6643)
    - Support transaction soft finality in Access Node 
      - Started reviewing code [Improve user experience by enabling dApps to utilize transaction soft finality](https://github.com/onflow/flow-go/issues/5424)

* <ins>Protocol - Malleability</ins>
  - KROK Team
    - [cluster.Block](https://github.com/onflow/flow-go/issues/6660)

       
* <ins>Cryptography</ins>
  - PoP
    - Port the latest updates from Ledger
    - Prepare and submit a PR to Ledger
  - Passkeys
    - Review Access API/FVM design proposal and decide on next steps
    - Document selected the design into a FLIP
      
**On Hold**

**Active Epics**
* Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**

-
 
**This sprint**

* Launch Squid and Stargate bridges

**On Hold**
- N/A


---

### **Developer Experience** \[Kan]

Cycle Objective(s): 
 - Improve Quality of Life, Level Up Dev Documentation and Learning Path, Supercharge EVMxCadence, Inspire and Excite Wave of New Flow Devs


**Done last sprint**


**This sprint**

* [Continue work on Gold Star](https://github.com/onflow/dx-internal/issues/41)
* [Support PoP work](https://github.com/onflow/flow-port/issues/364)


**On Hold**

- 

---

### Wallet (Jeff) 

**Cycle Objective(s):** 

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 2 per week on a 4-week rolling average.

KR 2: KR 2: Improve SLA response time for critical (P0) issues to under 1 hour, with resolution within 12 hours, and high-priority issues (P1) to 12 hours, with resolution within 72 hours.

KR 3: Ensure that 90% of accounts holding >= 100 FLOW, or having storage used greater than the minimum account storage are backed up.

**Done last sprint**

**This sprint**

- Continue Flow Wallet extension refactor
- Continue EVM calldata decoding on Flow Wallet Extension: https://github.com/Outblock/FRW/issues/84
- Continue EVM transaction id pre-calculation
- Update Cadence EVM call transaction to use correct arguments
- Fix Dapper Wallet account linking transaction signing issues

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**

**Done last sprint**

**Node Hosting**

**Observability**

**Deployment Prep**

**Key Management**

**This sprint**
* Fully migrate GCR to Artifact Registry
* Assist in setup of MN fork for testing
* Migrate to Private Registry workflows 

**On Hold**
**Active Epics**

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
* Dorhack contract review.
* T-system lease account setup.
  - T-system has unstaked their Execution node. Node will be restaked next-to-next epoch.

**This sprint**
* Dorahack contract review & signing.
* Start contract review with Alchemy.

---
