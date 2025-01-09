# Overview

 ### Team Wins 🎉
 
 * Axelar ITS and LayerZero cross-chain messaging protocols now live on Mainnet
 * PaypalUSD (PyUSD) live on mainnet
 * https://bridge.flow.com is live 


--- 

### Mainnet Uptime - Last 14 days (12/14/24 to 01/09/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    100%       |       0%         |

#### Incidents
* None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8 (+1) |    7 (+1)     |       0       |       8        |        **23** (+2)        |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1     |       2       |       2          |        **7**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **17** |    **49**   |       **14**       |       **16**         |        **98**         |

- 2 new FLIPs were added since 11/29
  - 314: Import aliasing
  - 316: FCL Ethereum Provider for Cross-VM Apps
  
### Key Release Dates & Breaking Changes
* Upcoming HCU next week (week of 13th Jan)


---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**This sprint**

- Continue [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539) stretch goals & release 1.0.0.

- Cadence Language
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)
  - Start working on Blog post to communicate status & goals of the compiler POC.

- Cadence Execution
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584) - Testing
  - Continue new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)
  - Start work on [FVM Programs cache invalidation](https://github.com/onflow/flow-go/issues/6507)

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

  - [Finished and merged EFM Recovery integration test](https://github.com/onflow/flow-go/pull/6823)
  - [Finished and merged follow up updates for Recoverable Random Beacon State Machine](https://github.com/onflow/flow-go/pull/6815)
  - Work in progress on [DB migrations for flow.DKGEndState](https://github.com/onflow/flow-go/pull/6861)
  - [DKG result submission backward compatibility](https://github.com/onflow/flow-go/issues/6816)
  - Continue benchnet testing EFM recovery and [Protocol HCU](https://github.com/onflow/flow-go/issues/6849)
    - [Adding config options to BN2](https://github.com/onflow/flow-go-internal/pull/7028)

* <ins>Data Availability</ins>
  - KROK Team
    - 

* <ins>Cryptography</ins>

   - PoP
      - VacuumLabs resolved a dependency merge, unblocking Tarak to continue
      - Started work to prepare Ledger PR in coordination with VacuumLabs
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
    - 

* <ins>Cryptography</ins>
  - PoP
    - Publish Ledger PR for their review 
  - Passkeys
    - 
      
**On Hold**

**Active Epics**
* Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**

- Axelar ITS hub was launched, now just waiting on Squid for token bridging
- LayerZero cross-chain messaging protocol went live on Mainnet, now waiting for Stargate for token bridging
- PaypalUSD (PyUSD) live on mainnet
- https://bridge.flow.com is live 

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


* [Discovery for VM bridge improvements](https://github.com/onflow/flow-evm-bridge/issues/135)
* [Improvement of proposer key cycling example and documentation](https://github.com/onflow/dx-internal/issues/33)
* [Assist Wallet team with CI/CD and automated testing](https://github.com/onflow/dx-internal/issues/47)
* [Start work on Gold Star, a new doc site initiative](https://github.com/onflow/dx-internal/issues/41)
* [Continue Lost & Found integration](https://github.com/onflow/flow-port/issues/366)
* [Update bridge.flow.com to be compatible with LayerZero](https://github.com/onflow/flow-bridge-app/issues/11)
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

- Ship storage improvements to iOS, Android, Extension: https://github.com/Outblock/FRW/issues/61
- Ship network deposit alert on iOS, Android, Extension
- Ship mixpanel support to Flow Wallet extension
- Start EVM calldata decoding on Flow Wallet Extension: https://github.com/Outblock/FRW/issues/84
- Start adding Dropbox to cloud multibackup option on Flow Wallet iOS, Android: https://github.com/Outblock/FRW/issues/66

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**

**Done last sprint**

**This sprint**
* Fully migrate GCR to Artifact Registry
* Assist in setup of TN fork for testing
* Update CD workflow to leverage 
* Continue interviewing SRE Candidates

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
* Shipyard contract review.

**This sprint**
* Helping T-systems migrate their node.
* Dorahack contract signing.
* Shipyard contract signing.

---
