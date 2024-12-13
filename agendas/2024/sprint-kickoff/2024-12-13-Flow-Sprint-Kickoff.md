# Overview

 ### Team Wins 🎉
 
 * EVM Dry-run deployed on Mainnet (enables more flexibility in configuring EVM traces and reduces load on ANs)
 * Completed [DB access abstraction](https://github.com/onflow/flow-go/pull/6465) - first step towards replacing Badger DB.

--- 

### Mainnet Uptime - Last 14 days (11/30/24 to 12/13/24) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    ?     |       ?      |

#### Incidents
* 


---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**
- Cadence compiler
    - [Allow compiler to generate instructions, retarget VM to use instructions](https://github.com/onflow/cadence/pull/3715)
    - [Refactor instruction encoding/decoding](https://github.com/onflow/cadence/pull/3714)
    - [Refactor bytecode encoding](https://github.com/onflow/cadence/pull/3713)
    - Custom VM
        - [Improve and test instruction printer](https://github.com/onflow/cadence/pull/3706)
    - tech-debt removal: [Remove the old compiler and VM PoC](https://github.com/onflow/cadence/pull/3705)
- Performance improvement
    - [Lazily compute fields of account type values](https://github.com/onflow/cadence/pull/3710)

**Cadence Execution**
- [Add universal database operations](https://github.com/onflow/flow-go/pull/6465)
- Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
- Execution validation - [Cadence backwards compatibility](https://github.com/onflow/flow-go/issues/6557)
    - [Backport v0.37 cmd add verify execution result](https://github.com/onflow/flow-go/pull/6791)
    - [[Util] Add verify execution result cmd](https://github.com/onflow/flow-go/pull/6746)

**EVM Core**
- Block re-execution fix: [Fix coinbase address change for old testnet](https://github.com/onflow/flow-go/pull/6763)

**EVM Gateway**
- Dry-run feature (local state index)
- Improving latency of eth_sendRawTransaction - [Enable validation of submitted transactions with local state index](https://github.com/onflow/flow-evm-gateway/pull/693)
    - [Make EVM transaction submission non-blocking](https://github.com/onflow/flow-evm-gateway/issues/654)
    - [Validate transactions using local state](https://github.com/onflow/flow-evm-gateway/issues/586)
    - [Improve key-rotation mechanism](https://github.com/onflow/flow-evm-gateway/issues/118)
- GW Hardening Improvements:
    - [Use instance of config instead of reference](https://github.com/onflow/flow-evm-gateway/pull/689)
    - EVM state checkpointing & tooling:
        - [Extract EVM state](https://github.com/onflow/flow-evm-gateway/pull/683)
        - [Refactor Export EVM State and Compare State Diff](https://github.com/onflow/flow-go/pull/6760)
        - [Add verification tool for evm offchain replay](https://github.com/onflow/flow-go/pull/6755)
- Bugfixes:
    - [eth_getLog() returns null instead of list if there are no transactions](https://github.com/onflow/flow-evm-gateway/issues/695)
    - [Fix logical error in `eth_estimateGas` endpoint](https://github.com/onflow/flow-evm-gateway/pull/690)
- Testing
    - [Use proper variable in E2E test file for logs filtering](https://github.com/onflow/flow-evm-gateway/pull/698)

**This sprint**

- Continue [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539) stretch goals & release 1.0.0.

- Cadence Language
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)
  - Start working on Blog post to communicate status & goals of the compiler POC.

- Cadence Execution
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584) - Testing
  - Continue new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)
  - Start work on [FVM Programs cache invalidation](https://github.com/onflow/flow-go/issues/6507)

**On Hold**

- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Faster transaction results to improve user experience [IN PROGRESS]
* Address vectors which risk network downtime
  1. Operationalize EFM Recovery [IN PROGRESS]
  2. Protocol level HCU [NOT STARTED]
* Add passkey support: Protocol design and scoping [IN PROGRESS]
* Furthering permissionless participation
  1. Proof of Possession [IN PROGRESS]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**

* <ins>EFM and Protocol HCU</ins>

  - Improving upgrade plan https://www.notion.so/flowfoundation/EFM-Recovery-Release-Upgrade-Plan-14d1aee1232480228a87e43933815285?pvs=4
    - Avoid a small smart contract change
    - Simplify steps to avoid second Protocol HCU
  - Implement Protocol HCU version-aware upgrade logic [Issue #6796](https://github.com/onflow/flow-go/pull/6796), [Issue #1531](https://github.com/onflow/flow/pull/1531)
  - Continued design and implementation of [recoverable random beacon key state machine](https://github.com/onflow/flow-go/pull/6771)
  - [Ensure backward-compatibility of EpochCommit](https://github.com/onflow/flow-go/pull/6795)
  - Updates to [integration tests](https://github.com/onflow/flow-go/pull/6632)

* <ins>Data Availability</ins>
  - KROK Team
    - Implement the Websocket controller and data providers
       - [Issue #6642](https://github.com/onflow/flow-go/issues/6642)
       - [Issue #6640](https://github.com/onflow/flow-go/issues/6640)
       - [Issue #6587](https://github.com/onflow/flow-go/issues/6587)
       - [Issue #6637](https://github.com/onflow/flow-go/issues/6637)
       - [Issue #6775](https://github.com/onflow/flow-go/issues/6775)
       - [Issue #6767](https://github.com/onflow/flow-go/issues/6767)
       - [Issue #6724](https://github.com/onflow/flow-go/issues/6724)

* <ins>Cryptography</ins>

   - PoP
      - Stax failure
         - VL confirmed the breaking change issue in a dependent library - requires VacuumLabs help, discussion ongoing
      - Flow Port integration and real device test: further debugging - Tom fixed the flow-port issue and integration has passed
      - Real device testing: worked on fixing issue with screen display on new app build
      - Work is paused till VL fixes the [repo issue](https://github.com/onflow/ledger-app-flow/pull/110)
  - Passkeys
      - Familiarization with other implementations (mainly apple, google)
      - Reading up on FIDO2 specs, including CTAP and WebauthN, details on signatures (algos, data signed)

**This sprint**

* <ins>EFM and Protocol HCU</ins>
  - Finalize and merge [backward-compatibility of EpochCommit](https://github.com/onflow/flow-go/pull/6795)
  - Continue PR for recoverable random key state machine
  - Continue on backward-compatibility updates needed for EFM

* <ins>Data Availability</ins>
  - KROK Team
    - Continue to implement the WebSockets controller and data providers
      - [Issue #6641](https://github.com/onflow/flow-go/issues/6641)
      - [Issue #6586](https://github.com/onflow/flow-go/issues/6586)
      - [Issue #6799](https://github.com/onflow/flow-go/issues/6799)
      - [Issue #6644](https://github.com/onflow/flow-go/issues/6644)
    - Address PR review feedback

* <ins>Cryptography</ins>
  - Passkeys
    - Present and discuss FVM implementation options
      
**On Hold**
* Deliver public roadmap & vision for technical protocol decentralization focusing on current challenges and upcoming updates for permissionless consensus on Flow.

**Active Epics**
* Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**

* Started LayerZero integration
* Support Alchemy, .Find with EVM GW support

**This sprint**

* Complete LayerZero integration
* Support Thirdweb and other teams as needed for EVM GW node standup

**On Hold**
- N/A


---

### **Developer Experience** \[Kan]

Cycle Objective(s): 
 - Improve Quality of Life, Level Up Dev Documentation and Learning Path, Supercharge EVMxCadence, Inspire and Excite Wave of New Flow Devs


**Done last sprint**

* [Discovery for VM bridge improvements](https://github.com/onflow/flow-evm-bridge/issues/135)
* [Improvement of proposer key cycling example and documentation](https://github.com/onflow/dx-internal/issues/33)
* [Assist Wallet team with CI/CD and automated testing](https://github.com/onflow/dx-internal/issues/47)
* [Start work on Gold Star, a new doc site initiative](https://github.com/onflow/dx-internal/issues/41)
* [Continue Lost & Found integration](https://github.com/onflow/flow-port/issues/366)
* [Update bridge.flow.com to be compatible with LayerZero](https://github.com/onflow/flow-bridge-app/issues/11)
* [Support PoP work](https://github.com/onflow/flow-port/issues/364)
* [(BUG) Flow port number input slow/laggy](https://github.com/onflow/flow-port/issues/381)
* [Fix transaction error not being exported](https://github.com/onflow/fcl-js/issues/2042)
  

**This sprint**


* [Discovery for VM bridge improvements](https://github.com/onflow/flow-evm-bridge/issues/135)
* [Improvement of proposer key cycling example and documentation](https://github.com/onflow/dx-internal/issues/33)
* [Assist Wallet team with CI/CD and automated testing](https://github.com/onflow/dx-internal/issues/47)
* [Start work on Gold Star, a new doc site initiative](https://github.com/onflow/dx-internal/issues/41)
* [Continue Lost & Found integration](https://github.com/onflow/flow-port/issues/366)
* [Update bridge.flow.com to be compatible with LayerZero](https://github.com/onflow/flow-bridge-app/issues/11)
* [Support PoP work](https://github.com/onflow/flow-port/issues/364)


**On Hold**

- 

---

### Wallet (Jeff) 

**Done last sprint**

**This sprint**

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**

**Done last sprint**

**Automation**
- Create Grafana integration for routing messages to slack
- [Create infra for backwards compatibility automation](https://github.com/onflow/ff-sre-infrastructure/pull/70)
- [Create automation for verifying backwards compatibility](https://github.com/onflow/ff-sre-automation/pull/7)
- [Add polling and env var injection support to backwards compatibility automation](https://github.com/onflow/ff-sre-automation/pull/7)
- [Update backwards compatibility automation to use proper CDP dir](https://github.com/onflow/ff-sre-automation/pull/9)

**IAM Migration**
- Clean up old IAM access in GCP projects
- [Create Flow Foundation IAM groups](https://github.com/onflow/ff-sre-infrastructure/pull/54)
- Validate access with team members before cutover
- [Remove DL group access from FF GCP projects](https://github.com/onflow/ff-sre-infrastructure/pull/72)
- [Remove KMS key access](https://github.com/onflow/ff-sre-infrastructure/pull/75)

**GCR Migration**
- Validated and executed copy of all images to Artifact Registry

**Observability**
- Fix K6 synthetic monitor(s) to gracefully fail on request timeout

**Support**
- [Create IAC for DNS record](https://github.com/onflow/ff-sre-infrastructure/pull/74)
- [Create DNS record for docs.wallet.flow.com](https://github.com/onflow/ff-sre-infrastructure/pull/71) 
- [Remove unnecessary wildcard record](https://github.com/onflow/ff-sre-infrastructure/pull/73)

**This sprint**
* Fully migrate GCR to Artifact Registry
* Assist in setup of TN fork for testing
* Update CD workflow to leverage 
* Continue interviewing SRE Candidates

**On Hold**
**Active Epics**

---
