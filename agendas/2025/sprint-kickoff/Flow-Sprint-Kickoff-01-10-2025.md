# Overview

 ### Team Wins 🎉
 
 * Axelar ITS and LayerZero cross-chain messaging protocols now live on Mainnet
 * PaypalUSD (PyUSD) live on mainnet
 * Backwards compatibility CI workflow using VN now [runs concurrently](https://github.com/onflow/flow-go/pull/6830)
 * Cadence compiler POC now [generates Go code for the instructions from a single specification file](https://github.com/onflow/cadence/pull/3716).
 * Migration testnet bootstrapped & running v0.38.0-rc.1, testing on the fly migration for [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
 * Dapperlabs (NBA and NFL) has switched to using QuickNode access nodes instead of the access nodes FF was hosting for them.

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

**Cadence Language**
- Cadence compiler:
    - [Document effects of instructions on value stack and control stack](https://github.com/onflow/cadence/pull/3719)
    - [Generate the code for the instructions](https://github.com/onflow/cadence/pull/3716)
- Bugfix (internal): [1](https://github.com/onflow/cadence-internal/pull/293), [2](https://github.com/onflow/atree-internal/pull/3), [3](https://github.com/onflow/cadence-internal/pull/291), [4](https://github.com/onflow/cadence-internal/pull/290), [5](https://github.com/onflow/cadence-internal/pull/287), [6](https://github.com/onflow/atree-internal/pull/2)

**Cadence Execution**
- Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
    - [enable storage format v2 for all but mainnet](https://github.com/onflow/flow-go/pull/6864)
- Validation backwards compatibility automation:
    - [[Util] add nWorker to verify execution result](https://github.com/onflow/flow-go/pull/6830)
    - [Use worker_count and bigger instance to run tests concurrently](https://github.com/onflow/ff-sre-automation/pull/10)
    - [Fix verify execution result](https://github.com/onflow/flow-go/pull/6804)
- [Use flow-go component model and node framework to compose the EVM Gatway and handle shutdown](https://github.com/onflow/flow-evm-gateway/pull/682)
    - [Expose node component management](https://github.com/onflow/flow-go/pull/6769)
- DB Access abstraction
    - [Extract uncurried functions from storage writes](https://github.com/onflow/flow-go/pull/6803)
- Tech-debt
    - [Metrics server as component](https://github.com/onflow/flow-go/pull/6801)


**EVM Gateway**
- Finializing dry-run feature & Gateway 1.0 release:
    - [Local state transaction re-execution](https://github.com/onflow/flow-evm-gateway/pull/712)
- Code hardening & Tech-debt removal:
    - [Remove obsolete config flags `stream-limit` & `stream-timeout`](https://github.com/onflow/flow-evm-gateway/pull/717)
    - [Unnecessary runtime flags are required in --index-only mode](https://github.com/onflow/flow-evm-gateway/issues/706)
    - [Apply rate-limit on tracing endpoints](https://github.com/onflow/flow-evm-gateway/pull/704)
- Bugfix: 
    - [Call tracer should return logs when the withLog config is enabled](https://github.com/onflow/flow-evm-gateway/issues/710)
    - [Investigate failure on debug_TraceBlockByNumber endpoint for fees transfer tx](https://github.com/onflow/flow-evm-gateway/issues/708)
    - [Skip account keys with different public key than the configured signer](https://github.com/onflow/flow-evm-gateway/pull/705)

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

  - [Finished and merged EFM Recovery integration test](https://github.com/onflow/flow-go/pull/6823)
  - [Finished and merged follow up updates for Recoverable Random Beacon State Machine](https://github.com/onflow/flow-go/pull/6815)
  - Work in progress on [DB migrations for flow.DKGEndState](https://github.com/onflow/flow-go/pull/6861)
  - [DKG result submission backward compatibility](https://github.com/onflow/flow-go/issues/6816)
  - Continue benchnet testing EFM recovery and [Protocol HCU](https://github.com/onflow/flow-go/issues/6849)
    - [Adding config options to BN2](https://github.com/onflow/flow-go-internal/pull/7028)

* <ins>Data Availability</ins>
  - KROK Team
    - WebSocket controller and data providers
      - [Add implementation for transaction status data providers](https://github.com/onflow/flow-go/issues/6586)
      - [Implement inactivity tracker](https://github.com/onflow/flow-go/issues/6799)
      - [Make response for data providers consistent with action responses](https://github.com/onflow/flow-go/issues/6819)
      - [Heartbeat interval not reset correctly in streaming endpoints](https://github.com/onflow/flow-go/issues/6837)
      - [Unify subscription and client IDs](https://github.com/onflow/flow-go/issues/6845)
      - Started [Add documentation for new websockets](https://github.com/onflow/flow-go/issues/6644) 
      - Started [Implement integration test for new websockets](https://github.com/onflow/flow-go/issues/6641)
    - Addressed PR feedback    

* <ins>Protocol - Malleability</ins>
  - KROK Team
    - Started [cluster.Block](https://github.com/onflow/flow-go/issues/6660)

* <ins>Cryptography</ins>

   - PoP
      - Stax failure: VL fixed the breaking change (which also adds support of the Flex device)
      - VL submitted a PR to Ledger to fix the issue
      - Fix ported to our repo and updated the PoP PR
      - Final submission is waiting for another Ledger repo update
  - Passkeys
      - Contniued brainstorming possible designs - documentation
      - Testing/validating potential breaking change in one design
  - Cadence: review of an OOO fix in a math operation (left shift)

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

- Axelar ITS hub was launched, now just waiting on Squid for token bridging
- LayerZero cross-chain messaging protocol went live on Mainnet, now waiting for Stargate for token bridging
- PaypalUSD (PyUSD) live on mainnet
- Bridging UI via SuperBridge now configured

**This sprint**

* Launch Squid and Stargate bridges

**On Hold**
- N/A


---

### **Developer Experience** \[Kan]

Cycle Objective(s): 
 - Improve Quality of Life, Level Up Dev Documentation and Learning Path, Supercharge EVMxCadence, Inspire and Excite Wave of New Flow Devs


**Done last sprint**

* [Exploration of EVM Gateway feature compatibility](https://github.com/onflow/flow-evm-bridge/issues/135)
* [Improvement of proposer key cycling example and documentation](https://github.com/onflow/dx-internal/issues/33)
* [Assist Wallet team with CI/CD and automated testing](https://github.com/onflow/dx-internal/issues/47)
* [Started work on Gold Star, a new doc site initiative](https://github.com/onflow/dx-internal/issues/41)
* [Lost & Found integration](https://github.com/onflow/flow-port/issues/366)


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

- Shipped storage improvements to iOS, Android, Extension: https://github.com/Outblock/FRW/issues/61
- Shipped network deposit alert on iOS, Android, Extension
- Shipped mixpanel support to Flow Wallet extension
- Shipped adding Dropbox to cloud multibackup option on Flow Wallet iOS, Android: https://github.com/Outblock/FRW/issues/66

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
- Identified disk snapshots for deletion
- Deleted unnecessary disk snapshots
- [Modify FF snapshot retention periods to 90 days](https://github.com/onflow/ff-sre-infrastructure/pull/92)
- [Modify DL snapshot retention periods](https://github.com/dapperlabs/dapper-flow-nodes-infrastructure/pull/36)

**Observability**
- [Reduce metric ingestion for DL nodes](https://github.com/onflow/dapper-flow-hosting/pull/1643)
- [Get Grafana resources into IAC & version control](https://github.com/onflow/ff-sre-infrastructure/pull/90) 

**Deployment Prep**
- Assist with configuration of migration testnet
- [Create migration mainnet infra](https://github.com/onflow/ff-sre-infrastructure/pull/91)
- [Fix IAM for Ansible host](https://github.com/onflow/ff-sre-infrastructure/pull/87)

**Key Management**
- [Fix permissions on key](https://github.com/dapperlabs/dl-dapper-flow-admin-infrastructure/pull/6)

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
* Shipyard contract review.

**This sprint**
* Helping T-systems migrate their node.
* Dorahack contract signing.
* Shipyard contract signing.

---
