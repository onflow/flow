# Overview

 ### Team Wins 🎉
 
 * 

--- 

### Mainnet Uptime - Last 14 days (11/16/24 to 11/28/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.96%     |       0%         |

YTD SLA: 99.53%

#### HCU
1. Nov 21st to roll out Cadence security fix and EVM core changes.
   
#### Incidents
* None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7 (-1) |    6     |       0       |       8        |        **21** (-1)        |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1 (-1)    |       2       |       2          |        **7** (-1)         |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5 (-33)    |       1       |       0          |        **9**  (-33)      |
| Released    | 4  |    34 (+34)    |       7 (+2)       |       6          |        **51** (+36)         |
| Total       | **17** (-1)|    **49**   |       **14** (+2)      |       **16**         |        **96**  (+1)       |

- 2 new FLIPs were added in the last two weeks (one test issue was removed from tracking)
  
### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork): TBD

---

# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]

**Cycle Objectives**

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**


**This sprint**

- Complete [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539)

- Cadence Language
  - Security report
  - Complete remaining Tech-debt [Tech Debt](https://github.com/onflow/cadence/issues/3595)
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC](https://github.com/onflow/cadence/issues/3612)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)

- Cadence Execution
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
  - Start new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)

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
* Add passkey support: Protocol design and scoping [NOT STARTED]
* Furthering permissionless participation
  1. Proof of Possession [IN PROGRESS]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**

* <ins>Data Availability</ins>
  - KROK Team
      - Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
          - Implement controller and data providers ([Issue #6593](https://github.com/onflow/flow-go/issues/6593), [Issue #6583](https://github.com/onflow/flow-go/issues/6583), [Issue #6584](https://github.com/onflow/flow-go/issues/6584), [Issue #6617](https://github.com/onflow/flow-go/issues/6617), [Issue #6588](https://github.com/onflow/flow-go/issues/6588), [Issue #6638](https://github.com/onflow/flow-go/issues/6638), [Issue #6585](https://github.com/onflow/flow-go/issues/6585), [Issue #6635](https://github.com/onflow/flow-go/issues/6635), [Issue #6639](https://github.com/onflow/flow-go/issues/6639))
          - Improvements to tx result streaming endpoint ([Issue #6604](https://github.com/onflow/flow-go/issues/6604), [Issue #6574](https://github.com/onflow/flow-go/issues/6574), [Issue #6573](https://github.com/onflow/flow-go/issues/6573))
     - Registers db pruning ([Issue #6068](https://github.com/onflow/flow-go/issues/6068))
     - Test pebble execution data db on mainnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357))
     - Log error when unable to connect to bootstrap node([Issue #6576](https://github.com/onflow/flow-go/issues/6576))
     - Malleability: Tasks descriptions, scope discussions

**This sprint**

* <ins>EFM Recovery</ins>
  - Wrap up outstanding PRs currently under review
  - [Implement last planned integration test](https://github.com/onflow/flow-go/issues/6645)
  - Resolving the VN events chunk verification [bug](https://github.com/onflow/flow-go/issues/6622). Still some uncertainly on which approach we will take.
  - Resume Benchnet testing
    
* <ins>Data Availability</ins>
  - KROK Team
      - WebSockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
          - Continue to implement WebSockets controller, data providers and WebSockets controller error handling([Issue #6642](https://github.com/onflow/flow-go/issues/6642), [Issue #6640](https://github.com/onflow/flow-go/issues/6640), [Issue #6587](https://github.com/onflow/flow-go/issues/6587), [Issue #6637](https://github.com/onflow/flow-go/issues/6637), [Issue #6586](https://github.com/onflow/flow-go/issues/6586), [Issue #6641](https://github.com/onflow/flow-go/issues/6641))
          - Improvements to tx result streaming endpoint ([Issue #6767](https://github.com/onflow/flow-go/issues/6767))

* <ins>Cryptography</ins>
  - PoP:
    - Continue investigating the testing breaking change STAX issue with VacuumLabs
    - Continue working on a real device and flow-port test (with Tom's support) 

**On Hold**


---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects
  
**Done last sprint**

**This sprint**
* Finalize multi-sign approach for Hyperlane and launch cbBTC bridge
* Validate KittyPunch update unblocked once EVM GW local state index is released
* Support Thirdweb w RPC Edge service standup using dedicated QuickNode ANs
* Start onboarding Paradex and Layerzero 
  
**On Hold**
- N/A

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Kan]

Cycle Objective(s): 
 - Improve Quality of Life, Level Up Dev Documentation and Learning Path, Supercharge EVMxCadence, Inspire and Excite Wave of New Flow Devs
   
**Done last sprint**

**This sprint**

* Merge final two JVM SDK PRs to reach Go SDK parity and publish release
* Docs
  - Complete Cadence x EVM batched transactions walkthrough & blog post
  - Continue on OKR: https://github.com/onflow/dx-internal/issues/33 
* Smart Contracts
  - Enhance HybridCustody transactions to better support NFT transfers from child accounts
  - Begin work on VM bridge refinements
* Miscellaneous Tools/Apps
  - [Ledger support Register Node with Proof of Possession](https://github.com/onflow/flow-port/issues/364)
  - [Lost and Found integration with Flow Port](https://github.com/onflow/flow-port/issues/366)


**On Hold**

- bridge.flow.com
  
---

### **Wallet** \[Jeff]

Cycle Objective(s): 

**Done last sprint**


**This sprint**

- Continue squishing P0 + P1 bugs
- Continue [Account storage improvements](https://github.com/Outblock/FRW/issues/61)
- Continue [News panel improvements](https://github.com/Outblock/FRW-Extension/issues/163)
- General
  - [Add mixpanel event tracking](https://github.com/Outblock/FRW-Extension/issues/94)
  - [Upgrade Node.js version from 16 to 20](https://github.com/Outblock/FRW-Extension/issues/111)
  - [Add Crowdin integration](https://github.com/Outblock/FRW-Extension/issues/60)
  - 

**On Hold**

- N/A

**Active Epics**

- [Account storage improvements](https://github.com/Outblock/FRW/issues/61)

---

### **Infra - JP**

**Done last sprint**

**This sprint**
* Finish FF IAM Group migration
* Scope work to migrate domain registrars
* Continue evaluating SRE candidates
* Identify & document key SRE processes for the protocol team

---
