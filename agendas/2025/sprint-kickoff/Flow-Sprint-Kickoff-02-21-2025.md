# Overview

 ### Team Wins 🎉
 
 * 
   
--- 

### Mainnet Uptime - Last 14 days (01/24/25 to 02/06/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    99.95%     |       49.6%      |
| Block Sealing           | 99.9%   |    99.96%     |       24.8%      |
| Access API Liveness     | 99.9%   |    100%       |       0%         |

#### P0 or P1 Incidents
* None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 9(+1) |    7      |       0       |       8        |        **24** (+1)       |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1     |       2       |       2          |        **7**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **19** |    **50**   |       **14**       |       **16**         |        **99**         |

- 1 new Flip added - [FLIP 318 - VM Bridge Support for Cross-VM NFTs](https://github.com/onflow/flips/issues/318)
  
### Key Release Dates & Breaking Changes
* Height Coordinated Upgrade:
  * Tuesday, 11th Feb on Testnet
  * Thursday, 13th Feb on mainnet
  
  Branch `v0.38`

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**


**This sprint**

- Cadence Language
  - investigate security report
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)

- Cadence Execution
  - HCU
    - Deploy [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584) - Testing & deployment
  - Continue new Trie research
  - Continue [Atree - Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516) and [execution state migration](https://github.com/onflow/flow-go/issues/6527)
  - Complete [Finish design for passkey support](https://github.com/onflow/flow-go/issues/6927)
  - Continue [Execution performance benchmarking](https://github.com/onflow/flow-go/issues/6896)

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
  1. Operationalize EFM Recovery [WRAPPING UP]
  2. Protocol level HCU [SCHEDULING] 
* EVM Gateway hardening - phase 2 [IN PROGRESS]
* Support full spork history across HCU version boundaries (PoC) [NOT STARTED]
* Faster transaction results to improve user experience [WRAPPING UP]
* Add passkey support: Protocol design and scoping [WRAPPING UP]
* Furthering permissionless participation
  1. Proof of Possession [WRAPPING UP]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**

**This sprint**

* <ins>EFM and Protocol HCU</ins>
  - Launch prep
  - Mop up tech debt item for EFM recovery: [Extend unit tests for service events conversion ](https://github.com/onflow/flow-go/issues/6961)
   
* <ins>Data Availability</ins>
  - KROK Team
    - WebSocket controller and data providers
    - Run test Access Node with WS support
    - Start ramping on soft-finality project
  - Other
    - [Backport tx error messages PRs to v0.33 branch](https://github.com/onflow/flow-go/issues/6613)
    - Backport tx error messages PRs to mainnet25 version

* <ins>Malleability</ins>
  - Finish generalized approach for testing malleability
  - Tim is joining the malleability effort
  - KROK Team
    - [[Malleability A] Attestation](https://github.com/onflow/flow-go/issues/6696)
    - [[Malleability A] LightCollection](https://github.com/onflow/flow-go/issues/6676)
    - [[Malleability A] QuorumCertificate](https://github.com/onflow/flow-go/issues/6684)
    - Continue to work on tasks for Malleability A

* <ins>EVM Gateway</ins>
  - Continue [PoC to allow indexing unsealed finalized execution results](https://github.com/onflow/flow-evm-gateway/issues/727)
  - Continue [EVM Gateway Hardening - phase 2](https://github.com/onflow/flow-evm-gateway/issues/700)
      
* <ins>Cryptography</ins>
  - PoP
    - Test flow-port release 
    - Coordinate release of Ledger app following PR merge
  - Passkeys
    - Complete writing FlIP
    - Go client to generate webauthn signatures
      
**On Hold**

**Active Epics**
* Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**


**This sprint**
 * Launch Squid, possibly

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**


**This sprint**

* [FCL Ethereum Provider for Cross-VM Apps](https://github.com/onflow/fcl-js/issues/2053)
  * Get an alpha version of the provider/adapters to Dev Education to start building demos for Eth Denver
  * Wrap up the remaining provider issues
  * Complete the RainbowKit and Wagmi adapters
  * Write documentation for the provider and adapters
  * Create a demo video

**On Hold**

- N/A

---

### Applications / Wallet [Jeff] 

**Cycle Objective(s):** 

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Feb 2): 6.75/week

**Done last sprint**



**This sprint**
  
- Focusing on resolving immediate customer problems in Flow Wallet Extension:
  - Token Display and Manipulation (6 issues in the past month)
    - APAC team: Token Manipulation focus.
    - PST team: Token Display focus.
  
  - UI / Profile Stability (4 issues in the past month)
  - Backups / Recovery / Security (3 issues in the past month)
 
- Flow Wallet iOS:
  - Focus on resolving some quick-win items: Copy fixes, Small UI tweaks, FTUE improvements.

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**


**Node Hosting**
  * [Infrastructure for MN26 shadow node](https://github.com/onflow/ff-sre-infrastructure/pull/155)
  * [Import migration mainnet firewall rules to terraform codebase](https://github.com/onflow/ff-sre-infrastructure/pull/163)
  * [Replacement of branch ref by new tag ref for network module](https://github.com/onflow/ff-sre-infrastructure/pull/165)
  * [Recovery of terraform state after disk increase change](https://github.com/onflow/ff-sre-infrastructure/pull/175)
  * Move/restore of disk snapshot between different GCP projects
  * Fix GCP disk reattachment issue on migration testnet

**Observability**

**Deployment Prep**
  * Tests in preparation for the switchover of EVM gateway to QN

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

* Start contract review with Alchemy.
* Work with Dorahacks to onboard 4 new SN nodes.

---
