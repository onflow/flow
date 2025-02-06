# Overview

 ### Team Wins 🎉
 
 * 
--- 

### Mainnet Uptime - Last 14 days (01/24/25 to 02/06/24) \[Vishal]

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
  * Jan 24th (today) on Testnet ✔️
  * Jan 27th, Monday on mainnet

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**This sprint**

- Cadence Language
  - Bugfix (internal) - complete and deploy
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)
  - Publish Blog post to communicate status & goals of the compiler track.

- Cadence Execution
  - Deploy [FVM Programs cache invalidation](https://github.com/onflow/flow-go/issues/6507)
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584) - Testing & deployment
  - Complete [Document versioning mechanics for dynamic protocol state](https://github.com/onflow/flow-go/issues/6887)
  - Continue new Trie research
  - Continue [Atree - Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516) and [execution state migration](https://github.com/onflow/flow-go/issues/6527)
  - Continue [Finish design for passkey support](https://github.com/onflow/flow-go/issues/6927)
  - Start [Execution performance benchmarking](https://github.com/onflow/flow-go/issues/6896)

- EVM Gateway
  - Continue [PoC to allow indexing unsealed finalized execution results](https://github.com/onflow/flow-evm-gateway/issues/727)
  - Continue [EVM Gateway Hardening - phase 2](https://github.com/onflow/flow-evm-gateway/issues/700)

**On Hold**
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
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

**This sprint**

* <ins>EFM and Protocol HCU</ins>
  - Wrap up EFM Recovery benchnet testing
  - Then tag a version for the Protocol HCU upgrade and begin upgrade process (pre-requisite is that all operators to upgrade over a rolling upgrade window of days/weeks)

* <ins>Data Availability</ins>
  - KROK Team
    - WebSocket controller and data providers
      - [Add documentation for new websockets](https://github.com/onflow/flow-go/issues/6644)
      - [Add examples for ws conn usages](https://github.com/onflow/flow-go/issues/6643)
    - Support transaction soft finality in the Access Node 
      - Knowledge sharing about current Execution Sync and discussion of soft finality
    - Other
      - [Backport tx error messages PRs to v0.33 branch](https://github.com/onflow/flow-go/issues/6613)

* <ins>Protocol - Malleability</ins>
  - Yurii to start on data malleability for core protocol types
  - KROK Team
    - [[Malleability A] ChannelList](https://github.com/onflow/flow-go/issues/6667)
    - [[Malleability A] BlockDigest](https://github.com/onflow/flow-go/issues/6665)
    - [[Malleability A] MissingCollection](https://github.com/onflow/flow-go/issues/6679)
    - [[Malleability A] EpochCommit](https://github.com/onflow/flow-go/issues/6671)

* <ins>Protocol - Other</ins>
  - Implementing the Epoch API change, per Protocol working group meeting
       
* <ins>Cryptography</ins>
  - PoP
    - Continue discussion with VL and driving Ledger
    - Resolve any remaining PR updates if needed for a quicker Ledger review
  - Passkeys
    - Finalize an FVM scope to support webauthn
    - Continue testing (RLP and e2e)
    - Continue writing FlIP
      
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

* Launch remaining coins using LayerZero, backed by Stargate
* Ensure integration of WETH, USDC into bridge.flow.com
* Launch Squid, 

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**

**This sprint**

* [FCL Ethereum Provider for Cross-VM Apps](https://github.com/onflow/fcl-js/issues/2053)

**On Hold**

- N/A

---

### Applications / Wallet [Jeff] 

**Cycle Objective(s):** 

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 2 per week on a 4-week rolling average.

KR 2: Ensure 100% integration test coverage of key user journeys for Flow Wallet extension, completed in order of business priority.


**Done last sprint**

**This sprint**

- Onboarded new iOS developer, Marty! 🎉
- Continue Flow Wallet extension refactor.
- Wallet: Fixed an issue with out Contract Call transaction script arguements, using UInt256 instead of UFix64.
- Wallet: Fixed compatibility issues with signing messages from Flow Reward store.
- Wallet: Fixes an issue with network switching displaying incorrect messaging to users.
- Wallet: Improved support for new token launches, including TRUMP token.
- Wallet: Fixed an issue with Google Drive backup impacting a small number of users.
- Wallet: Fixed an issue loading COA details on android
- Wallet: Resolved an issue where Flow Wallet extension failed to load copy for some users.

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
* 

**This sprint**
* Dorahack contract review & signing.
* Start contract review with Alchemy.

---
