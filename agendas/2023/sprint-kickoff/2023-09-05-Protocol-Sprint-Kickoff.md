# Team Wins 🎉


### Mainnet Uptime SLO - Last 14 days (8/3 to 8/17)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalizatoin | 99.9%  |    99.98%     |       19.8%       |
| Block Finalization      | 99.9%  |    99.98%     |       19.8%       |
| Transaction Execution   | 99.9%  |    99.98%     |       24.8%       |
| Block Sealing           | 99.9%  |    99.91%     |       89.3%       |
| Access API Liveness     | 99.9%  |    99.91%     |       90.0%       |

*99.9% translates to a maximum allowed downtime of ~20m8s for a 14-day window.*

*99% translates to a maximum allowed downtime of ~3hr20min for a 14-day window.*

### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Atree Register Inlining
- [Reduce encoded size of map and bump version](https://github.com/onflow/atree/pull/331)
- [Bump safer-golangci-lint to 1.52.2](https://github.com/onflow/atree/pull/304)

Issues
- [Add aditional authorizer for the service transaction](https://github.com/onflow/flow-go/issues/4291)
    - [Remove dual authorizers for system transaction](https://github.com/onflow/flow-go/pull/4554)

Archive node script execution
- [Create validation mode for script exec on RN/EN](https://github.com/onflow/flow-go/pull/4573)

chores
- [backport v0.31 store chunk data separate dir](https://github.com/onflow/flow-go/pull/4621)
- [Port conversion fix v0.31](https://github.com/onflow/flow-go/pull/4595)

**This sprint**

- [Continue Atree register inlining](https://github.com/onflow/atree/issues/292)
- continue testing [Atree register inlining migration](https://github.com/onflow/flow-go/pull/4633)
- Start imlementation of Storehouse design (execution state on disk)
- Deploy protocol state growth mitigation

- Investigations:
    - Go Routine Leak

**On Hold**

- Plan removal of concurrent storage bottlenecks
    - Transaction fee deduction
    - [Cadence Type checker is not reentrant](https://dapperlabs.slack.com/archives/CG0B7CJAJ/p1684434997197079) (type comparison depends on consistent pointer used by programs cache, program cache needs to always return the same pointer to the same type)
- https://github.com/onflow/flow-go/issues/3548

**Active Epics**

- https://github.com/onflow/atree/issues/292
- https://github.com/onflow/flow-go/issues/4077

### Cadence

### **Stable Cadence - Jan B**
Objective: long-term support release of Cadence with no expected breaking changes

**Done last sprint**


  
**This sprint**

- Bugfixes
    - Internal issue #139
- Needed dependency for Atree register inlining: [Add tests for child container being mutated while parent container is iterated](https://github.com/onflow/cadence/issues/2663)
- Continue work on Stable Cadence preview release
- Continue implementation of [Account Type refactoring](https://github.com/onflow/cadence/issues/2641)
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - Blocking preview release: [Relaxing interface conformance restrictions](https://github.com/onflow/flips/pull/134)
    - Continue to work on a proposal for [Attachments trolling attack](https://www.notion.so/Stable-Cadence-FLIPs-status-summary-c58a5d5c408047dba59321e4d3a0cef1?pvs=21)
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### Access & Data Availability **- Peter A**

**Done last sprint**

**This sprint**

- Archive Node V2
    - [Create FVM runtime with new pebble register database as store](https://github.com/onflow/flow-go/issues/4632) (Amlandeep)
    - [Move register DB in Archive node to Access Node](https://github.com/onflow/flow-go/issues/4606) (Amlandeep)
    - [Make use of Execution state sync data for Access node API requests](https://github.com/onflow/flow-go/issues/4631) (Amlandeep)
- [OKR] On hold (Peter OOO): Execution Data Improvements
    - https://github.com/onflow/flow-go/issues/2120 (Peter)
    - https://github.com/onflow/flow-go/issues/4455 (Peter)

**Active Epics**

- https://github.com/onflow/flow-go/issues/4410

**On Hold**

- [OKR] Working towards Execution data indexer & script execution on Access nodes
    - On hold until Archive V2 work complete
- [OKR] Enable Execution Sync on Public Network
    - On hold until execution data improvements are complete

### **Permissionless Network - Kan Z**

**Done last sprint**

**This sprint**
- Baseline protections
    - [Refactoring Networking Layer for Improved Structure and Maintainability](https://github.com/dapperlabs/flow-go/issues/6819) [PR4627](https://github.com/onflow/flow-go/pull/4627) [PR4629](https://github.com/onflow/flow-go/pull/4629) [PR4635](https://github.com/onflow/flow-go/pull/4635) (continue)
    - [Simplify Application-Specific RPC Inspector for Control Messages](https://github.com/dapperlabs/flow-go/issues/6819) (finish)
    - [Benchnet E2E testing - RPC validation Inspector & ALSP](https://github.com/dapperlabs/flow-internal/issues/1892) (start) 
    - https://github.com/dapperlabs/flow-go/issues/6472 (wrapping up, [PR](https://github.com/onflow/flow-go/pull/4574) is under review)
    - https://github.com/dapperlabs/flow-go/issues/6798 (start)
    - https://github.com/dapperlabs/flow-go/issues/6812 (continue)

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296

### Consensus (Dynamic Protocol State) **- Jerome P**

**Done last sprint**

**This sprint**
- Reviews of the following (Jordan S)
  - https://github.com/onflow/flow-go/pull/4579 (Yurii)
  - https://github.com/onflow/flow-go/pull/4597 (Yurii)
  - https://github.com/onflow/flow-go/pull/4613 (Yurii)
  - https://github.com/onflow/flow-go/pull/4625 (Yurii)
  - https://github.com/onflow/flow-go/pull/4545 (Yurii)
  - https://github.com/onflow/flow-go/pull/4559 (Yurii)

**On Hold (Yurii OOO)**
- https://github.com/dapperlabs/flow-go/issues/6801
- https://github.com/dapperlabs/flow-go/issues/6802
- https://github.com/dapperlabs/flow-go/issues/5514
- Creating static identity model, a huge refactoring of`flow.Identity`
    - https://github.com/dapperlabs/flow-go/issues/6232
- https://github.com/dapperlabs/flow-go/issues/5529

### **Infra - JP**


**Done last sprint**



**This Sprint**

**********************Quick Node**********************

- Assist with Quick Node mainnet Migration

************Node Hosting************

- Fully deprecate Sandboxnet by snapshotting and validating restoration
- Scale down Devnet to ideal size
- Scale down Canary to ideal size
- Execute infra clean up tasks

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork - Late October or early November
  - Exact dates TBD
