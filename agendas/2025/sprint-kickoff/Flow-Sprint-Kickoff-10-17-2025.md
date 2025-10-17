# Overview

### Team Wins 🎉

- React SDK playground is now live at [react.flow.com](https://react.flow.com).
- Stablecoin scaffold with a testnet USDF mock is available in the latest CLI release.
- [Test paralellization](https://github.com/onflow/flow-go/pull/8027) sped-up FVM & execution tests 2-3x
- Completed content review for new metering weights & [draft of public key de-duplication content](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys)
- Closed [last Pebble spork blocker](https://github.com/onflow/flow-go/pull/7983)
- Added support for [collecting computation usage profiles](https://github.com/onflow/cadence/pull/4266) to Cadence


---

### Mainnet Uptime - Last 14 days (10/4/25 to 10/17/25) \[Vishal]

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
| HCU                    | 8/7/2025  |            |           | 9         |              | 9      |               |
| Total downtime in mins |           | 210        | 210       | 272       | 210          | 272    |               |
| YTD SLA                |           | 99.95%     | 99.95%    | 99.93%    | 99.95%       | 99.93% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

N/A

### Key Release Dates & Breaking Changes

- Forte Mainnet Network upgrade (Spork) on **Oct, 22nd (Wednesday), 1PM UTC**

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    7    |     0      |    10    | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    2     | **10**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    7    |     1      |    0     | **11**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **20**    | **54**  |   **17**   |  **19**  | **110** |

#### New FLIPs

- [FLIP 348: EVM Scheduled Transactions](https://github.com/onflow/flips/pull/349)
- [FLIP 346: Variable Transaction Fees - Execution Effort II](https://github.com/onflow/flips/pull/347)

---


# Working Group Updates

### **Cadence Language and Execution** \[Bastian]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Features:
    - [Add support for collecting computation usage profiles](https://github.com/onflow/cadence/pull/4266)
        - [Improve computation profiling](https://github.com/onflow/cadence/pull/4276)
        - [Improve computation profiling](https://github.com/onflow/cadence/pull/4279)
    - [Improve Cadence Errors to Support LLM Efficiency](https://github.com/onflow/cadence/issues/4062)
        - [Improve type conversion error](https://github.com/onflow/cadence/pull/4181)
- Bugfixes:
    - [Fix 128-bit fixed-point code](https://github.com/onflow/cadence/pull/4252)
    - [[v1.7] Fix 128-bit fixed-point code](https://github.com/onflow/cadence/pull/4253)
- Improvements
    - [Remove per-context coverage report, use runtime config's](https://github.com/onflow/cadence/pull/4255)
    - [Speed up benchmarks](https://github.com/onflow/cadence/pull/4261)
- Tech debt:
    - [Replace for-delete loops with clear](https://github.com/onflow/cadence/pull/4277)
- [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)
    - [Add support for comparing two map data slabs to slab decoding tool](https://github.com/onflow/cadence/pull/4234)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Feature:
        - [Compile Attachments](https://github.com/onflow/cadence/issues/4028)
            - [Merge master into Attachment compilation feature branch](https://github.com/onflow/cadence/pull/4274)
            - [Address reviews on compilation for attachments.](https://github.com/onflow/cadence/pull/4275)
            - [[Compiler] Attachments](https://github.com/onflow/cadence/pull/4204)
    - Performance optimizations:
        - [Avoid unnecessary allocation of type arguments iterators](https://github.com/onflow/cadence/pull/4271)
        - [Avoid conversion from StaticType to sema.Type during runtime sub-type checking](https://github.com/onflow/cadence/issues/3691)
            - [[Subtyping Generator] Add schema](https://github.com/onflow/cadence/pull/4297)
    - tech debt:
        - [Unify interpreter and VM host/native functions](https://github.com/onflow/cadence/issues/4216)
            - [[Compiler] Unify natives.](https://github.com/onflow/cadence/pull/4248)
            - [Merge master into unify natives.](https://github.com/onflow/cadence/pull/4265)
            - [Unify natives in the compiler/vm and interpreter.](https://github.com/onflow/cadence/pull/4264)
        - [Remove wabt](https://github.com/onflow/cadence/pull/4260)
        - [Replace most uses of original native function helpers with unified function helpers entirely](https://github.com/onflow/cadence/issues/4256)
            - [Rename unified to native, clean up native functions.](https://github.com/onflow/cadence/pull/4259)
        - [Set error location range in interpreter like in VM](https://github.com/onflow/cadence/pull/4249)
        - [Remove location range passing code – Part 1/2](https://github.com/onflow/cadence/pull/4250)
        - [Remove location range passing code – Part 2/2](https://github.com/onflow/cadence/pull/4251)
        - [Remove unused location range parameter from native functions](https://github.com/onflow/cadence/pull/4268)
        - [Replace variadic arguments parameters with slices](https://github.com/onflow/cadence/pull/4269)
        - [Fix naming of "type parameters" which are actually type arguments](https://github.com/onflow/cadence/pull/4270)
        - [Remove `vm.NativeFunctionVM` and adaption to `interpreter.NativeFunction`](https://github.com/onflow/cadence/pull/4272)
    - bugfixes:
        - [[Compiler] Fix and improve compiler/VM benchmarks and tests, fix CI](https://github.com/onflow/cadence/pull/4257)
        - [[Compiler] Fix performance regression](https://github.com/onflow/cadence/pull/4258)
- chores:
    - [Update to Go 1.24](https://github.com/onflow/cadence/pull/4267)
    - [Fix job name for get contracts action](https://github.com/onflow/cadence/pull/4303)
- Tooloing:
    - [Add support for fixed-point literals to grammar](https://github.com/onflow/vscode-cadence/pull/794)
    - emulator: [Parallelize tests](https://github.com/onflow/flow-emulator/pull/878)

**Cadence Execution**

- [Badger -> Pebble remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
    - [[Pebble] All low-level storage operations have been reviewed for risk of state corrupion](https://github.com/onflow/flow-go/issues/7912)
        - [[Storage] Refactor index protocol kv store](https://github.com/onflow/flow-go/pull/7967)
        - [[Storage] Refactor safety data operations](https://github.com/onflow/flow-go/pull/8018)
        - [[Storage] Refactor execution fork evidence](https://github.com/onflow/flow-go/pull/8017)
        - [[Storage] Refactor indexing transaction error message](https://github.com/onflow/flow-go/pull/8021)
        - [[Storage] Refactor stored chunk data pack](https://github.com/onflow/flow-go/pull/7983)
- Scheduled Transactions:
    - [process user Txs if process() fails](https://github.com/onflow/flow-go/issues/7987)
        - [Gracefully handle process execution failure](https://github.com/onflow/flow-go/pull/7992)
    - emulator: [Update scheduled transaction usage](https://github.com/onflow/flow-emulator/pull/873)
- Public key de-duplication content:
    - [Summarize goals, add results, and compare them](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/5)
    - [Clarify, add more results, mention why we don't estimate EN RAM usage reduction](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/7)
    - [Clarify that this migration only modifies non-atree payloads](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/8)
    - [Update "Introduction" and add "Scope" section](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/9)
    - [How we cut 210M cryptographic hashes and 29GB data](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/10)
    - [Mention cumulative impact of reducing payload count](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/11)
    - [Replace Intro with How We Cut 210M Hashes and 29GB State](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/12)
- Bugfix:
    - [[Execution] Fix chunk data pack store](https://github.com/onflow/flow-go/pull/8046)
- Improvements:
    - [[Cmd] improve logging for verify execution result](https://github.com/onflow/flow-go/pull/7828)
    - [[FVM] Clean up test runtime](https://github.com/onflow/flow-go/pull/8003)
    - [Parallelize tests in FVM and execution](https://github.com/onflow/flow-go/pull/8027)
- Tech debt:
    - [Remove legacy migration used in Crescendo](https://github.com/onflow/flow-go/pull/8036)
- Atree:
    - [Bump Go and linter versions and update the code](https://github.com/onflow/atree/pull/582)
    - [Change slab size related variables from uint64 to uint32](https://github.com/onflow/atree/pull/586)
- TPS loader:
    - [Add scheduled transactions](https://github.com/onflow/flow-execution-effort-estimation/pull/74)
    - [Disable AN local-only mode](https://github.com/onflow/flow-execution-effort-estimation/pull/75)
- chores / dependency updates:
    - E2E tests: [Update flow go](https://github.com/onflow/flow-e2e-tests/pull/65)
    - [Update to Cadence v1.7.1](https://github.com/onflow/flow-go-sdk/pull/925)
    - [Bump `ethereum/go-ethereum` dependency to `v1.16.4`](https://github.com/onflow/flow-go-sdk/pull/926)
    - [Update to Cadence v1.8.1](https://github.com/onflow/flow-go-sdk/pull/928)
    - [Update to Cadence v1.7.1](https://github.com/onflow/flow-go/pull/8001)
    - [[Cadence VM] Merge master](https://github.com/onflow/flow-go/pull/8006)

**Flow EVM**
- Core:
    - [Bump `ethereum/go-ethereum` dependency to `v1.16.4`](https://github.com/onflow/flow-go/pull/7984)
- Gateway
    - Improvements:
        - [Collect EVM-related events during VM bridge bootstrapping](https://github.com/onflow/flow-go/pull/7999)
        - [Relax log-level on `processLockedKeys()` for tx results](https://github.com/onflow/flow-evm-gateway/pull/898)
    - Bugfixes:
        - [Investigate issue with indexing when SetupVMBridgeEnabled = true](https://github.com/onflow/flow-evm-gateway/issues/893)
        - [[Flow EVM] Fix bug on `ChainRules()` as we are already on `Merge`](https://github.com/onflow/flow-go/pull/8047)
        - [Always re-index latest Cadence block](https://github.com/onflow/flow-evm-gateway/pull/776)
        - [Run E2E tests with EVM VM bridge enabled](https://github.com/onflow/flow-evm-gateway/pull/894)
    - Tech-debt:
        - [Merge the 2 Cadence transactions files into a single one](https://github.com/onflow/flow-evm-gateway/pull/897)

**This sprint**

- Cadence Language
    - Continue tackling compiler tech-debt & optimizations

- Cadence Execution
  - Complete [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598) - apply new weights after Mainnet upgrade
  - Continue [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
  - Start [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
  - Start [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
  - Start [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
  - Maybe: New Trie research

- EVM
  - Complete: [Improve Tracking of the Surge factor](https://github.com/onflow/flow-evm-gateway/issues/863)
  - Complete: [Improve resilience on connections with upstream ANs](https://github.com/onflow/flow-evm-gateway/issues/764)

**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q4 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Network Upgrade (Spork) [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Investigate root cause of sealing lag 🆕 [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]
* Proof of Collection Finality 🆕 [Not Started]
* Migrate EN version beacon to Dyn. Prot. State [Not Started]
* Concurrent Transaction execution [Not Started]
* Downgrade historical node hardware 🆕 [Not Started]

Q3 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Overload resilience  [Done]
* Network Upgrade (Spork) [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [Done]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]

**Done last sprint**

* <ins>Overload resilience</ins>
  - Finished the [runbook](https://www.notion.so/flowfoundation/Runbook-Collection-Throttling-27e1aee1232480b18450d9e32a594448) for collection throttling
  - Added metrics for tx prioritization

* Q3 Network Upgrade (Spork)
  - Preparing for the mainnet network upgrade.
  - HCU on testnet to roll out updates on master after the testnet network upgrade.
  - Testing on migration mainnet.
  - Ansible script update to signal start of root-block voting.
  - Walk through of the network upgrade process.
  - Sync with QuickNode on steps for mainnet network upgrade.

* <ins>Data Availability</ins>
  - Add schedule transaction indexing ([PR 8025](https://github.com/onflow/flow-go/pull/8025))
  - Refactor pipeline core logic storage ([PR 8010](https://github.com/onflow/flow-go/pull/8010))
  - Fix execution sync issues on testnet ([PR 8007](https://github.com/onflow/flow-go/pull/8007), [PR 7990](https://github.com/onflow/flow-go/pull/7990))
  - Add compatibility override for testnet HCU v0.43.1 ([PR 8044](https://github.com/onflow/flow-go/pull/8044))
  - Speedup websockets keepalive test ([PR 8012](https://github.com/onflow/flow-go/pull/8012))
  - Tx errors indexing and metrics ([PR 7991](https://github.com/onflow/flow-go/pull/7991), [PR 8004](https://github.com/onflow/flow-go/pull/8004))
  - Bug fixes ([PR 7996](https://github.com/onflow/flow-go/pull/7996), [PR 8041](https://github.com/onflow/flow-go/pull/8041))

  * KROK Team

      * Done:
        - [[Data Availability] Implement fork-aware Events Endpoints #7652](https://github.com/onflow/flow-go/issues/7652)    

      * In Review:
        - [[Data Availability] Refactor events test in http package #7923](https://github.com/onflow/flow-go/issues/7923)
        - [[Data Availability] Add operator config for execution result query Criteria #7879](https://github.com/onflow/flow-go/issues/7879)
        - [[Data Availability] Improve Collection Endpoints error handling and documentation #7649](https://github.com/onflow/flow-go/issues/7649)
        - [[Data Availability] Implement fork-aware Script Endpoints #7651](https://github.com/onflow/flow-go/issues/7651)

      * In Progress:
        - [[Data Availability] Implement fork-aware Execution Data Endpoints #7656](https://github.com/onflow/flow-go/issues/7656)
        - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
        - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
        - [[Data Availability] Implement fork-aware Registers Endpoints #7655](https://github.com/onflow/flow-go/issues/7655)

  * Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 4 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 7/17 done
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 1 done, 6 in progress, 2 in review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 0 in progress


* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team
    * Done:
      - Work on Immutable models finished for KROK team atm, all assigned tasks closed

* <ins>Cryptography</ins>
  * Passkeys:
    * Doc site update
  * Multi-SPoCK:
    * paper: formulating definitions (ongoing)
  * Looking into Zcash shielded pool


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  * Finished implementation of new bootstrapping commands for collectors.

* <ins>Investigate root cause of sealing lag</ins>
  - Started working on sealing lag investigation

* Other items not covered in OKRs:
  - Mitigating double-counting attack for byzantine primary [6127](https://github.com/onflow/flow-go-internal/issues/6127)
  - Content pieces for Forte - [Malleability](https://www.notion.so/flowfoundation/Advancing-Protocol-Autonomy-with-Data-Integrity-Blog-Post-Draft-2721aee1232480f1ad24d188ea90e253), [Key deduplication](https://www.notion.so/flowfoundation/Draft-Blog-post-for-Key-Deduplication-2741aee123248080acf5cb2a585e2d71), [Execution Effort Calibration](https://www.notion.so/flowfoundation/Draft-Blog-post-for-Execution-Effort-Calibration-2-1-28d1aee1232480d090f6c87933bc69a6).

**This sprint**

* <ins>Q3 Network Upgrade (Spork)</ins>
  - Execute the mainnet network upgrade

* <ins>Data Availability:</ins>
  - Finish scheduled transaction API changes
  - Continue on milestone 2 work.
  - Support the spork.
  - KROK Team:
     - Continue work on Access API execution state endpoints ( milestone 3 )

* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  * Testing, documentation, and script updates for collector bootstrapping


* <ins>Cryptography</ins>
  * SPoCK paper
  * Zcash - complete research work

* <ins>Investigate root cause of sealing lag</ins>
  - Continue working on sealing lag causes

* Other items not covered in OKRs:
  - Complete the mitigation of the double-counting attack for byzantine primary [6127](https://github.com/onflow/flow-go-internal/issues/6127)
  - Iterate over content pieces and get them ready for publication.
  - Research on Zcash.

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

#### Tidal:


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

-React SDK / FCL
  - Finished and launched the playground on [react.flow.com](https://react.flow.com)
  - Improved the docs overview with the playground
  - Added `useFlowScheduledTransaction`, `useFlowAuthz`, `useBridgeNftFromEvm`, and `useBridgeTokenFromEvm` hooks
  - Created documentation on creating and signing with Flow user passkeys
  - Provided DevRel bridging support

-Stablecoins
  - Created a stablecoin project scaffold with a testnet mock
  - Added USDF with a testnet mock scaffold to `flow init`

-Forking Mainnet
  - Improved Dev Wallet to support mainnet forking
  - Opened an emulator PR to rename the fork flag for better alignment with industry terminology
  - Added forking support in `flow test`

-Other
  - Updated Cadence syntax highlighting

**This Sprint**

- React SDK
  - Surface Scheduled Transactions in the `<Connect />` profile
  - Complete the NFT Card
  - Add documentation for new hooks
  - Create a Next.js starter for the React SDK

- CLI
  - Complete the Scheduled Transactions management feature
  - Improve output readability
  - Add USDF testnet mock to the Dependency Manager
  - Enable running scripts and transactions from a URL
  - Add shorthand syntax for running scripts/txs
  - Implement emulator account bootstrapping
  - Create a DeFi Actions scaffold with forking and add it to the `init` command
  - Improve documentation for the `init` command


---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.25 per week on a 4-week rolling average.
- Current (Sep 5: 0.25/week -> 98% decrease in bugs since Jan/Feb!)

**Done last sprint**


**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**MN27 Spork Prep**
- [Set Debian 12 as Default OS Version for Ansible/Prometheus Nodes](https://github.com/onflow/ff-sre-infrastructure/issues/831)
- [Update OS version for the Ansible/Prometheus machines on TN53](https://github.com/onflow/ff-sre-infrastructure/issues/761)
- [Update OS version for the Ansible/Prometheus machines on Migration TN/MN](https://github.com/onflow/ff-sre-infrastructure/issues/762)
- [Create SRE Spork Checklist for MN27](https://github.com/onflow/ff-sre-infrastructure/issues/818)
- [Validate Quotas for MN27 - GCP Project `flow-multi-region`](https://github.com/onflow/ff-sre-infrastructure/issues/819)
- [Adjust Grafana Dashboards for MN27](https://github.com/onflow/ff-sre-infrastructure/issues/824)

**Support**
- [Create Blue Node on MN23 for Downgrade Tests](https://github.com/onflow/ff-sre-infrastructure/issues/810)
- [Adjust CNAME and TXT DNS Records for Flow and Wallet](https://github.com/onflow/ff-sre-infrastructure/issues/837)
- [Update TXT DNS Records for Webflow Migration of Wallet and Core](https://github.com/onflow/ff-sre-infrastructure/issues/839)

**Security**
- [Triage Security Issue FLOWWEB-93](https://github.com/onflow/ff-sre-infrastructure/issues/841)

---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* No updates :(

**This sprint**

* Add panels to community dashboard explaining when and why surge pricing is active.
* Continue tokenomics discussion with Dete.

---
