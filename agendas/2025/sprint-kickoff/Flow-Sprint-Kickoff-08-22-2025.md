# Overview

 ### Team Wins 🎉
- [Network Resilience] Concluded the testing for network resilience and identified the leading indicator for network overload and the technical lever to recover from it.

---

### Mainnet Uptime - Last 14 days (08/09/25 to 08/22/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |     100%      |        0%         |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
|------------------------|-----------|------------|-----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |            |           | 7         |              | 7      |               |
| HCU                    | 6/3/2025  |            |           | 9         |              | 9      |               |
| HCU                    | 6/16/2025 |            |           | 12        |              | 12     |               |
| HCU                    | 8/7/2025  |            |           | 9         |              | 9      |               |
| Total downtime in mins |           | 210        | 210       | 272       | 210          | 272    |               |
| YTD SLA                |           | 99.94%     | 99.94%    | 99.92%    | 99.94%       | 99.92% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

N/A

### Key Release Dates & Breaking Changes


Forte Network upgrade (Spork) Fall 2025.
- Testnet in **Sept, 17th (Wednesday)**
- ⚠️ Mainnet in **End of Oct**

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    10    | **25**  |
| Proposed    |      1      |    3    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    2     | **10**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    5    |     1      |    0     |  **9**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **19**    | **50**  |   **17**   |  **19**  | **107** |

#### New FLIPs
1. [Add 128-bit fixed-point types to Cadence](https://github.com/onflow/flips/issues/341)

---


# Working Group Updates

### **Cadence Language and Execution** \[Bastian]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language** \[Bastian]

- Compiler:
  - [[Compiler] Import Aliasing](https://github.com/onflow/cadence/pull/4125)
  - [[Compiler] Attachments #1/3](https://github.com/onflow/cadence/pull/4052)
  - [[Compiler] Attachments #2/3](https://github.com/onflow/cadence/pull/4087)
  - [[Compiler] Attachments #3/3](https://github.com/onflow/cadence/pull/4111)

- [Fixed-point type improvements](https://github.com/onflow/flow-okrs/issues/142)
  - [Add more tests for Fix128 type/value](https://github.com/onflow/cadence/pull/4140)
  - [Add UFix128 type to Cadence](https://github.com/onflow/cadence/pull/4147)
  - [Improve fixedpoint conversions](https://github.com/onflow/cadence/pull/4151)
  - [Test least-significant decimal point truncation](https://github.com/onflow/cadence/pull/4155)
  - [[Compiler] Support Fix128 and UFix128 types in compiler](https://github.com/onflow/cadence/pull/4164)
  - [Add Fix128 and UFix128 types to Cadence](https://github.com/onflow/cadence/pull/4131)
  - [Add Fix128 and UFix128 types to CCF spec](https://github.com/onflow/ccf/pull/8)
  - [Add constructor for Fix128 and UFix128 types](https://github.com/onflow/fixed-point/pull/1)
  - [Add 128-bit fixed-point types to Cadence](https://github.com/onflow/flips/issues/341)

- [Make Cadence development great with AIs](https://github.com/onflow/flow-okrs/issues/143)
  - [[4062-part-4] Update Cadence Errors](https://github.com/onflow/cadence/pull/4128)
  - [Improve errors and suggested fixes, add tests](https://github.com/onflow/cadence/pull/4129)
  - [Show migration note and documentation link in pretty error printer](https://github.com/onflow/cadence/pull/4130)
  - [Improve errors](https://github.com/onflow/cadence/pull/4137)
  - [Improve type parsing errors](https://github.com/onflow/cadence/pull/4141)
  - [Improve comment and statement parsing errors](https://github.com/onflow/cadence/pull/4142)
  - [Improve parsing errors](https://github.com/onflow/cadence/pull/4143)
  - [Improve sema errors](https://github.com/onflow/cadence/pull/4144)
  - [Improve declaration parsing errors](https://github.com/onflow/cadence/pull/4146)
  - [Improve statement parsing errors](https://github.com/onflow/cadence/pull/4148)
  - [Improve parsing errors](https://github.com/onflow/cadence/pull/4149)
  - [Improve expression parsing errors ](https://github.com/onflow/cadence/pull/4150)
  - [Add suggested fixes to errors](https://github.com/onflow/cadence/pull/4157)
  - [Add suggested fixes to errors](https://github.com/onflow/cadence/pull/4158)
  - [Add and improve suggested fixes](https://github.com/onflow/cadence/pull/4159)
  - [Simplify errors for pub access modifier](https://github.com/onflow/cadence/pull/4160)
  - [Improve insertion positions of suggested fixes](https://github.com/onflow/cadence/pull/4161)
  - [Improve error messages](https://github.com/onflow/cadence/pull/4163)
  - [Add suggested fixes for sema errors](https://github.com/onflow/cadence/pull/4165)
  - [[LS] Add documentation link as code description, and migration note](https://github.com/onflow/cadence-tools/pull/485)
  - [Add missing information](https://github.com/onflow/cadence-lang.org/pull/255)

- Performance optimization: Metering refactor
  - [Refactor memory metering](https://github.com/onflow/cadence/pull/4166)
  - [Refactor computation metering](https://github.com/onflow/cadence/pull/4167)

- Updated downstream dependencies (SDK, Emulator, Cadence tools, etc.)
  - [Switch from forked to upstream go-ethereum](https://github.com/onflow/flow-go-sdk/pull/893)
  - [Update to Cadence v1.7.0-preview.1](https://github.com/onflow/flow-emulator/pull/839)
  - [Update to Flow Go SDK v1.7.0 and latest flow-go](https://github.com/onflow/flow-emulator/pull/840)
  - [[lint] Update to Cadence v1.7.0-preview.1](https://github.com/onflow/cadence-tools/pull/487)
  - [[test] Update to Cadence v1.7.0-preview.1](https://github.com/onflow/cadence-tools/pull/488)
  - [[languageserver] Update to Cadence v1.7.0-preview.1](https://github.com/onflow/cadence-tools/pull/489)
  - [Update to Cadence v1.7.0-preview.1](https://github.com/onflow/rosetta/pull/87)
  - [Update to Cadence v1.7.0-preview.1](https://github.com/onflow/flixkit-go/pull/93)

- Tooling
  - [Add a tool which allows applying changes to a Go expression](https://github.com/onflow/cadence/pull/4145)
  - [Improve release note generation](https://github.com/onflow/cadence/pull/4154)
  - [Add Rosetta to the config of the update tool](https://github.com/onflow/cadence/pull/4156)

**Cadence Execution** \[Leo]

**Done last sprint**

- Badger -> Pebble migration
  - PR reviews.
  - Continued migrating more nodes to Pebble. Now we have one node of each type on both mainnet and testnet running on Pebble.
  - 3/7 PRs have been reviewed and merged to the feature branch.

- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
  - TPS loader improvements - network stress testing
      - Started working on measurement and FLIP

- Storage Key Deduplication
    - Migration for Account Public Key Deduplication
        - [Dry-runs to measure mainnet spork migration and deduplication migration times](https://github.com/onflow/flow-go/pull/7738#issuecomment-3207687160) using m1 and m3 vm on benchnet
        - [Add public key deduplication migration program (PR #7738)](https://github.com/onflow/flow-go/pull/7738)
    - Runtime Public Key Deduplication and Account Status Format v4
        - [Add runtime public key deduplication (issue 7754)](https://github.com/onflow/flow-go/issues/7754)
        - [Add support for account status format v4 (issue 7756)](https://github.com/onflow/flow-go/issues/7756)
    - Internal
        - Identified existing issue and the team gathered related data [flow-go-internal 7106](https://github.com/onflow/flow-go-internal/issues/7106)

- Scheduled Callbacks
  - PR review of the FlowCallbackScheduler contract
    - https://github.com/onflow/flow-core-contracts/pull/513
    - https://github.com/onflow/flow-core-contracts/pull/489
    - https://github.com/onflow/flow-core-contracts/pull/509
  - Writing test for the contract changes.
  - PR review of the flow-go changes
    - https://github.com/onflow/flow-go/pull/7579
    - https://github.com/onflow/flow-go/pull/7672
    - https://github.com/onflow/flow-go/pull/7673

**Flow EVM**

- Improvements:
    - Fixed Gateway's connectivity issue related to event streaming. Confirmed the fix worked. https://github.com/onflow/flow-evm-gateway/issues/708
      - This also resolved issue reported by Okex

**This sprint**

- Cadence Language
  - Review and merge PRs, code freeze
  - Approve FLIP
  - Back to compiler: Investigate execution state differences

- Cadence Execution
    - Continue Badger -> Pebble
        - Continue PR reviews.
        - Continue testing on mainnet with more nodes of each type running Pebble.
        - Merge the Malleability branch into Pebble branch.

    - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) Finishing up measurements and FLIP

    - Begin the epic of [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)

    - Continue Migration for Account Public Key Deduplication
        - continue. [Add public key deduplication migration (PR 7738)](https://github.com/onflow/flow-go/pull/7738)
        - continue. [Add runtime public key deduplication (issue 7754)](https://github.com/onflow/flow-go/issues/7754)
        - continue. [Add support for account status format v4 (issue 7756)](https://github.com/onflow/flow-go/issues/7756)
        - Add fix for [flow-go-internal 7106](https://github.com/onflow/flow-go-internal/issues/7106)

- EVM
  - Start working on the price surge issue https://github.com/onflow/flow-evm-gateway/issues/863

- Scheduled Callbacks
  - Continue core contract and flow-go PR reviews.

**On Hold**
- New Trie research
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]
Q3 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Overload resilience  [IN PROGRESS]
* Q3 Network Upgrade (Spork) [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]

**Done last sprint**

* <ins>Overload resilience</ins>
  * Second round of internal review.

* <ins>Data Availability</ins>
* PR reviews
* KROK Team
  * Done:
    - [[Data Availability] Add new execution state request and response params #7616](https://github.com/onflow/flow-go/issues/7616)
  * In Review:
    - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)
    - [[DataAvailability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
    - [[DataAvailability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
    - [[Data Availability] Add execution state query and executor metadata field to proto models #7759](https://github.com/onflow/flow-go/issues/7759)
  * In Progress:
    - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)
    - [[DataAvailability] Implement fork-aware System Transaction Endpoints #7648](https://github.com/onflow/flow-go/issues/7648)
    - [[DataAvailability] Implement fork-aware Account Endpoints #7650](https://github.com/onflow/flow-go/issues/7650)
  * Milestones status:
    - milestone 1: completed
    - milestone 2:
      - Epic 7180: in progress: 4 done, 3 in progress out of 11
      - Epic 7181: completed
    - milestone 3:
      - Epic 7182: 6/14 done, 0 in progress
      - Epic 7610: 2/7 done, 0 in progress
      - Epic 7615: 3 in progress, 3 in review, out of 12

* <ins>Malleability</ins>
  * Malleability PR reviews
  * Testing on migration testnet
    * Fixes to spork utilities
  * KROK Team
    * Done:
      - [[Protocol KV Store] Update bootstrapping to support transferring KVStore from old network to new #5973](https://github.com/onflow/flow-go/issues/5973)
      - [[Malleability Immutable] Extend InterfaceFromMessageCode, define UntrustedMessage interface #7696](https://github.com/onflow/flow-go/issues/7696)
    * In Review:
      - [[Immutable Models M2] messages.BlockResponse: message/internal split + validation #7709](https://github.com/onflow/flow-go/issues/7709)
      - [[Immutable Models M2] messages.ClusterBlockResponse: message/internal split + validation #7703](https://github.com/onflow/flow-go/issues/7703)
      - [[Immutable Models M2] messages.ClusterBlockProposal: message/internal split + validation #7701](https://github.com/onflow/flow-go/issues/7701)
      - [[Immutable Models M2] messages.BlockProposal: message/internal split + validation #7698](https://github.com/onflow/flow-go/issues/7698)
    * In Progress:
      - [[Immutable Models M2] messages.ApprovalRequest: message/internal split + validation #7717](https://github.com/onflow/flow-go/issues/7717)
      - [[Immutable Models M2] messages.ApprovalResponse: message/internal split + validation #7718](https://github.com/onflow/flow-go/issues/7718)
      - [[Immutable Models M2] flow.CollectionGuarantee: message/internal split + validation #7710](https://github.com/onflow/flow-go/issues/7710)

* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  * Completed initial design - [Design doc](https://www.notion.so/flowfoundation/Collection-node-decentralization-Bootstrapping-24f1aee12324801b9780ee0abbbc09d0)

* <ins>Cryptography</ins>
  * Multi-SPoCK:
    - finished documenting what was done so far in simple SPoCK, specifically the the attempts to prove SPoCK-Knowledge under the PoP assumption (for a later revisit)
    - worked on defining the multi-SPoCK scheme (following [Bellare's](https://cseweb.ucsd.edu/~mihir/papers/multisignatures.pdf) definitions of Multi-Signature)
    - SPoCK Batch verification and proof aggregation of distinct messages (WIP)
    - worked on defining the BLS-multi-SPoCK scheme (a construction of multi-SPoCK)

**This sprint**

* <ins>Overload resilience</ins>
  * Review and merge Collection Throttling [PR](https://github.com/onflow/flow-go/pull/7683)

* <ins>Data Availability:</ins>
  - PR Reviews
  - KROK Team:
    - Work on PR Reviews
    - Continue working on milestone 3 API changes for caching layer ( more complex part for this epic should be done, next tasks would be more straightforward )


* <ins>Malleability</ins>
  - Continue testing on migration testnet
  - Merge the malleability branch to master
  - KROK Team:
    - Work on PR Reviews
    - Work on new types from [Immutable Models M2] message/internal split + validation


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  - Breaking down the design into issues.
  - Working through the issues.


* <ins>Cryptography</ins>
  * Continue working on Spock aggregation
    * Next are the security games of multi-SPoCK (necessary to state the security definition and then security proofs)


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

#### Tidal:



#### DeFi Actions:




**This sprint**

#### Tidal:




#### DeFi Actions:



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* DeFi Actions / AI
  * Deployed connectors & test restaking transaction on Mainnet
  * Iterated on demo AI context files to improve quality & consistency of generated code
  * Created scheduled callback restaking transaction for demo
  * Built AI benchmarking framework
  * Documented usage of scheduled callbacks in emulator on Developer Docs
  * Supported Education Team in creating materials for third-party builders using DeFi Actions at hackathon
  * Exposed scheduled callbacks through `flow cadence test` CLI command

* Misc
  * Addressed hackathon documentation feedback by rewriting `flow.json` configuration docs

**This Sprint**

* React SDK
  * Build NFT hook for getting NFT metadata
  * Build NFT component for getting NFT metadata
  * Build NFT bridge from EVM to Cadence Hook
  * Build FT bridge from EVM to Cadence Hook
  * Enable CLI project creation from any directory and streamline getting started guide

* Testnet <-> Mainnet
  * Mock support for USDF on Testnet
  * Integrate mock with tooling

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.25 per week on a 4-week rolling average.
 - Current (Aug 22: 0.25/week -> 98% decrease in bugs since Jan/Feb!)

**Done last sprint**

- Completed initiaial implementation of new send workflow using React Native, enabling users to more fluidly manage assets between their accounts on Cadence and EVM.
- Integrated a new cross-platform UI library, Tamagui, enabling us to write UI once and use it across our three platforms, iOS, Android, Web.

**This sprint**

- Ship the new send workflow across all three platforms.
- In parallel:
  - Continue work on multi-account per profile support, now built with React Native.
  - Start work on Full/Secure profile support -> Enabling users to opt-in to a seed-phrase native profile with full EOA support.

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Tidal Observability**


**Node Hosting**


**Security**


**Support**


---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Surge pricing FLIP marked as `Accepted`
* Resumed working on the internal document for infused tokens

**This sprint**

* Testing Surge pricing on Testnet.
* Continue work on the internal document for infused tokens

---
