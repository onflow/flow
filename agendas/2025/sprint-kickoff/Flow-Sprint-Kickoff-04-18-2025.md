# Overview

 ### Team Wins 🎉

 * Completed Cadence [Compiler Milestone 3](https://github.com/onflow/cadence/issues/3769) - Realistic fungible token transfer.
 * Optimizations found while working on Badger -> Peble storage refactoring, increasing execution throughput by ~15%.
 * Websocket API live on public endpoint and available through fcl.

---

### Mainnet Uptime - Last 14 days (04/04/25 to 04/18/25) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |      0%         |
| Block Finalization      | 99.9%   |    100%       |      0%         |
| Transaction Execution   | 99.9%   |    99.95%     |      49.6%      |
| Block Sealing           | 99.9%   |    99.98%     |      24.8       |
| Access API Liveness     | 99.9%   |    100%       |      0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification  | Total  | Comments      |
| ---------------------- | --------- | ---------- | --------- | --------- | ------------ | ------ | ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| Total downtime in mins |           | 210        | 210       | 230       | 210          | 230    |               |
| YTD (04/17/25) SLA     |           | 99.86%     | 99.86%    | 99.85%    | 99.86%       | 99.85% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 99.96%       | 99.96% |               |

### Incidents

### Mainnet 
- P0 and P1: None

### Testnet
- P0: Tuesday, April 15th at 9:28 AM for ~40 mins - Consensus finalization halted.
  
---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8 |    7      |       0       |       9          |        **24**       |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 3  |    1     |       2       |       2          |        **8**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       9         |       6          |        **53**          |
| Total       | **19** |    **50**   |       **16**       |       **17**         |        **102**         |

- Three new FLIPS
  1. FLIP 322: Optimistic Syncing of Execution Data (added last sprint)
  2. FLIP 321: Redundancy Improvement - update service account signers
  3. FLIP 326: Redundancy Improvement - update service account signers (part 2)

### Key Release Dates & Breaking Changes
n/A

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- [Compiler milestone 4 - FVM integration & execution of book-keeping functions](https://github.com/onflow/cadence/issues/3856)
    - [Separate out the re-usable components of the `vm.Config`](https://github.com/onflow/cadence/pull/3881)
- [Compiler Milestone 3](https://github.com/onflow/cadence/issues/3769)
    - [Fix condition compiling](https://github.com/onflow/cadence/pull/3877)
    - [Improve compilation of static method invocations](https://github.com/onflow/cadence/pull/3876)
    - [Optimize transfer instructions](https://github.com/onflow/cadence/pull/3875)
    - [Enable access to last instruction, test codegens](https://github.com/onflow/cadence/pull/3874)
    - [Fix native function dynamic dispatching](https://github.com/onflow/cadence/pull/3873)
    - [Support builtin methods for user-defined types](https://github.com/onflow/cadence/pull/3872)
    - [Improve program printing](https://github.com/onflow/cadence/pull/3871)
    - [Rename path instruction](https://github.com/onflow/cadence/pull/3870)
    - [Register common type-bound functions for all builtin types](https://github.com/onflow/cadence/pull/3869)
    - [Improve program printer](https://github.com/onflow/cadence/pull/3868)
    - [Run setup account transaction in FT test](https://github.com/onflow/cadence/pull/3867)
    - [Skip anonymous functions in linker](https://github.com/onflow/cadence/pull/3866)
    - [Improve compilation of constants](https://github.com/onflow/cadence/pull/3862)
    - [Make FT transfer VM test realistic](https://github.com/onflow/cadence/issues/3857)
    - [Implement more builtin types and functions](https://github.com/onflow/cadence/pull/3859)
    - [Support entitlements in compiler/vm](https://github.com/onflow/cadence/pull/3858)
    - [Clean up VM tests](https://github.com/onflow/cadence/pull/3853)
    - [Complete the implementation of vm function values](https://github.com/onflow/cadence/pull/3851)
    - [Add UUID to resources](https://github.com/onflow/cadence/pull/3850)
    - [Sync `feature/compiler` with `master`](https://github.com/onflow/cadence/pull/3848)
    - [Implement closed upvalues in VM](https://github.com/onflow/cadence/pull/3846)
    - [Make existing interpreter values reusable in VM](https://github.com/onflow/cadence/issues/3693)
    - [Implement unclosed upvalues in VM](https://github.com/onflow/cadence/pull/3843)
    - [Compile upvalues](https://github.com/onflow/cadence/pull/3842)
    - [Work towards implementing closures](https://github.com/onflow/cadence/pull/3840)
    - [Compile simple inner functions](https://github.com/onflow/cadence/pull/3839)
    - Testing:
        - [Test contract `account` and resource `owner` fields](https://github.com/onflow/cadence/pull/3841)
- Port internal fixes to public repo fter HCU:
    - [Port v1.3.4 to master](https://github.com/onflow/cadence/pull/3854)
    - [[v1.3] Port internal v1.3.4-rc.2](https://github.com/onflow/cadence/pull/3852)
- Internal fixes: [1](https://github.com/onflow/cadence-internal/pull/329)

**Cadence Execution**
- [Migration of Badger to Pebble DB](https://github.com/onflow/flow-go/issues/6515)
    - bugfixes:
        - [Discard BadgerDB transaction when iterator is closed](https://github.com/onflow/flow-go/pull/7254)
        - [Close BadgerDB before db init functions return error](https://github.com/onflow/flow-go/pull/7229)
    - [Remove old code in `initBadgerDB()`](https://github.com/onflow/flow-go/pull/7230)
    - [Refactor storage collections for access node](https://github.com/onflow/flow-go/pull/7093)
- Storage Performance Optimizations:
    - [Optimize speed & memory for generating db keys (BadgerDB and Pebble)](https://github.com/onflow/flow-go/pull/7243)
    - [Optimize storing execution receipts in BadgerDB](https://github.com/onflow/flow-go/pull/7238)
- TPS Loader
    - [Add PID controller](https://github.com/onflow/flow-execution-effort-estimation/pull/30)
- HCU dependency updates:
    - [Update to Cadence v1.3.4 and atree v0.10.0](https://github.com/onflow/flow-go/pull/7261)
    - [[v0.40] Update to Cadence v1.3.4 and atree v0.10.0](https://github.com/onflow/flow-go/pull/7260)

**This sprint**

- Cadence Language
  - Investigate bug report
  - Continue work on the [Compiler Milestone 4](https://github.com/onflow/cadence/issues/3856)

- Cadence Execution
  - Complete Badger -> Pebble migration [Milestone 2](https://github.com/onflow/flow-go/issues/6515)
  - Complete performance deep-dive: analyze CPU profile produced on migration testnet * Mainnet with new TPS loader to identify new bottlenecks / opportunities for further optimizations.
  - Continue new Trie research
  - Continue work on [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
  - Continue supporting upgrade of EVM core to "Pectra" release
  - Start [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

**On Hold**
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s):

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* EVM Gateway integrate Pectra upgrade [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Furthering permissionless participation
  2. KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**
* <ins>Data Availability</ins>
  - KROK Team

    Done:
    - [[Access] When sent transaction remains in pending status](https://github.com/onflow/flow-go/issues/7264)
    - [[DataAvailability] Create in-memory Transactions storage implementation](https://github.com/onflow/flow-go/issues/7188)
    - [[DataAvailability] Create in-memory LightTransactionResults storage implementation](https://github.com/onflow/flow-go/issues/7184)
    - [[DataAvailability] Create in-memory TransactionResultErrorMessages storage implementation](https://github.com/onflow/flow-go/issues/7185)
    - [[DataAvailability] Create in-memory Events storage implementation](https://github.com/onflow/flow-go/issues/7183)
    - [[DataAvailability] Create in-memory Collections storage implementation](https://github.com/onflow/flow-go/issues/7187)

    In Review:
    - [[DataAvailability] Implement Persister interface](https://github.com/onflow/flow-go/issues/7198)
    - [[DataAvailability] Create in-memory Registers storage implementation](https://github.com/onflow/flow-go/issues/7186)
   
    In Progress: 
    - [[DataAvailability] Implement Download step logic](https://github.com/onflow/flow-go/issues/7202)
    - [[DataAvailability] Implement processing pipeline state machine](https://github.com/onflow/flow-go/issues/7201)
    

* <ins>Malleability</ins>
  - Support KROK PR reviews
  - Immutable data structures
     - Researched and started implementing [`structwrite` linter](https://github.com/onflow/flow-go/pull/7310)
     - Added [tracking issues](https://github.com/onflow/flow-go/issues/7269) for immutable data structures 
  - KROK Team

    Done:
    - [[Malleability A] TimeoutObject](https://github.com/onflow/flow-go/issues/6690)

    In Review: 
    - [[Malleability C] CollectionGuarantee](https://github.com/onflow/flow-go/issues/6722)
    - [[Malleability] Review structs with stub ID implementation](https://github.com/onflow/flow-go/issues/7226)
  
    In Progress:
    - [[Malleability C] cluster.Block](https://github.com/onflow/flow-go/issues/6660)
   
* <ins>EVM Gateway</ins>
  - Merged Ethereum Pectra updates and started testing

* <ins>Cryptography</ins>
  - SPoCK aggregation

    
* <ins>Protocol misc</ins>
  - Completed technical overview to implement [state and event proofs for light clients](https://www.notion.so/flowfoundation/State-and-Event-Proofs-1d11aee123248096975ef55b1d05bb1e) on Flow

**This sprint**

* <ins>Data Availability</ins>
  - Continue to work on "In Progress" tasks and PR-s remarks
  - [[DataAvailability] Implement Index step logic](https://github.com/onflow/flow-go/issues/7203)
  - [[DataAvailability] Implement Persist step logic](https://github.com/onflow/flow-go/issues/7204)
  

* <ins>Malleability</ins>
  - Support KROK malleability PR reviews
  - Continuing [`structwrite` linter](https://github.com/onflow/flow-go/issues/7271) and integrate with CI 
  - KROK Team:
    - Continue to work on "In Progress" tasks and PRs remarks
    - Start tasks from ["[Epic] [Malleability] Hashable Data Structures are Immutable"](https://github.com/onflow/flow-go/issues/7269)

* <ins>EVM Gateway</ins>
  - Test EVM Pectra upgrade process on migrationnet

* <ins>Cryptography</ins>
  - SPoCK aggregation

* <ins>Protocol misc</ins>
  - Integrate lock context library into Follower as PoC for Pebble locking strategy (once Pebble version of Follower is complete)
  - 
**On Hold**

**Active Epics**
* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] EVM Gateway Pectra upgrade](https://github.com/onflow/flow-go/issues/7152)
* [[EPIC] Access Node supports soft-finality updates](https://github.com/onflow/flow-go/issues/6646)

---

### **DeFi** \[Jerome]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**
 - Completed first pass of StackFi source/sink connectors PoC for simple swap
 - Started off-chain trigger PoC
 - Finalized migration plan for WFLOW migration from Wrap/Anchorage to L0, locked down contract details
 - Deep dive into Veda BoringVaults and feasibility for Streamline

**This sprint**
 - Continue developing StackFi PoCs
 - Complete off-chain trigger PoC
 - Start WFLOW migration
 - Finalize yield source partners for streamline

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Q1: Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)
- Q2: Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem.

**Done last sprint**

- Finished coding the Flow Kit library (React Hooks) and released the alpha version
- Released soft finality support in FCL and updated the documentation
- Integrated the Streaming API into FCL and added documentation

**This sprint**

- Fix miscellaneous issues in the Kit alpha
- Write documentation for the Kit library
- Address TypeScript issues in FCL
- Research solutions for enabling Metamask to interact with Cadence

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Apr 4): 4.25/week

**Done last sprint**

- Migration from SimpleHash to Moralis

Extension:
  - Support 1 password across all profiles on Extension

**This sprint**

- Automatically support new token launches within the wallet - new verified/unverified token feature
- Support paying VM bridge fee during transaction

- iOS/Android:
  - New token display format for small values
  - Support transferring tokens with up to their supported precision
  - UI Updates to NFT page

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Project Work**

**Docker Logging Resliience**
- [Bring current loki driver configuration from nodes to terraform](https://github.com/onflow/ff-sre-infrastructure/issues/251)
- [Execute rolling upgrade against DL nodes to deploy docker daemon changes to the logging driver](https://github.com/onflow/ff-sre-infrastructure/issues/250)
- [Create Ansible playbook to update DL Nodes with non-blocking docker driver solution](https://github.com/onflow/ff-sre-infrastructure/issues/238)
- [Evaluate & design solution to address limitations of docker logging driver](https://github.com/onflow/ff-sre-infrastructure/issues/240)


**Terraform Module Consolidation**
- [Consolidate Terraform Network Modules into a Single Module](https://github.com/onflow/ff-sre-infrastructure/issues/98)
- [Create Strategy for Tagging Terraform Modules](https://github.com/onflow/ff-sre-infrastructure/issues/95)
- [Migrate “Live” Networks to the New Module](https://github.com/onflow/ff-sre-infrastructure/issues/99)
- [Document Terraform infra repo creation process](https://github.com/onflow/ff-sre-infrastructure/issues/224)

**Cost Optimization & Reduction**
- [Deprecate Canary Network](https://github.com/onflow/ff-sre-infrastructure/issues/218)

**Wallet Infra Migration**
- [Copy 4D terraform modules to ff-terraform-modules repo](https://github.com/onflow/ff-sre-infrastructure/issues/280)

**Optimize Alert Management**
- [Create HTTP uptime monitors to monitor Envoy Accessibility](https://github.com/onflow/ff-sre-infrastructure/issues/271)

**Support & Maintenance**

- [Update MN EVM GW DNS to route to QN](https://github.com/onflow/ff-sre-infrastructure/issues/286)
- [Create redirect from rewards.flow.com to store.flow.com](https://github.com/onflow/ff-sre-infrastructure/issues/284)
- [Increase Devnet52 SN data disk size](https://github.com/onflow/ff-sre-infrastructure/issues/279)
- [Increase Devnet52 AN disk space](https://github.com/onflow/ff-sre-infrastructure/issues/274)
- [Clean up MN AN boot disk space](https://github.com/onflow/ff-sre-infrastructure/issues/273)
- [Add support for accessing the Flow BigQuery dataset](https://github.com/onflow/ff-sre-infrastructure/issues/266)
- [Update signers for service account KMS keys](https://github.com/onflow/ff-sre-infrastructure/issues/265)
- [Update TN Envoy logging for analytics](https://github.com/onflow/ff-sre-infrastructure/issues/263)
- [Create documentation for querying Loki logs with logcli](https://github.com/onflow/ff-sre-infrastructure/issues/256)
- [Collect Loki Logs for Shipyard](https://github.com/onflow/ff-sre-infrastructure/issues/255)
- [Add missing ANs to Migration Mainnet Ansible configuration](https://github.com/onflow/ff-sre-infrastructure/issues/247)
- [Create new repo for managing wallet infrastructure](https://github.com/onflow/ff-sre-infrastructure/issues/223)
- [Create Wallet DNS records on flow subdomains](https://github.com/onflow/ff-sre-infrastructure/issues/222)
- [Re-align manual changes in Grafana with Terraform](https://github.com/onflow/ff-sre-infrastructure/issues/216)

**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Cost Optimization & Reduction](https://github.com/onflow/ff-sre-infrastructure/issues/235)
* [Support Private Image Builds](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=104950609&issue=onflow%7Cff-sre-infrastructure%7C225)

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
  * BlockDaemon 10 SNs onboarded.
  * Alchemy 2 SNs onboarded.
  * Tibles 2 SNs onboarded.
  * No operator controls 1/3rd or more of the network's consensus nodes

**This sprint**

  * Vishal OOO

---
