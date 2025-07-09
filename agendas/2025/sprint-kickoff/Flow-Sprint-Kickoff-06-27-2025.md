# Overview

 ### Team Wins 🎉
* Solana's Alpenglow Consensus review
* Closed [Flip 314: Import Aliasing](https://github.com/onflow/flips/pull/315)
* Tracer Bullet Demo

---

### Mainnet Uptime - Last 14 days (06/14/25 to 06/27/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.95%     |       49.6%       |
| Block Sealing           | 99.9%   |    99.95%     |       49.6%       |
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
| Total downtime in mins |           | 210        | 210       | 251       | 210          | 251    |               |
| YTD (6/26/25) SLA      |           | 99.92%     | 99.92%    | 99.9%     | 99.92%       | 99.9%  |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

### Testnet

N/A

### Mainnet
N/A

### Key Release Dates & Breaking Changes

Full network upgrade (Spork) Fall 2025.

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:------:|:-------------:|:-----------------:|:--------:|:-------:|
| Drafted     | 8 |    7      |       0       |    10    | **25**  |
| Proposed    | 1  |    2     |       3       |    0     |  **7**  |
| Accepted    | 3  |    1     |       2       |    2     |  **8**  |
| Rejected    | 0  |    1     |       1       |    0     |  **2**  |
| Implemented | 3  |    5     |       1       |    0     |  **9**  |
| Released    | 4  |    34     |       9         |    6     | **53**  |
| Total       | **19** |    **50**   |       **16**       |  **18**  | **104** |

One new FLIP -
- [FLIP 332: Enforcing Domain-Based Networking Addresses for Nodes](https://github.com/onflow/flips/blob/main/protocol/20250619-network-address-validation.md)

FLIP Review -
- [FLIP-330: Schedule Callback](https://github.com/onflow/flips/pull/331) Review on July 2nd, 9AM Pacific

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- FLIP: [Flip 314: Import Aliasing](https://github.com/onflow/flips/pull/315)
- [Compiler Milestone 9: Run user-submitted transactions and scripts](https://github.com/onflow/cadence/issues/3993)
    - [[Compiler] Improve scripts](https://github.com/onflow/cadence/pull/4013)
    - [[Compiler] Enable more runtime tests to be run with compiler/VM](https://github.com/onflow/cadence/pull/4014)
- [Compiler Milestone 10: Remaining known feature gaps (some exceptions)](https://github.com/onflow/cadence/issues/4015)
    - [[Compiler] Implement `Capability.check` function, fix `Capability.borrow`](https://github.com/onflow/cadence/pull/4017)
    - [[Compiler] Implement String Templates](https://github.com/onflow/cadence/pull/4019)
    - [[Compiler] Close upvalues for locals of for loops](https://github.com/onflow/cadence/pull/4020)
    - [[Compiler] Compile void expressions](https://github.com/onflow/cadence/pull/4023)
    - [[Compiler] Compile conditions in function-expressions and inner-functions](https://github.com/onflow/cadence/pull/4027)
    - [[Compiler] Refactor stdlib functions](https://github.com/onflow/cadence/pull/4030)
    - [[Compiler] Implement more stdlib functions](https://github.com/onflow/cadence/pull/4031)
    - [[Compiler] Implement Account.Keys functions for VM](https://github.com/onflow/cadence/pull/4032)
    - [[Compiler] Implement Account.Inbox and Account.AccountCapabilities functions for VM](https://github.com/onflow/cadence/pull/4034)
    - [[Compiler] Implement RLP and BLS functions for VM](https://github.com/onflow/cadence/pull/4035)
    - [[Compiler] Implement StorageCapabilityController and AccountCapabilityController functions for VM](https://github.com/onflow/cadence/pull/4036)
    - [[Compiler] Implement HashAlgorithm and SignatureAlgorithm for VM](https://github.com/onflow/cadence/pull/4037)
    - [[Compiler] Implement PublicKey constructor for VM](https://github.com/onflow/cadence/pull/4038)
    - [[Compiler] Allow loading of `flow.*` types in VM environment](https://github.com/onflow/cadence/pull/4039)
    - [[Compiler] Refactor method invocation](https://github.com/onflow/cadence/pull/4041)
    - [[Compiler] Implement some `Account.Contracts` and `DeployedContract` functions](https://github.com/onflow/cadence/pull/4044)
    - [[Compiler] Add member access type validation in VM](https://github.com/onflow/cadence/pull/4047)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - [[Compiler] Run more tests with compiler](https://github.com/onflow/cadence/pull/4029)
    - [[Compiler] Fix use of imported enum cases](https://github.com/onflow/cadence/pull/4043)
    - [[Compiler] Remove environment composite functions handler](https://github.com/onflow/cadence/pull/4042)
- Improvements:
    - Performance optimization: [Remove unnecessary storage commit at end of script execution](https://github.com/onflow/cadence/pull/4046)
    - [Improve bimap insertion and tests](https://github.com/onflow/cadence/pull/4045)
- Bugfix:
    - [Fix race when array/dictionary entitlement set is used concurrently](https://github.com/onflow/cadence/pull/4040)
- Automation:
    - [Setup automated fuzzing of Cadence repo](https://github.com/onflow/cadence/issues/3985)
        - [Fix CCF encoder fuzzer](https://github.com/onflow/cadence-fuzzer/pull/25)
        - [Fix decoder fuzzing ](https://github.com/onflow/cadence-fuzzer/pull/26)
        - [Fix cache with restore/clear/save workaround.](https://github.com/onflow/cadence-fuzzer/pull/27)
- Tooling:
    - [Improve API for test framework](https://github.com/onflow/cadence/pull/4018)
    - [[Test] Update to Cadence v1.6.0](https://github.com/onflow/cadence-tools/pull/471)
- Chores:
    - [Port v1.6.1-rc.1](https://github.com/onflow/cadence/pull/4022)
    - [[v1.6] Port v1.6.1-rc.1](https://github.com/onflow/cadence/pull/4021)
    - [Merge master into the compiler feature branch](https://github.com/onflow/cadence/pull/4051)
    - [Merge compiler feature branch](https://github.com/onflow/cadence/pull/4049)

**Cadence Execution**

- [Execution effort calibration](https://github.com/onflow/flow-go/issues/5598)
    - [Collect timing information from multiple ENs](https://github.com/onflow/flow-execution-effort-estimation/pull/55)
    - [Use previous calibration results](https://github.com/onflow/flow-execution-effort-estimation/pull/57)
    - [Improve transaction random generation](https://github.com/onflow/flow-execution-effort-estimation/pull/58)
- [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
    - [[Util] Storage data migration with SSTables (~10x migration speed improvement)](https://github.com/onflow/flow-go/pull/7467)
- [Badger -> Pebble DB M4: remove dependency on Badger DB completely from ENs and ANs](https://github.com/onflow/flow-go/issues/7265)
    - [[Storage] execution node support pebble based execution data store](https://github.com/onflow/flow-go/pull/7506)
Testing:
    - [Update FVM benchmarks to Cadence 1.0](https://github.com/onflow/flow-go/pull/7509)
    - [Add startup option to disable transaction fees](https://github.com/onflow/flow-go/pull/7517)
- chores:
    - [[v0.42] Update to Cadence v1.6.1](https://github.com/onflow/flow-go/pull/7519)
    - [Update to Cadence v1.6.2](https://github.com/onflow/flow-go/pull/7518)
    - [Update to Cadence v1.6.2](https://github.com/onflow/flow-go-sdk/pull/863)
    - [Update to Cadence v1.6.3](https://github.com/onflow/flow-go-sdk/pull/866)

**Flow EVM**
- Improvements:
    - [[Backport v0.42] Fix high CPU usage related to EVM `DeltaView.AddressInAccessList`](https://github.com/onflow/flow-go/pull/7502)
    - [Implement `BatchTxPool` to handle nonce mismatch issues](https://github.com/onflow/flow-evm-gateway/pull/831)
- Bugfix:
    - [Add logic to properly handle JSON-RPC calls exceeding the configured write timeout](https://github.com/onflow/flow-evm-gateway/pull/825)
- Chore:
    - [[Backport] Implement `BatchTxPool` to handle nonce mismatch issues](https://github.com/onflow/flow-evm-gateway/pull/833)

**This sprint**

- Cadence Language
  - Continue Compiler Milestone [9: Run user-submitted transactions and scripts](https://github.com/onflow/cadence/issues/3993) and [10: Remaining known feature gaps (some exceptions)](https://github.com/onflow/cadence/issues/4015).

- Cadence Execution
  - Continue new Trie research
  - Continue work on Badger -> Pebble DB [M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242) and [M4: remove dependency on Badger DB completely from ENs and ANs](https://github.com/onflow/flow-go/issues/7265).
  - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598).
  - Continue [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
  - Continue [Scheduled callbacks](https://github.com/onflow/flow-go/issues/7482).

- EVM
  - Complete [Transactions are not guaranteed to run according to their arrival order](https://github.com/onflow/flow-evm-gateway/issues/699)
  - Start EVM GW resilience improvements[1](https://github.com/onflow/flow-evm-gateway/issues/764), [2](https://github.com/onflow/flow-evm-gateway/issues/778)



**On Hold**
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]
Cycle Objective(s):

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* EVM Gateway integrate Pectra upgrade [DONE]
* Address data structure malleability risk [IN PROGRESS]
* Furthering permissionless participation
  * KR1: Proof of Possession [DONE]
  * KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  - PR reviews for Milestones 1 & 2 of Optimistic Sync
  - Initial draft of caching layer.
  - [[DataAvailability] Add LatestPersistedSealedResult module](https://github.com/onflow/flow-go/pull/7460)
  - [[DataAvailability] Improve error handling in new indexer module and storage](https://github.com/onflow/flow-go/pull/7513)
  - KROK Team
    - Done:
      - [[DataAvailability] Add new error message requester](https://github.com/onflow/flow-go/pull/7484)
      - [[DataAvailability] Integrate pipeline processing steps into Core](https://github.com/onflow/flow-go/pull/7470)
      - [[DataAvailability] Implement Persist step logic](https://github.com/onflow/flow-go/pull/7415)
      - [[DataAvailability] Extract collection syncing logic from ingestion engine](https://github.com/onflow/flow-go/pull/7455)
    - In Review (Working on review remarks):
      - [[DataAvailability] Add functional tests for processing pipeline](https://github.com/onflow/flow-go/pull/7526)
      - [[DataAvailability] Create simplified version of ingestion engine](https://github.com/onflow/flow-go/pull/7504)
      - [[DataAvailability] Improve ingestion engine error handling](http://github.com/onflow/flow-go/pull/7552)

* <ins>Malleability</ins>
  * PR review and support for current Immutability issues
  * Investigating strategies for enforcing data structure structural validity at the network layer boundary
  * KROK Team
    * Done:
        * [[Malleability Immutable] Enforce immutability for CollectionGuarantee #7283](https://github.com/onflow/flow-go/issues/7283)
        * [[Malleability Immutable] Enforce immutability for Collection #7281](https://github.com/onflow/flow-go/issues/7281)
        * [[Malleability Immutable] Enforce immutability for Vote #7273](https://github.com/onflow/flow-go/issues/7273)
        * [[Malleability Immutable] Enforce immutability for MissingCollection #7275](https://github.com/onflow/flow-go/issues/7275)
        * [[Malleability Immutable] Enforce immutability for IncorporatedResult #7292](https://github.com/onflow/flow-go/issues/7292)
        * [[Malleability Immutable] Enforce immutability for Chunk #7279](https://github.com/onflow/flow-go/issues/7279)
        * [[Malleability Immutable] Enforce immutability for ChunkDataPack #7280](https://github.com/onflow/flow-go/issues/7280)
        * [[Malleability Immutable] Enforce immutability for ExecutionResult #7290](https://github.com/onflow/flow-go/issues/7290)
        * [[Malleability Immutable] Enforce immutability for ResultApprovalBody #7299](https://github.com/onflow/flow-go/issues/7299)
        * [[Malleability Immutable] Enforce immutability for Attestation #7298](https://github.com/onflow/flow-go/issues/7298)
        * [[Malleability Immutable] Enforce immutability for ResultApproval #7300](https://github.com/onflow/flow-go/issues/7300)
        * [[Malleability Immutable] Enforce immutability for Locator #7276](https://github.com/onflow/flow-go/issues/7276)
        * [[Malleability Immutable] Enforce immutability for ComputationResult #7274](https://github.com/onflow/flow-go/issues/7274)
        * [[Malleability Immutable] Enforce immutability for TimeoutCertificate #7302](https://github.com/onflow/flow-go/issues/7302)
        * [[Malleability Immutable] Enforce immutability for TimeoutObject #7272](https://github.com/onflow/flow-go/issues/7272)
        * [[Malleability Immutable] Enforce immutability for Event #7287](https://github.com/onflow/flow-go/issues/7287)
        * [[Malleability Immutable] Enforce immutability for Seal #7301](https://github.com/onflow/flow-go/issues/7301)
        * [[Malleability Immutable] Enforce immutability for ExecutionReceipt #7288](https://github.com/onflow/flow-go/issues/7288)
        * [[Malleability Immutable] Enforce immutability for UnsignedExecutionReceipt #7530](https://github.com/onflow/flow-go/issues/7530)
        * [[Malleability Immutable] Enforce immutability for ExecutionReceiptStub #7289](https://github.com/onflow/flow-go/issues/7289)
        * [[Malleability Immutable] Enforce immutability for UnsignedExecutionReceiptStub #7536](https://github.com/onflow/flow-go/issues/7536)
    * In Review:
        * [[Malleability Immutable] Enforce immutability for QuorumCertificate](https://github.com/onflow/flow-go/pull/7542)
        * [[Malleability Immutable] Add ExecutionResult validation to UnsignedExecutionReceipt constructor #7543](https://github.com/onflow/flow-go/issues/7543)
    * In Progress:
        * [[Malleability Immutable] Enforce immutability for Block (cluster) #7277](https://github.com/onflow/flow-go/issues/7277)

* <ins>Cryptography</ins>
    - Passkeys: review - PR merging and branches clean up - implemented new access/collection transaction validation + some refactors (PR submitted)
    - Proof of Possession: Emulator update
    - SPoCK: minor progress in sketching a PoP-proof of simple SPoCK

* <ins>Research</ins>
  - Analyzing Solana's new [Alpenglow Consensus Paper](https://drive.google.com/file/d/1y_7ddr8oNOknTQYHzXeeMD2ProQ0WjMs/view)
    and adjacent body of new consensus research \[[1](https://eprint.iacr.org/2023/463),[2](https://arxiv.org/abs/2505.08771),[3](https://arxiv.org/abs/2408.04728),[4](https://arxiv.org/abs/2102.07240)\]
  - Present analysis during the core protocol working group / protocol study group.

**This sprint**

* <ins>Data Availability:</ins>
  - Milestone 2 Optimistic Sync: Continue work on result forest.
  - Ingestion engine refactoring in progress
  - KROK Team
    - Continue iterating on in-review PRs
    - [[DataAvailability] Create module to get ExecutionResult for request criteria](https://github.com/onflow/flow-go/issues/7546)
    - [[DataAvailability] Refactor execution state APIs into local and EN query modules](https://github.com/onflow/flow-go/issues/7547)
    - Continue with Milestone 3 API tasks.

* <ins>Malleability</ins>
  - Continue PR review and support for current Immutability issues
  - Continue investigating strategies for enforcing data structure structural validity at the network layer boundary
  - KROK Team
    - [[Malleability Immutable] Enforce immutability for Header #7291](https://github.com/onflow/flow-go/issues/7291)
    - [[Malleability Immutable] Enforce immutability for Transaction #7304](https://github.com/onflow/flow-go/issues/7304)
    - [[Malleability Immutable] Enforce immutability for TransactionBody #7303](https://github.com/onflow/flow-go/issues/7303)
    - Continue [[Malleability Immutable] Enforce immutability for Block (cluster) #7277](https://github.com/onflow/flow-go/issues/7277)
    - [[Malleability Immutable] Enforce immutability for Block (flow) #7278](https://github.com/onflow/flow-go/issues/7278)
    - Address review remarks from previous sprint

* <ins>Cryptography</ins>
  - Focus back on SPoCK

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

Tidal:
- Completed all 3 Tracer Bullet Flows
  -  Collateral price increase -> Rebalance to increase investment in yield source
  -  Collateral price decrease -> Do not liquidate, but instead reduce yield position
  -  Yield price increase -> Rebalance, increase total number of collateral tokens, and then re-invest into yield source


**This sprint**

- Resolve some small numerical discrepancies
- Solidify tests in the three Tracer Bullet flows
- Set timing and scope of closed beta
- Start integration with Scheduled Callbacks on Emulator


**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

**Done Last Sprint**

- **Component & Hook Development**
  - Built `TransactionButton` component and integrated it into the live demo area
  - Improved `Connect` component with Cross-VM token balance display
  - Created and documented the `useCrossVmTransactionStatus` hook
  - Added raw query hook support from community request
  - Added context support for transaction state handling in `TransactionButton`
  - Added emulator support for Cross-VM hooks
- **Documentation & Demos**
  - Wrote documentation for:
    - `Connect`
    - `TransactionButton`
    - `TransactionLink`
    - `TransactionDialog`
    - `useCrossVmTransactionStatus`
  - Continued development of live demo area on the docs site
  - Polished component UI for release and began dark mode support
- **Tooling & Infrastructure**
  - Started building an internal demo/testing environment for rapid iteration
  - Initiated refactor of global FCL config
  - Released CLI with emulator EVM Bridge functionality
- **TypeScript Support**
  - Extracted SDK reference material into JSDoc within the `onflow/sdk` package
  - Completed enriched descriptions and examples for `onflow/sdk`
  - Continued improving `onflow/fcl` JSDoc examples

**This Sprint**

- Support developers at the Eth Hackathon
- Release components in the library
- Launch the live demo area in the documentation
- Write a blog post for the components release
- Finish the global config issue
- Add the `useFlowTransaction` hook
- Make the token type configurable in the `Connect` component
- Begin work on DeFi block support in the tooling

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (June 27): 0.25/week -> 98% decrease in bugs since Jen/Feb!

**Done last sprint**

**This sprint**

- Continuing on our multi-account per profile feature, where users will be able to manage multiple accounts within a single profile.
- Adding support for ERC-1155 semi-fungible NFTs
- Fixed an issue with KittyPunch passport interacting with Flow Wallet

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Observability/Incident Response**
- [Create contact points for informational routing](https://github.com/onflow/ff-sre-infrastructure/issues/458)
- [Identify gaps in alert runbooks](https://github.com/onflow/ff-sre-infrastructure/issues/478)
- [Create Runbook for Go Routines > 15000 Alert](https://github.com/onflow/ff-sre-infrastructure/issues/516)
- [Create Runbook for Data Disk Usage > 90% Alert](https://github.com/onflow/ff-sre-infrastructure/issues/510)
- [Create Runbook for Boot Disk Usage > 75% Alert](https://github.com/onflow/ff-sre-infrastructure/issues/508)
- [Create Runbook for Collection Node Message Queue Backlog Alert](https://github.com/onflow/ff-sre-infrastructure/issues/502)
- [Fix alerts to handle defaulting to zero](https://github.com/onflow/ff-sre-infrastructure/issues/487)
- [Update slack alert templating to improve readability](https://github.com/onflow/ff-sre-infrastructure/issues/477)
- [Increase Profiles Ingestion Rate Threshold](https://github.com/onflow/ff-sre-infrastructure/issues/455)
- [Classify Alerts Into a Tiered List (P0 to P4)](https://github.com/onflow/ff-sre-infrastructure/issues/135)
- [Create alert for log query usage](https://github.com/onflow/ff-sre-infrastructure/issues/215)
- [Create new slack channels for informational alerts and testing](https://github.com/onflow/ff-sre-infrastructure/issues/457)
- [Increase timeouts on synthetic monitors](https://github.com/onflow/ff-sre-infrastructure/issues/472)
- [Link panels to Grafana alerts](https://github.com/onflow/ff-sre-infrastructure/issues/438)

**Security**
- [Review Web Security Program](https://github.com/onflow/ff-sre-infrastructure/issues/454)
- [Triage Security Issue FLOWWEB-43](https://github.com/onflow/ff-sre-infrastructure/issues/501)
- [Triage Web Security Issue FLOWWEB-37](https://github.com/onflow/ff-sre-infrastructure/issues/484)

**Grafana Alloy Agent**

**Tidal Infra & Observability**
- [Create DevEx Applications Monitoring Strategy](https://github.com/onflow/ff-sre-infrastructure/issues/460)

**Automation**
- [Install OPs agent on Batch jobs](https://github.com/onflow/ff-sre-infrastructure/issues/449)
- [Add support for executing batch jobs without snapshots](https://github.com/onflow/ff-sre-infrastructure/issues/453)

**Support**
- [Increase Devnet52 SN data disks](https://github.com/onflow/ff-sre-infrastructure/issues/522)
- [Increase MN26 AN data disks](https://github.com/onflow/ff-sre-infrastructure/issues/495)
- [Remove DL Access Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/406)
- [Delete Testing machine for TPS automation](https://github.com/onflow/ff-sre-infrastructure/issues/490)
- [Grant access to 4d staging GCP project](https://github.com/onflow/ff-sre-infrastructure/issues/481)

**Active Epics**
* [Incident Management & Response](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=93739820&issue=onflow%7Cff-sre-infrastructure%7C131)
* [Tidal Infra & Observability Optimization](https://github.com/onflow/ff-sre-infrastructure/issues/450)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multi-sign process for Flow is efficient with effective community participation [DONE]
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes [DONE]
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**

* Tokenomics discussion with Dieter [Notion doc](https://www.notion.so/flowfoundation/Flow-Tokenomics-Framework-2001aee1232480aeab1ec87407d76b9e)
  * Topic: Transaciton Fees, Surge Factor

**This sprint**

* Continue Tokenomics discussion.
  * Topic: FLIP for Surge factor

---
