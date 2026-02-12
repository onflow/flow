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
| Total downtime in mins |           | 0          | 0         | 52        | 0            | 0           | 32     | 84      |                                         |
| YTD (01/06/26) SLA     |           | 100.00%    | 100.00%   | 99.91%    | 100.00%      | 100.00%     | 99.95% | 99.86%  |                                         |
| SLA for 2026           |           | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     | 99.99% | 99.99%  |                                         |

### Incidents \[Vishal]


- Height Coordinated Upgrade - Feb 6th on Mainnet
   - [v0.46.0](https://github.com/onflow/flow-go/releases/tag/v0.46.0)

- P0 issue on Testnet - Finalization halted - Feb 11th.
  - Network upgrade (spork) had to be done to recover the network.
  - [Postmortem](https://status.flow.com/incidents/wmbfxpwhgz64)

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
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* Building towards few Permissionless Collection Nodes [PAUSED]
* SPoCK Research [IN PROGRESS]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**

* <ins>Data Availability</ins>
    * Done:


* <ins>Attack recovery</ins>


* <ins>Cryptography</ins>


* <ins>FVM improvement</ins>

---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
  - [FCM: 4/5](https://github.com/orgs/onflow/projects/99/views/15)
  - [FlowActions: 13/20](https://github.com/onflow/FlowActions/issues/95)
  - [FYV: 3/11](https://github.com/onflow/FlowYieldVaults/issues/131)
  - [FYV EVM: 5/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- FCM

  - KROK Team:
      * Done:

          
      * In Review:

      * In Progress



- FYV


- FYV Testing


- FCM Whitepaper


**This sprint**

- FCM


- FYV


- FYV Testing


- FCM Whitepaper


---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements:
    - Completed mainnet upgrade of [~5 defensive checks and bugfixes](https://github.com/onflow/cadence/pull/4431)
- In-house financial analytics & fraud detection tooling
    - transaction & account trail  
        - Chase TBD
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
        - Chase TBD
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



**This Sprint**




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
