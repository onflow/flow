# Overview

 ### Team Wins 🎉
 * DeBridge (intent based cross-chain bridge) went live on 3/31
 * [CCF 1.0 spec released](https://github.com/onflow/ccf/releases/tag/v1.0.0)
 * Completed [Execution performance loader](https://github.com/onflow/flow-execution-effort-estimation/issues/9)
 * Chunk data-pack pruning enabled on Mainnet EN
 * Protocol upgrade on mainnet with zero-downtime completed
 * Epoch Fallback Mode recovery mechanism is enabled on mainnet

---

### Mainnet Uptime - Last 14 days (03/21/25 to 04/03/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |      0%         |
| Block Finalization      | 99.9%   |    100%       |      0%         |
| Transaction Execution   | 99.9%   |    100%       |      0%         |
| Block Sealing           | 99.9%   |    100%       |      0%         |
| Access API Liveness     | 99.9%   |    100%       |      0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification  | Total  | Comments      |
| ---------------------- | --------- | ---------- | --------- | --------- | ------------ | ------ | ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| Total downtime in mins |           | 210        | 210       | 225       | 210          | 225    |               |
| YTD (03/20/25) SLA     |           | 99.84%     | 99.84%    | 99.83%    | 99.84%       | 99.83% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 100%       | 99.96% |               |

#### Incidents
- P0 and P1: None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 9 |    7      |       0       |       8        |        **25**       |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 3  |    1     |       2       |       2          |        **8**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **19** |    **50**   |       **14**       |       **16**         |        **101**         |

- No change this sprint.

### Key Release Dates & Breaking Changes
* HCU
   - Tesnet: Wednesday, 9th April
   - Mainnet: Thursday, 10th April

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- [Compiler Milestone 3](https://github.com/onflow/cadence/issues/3769)
    - [Sync `feature/compiler` branch with the updated master branch](https://github.com/onflow/cadence/pull/3837)
    - [Port non- compiler/vm changes from `feature/compiler` branch](https://github.com/onflow/cadence/pull/3836)
    - [Add stdlib functions for `Account.Capabilities` and `Account.StorageCapabilities`](https://github.com/onflow/cadence/pull/3832)
    - [Add remaining `Account.Storage` stdlib functions to the VM](https://github.com/onflow/cadence/pull/3831)
    - [Add type construction and conversion standard-library functions](https://github.com/onflow/cadence/pull/3829)
    - [Refactor type casting/conversions and re-use in both interpreter and VM](https://github.com/onflow/cadence/issues/3770)
    - [Sync with master](https://github.com/onflow/cadence/pull/3820)
    - [Make existing interpreter values reusable in VM](https://github.com/onflow/cadence/issues/3693)
        - [Re-use interpreter's account related stdlibs in vm](https://github.com/onflow/cadence/pull/3827)
        - [Decouple `interpreter.Invocation` from the `Interpreter` instance](https://github.com/onflow/cadence/pull/3826)
        - [Re-use interpreter.Value in the VM](https://github.com/onflow/cadence/pull/3825)
        - [Decouple `ValueIndexableValue` interface from the interpreter](https://github.com/onflow/cadence/pull/3824)
        - [Decouple `GetMember` and `SetMember` methods of `interpreter.Value` from the interpreter](https://github.com/onflow/cadence/pull/3822)
        - [Decouple `Value.MeteredString` method from the interpreter](https://github.com/onflow/cadence/pull/3821)
        - [Decouple `value.Transfer` method from the interpreter](https://github.com/onflow/cadence/pull/3819)
        - [Refactor `vm.Value` and related operations to be independent of the `vm.Config`](https://github.com/onflow/cadence/pull/3817)
    - [Conditional returns compilation](https://github.com/onflow/cadence/issues/3772)
    - Testing
        - [Fix FT test in vm](https://github.com/onflow/cadence/pull/3830)
- internal bugfix: [1](https://github.com/onflow/cadence-internal/pull/328), [2](https://github.com/onflow/cadence-internal/pull/324), [3](https://github.com/onflow/cadence-internal/pull/323), [4](https://github.com/onflow/cadence-internal/pull/320), [5](https://github.com/onflow/cadence-internal/pull/316)

**Cadence Execution**
- dependency for execution effort Calibration: [TPS loader](Create a performance loader)
    - [Add metrics and fix duration flag](https://github.com/onflow/flow-execution-effort-estimation/pull/29)
    - [Fix expiry and add convinience for running on other networks besides localnet](https://github.com/onflow/flow-execution-effort-estimation/pull/24)
- [CCF 1.0 spec release](https://github.com/onflow/flow-go/issues/6764)
    - [Clarify a security consideration and link to Section 1.2 of RFC 8949](https://github.com/fxamacker/ccf_draft/pull/104)
    - [Improve text for CCF Specification 1.0.0](https://github.com/fxamacker/ccf_draft/pull/103)
    - [Sync with onflow/ccf unmerged PR 7 commit 6703acb](https://github.com/fxamacker/ccf_draft/pull/102)
    - [Update to CCF Specification 1.0](https://github.com/onflow/ccf/pull/7)
- CBOR
    - Performance improvement: [Optimize internal calls to UnmarshalCBOR() for ByteString, RawTag, and SimpleValue](https://github.com/fxamacker/cbor/issues/646)
    - bugfix: [Port updated error handling in RawTag.UnmarshalCBOR(), etc. to match cbor.Unmarshal()](https://github.com/fxamacker/cbor/pull/645)
    - [Sync feature/stream-mode branch with v2.7.0](https://github.com/fxamacker/cbor/pull/640)
- Docs
    - [Update docs for cbor v2.8.0](https://github.com/fxamacker/cbor/pull/649)
- Bugfix
    - profiler crashing EN: [disable block profiler](https://github.com/onflow/flow-go/pull/7215)

**This sprint**

- Cadence Language
  - Bugfix deployemnt
  - Continue work on the [Compiler Milestone 3](https://github.com/onflow/cadence/issues/3769)

- Cadence Execution
  - Continue new Trie research
  - Badger -> Pebble migration [Milestone 2](https://github.com/onflow/flow-go/issues/6515): [DB access refactoring for low-risk data on EN, VN and AN](https://github.com/onflow/flow-go/issues/6527)
  - Complete performance deep-dive: analyze CPU profile produced on migration testnet * Mainnet with new TPS loader to identify new bottlenecks / opportunities for further optimizations.
    - Investigate slowness with approvals enabled
  - Continue supporting upgrade of EVM core to "Pectra" release
  - Start [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)

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
  - KROK Team

    Done:
    - [[Access] The TODO Context should be changed in WebSocket Handler](https://github.com/onflow/flow-go/issues/7109)
    - [[Access] Data providers should wrap context.Canceled error](https://github.com/onflow/flow-go/issues/7040)
    - [[Access] Move data providers models to data provider package](https://github.com/onflow/flow-go/issues/7039)
    - [[Access] Change max subscription error code](https://github.com/onflow/flow-go/issues/7177)
    - [[Access] Implement integration test for new websockets](https://github.com/onflow/flow-go/issues/6907)

    In Review:
    - [[DataAvailability] Create in-memory Transactions storage implementation](https://github.com/onflow/flow-go/issues/7188)
    - [[DataAvailability] Create in-memory LightTransactionResults storage implementation](https://github.com/onflow/flow-go/issues/7184)
    - [[DataAvailability] Create in-memory TransactionResultErrorMessages storage implementation](https://github.com/onflow/flow-go/issues/7185)
    - [[DataAvailability] Create in-memory Events storage implementation](https://github.com/onflow/flow-go/issues/7183)
    - [[DataAvailability] Create in-memory Registers storage implementation](https://github.com/onflow/flow-go/issues/7186)
    - [[DataAvailability] Create in-memory Collections storage implementation](https://github.com/onflow/flow-go/issues/7187)

    In Progress:
    - [[DataAvailability] Implement Persister interface](https://github.com/onflow/flow-go/issues/7198)
    - [[DataAvailability] Implement processing pipeline state machine](https://github.com/onflow/flow-go/issues/7201)

* <ins>Malleability</ins>
  - Working on [proposal for updating flow.Entity interface](https://github.com/onflow/flow-go/issues/7164)
  - Continued work on [Header malleability changes](https://github.com/onflow/flow-go/issues/6656)
  - [Execution Receipt](https://github.com/onflow/flow-go/issues/6653)
  - [Extended malleability checker](https://github.com/onflow/flow-go/pull/7237)
  - Completed first PR review for Chunk
  - Support KROK PR reviews
  - KROK Team

    Done:
    - [[Malleability] appSpecificScoreRecordEntity](https://github.com/onflow/flow-go/issues/6663)
    - [[Malleability] Fix ID misuse in chunkRequestStatus type](https://github.com/onflow/flow-go/issues/6708)
    - [[Malleability] rpcSentEntity](https://github.com/onflow/flow-go/issues/6687)
    - [[Malleability] Fix ID misuse in receiveCacheEntry type](https://github.com/onflow/flow-go/issues/6685)
    - [[Malleability] Fix ID misuse in ipEntity type](https://github.com/onflow/flow-go/issues/6710)
    - [[Malleability] Fix ID misuse in txtEntity type](https://github.com/onflow/flow-go/issues/6714)
    - [[Malleability] Fix ID misuse in UnicastConfigEntity type](https://github.com/onflow/flow-go/issues/6691)
    - [[Malleability] Fix ID misuse in duplicateMessagesCounterEntity type](https://github.com/onflow/flow-go/issues/6670)
    - [[Malleability] Fix ID misuse in gossipsubSpamRecordEntity type](https://github.com/onflow/flow-go/issues/6673)
    - [[Malleability] Fix misuse in WrappedEntity type](https://github.com/onflow/flow-go/issues/6693)
    - [[Malleability] Fix ID misuse in disallowListCacheEntity type](https://github.com/onflow/flow-go/issues/6669)
    - [[Malleability] Fix ID misuse in ProtocolSpamRecordEntity type](https://github.com/onflow/flow-go/issues/6683)
    - [[Malleability] BlockExecutionDataEntity](https://github.com/onflow/flow-go/issues/6657)
    - [[Malleability] Fix ID misuse in MessageEntity type](https://github.com/onflow/flow-go/issues/6712)
    - [[Malleability] Fix ID misuse in ClusterPrefixedMessagesReceivedRecord type](https://github.com/onflow/flow-go/issues/6668)
    - [[Malleability] Fix ID misuse in SubscriptionRecordEntity type](https://github.com/onflow/flow-go/issues/6713)
    - [[Malleability B] ResultApproval](https://github.com/onflow/flow-go/issues/6652)
    - [[Malleability] Fix ID misuse in ExecutableBlock type](https://github.com/onflow/flow-go/issues/6672)
    - [[Malleability] Fix remaining usages of the mempool/herocache structures that now rely on generics](https://github.com/onflow/flow-go/issues/7076)
    - [[Malleability] Update herocache to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7074)
    - [[Malleability] Fix ID misuse in Queue type](https://github.com/onflow/flow-go/issues/6707)
    - [[Malleability] ApprovalMapEntity](https://github.com/onflow/flow-go/issues/6662)
    - [[Malleability] Follow up for fixing root interface implementations in the stdmap package](https://github.com/onflow/flow-go/issues/7166)
    - [[Malleability] Fix ID misuse in IncorporatedResultSeal type](https://github.com/onflow/flow-go/issues/6705)
    - [[Malleability] MockEntity](https://github.com/onflow/flow-go/issues/6680)
    - [[Malleability] Fix ID implementation of IncorporatedResult type](https://github.com/onflow/flow-go/issues/6675)
    - [[Malleability B] Chunk](https://github.com/onflow/flow-go/issues/6659)  
    
    In Review:
    - [[Malleability C] ChunkDataPack](https://github.com/onflow/flow-go/issues/6720)

    In Progress:
    - [[Malleability C] CollectionGuarantee](https://github.com/onflow/flow-go/issues/6722)
    - [[Malleability A] TimeoutObject](https://github.com/onflow/flow-go/issues/6690)

* <ins>EFM and Protocol HCU</ins>
  
* <ins>EVM Gateway</ins>
  - Continue integration of Ethereum Pectra updates

* <ins>Cryptography</ins>
  - Webauthn/passkeys:
    - FLIP presented at the protocol WG - new discussion with Janez
    - Added new tests to confirm backward compatibility and check RLP edge case
    - Added new FLIP details about serializing the new signature format
  - Crypto package:
    - Integrate a breaking change in an internal dependency (fixes an issue when building in Go1.24)
    - New version tagged and imported in Flow repos
    - Started a proper Go1.24 integration (requires some refactoring)
  - SPoCK aggregation
    - Focus on zk extractor and simulator in the KOSK case

* <ins>Protocol misc</ins>
  - Mainnet Protocol State Version Upgrade
  - [Noisy logs audit](https://github.com/onflow/flow-go/pull/7174)
    
**This sprint**

* <ins>Data Availability</ins>
  - General release of websockets 

* <ins>Malleability</ins>
  - Support KROK malleability PR reviews
  - Continue Malleability tasks
  - KROK Team:
    - Finish active tasks, pick up few tasks that are left for malleability, review implementation

* <ins>EVM Gateway</ins>
  - Start merging Ethereum Pectra updates

* <ins>Cryptography</ins>
  - Finalize the crypto 1.24 integration
  - SPoCK aggregation

**On Hold**

**Active Epics**
* [[EPIC] Malleability A](https://github.com/onflow/flow-go/issues/6649)
* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] Malleability: Herocache](https://github.com/onflow/flow-go/issues/6646)
* [[EPIC] EVM Gateway Phase 2](https://github.com/onflow/flow-evm-gateway/issues/700)
* [[EPIC] Access Node supports soft-finality updates](https://github.com/onflow/flow-go/issues/6646)

---

### **DeFi** \[Jerome]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**
 - DeBridge (intent based cross-chain bridge) went live on 3/31
 - Resolved product scope for first priority DeFi component, Cadence smart vault

**This sprint**
 - Prepare first draft design/PoC interfaces for Cadence smart vault
 - Complete WFLOW liquidity migration

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**


**This sprint**

- Finish coding the Flow React Hooks Library
- Start documentation for the Flow React Hooks Library

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Apr 4): 4.25/week

**Done last sprint**

- Migration from SimpleHash to Moralis

Extension:
  - Support 1 password across all profiles on Extension

**This sprint**

- Automatically support new token launches within the wallet - new verified/unverified token feature
- Support paying VM bridge fee during transaction

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

**Automation**
* [Fix skipping genesis upload during sporks & migration network deployments](https://github.com/onflow/ff-sre-infrastructure/issues/217) 

**Node Hosting**
* [Upgrade MN AN disk sizes](https://github.com/onflow/ff-sre-infrastructure/pull/212)

**Cost Optimization**
* [Identify & Resolve Increase in Log Query Costs](https://github.com/onflow/ff-sre-infrastructure/issues/236)
* [Create documentation for reviewing log query usage](https://github.com/onflow/ff-sre-infrastructure/issues/214)

**Terraform Module Consolidation**
* [Add release workflow](https://github.com/onflow/ff-terraform-modules/pull/2)

**Flow Wallet**
* [Renew cert for Flow Wallet OpenAPI service](https://github.com/onflow/ff-sre-infrastructure/issues/241)
* [Update billing accounts for Flow Wallet GCP Projects](https://github.com/onflow/ff-sre-infrastructure/issues/242)

**This sprint**

**Cost Optimization**
* [Deprecate Canary Network](https://github.com/onflow/ff-sre-infrastructure/issues/218)
* [Create standard for creating & destroying migration networks](https://github.com/onflow/ff-sre-infrastructure/issues/239)

**Docker Logging Resliience**
* [Update DL Nodes with non-blocking docker driver](https://github.com/onflow/ff-sre-infrastructure/issues/238)
* [Evaluate & design solution to address limitations of docker logging driver](https://github.com/onflow/ff-sre-infrastructure/issues/240)

**Private Image Builds**
* [Update the terraform module for the migration networks to support pulling private images](https://github.com/onflow/ff-sre-infrastructure/issues/230)
* [Create GitHub Action Workflow for promoting docker images](https://github.com/onflow/ff-sre-infrastructure/issues/227)
* [Update Devnet to support pulling private images](https://github.com/onflow/ff-sre-infrastructure/issues/228)

**Terraform Module Consolidation**
* [Consolidate Terraform Network Modules into a Single Module ](https://github.com/onflow/ff-sre-infrastructure/issues/98)
* [Migrate “Live” Networks to the New Module](https://github.com/onflow/ff-sre-infrastructure/issues/99)
* [Create Strategy for Tagging Terraform Modules](https://github.com/onflow/ff-sre-infrastructure/issues/95)
* [Resolve Conflict from consolidated signle module](https://github.com/onflow/ff-sre-infrastructure/issues/234)

**Flow Wallet Migration**
* [Create new repo for managing wallet infrastructure](https://github.com/onflow/ff-sre-infrastructure/issues/223)
* [Document Terraform infra repo creation for Atlantis integration](https://github.com/onflow/ff-sre-infrastructure/issues/224)
* [Craete Wallet DNS records on flow subdomains](https://github.com/onflow/ff-sre-infrastructure/issues/222)

**Observability**
* [Re-align manual changes in Grafana with Terraform](https://github.com/onflow/ff-sre-infrastructure/issues/216)

**Active Epics**
* [Cost Optimization & Reduction](https://github.com/onflow/ff-sre-infrastructure/issues/235)
* [Docker Logging Resilience](https://github.com/onflow/ff-sre-infrastructure/issues/237)
* [Terraform Module Consolidation](https://github.com/onflow/ff-sre-infrastructure/issues/94)
* [Support Private Image Builds](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=104950609&issue=onflow%7Cff-sre-infrastructure%7C225)

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
  * Contract signing with Alchemy.
  * Contract review with Tibles, Quicknode.
  * Flipside 5 SNs onboarding.
  * BlockDaemon 5 SNs onboarding
    
**This sprint**
  * BlockDaemon 10 SNs onboarding.
  * Alchemy node onboarding.
  * QuickNode Contract review and signing.

---
