# Overview

 ### Team Wins 🎉

* Proof of Possession rolled out to mainnet.
* Strategy to transition 80%—90% of code from `feature/malleability` to master --
  significantly decreasing change surface for future conflicts until we can roll out breaking changes in Spork
* Closed Compiler + VM milestones 6 & 7 - running book-keeping functions (account balance check, storage limit check, fee deduction) speeds up execution by ~13%, with minimal effort spent on optimizations.
* Completed automatic fuzzing of parser & typechecker.
* Optimizations of version beacon access/use by the execution runtime improved execution saturation by ~30%.
* Grafana Alloy has been deployed to networks & BN2 for collecting profiles
* CloudFlare has been successfully moved to Business Plan

---

### Mainnet Uptime - Last 14 days (05/30/25 to 06/13/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |  99.975%      |    24.8%          |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
|------------------------|-----------|-----------|----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |           |          | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180       | 180      | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30        | 30       | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |           |          | 7         |              | 7      |               |
| HCU                    | 6/3/2025  |           |          | 9         |              | 9      |               |
| Total downtime in mins |           | 210       | 210      | 251       | 210          | 251    |               |
| YTD (5/29/25) SLA      |           | 99.9%     | 99.9%    | 99.89%    | 99.9%        | 99.89% |               |
| SLA for 2025           |           | 99.96%    | 99.96%   | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

### Testnet

N/A

### Mainnet
N/A

### Key Release Dates & Breaking Changes

HCU next week
- Testnet - Monday, 16th June
- Mainnet - Tuesday, 17th June

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-------:|
| Drafted     | 8 |    7      |       0       |       9          | **25**  |
| Proposed    | 1  |    2     |       3       |       0          |  **6**  |
| Accepted    | 3  |    1     |       2       |       2          |  **8**  |
| Rejected    | 0  |    1     |       1       |       0          |  **2**  |
| Implemented | 3  |    5     |       1       |       0          |  **9**  |
| Released    | 4  |    34     |       9         |       6          | **53**  |
| Total       | **19** |    **50**   |       **16**       |       **17**         | **103** |

One new FLIP -
* [FLIP 330: Scheduled Callbacks](https://github.com/onflow/flips/issues/330)

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- [Compiler Milestone 6: More features and tech debt](https://github.com/onflow/cadence/issues/3976)
    - [[Compiler] Compile second value assignment](https://github.com/onflow/cadence/pull/3987)
    - [[Compiler] Check resource loss in assignments](https://github.com/onflow/cadence/pull/3988)
    - [[Compiler] Compile enums](https://github.com/onflow/cadence/pull/3989)
- [Compiler Milestone 7: Complete FVM bookkeeping functions](https://github.com/onflow/cadence/issues/3991)
    - [[Compiler] Computation metering](https://github.com/onflow/cadence/pull/3998)
- [Compiler Milestone 8: Optimize (features used by) FVM book-keeping](https://github.com/onflow/cadence/issues/3992)
    - [[Compiler] Optimize computation metering](https://github.com/onflow/cadence/pull/4002)
    - [[Compiler] Optimize builtin globals in VM](https://github.com/onflow/cadence/pull/4011)
    - [[Compiler] Optimize builtin globals in Compiler](https://github.com/onflow/cadence/pull/4012)
- [Compiler Milestone 9: Run user-submitted transactions and scripts](https://github.com/onflow/cadence/issues/3993)
    - [[Compiler] Enable execution of scripts with VM](https://github.com/onflow/cadence/pull/4000)
    - [[Compiler] Enable execution of transactions with VM](https://github.com/onflow/cadence/pull/4001)
    - [[Compiler] Compile swap statements](https://github.com/onflow/cadence/pull/4003)
    - [[Compiler] Transfer and convert index indexing/key expression](https://github.com/onflow/cadence/pull/4005)
    - [[Compiler] Test implicit boxing](https://github.com/onflow/cadence/pull/4006)
    - [[Compiler] Emit default destroyed events when resources are destroyed](https://github.com/onflow/cadence/pull/4004)
    - [[Compiler] Implement storage and container mutation prevention](https://github.com/onflow/cadence/pull/4007)
    - [[Compiler] Validate the destruction of already destroyed resources](https://github.com/onflow/cadence/pull/4009)
    - [[Compiler] Meter computation for "entry point" function invocations in interpreter](https://github.com/onflow/cadence/pull/4008)
    - [[Compiler] Improve memory metering](https://github.com/onflow/cadence/pull/4010)
- [Compiler - Next Milestone](https://github.com/onflow/cadence/issues/3804)
    - [[Compiler] Run some more tests with the compiler/vm](https://github.com/onflow/cadence/pull/3999)
- Automatic fuzzing of parser & typechecker
    - [Vairous improvements and additions](https://github.com/onflow/cadence-fuzzer/pull/20)
    - [Update to Cadence v1.5.1](https://github.com/onflow/cadence-fuzzer/pull/18)
    - [Add support for parsing corpus file to command](https://github.com/onflow/cadence-fuzzer/pull/19)
    - [Fix CI](https://github.com/onflow/cadence-fuzzer/pull/22)
    - [Allow using cadence-internal, update to latest internal version](https://github.com/onflow/cadence-fuzzer/pull/23)
    - [Automate fuzzing to run nightly.](https://github.com/onflow/cadence-fuzzer/pull/21)
- Tool Bugfix:
    - [Fix get-contracts tool](https://github.com/onflow/cadence/pull/3812)
- internal fixes, HCU prep: [1](https://github.com/onflow/cadence-internal/pull/341), [2](https://github.com/onflow/cadence-internal/pull/339), [3](https://github.com/onflow/flow-go-internal/pull/7087)
- Regression prevention: [Add CI automation to verify storage iteration](https://github.com/onflow/cadence/issues/2688)
    - [Storage iteration](https://github.com/onflow/cadence/pull/3990)
- Testing:
    - [[Compiler] Test optional arguments](https://github.com/onflow/cadence/pull/3997)
- chores:
    - [Port non-compiler/VM changes from feature branch to master](https://github.com/onflow/cadence/pull/3994)
    - [[Compiler] Sync feature branch with master](https://github.com/onflow/cadence/pull/3995)
- Docs: 
    - [Add removed string template section back.](https://github.com/onflow/cadence-lang.org/pull/224)

**Cadence Execution**

- [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
    - [[Execution] Disable halfway data migration from badger to pebble](https://github.com/onflow/flow-go/pull/7439)
    - [[Storage] Add storage data migration functions](https://github.com/onflow/flow-go/pull/7396)
    - [[Backport v0.42] [Storage] Ensure batch.Close is called exactly once.](https://github.com/onflow/flow-go/pull/7491)
    - [[Storage] Ensure batch.Close is called exactly once.](https://github.com/onflow/flow-go/pull/7490)
    - [[Util]  Add pebble checkpoint util](https://github.com/onflow/flow-go/pull/7468)
- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
    - [Expose initial fund amount as a config option](https://github.com/onflow/flow-execution-effort-estimation/pull/46)
    - [Fix key id assigment when creating new proposers](https://github.com/onflow/flow-execution-effort-estimation/pull/47)
    - [Reenable local data collection](https://github.com/onflow/flow-execution-effort-estimation/pull/48)
    - [Add calibration command](https://github.com/onflow/flow-execution-effort-estimation/pull/49)
    - [Add Session ID to db tables](https://github.com/onflow/flow-execution-effort-estimation/pull/50)
- Performance optimizations
    - [[FVM] Cache version beacon per context](https://github.com/onflow/flow-go/pull/7438)
- Investigation: [Pebble panic](https://github.com/onflow/flow-go/pull/7489)
- Fix downstream build issues
    - [Remove replace directive to fix downstream build issue](https://github.com/onflow/flow-go/pull/7505)
CBOR: [Improve DupMapKeyError message](https://github.com/fxamacker/cbor/pull/670)

**Flow EVM**
- Core: [Fix high CPU usage related to EVM `DeltaView.AddressInAccessList`](https://github.com/onflow/flow-go/pull/7405)
- GW: [Move RPC calls to constants to reduce string object allocations](https://github.com/onflow/flow-evm-gateway/pull/824)

**This sprint**

- Cadence Language
  - Continue Compiler Milestone [9: Run user-submitted transactions and scripts](https://github.com/onflow/cadence/issues/3993) and - [8: Optimize (features used by) FVM book-keeping](https://github.com/onflow/cadence/issues/3992).

- Cadence Execution
  - Continue new Trie research
  - Continue work on Badger -> Pebble DB [M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242) and [M4: remove dependency on Badger DB completely from ENs and ANs](https://github.com/onflow/flow-go/issues/7265).
  - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598).
  - Continue [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
  - Continue [Scheduled callbacks](https://github.com/onflow/flow-go/issues/7482).

- EVM
  - Start [Transactions are not guaranteed to run according to their arrival order](https://github.com/onflow/flow-evm-gateway/issues/699)


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
  * KR1: Proof of Possession [IN PROGRESS]
  * KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  * PR reviews
  * KROK Team
    * Redesigned ExecutionDataRequester ([PR-7329](https://github.com/onflow/flow-go/pull/7329))
    * Implement interface for persisting caches ([PR-7394](https://github.com/onflow/flow-go/pull/7394))

* <ins>Malleability</ins>
  * Immutability PR reviews
  * Investigating using untrusted models for network message inputs https://github.com/onflow/flow-go/issues/7449
  * KROK Team
    * Done:

    * In Review (fixing comments):

    * In Progress:

* <ins>Cryptography</ins>
  - Proof of Possession:
    - merge all PRs and core-contract updates on TN/MN
    - Roll out PoP to testnet and mainnet
      - Addressed issues that came up during the rollout
  - SPoCK: sketch a PoP-based proof of (simple) SPoCK unforgeabilty - sketch a KOSK-based proof of multi-SPoCK
  - Passkeys: continue review and implementation

* <ins>research:</ins>
  - analyzing Solana's new [Alpenglow Consensus Paper](https://drive.google.com/file/d/1y_7ddr8oNOknTQYHzXeeMD2ProQ0WjMs/view)
    and adjacent body of new consensus research \[[1](https://eprint.iacr.org/2023/463),[2](https://arxiv.org/abs/2505.08771),[3](https://arxiv.org/abs/2408.04728),[4](https://arxiv.org/abs/2102.07240)\] (ongoing)


**This sprint**

* <ins>Data Availability</ins>
  - KROK Team


* <ins>Malleability</ins>
  * Continue PR Reviews
  * KROK Team


* <ins>Cryptography</ins>

  - SPoCK next steps: sketch a PoP-based proof of (simple) SPoCK unforgeabilty - sketch a KOSK-based proof of multi-SPoCK
  - Passkeys: continue review and implementation

* <ins>research:</ins>
  - finish analyzing [Alpenglow Consensus](https://drive.google.com/file/d/1y_7ddr8oNOknTQYHzXeeMD2ProQ0WjMs/view)
    & prep for protocol study group presentation



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


**This sprint**


**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

**Done Last Sprint**

- Converted exposed APIs in FCL and FCL React Native to TypeScript
- Built a profile feature in the `Connect` component for `@onflow/kit`
- Added the following new compon
- Built the `TransactionDialog` component for `@onflow/kit`
- Released and wrote docs for for the following hooks:
    - `useCrossVmBatchTransaction`
    - `useCrossVmSpendToken`
    - `useCrossVmSpendNft`
    - `useFlowChainId`
- Upgraded tooling for Proof of Possession
- Improved automated docs generation

**This Sprint**

- Fix issues with global FCL config
- Improve automated docs with examples sourced from JSDoc
- Finish live demo components in documentation
- Improve `Connect` profile with balance from Cross-VM hook
- Create a general Cadence side balance hook
- Polish UI on components before release
- Address remaining bugs in epic before release

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (May 30): 1/week

**Done last sprint**


**This sprint**



**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**AI**
- [Grant google user group access to Agentspace](https://github.com/onflow/ff-sre-infrastructure/issues/433)
- [Work with Google to get access to Agentspace](https://github.com/onflow/ff-sre-infrastructure/issues/411)

**Observability & Incident Response**
- [Evaluate/Create slack workflow for Grafana](https://github.com/onflow/ff-sre-infrastructure/issues/399)
- [Update IRM incidents to go to single slack channel](https://github.com/onflow/ff-sre-infrastructure/issues/409)

**Cloudflare Plan Migration**
- [Move onflow.org & flow.com zones to Business Plan](https://github.com/onflow/ff-sre-infrastructure/issues/373)

**Grafana Alloy**
- [Add Support to VM Cloud-init to Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/101)
- [Add Grafana Alloy Support to migration networks](https://github.com/onflow/ff-sre-infrastructure/issues/258)
- [Add support to Alloy to include the `version` log label from Docker/Flow services](https://github.com/onflow/ff-sre-infrastructure/issues/403)
- [Execute rolling deploy on TN to add Grafana Alloy agent support](https://github.com/onflow/ff-sre-infrastructure/issues/259)
- [Remove PROFILING_ENABLED requirement from manage-profiling.yml playbook](https://github.com/onflow/ff-sre-infrastructure/issues/418)
- [Sanitize Alloy's Logs](https://github.com/onflow/ff-sre-infrastructure/issues/440)
- [Improve Alloy service security and organization](https://github.com/onflow/ff-sre-infrastructure/issues/417)
- [Create a Strategy for Scraping Profiles in BN2 K8s](https://github.com/onflow/ff-sre-infrastructure/issues/104)
- [Deploy Grafana Alloy Agent to Handle Profile Collections from Within BN2 K8s Cluster](https://github.com/onflow/ff-sre-infrastructure/issues/105)
- [Update Flow Node Helm Charts & Workflow to support dynamic enablement of profiling](https://github.com/onflow/ff-sre-infrastructure/issues/106)
- [Execute rolling deploy on MN to add Grafana Alloy agent support](https://github.com/onflow/ff-sre-infrastructure/issues/261)

**Support**
- [Upgrade TN52 LN disks](https://github.com/onflow/ff-sre-infrastructure/issues/442)
- [Increase MN26 FF SN & VN data disk sizes](https://github.com/onflow/ff-sre-infrastructure/issues/443)
- [Create dev-rel project & database for the dev-rel team](https://github.com/onflow/ff-sre-infrastructure/issues/434)
- [Create additional TPS automation instance for execution effort testing](https://github.com/onflow/ff-sre-infrastructure/issues/426)
- [Increase MN26 DL SN & VN data disks](https://github.com/onflow/ff-sre-infrastructure/issues/444)
- [Store token for cross-repo clones to enable fuzzing](https://github.com/onflow/ff-sre-infrastructure/issues/447)
- [Clean up CDPs on Devnet ENs](https://github.com/onflow/ff-sre-infrastructure/issues/432)
- [Grant Tim access to use BN2](https://github.com/onflow/ff-sre-infrastructure/issues/429)
- [Fix orphaned records in CloudFlare](https://github.com/onflow/ff-sre-infrastructure/issues/423)

**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
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

* Tokenomics discussion with Deiter [Notion doc](https://www.notion.so/flowfoundation/Flow-Tokenomics-Framework-2001aee1232480aeab1ec87407d76b9e)
  * Topic: Transaciton Fees

**This sprint**

* Continue Tokenomics discussion.
  * Topic: Transaction Fees
* Token lease agreement review for two new node operators.


---
