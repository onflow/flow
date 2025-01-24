# Overview

 ### Team Wins 🎉
 
 * Successful Testnet upgrade, seeing ~4x TPs increase after the programs cacheinvalidation fix
 * Latest Ledger repo update was merged and then ported to our PoP work, and PR submitted to Ledger
 * Axelar cross-chain message (ITS) launced on Flow EVM finally.Still need Squid to launch to bridge tokens
 * bridge.flow.com operational (currently privately on VPN IP only until launch)
 * pyUSD lockers deployed on Solana and Ethereum, and USDF operational on Flow

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
  * Jan 24th (today) on Testnet ✔️
  * Jan 27th, Monday on mainnet

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**
- Internal fixes: [1](https://github.com/onflow/cadence-internal/pull/300), [2](https://github.com/onflow/cadence-internal/pull/299), [3](https://github.com/onflow/cadence-internal/pull/298), [4](https://github.com/onflow/cadence-internal/pull/297), [5](https://github.com/onflow/atree-internal/pull/7), [6](https://github.com/onflow/atree-internal/pull/6), [7](https://github.com/onflow/cadence-internal/pull/295), [8](https://github.com/onflow/atree-internal/pull/4), [9](https://github.com/onflow/cadence-internal/pull/294), [10](https://github.com/onflow/cadence-internal/pull/292)
- Compiler
    - Testing: [Adjust parameters to reduce run-time when race detector is enabled](https://github.com/onflow/cadence/pull/3732)
    - [Compiler feature branch update](https://github.com/onflow/cadence/pull/3730)
- Automation
    - [Backwards compatibilit check fix - Update get-contracts tool to use new find.xyz API](https://github.com/onflow/cadence/pull/3725)

**Cadence Execution**
- [Programs cache invalidation fix](https://github.com/onflow/flow-go/issues/6507)
    - [Move execution parameter to separate account ](https://github.com/onflow/flow-go/pull/6891)
    - [Get execution version from snapshot instead of state](https://github.com/onflow/flow-go/pull/6867)
- Migration of Badger to Pebble DB
    - Execution data
        - [Refactor UpdateHighestExecutedBlockIfHigher with UpdateLatestExecutedBlock](https://github.com/onflow/flow-go/issues/6908)
    - Chunk data pack
        - [Refactor Chunk data packs modules to use generic storage interface](https://github.com/onflow/flow-go/pull/6892)
        - [add a test case to verify compaction can reclaim disk space](https://github.com/onflow/flow-go/pull/6603)
- Improvements
    - [Update to Cadence v1.3.0](https://github.com/onflow/flow-go/pull/6779)
    - Protocol state data access (Badger DB): [Combine the caches for last finalized and last sealed block](https://github.com/onflow/flow-go/pull/6915)
- Tooling
    - [Add util command to debug transaction](https://github.com/onflow/flow-go/pull/6923)
    - [Uril - Backport v0.37 add query last executed sealed block](https://github.com/onflow/flow-go/pull/6920)
- Automation - Backwards compatibility check
    - Improvement [Log the progress of backward compatibility tests](https://github.com/onflow/flow-go/pull/6834)
    - [add from-to height range](https://github.com/onflow/ff-sre-automation/pull/12)

**EVM Gateway**
- Improvement
    - [Include human-friendly error messages on EVM transaction events](https://github.com/onflow/flow-go/pull/6836)
    - [Support blockOverrides optional argument for eth_call JSON-RPC endpoint](https://github.com/onflow/flow-evm-gateway/issues/685)
- tech-debt
    - [Remove relic `TraceDownloadFailed` metric](https://github.com/onflow/flow-evm-gateway/pull/724)
    - [Decommission the traces generation & GCP upload](https://github.com/onflow/flow-go/issues/6840)

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

* <ins>EFM and Protocol HCU</ins>
  - [Completed Benchnet testing of the upgrade process](https://github.com/onflow/flow-go/issues/6849)
  - [Fixed encoding backward-compatibility](https://github.com/onflow/flow-go/pull/6879) 
  - [DKG migration bug fix](https://github.com/onflow/flow-go/pull/6898)
  - [HotStuff race](https://github.com/onflow/flow-go/pull/6921)
  - [Benchnet testing of EFM recovery and related fixes](https://github.com/onflow/flow-go/issues/5945)

* <ins>Data Availability</ins>
  - KROK Team
    - WebSocket controller and data providers
      - [Add arguments getter for data providers](https://github.com/onflow/flow-go/issues/6865)
      - Refactoring of transaction subscription to simplify logic and cover functionality with more tests(issues [#6573](https://github.com/onflow/flow-go/issues/6573), [#6767](https://github.com/onflow/flow-go/issues/6767))
      - [Implement integration test for new websockets](https://github.com/onflow/flow-go/issues/6641)
      - [Add documentation for new websockets](https://github.com/onflow/flow-go/issues/6644) (In Progress)
      - [Add examples for ws conn usages](https://github.com/onflow/flow-go/issues/6643) (In Progress)
      - [Tests for WebSockets connection limits](https://github.com/onflow/flow-go/issues/6876)
    - Support transaction soft finality in the Access Node 
      - Reviewed code in exiting PR [Improve user experience by enabling dApps to utilize transaction soft finality](https://github.com/onflow/flow-go/issues/5424)
    - Other
      - [Backport tx error messages PRs to v0.37 branch](https://github.com/onflow/flow-go/issues/6614)

* <ins>Protocol - Malleability</ins>
  - KROK Team
    - [[Malleability A] Remove unused entities: IncorporatedResultMap, ReceiptDataPack, ResultDataPack](https://github.com/onflow/flow-go/issues/6701)
    - [[Malleability A] EpochSetup](https://github.com/onflow/flow-go/issues/6694)
    - [[Malleability A] EpochRecover](https://github.com/onflow/flow-go/issues/6697)

    Checked, but blocked by `herocache`:
    - [AssignmentDataPack](https://github.com/onflow/flow-go/issues/6664)
    - [appSpecificScoreRecordEntity](https://github.com/onflow/flow-go/issues/6663)
    - [BlocksByCollection](https://github.com/onflow/flow-go/issues/6666)
    - [ApprovalMapEntity](https://github.com/onflow/flow-go/issues/6662)
    - [rpcSentEntity](https://github.com/onflow/flow-go/issues/6687)

* <ins>Protocol - Other</ins>
  - Addressing tech debt and refactoring: [#6850](https://github.com/onflow/flow-go/issues/6850), [#6871](https://github.com/onflow/flow-go/issues/6871), [#6916](https://github.com/onflow/flow-go/issues/6687)
  - Writing design document for Epoch API change

* <ins>Cryptography</ins>
   - PoP
      - Latest Ledger repo update was merged and then ported to our PoP work
      - [Prepared and submitted PoP changes](https://github.com/onflow/ledger-app-flow/pull/110) for review
      - Pushed VaccumLabs help to ping Ledger about a review
  - Passkeys
      - Socs and options consolidate in Notion (non-public yet)
      * Continued brianstorming and solution specifics
      * Started writing FLIP for Protocol passkey change 
      - Continued testing and validation:
        - RLP new field behaviour (breaking-change related)
        - RLP malleability possibility
        - Looking at webauthn clients to implement e2e tests

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

- Axelar launced on Flow EVM finally
- Started onboarding of Stork oracle to EVM
- Finish up Deployment of pyUSD locker on Solana
- Reploy USDF contract on Flow according to a few new requirements
 
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

* [Continue work on Gold Star](https://github.com/onflow/dx-internal/issues/41)
* Created docs components for the Developer Education team's homepage refresh

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
* Dorhack contract review.
* T-system lease account setup.
  - T-system has unstaked their Execution node. Node will be restaked next-to-next epoch.

**This sprint**
* Dorahack contract review & signing.
* Start contract review with Alchemy.

---
