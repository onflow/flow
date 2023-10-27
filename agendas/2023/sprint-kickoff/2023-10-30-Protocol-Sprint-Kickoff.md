# Team Wins 🎉

* We have another spork operator - Janez has done his first Testnet Spork
* Successful Cadence Language Design Meeting (LDM) on Tue.
  * We accepted 5 FLIPs ([134](https://github.com/onflow/flips/pull/134), [210](https://github.com/onflow/flips/pull/210), [197](https://github.com/onflow/flips/pull/197), [212](https://github.com/onflow/flips/pull/212), [131](https://github.com/onflow/flips/pull/131)) - This means ALL open FLIP for Cadence 1.0 are closed now.
  * We made a decision about an issue with Attachments gaining elevated permissions on the base resource through entitlements (see notes [here](https://github.com/onflow/cadence/blob/master/meetings/2023-10-24.md)) - this will be final FLIP to be opened for Cadence 1.0, no more features / improvements are in the pipeline.
  * Really good community presence helped us make decisions quickly (we had .find, IncrementFi, Flowty, BlueSign ...).
* Cadence - fixed and deployed critical security issue (MN23 HCU 4 on Oct 26).
* Execution data indexing live on all (FF) testnet ANs, script execution on one (Peter)
* 15 Access PRs from community teams merged into flow-go in the last 4 months (Peter)
* Coinbase successfully running Rosetta against testnet 48 spork (Misha)

### Mainnet Uptime SLO - Last 14 days (10/3 to 10/16)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    100%       |       0%          |
| Block Finalization      | 99.9%  |    99.781%    |       219%        |
| Transaction Execution   | 99.9%  |    99.846%    |       154%        |
| Block Sealing           | 99.9%  |    99.691%    |       309%        |
| Access API Liveness     | 99.9%  |    99.817%    |       183%        |

#### Incidents
- 15 Consensus nodes run by an operator were reset to the start of the spork and fell behind.
  - Flow mainnet is now in the Epoch fallback mode.
- Public access nodes became inaccessible due to a DNS change by the operator.

*99.9% translates to a maximum allowed downtime of ~20m8s for a 14-day window.*

*99% translates to a maximum allowed downtime of ~3hr20min for a 14-day window.*



### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Atree register inlining
- [Remove ContainerStorable.EncodeAsElement](https://github.com/onflow/atree/pull/354)
- [Update for Cadence integration for atree inlining and deduplication](https://github.com/onflow/atree/pull/352)
- [Make smoke tests check recently added data deduplication feature](https://github.com/onflow/atree/issues/350)

Storehouse
- [Validate checkpoint root hash](https://github.com/onflow/flow-go/pull/4825)
- [Refactor checkpoint reader with WithFile](https://github.com/onflow/flow-go/pull/4815)
- [read trie root hash from checkpoint](https://github.com/onflow/flow-go/pull/4811)
- [Ledger: update ledger.Set to remove empty update case](https://github.com/onflow/flow-go/pull/4837)

On-Chain randomness history for commit-reveal schemes
- [Add RandomBeaconHistory contract to system transaction](https://github.com/onflow/flow-go/pull/4582)
- Core Contracts - [RandomBeaconHistory contract](https://github.com/onflow/flow-core-contracts/issues/375)

Other improvements / Tech debt
- Script execution: [JobQueue - Move the DefaultIndex from Start method to constructor](https://github.com/onflow/flow-go/pull/4843)
- [Tiny QoL makefile update for updating dependencies](https://github.com/onflow/flow-go/pull/4813)
- [Remove required Chain flag from execution-state-extract](https://github.com/onflow/flow-go/issues/4770)
- [Add version subcommand to util](https://github.com/onflow/flow-go/issues/4610)
  - [Add version cmd to utils](https://github.com/onflow/flow-go/issues/4614)

**This sprint**

- [Continue Cadence integration to use Atree register inlining](https://github.com/onflow/cadence/issues/2809)
- Continue testing [Atree register inlining migration](https://github.com/onflow/flow-go/pull/4633)
- Continue implementation of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk)

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
- EVM: [Allow declaration of values in specific locations](https://github.com/onflow/cadence/issues/2874)
  - [Allow injection of functions into composite values, refactor PublicKey based on it](https://github.com/onflow/cadence/pull/2878)
  - [Allow different base activations per location in checker and interpreter](https://github.com/onflow/cadence/pull/2887)
- Cadence 1.0: [FLIP 210: propose an improvement to entitlement mapping syntax](https://github.com/onflow/flips/pull/210)
  - [Add required mapping keyword to entitlement mapping usages](https://github.com/onflow/cadence/pull/2883)
- Cadence 1.0: [Support using references in loops](https://github.com/onflow/cadence/issues/2784)
  - [Add support iterating references to iterables](https://github.com/onflow/cadence/pull/2876)
- Cadence 1.0: [Restrict capabilities.publish to account's own capabilities](https://github.com/onflow/cadence/issues/2768)
  - [Restrict capabilities.publish to account's own capabilities](https://github.com/onflow/cadence/pull/2782)

Improvement / Tech debt
- Master: [Meter computation in new stdlib functions](https://github.com/onflow/cadence/issues/2879)
  - [Add computation metering to the new stdlib functions](https://github.com/onflow/cadence/pull/2880)
  - [Use ComputationKindLoop for internal array-value iterations](https://github.com/onflow/cadence/pull/2891)
- Cadence 1.0: [Allow default functions to co-exist with empty function declarations](https://github.com/onflow/cadence/pull/2725)
- Cadence 1.0: [Improve test runtime interface](https://github.com/onflow/cadence/issues/2894)

Bugfix
- master: [Fix string atree value comparison: handle storage as slab](https://github.com/onflow/cadence/pull/2895)
- Cadence 1.0: [Removing an attachment is an impure operation](https://github.com/onflow/cadence/pull/2890)
- Cadence 1.0: [Entitlement mapping escape fixes](https://github.com/onflow/cadence/pull/2877)

Chores
- [Sync stable cadence branch with master](https://github.com/onflow/cadence/issues/2899)
- flow-go: [v0.32 - Update cadence to v0.42.1-patch.1](https://github.com/dapperlabs/flow-go/issues/6891)
- flow-go-sdk: [Update to Cadence v0.42.1](https://github.com/onflow/flow-go-sdk/issues/495)
- flow-go-sdk: [v0.41 Update to Cadence v0.42.1](https://github.com/onflow/flow-go-sdk/issues/494)


**This sprint**

- continue support EVM on FLow initiative.
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - Last FLIP to be opened - Update on entitlements on Attachments
- Continue work on Cadence 1.0 migrations.
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### **Access & Data Availability - Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

Script Execution

- Add script execution to Access API - [PR 4791](https://github.com/onflow/flow-go/pull/4791)
- Validate checkpoint's root hash - [PR 4830](https://github.com/onflow/flow-go/pull/4830)
- Fix race condition in jobqueue - [PR 4840](https://github.com/onflow/flow-go/pull/4840)
- Update execution data protobuf to new namespace - [PR 4827](https://github.com/onflow/flow-go/pull/4827)

Misc

- Index collections from execution data when behind - [PR 4877](https://github.com/onflow/flow-go/pull/4877)

Community (highlighting work from community members)

- Add heartbeat responses to event streaming API - [PR 4812](https://github.com/onflow/flow-go/pull/4812) (KROK)
- Enable grpc compression - [PR 4804](https://github.com/onflow/flow-go/pull/4804) (KROK)
- Make CCF encoded events optional via request parameter (protobuf) - [PR 1391](https://github.com/onflow/flow-go/pull/1391) (KROK)
- Fix executiondata proto pkg - [PR 1353](https://github.com/onflow/flow-go/pull/1353) (QuickNode)

**This sprint**

- [OKR] Script Execution on ANs
  - Add GetRegisters API endpoint to ExecutionData API - [Issue 4756](https://github.com/onflow/flow-go/issues/4756)
  - Bug fixes from testnet [4824](https://github.com/onflow/flow-go/issues/4824), [4881](https://github.com/onflow/flow-go/issues/4881), [4880](https://github.com/onflow/flow-go/issues/4880)
  - Continue testing and analysis after Testnet spork

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Yahya H**

**Done last sprint**
- [Investigating and fixing goroutine leakage on `mainnet23`](https://github.com/dapperlabs/flow-go/issues/6871) [PR4846](https://github.com/onflow/flow-go/pull/4846)
- [Addressing technical debts for sync engine ALSP integration](https://github.com/onflow/flow-go/pull/4842) 

**Ongoing (last and next sprint)**
- [Investigated and fixed AN-LN streaming issue on `mainnet23`](https://github.com/dapperlabs/flow-go/issues/6895) [PR4875](https://github.com/onflow/flow-go/pull/4875)
- [Optimizing memory-intensive RPC inspection operations](https://github.com/dapperlabs/flow-go/issues/6870)
- [Gossip scoring to support additional cluster prefixed control messages](https://github.com/dapperlabs/flow-internal/issues/1889) [PR4857](https://github.com/onflow/flow-go/pull/4857)
- [Implement Specific Decay per Peer ID in GossipSubSpamRecord for Improved Spam Mitigation](https://github.com/dapperlabs/flow-go/issues/6662)

**Next Sprint**
- [Balancing the inbound and outbound resource limits with backpressure](https://github.com/dapperlabs/flow-go/issues/6896)
- [Apply Penalty to Misbehaving Peers Based on Count and Err in InvCtrlMsgNotif](https://github.com/dapperlabs/flow-go/issues/6664)
- [Increase test coverage for BFTune ingress unit tests](https://github.com/dapperlabs/flow-go/issues/6883)
- [[BFT Testing] Refactor Orchestrator lock contension to use worker pools](https://github.com/dapperlabs/flow-go/issues/6884)
- [[CI][Testing] Increase GitHub CI runners for resource intensive tests](https://github.com/dapperlabs/flow-go/issues/6894)

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296
- [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)

### **Consensus (Dynamic Protocol State) - Alex H**

**Done last sprint**
- Finished structural changes to the `EpochSetup` participants. Refactored utility methods for flow identities to be generic. [PR](https://github.com/onflow/flow-go/pull/4726).
- Updated how protocol state keeps track of active identities of each epoch. In the model we clearly separate identities that are allowed to participate in given epoch by a new storage model. [PR](https://github.com/onflow/flow-go/pull/4834)
- Prepared [PR](https://github.com/onflow/flow-go/pull/4868) for including protocol state ID in each block payload which guarantees that replicas can properly validate block and included service events.
- Creating a FLIP for Smart-contract-specified Epoch switchover timing (approved+merged)

**Ongoing** (last & next sprint)

- Wrapping up safety and consistency proofs
- Consolidating exploratory research documents to reflect final design
- Refactoring and refining the interfaces and data structures for clarity (👉 [epic #4649](https://github.com/onflow/flow-go/issues/4649))
- Handle high priority [TODOs](https://github.com/onflow/flow-go/issues/4649), specifically: change how protocol state behaves in case of invalid state transition and replace dynamic weight with participation status.


### **Infra - JP**

**Done last sprint**

- Increase data disk sizes
- Assist with Canary Sporks
- Create account, fund account, and generate keys for Dapper Devnet nodes
- Create infrastructure & configuratioan for Devnet48 spork
- Assist with Devnet Spork
- Scale down Devnet47 infrastructure
- Assist with HCU
- Assist with forum migration

**This Sprint**
- Update Ansible automation for Dapper nodes
- Prepare monitoring & alerting for Dapper Nodes
- Prepare Dapper infra/keys for Mainnet spork
- Create Flow Foundation infrastructure & configuration for Mainnet spork
- Create Dapper infrastructure & configuration for Mainnet spork

************Node Hosting************
### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork
     - Testnet: 25th October
     - Mainnet: **8th Nov**
       - This time the spork will take longer (~2 to 3 hrs)
