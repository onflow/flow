# Overview

 ### Team Wins 🎉
 
 * Cadence compiler Blog post to communicate status & goals ready for publishing.
 * Programs cache invalidation fix deployed on mainnet, improving TPS 2x.
 * Completed [Document versioning mechanics for dynamic protocol state - Execution state parameters](https://www.notion.so/flowfoundation/Execution-State-Parameters-in-the-Dynamic-Protocol-State-18c1aee123248045939ee83864bf46a4)
 * https://stargate.finance, the primary cross-chain token bridge on LayerZero launched on EVM mainnet
 * https://bridge.flow.com also launched on mainnet
 * Deployed soft-finality EVM GW PoC to testnet
   
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
  * Monday, 10th Feb on Testnet
  * Thursday, 13th Feb on mainnet
  
  Branch `v0.38`

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**
- [Cadence compiler milestone 2](https://github.com/onflow/cadence/issues/3742)
    - [Generalize arithmetic instructions for all number values](https://github.com/onflow/cadence/pull/3761)
    - [Document stack effects of instructions in their description](https://github.com/onflow/cadence/pull/3759)
    - [Compile switch](https://github.com/onflow/cadence/pull/3757)
    - [Compile if-let](https://github.com/onflow/cadence/pull/3756)
    - [Improve compiler tests](https://github.com/onflow/cadence/pull/3755)
    - [ Improve default functions existence with conditions](https://github.com/onflow/cadence/pull/3754)
    - [Compile dictionary expressions, implement NewDictionary instruction](https://github.com/onflow/cadence/pull/3747)
    - [Fix operand order for SetField and SetIndex instructions, check resource invalidation](https://github.com/onflow/cadence/pull/3746)
    - [Improve VM stack operations](https://github.com/onflow/cadence/pull/3745)
    - [Sync with master](https://github.com/onflow/cadence/pull/3744)
    - [Support accessing `result` variable inside post conditions](https://github.com/onflow/cadence/pull/3741)
    - [Support inherited functions and conditions through delegation](https://github.com/onflow/cadence/pull/3734)
- CCF
    - [Update ccf_specs.md to draft of 1.0.0](https://github.com/fxamacker/ccf_draft/pull/101)
- Bugfix
    - [Port internal fixes](https://github.com/onflow/cadence/pull/3740)
- Tooling fixes/improvements
    - Update tool
        - chore: [Update config of update tool](https://github.com/onflow/cadence/pull/3753)
        - [Handle command failures in update tool](https://github.com/onflow/cadence/pull/3749)
- Updating dependencies: [1](https://github.com/onflow/flixkit-go/pull/90), [2](https://github.com/onflow/cadence-tools/pull/453), [3](https://github.com/onflow/flowkit/pull/82), [4](https://github.com/onflow/cadence-tools/pull/452), [5](https://github.com/onflow/flow-emulator/pull/786), [6](https://github.com/onflow/cadence-tools/pull/451), [7](https://github.com/onflow/flow-go/pull/6956), [8](https://github.com/onflow/flow-go-sdk/pull/803)
- Automation
    - [Fix backward compatibility job](https://github.com/onflow/cadence/pull/3750)
- Docs
    - [Machine readable syntax specification for compiler frontend generation](https://github.com/onflow/cadence/issues/3686)

**Cadence Execution**
- Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
    - [Add default fvm context to the epoch counter script ](https://github.com/onflow/flow-go/pull/6971)
    - Testing
        - [Enable storage format v2 on mainnet](https://github.com/onflow/flow-go/pull/6988)
    - Util
        - [Add support for account format v2 in util `check-storage`](https://github.com/onflow/flow-go/pull/6977)
        - [Add stats about account format versions to util's checkpoint-collect-stats command](https://github.com/onflow/flow-go/pull/6882)
- Migration of Badger to Pebble DB
    - Execution data
      - [Refactor Approvals to batch updates](https://github.com/onflow/flow-go/pull/6868)
    - Chunk data pack
        - [Add pruning functions](https://github.com/onflow/flow-go/pull/6919)
        - [Add Iterator Creator](https://github.com/onflow/flow-go/pull/6890)
        - [Add Block Iterator](https://github.com/onflow/flow-go/pull/6858)
- Tech-debt removal:
    - [Remove last remnants of Cadence 1.0 and authorization fixes migrations](https://github.com/onflow/flow-go/pull/6987)
    - Atree [Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
        - [Use helper functions to compute array sizes in tests](https://github.com/onflow/atree/pull/500)
        - [Avoid using unexported `mutableValueNotifier` in tests](https://github.com/onflow/atree/pull/499)
        - [Rename vars to reduce confusion (sizes vs counts)](https://github.com/onflow/atree/pull/498)
        - [Avoid using MapDataSlab & MapMetaDataSlab in tests](https://github.com/onflow/atree/pull/497)
        - [Avoid using MapDataSlab & MapMetaDataSlab in tests](https://github.com/onflow/atree/pull/496)
        - [Avoid creating ArrayMetaDataSlab directly in tests](https://github.com/onflow/atree/pull/495)
        - [Avoid creating ArrayDataSlab directly in tests](https://github.com/onflow/atree/pull/490)
        - [Avoid using unexported `OrderedMap` fields in tests](https://github.com/onflow/atree/pull/489)
        - [Avoid using unexported `Array` fields in tests](https://github.com/onflow/atree/pull/488)
        - [Avoid using unexported constants in tests](https://github.com/onflow/atree/pull/485)
        - [Avoid using unexported `SlabID` fields in tests](https://github.com/onflow/atree/pull/484)
        - [Export PersistentSlabStorage funcs in export_test.go](https://github.com/onflow/atree/pull/481)
        - [Use NewDefaultDigesterBuilder() in tests](https://github.com/onflow/atree/pull/480)
        - [Replace SlabID{...} with NewSlabID() in tests](https://github.com/onflow/atree/pull/479)
        - [Rename and export `SlabIDLength` and related constants](https://github.com/onflow/atree/pull/478)
        - [Remove old test files](https://github.com/onflow/atree/pull/475)
- Tooling
    - Remote debugger
        - [Refactor the remote debugger and add support for using the execution data API](https://github.com/onflow/flow-go/pull/6929)
- Automation improvements/fixes
    - [Extract the checkpoint from last sealed and executed](https://github.com/onflow/ff-sre-automation/pull/16)
    - Backward compatibility workflow
        - [add stop-on-mismatch flag for backward compatibilities test](https://github.com/onflow/ff-sre-automation/pull/15)
        - [Add flag to backward compatibilities testing tool to continue verify when mismatching is found](https://github.com/onflow/flow-go/pull/6954)
- Test environment (migration testmet/mainnet)
    - [Migration to add keys to service accounts for testing](https://github.com/onflow/flow-go/pull/6969)

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

* <ins>EFM and Protocol HCU</ins>
  - Finished and merged several issues for EFM: https://github.com/onflow/flow-go/pull/6936, https://github.com/onflow/flow-go/pull/6935,

* <ins>Malleability</ins>
  - KROK Team
  - Done:
    - [[Malleability A] RoleList](https://github.com/onflow/flow-go/issues/6686)
    - [[Malleability A] ChannelList](https://github.com/onflow/flow-go/issues/6667)
    - [[Malleability A] MissingCollection](https://github.com/onflow/flow-go/issues/6679)
    - [[Malleability A] BlockDigest](https://github.com/onflow/flow-go/issues/6665)
  - In Review:
    - [[Malleability A] EpochStateContainer](https://github.com/onflow/flow-go/issues/6695)
    - [[Malleability A] pendingBlock](https://github.com/onflow/flow-go/issues/6661)
    - [[Malleability A] EventIDs](https://github.com/onflow/flow-go/issues/6698)
    - [[Malleability A] IdentifierList](https://github.com/onflow/flow-go/issues/6674)
    - [[Malleability A] GenericIdentityList ](https://github.com/onflow/flow-go/issues/6699)
    - [[Malleability A] Locator](https://github.com/onflow/flow-go/issues/6677)
    - [[Malleability A] MinEpochStateEntry](https://github.com/onflow/flow-go/issues/6678)
    - [[Malleability A] EpochCommit](https://github.com/onflow/flow-go/issues/6671)
  - Analysis and [design proposal for updating mempool package](https://github.com/onflow/flow-go/issues/6703)
  - Started generalizing approach for testing malleability

* <ins>Data Availability</ins>
  - KROK Team
    In Progress:
      - [Backport tx error messages PRs to v0.33 branch](https://github.com/onflow/flow-go/issues/6613)
    In Review/Fixed remarks:
      - [Refactoring to support subscribing to transaction statuses on existing transactions by txID] issues [#6573](https://github.com/onflow/flow-go/issues/6573), [#6767](https://github.com/onflow/flow-go/issues/6767)
      - [Test Tx Result storage and backfill](https://github.com/onflow/flow-go/issues/6945)
      - [Implement integration test for new websockets](https://github.com/onflow/flow-go/issues/6641)

* <ins>EVM Gateway</ins>
  - Deployed soft-finality GW PoC to testnet
  - [Increase computation limit for Cadence tx](https://github.com/onflow/flow-evm-gateway/pull/736)
  - [Update replayer logic to validate txs with new error message format](https://github.com/onflow/flow-go/issues/6951)
  - [Fix metrics startup/shutdown](https://github.com/onflow/flow-evm-gateway/pull/741)
  - [Update cadence/flow-go/flow-go-sdk/flow-emulator dependencies](https://github.com/onflow/flow-evm-gateway/pull/738)
  - [Add metric to count iterations taken for `eth_estimateGas`](https://github.com/onflow/flow-evm-gateway/pull/725)
  - [Trigger OnLog tracing hook for transactions with logs](https://github.com/onflow/flow-go/issues/6842)
  - Tech-debt removal:
      - [Remove buffer gas applied in EVM.dryRun](https://github.com/onflow/flow-go/issues/6843)
      
* <ins>Other</ins>
  - Completed majority of work for the [Epoch interface refactor](https://github.com/onflow/flow-go/issues/6191) ([#6941](https://github.com/onflow/flow-go/pull/6941), [#6965](https://github.com/onflow/flow-go/pull/6965), [#6974](https://github.com/onflow/flow-go/pull/6974), [#6985](https://github.com/onflow/flow-go/pull/6985))
  - Last iterations over the Protocol Autonomy Roadmap document to get it ready for publication
  - Continued Trie research: discussed ideas about the storage backend

* <ins>Cryptography</ins>
  - PoP
    - Reworked Ledger PR to limit the changes to PoP only (by reverting the latest non-PoP core-contract updates)
    - New core-contract branch to track Ledger scripts
    - PR reviewed and approved by Ledger
    - Flow Port release is to integrate the new Ledger release to address nanoS deprecation issue (ongoing)
  - Passkeys
    - Completed project scoping and agreed on design proposal
    - Ongoing vaidation:
      - Preparing a Go client to generate webauthn signatures 
    - Continued writing FlIP

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
- Stargate.finance launched!
- bridge.flow.com launched!
- Started onboarding Diamond Block (AMM)
- Band protocol oracle on Cadence now supports 54 symbols (cryptocurrencies and fiat price pairs)

**This sprint**
 * Launch Squid, possibly

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**

* [FCL Ethereum Provider for Cross-VM Apps](https://github.com/onflow/fcl-js/issues/2053)
  * Finished a majority of the issues for the FCL Ethereum Provider
  * Started building the RainbowKit and Wagmi adapters

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

- Onboarded new iOS developer, Marty! 🎉
  
- Wallet: Released version 2.7 of Flow Wallet extension (release notes: https://github.com/onflow/FRW-Extension/releases/tag/2.7.0)
  - Includes major stability improvements, resolving customer problems such as improved UI reliability, performance improvements, and transaction handling.

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
* Dorahack contract signed.
* T-systems node staked and operational.

**This sprint**

* Start contract review with Alchemy.
* Work with Dorahacks to onboard 4 new SN nodes.

---
