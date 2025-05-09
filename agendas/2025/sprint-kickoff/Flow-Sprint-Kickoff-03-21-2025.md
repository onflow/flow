# Overview

 ### Team Wins 🎉
 * Successfully tested EFM recovery on testnet
 * Completed new TPS loader and run manual test, confirming no performance regression since pre-Crescendo (Sep 3rd).
 * Completed [Atree refactor to remove technical debt](https://github.com/onflow/atree/issues/464).
 * Complete work on Badger -> Pebble DB for [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516).
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
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| Total downtime in mins |           | 210        | 210       | 225       | 210          | 225    |               |
| YTD (03/20/25) SLA     |           | 99.81%     | 99.81%    | 99.80%    | 99.81%       | 99.80% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 99.96%       | 99.96% |               |

#### Incidents
- P0 and P1: None
- P2: Incident - Block rate fell to 1 block per second. Root cause: Incorrect networking setup on consensus nodes run by a partner.

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 9 |    7      |       0       |       8 (+1)       |        **25** (+1)      |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 3 (+1) |    1     |       2       |       2          |        **8** (+1)         |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **19** |    **50**   |       **14**       |       **16**         |        **101** (+1)        |

- Two new FLIPs
  - FLIP 321: Redundancy Improvement - update service account signers - `Drafted`
  - FLIP 318: VM Bridge Support for Cross-VM NFTs - `Accepted`

### Key Release Dates & Breaking Changes
* Rolling upgrade to `v0.39.0`
  - Mainnet:
     - FF nodes have been updated
     - Operator nodes will be updated by 3/31
     - Protocol upgrade - first week of April

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q1 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- [Compiler Milestone 3](https://github.com/onflow/cadence/issues/3769)
    - [Run existing interpreter tests with the compiler and VM](https://github.com/onflow/cadence/pull/3813)
    - [Optimize allocations and program components](https://github.com/onflow/cadence/pull/3808)
- Bugfixes : [1](https://github.com/onflow/cadence-internal/pull/319), [2](https://github.com/onflow/cadence-internal/pull/318), [3](https://github.com/onflow/cadence-internal/pull/317)

**Cadence Execution**
- [Migration of Badger to Pebble DB](https://github.com/onflow/flow-go/issues/6515)
    - Optimization: [Release Pebble batch resource to reduce memory use](https://github.com/onflow/flow-go/pull/7153)
    - [Use generic protocol db](https://github.com/onflow/flow-go/pull/7120)
    - [Migrate last executed block from badger to pebble](https://github.com/onflow/flow-go/pull/7117)
    - [Refactor collections storage](https://github.com/onflow/flow-go/pull/7059)
    - [Update pebble dir path](https://github.com/onflow/flow-go/pull/7141)
    - Util:
        - [Read storage stats - add key count and total value size for each prefix](https://github.com/onflow/flow-go/pull/7131)
        - [update util to read results from pebble](https://github.com/onflow/flow-go/pull/7092)
    - Bugfix: [InitBadgerAndPebble() not closing badger.DB on error](https://github.com/onflow/flow-go/pull/7125)
    - Testing: [Backport master non-breaking changes to `v0.39`](https://github.com/onflow/flow-go/pull/7142)
- Execution effort calibration - [Create a performance loader](https://github.com/onflow/flow-execution-effort-estimation/issues/9)
    - [testing with localnet](https://github.com/onflow/flow-execution-effort-estimation/pull/23)
    - [Reduce starting TPS spike when loading with a specific TPS](https://github.com/onflow/flow-execution-effort-estimation/issues/14)
    - [Better observability](https://github.com/onflow/flow-execution-effort-estimation/issues/20)
    - [Create more proposer keys at loader startup](https://github.com/onflow/flow-execution-effort-estimation/issues/17)
    - [Add documentation for running/using the TPS loader](https://github.com/onflow/flow-execution-effort-estimation/issues/12)
    - [Account provider should autodetect and use all account keys with the same public key](https://github.com/onflow/flow-execution-effort-estimation/issues/13)
    - [TPS loader with constant load](https://github.com/onflow/flow-execution-effort-estimation/pull/16)
- Improvement:
    - [Remove redundant call to saveExecutionResults](https://github.com/onflow/flow-go/pull/7118)
    - Atree: [Fix flakey smoke test](https://github.com/onflow/atree/issues/535)
- Bugfix:
    - CBOR: [https://github.com/fxamacker/cbor/pull/636](https://github.com/fxamacker/cbor/pull/636)

**This sprint**

- Cadence Language
  - Bugfix deployemnt
  - Continue work on the [Compiler Milestone 3](https://github.com/onflow/cadence/issues/3769)

- Cadence Execution
  - Continue new Trie research
  - Badger -> Pebble migration [Milestone 2](https://github.com/onflow/flow-go/issues/6515): [DB access refactoring for low-risk data on EN, VN and AN](https://github.com/onflow/flow-go/issues/6527)
  - Complete [Execution performance loader](https://github.com/onflow/flow-execution-effort-estimation/issues/9)
  - Complete performance deep-dive: analyze CPU profile produced on migration testnet with new TPS loader to identify new bottlenecks / opportunities for further optimizations.
  - Continue supporting upgrade of EVM core to "Pectra" release
  - Start work on [Execution effort calibration](https://github.com/onflow/flow-go/issues/5598) (depnds on the [TPS loader](https://github.com/onflow/flow-execution-effort-estimation/issues/9))

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
* EVM Gateway phase 2 (Pectra & Soft finality Prod) [IN PROGRESS]
* Support full spork history across HCU version boundaries (PoC) [BLOCKED]
* Faster transaction results to improve user experience [DONE]
* Add passkey support: Protocol design and scoping [DONE]
* Furthering permissionless participation
  1. Proof of Possession [DONE]
  2. KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**
* <ins>Data Availability</ins>
  - Published initial draft [FLIP 322: Optimistic Syncing of Execution Data](https://github.com/onflow/flips/pull/323)
  - KROK Team

    Done:
    - [[Access] Implement integration test for new websockets](https://github.com/onflow/flow-go/issues/6907)
    - [[Access] Add examples for ws conn usages](https://github.com/onflow/flow-go/issues/6643)
    - [[Access] The "tx_id" argument must be required when subscribing for "transaction_statuses" topic via WebSockets](https://github.com/onflow/flow-go/issues/7083)
    - [[Access] Investigate gorrilla ReadJSON return error on Close](https://github.com/onflow/flow-go/issues/7045)
    - [[Access] Empty error object in successful WebSocket subscription responce](https://github.com/onflow/flow-go/issues/7009)

    In Review:
    - [[Access] The TODO Context should be changed in WebSocket Handler](https://github.com/onflow/flow-go/issues/7109)
    - [[Access] Data providers should wrap context.Canceled error](https://github.com/onflow/flow-go/issues/7040)

    Started:
    - [Access] Started dive into WIP Optimistic Syncing document

* <ins>Malleability</ins>
  - KROK Team

    Done:
    - [[Malleability] Update mapBackData to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7073)
    - [[Malleability] Update BackData to use generic arguments instead of flow.Identifier and flow.Entity](https://github.com/onflow/flow-go/issues/7070)
    - [[Malleability] Update Backend to work with BackData](https://github.com/onflow/flow-go/issues/7072)
    - [[Malleability] Fix root interfaces implementations under stdmap package](https://github.com/onflow/flow-go/issues/7075)
    - [[Malleability] AssignmentDataPack](https://github.com/onflow/flow-go/issues/6664)
    - [[Malleability] Fix ID misuse in IdEntity type](https://github.com/onflow/flow-go/issues/6709)
    - [[Malleability] Fix ID misuse in IdMapEntity type](https://github.com/onflow/flow-go/issues/6711)
    - [[Malleability] Fix ID misuse of inMemChunkStatus type](https://github.com/onflow/flow-go/issues/6706)
    - [[Malleability] BlocksByCollection](https://github.com/onflow/flow-go/issues/6666)
    - [[Malleability] Fix ID misuse in TransactionTiming type](https://github.com/onflow/flow-go/issues/6700)
    - [[Malleability] Fix ID misuse in chunkRequestStatus type](https://github.com/onflow/flow-go/issues/6708)

    In Review:
    - [[Malleability] Update herocache to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7074)
    - [[Malleability] Follow up for fixing root interface implementations in the stdmap package](https://github.com/onflow/flow-go/issues/7166)
    - [[Malleability] ApprovalMapEntity](https://github.com/onflow/flow-go/issues/6662)
    - [[Malleability] Fix ID misuse in Queue type](https://github.com/onflow/flow-go/issues/6707)

    Started:
    - [[Malleability B] ResultApproval](https://github.com/onflow/flow-go/issues/6652)
    - [[Malleability] Fix ID misuse in ExecutableBlock type](https://github.com/onflow/flow-go/issues/6672)
    - [[Malleability] Fix remaining usages of the mempool/herocache structures that now rely on generics](https://github.com/onflow/flow-go/issues/7076)

  - [Finished implementation of malleability checker](https://github.com/onflow/flow-go/pull/7069)
  - [Kicking off discussion for broad code base change](https://github.com/onflow/flow-go/issues/7164)
  - Addressed malleability for core structures: [1](https://github.com/onflow/flow-go/pull/7150), [2](https://github.com/onflow/flow-go/pull/7130), [3](https://github.com/onflow/flow-go/pull/7129)
  - Refactoring block proposals as part of Header malleability
  - KROK PR reviews

* <ins>EFM and Protocol HCU</ins>
  - [EFM Recovery Runbook](https://www.notion.so/flowfoundation/Runbook-Epoch-Fallback-Mode-EFM-Recovery-1b41aee1232480609b0ee27df8483c69?pvs=4)

* <ins>EVM Gateway</ins>
  - Continue integration of Ethereum Pectra updates

* <ins>Cryptography</ins>
  - Webauthn/passkeys:
     - [Webauthn credential support FLIP submitted](https://github.com/onflow/flips/pull/320) and under community review
     - Added more tests (using browsers with regards to RP ID) and corresponding FLIP updates
  - Crypto package:
     - [Update internal dependency of Flow crypto](https://github.com/onflow/crypto/pull/21)
     - [Use Pippenger's multi-scalar multiplication](https://github.com/onflow/crypto/pull/23) for faster block proposal
  - SPoCK aggregation
     - Pick up research notes from last year

* <ins>Protocol misc</ins>
  - Mainnet consensus timeouts debugging & recovery incident
  - Mainnet Rolling Upgrade to v0.39
  - Started [Execution Stack Versioning in Protocol State](https://github.com/onflow/flow-go/issues/6999)

**This sprint**

* <ins>Data Availability</ins>
 - Address feedback from FLIP
 - Create initial issues for Optimistic syncing project
 - KROK Team:
   - Support KROK data availability PR reviews
   - Continue dive into WIP Optimistic Syncing document and start work on first tasks

* <ins>Malleability</ins>
 - KROK Team:
   - Support KROK malleability PR reviews
   - A big bunch of ID misuse tasks will be ready for review and potentially moved to done
   - [[Malleability B] ResultApproval](https://github.com/onflow/flow-go/issues/6652)
   - [[Malleability] Fix ID misuse in ExecutableBlock type](https://github.com/onflow/flow-go/issues/6672)
   - [Malleability] Fix remaining usages of the mempool/herocache structures that now rely on generics](https://github.com/onflow/flow-go/issues/7076)
 - Continue [Address ambiguity between identifier and hash of an entity](https://github.com/onflow/flow-go/issues/7164)
 - Continuing block proposal refactor
 - Continue KROK PR reviews


* <ins>EVM Gateway</ins>
  - Continue integration of Ethereum Pectra updates
  - Update Quicknode and Alchemy GW nodes to use interim soft-finality version

* <ins>Cryptography</ins>
  - Webauthn/passkeys:
    - more wallet team syncs
  - Protocol working group Passkeys FLIP presentation
  - Return to SPoCK aggregation

* <ins>Protocol misc</ins>
  - Mainnet Protocol State HCU upgrade (contingent to sufficient operators upgrading nodes)
  - Continue [Execution Stack Versioning in Protocol State](https://github.com/onflow/flow-go/issues/6999)

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
 - Iterated on DeFi vision and Cadence protocol ideas
 - Assess apprach for orphaned WFLOW liquidity recovery
 - More Market contract audit completed
 - Started onboarding for Defined.fi

**This sprint**
 - Continue DeFi vision product/tech discussions with Roham & Dete
 - Start development to migrate orphaned WFLOW liquidity
 - DeBridge (intent based cross-chain bridge) will go live on Mainnet Mar 25/26th

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**

- Completed KR 1: Cross-VM is live with demo video, docs, packages, and marketing. Coming out of alpha soon.
- Started work on KR 2: Flow React Hooks Library is now in progress.
- Completed KR 3: Experimental soft finality flag will go out in the next FCL release.

**This sprint**

- Finish coding the Flow React Hooks Library
- Start documentation for the Flow React Hooks Library

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Mar 21): 3.25/week

**Done last sprint**

- Supported NBA Top Shot launch on OpenSea by releasing NFT search across all platforms

**This sprint**

- Automatically support new token launches within the wallet - new verified/unverified token feature
- Support paying VM bridge fee during transaction
- Migration from SimpleHash to Moralis

- Extension:
  - Support 1 password across all profiles on Extension

- iOS/Android:
  - New token display format for small values
  - Support transferring tokens with up to their supported precision
  - UI Updates to NFT page

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**
  * Adjustments to loki driver settings on docker daemon config to mitigate log loss
  * Improvements to the docker daemon restart playbook to make it compatible to TN
  * Page redirection from `testnet-faucet.onflow.org` to `faucet.flow.com`
  * DNS changes to enable the switch of our status page to `status.flow.com`
  * [Changes to allow automation jobs to use all available resources on GCP instances](https://github.com/onflow/ff-sre-automation/pull/20)

**Observability**

**Deployment Prep**

**Key Management**

**This sprint**
  * Consolidate Terraform Network Modules into a Single Module
  * Migration of “Live” Networks to the New Module
  * Document and Automate New Tagging Strategy

**On Hold**
  * [Improve Synthetic Monitoring Coverage](https://github.com/onflow/ff-sre-infrastructure/issues/108)

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
* Contract review with Alchemy, Tibles, Hoodlums, Quicknode.

**This sprint**

* Contract signing with Alchemy.
* Contract review with Tibles, Quicknode.
* Flipside 5 SNs onboarding.
* BlockDaemon 5 SNs onboarding.

---
