# Team Wins 🎉

### Mainnet Uptime SLO - Last 14 days (11/30 to 11/10)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    99.26%     |       744%        |
| Block Finalization      | 99.9%  |    99.26%     |       744%        |
| Transaction Execution   | 99.9%  |    99.26%     |       744%        |
| Block Sealing           | 99.9%  |    99.26%     |       744%        |
| Access API Liveness     | 99.9%  |    100%       |       0%          |

#### Incidents
- Mainnet network upgrade (spork). Duration: 2.5 hrs


### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Atree Register Inlining
- Finished investigation of smoke tests failure (in the end the test failure was a false positive)
- Completed local setup for migration testing, ready to test the migration with Atree integrated with Cadence
- [Add atRoot parameter to Value.DeepRemove](https://github.com/onflow/cadence/pull/2920)

Storehouse
- Continued breaking down Storehouse M1 implementation into PRs, ~30% of the M1 is now reviewed and merged
- [Storehouse - add PayloadToRegister](https://github.com/onflow/flow-go/pull/4955)
- [Storehouse Bootstrap - make worker count as option for indexing checkpoint](https://github.com/onflow/flow-go/pull/4884)
- [Storehouse - Add storehouse interfaces](https://github.com/onflow/flow-go/pull/4835)

EVM support
- Continued reviewing EVM PRs

Other Improvements & fixes
- v0.32 ONLY: [Switch to always using the 0th partition for UUID generation](https://github.com/onflow/flow-go/pull/4893)
- [Node operation improvement - Make path configs to be usable by container by default](https://github.com/onflow/flow-go/pull/4885)

Flow Network Ugrade support
- [\[Backport\] Make path configs to be usable by container by default](https://github.com/onflow/flow-go/pull/4905)
- [\[Util\] make chunk-data-pack-dir optional for non-execution node](https://github.com/onflow/flow-go/pull/4896)
- [Update cadence to v0.42.2-patch.1](https://github.com/dapperlabs/flow-go/pull/6897)

**This sprint**

- Test [migration](https://github.com/onflow/flow-go/pull/4633) of [integrated solution for Atree register inlining](https://github.com/onflow/cadence/issues/2809)
- Continue implementation of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk)
- EVM support
  - Continue with PR reviews
  - Start benchmarking setup

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

Features
- [v0.42 - Port adding new `revertibleRandom` function](https://github.com/onflow/cadence/pull/2910)

Cadence 1.0
  features
  - [Implement Custom Destructor Removal](https://github.com/onflow/cadence/issues/2790)
    - [Interpreting for default events](https://github.com/onflow/cadence/issues/2817)
    - [Type checking for default events](https://github.com/onflow/cadence/issues/2812)
    - [Support for parsing default destroy events](https://github.com/onflow/cadence/issues/2799)
    - [Remove support for custom destructors](https://github.com/onflow/cadence/issues/2789)
  Improvements
  - [Refactor resource-reference tracking](https://github.com/onflow/cadence/pull/2916)
  
  FLIPs
  - [FLIP 95: proposal for entitlements migration](https://github.com/onflow/flips/issues/95)

Security Fixes (port to public repo)
- [Fix nested resource moves](https://github.com/onflow/cadence/issues/2931)
- [v0.42 - Fix nested resource moves](https://github.com/onflow/cadence/issues/2930)
- [v0.42 - Fix AuthAccount creation](https://github.com/onflow/cadence/issues/2932)

EVM Support
- [FVM EVM: Refactor stdlib to use new approach](https://github.com/onflow/flow-go/issues/4876)

Updates of Downstream dependencies
- Go SDK: [Update to Cadence v0.42.3](https://github.com/onflow/flow-go-sdk/issues/499)


**This sprint**

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

Script Execution:

- [Ledger] Add special handling for global register keys - [PR 4942](https://github.com/onflow/flow-go/pull/4942)
- [Execution] Return OutOfRange instead of Internal when account block is not cached - [PR 4917](https://github.com/onflow/flow-go/pull/4917)
- [Access] Allow get blocks script calls - [PR 4894](https://github.com/onflow/flow-go/pull/4894)
- [Access] Script execution coded errors - [PR 4895](https://github.com/onflow/flow-go/pull/4895)
- [Access] Get account bugfix with tests - [PR 4862](https://github.com/onflow/flow-go/pull/4862)
- [Access] Validate addresses match network in rest api - [PR 4930](https://github.com/onflow/flow-go/pull/4930)
- [Access] Add metrics for script exec failure from missing data - [PR 4907](https://github.com/onflow/flow-go/pull/4907)
- [Access] Improve logging and validation in local script exec - [PR 4920](https://github.com/onflow/flow-go/pull/4920)
- [Access] Improve script exec compare logging - [PR 4936](https://github.com/onflow/flow-go/pull/4936)
- [Access] Cleanup script execution comparisons - [PR 4956](https://github.com/onflow/flow-go/pull/4956)

Access API:

- [Access] Allow all origins by default on websockets connections - [PR 4954](https://github.com/onflow/flow-go/pull/4954)
- [Flow-Go-SDK] Use CCF encoding when requesting events from AccessAPI - [PR 501](https://github.com/onflow/flow-go-sdk/pull/501)

Misc:

- [Access] Add wait in integration tests for index to be synced - [PR 4902](https://github.com/onflow/flow-go/pull/4902)
- [Collection] Make QC Voter more resiliant to access node instability - [PR 4924](https://github.com/onflow/flow-go/pull/4924)

**This sprint**

- Script Execution on ANs
  - Add GetRegisters API endpoint to ExecutionData API - [Issue 4756](https://github.com/onflow/flow-go/issues/4756)
  - Analyze performance issues observed on devnet - [Issue 4953](https://github.com/onflow/flow-go/issues/4953)
  - Deploy to mainnet (in comparison mode) and continue analyzing results and performance issues as they come up.
- Misc
  - Work with 4d on getting event streaming and CCF into libraries.
  - Validate new features (historic result cache, compression, etc)

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Yahya H**

**Done last sprint**
- [Balanced the inbound and outbound resource limits with backpressure](https://github.com/dapperlabs/flow-go/issues/6896) [PR4929](https://github.com/onflow/flow-go/pull/4929)
- [Discovered the root cause of AN-LN peer blocking issue on mainnet23](https://github.com/dapperlabs/flow-go/issues/6895)
  - [Short-term fix deployed](https://github.com/onflow/flow-go/pull/4915)
  - [Long-term fix is halfway in progress- Part 1 under review](https://github.com/onflow/flow-go/pull/4951)


**Ongoing (last and next sprint)**
- [Part-2 and -3 of the long term fix for AN-LN peer blocking issue on mainnet23](https://github.com/dapperlabs/flow-go/issues/6895)
- [Optimizing memory-intensive RPC inspection operations](https://github.com/dapperlabs/flow-go/issues/6870)
  - [Optimizing Subscription Validator Memory Usage](https://github.com/onflow/flow-go/pull/4988)
  - Optimizing RPC ID Computation (Not Started)
  - Cache-based Application-Specific Score (Not Started)
- [Gossip scoring to support additional cluster prefixed control messages](https://github.com/dapperlabs/flow-internal/issues/1889) [PR4857](https://github.com/onflow/flow-go/pull/4857)
- [Implement Specific Decay per Peer ID in GossipSubSpamRecord for Improved Spam Mitigation](https://github.com/dapperlabs/flow-go/issues/6662)
- [Apply Penalty to Misbehaving Peers Based on Count and Err in InvCtrlMsgNotif](https://github.com/dapperlabs/flow-go/issues/6664) [PR4978](https://github.com/onflow/flow-go/pull/4978)
- [[CI][Testing] Increase GitHub CI runners for resource intensive tests](https://github.com/dapperlabs/flow-go/issues/6894) [PR4906](https://github.com/onflow/flow-go/pull/4906)

**Next Sprint**
- [GossipSub Message Replay Attack Mitigation](https://github.com/dapperlabs/flow-go/issues/6809)
- [Concluding GossipSub Message Forensics FLIP and planning the development](https://github.com/onflow/flips/pull/195)
- [Implement a Configurable Silence Period to Prevent False-Positive Node Penalties at Startup](https://github.com/onflow/flow-go/issues/4979)
- [Increase test coverage for BFTune ingress unit tests](https://github.com/dapperlabs/flow-go/issues/6883)
- [[BFT Testing] Refactor Orchestrator lock contension to use worker pools](https://github.com/dapperlabs/flow-go/issues/6884)


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
- Update Ansible automation for Dapper nodes
- Prepare monitoring, alerting, and pager dudty group for Dapper Node monitoring
- Prepare Dapper infra/keys for Mainnet spork
- Create Flow Foundation infrastructure & configuration for Mainnet spork
- Create Dapper infrastructure & configuration for Mainnet spork
- Scale down networks following s
- Assist with sporks & HCUs
- Update logrotate for Dapper nodes
- Assist with BN2 testing

**This Sprint**

************Node Hosting************
- Continue to monitor system configuratiton for Dapper Nodes
- Prepare execution & protocol state archives for Mainnet23
- Scale down Mainnet23 AN & EN
- Unstake & deprecate Dapper Nodes on Devnet49
- Clean up unneeded DPS nodes

************Support************
- Evaluate migration path for GCP projects and resources
- Continue to support Benchnet2 with updates to Helm chart
- Work with DevEx team to unblock migration of workloads to 

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork - TBD (~Q1 2024)
