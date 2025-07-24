# Overview

 ### Team Wins 🎉

 * React SDK is live with components
 * Cadence compiler + VM - basically no features left to support, started testing user Tx execution, testing execution correctness of book-keeping functions passed verification of 115K blocks.
* Badger -> Pebble migration - all node types being tested on testnet right now - very promising results so far! CPU spikes are gone, memory usage dropped from ~50% to under 10% (we need to wait longer to verify it is stable).
* EVM Gateway - completed work to increase TPS for high-traffic accounts & optimized key release logic to reduce the time the key becomes available.
* Network stress testing - loader improvements made it possible to sustain 300TPS load for 3 hours, promising collection thsize throttling results.

---

### Mainnet Uptime - Last 14 days (07/14/25 to 07/25/25) \[Vishal]

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
| Total downtime in mins |           | 210        | 210       | 263       | 210          | 263    |               |
| YTD SLA                |           | 99.93%     | 99.93%    | 99.91%    | 99.93%       | 99.91% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

### Testnet

N/A

### Mainnet
N/A

### Key Release Dates & Breaking Changes


Network upgrade (Spork) Fall 2025.
- Testnet in **Sept, 17th (Wednesday)**
- Mainnet in **Oct, 1st (Wednesday)**

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:------:|:-------:|:-----------------:|:--------:|:-------:|
| Drafted     | 8 |    7    |       0       |    9     | **24**  |
| Proposed    | 1  |    2    |       3       |    0     |  **6**  |
| Accepted    | 3  |    2    |       2       |    3     | **10**  |
| Rejected    | 0  |    1    |       1       |    0     |  **2**  |
| Implemented | 3  |    5    |       1       |    0     |  **9**  |
| Released    | 4  |   34    |       9         |    6     | **53**  |
| Total       | **19** | **50**  |       **16**       |  **18**  | **104** |


- [FLIP 332: Enforcing Domain-Based Networking Addresses for Nodes](https://github.com/onflow/flips/blob/main/protocol/20250619-network-address-validation.md) moved to `Released`


---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**

- [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)
    - [[Compiler] Enable more tests to be run with VM](https://github.com/onflow/cadence/pull/4085)
    - [[Compiler] Fix second-value assignment for index-expressions](https://github.com/onflow/cadence/pull/4088)
    - [[Compiler] Fix expression evaluation order of second value assignments](https://github.com/onflow/cadence/pull/4090)
    - [[Compiler] Transaction pre/post conditions are already executed](https://github.com/onflow/cadence/pull/4094)
    - [[Compiler] Enable computation metering / limiting tests to be run with compiler/VM](https://github.com/onflow/cadence/pull/4095)
    - [[Compiler] Fix `TestRuntimeWrappedErrorHandling` when running with VM](https://github.com/onflow/cadence/pull/4093)
    - [[Compiler] Fix contract deployment / initialization](https://github.com/onflow/cadence/pull/4092)
    - [Interpreter: Evaluate and transfer invocation, array, and dictionary arguments immediately](https://github.com/onflow/cadence/pull/4089)
    - [[Compiler] Enable contract update program caching test for VM](https://github.com/onflow/cadence/pull/4098)
    - [Rework test to actual feature: checking return value type](https://github.com/onflow/cadence/pull/4091)
    - [[Compiler] Update and enable test checking GetOrLoadProgram hits for VM](https://github.com/onflow/cadence/pull/4096)
    - [[Compiler] Test construction of InclusiveRange with VM, resolve TODO](https://github.com/onflow/cadence/pull/4099)
    - [[Compiler] Create an implicit reference for self variable](https://github.com/onflow/cadence/pull/4097)
    - [[Compiler] Implement Context.RecoverErrors in VM](https://github.com/onflow/cadence/pull/4101)
    - [[Compiler] Enable storage reference bound function tests](https://github.com/onflow/cadence/pull/4102)
    - [[Compiler] Enable memory metering tests to be run with compiler/VM](https://github.com/onflow/cadence/pull/4100)
    - [[Compiler] Add corresponding VM tests for missing interpreter test](https://github.com/onflow/cadence/pull/4106)
    - [[Compiler] Run more tests with compiler/VM](https://github.com/onflow/cadence/pull/4109)
    - [[Compiler] Fix optional binding expression evaluation order](https://github.com/onflow/cadence/pull/4110)
    - [[Compiler] Fix compilation of for loops over non-reference array with reference values](https://github.com/onflow/cadence/pull/4114)
    - [[Compiler] Create `SimpleCompositeValue`s for transactions](https://github.com/onflow/cadence/pull/4116)
    - [Improve event emission](https://github.com/onflow/cadence/pull/4117)
    - [[Compiler] Fix optional chaining in compiler](https://github.com/onflow/cadence/pull/4118)
    - [Add a new tool to decode a single slab](https://github.com/onflow/cadence/pull/4119)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - [Clean up test utils](https://github.com/onflow/cadence/pull/4084)
    - [[Compiler] Refactor function invocation](https://github.com/onflow/cadence/pull/4103)
    - [[Compiler] Pass the receiver separately to the builtin functions](https://github.com/onflow/cadence/pull/4104)
    - [[Compiler] Fix external invocations of bound functions](https://github.com/onflow/cadence/pull/4105)
    - [[Compiler] Remove outdated todo's in VM](https://github.com/onflow/cadence/pull/4113)
    - [Fix Array.map and Array.filter](https://github.com/onflow/cadence/pull/4115)
    - [[Compiler] Improve naming and meter UUID field and value creation in VM](https://github.com/onflow/cadence/pull/4120)
- tech-debt removal
    - [Remove unused error](https://github.com/onflow/cadence/pull/4112)

**Cadence Execution**

- Badger -> Pebble migration
    - [[Storage] Use lockctx to store approvals](https://github.com/onflow/flow-go/pull/7406)
- TPS loader improvements - network stress testing
    - [Use finalised block as reference block](https://github.com/onflow/flow-execution-effort-estimation/pull/60)
    - [Change transaction expiry](https://github.com/onflow/flow-execution-effort-estimation/pull/62)
    - [Retry on not executed error](https://github.com/onflow/flow-execution-effort-estimation/pull/63)
    - [Allow multiple access nodes](https://github.com/onflow/flow-execution-effort-estimation/pull/64)
    - [Fix bug when streaming from multiple ANs](https://github.com/onflow/flow-execution-effort-estimation/pull/66)
    - [Revert "allow multiple access nodes"](https://github.com/onflow/flow-execution-effort-estimation/pull/67)
    - [Retry account creation and update metrics](https://github.com/onflow/flow-execution-effort-estimation/pull/65)
    - [Fix retry on get tx to short](https://github.com/onflow/flow-execution-effort-estimation/pull/69)
    - [Tweak TX expiry handling](https://github.com/onflow/flow-execution-effort-estimation/pull/70)
- Tech-debt
    - [[Storage] Optimize the IterFunction](https://github.com/onflow/flow-go/pull/7582)
- CBOR Improvement
    - [Add TimeRFC3339NanoUTC option for encoding to CBOR time](https://github.com/fxamacker/cbor/issues/687)

**Flow EVM**

- [Integrate JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)
    - [Remove `totalDifficulty` field from `Block` type](https://github.com/onflow/flow-evm-gateway/pull/847]
- Bugfix:
    - [Fix endpoint crashes due to non-replay protected EVM transactions](https://github.com/onflow/flow-evm-gateway/pull/846)
    - [Problem when calculating tx's fee based on EIP-1559](https://github.com/onflow/flow-evm-gateway/issues/748)
- Improvements:
    - [Improve release frequency for signing keys](https://github.com/onflow/flow-evm-gateway/pull/842)
    - [Improve release frequency of signing keys for soft-finality](https://github.com/onflow/flow-evm-gateway/pull/850)
    - [Add metric for the total number of dropped EVM transactions](https://github.com/onflow/flow-evm-gateway/pull/837)
    - [Add metric to count the number of rate-limited transactions](https://github.com/onflow/flow-evm-gateway/pull/839)
- Chores:
    - [Sync soft-finality with changes from `main` branch](https://github.com/onflow/flow-evm-gateway/pull/843)
    - [Sync soft-finality branch with changes from main](https://github.com/onflow/flow-evm-gateway/pull/848)
    - [Run Go modernize tool to simplify code-base](https://github.com/onflow/flow-evm-gateway/pull/844)


**This sprint**

- Cadence Language
  - Continue [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059).
  - Support any changes need to improve AI use of Cadence language server (reviewing / updating errors).
  - Maybe start [Metering optimization](https://github.com/onflow/cadence/issues/4058).

- Cadence Execution
  - Continue work on Badger -> Pebble DB [M4: remove dependency on Badger DB completely from ENs and ANs](https://github.com/onflow/flow-go/issues/7265).
  - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598).
  - Continue [Scheduled callbacks](https://github.com/onflow/flow-go/issues/7482).

- EVM
  - Continue: [Integrate JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)
  - Start EVM GW resilience improvements[1](https://github.com/onflow/flow-evm-gateway/issues/764), [2](https://github.com/onflow/flow-evm-gateway/issues/778)

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
* Collectors submit votes for root block for spork bootstrapping [TODO]

**Done last sprint**

* <ins>Overload resilience</ins>
  -

* <ins>Data Availability</ins>
  - Optimistic Sync PR reviews
  - KROK Team
    - Done:


    - In Review (Working on review remarks):


    - In Progress



* <ins>Malleability</ins>
  * Malleability PR reviews
  * Updating malleability merge branches
  * KROK Team

    **_Done:_**



    **_In Review_**:



    **_In Progress_**:




* <ins>Cryptography</ins>
  * Passkeys: PR review
  * Proof of Possession: Completed the blog and it is now ready to be published.
  * multi-SPoCK: Starting reading another PoP-based proof of BLS multi signature.
  * Threshold signature: addressed security report through minor improvement of the repo comments
  * Crypto library: Tried Devin AI in a long refactor task.

* <ins>Other</ins>


**This sprint**

* <ins>Overload resilience</ins>


* <ins>Data Availability:</ins>
  - PR Reviews
  - Milestone 2 Optimistic Sync: Continue work on result forest.
  - KROK Team



* <ins>Malleability</ins>
  - Continue PR review and support for current Immutability issues
  - Continuing Benchnet testing for malleability rollout
  - KROK Team



* <ins>Cryptography</ins>
  * Passkeys: ?
  * SPoCK: ?

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




**This sprint**




---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* React SDK
  * Added style isolation to mitigate CSS app/library conflicts
  * Created demo environment deployed to Vercel for JS library testing
  * Released components in the new React SDK
* DeFi Actions / AI
  * Identified DeFi Actions use cases
  * Created DeFi Actions outputs for demo
  * Created bridging token React hook for React SDK
  * Added CLI new project config to improve Cursor AI context
  * Supported effort for Cadence errors with context for AI
  * Reduced Dependency Manager prompts for agents with smart alias determination
  * Added block explorer link to CLI transaction outputs
*  Switched SDKs & documentation to use latest finalized vs sealed for the reference block

**This Sprint**

* DeFi Actions / AI
  * Solidifying DeFi Actions demo outputs
  * Getting DeFi Actions outputs to consistently generate with AI
  * Determine best LLM model for Cadence AI generation
  * Expose emulator scheduled callbacks through CLI
  * Expose scheduled callbacks through Cadence testing environment
  * Look into manipulating time for scheduled callbacks in emulator/CLI

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (June 13: 0.5/week -> 95% decrease in bugs since Jen/Feb!

**Done last sprint**



**This sprint**



**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Monitoring & Observability**


**Tidal Support**


**Support**



**Active Epics**
- [Tidal Infra & Observability](https://github.com/onflow/ff-sre-infrastructure/issues/450)
- [Monitoring & Observability](https://github.com/onflow/ff-sre-infrastructure/issues/118)

---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Published Surge Pricing FLIP
* Deep-dive into infused Tokens

**This sprint**

* Drive Surge Pricing FLIP disucssion.
* Continue work on infused tokens

---
