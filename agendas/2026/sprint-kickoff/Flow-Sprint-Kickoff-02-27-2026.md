# Overview

### Team Wins 🎉

- Successfully executed the first zero-downtime execution upgrade on mainnet
- QuantStamp review of Core EVM contract complete - no major issues found.
- Cross-VM optimizations show 15-20% improvement in the FYV transaction cost in benchmarks.
- Transaction scheduling contract optimizations show ~25% improvement in the execution effort consumed.
- explorer.flow.com is live

---

#### YTD SLA \[Vishal]

Total Downtime in minutes

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
| YTD (01/06/26) SLA |           | 100.00%    | 99.71%    | 99.61%    | 100.00%      | 100.00%     | 99.96% | 99.57%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]


#### Planned downtime

##### Height Coordinated Upgrades (HCU)
- [v0.47.0](https://github.com/onflow/flow-go/releases/tag/v0.47.0)
  - Mainnet 2/24, Testnet 2/23, 2/18 (test only)
  - Zero-downtime HCU

- [v0.46.1](https://github.com/onflow/flow-go/releases/tag/v0.46.1)
  - Mainnet 2/13, Testnet 2/12

#### Unplanned downtime

- Mainnet Sealing halt on 2/23/2026
  - 4 hrs
  - [Retrospective](https://status.flow.com/incidents/d2rdc04vx65w)

- Testnet System chunks failure on 2/25/2026
  - 1 hour

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    8    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **55**  |   **19**   |  **21**  | **115** |

- 1 new FLIP Added
  - [FLIP 359: Allow for-in loop over dictionary keys](https://github.com/onflow/flips/issues/359)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

**Done last sprint**

**Cadence Language**

- Latest security improvements: [[v1.9.10](https://github.com/onflow/cadence/pull/4444)
- more work on improving security: [1]](https://github.com/onflow/cadence-internal/pull/427), [2](https://github.com/onflow/cadence-internal/pull/422), [3](https://github.com/onflow/cadence-internal/pull/432)
- Update [compiler to keep up with the security improvements](https://github.com/onflow/cadence-internal/pull/428)
- chores:
    - [[v1.9] Port v1.9.9-rc.2](https://github.com/onflow/cadence/pull/4439)
    - [Port v1.9.9-rc.2](https://github.com/onflow/cadence/pull/4440)
    - [Port v1.9.10-rc.1](https://github.com/onflow/cadence/pull/4445)
    - [Update to Cadence v1.9.9](https://github.com/onflow/flow-go-sdk/pull/992)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flow-go-sdk/pull/1005)
    - [[v0.46] Update to Cadence v1.9.9](https://github.com/onflow/flow-go/pull/8413)
    - [Update to Cadence v1.9.9](https://github.com/onflow/flow-go/pull/8412)
    - [[v0.47] Update to Cadence v1.9.10](https://github.com/onflow/flow-go/pull/8461)
    - [Update to Cadence v1.9.10](https://github.com/onflow/flow-go/pull/8464)
    - [[v0.47] Update to Cadence v1.9.10-rc.1](https://github.com/onflow/flow-go-internal/pull/7163)

**Cadence Execution**

- Bugfix:
    - [Remove unnecessary CAS guard from SubscriptionProvider.updateTopics()](https://github.com/onflow/flow-go/pull/8407)
    - [[Access] Fix `ParseAddress()` by only removing prefix "0x"](https://github.com/onflow/flow-go/pull/8453)
- Improvement:
    - related to the consensus outage triggered by dynamic bootstrap: [[Consensus] Add --require-beacon-key flag to fail fast on missing DKG keys at consensus node startup](https://github.com/onflow/flow-go/pull/8410)
- Tech-debt: 
    - [[FVM] Remove legacy account status formats code](https://github.com/onflow/flow-go/pull/8299)
- Chores:
    - [Cleanup unused kubernetes related deployments](https://github.com/onflow/flow-go/pull/8384)
    - [Mockery fixes](https://github.com/onflow/flow-go/pull/8423)
    - [add ledger image build](https://github.com/onflow/flow-go-internal/pull/7146)

**Flow EVM**
- Core:
    - Imporovement
        - metering: [[Flow EVM] Add proper meter and gas limit checks for EVM dry operations](https://github.com/onflow/flow-go/pull/8416)
        - system contract: [[Flow EVM] Apply general suggestions from QuantStamp audit report](https://github.com/onflow/flow-go/pull/8439)
    - Bugfix:
        - [[Flow EVM] Add strict hex-prefix check when parsing `EVM` addresses from `String`](https://github.com/onflow/flow-go/pull/8437)
- Gateway:
    - [Add parent hash verification during block ingestion](https://github.com/onflow/flow-evm-gateway/pull/954)


**This sprint**

- Cadence Language
    - Continue work on security improvements
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete testing [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571) - epoch switchover
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

- SPoCK paper:
  - Spearbit delivered first round of feedback - back and forth constructive discussions on the feedback
    - a few areas of improvements and subtle cases identified
    - we are still discussing the best ways to update (basically the security games)
    - updated the paper for other less problematic points

- Crypto module:
  - Go 1.26 brings breaking changes to the go standard library and the crypto module currently breaks for 1.26
    - checking new external ECDSA dependencies for the 1.26 update - still ongoing


---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
  - [FCM: 5/5](https://github.com/orgs/onflow/projects/99/views/15) ✅
  - [FlowActions: 17/20](https://github.com/onflow/FlowActions/issues/95)
  - [FYV: 8/11](https://github.com/onflow/FlowYieldVaults/issues/131)
  - [FYV EVM: 7/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP
  - Implementing the Oracle Aggregator [#132](https://github.com/onflow/FlowALP/issues/132)
  - Making FCM contracts easy to upgrade [#166](https://github.com/onflow/FlowALP/issues/166)
  - Improving Unit test coverage (cover additional testing gaps, see Scope under [issue 136](https://github.com/onflow/FlowCreditMarket/issues/136)) - WIP
  - Offchain Analytics and Alerting [#3](https://github.com/onflow/fcm-observer/issues/3)
    - Metrics for Positions, TVL, observer health and polling have been implemented.
  - KROK Team:
      * Done:
        - MVP version of offchain analytics was deployed incuding tasks below, extra metrics and extensions in progress
        - [[FCMObserver] FCM Observer - Initial Implementation #4 ](https://github.com/onflow/fcm-observer/issues/4)
        - [[FCMObserver] Refactor ingestion engine as it has become a god object #10 ](https://github.com/onflow/fcm-observer/issues/10)
        - [[FCMObserver] Create a generic interface for the data (metrics) fetched via cadence scripts #40 ](https://github.com/onflow/fcm-observer/issues/40)
        - [[FCMObserver] Add mockery, mocks, and unit test for FlowALPv0.Opened event #42 ](https://github.com/onflow/fcm-observer/issues/42)
        - [[FCMObserver] FCM Observer - Additional metrics, local monitoring stack. #6 ](https://github.com/onflow/fcm-observer/issues/6)
        - [[FCMObserver] ALP: Rebalances per hour (double check) #15 ](https://github.com/onflow/fcm-observer/issues/15)
        - [[FCMObserver] ALP: Rebalance Up events (HF < healthy range) (P1) #19 ](https://github.com/onflow/fcm-observer/issues/19)
        - [[FCMObserver] ALP: Rebalance Down events (HF > healthy range) (P1) #20 ](https://github.com/onflow/fcm-observer/issues/20)
        - [[FCMObserver] Number of users tracked vs beta capabilities granted (P1) #27 ](https://github.com/onflow/fcm-observer/issues/27)
        - [[FCMObserver] Total credit and total debt (P2) #34 ](https://github.com/onflow/fcm-observer/issues/34)
        - [[FCMObserver] Total current MOET supply (P1) #35 ](https://github.com/onflow/fcm-observer/issues/35)
        - [[FCMObserver] Add rebalancer metrics from FYV project #39 ](https://github.com/onflow/fcm-observer/issues/39)
        - [[FlowActions] S5 General Improvements #115 ](https://github.com/onflow/FlowActions/issues/115)

      * In Review: 
        - [[FlowActions] FLOW-15 Unfinished TODOs #110 ](https://github.com/onflow/FlowActions/issues/110)
        - [[FlowALP] Multi-Position Scenarios Testing #147 ](https://github.com/onflow/FlowALP/issues/147)      
        - [[FlowALP] Multiple Collateral Types & Cross-Asset Operations Testing #148 ](https://github.com/onflow/FlowALP/issues/148)
        - [[FlowALP] Oracle Failure & Manipulation Testing #149 ](https://github.com/onflow/FlowALP/issues/149)
        - [[FlowCreditMarket] Liquidation Edge Cases #173 ](https://github.com/onflow/FlowCreditMarket/issues/173)
      
      * In Progress
        - [[FlowALP] Interest Rate Boundary Conditions Testing #180 ](https://github.com/onflow/FlowALP/issues/180)
        - [[FlowALP] Access Control - Unauthorized access, privilege escalation, entitlement enforcement #177 ](https://github.com/onflow/FlowALP/issues/177)
        - [[FCMObserver] Balance per vault histogram (P2) #29 ](https://github.com/onflow/fcm-observer/issues/29)
        - [[FCMObserver] Total number of vaults (P2) #28 ](https://github.com/onflow/fcm-observer/issues/28)

- FYV
  - Redesigning the supervisor and worker architecture [[#10](https://github.com/onflow/FlowYieldVaultsEVM/issues/10)]
    - In review ([PR #44](https://github.com/onflow/FlowYieldVaultsEVM/pull/44))
    - Testing on testnet
  - Implementing the pyUSD0 vault for PeakMoney and FYV [#180](https://github.com/onflow/FlowYieldVaults/issues/184)
  - Addressing the Cadence --> EVM loss of precision issue to unblock PM.
  - Report profit and loss accurately on the vault.com user interface [#101](https://github.com/onflow/FlowYieldVaults-fe/issues/101)

- FYV Testing
  - Testing framework for simulation testing [#175](https://github.com/onflow/flow-okrs/issues/175)
    - blocks around EVM cheat codes have been resolved.
    - Scenarios are in draft PRs

- FCM Whitepaper/Documentation
  - FCM Primer and simulations (catching up on prior art and investigating routes towards white paper).
  - Researching analytical model with the goal to prove soundness properties of Lending Protocol
  - New landing page is live - https://flow.com/fcm


**This sprint**

Goals:
1. FYV internal testing
2. Kick off second round of the QS review for FYV.

- ALP
  - Complete the Oracle Aggregator implementation.
  - Continue the work to make FCM contracts more upgradabale - [#166](https://github.com/onflow/FlowALP/issues/166)

- FYV
  - Resolve all outstanding issues to start internal testing.
  - Work with PM to integrate the PyUSD0 strategy.

- FYV Testing
  - Merge PRs for testing scenarios.

- FCM Whitepaper
  - Publish primer (~2nd week of March.)


---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements: covered in Cadence language section
- In-house financial analytics & fraud detection tooling
    - Blocked until APIs are finished in explorer work
- Update of bug bounty program with HackenProof.
    - [Program updated](https://hackenproof.com/programs/flow-protocol) with more details on scope and rewrite to reduce repetitive statements.
- Fungible token supply monitoring
    - [flow-go PR](https://github.com/onflow/flow-go/pull/8424) in progress, [Cadence dependency](https://github.com/onflow/cadence/pull/4442) merged.

**This Sprint**

- Cadence security improvements: Continue work on more improvements, maybe start experimentation with Claude security
- In-house financial analytics & fraud detection tooling
    - Blocked until APIs are finished in explorer work
- Update of bug bounty program with HackenProof.
    - update program to add more info on reproducers and reports priotitization
- Fungible token supply monitoring
    - complete the initial version and run on one EN

- On Hold (capacity)
    - In-house financial analytics & fraud detection tooling
        - anomalous event monitoring (focusing on analytics tooling)
    - Evaluate existing anomaly detection tools (contract / Tx anomalies)


### Performance [Jan]

**Done Last Sprint**

- [Cross-VM operations](https://github.com/onflow/flow-go/issues/8401) performance improvements:
        - [[Flow EVM] Add new EVM functions that can be used to reduce computation cost of transactions](https://github.com/onflow/flow-go/pull/8418)
        - [[Flow EVM] Optimize and reduce computation cost of four EVM functions](https://github.com/onflow/flow-go/pull/8434)
- Completed [scheduler contract performance improvements](https://github.com/onflow/flow-core-contracts/pull/580)

**This Sprint**

- Complete: simplify transaction scheduler to improve performance 
- Continue: Cross-vm bridging performance improvements


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/176
https://github.com/onflow/flow-okrs/issues/175

**Done Last Sprint**

- Assist on security analytics tool, block explorer, and FCM testing (covered in other sections)
- Block Explorer
  - Set up indexing for account transactions, account transfers, and scheduled transactions
  - Deployed FLOW total supply API for CoinGecko and CoinMarketCap
  - Completed infrastructure setup for mainnet and testnet exporter and API service
  - Finished first version of flow-explorer API endpoints
  - Completed redesign
  - Added node page with delegations
  - Reworked account page to reduce staking focus
  - Added historical transactions to account page
  - Added transaction timestamps
  - Displayed code errors on transaction page
  - Created displays for system and scheduled transactions on the transaction page
  - Added tags to the transaction page
  - Fixed NFT and FT data issue
  - Created NFT collection page
  - Created token page
  - Added surge factor to home page
  - Added highlights section to home page
  - Added locations to node cards
  - Added globe visualization with node locations
  - Rebranded the site

**This Sprint**

- Block Explorer
  - Finish contract indexer
  - Start historic indexing
  - Implement flow-explorer API contract endpoints
  - Implement flow-explorer API scheduled transaction endpoints
  - Build new flow-explorer frontend pages
  - Add total transactions metric
  - Hook up analytics and events
  - Add search suggestions
  - Add contracts history
  - Improve the NFT display in account page
  - Link Cadence Txns to related wrapped EVM transactions
  - Make COAs intuitive to users

---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**


---

### **Infra** \[Manny]

**Done last sprint**

**Flow Explorer**
- [Configure BigQuery for Flow Blockchain - Community Public Dataset](https://github.com/onflow/ff-sre-infrastructure/issues/1151)
- [Add infra resources to deploy totalsupply to staging](https://github.com/onflow/ff-sre-infrastructure/issues/1152)
- [Add infra resources to deploy API explorer to staging](https://github.com/onflow/ff-sre-infrastructure/issues/1153)
- [Onboard `flowscan.com` zone to Cloudflare](https://github.com/onflow/ff-sre-infrastructure/issues/1157)
- [Redirect `flowscan.com` and `www.flowscan.com` to `explorer.flow.com`](https://github.com/onflow/ff-sre-infrastructure/issues/1158)

**Flow Nodes**
- [Update Automation Snapshot Schedule from TN53 to TN54](https://github.com/onflow/ff-sre-infrastructure/issues/1135)
- [Delete Daily Snapshots of TN53 Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/1140)
- [Delete TN52 Historical AN after the TN54 Spork](https://github.com/onflow/ff-sre-infrastructure/issues/1143)
- [Delete Daily Snapshots of MN27 Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/1155)

**Support**
- [Create SA and Token for Grafana MCP Testing](https://github.com/onflow/ff-sre-infrastructure/issues/1154)


---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [Paused]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**
* No updates


**This sprint**
* No Updates

---
