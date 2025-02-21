# Overview

 ### Team Wins 🎉
 
 * Mainnet now running v0.38, flow-go master ! This means we can now finally run our backwards-compatibility CI workflows to ensure it remains backwards compatible, making rolling upgrades much safer to do in the future.
 * First on-the-fly migration of on-chain data running on mainnet, [optimizing storage of 65M+ accounts](https://github.com/onflow/cadence/issues/3584) - this would otherwise require prolonged outage during network upgrade.
 * Added NFL tests to [Cadence CI](https://github.com/onflow/cadence/actions/workflows/ci.yml) - we run TapShot and NFL tests nightly to catch any regressions.
 * New Ledger App which includes the Proof Of Possession changes for the node registeration transaction has been released.
   
--- 

### Mainnet Uptime - Last 14 days (02/06/25 to 02/19/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    98.96%       |      1041.7%         |
| Block Finalization      | 99.9%   |    98.96%       |       1041.7%         |
| Transaction Execution   | 99.9%   |    98.91%     |       1091.27%      |
| Block Sealing           | 99.9%   |    98.91%     |       1091.27%      |
| Access API Liveness     | 99.9%   |    98.96%       |       1041.7%         |

YTD SLA 99.69%

#### P0 or P1 Incidents
* 2 P0 incidents - [Postmortem](https://status.onflow.org/incidents/tp2zb9chpfk3)

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 9 |    7      |       0       |       8        |        **24**        |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1     |       2       |       2          |        **7**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **19** |    **50**   |       **14**       |       **16**         |        **99**         |

- No changes since last sprint.
  
### Key Release Dates & Breaking Changes
* Protocol HCU
  - Testnet: Week of 3rd March (after EthDenver)
  - Mainnet: Week of 10th March

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q1 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- [Cadence compiler milestone 2](https://github.com/onflow/cadence/issues/3742)
    - [Reenable compiler tests](https://github.com/onflow/cadence/pull/3774)
    - [Add tests for compiling casting expressions to casting instructions](https://github.com/onflow/cadence/pull/3771)
    - [Compile and execute emit statement](https://github.com/onflow/cadence/pull/3768)
    - [Support basic casting operations in VM](https://github.com/onflow/cadence/pull/3767)
    - [Decouple interpreter values from interpreter – Part 3](https://github.com/onflow/cadence/pull/3751)
    - [Decouple interpreter values from interpreter – Part 2](https://github.com/onflow/cadence/pull/3748)
    - [Decouple interpreter values from interpreter](https://github.com/onflow/cadence/pull/3698)
    - [Support compilation for before statements](https://github.com/onflow/cadence/pull/3763)
    - [Inline inherited conditions instead generating a separate function](https://github.com/onflow/cadence/pull/3764)
- Fix Cadence CI to run tests from onboarded projects:
    - [Fix and improve compat suite](https://github.com/onflow/cadence/pull/3780)
- Port internal bugfixes: [1](https://github.com/onflow/cadence/pull/3779), [2](https://github.com/onflow/cadence/pull/3778), [3](https://github.com/onflow/cadence/pull/3776), [4](https://github.com/onflow/cadence/pull/3775)
- Dependency updates: 
    - flow-go-sdk:
      - [Update to Cadence v1.3.2](https://github.com/onflow/flow-go-sdk/pull/804)
      - [Update to Cadence v1.3.3](https://github.com/onflow/flow-go-sdk/pull/805)
    - flow-go:
      - [[v0.38] Update to Cadence v1.3.3](https://github.com/onflow/flow-go/pull/7060)
      - [Update to Cadence v1.3.3](https://github.com/onflow/flow-go/pull/7061)
    - flow-cli:
      - [Update to LS v1.2.1](https://github.com/onflow/flow-cli/pull/1888)
      - [Update to Cadence v1.3.1, Go v1.23](https://github.com/onflow/flow-cli/pull/1884)

**Cadence Execution**

- Deployed [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
- Completed [Design for passkey support](https://github.com/onflow/flow-go/issues/6927)
- Migration of Badger to Pebble DB
    - [[Storage Refactor] Init pebble DB in scaffold](https://github.com/onflow/flow-go/pull/6949)
    - [[Storage Refactor] Refactor ConsumerProgress](https://github.com/onflow/flow-go/pull/6872)
- Pre-requisite for Execution effort calibration: [Create a performance loader](https://github.com/onflow/flow-execution-effort-estimation/issues/9)
    - [Fix docs](https://github.com/onflow/flow-execution-effort-estimation/pull/10), [Add lint and test CI](https://github.com/onflow/flow-execution-effort-estimation/pull/8), [Update packages and go version](https://github.com/onflow/flow-execution-effort-estimation/pull/7)
- Cadence upgrades:
    - [v1.3.3](https://github.com/onflow/flow-go/pull/7061), [v1.3.2](https://github.com/onflow/flow-go/pull/7054)
- Tech-debt removal:
    - Atree [Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
        - [Replace empty interface with `any`](https://github.com/onflow/atree/pull/514)
        - [Split array_debug.go and map_debug.go into smaller files](https://github.com/onflow/atree/pull/513)
        - [Replace `panic("not reachable")` with `panic(NewUnreachableError())`](https://github.com/onflow/atree/pull/512)
        - [Split storage.go into smaller files](https://github.com/onflow/atree/pull/511)
        - [Split storable.go & typeinfo.go into smaller files](https://github.com/onflow/atree/pull/510)
        - [Split map.go into smaller files and group related functions](https://github.com/onflow/atree/pull/509)
        - [Split array.go into smaller files and group related functions](https://github.com/onflow/atree/pull/508)
        - [Refactor smoke test to reduce duplicate code](https://github.com/onflow/atree/pull/506)
        - [Rename cmd/stress to cmd/smoke (it only contains smoke tests)](https://github.com/onflow/atree/pull/505)
        - [Move test util funcs to test_utils package for reuse by smoke tests](https://github.com/onflow/atree/pull/504)
        - [Decouple non-test and test code](https://github.com/onflow/atree/pull/503)
        - [Use helper funcs to compute map byte sizes in tests](https://github.com/onflow/atree/pull/501)
- Util improvement: [Add flag to ignore random beacon history to diff-states command of util program](https://github.com/onflow/flow-go/issues/6989)

**This sprint**

- Cadence Language
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)

- Cadence Execution
  - Continue new Trie research
  - Continue [Atree - Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516) and [execution state migration](https://github.com/onflow/flow-go/issues/6527)
  - Continue [Execution performance loader](https://github.com/onflow/flow-go/issues/6896)

**On Hold**
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* Address vectors which risk network downtime
  1. Operationalize EFM Recovery [WRAPPING UP]
  2. Protocol level HCU [SCHEDULING] 
* EVM Gateway hardening - phase 2 [IN PROGRESS]
* Support full spork history across HCU version boundaries (PoC) [NOT STARTED]
* Faster transaction results to improve user experience [WRAPPING UP]
* Add passkey support: Protocol design and scoping [WRAPPING UP]
* Furthering permissionless participation
  1. Proof of Possession [WRAPPING UP]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**
* <ins>Data Availability</ins>
  - KROK Team
  Done:
    - [[Access] Could not unsubscribe with an internally generated subscription_id in new WebSockets](https://github.com/onflow/flow-go/issues/7006)
    - [[Access] Crash when subscribing to "event" topic via new WebSockets](https://github.com/onflow/flow-go/issues/7005)
  In Review:
    - [[Access] Empty error object in successful WebSocket subscription responce](https://github.com/onflow/flow-go/issues/7009)
    - [[Access] DataProviders does not catch invalid arguments](https://github.com/onflow/flow-go/issues/7066)
    - [[Access] heartbeat_interval argument is missing in events/account statuses WebSocket data providers](https://github.com/onflow/flow-go/issues/7080)
    - [[Access] Add documentation for new websockets](https://github.com/onflow/flow-go/issues/6644)
    - [[Access] Gorilla WebSocket connection type may panic. We should catch it](https://github.com/onflow/flow-go/issues/7036)
    - [[Access] Data providers should wrap context.Canceled error](https://github.com/onflow/flow-go/issues/7040)
    - [[Access] Investigate gorilla ReadJSON return error on Close](https://github.com/onflow/flow-go/issues/7045)
    - [[Access] Move data providers models to data provider package](https://github.com/onflow/flow-go/issues/7039)
    - [[Access] Backport tx error messages PRs to v0.33 branch](https://github.com/onflow/flow-go/issues/6613)
    - [[Access] Backport tx error message PRs to v0.37.12](https://github.com/onflow/flow-go/issues/7011)
  In Progress
    - [[Access] Test new WebSocket functionality on mainnet](https://github.com/onflow/flow-go/issues/7013)


* <ins>Malleability</ins>
  - KROK Team
    In Review:
    - [[Malleability A] Attestation](https://github.com/onflow/flow-go/issues/6696)
    - [[Malleability A] LightCollection](https://github.com/onflow/flow-go/issues/6676)
    - [[Malleability A] QuorumCertificate](https://github.com/onflow/flow-go/issues/6684)
    - [[Malleability A] TimeoutCertificate](https://github.com/onflow/flow-go/issues/6689)
    - [[Malleability A] Modelv0](https://github.com/onflow/flow-go/issues/6681)
    - [[Malleability A] Modelv1](https://github.com/onflow/flow-go/issues/6682)
    - [[Malleability B] ExecutionResult](https://github.com/onflow/flow-go/issues/6655)
    - [[Malleability B] Identity](https://github.com/onflow/flow-go/issues/6650)
    - [[Malleability B] Event](https://github.com/onflow/flow-go/issues/6651)
    Switched from Malleability B to the mempool package refactoring
    In Progress:
    - [[Malleability] Split the BackData interface, by separating out Adjust and AdjustWithInit](https://github.com/onflow/flow-go/issues/7078)
    - [[Malleability] Update BackData to use generic arguments instead of flow.Identifier and flow.Entity](https://github.com/onflow/flow-go/issues/7070)

    Mempool package: According to the investigation created 7 issues with descriptions 


**This sprint**

* <ins>EFM and Protocol HCU</ins>
  - Launch prep
  - Mop up tech debt item for EFM recovery: [Extend unit tests for service events conversion ](https://github.com/onflow/flow-go/issues/6961)
   
* <ins>Data Availability</ins>
  - KROK Team
    - [[Access] Test WebSocket functionality on mainnet](https://github.com/onflow/flow-go/issues/7013)
    - [[Access] Add examples for ws conn usages](https://github.com/onflow/flow-go/issues/6643)
    - [[Access] The "tx_id" argument must be required when subscribing for "transaction_statuses" topic via WebSockets](https://github.com/onflow/flow-go/issues/7083)
    - Will start working on Optimistic Syncing tasks

* <ins>Malleability</ins>
  - KROK Team: 
    - [[Malleability] Update Backend to work with BackData](https://github.com/onflow/flow-go/issues/7072)
    - [[Malleability] Update mapBackData to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7073)
    - [[Malleability] Update herocache to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7074)
    - Continue to work on refactoring of the mempool package


* <ins>EVM Gateway</ins>
  - Continue [PoC to allow indexing unsealed finalized execution results](https://github.com/onflow/flow-evm-gateway/issues/727)
  - Continue [EVM Gateway Hardening - phase 2](https://github.com/onflow/flow-evm-gateway/issues/700)
      
* <ins>Cryptography</ins>
  - PoP
    - Test flow-port release 
    - Coordinate release of Ledger app following PR merge
  - Passkeys
    - Complete writing FlIP
    - Go client to generate webauthn signatures
      
**On Hold**

**Active Epics**
* Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**


**This sprint**
 * Launch Squid, possibly

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**

* [FCL Ethereum Provider for Cross-VM Apps](https://github.com/onflow/fcl-js/issues/2053)
  * Released an alpha version of the FCL Ethereum provider
  * Released an alpha version of the RainbowKit adapter
  * Released an alpha version of the Wagmi adapter

**This sprint**

* [FCL Ethereum Provider for Cross-VM Apps](https://github.com/onflow/fcl-js/issues/2053)
  * Wrap up the remaining p2 provider/adapter issues
  * Write documentation for the provider and adapters
  * Create a demo video
* [FCL React Hooks](https://github.com/onflow/flow-okrs/issues/86)
  * Start work on the FCL React Hooks library
  * Solve FCL blockers around config

**On Hold**

- N/A

---

### Applications / Wallet [Jeff] 

**Cycle Objective(s):** 

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Feb 2): 6.25/week
 - Positive early signal: 2 bugs/week last week!

**Done last sprint**

**This sprint**
  
- Focusing on resolving immediate customer problems in Flow Wallet Extension:
  - Token Display and Manipulation (6 issues in the past month)
  - UI / Profile Stability (4 issues in the past month)
  - Backups / Recovery / Security (3 issues in the past month)
 
- Flow Wallet Extension:
  - Release v2.7.3 - Fixes many customer problems in FT display/manipulation, app stability and more.
  - Working on: UI Updates, NFT display/manipulation hardening
 
- Flow Wallet iOS/Android:
  - Continued focus on quick-win polish items: Copy fixes, UI tweaks, FTUE improvements.
  - Targeting release early next week in advance of EthDenver

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**


**Node Hosting**
  * [Infrastructure for MN26 shadow node](https://github.com/onflow/ff-sre-infrastructure/pull/155)
  * [Import migration mainnet firewall rules to terraform codebase](https://github.com/onflow/ff-sre-infrastructure/pull/163)
  * [Replacement of branch ref by new tag ref for network module](https://github.com/onflow/ff-sre-infrastructure/pull/165)
  * [Recovery of terraform state after disk increase change](https://github.com/onflow/ff-sre-infrastructure/pull/175)
  * Move/restore of disk snapshot between different GCP projects
  * Fix GCP disk reattachment issue on migration testnet

**Observability**

**Deployment Prep**
  * Tests in preparation for the switchover of EVM gateway to QN

**Key Management**

**This sprint**
  * Network module codebase merge between Testnet and Mainnet
  * Automation of new tagging strategy for terraform modules
  * New logic to permit egress firewall rule exceptions with allow action

**On Hold**

**Active Epics**
  * [Terraform Module Consolidation](https://github.com/onflow/ff-sre-infrastructure/issues/94)

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
* Reaching out to 5+ potential new consensus node operators.

**This sprint**

* Contract signing with Alchemy.
* Work with Dorahacks to onboard 4 new SN nodes.
* Sharing contracts with one more SN node operators.

---
