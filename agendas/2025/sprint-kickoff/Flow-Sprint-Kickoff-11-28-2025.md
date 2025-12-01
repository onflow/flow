# Overview

### Team Wins 🎉

- We realized infra cost savings with historical nodes 16 to 23 downgraded to a single VM (thanks Manny)
- Completed [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) - new metering weights are now live on Mainnet.
- Compiler correctness testing - another run on shadow node, found 7 register mismatches in 110K blocks, getting very close to functional parity with interpreter.
- Cadence VM optimization that [generates subtype information](https://flow-foundation.slack.com/archives/C07NFGGAGHM/p1764096289230409?thread_ts=1763767664.350509&cid=C07NFGGAGHM) shows ~20% performance improvement (ns/op, allocs/op) over current VM.
- Cadence benchmark now uses transactions from TPS loader built for execution weights data collection modelling, which provides much more robust coverage of Cadence ooperations/functionality.
- EVM fusaka upgrade now live on Testnet, going live on Mainnet Dec 3rd, same day as ETH mainnet.

---

### Mainnet Uptime - Last 14 days (11/14/25 to 11/28/25) \[Vishal]


|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |     100%      |        0%         |
| Block Sealing           | 99.9%   |     100%      |        0%         |
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
| Total downtime in mins |            | 494        | 450       | 521       | 450          | 751        |               |
| YTD SLA                |            | 99.90%     | 99.91%    | 99.89%    | 99.91%       | 99.84%     |               |
| SLA for 2025           |            | 99.91%     | 99.91%    | 99.90%    | 99.91%       | **99.86%** |               |

### Incidents \[Vishal]

- Planned downtime:
    - Mainnet HCU on Monday, 9/20

- Unplanned downtime:
    - EVM GW downtime for 40 minutes: Friday,Nov 21st from 11:00 AM to 11:38 AM UTC (3:00 AM to 3:38 AM Pacific)


### Key Release Dates & Breaking Changes \[Vishal]

- Transaction Fee update as per [FLIP 351: Transaction Fee Update to Enable Inflation-Neutral Tokenomics](https://github.com/onflow/flips/pull/352)
  - Testnet: Mon, Dec 1st (see [announcement](https://forum.flow.com/t/upcoming-testnet-update-transaction-fee-changes-going-live-on-monday-dec-1/8405))
  - Mainnet: Thursday, Dec 4th (tentative)

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    9     | **24**  |
| Proposed    |      1      |    2    |     4      |    1     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     10     |    10    | **59**  |
| Total       |   **20**    | **52**  |   **18**   |  **21**  | **111** |

- [FLIP 346: Variable Transaction Fees - Execution Effort II](https://github.com/onflow/flips/blob/main/protocol/20251008-execution-effort-2.md) released.
- One new FLIP proposed - [FLIP 351: Transaction Fee Update to Enable Inflation-Neutral Tokenomics](https://github.com/onflow/flips/pull/352)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Improvements
    - [Fix mismatch indexing expression key transfer mismatch between interpreter and compiler](https://github.com/onflow/cadence/pull/4365)
    - [Decode/import/convert primitive capability static type as/to capability static type](https://github.com/onflow/cadence/pull/4341)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Feature
        - [[Compiler] Meter memory in compiler](https://github.com/onflow/cadence/pull/4360)
    - Performance optimizations:
        - [Avoid conversion from StaticType to sema.Type during runtime sub-type checking](https://github.com/onflow/cadence/issues/3691)
            - [Cache static-authorization to sema-access conversion results](https://github.com/onflow/cadence/pull/4336)
            - [[Subtyping Generator] Sync `feature/subtype-gen` branch with `master`](https://github.com/onflow/cadence/pull/4339)
            - [[Subtyping Generator] Generate subtype check for runtime static-types](https://github.com/onflow/cadence/pull/4327)
            - [[Subtyping Generator] Test and improve generated runtime subtype check ](https://github.com/onflow/cadence/pull/4335)
            - [[Subtyping Generator] Simplify subtyping rules](https://github.com/onflow/cadence/pull/4340)
            - [[Subtyping Generator] Sync with master](https://github.com/onflow/cadence/pull/4343)
            - [Generate subtyping checking using a DSL](https://github.com/onflow/cadence/pull/4342)
            - [[Subtyping Generator] Always run the generated subtyping check and compare results](https://github.com/onflow/cadence/pull/4344)
        - [[Compiler] Skip visiting already visited imports](https://github.com/onflow/cadence/pull/4345)
        - [Optimize caching of computed results in checker](https://github.com/onflow/cadence/pull/4354)
    - bugfix
        - [[Compiler] Fix copying for default function invocation](https://github.com/onflow/cadence/pull/4347)
        - [[Compiler] Don't transfer key when indexing for reads](https://github.com/onflow/cadence/pull/4348)
        - [Transfer enum lookup result in interpreter](https://github.com/onflow/cadence/pull/4349)
        - [[Compiler] Fix transfer during contract deployment with arguments](https://github.com/onflow/cadence/pull/4358)
- Internal biugfix: [1](https://github.com/onflow/cadence-internal/pull/355), [2](https://github.com/onflow/cadence-internal/pull/354)
- Testing
    - [Test emit of inherited default destroy event](https://github.com/onflow/cadence/pull/4350)
    - [[Compiler] Add compiler benchmarks for FT transfer transaction](https://github.com/onflow/cadence/pull/4356)
- Tools
    - [[lint] Improve unused result linter](https://github.com/onflow/cadence-tools/pull/535)
    - [[lint] Update to Cadence v1.8.6](https://github.com/onflow/cadence-tools/pull/543)
- Chores
    - [Update GitHub actions, use Go version from go.mod file](https://github.com/onflow/cadence/pull/4362)
    - [Fix CI](https://github.com/onflow/cadence/pull/4363)
    - [Fix release workflow](https://github.com/onflow/cadence/pull/4366)
    - [Upgrade emulator](https://github.com/onflow/flow-cli/pull/2184)
    - [Update to Cadence v1.8.6](https://github.com/onflow/flow-emulator/pull/927)
    - [Update to Cadence v1.8.5](https://github.com/onflow/flow-go-sdk/pull/954)
    - [Update to Cadence v1.8.6](https://github.com/onflow/flow-go-sdk/pull/958)
    - [Update to Cadence v1.8.7](https://github.com/onflow/flow-go-sdk/pull/959)
    - [Update to Cadence v1.8.3](https://github.com/onflow/rosetta/pull/94)

**Cadence Execution**

- [FLIP 346: Variable Transaction Fees - Execution Effort II.](https://github.com/onflow/flips/pull/347)
    - [Update execution effort weights as per FLIP 346](https://github.com/onflow/flow-go/pull/8152)
    - [Update Execution Effort Weights](https://github.com/onflow/service-account/pull/400)
- [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
    - [All low-level storage operations have been reviewed for risk of state corrupion](https://github.com/onflow/flow-go/issues/7912)
        - [[Storage] Refactor index execution result](https://github.com/onflow/flow-go/pull/8005)
- Access node collection fetching improvements POC
    - [[Access] Remove sealed result index](https://github.com/onflow/flow-go/pull/8147)
- Cadence VM initiaization
    - [[Cadence VM] Enable Cadence VM by default behind build tag](https://github.com/onflow/flow-go/pull/8146)
- Improvement
    - prevent misuse that could lead to bugs: [Refactor with hotstuff.Distributor](https://github.com/onflow/flow-go/pull/8156)
- Bugfix
    - [Fix EVM gas overflow in FVM - port from internal](https://github.com/onflow/flow-go/pull/8181)
        - [ Fix EVM gas overflow in FVM  - port from internal to  v0.44](https://github.com/onflow/flow-go/pull/8180)
- Tools
    - [[Cadence VM] Improve re-execution tools](https://github.com/onflow/flow-go/pull/8166)
- Testing
    - [[Benchmark] Fix benchmark manual cmd](https://github.com/onflow/flow-go/pull/8153)
    - [[Testing] Add scripts for debugging integration tests](https://github.com/onflow/flow-go/pull/8164)
    - [[Testing] Skip wintermute test suite due to flakiness](https://github.com/onflow/flow-go/pull/8187)
- Docs
    - [Document computation profiling and download of all deployed contracts](https://github.com/onflow/flow-emulator/pull/906)
- chores
    - [Update to Cadence v1.8.5](https://github.com/onflow/flow-go/pull/8188)
    - [[Cadence VM] Update feature branch](https://github.com/onflow/flow-go/pull/8191)
    - [Update to Cadence v1.8.6](https://github.com/onflow/flow-go/pull/8192)
    - [[Cadence VM] Update feature branch ](https://github.com/onflow/flow-go/pull/8193)
    - [Update flow-go to include the execution effort weight changes](https://github.com/onflow/flow-emulator/pull/913)

**Flow EVM**
- Core
    - Bugfix
        - [Gas estimation fails for EIP-7702 transactions](https://github.com/onflow/flow-evm-gateway/issues/920)
            - [[Back-port] Apply any given `SetCodeAuthorization` list to `DryCall`](https://github.com/onflow/flow-go/pull/8160)
            - [Fix gas estimation insufficiency for `EIP-7702` transactions](https://github.com/onflow/flow-evm-gateway/pull/921)
- Gateway
    - Improvement
        - [Allow timeout configuration for JSON-RPC requests](https://github.com/onflow/flow-evm-gateway/pull/923)
    - Bugfix
        - [Deduplicate transactions on `BatchTxPool` prior to submission](https://github.com/onflow/flow-evm-gateway/pull/916)


**This sprint**

- Cadence Language
    - Continue compiler correctness testing
    - Continue tacklig compiler+VM tech-debt
    - Start another deep-dive on compiler+VM performace

- Cadence Execution
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Continue [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
  - Continue [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Continue [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
  - Continue [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
  - Maybe: New Trie research

- EVM
  - Continue: Deep-dive into EVM fees.
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
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]
* Building blocks for Collection Nodes Decentralization [IN PROGRESS]
* Downgrade historical node hardware [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  * PR reviews
  * KROK Team
      * Done:
        - [[Data Availability] Implement fork-aware Script Endpoints #7651](https://github.com/onflow/flow-go/issues/7651)
        - [[Access] TestMainCtxCancellationDuringRequestingExecutionData is flaky #7898](https://github.com/onflow/flow-go/issues/7898)
        - [[Data Availability] Improve Collection Endpoints error handling and documentation #7649](https://github.com/onflow/flow-go/issues/7649)
        - [[Data Availability] Refactor remaining backend structs to match updated execution state endpoints #7627](https://github.com/onflow/flow-go/issues/7627)
        - [[DataAvailability] Add getAccountKeys request and response to openapi #1658](https://github.com/onflow/flow/issues/1658)
        - [[Data Availability] Implement fork-aware Account Endpoints #7650](https://github.com/onflow/flow-go/issues/7650)
        - [[Data Availability] Implement fork-aware Registers Endpoints #7655](https://github.com/onflow/flow-go/issues/7655)

      * In Review:
        - [[Data Availability] Refactor events test in http package #7923](https://github.com/onflow/flow-go/issues/7923)
        - [[Data Availability] Update LatestPersistedSealedResult module to use storage lock #7611](https://github.com/onflow/flow-go/issues/7611)
        - [[Data Availability] Refactor subscription package #8093](https://github.com/onflow/flow-go/issues/8093)
        - [[Access] Optimize access integration tests runtime #7157](https://github.com/onflow/flow-go/issues/7157)
        - [[Access] Compatible Range in node version info does not reflect compatibility overrides #7014](https://github.com/onflow/flow-go/issues/7014)

      * In Progress:
        - [[Data Availability] Implement fork-aware Execution Data subscription Endpoints #8059](https://github.com/onflow/flow-go/issues/8059)
        - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
        - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
        - [[Access] Fix error codes for GetTransactionResultsByBlockID during HCU #8178](https://github.com/onflow/flow-go/issues/8178)

* Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 5 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 11/17 done
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 6 done, 5 in progress/review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 3/7 done, 2 in progress/review


* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team

* <ins>Cryptography</ins>
  * Multi-SPoCK:
    - Agreement with a researcher to help review the multi-SPoCK work (expected to start in January)
    - More progress on the paper
    - Adjustment of the definitions to claim "public key aggregation"
    - Review of other papers - DKG design and a PQC idea.


* <ins>Collectors submit votes for root block for spork bootstrapping</ins>
  * Testing and automation for network bootstrapping during a spork with decentralized collector nodes.
  * Addressing PR comments and merging in the changes to master.
  * Providing updates to DL for the changes to the Spork process for collection node participation.

* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * Finished [Proof of Collection Finality Design (pending feedback)](https://www.notion.so/flowfoundation/Proof-of-Collection-Finality-29c1aee1232480deb0c2e8d872e34ba9)
  * Created [issues for Proof of Collection Finality OKR](https://github.com/onflow/flow-go/issues/8057)
  * Auditing Collection Node engines for Permissionless changes
  * Started on issue [8170: BlockBuffer BFT improvement implementation](https://github.com/onflow/flow-go/issues/8170)
  * Updates to the requester engine to increase BFT resilience https://github.com/onflow/flow-go/issues/8063

* Other items not covered in OKRs:
  * Byzantine leader double-counting, addressing comments, implementing new approach: https://github.com/onflow/flow-go/pull/7918
  * Updates to the Access API for Schedule Transactions.


**This sprint**

* <ins>Data Availability</ins>
  * PR reviews
  * KROK Team 
    - Continue work on reviews and milestone 3 tasks

* <ins>Cryptography</ins>
  - Continue working on the Spock paper


* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * Continue implementation


* Other items not covered in OKRs:
  * Finish fix for [double-counting](https://github.com/onflow/flow-go-internal/issues/6127) and merge it


---

### **DeFi** \[Kan]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### Flow ALP & Flow Vaults:



**This sprint**

#### Flow ALP & Flow Vaults:


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- Fork Testing
  - Created Fork Testing video
  - Created Fork Testing doc for emulator
  - Added analytics to track forking usage
  - Updated Cadence Test Framework Docs to New Pragma Fork Testing Syntax
  - Improve forked network import aliasing in `flow.json` for Flow Emulator
  - Released DeFi Actions Forking Scaffold to Flow CLI

- Mobile
  - Worked on `fcl-react-native` fixing polyfills
  - Created a starter project "flow-expo-starter" with `fcl-react-native`
  - Create and tested a WalletConnect/Flow Wallet integration with `fcl-react-native`
  - Specced `react-native-sdk` architecture
  - Created React Native SDK connect UI

- React SDK Liquidity
  - Completed `Fund` component spec and mocks
  - Started building UI for `Fund` component

- Misc
  - Added Cadence import aliasing support to CLI/Dependency Manager
  - Fixed Cadence import aliasing bug in flowkit
  - Created docs for Cadence import aliasing with `flow.json`
  - Renamed gas language across tooling to compute
  - Documented React SDK Discovery WalletConnect options
  - Updated FCL Discovery docs for WalletConnect
  - Documented new FCL Discovery Options for FCL & React SDK


**This Sprint**

- Fork Testing
  - Document dependency mocking for forked network

- Mobile
  - Complete `fcl-react-native` WalletConnect implementation
  - Test Expo starter and Flow Wallet/WalletConnect
  - Create new React Native SDK for mobile
  - Create shared React SDK hooks package for usage in new React Native lib
  - Switch existing hooks usage to the new shared package

- React SDK Liquidity
  - Build UI for Fund component
  - Build demo for `Fund` component in React SDK playground
  - Build Moonpay fiat on-ramp integration for `Fund` component
  - Build Relay crypto on-ramp integration for `Fund` component

- Misc
  - Deploy `FlowCron` to mainnet
  - System transactions support in `flow blocks get`


---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**Cost Optimization**


**Support**


**Security**


---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Published the transaction fees FLIP.


**This sprint**

* Roll out the transaction fee increase on testnet on Mon, Dec 1st.
* Roll out the transaction fee increase on mainnet on Thursday, Dec 4th.

---
