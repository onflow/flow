# Overview

 ### Team Wins 🎉

* EN on Testnet now runs with rpotocol data migrated from Badger to Pebble.
* Cadence compiler + VM successfully runs on migration testnet, executing fee deduction and account balance check functions.

---

### Mainnet Uptime - Last 14 days (05/16/25 to 05/30/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
|------------------------|-----------|-----------|----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |           |          | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180       | 180      | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30        | 30       | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |           |          | 5         |              | 5      |               |
| Total downtime in mins |           | 210       | 210      | 240       | 210          | 240    |               |
| YTD (5/29/25) SLA      |           | 99.9%     | 99.9%    | 99.89%    | 99.9%        | 99.89% |               |
| SLA for 2025           |           | 99.96%    | 99.96%   | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

### Testnet

1. P0: 23rd May, Friday - 6AM Pacific to 10AM Pacific
  Transaction execution stopped. Execution nodes went OOM due to a Cadence edge case when parsing a transaction.

### Mainnet
N/A

### Key Release Dates & Breaking Changes

1. HCU to rollout the change to re-introduce the ability to read account storage format v1.
- Testnet June 2nd, Monday 8AM Pacific.
- Mainnet June 3rd, Tuesday 8AM Pacific.

2. Proof of Possession rollout
- Testnet June 2nd, Monday.
- Mainnet June 3rd, Tuesday.

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

* No change

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- [Compiler Milestone 5: All interpreter tests for existing functionality](https://github.com/onflow/cadence/issues/3922)
    - [[Compiler] Improve invocation of external functions and transactions](https://github.com/onflow/cadence/pull/3947)
    - [[Compiler] Include location range for panicked errors in vm](https://github.com/onflow/cadence/pull/3946)
    - [[Compiler] Enable arithmetic and bitwise tests to run with compiler/VM](https://github.com/onflow/cadence/pull/3948)
    - [[Compiler] Enable more interpreter tests to be run with the compiler / VM](https://github.com/onflow/cadence/pull/3949)
    - [[Compiler] Make the location-range field settable in all interpreter errors](https://github.com/onflow/cadence/pull/3950)
    - [[Compiler] Run more tests with compiler/vm](https://github.com/onflow/cadence/pull/3953)
    - [[Compiler] Run `resources-test` with the compiler](https://github.com/onflow/cadence/pull/3938)
    - [[Compiler] Improve imports compilation for transitive dependencies](https://github.com/onflow/cadence/pull/3957)
    - [[Compiler] Remove dependency to `interpreter.Config` from VM](https://github.com/onflow/cadence/pull/3964)
- [Compiler Milestone 6: More features and tech debt](https://github.com/onflow/cadence/issues/3976)
    - [Refactor string value parsers and big-endian bytes converters to be reusable in compiler/VM](https://github.com/onflow/cadence/pull/3977)
    - [[Compiler] Implement `Number` types' methods and static functions ](https://github.com/onflow/cadence/pull/3982)
    - [[Compiler] Implement built-in methods and functions for `Address`](https://github.com/onflow/cadence/pull/3983)
    - [[Compiler] Support optional chaining in compiler](https://github.com/onflow/cadence/pull/3984)
- Compiler optimization: [[Compiler] Add compiled programs to programs cache](https://github.com/onflow/cadence/issues/3954)
    - [[Compiler] Cache compiled programs](https://github.com/onflow/cadence/pull/3956)
- Compiler tech-debt:
    - [Remove unreachable test cases](https://github.com/onflow/cadence/pull/3969)
- [Revert removal of Account format v1](https://github.com/onflow/cadence/issues/3963)
    - [Revert "Remove register reads related to account storage format V1"](https://github.com/onflow/cadence/pull/3962)
    - [[v1.4] Revert "Remove register reads related to account storage format V1"](https://github.com/onflow/cadence/pull/3967)
    - [[v1.4] Revert "Remove support for account storage format V1"](https://github.com/onflow/cadence/pull/3973)
    - [[v1.4] Always enable storage format V2, remove migration code](https://github.com/onflow/cadence/pull/3975)
    - [Revert removal of storage format v1 support](https://github.com/onflow/cadence/pull/3980)
- Improvement:
    - [Prompt for reporting unhelpful error messages and contributing to improvements](https://github.com/onflow/cadence/issues/3711)
    - Make parser more robust: [Ensure unbounded loops in parser eventually make progress](https://github.com/onflow/cadence/pull/3974)
- Chores:
    - [Fix release action](https://github.com/onflow/cadence/pull/3961)
    - [[Compiler] Sync feature branch with master](https://github.com/onflow/cadence/pull/3960)
    - [[v1.4] Port v1.4.1-rc.2](https://github.com/onflow/cadence/pull/3966)
    - [Port 1.4.1 to master](https://github.com/onflow/cadence/pull/3968)
    - [[v1.4] Fix version](https://github.com/onflow/cadence/pull/3970)
    - [Port non-compiler/VM changes from feature branch to master](https://github.com/onflow/cadence/pull/3951)
    - [[Compiler] Sync feature branch with master](https://github.com/onflow/cadence/pull/3952)
    - [Port non-compiler/VM changes from feature branch to master ](https://github.com/onflow/cadence/pull/3958)
- Bugfix:
    - [Improve value visitor: Only call checked visitor](https://github.com/onflow/cadence/pull/3955)
- Internal fixes: [1](https://github.com/onflow/cadence-internal/pull/335), [2](https://github.com/onflow/cadence-internal/pull/336), [3](https://github.com/onflow/cadence-internal/pull/332), [4](https://github.com/onflow/cadence-internal/pull/337)
- Docs:
    - [Add UInt and Int to values-and-types.](https://github.com/onflow/cadence-lang.org/pull/207)
    - [Add documentation for string templates.](https://github.com/onflow/cadence-lang.org/pull/212)

**Cadence Execution**

- Improvements:
    - Performance:
        - [[Storage] Optimize memory cache key creation and key format for some stores](https://github.com/onflow/flow-go/pull/7391)
        - [[Storage] Optimize iterating and seeking with BadgerDB](https://github.com/onflow/flow-go/pull/7432)
    - [Fix multiple versions of msgpack being used](https://github.com/onflow/flow-go/pull/7399)
    - [[Storage] Support Execution Fork Evidence for new databases (BadgerDB & Pebble)](https://github.com/onflow/flow-go/pull/7388)
- Bugfixes:
    - [[Storage] Fix Writer.Set() & Writer.Delete() args not being safe to modify (BadgerDB)](https://github.com/onflow/flow-go/pull/7400)
    - [[Storage] Fix memory caches getting out of sync with databases (BadgerDB and Pebble)](https://github.com/onflow/flow-go/pull/7324)
- Chores:
    - [Update to Cadence v1.4.1](https://github.com/onflow/flow-go/pull/7434)
    - [[Backport] update master to Cadence v1.4.1](https://github.com/onflow/flow-go/pull/7440)
    - [Update to Cadence v1.5.1](https://github.com/onflow/flow-go/pull/7442)
    - [[Backport] updating Pectra upgrade timestamps](https://github.com/onflow/flow-go/pull/7450)
    - [Update to Cadence v1.6.0](https://github.com/onflow/flow-go/pull/7446)
- CBOR:
    - [Update README for Embedded JSON Tag for CBOR (tag 262)](https://github.com/fxamacker/cbor/pull/662)
    - [Refactor to use reflect package functions](https://github.com/fxamacker/cbor/pull/663)



**This sprint**

- Cadence Language
  - Continue Compiler Milestones [5](https://github.com/onflow/cadence/issues/3922) & [6](https://github.com/onflow/cadence/issues/3976).
  - Complete [automation of storage iteration](https://github.com/onflow/cadence/issues/2688).
  - Start work on [Cadence Fuzzer automation](https://github.com/onflow/cadence/issues/3985).

- Cadence Execution
  - Continue new Trie research
  - Continue work on [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
  - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
  - Continue [EOA control delegation](https://github.com/onflow/flow-go/issues/7441)

**On Hold**
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]
Cycle Objective(s):

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* EVM Gateway integrate Pectra upgrade [DONE]
* Address data structure malleability risk [IN PROGRESS]
* Furthering permissionless participation
  * KR1: Proof of Possession [IN PROGRESS]
  * KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  * Operational work around version compatibility issues on mainnet
  * Fixes for HCU compatibility ([1](https://github.com/onflow/flow-go/pull/7421), [2](https://github.com/onflow/flow-go/pull/7420), [3](https://github.com/onflow/flow-go/pull/7424), [4](https://github.com/onflow/flow-go/pull/7444), [5](https://github.com/onflow/flow-go/pull/7425), [6](https://github.com/onflow/flow-go/pull/7445))
  * Fix service event indexing ([PR-7426](https://github.com/onflow/flow-go/pull/7426))
  * KROK Team
    * Redesigned ExecutionDataRequester ([PR-7329](https://github.com/onflow/flow-go/pull/7329))
    * Implement interface for persisting caches ([PR-7394](https://github.com/onflow/flow-go/pull/7394))

* <ins>Malleability</ins>
  * PR reviews
  * KROK Team
    * Done:
      -   [\[Malleability C\] flow.Block](https://github.com/onflow/flow-go/issues/6660)
    * In Review (fixing comments):
      -   [\[Malleability Immutable\] Enforce immutability for EpochRecover](https://github.com/onflow/flow-go/issues/7285)
      -   [\[Malleability Immutable\] Enforce immutability for EpochSetup](https://github.com/onflow/flow-go/issues/7284)
      -   [\[Malleability Immutable\] Enforce immutability for EpochCommit](https://github.com/onflow/flow-go/issues/7286)
      -   [\[Malleability Immutable\] Enforce immutability for MinEpochStateEntry](https://github.com/onflow/flow-go/issues/7293)
      -   [\[Malleability Immutable\] Enforce immutability for EpochStateEntry](https://github.com/onflow/flow-go/issues/7295)
      -   [\[Malleability Immutable\] Enforce immutability for RichEpochStateEntry](https://github.com/onflow/flow-go/issues/7296)
      -   [\[Malleability Immutable\] Enforce immutability for Locator](https://github.com/onflow/flow-go/issues/7276)
      -   [\[Malleability Immutable\] Enforce immutability for EpochProtocolStateAdapter](https://github.com/onflow/flow-go/issues/7307)
      -   [\[Malleability Immutable\] Enforce immutability for EpochStateContainer](https://github.com/onflow/flow-go/issues/7294)
      -   [\[Malleability Immutable\] Enforce immutability for ComputationResult](https://github.com/onflow/flow-go/issues/7274)
      -   [\[Malleability Immutable\] Enforce immutability for TimeoutCertificate](https://github.com/onflow/flow-go/issues/7302)
      -   [\[Malleability Immutable\] Enforce immutability for TimeoutObject](https://github.com/onflow/flow-go/issues/7272)
      -   [\[Malleability Immutable\] Enforce immutability for ChunkDataPackRequest](https://github.com/onflow/flow-go/issues/7305)
      -   [\[Malleability Immutable\] Enforce immutability for ChunkDataPackResponse](https://github.com/onflow/flow-go/issues/7306)
      -   [Malleability Immutable] Enforce immutability for ResultApproval]
      -   [Malleability Immutable] Enforce immutability for ResultApprovalBody]
      -   [Malleability Immutable] Enforce immutability for Attestation]
      -   [Malleability Immutable] Enforce immutability for QuorumCertificate]
      -   [Malleability Immutable] Enforce immutability for CollectionGuarantee]
      -   [Malleability Immutable] Enforce immutability for Collection]
      -   [Malleability Immutable] Enforce immutability for Chunk]
      -   [Malleability Immutable] Enforce immutability for ChunkDataPack]
      -   [Malleability Immutable] Enforce immutability for ExecutionResult]
    * In Progress:
      -   [\[Malleability Immutable\] Enforce immutability for Event](https://github.com/onflow/flow-go/issues/7287)


* <ins>Cryptography</ins>
  - Proof of Possession: prepare for updating the staking process:
    - update and review of the bootstrapping utility (review still ongoing)
    - update and merge the core-contracts changes
    - docs and announcements
  - SPoCK aggregation: finished analysing the PoP-based security proof in Boneh-Drijvers-Neven 2018 and Ristenpart 2006 (BLS multi-signatures)
  - Passkeys: continue the implementation review and adding suggestions

**This sprint**

* <ins>Data Availability</ins>
  - Continue work on results forest
  - Complete writeups for Optimistic Sync Milestone 2 issues
  - KROK Team
    - Complete work on new [Indexer](https://github.com/onflow/flow-go/issues/7203), [Persister](https://github.com/onflow/flow-go/issues/7204) and [Downloader](https://github.com/onflow/flow-go/issues/7356) implementations (in review)
    - Complete work on integrating statemachine steps into Core module ([Issue-7374](https://github.com/onflow/flow-go/issues/7374))
    - Start work on state machine functional tests ([Issue-7379](http://github.com/onflow/flow-go/issues/7379))
    - Start work on refactoring collection ingestion ([Issue-7443](https://github.com/onflow/flow-go/issues/7443))

* <ins>Malleability</ins>
  * PR reviews
  * Compatibility testing and preparation for partial merge of malleability branch [PR 7447](https://github.com/onflow/flow-go/issues/7447)
  * KROK Team
    - Continue working on Malleability Immutable tasks and on review remarks from previous sprint.
    - [Malleability Immutable] Enforce immutability for Header]
    - [Malleability Immutable] Enforce immutability for TransactionBody]
    - [Malleability Immutable] Enforce immutability for Transaction]


* <ins>Cryptography</ins>
  - Proof of Possession: merge all PRs and core-contract updates on TN/MN
  - SPoCK next steps: sketch a PoP-based proof of (simple) SPoCK unforgeabilty - sketch a KOSK-based proof of multi-SPoCK
  - Passkeys: continue review and implementation


* <ins>Protocol misc</ins>

**On Hold**

**Active Epics**

* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] Access Node supports soft-finality updates](https://github.com/onflow/flow-go/issues/6646)

---

### **DeFi** \[Kan]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

**This sprint**

**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

**Done Last Sprint**

- Added the `TransactionLink` component to `@onflow/kit`
- Built and released the `useCrossVmBatchTransaction` hook for `@onflow/kit`
- Built and released the `useCrossVmTokenBalance` hook for `@onflow/kit`
- Released FCL streaming support
- Fixed various bugs identified during the hackathon
- Set up CI for automated documentation generation
- Converted FCL core exposed APIs to TypeScript
- Attended a conference and supported Flow builders during the hackathon

**This Sprint**

- Convert exposed APIs in non-core FCL subpackages to TypeScript
- Build a profile feature in the `Connect` component for `@onflow/kit`
- Build the `TransactionStatusDialog` component for `@onflow/kit`
- Add a cross-VM FT spend hook to `@onflow/kit`
- Add a cross-VM NFT spend hook to `@onflow/kit`
- Add an NFT hook to `@onflow/kit`
- Add a child accounts hook to `@onflow/kit`
- Add documentation for the newly released hooks

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (Apr 21): 1.25/week

**Done last sprint**

**This sprint**



**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Support**
- [Fix BN2 operational components](https://github.com/onflow/ff-sre-infrastructure/issues/414)
- [Grant Raymond access to MN testing EN](https://github.com/onflow/ff-sre-infrastructure/issues/412)
- [Update KMS Keys to remove users and ensure availability](https://github.com/onflow/ff-sre-infrastructure/issues/408)
- [Clean up MN AN Boot disk logs](https://github.com/onflow/ff-sre-infrastructure/issues/390)
- [Increase DL LN data disks](https://github.com/onflow/ff-sre-infrastructure/issues/391)
- [Increase MN AN & LN Data disks](https://github.com/onflow/ff-sre-infrastructure/issues/388)

**Incidet Response**
- [Fix escalation policy to template for incident commanders](https://github.com/onflow/ff-sre-infrastructure/issues/410)
- [Integrate slack into schedule rotations](https://github.com/onflow/ff-sre-infrastructure/issues/397)
- [Configure slack group for each protocol on-call schedule](https://github.com/onflow/ff-sre-infrastructure/issues/396)

**Coudflare**
- [Create script to validate zone records](https://github.com/onflow/ff-sre-infrastructure/issues/303)
- [Delete nodes.onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/375)
- [Remove all records in the nodes.onflow.org zone in Terraform](https://github.com/onflow/ff-sre-infrastructure/issues/374)
- [Remove NS records for nodes.onflow.org & validate cutover to onflow.org](https://github.com/onflow/ff-sre-infrastructure/issues/304)

**Grafana Alloy**
- [Create Documentation for Testing Cloud-init Changes Locally](https://github.com/onflow/ff-sre-infrastructure/issues/392)
- [Create Grafana Alloy Configuration](https://github.com/onflow/ff-sre-infrastructure/issues/257)

**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Incident Management & Response](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=93739820&issue=onflow%7Cff-sre-infrastructure%7C131)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation [DONE]
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes [DONE]
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
1. 5 new consensus nodes were added to the network.
2. Tokenomics discussion with Dete.

**This sprint**
1. Triage incoming Flow validator applications and coordinate token leases and onboarding if approved
2. Continue Tokenomics discussion with Dete

---
