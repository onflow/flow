# Overview

### Team Wins 🎉

* All core malleability changes are now complete and ready to be rolled out as part of the spork.
* [Scheduled Callbacks FLIP](https://github.com/onflow/flips/pull/331) accepted
* Flip to [add 128-bit fixed-point types to Cadence](https://github.com/onflow/flips/pull/342) was approved & implementation completed & merged
* All protocol changes for scheduled callbacks are merged
* Completed Cadence changes to make it easier for LLMs to build with Cadence
* Completed metering optimization changes across Cadence & FVM
* Successfully tested surge price on testnet

---

### Mainnet Uptime - Last 14 days (08/22/25 to 09/4/25) \[Vishal]

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
- Mainnet in **Oct, 22nd (Wednesday)**

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    7    |     0      |    10    | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    2     | **10**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    5    |     1      |    0     |  **9**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **20**    | **52**  |   **17**   |  **19**  | **108** |

#### New FLIPs

- [FLIP 343: Fix numeric type rounding inconsistency](https://github.com/onflow/flips/pull/344)

---


# Working Group Updates

### **Cadence Language and Execution** \[Bastian]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- FLIP: [341: Add 128-bit fixed-point types to Cadence](https://github.com/onflow/flips/pull/342)
- [Improve Cadence Errors to Support LLM Efficiency](https://github.com/onflow/cadence/issues/4062)
    - [Improve error messages](https://github.com/onflow/cadence/pull/4163)
    - [Add suggested fixes for sema errors](https://github.com/onflow/cadence/pull/4165)
    - [Add suggested fix for duplicate conformance error](https://github.com/onflow/cadence/pull/4201)
    - [Add missing information.](https://github.com/onflow/cadence-lang.org/pull/255)
- [Add 128-bit wide decimal fixed-point types](https://github.com/onflow/cadence/issues/484)
    - [Handle external overflow/underflow errors from library](https://github.com/onflow/cadence/pull/4170)
    - [Update to latest fixed-point version](https://github.com/onflow/cadence/pull/4194)
    - [Add `Fix128` and `UFix128` types to Cadence](https://github.com/onflow/cadence/pull/4131)
    - [Bump fixed-point version to `v0.1.1`](https://github.com/onflow/cadence/pull/4196)
- [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)
    - Fixed couple of root-causes that produce different execution result between interpreter and compiler+VM
        - [[Compiler] Improve tracing in VM](https://github.com/onflow/cadence/pull/4175)
        - [[Compiler] Do not transfer and convert moved value](https://github.com/onflow/cadence/pull/4193)
        - [[Compiler] Attachments #2/3](https://github.com/onflow/cadence/pull/4087)
- [Remove support for account storage format V1](https://github.com/onflow/cadence/pull/4086)
- [Metering optimization](https://github.com/onflow/cadence/issues/4058)
    - [Refactor memory metering](https://github.com/onflow/cadence/pull/4166)
    - [Refactor computation metering](https://github.com/onflow/cadence/pull/4167)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Tech-debt:
        - [Make tracing enabled a build time flag](https://github.com/onflow/cadence/pull/4187)
        - [[Compiler] Move empty initializer and enum lookup function creation from compiler into desugaring.](https://github.com/onflow/cadence/pull/4185)
        - [[Compiler] Fix enums](https://github.com/onflow/cadence/pull/4189)
        - [[Compiler] Split VM Typeloader into separate dedicated methods.](https://github.com/onflow/cadence/pull/4192)
- New feature: [[Interpreter] Import Aliasing](https://github.com/onflow/cadence/pull/4033)
- Fixed-point library:
    - [Introduce dedicated error types for different errors](https://github.com/onflow/fixed-point/pull/5)
- bugs
    - [Pretty printing crashing on incomplete AST nodes](https://github.com/onflow/cadence/issues/4171)
        - [Handle partial AST nodes when pretty printing – Part 2](https://github.com/onflow/cadence/pull/4176)
        - [Handle partial AST nodes when pretty printing](https://github.com/onflow/cadence/pull/4173)
        - [Handle partial AST nodes when pretty printing – Part 3](https://github.com/onflow/cadence/pull/4178)
        - [Handle partial AST nodes when pretty printing – Part 4](https://github.com/onflow/cadence/pull/4179)
        - [Fix spacing in pretty printed AST nodes](https://github.com/onflow/cadence/pull/4180)
    - [Use truncation instead of rounding for `big.Int` division](https://github.com/onflow/cadence/pull/4184)
- Minor Improvement
    - [Return non-pointer error types as non-pointer values](https://github.com/onflow/cadence/pull/4182)
- chores
    - [Bump atree version to v0.10.1](https://github.com/onflow/cadence/pull/4168)
    - [Update dependencies](https://github.com/onflow/cadence/pull/4169)
    - [Update to Cadence v1.7.0-preview.1](https://github.com/onflow/flow-cli/pull/2018)

**Cadence Execution**
- [Scheduled Callbacks](https://github.com/onflow/flow-go/issues/7482)
    - [[Scheduled Callbacks] Integrate callback scheduler contract](https://github.com/onflow/flow-go/pull/7579)
    - [[Scheduled Callbacks] Verification](https://github.com/onflow/flow-go/pull/7673)
    - [[Access] Add Access API methods to get all system collection transactions](https://github.com/onflow/flow-go/issues/7784)
        - [[Scheduled Callbacks] Add optional system transaction ID argument](https://github.com/onflow/flow/pull/1627)
    - [[Scheduled Callbacks] E2E Tests](https://github.com/onflow/flow-go/pull/7672)
- Badger -> Pebble
    - [[Util] Update Util to support both badger and pebble based database](https://github.com/onflow/flow-go/pull/7469)
    - [[Storage] Collection Cluster State](https://github.com/onflow/flow-go/pull/7452)
    - [[Chunk Data Pack Pruner] Add block view index](https://github.com/onflow/flow-go/pull/6933)
    - [[Feature] Storage Refactor to use Pebble DB as backend](https://github.com/onflow/flow-go/pull/7262)
    - [[Storing] Refactor Storing Collections](https://github.com/onflow/flow-go/pull/7736)
    - [[Testing] Refactor testing lock manager usage](https://github.com/onflow/flow-go/pull/7773)
    - [[Storage] Adding more consistency check in storage operation](https://github.com/onflow/flow-go/pull/7741)
    - [[v0.42.4] Revert remove efm backward compatibility for feature pebble branch](https://github.com/onflow/flow-go/pull/7808)
- [Public key de-duplication](https://github.com/onflow/flow-go/issues/7573)
    - [Add account public key deduplication migration](https://github.com/onflow/flow-go/pull/7738)
- Metering improvement: [Refactor and cleanup FVM metering](https://github.com/onflow/flow-go/pull/7810)
Bugfix:
    - [Revert "Remove EFM backward compatibility logic for `DGKIndexMap`"](https://github.com/onflow/flow-go/pull/7809)
    - [Fix localnet startup](https://github.com/onflow/flow-go/pull/7779)
    - [Fix localnet bootstrapping](https://github.com/onflow/flow-go/pull/7788)
Testing:
    - [[Flow EVM] Add a test case utilizing a read-write heavy EVM tx](https://github.com/onflow/flow-go/pull/7745)
Chores:
    - [Update to Cadence v1.7.0-preview.2](https://github.com/onflow/flow-go/pull/7780)
    - [Update to Cadence v1.7.0-preview.3](https://github.com/onflow/flow-go/pull/7822)

**Flow EVM**
- [Update to Cadence v1.7.0-preview.1](https://github.com/onflow/flow-evm-gateway/pull/870)
- Emulator fix: [Respect config values for EVM VM bridge setup](https://github.com/onflow/flow-emulator/pull/827)
- chore: [Sync Soft Finality with changes from `main` branch ](https://github.com/onflow/flow-evm-gateway/pull/869)

**This sprint**

- Cadence Language
  - Close [FLIP 343: Fix numeric type rounding inconsistency](https://github.com/onflow/flips/pull/344/)
  - Back to compiler: Investigate execution state differences

- Cadence Execution
  - Complete Badger -> Pebble PR - merge in prep for spork
        - Continue testing on mainnet with more nodes of each type running Pebble.
        - Complete review & [Merge the Pebble branch to flow-go master](https://github.com/onflow/flow-go/pull/7794).
  - Complete [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) Finishing up measurements, publish FLIP
    - remaining: [Disable FVM metering inside EVM transactions](https://github.com/onflow/flow-go/pull/7825)
  - Complete Account Public Key Deduplication
    - [Add runtime detection and more efficient storage of duplicate account public keys](https://github.com/onflow/flow-go/issues/7754)
    - [Add support for account status format v4](https://github.com/onflow/flow-go/issues/7756)
    - close [bug](https://github.com/onflow/flow-go-internal/issues/7106)
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Start work on [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)

- EVM
  - Continue: [Update eth_gasPrice and eth_feeHistory response as per the current surge](https://github.com/onflow/flow-evm-gateway/issues/864)
  - Continue: [Integrate JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)


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
* Q3 Network Upgrade (Spork) [TODO]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]

**Done last sprint**

* <ins>Overload resilience</ins>
  - Reviewed and merged in the [collection throttling implementation](https://github.com/onflow/flow-go/pull/7683)


* <ins>Data Availability</ins>
  * Data Availability PR reviews
  * Design and PR reviews for schedule callbacks API updates
  * [Admin] Fix hang during admin server shutdown (https://github.com/onflow/flow-go/pull/7771)
  * KROK Team
    * Done:
      - [[Data Availability] Add execution state query and executor metadata field to proto models #7759](https://github.com/onflow/flow-go/issues/7759)
      - [[Data Availability] Added missing execution query status parameteres to requests #1620](https://github.com/onflow/flow/pull/1620)
      - [[Data Availability] Add execution state query field to executiondata protobuf #1622](https://github.com/onflow/flow/pull/1622)

    * In Review:
      - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)
      - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
      - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
      - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)
      - [[Data Availability] Implement fork-aware System Transaction Endpoints #7648](https://github.com/onflow/flow-go/issues/7648)

    * In Progress:
      - [[Data Availability] Implement fork-aware Account Endpoints #7650](https://github.com/onflow/flow-go/issues/7650)

    * Milestones status:
      - milestone 1: completed
      - milestone 2:
        - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): in progress: 4 done, 5 in progress out of 11
        - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
      - milestone 3:
        - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 6/14 done, 2 in progress
        - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 1 in progress, 6 in review, out of 12
        - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 0 in progress

* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team
    * Done:
      - [[Immutable Models M2] messages.EntityResponse: message/internal split + validation #7720](https://github.com/onflow/flow-go/issues/7720)
      - [[Immutable Models M2] messages.EntityRequest: message/internal split + validation #7719](https://github.com/onflow/flow-go/issues/7719)
      - [[Immutable Models M2] messages.ApprovalResponse: message/internal split + validation #7718](https://github.com/onflow/flow-go/issues/7718)
      - [[Immutable Models M2] messages.ApprovalRequest: message/internal split + validation #7717](https://github.com/onflow/flow-go/issues/7717)
      - [[Immutable Models M2] messages.ClusterBlockProposal: message/internal split + validation #7701](https://github.com/onflow/flow-go/issues/7701)
      - [[Immutable Models M2] messages.BlockProposal: message/internal split + validation #7698](https://github.com/onflow/flow-go/issues/7698)
      - [[Immutable Models M2] messages.BlockResponse: message/internal split + validation #7709](https://github.com/onflow/flow-go/issues/7709)
      - [[Immutable Models M2] messages.ClusterBlockResponse: message/internal split + validation #7703](https://github.com/onflow/flow-go/issues/7703)
      - [[Immutable Models M2] flow.CollectionGuarantee: message/internal split + validation #7710](https://github.com/onflow/flow-go/issues/7710)
      - [[Immutable Models M2] messages.BatchRequest: message/internal split + validation #7708](https://github.com/onflow/flow-go/issues/7708)
      - [[Immutable Models M2] messages.SyncRequest: message/internal split + validation #7705](https://github.com/onflow/flow-go/issues/7705)
      - [[Immutable Models M2] messages.SyncResponse: message/internal split + validation #7706](https://github.com/onflow/flow-go/issues/7706)
      - [[Immutable Models M2] messages.ChunkDataRequest: message/internal split + validation #7715](https://github.com/onflow/flow-go/issues/7715)
      - [[Immutable Models M2] messages.ChunkDataResponse: message/internal split + validation #7716](https://github.com/onflow/flow-go/issues/7716)
      - [[Immutable Models M2] messages.RangeRequest: message/internal split + validation #7707](https://github.com/onflow/flow-go/issues/7707)

    * In Review:
      - [[Immutable Models M2] messages.BlockVote: message/internal split + validation #7699](https://github.com/onflow/flow-go/issues/7699)
      - [[Immutable Models M2] messages.ClusterBlockVote: message/internal split + validation #7702](https://github.com/onflow/flow-go/issues/7702)
      - [[Immutable Models M2] messages.TransactionBody: message/internal split + validation #7711](https://github.com/onflow/flow-go/issues/7711)
      - [[Immutable Models M2] messages.Transaction: message/internal split + validation #7712](https://github.com/onflow/flow-go/issues/7712)
      - [[Immutable Models M2] messages.TimeoutObject: message/internal split + validation #7700](https://github.com/onflow/flow-go/issues/7700)
      - [[Immutable Models M2] messages.ClusterTimeoutObject: message/internal split + validation #7704](https://github.com/onflow/flow-go/issues/7704)

    * In Progress:
      - [[Immutable Models M2] flow.ResultApproval: message/internal split + validation #7714](https://github.com/onflow/flow-go/issues/7714)
      - [[Immutable Models M2] messages.TestMessage: message/internal split + validation #7721](https://github.com/onflow/flow-go/issues/7721)
      - [[Immutable Models M2] flow.ExecutionReceipt: message/internal split + validation #7713](https://github.com/onflow/flow-go/issues/7713)
      - [[Immutable Models M2] messages.DKGMessage: message/internal split + validation #7722](https://github.com/onflow/flow-go/issues/7722)

* <ins>Cryptography</ins>
  * Passkeys:
    - Update integration tests and merge access API changes
    - PR review
  * Security report about integer casting: analysis and minor update
  * Multi-SPoCK:
    - iterations on the security games of multi-SPoCK
    - security of multi-BLS-SPoCK implementation: wrote 2 proofs for key-forgery and knowledge forgery under KOSK
    - possible definition of a batch SPoCK verification (optional so will keep it aside for now)
    - minor progress on SPoCK aggregation (for distinct secrets)
    - setting up OverLeaf for paper editing

* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  - Design walk through during the core protocol WG call.

**This sprint**

* <ins>Overload resilience</ins>
  - Document how to use or adjust the collection throttling mechanism during times of overload.


* <ins>Data Availability:</ins>
  - PR Reviews
  - Continue supporting scheduled callbacks API updates
  - Design for new scheduled callbacks API endpoints
  - Continue debugging memory corruption
  - Continue results forest implementation and testing
  - KROK Team:
    - Address reviews from previous sprint
    - Continue work on API Updates (Issue 7615)(https://github.com/onflow/flow-go/issues/7615)

  
* <ins>Immutable Models M2</ins>
  - PR reviews
  - KROK Team:
    - Address review remarks from previous sprint
    - Finish Immutable Models M2 set of tasks
    - Work on new set of tasks that arise


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  - Split design into multiple issues and work through some of those issues.

* <ins>Cryptography</ins>
  * SPoCK:
    - more on PoP-based proofs for multi-SPoCK
    - more on SPoCK aggregation with distinct secrets: including getting back to Boneh-Drijvers-Neven paper
    - start editing paper using OverLeaf


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
- [Liquidator interface review](https://github.com/onflow/TidalProtocol/pull/40)
- [Liquidation logic code complete](https://github.com/onflow/TidalProtocol/pull/41)
- Oracle documentation and design complete
- Closed Beta Gating logic
- Flow Actions Audit complete


**This sprint**

#### Tidal:
- Oracle integration implementation
- AMM integration implementation
- Closed Beta gating logic
- Audit Feedback

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* React SDK
  * Built a NFT hook for getting NFT metadata
  * Built a NFT bridge from EVM to Cadence Hook
  * Built a FT bridge from EVM to Cadence Hook

* CLI Improvements
  * Enabled CLI project creation from any directory
  * Replaced old prompting library in CLI with bubbletea
  * CLI styling updates to give it a refreshed look
  * Rewrote `generate` command docs
  * Improved developer and AI-agent assistance in deploy errors

* Scheduled Callbacks
  * Built a CronJob contract for reuse

* Testnet <-> Mainnet
  * Mock support for USDF on Testnet

**This Sprint**

* React SDK
  * Building an NFT Card component
  * Building a component to send Fungible Tokens (w/ Lost & Found integration)
  * Building a marketing/landing page

* CLI Improvements
  * Integrating Flow Actions into `flow init`
  * Integrating Flow Actions into Dependency Manager
  * Rewriting more docs sections

* Scheduled Callbacks
  * Generating a default SC project from `flow init` if selected

* Testnet <-> Mainnet
  * Integrating testnet mocking into tooling


---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.25 per week on a 4-week rolling average.
- Current (Sep 5: 0.25/week -> 98% decrease in bugs since Jan/Feb!)

**Done last sprint**

- Completed initaital implementation of a new workflow in React Native on Flow Wallet!
  - Shipping send workflow today for iOS/Android as soon as google approves our release.

**This sprint**

- Start implementation of our new Full/Secure profile feature - adding EOA support on all platforms.
- Integrating Flow Wallet SDK on extension, and updating it to support EOA accounts.
- Completing Tamagui cross-platform UI support, releasing an updated version of the send workflow with it included.
- Complete & ship Flow Wallet extension new send workflow.

---

### **Infra** \[Manny]

**Done last sprint**

**Tidal**
- [Create Terraform Module for Service Level Alerting](https://github.com/onflow/ff-sre-infrastructure/issues/622)
- [Create Cloud Run Metrics Alerts](https://github.com/onflow/ff-sre-infrastructure/issues/468)
- [Create Database Metrics Alerts](https://github.com/onflow/ff-sre-infrastructure/issues/466)

**Observability**
- [Ensure Mainnet can support tracing](https://github.com/onflow/ff-sre-infrastructure/issues/672)
- [Enable tracing on Testnet](https://github.com/onflow/ff-sre-infrastructure/issues/670)

**Support**
- [Investigate Docker Login Issue on Flow Go CI](https://github.com/onflow/ff-sre-infrastructure/issues/735)
- [Create DNS Record for Rebrandly](https://github.com/onflow/ff-sre-infrastructure/issues/733)
- [Terminate TPS automation machine used for testing](https://github.com/onflow/ff-sre-infrastructure/issues/730)
- [MN26 Data Disk Increase - ANs](https://github.com/onflow/ff-sre-infrastructure/issues/726)
- [Fix Integration CI with environment for secrets](https://github.com/onflow/ff-sre-infrastructure/issues/704)

---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Surge price testing on Testnet
* Iterated on the Infused token document

**This sprint**

* Testing Surge pricing on Mainnet.
* Continue work on the infused tokens.

---
