# Overview

 ### Team Wins 🎉

 * First public app identified building with the newly released `@onflow/kit` library.

 * Closed - [Badger -> Pebble DB M2 - DB access refactoring for low-risk data (AN, EN, VN)](https://github.com/onflow/flow-go/issues/6527)
 * New TPS loader now runs automatically & [metrics are pushed to FF grafana](https://flowfoundation.grafana.net/goto/5zvXQvbNg?orgId=1).
 * added custom [linter](https://github.com/onflow/flow-go/issues/7271) to enforce conceptually immutable structs in `flow-go` are not modified
 * BN2 now supports private cadence builds as well as running existing images

---

### Mainnet Uptime - Last 14 days (04/18/25 to 05/02/25) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |      0%         |
| Block Finalization      | 99.9%   |    100%       |      0%         |
| Transaction Execution   | 99.9%   |    100%       |      0%      |
| Block Sealing           | 99.9%   |    100%       |      0%       |
| Access API Liveness     | 99.9%   |    100%       |      0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification  | Total  | Comments      |
| ---------------------- | --------- | ---------- | --------- | --------- | ------------ | ------ | ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| Total downtime in mins |           | 210        | 210       | 230       | 210          | 230    |               |
| YTD (5/2/25) SLA       |           | 99.86%     | 99.86%    | 99.85%    | 99.86%       | 99.85% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 99.96%       | 99.96% |               |

### Incidents

### Integrations
- Metamask had a change that required changes to our EVM GW gas price. We are working with their team to ensure that the gas prices is properly calculated.

### Mainnet
- P0 and P1: None

### Testnet
- P0


---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8 |    7      |       0       |       9          |        **24**       |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 3  |    1     |       2       |       2          |        **8**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       9         |       6          |        **53**          |
| Total       | **19** |    **50**   |       **16**       |       **17**         |        **102**         |

- Three new FLIPS
  1. FLIP 322: Optimistic Syncing of Execution Data (added last sprint)
  2. FLIP 321: Redundancy Improvement - update service account signers
  3. FLIP 326: Redundancy Improvement - update service account signers (part 2)

### Key Release Dates & Breaking Changes
n/A

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- Cadence <> Storage - breaking change (Not affecting devs on Flow)
    - [Remove register reads related to account storage format V1](https://github.com/onflow/cadence/issues/3815)
- [Compiler milestone 4 - FVM integration & execution of book-keeping functions](https://github.com/onflow/cadence/issues/3856)
    - [[Compiler] Fix argument compilation: transfer to parameter type, not argument type](https://github.com/onflow/cadence/pull/3918)
    - [[Compiler] Unify emission of event value and event fields, enable event emission in VM environment](https://github.com/onflow/cadence/pull/3916)
    - [[Compiler] Skip events compilation](https://github.com/onflow/cadence/pull/3915)
    - [[Compiler] Improve and fix event emission](https://github.com/onflow/cadence/pull/3914)
    - [[Compiler] Add support for resource fields in VM environment](https://github.com/onflow/cadence/pull/3913)
    - [[Compiler] Configure account handler in VM environment](https://github.com/onflow/cadence/pull/3912)
    - [[Compiler] Implement saturating arithmetic functions in VM](https://github.com/onflow/cadence/pull/3911)
    - [[Compiler] Fix contract value use inside of contract](https://github.com/onflow/cadence/pull/3910)
    - [[Compiler] Various improvements/fixes](https://github.com/onflow/cadence/pull/3909)
    - [[Compiler] Fix function invocation](https://github.com/onflow/cadence/pull/3908)
    - [[Compiler] Add dictionary built-in functions](https://github.com/onflow/cadence/pull/3907)
    - [[Compiler] Sync compiler branch with master](https://github.com/onflow/cadence/pull/3904)
    - [[Compiler] Refactor qualified name generation](https://github.com/onflow/cadence/pull/3898)
    - [[Compiler] Derive the function type from the receiver for bound-function values](https://github.com/onflow/cadence/pull/3897)
    - [[Compiler] Invoke contract function externally](https://github.com/onflow/cadence/pull/3895)
    - [[Compiler] Implement Compiler/VM-based environment, enable for contract invocations](https://github.com/onflow/cadence/pull/3894)
    - [[Compiler] Sync compiler feature branch with master](https://github.com/onflow/cadence/pull/3893)
    - [[Compiler] Merge master](https://github.com/onflow/cadence/pull/3887)
    - [[Compiler] Support use of member-functions as function-pointers](https://github.com/onflow/cadence/pull/3886)
    - [[Compiler] Separate methods from fields for `SimpleCompositeValue`](https://github.com/onflow/cadence/pull/3890)
    - [[Compiler] Fix inherited conditions compilation](https://github.com/onflow/cadence/pull/3884)
    - [[Compiler] Optimize transfers](https://github.com/onflow/cadence/pull/3879)
    - [Port changes to the `interpreter` package from the `feature/compiler` branch](https://github.com/onflow/cadence/pull/3892) 
    - FVM Integration
        - [Decouple NewEnumCaseValue from interpreter](https://github.com/onflow/cadence/pull/3900)
        - [Refactor runtime package](https://github.com/onflow/cadence/pull/3888)
        - [Decouple runtime code from interpreter](https://github.com/onflow/cadence/pull/3885)
        - [Refactor interpreter environment – Part 2](https://github.com/onflow/cadence/pull/3883)
        - [Refactor interpreter environment](https://github.com/onflow/cadence/pull/3882)
- Minor improvements / chores
    - [Improve generation / tool usage](https://github.com/onflow/cadence/pull/3905)
    - [Fix version of parser NPM package](https://github.com/onflow/cadence/pull/3902)
- Testing
    - [Test interface function with conditions](https://github.com/onflow/cadence/pull/3889)
- Dependency updates:
    - [Update to Cadence v1.4.0](https://github.com/onflow/flow-go-sdk/pull/843)
    - [Update dependency for golang.org/x/tools](https://github.com/onflow/cadence/pull/3899)
    - [Update to Cadence v1.4.0](https://github.com/onflow/flow-go/pull/7353)

**Cadence Execution**
- Tech-debt removal:
    - [Refactor to rename blocklist to disallowlist for consistency](https://github.com/onflow/flow-go/pull/7363)
    - [Remove account storage format v2 migration](https://github.com/onflow/flow-go/pull/7344)
- [Badger -> Pebble DB M2 - DB access refactoring for low-risk data (AN, EN, VN)](https://github.com/onflow/flow-go/issues/6527)
    - [[Access] Add support for multi-store reading of events, lightTransactionResults, etc. (BadgerDB & Pebble)](https://github.com/onflow/flow-go/pull/7335)
    - [[Access] Add support for multi-store reading of collections & transactions in Access Nodes](https://github.com/onflow/flow-go/pull/7321)
    - [[Storage] Add database multiReader, multiIterator, multiSeeker (BadgerDB, Pebble)](https://github.com/onflow/flow-go/pull/7320)
- [Migration of Badger to Pebble DB](https://github.com/onflow/flow-go/issues/6515)
    - [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
        - [[Storage] Support NodeDisallowList for db migration](https://github.com/onflow/flow-go/pull/7361)
    - Improvements:
        - [[Storage] Update DB.Reader() API to not return error](https://github.com/onflow/flow-go/pull/7354)
        - [[Storage] Remove unneeded lock in storage Callbacks and document it isn't safe for concurrent use](https://github.com/onflow/flow-go/pull/7352)
        - [Remove database dependency from consensus builder](https://github.com/onflow/flow-go/pull/7347)
        - [[Storage] Add db Seeker for up to ~50x speedup & ~18x less memory seeking key in range (BadgerDB, Pebble)](https://github.com/onflow/flow-go/pull/7255)
    - Bugfixes:
        - [[Storage] Fix deadlock in batch writes](https://github.com/onflow/flow-go/pull/7341)
        - [[Storage] Fix batch remove in ServiceEvents to use the correct batch (BadgerDB, Pebble)](https://github.com/onflow/flow-go/pull/7323)
        - [Add a Close() to Batch interface and use it to prevent memory leak (BadgerDB & Pebble)](https://github.com/onflow/flow-go/issues/7258)
- TPS loader
    - [PID parameter tweaks](https://github.com/onflow/flow-execution-effort-estimation/pull/31)
- Improvement
    - [Improve remote debugger](https://github.com/onflow/flow-go/pull/7001)
- Dependency updates:
    - [Bump `onflow/go-ethereum` dependency to `v1.15.9`](https://github.com/onflow/flow-go/pull/7241)
- CBOR
    - [Update docs for TimeMode, Tag, RawTag, and add example for Embedded JSON Tag for CBOR](https://github.com/fxamacker/cbor/pull/659)

**EVM**
[Add some E2E tests for `debug_*` endpoints with unset tracer](https://github.com/onflow/flow-evm-gateway/pull/808)
[Sync with Geth version `v1.15.8`](https://github.com/onflow/go-ethereum/pull/22)
[Sync with Geth version `v1.15.9`](https://github.com/onflow/go-ethereum/pull/23)

**This sprint**

- Cadence Language
  - Investigate bug report
  - Continue work on the [Compiler Milestone 4](https://github.com/onflow/cadence/issues/3856)

- Cadence Execution
  - Continue new Trie research
  - Continue work on [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
  - Continue supporting upgrade of EVM core to "Pectra" release
  - Start [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

**On Hold**
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Alex]
Cycle Objective(s):

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* EVM Gateway integrate Pectra upgrade [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Furthering permissionless participation
  2. KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  * Supported KROK with PR reviews
  * Finished draft of Optimistic Sync Milestone 2 design
  * Started work on new ingestion engine and Results Forest
  * KROK Team
    
    Done:
    - [[DataAvailability] Create in-memory Registers storage implementation](https://github.com/onflow/flow-go/issues/7186)

    In Review:
    - [[DataAvailability] Implement Persister interface](https://github.com/onflow/flow-go/issues/7198)
    - [[DataAvailability] Implement processing pipeline state machine](https://github.com/onflow/flow-go/issues/7201)
    - [[DataAvailability] Implement Download step logic](https://github.com/onflow/flow-go/issues/7202)
    - [[DataAvailability] Create a module that downloads tx result error messages](https://github.com/onflow/flow-go/issues/7356)

    In Progress:
    - [[DataAvailability] Implement Index step logic](https://github.com/onflow/flow-go/issues/7203)

* <ins>Malleability</ins>
  - added custom [linter](https://github.com/onflow/flow-go/issues/7271) to enforce conceptually immutable structs in `flow-go` are not modified
  - exploring merge strategies (:point_right: [notion](https://www.notion.so/flowfoundation/Malleability-master-Merging-strategy-1e51aee12324800fb80aceba59cf4f2c?pvs=4) writeup)
  - collision-resistant hashing for 
    - [CollectionGuarantee](https://github.com/onflow/flow-go/pull/7248) (completed)
    - [cluster.Block](https://github.com/onflow/flow-go/issues/6660) (PR in review)
    - [flow.Block](https://github.com/onflow/flow-go/issues/6716) (implementation ongoing)
  - simplified [heropool](https://github.com/onflow/flow-go/pull/7342) (in areas where it previously violated immutability)  

* <ins>Cryptography</ins>
  - SPoCK aggregation (ongoing)
  - Crypto package: audit and merge go1.24 changes.
  - Review, update and refine `FlowVRF` developer documentation 
    support marketing to write a new blog post

* <ins>Supporting Badger to Pebble</ins>
  - reviewing PR for Pebble version of Consensus Follower (ongoing)
  - change Header's `Timestamp` to unambiguous representation (remove time zone)


**This sprint**

* <ins>Data Availability</ins>
  * Continue work on ingestion engine and Results Forest
  * KROK Team
    - [[DataAvailability] Implement Persist step logic](https://github.com/onflow/flow-go/issues/7204)
    - Continue to work on _Optimistic Syncing_ related issues from epic [[DataAvailability] Fork Aware Execution Data processing](https://github.com/onflow/flow-go/issues/6900). Will continue with "In Progress" tasks and PRs in review.

* <ins>Malleability</ins>
  - Support KROK malleability PR reviews
  - Continue on collision-resistant hashing for [flow.Block](https://github.com/onflow/flow-go/issues/6716)
  - enforcing immutability of hashable data structures :point_right: [[Epic]](https://github.com/onflow/flow-go/issues/7269)
    - `MissingCollection`
    - `Vote`
    - `IncorporatedResult`

* <ins>Cryptography</ins>
  - SPoCK aggregation

* <ins>Protocol misc</ins>
  - reviewing PR for Pebble version of Consensus Follower (ongoing) 
  - Integrate `lock context` library as PoC for atomic read-write operations on Pebble (once Pebble version of Follower is complete)

**On Hold**

**Active Epics**
* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] EVM Gateway Pectra upgrade](https://github.com/onflow/flow-go/issues/7152)
* [[EPIC] Access Node supports soft-finality updates](https://github.com/onflow/flow-go/issues/6646)

---

### **DeFi** \[ ~~Jerome~~ :]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**

**This sprint**

**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

**Done last sprint**

- Improved TypeScript support in the JS SDK
- Identified cross-VM hooks for `@onflow/kit`
- Created randomness React hook for `@onflow/kit`
- Built the `Connect` component for `@onflow/kit`
- Added chain ID hook to `@onflow/kit`
- Enhanced the FCL spec with a new security feature for account proofs

**This sprint**

- Automating FCL/JS SDK API documentation with TypeScript/JSDoc
- Migrating the cross-VM batch transaction hook from the scaffold to `@onflow/kit`
- Adding a theming system for components in `@onflow/kit`
- Building a profile component for `@onflow/kit`
- Building a transaction component for `@onflow/kit`

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (Apr 21): 1.25/week

**Done last sprint**

**This sprint**

- Automatically support new token launches faster within the wallet -> new verified/unverified token feature
- Resolving a number of known issues with Flow Wallet Extension:
  - Switching to testnet
  - Switching accounts during app authn
  - Signing complex data

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Support**
- [Delete unnecessary Access Node Transaction Result alert](https://github.com/onflow/ff-sre-infrastructure/issues/319)
- [Clean up CDPs on DL ENs to reclaim disk space](https://github.com/onflow/ff-sre-infrastructure/issues/318)
- [Fix deletion of PVCs on BN2](https://github.com/onflow/ff-sre-infrastructure/issues/311)
- [Change Ansible Playbook to support --check execution flag](https://github.com/onflow/ff-sre-infrastructure/issues/316)
- [Enable prometheus data source from TPS automation](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=105597591&issue=onflow%7Cff-sre-infrastructure%7C254)

**Private Image Builds**
- [Grant service accounts access to the private registry](https://github.com/onflow/ff-sre-infrastructure/issues/306)
- [Create GitHub Action Workflow for promoting docker images](https://github.com/onflow/ff-sre-infrastructure/issues/227)
- [Update Build workflow to use GitHub App](https://github.com/onflow/ff-sre-infrastructure/issues/309)
- [Update BN2 to use private registry for building & running images](https://github.com/onflow/ff-sre-infrastructure/issues/231)
- [Push recent images to private registry](https://github.com/onflow/ff-sre-infrastructure/issues/268)
- [Document how to leverage BN2 build flexibility](https://github.com/onflow/ff-sre-infrastructure/issues/317)
- [Delete existing build workflows](https://github.com/onflow/ff-sre-infrastructure/issues/310)
- [Update Ansible configuration to support private registry](https://github.com/onflow/ff-sre-infrastructure/issues/305)
- [Update the terraform module for networks to support pulling private images](https://github.com/onflow/ff-sre-infrastructure/issues/230)
- [Update Devnet to support pulling private images](https://github.com/onflow/ff-sre-infrastructure/issues/228)

**Grafana Alloy**
- [Create Ansible Playbook for Enabling/Disabling Profiling](https://github.com/onflow/ff-sre-infrastructure/issues/103)

**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Cost Optimization & Reduction](https://github.com/onflow/ff-sre-infrastructure/issues/235)
* [Support Private Image Builds](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=104950609&issue=onflow%7Cff-sre-infrastructure%7C225)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**


**This sprint**

  * Vishal OOO

---
