# Overview

### Team Wins 🎉

- another uneventful HCU that deployed new security fixes ([v0.46.0](https://github.com/onflow/flow-go/releases/tag/v0.46.0))
- Completed implementation of Execution node [zero-downtime HCU](https://github.com/onflow/flow-go/issues/8308)
- Completeted initial implementation of [malicious contract detection](https://github.com/onflow/ripple-slack-bot)

---

#### YTD SLA \[Vishal]

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                |
|------------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|-----------------------------------------|
| HCU                    | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident |
| HCU                    | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                            |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                        |
| EVM GW Issue           | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable         |
| HCU                    | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                            |
| HCU                    | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                            |
| Sealing halt           | 2/11/2026 |            |           | 7         |              |             |        | 7       | Security Fix                            |
| Total downtime in mins |           | 0          | 0         | 59        | 0            | 0           | 32     | 91      |                                         |
| YTD (01/06/26) SLA     |           | 100.00%    | 100.00%   | 99.90%    | 100.00%      | 100.00%     | 99.95% | 99.85%  |                                         |
| SLA for 2026           |           | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     | 99.99% | 99.98%  |                                         |

### Incidents \[Vishal]


- Height Coordinated Upgrade - Feb 6th on Mainnet
   - [v0.46.0](https://github.com/onflow/flow-go/releases/tag/v0.46.0)

- P0 Testnet - Finalization halted - Feb 11th
  - Network upgrade (spork) had to be done to recover the network.
  - [Postmortem](https://status.flow.com/incidents/wmbfxpwhgz64)
  - Total downtime:
    - Sealing halted for 2hr, 28 mins.
    - Public EVM GW endpoint unavailable for 18hrs.

- P0 Mainnet - Sealing halt - Feb 11 for ~7 mins
  - FF and DL execution nodes went OOM and restarted.
  - Resolution - Execution node hardware upgraded

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    8    |     0      |    9     | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **54**  |   **19**   |  **21**  | **114** |

- 2 new Cadence FLIPs added
  - [FLIP 355: Cadence Guard Statement](https://github.com/onflow/flips/pull/356)
  - [FLIP 357: Add minOf and maxOf Functions to Cadence](https://github.com/onflow/flips/pull/358)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

**Done last sprint**

**Cadence Language**

- Improvements:
    - [Improve AST walking ](https://github.com/onflow/cadence/pull/4434)
    - robustness of compiler tests: [Improve assertions for instructions by introducing "pretty" instructions](https://github.com/onflow/cadence/pull/4423)
    - backwards compatibility evaluation: [Improve Source Compatibility Suite](https://github.com/onflow/cadence/pull/4428)
- Bugfixes:
    - [Fix function type for `Capability.borrow`/`check`](https://github.com/onflow/cadence-internal/pull/396)
    - [Improve #395](https://github.com/onflow/cadence-internal/pull/397)
    - [Fix sibling subtyping in interface inheritance](https://github.com/onflow/cadence-internal/pull/395)
    - [Fix contract update validation of reference and function types](https://github.com/onflow/cadence-internal/pull/399)
    - [Prevent entitlement escalation via references](https://github.com/onflow/cadence-internal/pull/398)
    - [Fix entitlement escalation with default function and function-typed field](https://github.com/onflow/cadence-internal/pull/401)
    - [Fix optional boxing for containers](https://github.com/onflow/cadence-internal/pull/403)
    - [Add 'internal error' prefix to the missing internal errors](https://github.com/onflow/cadence-internal/pull/409)        
- Tooling:
    - Lint feature [Add a new analyzer to detect unused variables and parameters](https://github.com/onflow/cadence-tools/pull/591)
    - bugfixes:
        - Linter: [Fix false positives for redundant type annotation/cast when type annotation is required](https://github.com/onflow/cadence-tools/pull/586)
        - Language server: [ Fix function and constructor types in completion items](https://github.com/onflow/cadence-tools/pull/588)
- Testing:
    - new feature: [Inject the `getTransactionIndex()` stdlib function in the testing environment](https://github.com/onflow/cadence-tools/pull/582)
- Chores:
    - porting of bugfixes to public repo: [Port v1.9.8-rc.2](https://github.com/onflow/cadence/pull/4431) 
    - [Update changelog](https://github.com/onflow/cadence/pull/4435)
    - [[test] Update to Cadence v1.9.7](https://github.com/onflow/cadence-tools/pull/581)
    - [[languageserver] Update to Cadence v1.9.7](https://github.com/onflow/cadence-tools/pull/583)
    - [[languageserver] Update to Cadence v1.9.7](https://github.com/onflow/cadence-tools/pull/587)
    - [Update to Cadence v1.9.7](https://github.com/onflow/flixkit-go/pull/102)
    - [Update to Cadence v1.9.7](https://github.com/onflow/flow-cli/pull/2265)
    - [Update to lint v1.7.4 and languageserver v1.9.2](https://github.com/onflow/flow-cli/pull/2270)
    - [Update to latest versions of Cadence and Flow Emulator](https://github.com/onflow/flow-core-contracts/pull/576)
    - [Update to Cadence v1.9.7](https://github.com/onflow/flow-evm-gateway/pull/952)
    - [[v0.46] Update to Cadence v1.9.8](https://github.com/onflow/flow-go/pull/8396)
    - [Update to Cadence v1.9.8](https://github.com/onflow/flow-go/pull/8395)

**Cadence Execution**

- Zero-downtime network upgrade:
    - [POC Ledger Service](https://github.com/onflow/flow-go/pull/8309)
    - [[Ledger Service] Add more improvements](https://github.com/onflow/flow-go/pull/8350)
    - [remove the double quote for ledger version](https://github.com/onflow/dapper-flow-hosting/pull/1855)
- Concurrent transactions execution testing:
    - [Add load with specifiable concurrency](https://github.com/onflow/flow-execution-effort-estimation/pull/83)
- Improvements:
    - FVM refactor & Cleanup: [Unexport reusable runtime](https://github.com/onflow/flow-go/pull/8373)
    - [Fix lint warning](https://github.com/onflow/flow-go/pull/8380)
- Bugfixes:
    - [[Access] Access ingestion error handle](https://github.com/onflow/flow-go/pull/8385)
    - [[Access] v0.45 handle collection already indexed](https://github.com/onflow/flow-go/pull/8389)
- Cleanup / Tech-debt removal:
    - [[FVM] Remove unused error](https://github.com/onflow/flow-go/pull/8393)
    - [Cleanup flips folder](https://github.com/onflow/flow-go/pull/8388)
    - [Remove unused revive](https://github.com/onflow/flow-go/pull/8387)
    - [Cleanup bors references](https://github.com/onflow/flow-go/pull/8386)
- Testing:
    - [Fix flaky epoch test](https://github.com/onflow/flow-go/pull/8394)
- chore:
    - [Upgrade mockery](https://github.com/onflow/flow-go/pull/8322)

**Flow EVM**

- Core
    - Feature:
        - [Implement ABI encoding/decoding for arrays of Solidity tuples](https://github.com/onflow/flow-go/issues/8370)
            - [[Flow EVM] Implement ABI encoding/decoding for arrays of Solidity tuples](https://github.com/onflow/flow-go/pull/8371)
    - post-inicident cleanup:
        - [Remove EOA restriction functionality](https://github.com/onflow/flow-go/issues/8369)


**This sprint**

- Cadence Language
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete testing of EN zero-downtime HCU
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
  * SPoCK: finalized the paper draft and shared it with Wilson - we had a first call and went through theoretical questions and I updated the draft - he’s now reviewing the draft



---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
  - [FCM: 5/5](https://github.com/orgs/onflow/projects/99/views/15) ✅
  - [FlowActions: 15/20](https://github.com/onflow/FlowActions/issues/95)
  - [FYV: 6/11](https://github.com/onflow/FlowYieldVaults/issues/131)
  - [FYV EVM: 5/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP
  - Kicked off the second round of the QuantStamp review for FCM contracts.
    - Includes:
      - Fixes for all there earlier comments.
      - New liquidation logic.
      - Improved position based permissions.
      - Global pause mechanism
  - Started on improving unit test coverage ([#136](https://github.com/onflow/FlowCreditMarket/issues/136))
  - Implemented the Morpho erc4626 Swap and Sink connectors ([#126](https://github.com/onflow/FlowActions/pull/126))
  - Implemented the first version of the FCM observer ([#3](https://github.com/onflow/fcm-observer/issues/3))
  - First cut of the [FCM marketing site](https://flow-com-foundation.webflow.io/fcm/fcm)

  - KROK Team:
      * Done:
        - [[FlowActions] FLOW-10 Missing Input Validation #105 ](https://github.com/onflow/FlowActions/issues/105)
        - [[FlowActions] S4 Improve UniswapV3 swap precision #114 ](https://github.com/onflow/FlowActions/issues/114) 

      * In Review:   
        - [[FlowActions] FLOW-15 Unfinished TODOs #110 ](https://github.com/onflow/FlowActions/issues/110)
        - [[FlowActions] S5 General Improvements #115 ](https://github.com/onflow/FlowActions/issues/115) 
      
      * In Progress
        - [[FlowCreditMarket] Offchain analytics and alerting for FCM health and positions #122 ](https://github.com/onflow/fcm-observer/issues/3)        
        - [[FlowCreditMarket] Improve Unit Test Coverage for FCM #136 ](https://github.com/onflow/FlowCreditMarket/issues/136)
        - [[FlowCreditMarket] Multiple Collateral Types & Cross-Asset Operations Testing #148 ](https://github.com/onflow/FlowCreditMarket/issues/148)
        - [[FlowCreditMarket] Multi-Position Scenarios Testing #147 ](https://github.com/onflow/FlowCreditMarket/issues/147)

- FYV
  - Redesigning the supervisor and worker architecture [[#10](https://github.com/onflow/FlowYieldVaultsEVM/issues/10)]
  - Addressing UI and backend [issues](https://github.com/orgs/onflow/projects/99/views/2)
  - FYV EVM contract improvement [#39](https://github.com/onflow/FlowYieldVaultsEVM/issues/39)
  - Determining all the TODOs for the MVP version of FYV.


- FYV Testing
  - Configure Morpho Vault state manipulation for forked mainnet simulations
  - Configure UniswapV3 Pool state manipulation for forked mainnet simulations
  - Continued conversion of FYV scenarios to forked mainnet simulation


- FCM Whitepaper/Documentation
  - Continued working on the [FCM primer](https://docs.google.com/document/d/1Ph9xnx1JvvJQdMVZoEDtTagnx_FLo0wiQZCi1BjqxyE/edit?tab=t.0#heading=h.xowwye5i17vb)


**This sprint**

- ALP
  - Add the Scheduled Transaction Rebalancing implementation to the QS review.
  - Address all the remaining QS review comments to kick of second round of audit for the FYV, FYV EVM and Flow Actions contract.
  - Continue improving Unit test coverage (cover additional testing gaps, see Scope under [issue 136](https://github.com/onflow/FlowCreditMarket/issues/136))

- FYV
  - Redesigning the supervisor and worker architecture [[#10](https://github.com/onflow/FlowYieldVaultsEVM/issues/10)]
  - Addressing UI and backend [issues](https://github.com/orgs/onflow/projects/99/views/2)
  - FYV EVM contract improvement [#39](https://github.com/onflow/FlowYieldVaultsEVM/issues/39)
  - Align on timelines and milestones for internal FYV testing.

- FYV Testing
  - Complete conversion of FYV scenarios to forked mainnet simulation
  - Investigate discrepancies identified in forked tests
  - Recreate Python simulation in forked Cadence Test environment
  - Configure CI caching for forked tests


- FCM Whitepaper
  - Publish primer
  - Continue working on the whitepaper.


---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements:
    - Completed mainnet upgrade of [~5 defensive checks and bugfixes](https://github.com/onflow/cadence/pull/4431)
- In-house financial analytics & fraud detection tooling
    - transaction & account trail  
        - Built the indexer framework and account transactions indexer
        - Started building the account transactions API
        - Completed node-graph visualization with multiple interconnected nodes
        - Added data loading through transactions endpoint to load node graph
        - Added header with search bar
        - Added filters panel with node graph update
- Update of bug bounty program with HackenProof.
    - Draft shared with HackenProof for feedback.
- Fungible token supply monitoring
    - Started implementation of differential tracker (chunk-data-pack level)
    - [Update and cleanup](https://github.com/onflow/flow-batch-scan/pull/40)
    - [Update rate limits + minor CI cleanup](https://github.com/onflow/flow-batch-scan/pull/41)

**This Sprint**

- Cadence security improvements:
  - Continue external audit of the exploited functionality
  - Start work on [AI-assisted vulnerability detection](https://github.com/onflow/cadence-internal/issues/404)
- In-house financial analytics & fraud detection tooling
    - transaction & account trail 
        - Rework frontend to use new historical API service mocks
        - Finish the indexer and start collecting the data on mainnet
        - Finish the REST API for account transactions
        - Start on account tranfers indexer and APIs
    - Continue: Malicious contract detection
        - deploy on CloudRun, add CI/CD setup.
- Update of bug bounty program with HackenProof.
    - completed review of pwending reports
    - publish updated program
- Fungible token supply monitoring
    - Complete implementation of differential tracker (chunk-data-pack level)

- On Hold (capacity)
    - In-house financial analytics & fraud detection tooling
        - anomalous event monitoring (focusing on analytics tooling)
    - Evaluate existing anomaly detection tools (contract / Tx anomalies)
    - Execution node fraud detection (storage layer).

### Performance [Jan]

**Done Last Sprint**

- Cross-vm bridging performance improvements:
    - EVM Core:
        - [[Flow EVM] Optimize EVMDecodeABI by removing an ArrayValue iteration](https://github.com/onflow/flow-go/pull/8397)
        - [[Flow EVM] Optimize EVMEncodeABI by removing an ArrayValue iteration](https://github.com/onflow/flow-go/pull/8398)
        - [[Flow EVM] Optimize EVMEncodeABI by creating Go reflect types at startup and reusing them](https://github.com/onflow/flow-go/pull/8399)
        - [[Flow EVM] Optimize EVM dryCall by removing RLP encoding/decoding](https://github.com/onflow/flow-go/pull/8400)

- Started work on simplifying transaction scheduler contract to improve performance

**This Sprint**

- Continue: simplify transaction scheduler to improve performance 
- Continue: Cross-vm bridging performance improvements:
    - [Optimize Flow EVM by creating wrapper functions to reduce conversion overhead](https://github.com/onflow/flow-go/issues/8405)
    - [Optimize Flow EVM block formation](https://github.com/onflow/flow-go/issues/6958)

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/176
https://github.com/onflow/flow-okrs/issues/175

**Done Last Sprint**

- Assist on security analytics tool, block explorer, and FCM testing (covered in other sections)
- Fix CLI Account Creation
- Block Explorer
  - New home page metrics (price, tps, block time)
  - Top contracts page
  - Contract page with events, imports, and live streaming contract events
  - NFT collections page
  - Account storage inspection view
  - Live activity page with filters and custom event watching
  - Setup new API service for serving historical data
  - Created API endpoints on service layer with mock data

**This Sprint**

- Assist on security analytics tool, block explorer, and FCM testing (covered in other sections)
- Add support for new apply fixes feature to `flow cadence lint`
- Block Explorer
  - Tokens page
  - Build API service layer
  - Build historical UI on explorer
  - Hook up service layer to new access node endpoints
  - Hook up historical UI to endpoints
  - Create API documentation
  - Create docker build for API service


---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**

-
---

### **Infra** \[Manny]

**Done last sprint**



**Observability**


**Historical Nodes**


**Support**


**Security**


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
