# Overview

### Team Wins 🎉

- Attack recovery
- Blog post [Migrating Flow Node Storage from BadgerDB to PebbleDB](https://flow-foundation.slack.com/archives/C0A3GTVNKK3/p1765497777894339) (draft in gDocs; ready for publication)
- Starting testing of Concurrent Tx execution.
- Storehouse background indexing done - potentially enables zer-downtime execution layer block-height/view coordinated upgrades.
- [Patrick](https://github.com/holyfuchs) joined Execution team!

---

#### YTD SLA \[Vishal]

##### 2025

| Incident/upgrade       | Date       | Collection | Consensus | Execution | Verification | Total      | Comments                                     |
|------------------------|------------|------------|-----------|-----------|--------------|------------|----------------------------------------------|
| HCU                    | 1/27/2025  |            |           | 5         |              | 5          |                                              |
| P0 Incident            | 2/18/2025  | 180        | 180       | 180       | 180          | 180        | Grafana issue                                |
| P0 Incident            | 2/19/2025  | 30         | 30        | 30        | 30           | 30         | Grafana issue                                |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |                                              |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |                                              |
| HCU                    | 4/10/2025  |            |           | 5         |              | 5          |                                              |
| HCU                    | 5/15/2025  |            |           | 7         |              | 7          |                                              |
| HCU                    | 6/3/2025   |            |           | 9         |              | 9          |                                              |
| HCU                    | 6/16/2025  |            |           | 12        |              | 12         |                                              |
| HCU                    | 8/7/2025   |            |           | 9         |              | 9          |                                              |
| Forte network upgrade  | 10/22/2025 | 284        | 240       | 240       | 240          | 470        |                                              |
| HCU                    | 11/20/2025 |            |           | 9         |              | 9          |                                              |
| HCU                    | 12/04/2025 |            |           | 9         |              | 9          |                                              |
| Network Upgrade        | 12/27/2025 |            |           |           |              | 60         | First Network Upgrade Post Security Incident |
| Network Upgrade        | 12/28/2025 |            |           |           |              | 1440       | Transaction Ingestion Off                    |
| Network Upgrade        | 12/29/2025 |            |           |           |              | 909        | Second Network Upgrade                       |
| HCU                    | 12/29/2025 |            |           |           |              | 60         |                                              |
| Total downtime in mins |            |            |           |           |              | 3982       |                                              |
| SLA for 2025           |            |            |           |           |              | **99.26%** |                                              |

##### 2026

| Incident/upgrade        | Date     | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Total  | Comments                                |
|-------------------------|----------|------------|-----------|-----------|--------------|-------------|--------|--------|-----------------------------------------|
| HCU                     | 1/1/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                     | 1/2/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                     | 1/3/2026 |            |           | 9         |              |             |        | 9      | Security Fix                            |
| HCU                     | 1/3/2026 |            |           | 9         |              |             |        | 9      | Repeated the HCU                        |
| Enter new incident here |          |            |           |           |              |             |        |        |                                         |
| Total downtime in mins  |          | 0          | 0         | 36        | 0            | 0           | 0      | 36     |                                         |
| YTD (01/06/26) SLA      |          | 100.00%    | 100.00%   | 99.53%    | 100.00%      | 100.00%     |        | 99.53% |                                         |
| SLA for 2026            |          | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     |        | 99.99% |                                         |

### Incidents \[Vishal]

- Unplanned downtime: Dec 28th, 29th, 
  - Security incident.
  - Postmortem to be published soon.


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

No change since last time.

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**
- Bugfixes:
    - [[v1.8] Fix import of arguments](https://github.com/onflow/cadence/pull/4389)
        - [Improve testing](https://github.com/onflow/cadence/pull/4391)
    - [[v1.8] Check move operator for resource-typed extra arguments](https://github.com/onflow/cadence/pull/4397)
- Improvement
    - [[v1.8] Extend defensive check for member accesses on values of built-in types](https://github.com/onflow/cadence/pull/4392)
    - [[v1.8] Check static types of arguments passed to contract constructor](https://github.com/onflow/cadence/pull/4394)
- Tools
    - [[lint] Ignore invalid type in unused result analyzer](https://github.com/onflow/cadence-tools/pull/552)
    - [[lint] Add string concat analyzer](https://github.com/onflow/cadence-tools/pull/553)
    - [[lint] Add a new analyzer which detects leaks of authority](https://github.com/onflow/cadence-tools/pull/551)
    - [[lint] Add suggested fix to redundant cast diagnostic](https://github.com/onflow/cadence-tools/pull/554)
    - [[LS] Optimize inlay hints](https://github.com/onflow/cadence-tools/pull/556)
    - [[LS] Add a new code action to split elements on separate lines](https://github.com/onflow/cadence-tools/pull/557)
- chores
    - [Port fixes from v1.8](https://github.com/onflow/cadence/pull/4395)
    - [Check move operator for resource-typed extra arguments](https://github.com/onflow/cadence/pull/4400)
    - [[test] Update to Cadence v1.9.2](https://github.com/onflow/cadence-tools/pull/559)
    - [[languageserver] Update to Cadence v1.9.2](https://github.com/onflow/cadence-tools/pull/560)
    - [[lint] Update to Cadence v1.9.2](https://github.com/onflow/cadence-tools/pull/558)
    - [Update to Cadence v1.9.2](https://github.com/onflow/flixkit-go/pull/100)
    - [Update to Cadence v1.9.2](https://github.com/onflow/flow-cli/pull/2236)
    - [Update to Cadence v1.9.2](https://github.com/onflow/flow-emulator/pull/934)
    - [Update to Cadence v1.9.2](https://github.com/onflow/flow-evm-gateway/pull/942)
    - [Update to Cadence v1.9.2](https://github.com/onflow/flow-go/pull/8262)
    - [[v0.44] Update Cadence to v1.8.9](https://github.com/onflow/flow-go/pull/8264)
    - [[v0.44] Update to Cadence v1.8.10](https://github.com/onflow/flow-go/pull/8266)
    - [[v0.44] Update to cadence 1.8.11](https://github.com/onflow/flow-go/pull/8291)
    - [Update to cadence 1.8.11-rc.1](https://github.com/onflow/flow-go-internal/pull/7133)
    - [Update to cadence 1.8.11-rc.2](https://github.com/onflow/flow-go-internal/pull/7135)
    - [Update to Cadence v1.9.2](https://github.com/onflow/flow-go-sdk/pull/970)
    - [Update to Cadence v1.9.2](https://github.com/onflow/flowkit/pull/185)

**Cadence Execution**

- Security incident mitigation
    - [Add account restricting](https://github.com/onflow/flow-go/pull/8271)
    - [Add Service account overide](https://github.com/onflow/flow-go/pull/8273)
    - [[v0.44] Allow transactions authorized by restricted account but payed by service account](https://github.com/onflow/flow-go/pull/8275)
        - [Review comments changes for 8275](https://github.com/onflow/flow-go/pull/8278)
    - [Restrict EVM access to EOAs with proven malicious activity](https://github.com/onflow/flow-go/pull/8272)
        - [Suggestion to 8272: move the msg.From check to proc.run](https://github.com/onflow/flow-go/pull/8286)
    - [Access node fix script execution with evm](https://github.com/onflow/flow-go/pull/8290)
- Storehouse
    - [Storehouse: Background indexing](https://github.com/onflow/flow-go/issues/8244)
    - [[Storehouse] Storehouse checkpoint validator](https://github.com/onflow/flow-go/pull/8257)
- Concurrent execution
    - [[FVM] Fix concurent execution metrics](https://github.com/onflow/flow-go/pull/8261)
- Improvements
    - Atree: [[SECURITY] Add more guidelines for security disclosures](https://github.com/onflow/atree/pull/592)
- Network upgrade
    - [Mainnet28](https://github.com/onflow/dapper-flow-hosting/pull/1821)
    - [mainnet28 update evm gateway configs](https://github.com/onflow/dapper-flow-hosting/pull/1823)
    - [not require approvals for mainnet28 spork](https://github.com/onflow/dapper-flow-hosting/pull/1824)
    - [Hardcode last sealed block and snapshot heights for mainnet28 spork](https://github.com/onflow/dapper-flow-hosting/pull/1822)
    - [update mainnet28 node version to v0.44.4](https://github.com/onflow/dapper-flow-hosting/pull/1827)
    - [change block height for reading last sealed block](https://github.com/onflow/dapper-flow-hosting/pull/1828)
    - [Fix reading root view](https://github.com/onflow/dapper-flow-hosting/pull/1800)
    - [fix root block creation](https://github.com/onflow/dapper-flow-hosting/pull/1829)
    - [skip migration](https://github.com/onflow/dapper-flow-hosting/pull/1830)
    - [use v0.44.5 for mainnet28](https://github.com/onflow/dapper-flow-hosting/pull/1831)
    - [[After Mainnet28 Spork] Restore the state read after mainnet28 spork](https://github.com/onflow/dapper-flow-hosting/pull/1826)
    - [Create disks from latest mainnet & devnet snapshots](https://github.com/onflow/ff-sre-infrastructure/pull/998)
- TPS loader
    - [Add benchmark tests](https://github.com/onflow/flow-execution-effort-estimation/pull/80)
    - [Extract certain transactions for reusability.](https://github.com/onflow/flow-execution-effort-estimation/pull/81)
    - [Add account reuse](https://github.com/onflow/flow-execution-effort-estimation/pull/82)
- Tests
    - [Add tests to check some account keys on mainnet](https://github.com/onflow/flow-e2e-tests/pull/70)

**Flow EVM**

- Core
    - Improvement
        - [Support abi encoding of EVM tuple types](https://github.com/onflow/flow-go/issues/8020)
- Gateway
    - bugfix:
        - [Emit ApiErrorOccurred metric for request timed out errors](https://github.com/onflow/flow-evm-gateway/issues/931)
    - Improvement
        - compatibility: [Use lower-case format for EVM addresses in all endpoints](https://github.com/onflow/flow-evm-gateway/issues/929)
        - performance: [Optimize performance of endpoints dealing with receipts](https://github.com/onflow/flow-evm-gateway/pull/935)
    - chore:
        - [[Back-port] Truncate amount on `COA.withdraw` call to maximum Flow token vault precision](https://github.com/onflow/flow-go/pull/8258)

**This sprint**

- Cadence Language
    - security incident follow-up, FCM support
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Continue [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
  - Continue [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Continue [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
  - Maybe start: [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
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

### **Core Protocol** \[Alex]

Q1 Cycle Objective(s):
* Support DeFi strategy [IN PROGRESS]
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Building towards few Permissionless Collection Nodes [IN PROGRESS]
* Downgrade historical node hardware

**Last sprint completed, ongoing and starting**

* <ins>Attack recovery</ins>
  * taking down mainnet 27
  * analysis of attack and movement of funds
  * supporting Sporks & HCUs 
  * Supporting Coinbase get Rosetta running (**ongoing**)
  * generating transactions to recover fraudulent funds
  * supported FVM change to allow the service account to control any other account
  * support reclaiming tokens, additional analysis as needed, look into improved monitoring (**ongoing**)

* <ins>DeFi strategy</ins>
   * Flow Credit Markets \[FCM] liquidation (**ongoing**) 

     **starting** _this sprint_: testing, addressing audit feedback 
    
* <ins>Building Towards Permissionless Collection Nodes</ins>
    * [Buffer for (out-of-order) inbound blocks](https://github.com/onflow/flow-go/issues/8170): resilience against resource-exhaustion attacks by an equivocating leader ([PR 8196](https://github.com/onflow/flow-go/pull/8196) **continued**)
    * Header Storage ([PR 8222](https://github.com/onflow/flow-go/pull/8222), work **ongoing**):  improved resilience by [differentiating between Consensus and Cluster Headers storage](https://github.com/onflow/flow-go/issues/4204)
    * **starting** _this sprint_:  Verifiability of Cluster Syn data in Byzantine scenarios  ([issue 8173)](https://github.com/onflow/flow-go/issues/8173)))

* <ins>Data Availability</ins>
  * PR reviews
  * optimistic sync caching layer design anf fork-aware execution result processing (temporarily deprioritized)
  * KROK Team
      * Done:
        - [[Access] Improve grpc converter tests. #8127](https://github.com/onflow/flow-go/issues/8127)     
        - [[Access] CollectionID and TransactionID don't validate length #8241](https://github.com/onflow/flow-go/issues/8241)
        - [[Access] Add endpoints to get transaction and results by block #8206](https://github.com/onflow/flow-go/issues/8206)

      * In Review:
        - [[Data Availability] Refactor events test in http package #7923](https://github.com/onflow/flow-go/issues/7923)
        - [[Data Availability] Update LatestPersistedSealedResult module to use storage lock #7611](https://github.com/onflow/flow-go/issues/7611)
        - [[Data Availability] Refactor subscription package #8093](https://github.com/onflow/flow-go/issues/8093)
        - [[Data Availability] Remove or adjust index reporter in execution data tracker #8135](https://github.com/onflow/flow-go/issues/8135)
        - [[Data Availability] Implement AncestorResultID check in ExecutionResultQueryProvider #7587](https://github.com/onflow/flow-go/issues/7587)
        - [[Data Availability] Rewrite backend execution data tests from scratch #8231](https://github.com/onflow/flow-go/issues/8231)

      * In Progress:
        
        - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)
        - [[Data Availability] Implement fork-aware Execution Data subscription Endpoints #8059](https://github.com/onflow/flow-go/issues/8059)
        - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
        - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
        - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)

      * On Hold ( Draft done, currently on pause since Taras moved to DeFi ):

        - [[Data Availability] Implement fork-aware Streaming Transaction Status Endpoints #7654](https://github.com/onflow/flow-go/issues/7654)

<!-- Commented out for conciseness, as we typically don't iterate over the milestone status in sprint kickoffs:
* Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 5 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 11/17 done, 3 in progress/review
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 6 done, 5 in progress/review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 3/7 done, 2 in progress/review
 -->

* <ins>Cryptography</ins>
  * Multi-SPoCK (**ongoing**):
    * SPoCK paper
    * Spearbit follow up (external researcher for pre-submission peer review)
  * Interview candidate for wallet team

---

### **DeFi** \[Vishal]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### Flow ALP & Flow Vaults:

- Arb bot deployment and alerting.
- Continue working through audit comments
- Completed development of the Arb bot
- Security audit with CD Security
- Submitted [FlowYieldVaultsEVM](https://github.com/onflow/FlowYieldVaultsEVM) contract for review
- Liquidation redesign


**This sprint**

- Continue working on the Liquidation re-design.
- Updates to the Arb bot.
- Supporting QuantStamp audit for FYV EVM.
- Implementing PyUSD (switching from USDF to PyUSD)

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

**MN28 Spork**
- [Create checklist and infra for MN28 spork](https://github.com/onflow/ff-sre-infrastructure/issues/1023)
- [Update MN secure endpoint DNS record for MN28](https://github.com/onflow/ff-sre-infrastructure/issues/1018)
- [Update ANs synthetic monitors to reference MN28](https://github.com/onflow/ff-sre-infrastructure/issues/1019)
- [Create alerts for MN28](https://github.com/onflow/ff-sre-infrastructure/issues/1017)
- [Remove MN27 alerts](https://github.com/onflow/ff-sre-infrastructure/issues/1020)

**Historical Nodes**
- [Create Historical Access Node for TN52](https://github.com/onflow/ff-sre-infrastructure/issues/994)

**FCM**
- [Create Instance for Flow Vaults Arb Bot](https://github.com/onflow/ff-sre-infrastructure/issues/999)
- [Create CloudRun Module to Run Account Balances Bot](https://github.com/onflow/ff-sre-infrastructure/issues/1003)
- [Create CloudRun Module to Run Arbitrage Bot](https://github.com/onflow/ff-sre-infrastructure/issues/1004)
- [Configure IAM Access for Arb bot on CloudRun](https://github.com/onflow/ff-sre-infrastructure/issues/1005)

**Support**
- [Increase Data Disks for TN53](https://github.com/onflow/ff-sre-infrastructure/issues/1000)
- [Create Doc on How to Provision Additional EVM GW Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/984)
- [Investigate `set-output` issue on private build workflow](https://github.com/onflow/ff-sre-infrastructure/issues/1015)

---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [In Progress]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**
* No updates


**This sprint**
* Add execution saturation panel to the public dashboard for surge pricing.

---
