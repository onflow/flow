# Overview

### Team Wins 🎉

- Transaction fees update is live
- Additional infra savings realized with downsizing historical node disk size.
- Fusaka is live on mainnet
- TPS load on mainnet reached 1247 TPS (measurement confirmed by Dune)
- Cadence compiler/VM testing now successfully verified 2.5 Million blocks (~23 days of mainnet traffic) match execution with current interpreter.
- FVM Benchmark of optimized VM vs interpreter now shows VM ~13% (6.2->5.4ms) faster performing token transfer and ~20% fster on average across varied Tx load (confimration on test network pending).
- Completed deep-dive into EVM fees & [reduced the error rate close to 0](https://flow-foundation.slack.com/archives/C08B276QSR0/p1764955298847359).
- Access node [POC tthat optimizes collection fetching](https://github.com/onflow/flow-go/pull/8154) shows very promising results to reduce duration of requests for finalized blocks/Txs by ~1.5s.

---

### Mainnet Uptime - Last 14 days (11/28/25 to 12/12/25) \[Vishal]


|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |    99.975%    |       24.8%       |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA \[Vishal]

| Incident/upgrade       | Date       | Collection | Consensus | Execution | Verification | Total      | Comments      |
|------------------------|------------|------------|-----------|-----------|--------------|------------|---------------|
| HCU                    | 1/27/2025  |            |           | 5         |              | 5          |               |
| P0 Incident            | 2/18/2025  | 180        | 180       | 180       | 180          | 180        | Grafana issue |
| P0 Incident            | 2/19/2025  | 30         | 30        | 30        | 30           | 30         | Grafana issue |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 4/10/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 5/15/2025  |            |           | 7         |              | 7          |               |
| HCU                    | 6/3/2025   |            |           | 9         |              | 9          |               |
| HCU                    | 6/16/2025  |            |           | 12        |              | 12         |               |
| HCU                    | 8/7/2025   |            |           | 9         |              | 9          |               |
| Forte network upgrade  | 10/22/2025 | 284        | 240       | 240       | 240          | 470        |               |
| HCU                    | 11/20/2025 |            |           | 9         |              | 9          |               |
| HCU                    | 12/04/2025 |            |           | 9         |              | 9          |               |
| Total downtime in mins |            | 494        | 450       | 530       | 450          | 760        |               |
| YTD SLA                |            | 99.90%     | 99.91%    | 99.89%    | 99.91%       | 99.85%     |               |
| SLA for 2025           |            | 99.91%     | 99.91%    | 99.90%    | 99.91%       | **99.86%** |               |

### Incidents \[Vishal]

- Planned downtime
  - HCU on 12/4

- Unplanned downtime:
    - EVM GW downtime for 10 hours minutes: Friday, Dec 5th.
    - [Postmortem report](https://status.flow.com/incidents/69wv7m70pyxv)


---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    9     | **24**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **52**  |   **19**   |  **21**  | **112** |

- [FLIP 351: Transaction Fee Update to Enable Inflation-Neutral Tokenomics](https://github.com/onflow/flips/blob/main/governance/20251119-transaction-fee-update.md) released.
- One new FLIP proposed - [FLIP 353: Automatic Restaking](https://github.com/onflow/flips/issues/354)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- [Prepare Cadence compiler for deployment](https://github.com/onflow/cadence/issues/4307)
    - correctness testing
        - [Fix mismatch indexing expression key transfer mismatch between interpreter and compiler](https://github.com/onflow/cadence/pull/4365)
        - [Check inner value in `SomeValue.isInvalidatedResource`](https://github.com/onflow/cadence/pull/4369)
        - [[Compiler] Skip resource-loss check for temporary variable assignments](https://github.com/onflow/cadence/pull/4376)
    - bugfixes
        - [[Compiler] Fix compilation of attachments](https://github.com/onflow/cadence/pull/4378)
        - [[Compiler] Fix captured implicit reference values](https://github.com/onflow/cadence/pull/4382)
        - [[Compiler] Fix compilation of inherited post condition with before expression](https://github.com/onflow/cadence/pull/4385)
    - optimizations
        - [[Compiler] Remove unnecessary copy of arguments](https://github.com/onflow/cadence/pull/4377)
        - [[Subtyping Generator] Merge master](https://github.com/onflow/cadence/pull/4381)
        - [[Compiler] Avoid redundant set-local/get-local instructions in empty non-attachment constructors](https://github.com/onflow/cadence/pull/4383)
- Improvement
    - [Improve pretty printing](https://github.com/onflow/cadence/pull/4384)
- Testing
    - [Enable subtyping comparison in CI](https://github.com/onflow/cadence/pull/4352)
    - [Compare storage for vm vs interpreter during tests](https://github.com/onflow/cadence/pull/4368)
    - [[Compiler] Fix tests](https://github.com/onflow/cadence/pull/4386)
- chores
    - [Fix release workflow](https://github.com/onflow/cadence/pull/4366)
    - [[v1.8] Port v1.8.8-rc.1](https://github.com/onflow/cadence/pull/4371)
    - [[v1.8] Fix NPM package version](https://github.com/onflow/cadence/pull/4372)
    - [Merge v1.8.8](https://github.com/onflow/cadence/pull/4374)
    - [Merge v1.8.5-rc into v1.8.8-rc](https://github.com/onflow/cadence-internal/pull/356)
    - [[Cadence VM] Merge master](https://github.com/onflow/flow-go/pull/8210)
    - [Update to Cadence v1.8.7](https://github.com/onflow/flow-go/pull/8209)
    - [[v0.44] Update Cadence to v1.8.8-rc.1](https://github.com/onflow/flow-go-internal/pull/7130)
    - [Update to Cadence v1.8.7](https://github.com/onflow/flow-go-sdk/pull/959)
    - [Update to Cadence v1.9.1](https://github.com/onflow/flow-go-sdk/pull/965)

**Cadence Execution**

- [[Access] Asynchronous Collection Indexing Design](https://github.com/onflow/flow-go/issues/8121)
    - POC
        - [Optimize CollectionFinalized with BlockIDByCollectionID](https://github.com/onflow/flow-go/pull/8186)
        - [[Access] Indexer remove redundant header reads](https://github.com/onflow/flow-go/pull/8226)
- Network upgrade prep
    - [Add Mainnet System Collection Version Boundary](https://github.com/onflow/flow-go/pull/8151)
- Cadence VM
    - [[Cadence VM] Run certain integration tests with Cadence VM](https://github.com/onflow/flow-go/pull/8197)
    - [[Cadence VM] Update to Cadence 60e882a13d71](https://github.com/onflow/flow-go/pull/8220)
    - [[v0.44] Update to Cadence v1.8.8](https://github.com/onflow/flow-go/pull/8224)
    - [[Cadence VM] Update to Cadence 5ab6de2](https://github.com/onflow/flow-go/pull/8228)
    - [[Cadence VM] Port #8223](https://github.com/onflow/flow-go/pull/8229)
    - [[Cadence VM] Update to Cadence v1.9.1](https://github.com/onflow/flow-go/pull/8235)
    - [Update to Cadence v1.9.1](https://github.com/onflow/flow-go/pull/8234)
    - [[Cadence VM] Update to Cadence v1.9.2](https://github.com/onflow/flow-go/pull/8243)
    - [[Cadence VM] Improve computation metering / limiting in remote debugger and VM comparison](https://github.com/onflow/flow-go/pull/8250)
    - [[Cadence VM] Fall back to remote debugger-based comparison](https://github.com/onflow/flow-go/pull/8253)
- Improvement
    - [Improve conversion of Flow address to Cadence address](https://github.com/onflow/flow-go/pull/8214)
- tech-debt
    - [Always enable EVM in FVM](https://github.com/onflow/flow-go/pull/8211)
- testing
    - [[Testing] Skip wintermute test suite due to flakiness](https://github.com/onflow/flow-go/pull/8187)


**Flow EVM**
- no PRs merged this sprint

**This sprint**

- Cadence Language
    - Continue compiler correctness testing
    - Continue tacklig compiler+VM tech-debt
    - Continue deep-dive on compiler+VM performace

- Cadence Execution
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Continue [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
  - Continue [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Continue [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
  - Continue [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
  - Maybe: New Trie research

- EVM
  - Continue: Investigation into EVM GW issue discovered during mainnet load test.
  - Continue: [EVM Gateway Compatibility with Surge Pricing](https://github.com/onflow/flow-evm-gateway/issues/861)
  - Start: [Investigate performance issue on EVM txs](https://github.com/onflow/flow-go-internal/issues/7128)
  - Complete: [Improve resilience on connections with upstream ANs](https://github.com/onflow/flow-evm-gateway/issues/764)

**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q4 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Network Upgrade (Spork) [Done]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Investigate root cause of sealing lag [Done]
* Collectors submit votes for root block for spork bootstrapping [Done]
* Building blocks for Collection Nodes Decentralization [IN PROGRESS]
* Downgrade historical node hardware [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  * PR reviews
  * Refactor optimistic sync pipeline ([PR 8201](https://github.com/onflow/flow-go/pull/8201))
  * Merge master into feature/optimistic-sync - 2025-11-19 ([PR 8168](https://github.com/onflow/flow-go/pull/8168))
  * HCU related work [1](https://github.com/onflow/flow-go/pull/8216), [2](https://github.com/onflow/flow-go/pull/8216), [3](https://github.com/onflow/flow-go/pull/8218)
  * CI improvements [1](https://github.com/onflow/flow-go/pull/8223), [2](https://github.com/onflow/flow-go/pull/8246)
  * KROK Team
      * Done:
        - [[Access] Compatible Range in node version info does not reflect compatibility overrides #7014](https://github.com/onflow/flow-go/issues/7014)
        - [[Access] Fix error codes for GetTransactionResultsByBlockID during HCU #8178](https://github.com/onflow/flow-go/issues/8178)
        - [[Data Availability] add a check for executors passed by a client #8204](https://github.com/onflow/flow-go/issues/8204)
        - Optimize access integration tests runtime ([PR 8190](https://github.com/onflow/flow-go/pull/8190))

      * In Review:
        - [[Data Availability] Refactor events test in http package #7923](https://github.com/onflow/flow-go/issues/7923)
        - [[Data Availability] Update LatestPersistedSealedResult module to use storage lock #7611](https://github.com/onflow/flow-go/issues/7611)
        - [[Data Availability] Refactor subscription package #8093](https://github.com/onflow/flow-go/issues/8093)
        - [[Access] Improve grpc converter tests. #8127](https://github.com/onflow/flow-go/issues/8127)
        - [[Data Availability] Remove or adjust index reporter in execution data tracker #8135](https://github.com/onflow/flow-go/issues/8135)
        - [[Data Availability] Implement AncestorResultID check in ExecutionResultQueryProvider #7587](https://github.com/onflow/flow-go/issues/7587)
        - [[Access] Add endpoints to get transaction and results by block #8206](https://github.com/onflow/flow-go/issues/8206)
        - [[Data Availability] Rewrite backend execution data tests from scratch #8231](https://github.com/onflow/flow-go/issues/8231)


      * In Progress:
        - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
        - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
        - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)
        - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)
        - [[Data Availability] Implement fork-aware Streaming Transaction Status Endpoints #7654](https://github.com/onflow/flow-go/issues/7654)
        - [[Data Availability] Implement fork-aware Execution Data subscription Endpoints #8059](https://github.com/onflow/flow-go/issues/8059)
        

* Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 5 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 11/17 done, 3 in progress/review
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 6 done, 5 in progress/review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 3/7 done, 2 in progress/review

* <ins>Cryptography</ins>
  * Multi-SPoCK:
    * contract review of the external researcher still ongoing (tentative review start end of Jan)
    * paper editing

* <ins>Building blocks for Collection Nodes Decentralization</ins>

  * (Proof of Collection Finality Working group presentation)[https://github.com/onflow/Flow-Working-Groups/blob/main/core_protocol_working_group/meetings/2025-12-10.md#links-and-further-reading]
  * Completed [BlockBuffer improvements](https://github.com/onflow/flow-go/issues/8170) implementation

* Other items not covered in OKRs:
  * Content pieces: Blog post for Execution Effort Calibration and Badger to PebbleDB Migration 

**This sprint**

* <ins>Data Availability</ins>
  * Continue work on Milestone 2 tasks
  * KROK Team
    - Continue work on reviews and milestone 3 tasks

* <ins>Cryptography</ins>
  - Continue working on the Spock paper


* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * Continue implementation on current issues


---

### **DeFi** \[Vishal]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### Flow ALP & Flow Vaults:

- Continue working through audit comments
- EVM UI integration and testing
- Completed development of the Arb bot
- Integrated the Flow-looping strategy into FYV to be used by Peak Money.
- Implementation of BTC and ETH as collateral types
- Flow Action issues [72](https://github.com/onflow/FlowActions/pull/72) and [77](
    https://github.com/onflow/FlowActions/pull/77)

**This sprint**

#### Flow ALP & Flow Vaults:

- Continue working through audit comments
- EVM UI integration and testing
- Arb bot deployment
- Continue implementation of BTC and ETH as collateral types
- Continue fixing Flow Action issues [72](https://github.com/onflow/FlowActions/pull/72) and [77](
  https://github.com/onflow/FlowActions/pull/77)



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- Fork Testing
  - Documented dependency mocking for forked network

- Mobile
  - Fixed latest WalletConnect redirect issue with wallet
  - Created new React Native SDK package for native UI requirements
  - Created share React hooks library for React SDK and React Native SDK
  - Added native UI for wallet connections

- React SDK Liquidity
  - Added new internal UI components for the React SDK
  - Built the Fund component UI
  - Added the Fund component to the demo playground
  - Created Fund Crypto API interfaces
  - Created Fund Relay.Link integration
  - Created Fund Fiat API interfaces
  - Build React SDK Relay crypto on-ramp integration
  - Started React SDK Moonpay fiat on-ramp integration

- Misc
  - Documented Emulator Account Creation Flag Usage
  - Began improving theming support across the React SDK
  - Finished and released CLI import aliasing support
  - Support narrative arc marketing efforts
  - Added system transactions to `flow blocks get`
  - Added ability to run `flow cadence lint` on all files at once
  - Documented instructions for DevRel to run recurring TVL helper


**This Sprint**

- Mobile
  - Add Connect and Profile components to react-native-sdk
  - Complete react-native-sdk package and publish it
  - Complete flow-expo-starter package fully integrated with react-native-sdk
  - Update playground with banner for react-native-sdk usage
  - Begin building Fund native UI
  - Begin integrating Fund component native integration

- React SDK Liquidity
 - Move fund hook to share hooks library
 - Integrate fiat Fund component with React SDK Hooks
 - Add cross VM bridging to React SDK Fund component
 - Document React SDK Fund usage
 - Document vanilla @onflow/payments usage

- Misc
  - Fix fcl-js npm publish problem
  - Address FlowCron review feedback
  - Finish theming support across React SDK
  - Create marketing materials for Q4 tooling work


---

### Applications / Wallet [Jeff]

**Done last sprint**

- Shipped v3.1 of Flow Wallet extension -> adding EOA support.
    - This will help prevent users from losing assets when sending to their COA address on other networks.
- Continued development of v3.1 on Flow Wallet iOS & Android

**This sprint**

- Ship v3.1 on Flow Wallet iOS & Android, adding EOA support
- Start on v3.2 -> Adding device and cloud backup support to EOA profiles on Flow Wallet.
- Start engineering breakdown for v3.3  -> Adding support for multiple accounts per profile.

---

### **Infra** \[Manny]

**Done last sprint**

**Cost Optimization**
- [Remove Resources for SN / LN / VN from Historical Networks](https://github.com/onflow/ff-sre-infrastructure/issues/937)
- [Remove Snapshot Schedules and Snapshots for non-US Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/971)

**Historical Nodes**
- [Recreate Data Disks for Historical ENs MN1-23 with Reduced Sizes](https://github.com/onflow/ff-sre-infrastructure/issues/978)
- [Create Archive Snapshots for MN1-4 ENs and Remove Standard Snapshots](https://github.com/onflow/ff-sre-infrastructure/issues/983)
- [Reconcile DNS State after the Historical ENs Consolidation](https://github.com/onflow/ff-sre-infrastructure/issues/968)
- [Terminate Blue EN MN23 used for Consolidation Tests](https://github.com/onflow/ff-sre-infrastructure/issues/969)
- [Migrate MN1-4 ENs to Consolidated MN00 EN](https://github.com/onflow/ff-sre-infrastructure/issues/982)
- [Migrate MN24 AN to the Historical Node Setup](https://github.com/onflow/ff-sre-infrastructure/issues/965)

**Support**
- [Create DNS Record for Actions Flow](https://github.com/onflow/ff-sre-infrastructure/issues/976)
- [Create Additional EVM GW Nodes on MN](https://github.com/onflow/ff-sre-infrastructure/issues/979)
- [Update EVM GW Tag and Flags on MN](https://github.com/onflow/ff-sre-infrastructure/issues/981)
- [Downsize EVM GW Nodes After Upsizing during Outage](https://github.com/onflow/ff-sre-infrastructure/issues/985)
- [Fix Permissions for EVM Migration TN SA to Pull Secrets](https://github.com/onflow/ff-sre-infrastructure/issues/990)


---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [In Progress]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**

* Coordination and roll out the transaction fee increase on testnet on Mon, Dec 1st.
* Coordination and roll out the transaction fee increase on mainnet on Thursday, Dec 4th.
  * Machine account balance verification following fee update


**This sprint**
* Add execution saturation panel to the public dashboard for surge pricing.

---
