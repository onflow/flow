# Team Wins 🎉

- Status page updates (incidents and maintenance) now show up on Discord and Slack.
- Tested Atree register inlining migration of full checkpoint - confirms ~40% reduction of overall state size and ~60% reduction of nodes.
- Completed first benchmark of EVM.

### Mainnet Uptime SLO - Last 14 days (11/10 to 11/24)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    100%       |       0%          |
| Block Finalization      | 99.9%  |    100%       |       0%          |
| Transaction Execution   | 99.9%  |    100%       |       0%          |
| Block Sealing           | 99.9%  |    100%       |       0%          |
| Access API Liveness     | 99.9%  |    100%       |       0%          |

#### Incidents
- Degraded Performance - 11/23 9:30 AM Pacific to 3:30 PM Pacific
  - Collection finalization rate dropped and was choppy.


### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Atree Register Inlining


Storehouse
- Continued breaking down Storehouse [M1 implementation](https://github.com/onflow/flow-go/issues/4682) into PRs, ~30% of the M1 is now reviewed and merged
  - [Execution State - Update IsBlockExecuted](https://github.com/onflow/flow-go/issues/5044)
  - [Add CreateStorageSnapshot to Execution state](https://github.com/onflow/flow-go/issues/5031)
  - [Update committer](https://github.com/onflow/flow-go/issues/5029)
  - [Unfinalized blocks loader](https://github.com/onflow/flow-go/issues/5028)
  - [Add Extending block snapshot](https://github.com/onflow/flow-go/issues/5008)
  - [Blockend Snapshot](https://github.com/onflow/flow-go/issues/4985)
  - [Add Finalized Reader](https://github.com/onflow/flow-go/issues/4977)
  - [Implement Register store](https://github.com/onflow/flow-go/issues/4940)

EVM support
- Continued reviewing EVM PRs

Other Improvements & fixes
- [FVM - Refactor event emission code](https://github.com/onflow/flow-go/issues/4982)
- [FVM - bugfix bench test random](https://github.com/onflow/flow-go/issues/4833)
- [Add transaction ms per computation metrics](https://github.com/onflow/flow-go/issues/4615)


**This sprint**

- Validate [migration](https://github.com/onflow/flow-go/pull/4633) of [integrated solution for Atree register inlining](https://github.com/onflow/cadence/issues/2809)
- Continue implementation of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk)
- EVM support
  - Continue with PR reviews
  - Continue with benchmarking data collection

**On Hold**

- Plan removal of concurrent storage bottlenecks
    - Transaction fee deduction
    - [Cadence Type checker is not reentrant](https://dapperlabs.slack.com/archives/CG0B7CJAJ/p1684434997197079) (type comparison depends on consistent pointer used by programs cache, program cache needs to always return the same pointer to the same type)
- [Execution stack refactor - clear separation of ingestion engine and block computer](https://github.com/onflow/flow-go/issues/4077)
- [Automated Performance Tests](https://github.com/onflow/flow-go/issues/3548)

**Active Epics**

- [Atree register inlining](https://github.com/onflow/atree/issues/292)

### Cadence

### **Stable Cadence - Jan B**
Objective: long-term support release of Cadence with no expected breaking changes

**Done last sprint**

Cadence 1.0
- Bugfix: [Include interface conformances when computing the supported entitlements of an interface](https://github.com/onflow/cadence/pull/2946)

Security Fixes (port to public repo)
- Prepared multiple security fixes to bedeployed (internal repo PRs: 166, 165, 164, 161, 159, 158, 155, 153, 152)

Improvements / Bugfixes
- [AST improvements](https://github.com/onflow/cadence/pull/2949)
- tools - Language Server [Ensure the LS binaries (native and wasm) can be built](https://github.com/onflow/cadence-tools/issues/244)


EVM Support
- [FVM - beyond EVM part 6.5: Improve and test deposit and withdrawal](https://github.com/onflow/flow-go/issues/4986)
- [FVM - beyond EVM part 6.4 - Fix EVM contract tests](https://github.com/onflow/flow-go/issues/4941)
- [FVM - beyond EVM part 6.3 - Implement EVM.BridgedAccount.deploy](https://github.com/onflow/flow-go/issues/4897)
- [FVM - beyond EVM part 6.2 - Implement EVM.BridgedAccount.withdraw](https://github.com/onflow/flow-go/issues/4890)
- [FVM - beyond EVM part 6.1 - Implement EVMAddress.deposit](https://github.com/onflow/flow-go/issues/4889)

Updates of Downstream dependencies
- CLI: [Update to Cadence v0.42.5](https://github.com/onflow/flow-cli/issues/1264)
- [Update core contracts to latest stable cadence](https://github.com/onflow/flow-core-contracts/issues/382)

**This sprint**
- Deploy security fixes to TN and MN, port to public repo, publish disclosure
- continue support EVM on FLow initiative.
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - [FLIP for new behavior for attachments with entitlements](https://github.com/onflow/flips/pull/213)
- Continue work on Cadence 1.0 migrations.
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)
- Continue work on Cadence 1.0 release plan
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### **Access & Data Availability - Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

- [Access] Make script exec configurable - [PR 5037](https://github.com/onflow/flow-go/pull/5037)
- [Access] Handle script canceled and timeout errors - [PR 5036](https://github.com/onflow/flow-go/pull/5036)
- [Access] Update websockets event streaming to return JSON-CDC encoded events - [PR 5048](https://github.com/onflow/flow-go/pull/5048)

Community Contributions:

- [Protobuf] Get protocol snapshot by block id and block height - [PR 1401](https://github.com/onflow/flow/pull/1401)
- [Protobuf] Get Block endpoint is missing the system collection - [PR 1406](https://github.com/onflow/flow/pull/1406)
- [Protobuf] Add endpoints to Execution nodes to support getting Transaction Result error messages - [PR 1398](https://github.com/onflow/flow/pull/1398), [1407](https://github.com/onflow/flow/pull/1407)
- [Access] Add endpoints to Execution nodes to support getting Transaction Result error messages - [PR 5042](https://github.com/onflow/flow-go/pull/5042)

**This sprint**

- Script Execution on ANs
  - Use version beacon to ensure correct version for script exec - [Issue 5040](https://github.com/onflow/flow-go/issues/5040)
  - Add GetRegisters API endpoint to ExecutionData API - [Issue 4756](https://github.com/onflow/flow-go/issues/4756)
  - Work with QuickNode to setup script exec in compare mode on public ANs
- Misc
  - Work with 4d on getting event streaming and CCF into libraries.

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Yahya H**

**Done last sprint**
- [Optimizing memory-intensive RPC inspection operations](https://github.com/dapperlabs/flow-go/issues/6870)
  - Part-1: [Optimizing Subscription Validator Memory Usage](https://github.com/onflow/flow-go/pull/4988)
  - Part-2: [Worker Pool RPC Id Computation](https://github.com/onflow/flow-go/pull/5025)
- Concluded PR feedbacks
  - **[GossipSub Spam Mitigation- Dynamic Decay Speed](https://github.com/onflow/flow-go/pull/4891)**
  - **[Add leniency to control message misbehaviors on cluster prefixed topics](https://github.com/onflow/flow-go/pull/4857)**
  - **[Apply GossipSub Spam Penalty to Misbehaving Peers Based on `Count` and `Err` in `InvCtrlMsgNotif`](https://github.com/onflow/flow-go/pull/4978)**
  - [Gossipsub Replay Attack Mitigation](https://github.com/onflow/flow-go/pull/5058)

**Still in Progress**
  - [mainnet24` peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913)
  - Part-3: [Caching GossipSub Application Specific Score](https://github.com/onflow/flow-go/pull/5045) of [Optimizing memory-intensive RPC inspection operations](https://github.com/dapperlabs/flow-go/issues/6870)
  - [Part-2 and -3 of the long term fix for AN-LN peer blocking issue on mainnet23](https://github.com/dapperlabs/flow-go/issues/6895)
  - [GossipSub Message Replay Attack](https://github.com/dapperlabs/flow-go/issues/6809) [PR5058](https://github.com/onflow/flow-go/pull/5058)

**Starting Next Sprint**:
  - [Concluding GossipSub Message Forensics FLIP and planning the development](https://github.com/onflow/flips/pull/195)
  - [[BFT Testing] Refactor Orchestrator lock contension to use worker pools](https://github.com/dapperlabs/flow-go/issues/6884)
  - [Determining an appropriate retention rate for historical scoring data](https://github.com/dapperlabs/flow-go/issues/6466)
  - [Decision Making for Persisting or Non-Persisting Spamming Records of Peers in GossipSub](https://github.com/dapperlabs/flow-go/issues/6663)


**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296
- [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)

### **Consensus (Dynamic Protocol State) - Alex H**

**Done last sprint for Dynamic Protocol State**

- Block payload contains Hash commitment of protocol state for child block(s) ([PR #4868](https://github.com/onflow/flow-go/pull/4868))
- consolidated handling of node's weights ([PR #5039](https://github.com/onflow/flow-go/pull/5039))
- continue on Epoch Fallback Mode ([PR #4931](https://github.com/onflow/flow-go/pull/4931))

**Done last sprint (other topics)**
- [ongoing] [PR #5050](https://github.com/onflow/flow-go/pull/5050): closing ability of malicious consensus nodes to incorporate made-up `ExecutionResult` into their proposal ([issue #6863](https://github.com/dapperlabs/flow-go/issues/6863))
- Jordan working on important automation of Cruise Control system ([FLIP 204](https://github.com/onflow/flow-go/issues/4948)), to run Block-Time controller on networks other than mainnet 
  - Epoch's `TargetEndTime` and `TargetDuration` duration can now be specified by Epoch smart contract [#4987](https://github.com/onflow/flow-go/pull/4987),[PR #5035](https://github.com/onflow/flow-go/pull/5035) [PR #5038](https://github.com/onflow/flow-go/pull/5038)


**Next Sprint**
- Long list remaining tech todos for Dynamic Protocol State ([epic #4649](https://github.com/onflow/flow-go/issues/4649))
- continue automation of Cruise Control system


### **Infra - JP**

**Done last sprint**
- Update log rotate configuration for Dapper Mainnet nodes
- Scale down Mainnet23 AN & ENs
- Unstake & deprecate Dapper Nodes on Devnet49
- Clean up unnecessary DPS nodes across all networks
- Update BN2 configuration to stabilize node shutdown
- Assist with Canary sporks

**This Sprint**

************Node Hosting************
- Assist with Canary Sporks
- As needed, assist with HCU
- Create documentation for managing Dapper nodes
- Create automation for managing Dapper nodes

************FF Migration************
- Create strategy for observability migration
- Discover and configure tool for multi-destination logging
- Create strategy for GCP project migration to new GCP account

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork - TBD (~Q1 2024)
- Second [Governance Working Group](https://github.com/onflow/gwg) meeting 9/28 (Tuesday)
