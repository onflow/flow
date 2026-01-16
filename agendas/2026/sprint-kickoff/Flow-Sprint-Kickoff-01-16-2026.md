# Overview

### Team Wins 🎉

- Attack recovery is now complete - all accounts have been unrestricted.
- CB has resumed Flow deposit and withdrawal.
- Completed Execution node POC that separetes ledger from the EN process & enables zero-downtime EN upgrade.


---

#### YTD SLA \[Vishal]

| Incident/upgrade       | Date     | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Total  | Comments                                |
|------------------------|----------|------------|-----------|-----------|--------------|-------------|--------|--------|-----------------------------------------|
| HCU                    | 1/1/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                    | 1/2/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                    | 1/3/2026 |            |           | 9         |              |             |        | 9      | Security Fix                            |
| HCU                    | 1/3/2026 |            |           | 9         |              |             |        | 9      | Repeated the HCU                        |
| EVM GW Issue           | 1/7/2026 |            |           | 9         |              |             | 32     | 32     | Public EVM endpoint unavailable         |
| Total downtime in mins |          | 0          | 0         | 36        | 0            | 0           | 32     | 68     |                                         |
| YTD (01/06/26) SLA     |          | 100.00%    | 100.00%   | 99.53%    | 100.00%      | 100.00%     |        | 99.68% |                                         |
| SLA for 2026           |          | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     |        | 99.99% |                                         |

### Incidents \[Vishal]

- Jan 7th, 11:23 AM Pacific to 11:55 AM Pacific EVM Public endpoint became unusable.
  - Root cause: Node operator misconfigured the endpoint (human error).

- Jan 13th: Rolling upgrade to `v0.44.19` to remove additional privileges granted to Service Account (no downtime)

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

- Compiler / VM
    - [[Cadence VM] Build execution image with Cadence VM enabled](https://github.com/onflow/flow-go/pull/8247)
    - correctness testing: [[Cadence VM] Improve compiler/VM / interpreter comparison tool](https://github.com/onflow/flow-go/pull/8221)
    - Improvements: 
        - [[Compiler] Validate static argument types in contract initializer](https://github.com/onflow/cadence/pull/4411)
        - Performance:
            - [[Compiler] Optimize call frames in the VM](https://github.com/onflow/cadence/pull/4380)
    - bugfix
        - [[Compiler] Remove additional transfers of indexing values in swap statements](https://github.com/onflow/cadence/pull/4413)
- Improvements
    - Tools
        - [Parenthesize pretty-printed types](https://github.com/onflow/cadence/pull/4402)
        - [Parenthesize sema and static type strings](https://github.com/onflow/cadence/pull/4407)
        - [Improve comments in generated Go code ](https://github.com/onflow/cadence/pull/4414)    
        - [Add the variable declaration value's actual type to the elaboration](https://github.com/onflow/cadence/pull/4415)
        - [Add support for decoding into cadence.Address and *big.Int](https://github.com/onflow/cadence/pull/4412)
    - Performance:
        - [Avoid unnecessary repeated type conversions](https://github.com/onflow/cadence/pull/4409)
- bugfixes
    - [Check move operator for resource-typed extra arguments](https://github.com/onflow/cadence/pull/4400)
    - [Add suggested fix for invalid reference to optional type error](https://github.com/onflow/cadence/pull/4408)
    - internal: [1](https://github.com/onflow/cadence-internal/pull/360), [2](https://github.com/onflow/cadence-internal/pull/361), [3](https://github.com/onflow/cadence-internal/pull/362), [4](https://github.com/onflow/cadence-internal/pull/371)
    - tooling:
        - [[LS] Fix code action for replacement diagnostic](https://github.com/onflow/cadence-tools/pull/562)
- chores
    - [[v1.8] Port v1.8.12-rc.1](https://github.com/onflow/cadence/pull/4403)
    - [Port internal v1.8.12-rc.1](https://github.com/onflow/cadence/pull/4404)
    - [[v0.44] Update to Cadence v1.8.12](https://github.com/onflow/flow-go/pull/8304)
    - [Update to Cadence v1.9.3](https://github.com/onflow/flow-go/pull/8298)
    - [Update to Cadence v1.9.4](https://github.com/onflow/flow-go/pull/8318)
    - [[v0.44.18-rc] Update to Cadence v1.8.12-rc.1](https://github.com/onflow/flow-go-internal/pull/7138)
    - [Update to Cadence v1.9.3](https://github.com/onflow/flow-go-sdk/pull/974)
    - [Update to Cadence v1.9.4](https://github.com/onflow/flow-go-sdk/pull/975)
    - [Update to Cadence v1.9.5](https://github.com/onflow/flow-go-sdk/pull/981)

**Cadence Execution**

- Related to security incident remediation:
    - [Revert: Add service account override](https://github.com/onflow/flow-go/pull/8324)
- Concurrent execution
    - [[FVM] Fix concurent execution metrics](https://github.com/onflow/flow-go/pull/8261)
    - [[FVM] Expose transaction index to Cadence](https://github.com/onflow/flow-go/pull/8252)
- Storehouse
    - [[Storehouse] Storehouse checkpoint validator](https://github.com/onflow/flow-go/pull/8257)
    - [Move ledger to standalone service](https://github.com/onflow/flow-go/issues/8308)
        - [[Breaking Change] Normalize nil payload value encoding to empty slice](https://github.com/onflow/flow-go/pull/8307)
- Improvement:
    - TPS loader
        - [Add account reuse](https://github.com/onflow/flow-execution-effort-estimation/pull/82)
    - performance: 
        - [[FVM] Refactor EVM injection and Cadence Runtime creation](https://github.com/onflow/flow-go/issues/8301)
            - [[FVM] Add chain as a parameter to the runtime pool](https://github.com/onflow/flow-go/pull/8302)
            - [[FVM] Resolve reusable runtime environment import cycle](https://github.com/onflow/flow-go/pull/8303)
            - [[FVM] Make Chain a non-optional part of context construction](https://github.com/onflow/flow-go/pull/8312)
            - [[FVM] Change InternalEVM injection to happen once](https://github.com/onflow/flow-go/pull/8313)
            - [[FVM] Split the Script and Transction runtimes earlier in the stack to avoid missuse](https://github.com/onflow/flow-go/pull/8321)
- Bugix:
    - internal: [1](https://github.com/onflow/atree-internal/pull/17)
- Tech debt
    - [Add account key metadata utility functions to FVM pkgs](https://github.com/onflow/flow-go/pull/8315)
    - [Remove public key deduplication migration and diff key program](https://github.com/onflow/flow-go/pull/8316)
    - Code cleanup: [[FVM] Remove unused ExecutedCollectionConsumer](https://github.com/onflow/flow-go/pull/8306)


**Flow EVM**

- Core
    - Related to security incident remediation:
        - [Add EVM function to reclaim ERC20 tokens from attacker's EOA addresses](https://github.com/onflow/flow-go/pull/8293)
        - [[Flow EVM] Add test cases for restricted EOA functionality](https://github.com/onflow/flow-go/pull/8297)
        - [[Flow EVM] Add functionality to restrict EOAs from accessing EVM](https://github.com/onflow/flow-go/pull/8310)
    - bugfix
        - [Panic on FLOW remainder in UInt to UFix64 conversion](https://github.com/onflow/flow-go/issues/6856)
            - [Truncate amount on `COA.withdraw` call to maximum Flow token vault precision](https://github.com/onflow/flow-go/pull/6877)
- Gateway
    - Improvement
        - [Add metric to track the Flow total supply on each block](https://github.com/onflow/flow-evm-gateway/pull/949)
        - [Add a metric to count the EVM block processing time during event ingestion](https://github.com/onflow/flow-evm-gateway/pull/944)
        - Performance
            - [Remove tx trace generation & storage from ingestion engine](https://github.com/onflow/flow-evm-gateway/pull/939)

**This sprint**

- Cadence Language
    - security incident follow-up, FCM support
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete enabling EN zero-downtime HCU
    - Continue testing [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
    - Park [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
    - On-hold [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
    - On-Hold [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
    - On-Hold: [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
    - On-Hold: New Trie research

- EVM
    - On-Hold, FCM support


**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q1 Cycle Objective(s):
* Support DeFi strategy [IN PROGRESS]
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* Building towards few Permissionless Collection Nodes [PAUSED]
* SPoCK Research [IN PROGRESS]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**

* <ins>Attack recovery</ins>
  * Forensic analysis to unrestrict additional accounts.
  * FT recovery from attacker account - composing transactions, coordinating service committee signing.
  * Bringing Coinbase back online

* <ins>Building Towards Permissionless Collection Nodes</ins>
  * Created [new set of issues](https://github.com/onflow/flow-go/issues/8325) for pending blocks processing BFT improvements
  * Total User Stories: 35
    - Done: 5
    - In Review: 1
    - In Progress: 4
  * Work on this OKR will be paused

* <ins>Data Availability</ins>
  * PR reviews
  * optimistic sync caching layer design anf fork-aware execution result processing (temporarily deprioritized)
  * KROK Team
      * Data Availability
      * Done:
        - [[Data Availability] Implement fork-aware Execution Data subscription Endpoints #8059](https://github.com/onflow/flow-go/issues/8059)
        - [[Data Availability] Rewrite backend execution data tests from scratch #8231](https://github.com/onflow/flow-go/issues/8231)
        - [[Data Availability] Remove or adjust index reporter in execution data tracker #8135](https://github.com/onflow/flow-go/issues/8135)
        - [[Data Availability] Implement ParentExecutionResultID check in ExecutionResultProvider #8347](https://github.com/onflow/flow-go/issues/8347)

      * In Review:
        - [[Data Availability] Refactor events test in http package #7923](https://github.com/onflow/flow-go/issues/7923)
        - [[Data Availability] Update LatestPersistedSealedResult module to use storage lock #7611](https://github.com/onflow/flow-go/issues/7611)
        - [[Data Availability] Refactor subscription package #8093](https://github.com/onflow/flow-go/issues/8093)
        - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)
        - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
        - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
        - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)
        - [[Data Availability] Design and develop new unit tests for streaming account statuses endpoints (backend) #8329](https://github.com/onflow/flow-go/issues/8329)
        - [[Data Availability] Design and develop new unit tests for streaming events endpoints (backend) #8328](https://github.com/onflow/flow-go/issues/8328)
        - [[Data Availability] Turn on integration & unit tests that were skipped due to active work on optimistic sync package #8331](https://github.com/onflow/flow-go/issues/8331)

      * In Progress:
      	- All current tasks in review, working on fixes/remarks to close them due to upcoming pause.

      * On Pause ( Draft done, currently on pause since Taras moved to DeFi ):

        - [[Data Availability] Implement fork-aware Streaming Transaction Status Endpoints #7654](https://github.com/onflow/flow-go/issues/7654)
  * Work on this OKR will be paused.

* <ins>Cryptography</ins>
  * Spearbit: agreement concluded - legal review ongoing
  * paper editing:
    * definitions and security of Multi-SPoCK and Aggregate Multi-SPoCK (done)
    * currently writing the BLS-Multi-SPoCK construction


---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Switch from USDF to PyUSD vault to unblock Peak Money ✅
- Address Deposit Rate related review comments received from Quantstamp on the FCM contract ✅
- Review and address Quantstamp audit comments on the FYV and FlowAction contracts - In Progress
- Add stabilityFee parameter for Protocol Stability [#85](https://github.com/onflow/FlowCreditMarket/issues/85) - In progress
- Insurance fund implementation [#84](https://github.com/onflow/FlowCreditMarket/issues/84) - In review, fixing remarks
- Wrong calculation FlowCreditMarket->perSecondInterestRate [ #110](https://github.com/onflow/FlowCreditMarket/issues/110) - found possible issue, adding fix 
- FYV front-end
  - [#70](https://github.com/onflow/FlowYieldVaults-fe/pull/70) ✅
    - Integrate backend pending api to get pending evm transactions
    - Add network status banner when network is having issues, notify the user of degraded service.
  - EVM: Allow user claiming refund if posision creation fails [#73](https://github.com/onflow/FlowYieldVaults-fe/issues/73)
- Bug fix [129](https://github.com/onflow/FlowYieldVaults/issues/129) to allow withdrawal from FYV on the EVM side ✅
- Doc site update [1626](https://github.com/onflow/docs/pull/1626)
- Redesign of the liquidation process: [87](https://github.com/onflow/FlowCreditMarket/issues/87)
  - Implemented manual liquidation [93](https://github.com/onflow/FlowCreditMarket/issues/93) - In review
  - Implement basic DEX interface for automated liquidation [94](https://github.com/onflow/FlowCreditMarket/issues/94) - In review
- Setting up the Testing framework [#122](https://github.com/onflow/FlowYieldVaults/issues/122) - In progress
- FCM Whitepaper [#106](https://github.com/onflow/FlowCreditMarket/issues/106) - broken up into short-term and long-term milestones (blog, technical note, whitepaper)

**This sprint**

- Continue on all the issues in-progress ☝️
- Review QuantStamp audit comments for FYV EVM contract
- Respond to Quantstamp's **FCM** review comments with the new changes.


---


### New OKRs

Core protocol, Cadence and Execution team will be working on FCM, Security and Performance related OKRs starting this sprint.


### Security [Jan]

**Done Last Sprint**

- In-house financial analytics & fraud detection tooling
  - transaction & account trail  
   - Created product spec (wireframes, technical docs, API spec) for 

**This Sprint**

- [Cadence security improvements](https://github.com/onflow/cadence-internal/issues/367)
  - Continue work on defensive code
  - Start tech-debt review
  - Start external audit of the exploited functionality
- Complete update of bug bounty program
- Start Execution node fraud detection (storage layer)
- In-house financial analytics & fraud detection tooling
  - Continue: off-chain anomaly detection
  - Continue: transaction & account trail
   - Address feedback on API proposal for financial analytics tool
   - Begin building the UI for the financial analytics tool
   - FYV Forking Simulation
- Evaluate existing anomaly detection tools (contract / Tx anomalies)

### Performance [Jan]

- Continue: Concurrent Tx execution
- Continue: Scheduled transactions performance deep-dive
- Start: Cross-vm bridging performance deep-dive

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- React SDK
  - Finished React Native SDK Fund component UI 
  - Updated React SDK starter project to latest nextjs version (From 15 to 16)
  - Completed React Native SDK Fund component UI to be like React SDK one
  - Added React Native SDK Fund component example to Starter project
  - Tested Fund component in Starter project live on mobile device to verify data flow
  - Added developer notice in Discovery on testnet if WalletConnect is not setup

- Misc
  - Created command for converting keys in flow.json to file pattern
  - Added warning if keys are detected to use command to convert to file pattern
  - Created technical content to support post mortem marketing efforts
  - Update ai-data-retriever with 3 more problems
  - Test web search usage in ai-data-retriever
  - Create FlowCron usage docs and add to docs "Cadence/Advanced Concepts" section
  - Restore DefiLlama TVL Helper affected by network halt
  - Investigate flow-go issue affecting forking + CLI release
  - Update VSCode JSON Schema Resolution to support latest flow.json changes
  - Add support for block height pins to dependency manager
  - Add support for GetAccountAtBlockHeight RPC to flowkit
  - Add advanced network resolutions to test framework fork mode to align with emulator
  - Fix Flow CLI flow blocks get block seals output
  - Update Cadence Test Framework Docs to Latest Syntax
  - Support Flow Yield Vaults Fork Testing Efforts
  - Investigate strategies for EVM state manipulation in Cadence Test Framework
  - Create Cadence Profiling Command
  - Created article on on-chain SVG NFTs for marketing
  - Created article on on-chain Cadence vs Solidity forking


**This Sprint**

- React SDK
  - Add react-sdk and react-native-sdk starters creation options during flow cli init
  - Update react-native-sdk documentation

- Misc
  - Document Cadence Profiling Command & Share with Find Team
  - Support Flow Yield Vaults Fork Testing Efforts
  - Support financial analytics tool building
  - Fix fcl-js playground workflow problem after latest release workflow upgrade
  - Create more marketing materials from a technical angle


---

### Applications / Wallet [Jeff]

**Done last sprint**

- Shipped the Blocto Keystore migration workflow on all platforms.
  - Replaces user's old blocto keys with new recovery phrase derived keys.

**This sprint**

- Ship version 3.1, adding EOA support on all platforms. 

---

### **Infra** \[Manny]

**Done last sprint**

**MN28 Spork**


**Historical Nodes**


**FCM**


**Support**


---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [In Progress]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**
* No updates


**This sprint**
* No Updates

---
