# Overview

### Team Wins 🎉

- Approved 3 pending Cadence Flips ([1](https://github.com/onflow/flips/issues/359)[2](https://github.com/onflow/flips/issues/357), [3](https://github.com/onflow/flips/issues/355)) adding new features.
- Optimized transaction scheduler deployed on Mainnet.
- Completed testing of [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571), updated fees contract deployed on Mainnet and fee collection is now sharded on 3 child accounts.
- Kicked of the internal testing for `vaults.flow.com`

---

#### YTD SLA \[Vishal]

| Incident/upgrade   | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                         |
|--------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|--------------------------------------------------|
| HCU                | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                                 |
| HCU                | 1/6/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| EVM GW Issue       | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable                  |
| HCU                | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| HCU                | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| Sealing halt       | 2/11/2026 |            |           | 7         |              |             |        | 7       | FF and DL execution nodes went OOM and restarted |
| HCU                | 2/13/2026 |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| Sealing Halt       | 2/23/2026 |            | 240       | 240       |              |             |        | 240     | Consensus halted                                 |
| HCU                | 2/24/2026 |            |           | 0.13      |              |             |        | 9       | EN update caused a sealing halt                  |
| Total downtime     |           | 0          | 0         | 68        | 0            | 0           | 32     | 100     |                                                  |
| YTD (03/12/26) SLA |           | 100.00%    | 99.76%    | 99.69%    | 100.00%      | 100.00%     | 99.97% | 99.66%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- No planned downtime

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    9    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **55**  |   **19**   |  **21**  | **115** |

- No new FLIP added

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

**Done last sprint**

**Cadence Language**

- Flips (new features):
    - adds for-in loop support for dictionaries: [FLIP 359: Allow for-in loop over dictionary keys](https://github.com/onflow/flips/issues/359)
    - standard lib addition for finding min/max of comparable values: [FLIP 357: Add Comparison Functions to Cadence](https://github.com/onflow/flips/issues/357)
    - improves input validation: [FLIP 355: Cadence Guard Statement](https://github.com/onflow/flips/issues/355)
- Testing
    - [Assert pretty instructions](https://github.com/onflow/cadence/pull/4451)
- Tools:
    - [[lint] Add support for applying suggested fixes](https://github.com/onflow/cadence-tools/pull/592)

**Cadence Execution**
- Logging improvement: [Improve debug logs for mismatching events](https://github.com/onflow/flow-go/pull/8479)
- Ops/Util improvement: [[Util] add subcommand to remove execution fork](https://github.com/onflow/flow-go/pull/8465)

**Flow EVM**

- Core
    - Cadence testing tramework improvement to facilitate testing of Solidity contracts: [Add `EVM` helper functions for testing environment](https://github.com/onflow/flow-go/pull/8391)
    - bugfix: [ Fix padding logic on `EncodeBytes` for data with multiple chunks](https://github.com/onflow/flow-go/pull/8425)        

**This sprint**

- Cadence Language
    - Continue work on security improvements
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Test conscurrent execution on one TN EN.
    - Test token supply tracking on one TN EN.
    - On-hold [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
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
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* Building towards few Permissionless Collection Nodes [PAUSED]
* SPoCK Research [IN PROGRESS]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**


* <ins>Cryptography</ins>

Last sprint:

- SPoCK paper: 
  - explored different ways with Wilson to improve the security definitions of Multi-SPoCK - wrote a new proposition to be reviewed by Wilson next week
  - Wilson is still reviewing one edge case of identity keys 
  - checking 2 new external papers for possible references around batch verification

- cryptography module: fixing breaking changes in ECDSA with Go1.26 (ongoing slowly) 

- security reports: helping with reports triaging

Next sprint:

- SPoCK paper: validate the Multi-SPoCK definition and update the proofs - move to Aggregate-Multi-SPoCK
- continue on security reports
- cryptography module if time allows

---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
    - [Second review Flow ALP: 0/32](https://github.com/onflow/FlowALP/issues/209)
    - [FlowActions: 18/20](https://github.com/onflow/FlowActions/issues/95)
    - [FYV: 11/12](https://github.com/onflow/FlowYieldVaults/issues/131)
    - [FYV EVM: 12/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP

    - KROK Team:
        * Done:
        - [[FlowALP] Oracle Failure & Manipulation Testing #149 ](https://github.com/onflow/FlowALP/issues/149)
        - [[FlowALP] Multiple Collateral Types & Cross-Asset Operations Testing #148 ](https://github.com/onflow/FlowALP/issues/148)
        - [[FlowActions] FLOW-15 Unfinished TODOs #110 ](https://github.com/onflow/FlowActions/issues/110)
        - [[FlowALP] Multi-Position Scenarios Testing #147 ](https://github.com/onflow/FlowALP/issues/147)
        - [[FlowYieldVaults] Added script from observer service #205 ](https://github.com/onflow/FlowYieldVaults/issues/205)
        
        - [[FCMObserver] Update FlowALP submodule and replace FlowALPv0 event with FlowALPEvents contract #51 ](https://github.com/onflow/fcm-observer/issues/51) 
        - [[FCMObserver] Add rebalancer metrics from FYV project #39 ](https://github.com/onflow/fcm-observer/issues/39)
        - [[FCMObserver] Move get_beta_users_active.cdc to FlowALP #58 ](https://github.com/onflow/fcm-observer/issues/58)
        - [[FCMObserver] ALP: Average rebalancing cost (P2) #16 ](https://github.com/onflow/fcm-observer/issues/16)
        - [[FCMObserver] FYV: Rebalances per hour (P1) #21 ](https://github.com/onflow/fcm-observer/issues/21)
        - [[FCMObserver] FYV: Average rebalancing cost (P2) #22 ](https://github.com/onflow/fcm-observer/issues/22)
        - [[FCMObserver] FYV: Liquidations avoided (count and amount, underestimated) (P2) #24 ](https://github.com/onflow/fcm-observer/issues/24)
        - [[FCMObserver] FYV: Rebalance Up events (HF < healthy range) (P1) #25 ](https://github.com/onflow/fcm-observer/issues/25)
        - [[FCMObserver] FYV: Rebalance Down events (HF > healthy range) (P1) #26 ](https://github.com/onflow/fcm-observer/issues/26)
        - [[FCMObserver] Total assets borrowed (P2) #33 ](https://github.com/onflow/fcm-observer/issues/33)
        - [[FCMObserver] Assets backing MOET (reserve backing) (P2) #36 ](https://github.com/onflow/fcm-observer/issues/36)
        - [[FCMObserver] Add integration tests for the observer #12 ](https://github.com/onflow/fcm-observer/issues/12)
        - [[FCMObserver] Move all scripts to FlowALP repo #53 ](https://github.com/onflow/fcm-observer/issues/53)
        - [[FCMObserver] Set up tests on CI #54 ](https://github.com/onflow/fcm-observer/issues/54)
        - [[FCMObserver] Add unit tests for event handlers #56 ](https://github.com/onflow/fcm-observer/issues/56)
        - [[FCMObserver] Add metric to track script failures #61 ](https://github.com/onflow/fcm-observer/issues/61)
        - [[FCMObserver] Add metrics for successful/bad event handler execution #66 ](https://github.com/onflow/fcm-observer/issues/66)
        - [[FCMObserver] Update flow_config.json file with names of real contracts #68 ](https://github.com/onflow/fcm-observer/issues/68)
        - [[FCMObserver] Add metric for successful script execution (counter) #70 ](https://github.com/onflow/fcm-observer/issues/70)
        - [[FCMObserver] Handle pool ID in FYV metrics #73 ](https://github.com/onflow/fcm-observer/issues/73)
        - [[FCMObserver] Do not depend on pool ID to be 0 in code #74 ](https://github.com/onflow/fcm-observer/issues/74)
        - [[FCMObserver] Handle LiquidationExecutedViaDex event #78 ](https://github.com/onflow/fcm-observer/issues/78) 
        - [[FCMObserver] Update event types to be consistent with FlowALP v0 version rather than with main #82 ](https://github.com/onflow/fcm-observer/issues/82)
        - [[FCMObserver] Total turnover (total assets traded: inflow + outflow) (P3) #31 ](https://github.com/onflow/fcm-observer/issues/31)
        - [[FCMObserver] FYV: Number of rebalancing failures (P1) #23 ](https://github.com/onflow/fcm-observer/issues/23)
        - [[FCMObserver] Insurance balance (amount of interest paid via MOET balance) (P2) #32 ](https://github.com/onflow/fcm-observer/issues/32)
        - [[FCMObserver] ALP: Liquidations avoided (count and amount, underestimated) (P2) #18 ](https://github.com/onflow/fcm-observer/issues/18)
        - [[FCMObserver] Total number of vaults (P2) #28 ](https://github.com/onflow/fcm-observer/issues/28)
        
                
      * In Review: 
        - [[FlowALP] On-chain oracle failure testing #256 ](https://github.com/onflow/FlowALP/issues/256) 
        - [[FlowALP] FLO-2: setInsuranceRate() and setStabilityFeeRate() Retroactively Applies New Rates and Fails to Update Interest Rates #211 ](https://github.com/onflow/FlowALP/issues/211)
        - [[FlowALP] Liquidation Edge Cases #173 ](https://github.com/onflow/FlowALP/issues/173)
        - [[FlowALP] Access Control - Unauthorized access, privilege escalation, entitlement enforcement #177 ](https://github.com/onflow/FlowALP/issues/177)
        - [[FCMObserver] Added core FYV metrics #49 ](https://github.com/onflow/fcm-observer/issues/49)

                
      * In Progress
        - [[FlowALP] Interest Rate Boundary Conditions Testing #180 ](https://github.com/onflow/FlowALP/issues/180)
        - [[FlowALP] FLO-12: Fee Calculation Diverges From Rate Allocation Formula #221 ](https://github.com/onflow/FlowALP/issues/221)
        - [[FCMObserver] Balance per vault histogram (P2) #29 ](https://github.com/onflow/fcm-observer/issues/29)
        - [[FCMObserver] Split ALP and FYV event handlers into different packages #87 ](https://github.com/onflow/fcm-observer/issues/87) 

- FYV
  - PyUSD0 -> AlphaYield Looping vault strategy live on mainnet
  - Resolving backend and UI issues to start internal testing
  - Oracle Aggregator implementation ([#132](https://github.com/onflow/FlowALP/issues/132)) in review
  - First iteration of Improving contract upgradeability and maintainability ([166](https://github.com/onflow/FlowALP/issues/166))
  - Redesigning the supervisor and worker architecture [[#10](https://github.com/onflow/FlowYieldVaultsEVM/issues/10)] complete
  - Fixed the issue to report profit and loss accurately on the vault.com user interface [#101](https://github.com/onflow/FlowYieldVaults-fe/issues/101)


- FYV Testing
  - Testing framework for simulation testing [#175](https://github.com/onflow/flow-okrs/issues/175)
    - All basic scenarios have been merged in.


- FCM Whitepaper/Documentation
  - Flow Memo is live - https://flow.com/fcm-memo

**This sprint**

Goals:
1. Support FYV internal testing
2. Kick off second round of the QS review for FYV.

- ALP
  - Continue the work to make FCM contracts more upgradabale - [#166](https://github.com/onflow/FlowALP/issues/166)

- FYV
  - Debug issues recently discovered when using the PyUSD0 strategy
  - Work with PM to integrate the PyUSD0 strategy.

- FYV Testing
  - Continue on the work to convert unit-zero simulations to use the new testing framework

- FCM Whitepaper
  - Continue working on the primer

---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements:
    - Security improvements: [1](https://github.com/onflow/cadence-internal/pull/438), [2](https://github.com/onflow/cadence-internal/pull/425), [3](https://github.com/onflow/cadence-internal/pull/437), [4](https://github.com/onflow/cadence-internal/pull/444), [5](https://github.com/onflow/cadence-internal/pull/433), [6](https://github.com/onflow/cadence-internal/pull/445), [7](https://github.com/onflow/cadence-internal/pull/447), [8](https://github.com/onflow/cadence-internal/pull/448), [9](https://github.com/onflow/cadence-internal/pull/446), [10](https://github.com/onflow/cadence-internal/pull/453)

- Update of bug bounty program with HackenProof.
    - updated to [v1.2](https://drive.google.com/drive/folders/1BBl_M9uZIJk4MjZvm52tOMtomFNqUaY7)
        - Clarify reporting requirements.
        - Added Target-specific reporting requirement for Execution layer.

- Fungible token supply monitoring
    - [Implement Iterator interfaces for LoadedValueIterator](https://github.com/onflow/atree/pull/635)

- EVM Core - enable emergency pausing of all EVM-related APIs by governance comittee multisig:
    - [Add pause functionality on EVM system contract](https://github.com/onflow/flow-go/issues/8311)

- Smart contracts review and bugfixes:
    - [Fix small bugs in TokenForwarding for bricked forwarder and wrong getSupportedVaultTypes](https://github.com/onflow/flow-ft/pull/185)
    - [Fix: three FungibleTokenSwitchboard bugs](https://github.com/onflow/flow-ft/pull/186)
    - [Fix getViews/resolveView mismatch and EVMBytesMetadata force-unwrap in ExampleNFT](https://github.com/onflow/flow-nft/pull/264)
    - [Fix five remaining bugs from security review](https://github.com/onflow/flow-nft/pull/265)

**This Sprint**

- Update of bug bounty program with HackenProof.
    - Continue work on core contracts before adding to scope

- Fungible token supply monitoring
    - test on one TN EN and collect data

- On Hold (capacity)
    - In-house financial analytics & fraud detection tooling - Blocked by explorer work

### Performance [Jan]

**Done Last Sprint**

- Cross-vm bridging performance improvements:
    - [Cross-VM operations](https://github.com/onflow/flow-go/issues/8401) performance improvements:
        - Cadence:
            - [Optimize Cadence ArrayValue and Go []byte conversions (up to 13.7x faster and 8x less memory)](https://github.com/onflow/cadence/pull/4443)
            - [Optimize transferring array, dict, and composite (e.g., 2x faster for byte arrays)](https://github.com/onflow/cadence/pull/4448)
            - [Replace mapLoadedValueIterator wrapper by using Atree implementation](https://github.com/onflow/cadence/pull/4449)
        - Atree:
            - [Add two new functions to optimize atree array and Go []byte conversions](https://github.com/onflow/atree/pull/629)
            - [Add support for faster copying of array and map](https://github.com/onflow/atree/pull/633)


- Completed work on simplifying transaction scheduler contract to improve performance
    - deployed on mainnet: [Simplify Scheduled Transaction priority limits](https://github.com/onflow/flow-core-contracts/pull/580)

**This Sprint**

- Continue: Cross-vm bridging performance improvements
    - start updating contracts to use optimized functions.
    - start re-calibration of execution effort weights to reflect optimized functions in operations pricing.


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/206

**Last Sprint**

* Explorer & UI
  * Search input validation and dropdown options
  * Transaction fee stat cards
  * Account page redesign with NFTs and FTs support
  * Added EVM navigation link and EVM COA links
  * Created UI for COAs
  * Added explanations for node counts
  * Setup analytics
  * Added claimable tokens alert and claim dialog
  * Added transactions page
  * Added scheduled transactions page
  * Added blocks page
  * Redesigned explorer home page
  * Added mainnet/testnet toggle
  * Implemented API hooks
  * Improved transactions API endpoint
  * Implemented contracts API endpoints and improvements
  * Implemented scheduled transactions API endpoints
  * Added advanced contract search functionality
  * Implemented simple group API improvements
* Access API & Indexer
  * Added receipt endpoints to the Access API
  * Merged extended index improvements
  * Updated OpenAPI specifications
  * Fixed flaky TestProduceConsume pebble panic
  * Added account transactions secondary index
  * Added execution receipt handling and block ID validation
  * Improved database error reporting
  * Added GitHub workflow automation and documentation improvements
* Infrastructure & Ops
  * Enabled analytics VM access to explorer VM
  * Updated DNS configuration for evm.flow.com
  * Increased rate limits and updated experimental infrastructure components

**Next Sprint**

* Explorer & UI
  * Remember and suggest previous searches
  * Fix FCL cross VM bug
  * Add WalletConnect support for mobile
  * Add info bubbles and explainers for roles on the transactions page
  * Update contract page to show contract deployments
  * Add NFT transfer tabs to account page
  * Add FT transfer tabs to account page
  * Review NFT transfers API endpoint with latest indexer implementation
  * Review FT transfers API endpoint with latest indexer implementation
  * Address explorer backlog issues
  * Node operator admin page
* Indexer
  * Deploy live indexer
  * Begin backfilling 2025 sporks
  * Add secondary indexers for transfers, contracts, accounts, and epoch rewards
* Community
  * Assist with judging projects for the PL Genesis hackathon

---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**


---

### **Infra** \[Manny]

**Done last sprint**


**Observability**


**FCM**

**Execution Ledger Service**


**TN54 Spork**


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
