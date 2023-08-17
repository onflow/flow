# Team Wins 🎉

- Added Andrii S from KROK team residents to the onflow/flow-go repo as a reviewer
- Closed 3 FLIPs in Cadence LDM ([built-in mutability entitlements](https://github.com/onflow/flips/pull/86), [Account type refactor](https://github.com/onflow/flips/pull/92), [Nested Types Requirements removal](https://github.com/onflow/flips/pull/118)).
- Found [solution](https://github.com/onflow/flow-go/pull/4618) for mitigating the protocol state growth problem on Execution nodes.
- Completed implementation of 3 Stable Cadence features ([External Mutability Improvements](https://github.com/onflow/cadence/issues/2638), [Type Requirements Removal](https://github.com/onflow/cadence/issues/1283) and [Declare events in interface](https://github.com/onflow/cadence/issues/2602))

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

<aside>
💡 **Objective:** long-term support release of Cadence with no expected breaking changes

</aside>

**Done last sprint**

Features
- [External Mutability Improvements](https://github.com/onflow/cadence/issues/2638)
- Account Type refactoring
    - [Use thread safe data structures for entitlement maps](https://github.com/onflow/cadence/pull/2716)
- [Improved interface conformance](https://github.com/onflow/cadence/issues/2537)
    - [Allow default functions to co-exist with conditions in interface conformance](https://github.com/onflow/cadence/pull/2697)
- [Remove type requirements](https://github.com/onflow/cadence/issues/1283)
- [Remove linking based capability API and associated code](https://github.com/onflow/cadence/pull/2595)
Stable Cadence PReview release
- [[LS] Update to Cadence v0.40.0]https://github.com/onflow/cadence-tools/issues/189)
- [Update to Cadence v0.40.0](https://github.com/onflow/flow-cli/issues/1158)
- [Sync Stable Cadence branch with master](https://github.com/onflow/cadence/issues/2701)
- ...
Tech Debt / Improvements
- [Add purity annotations to newly added functions](https://github.com/onflow/cadence/issues/2466)
    - [Add purity/view annotations](https://github.com/onflow/cadence/pull/2728)
- [Clean up capability value](https://github.com/onflow/cadence/pull/2727)
- [Update storage iteration value check and related tests](https://github.com/onflow/cadence/issues/2702)
- [Improve view annotations for AuthAccount and PublicAccount](https://github.com/onflow/cadence/issues/2698)
    - [Improve view annotations for account type functions](https://github.com/onflow/cadence/pull/2699)
Bugfixes
- [Hex encode user input in error to avoid invalid UTF-8](https://github.com/onflow/cadence/pull/2704
- [Properly meter the creation of entitlement static types](https://github.com/onflow/cadence/issues/2723)
- [Reference invalidation doesn't track inner resource moves](https://github.com/onflow/cadence/issues/2458)
Minor improvements
    Atree docs:
      - [Update README.md to describe Atree](https://github.com/onflow/atree/pull/332)
    CCF:
      - [Update ccf_specs.md to fix aspell errors](https://github.com/onflow/ccf/pull/3)
      - [Fix spelling errors in CCF specs](https://github.com/onflow/ccf/pull/2)
      - [Update "Interoperability and Reuse of CBOR Codecs"](https://github.com/onflow/ccf/pull/1)
      - [Update status from "RC2 DRAFT" to "RC2"](https://github.com/fxamacker/ccf_draft/pull/99)
      - [Add new Cadence types and values to CDDL](https://github.com/fxamacker/ccf_draft/pull/98)
      - [Improve Why CBOR section](https://github.com/fxamacker/ccf_draft/pull/96)
      - [Improve and shorten Introduction](https://github.com/fxamacker/ccf_draft/pull/95)
Tests
- [Add test for borrowing as inherited interface](https://github.com/onflow/cadence/issues/2722)
Docs
- [Remove type requirement docs](https://github.com/onflow/docs/issues/170)
Chores
- [Update mutability restrictions feature branch](https://github.com/onflow/cadence/issues/2714)

  
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
- Deployed and fixed RN script execution in testnet (Amlandeep)
- Collected data comparing the EN and RN results (100% match!) and fixed Exec data sync bugs (Amlandeep)
- Started design doc for consolidating RN features to the AN (Amlandeep)

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
    - https://github.com/onflow/flow-go/pull/4574
    - https://github.com/dapperlabs/flow-go/issues/6819
    - https://github.com/dapperlabs/flow-internal/issues/1892
    - https://github.com/dapperlabs/flow-go/issues/6472
    - https://github.com/dapperlabs/flow-go/issues/6798

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296

### Consensus (Dynamic Protocol State) **- Jerome P**

**Done last sprint**
- Continuing work on Dynamic Protocol State, PR merges waiting on reviews

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

**Cast**
- Assisted with CAST staging deployment & configuration
- Updated CAST infra in preparation for external team
- Removed unnecessary read replicats for CAST infra

**Node Hosting**
- Onboarded external nodes to Canary network for automation & infra testing
- Increased Mainnet EN disk sizes
- Asissted with the Devnet47 spork infra, config, & cleanup
- Collected granular node hosting costs for nodes
- Scale down Sandboxnet in preparation for full depracation

**Quick Node**
- Fully shifted Devnet traffic to QuickNode
- Began shifting Mainnet gRPC traffic to QuickNode

**Flow DevEx**
- Created records & redirects for https://cookbook.onflow.org/ to https://cookbook.flow.com
- Created staging records for staging playground on flow.com domain

**********************This Sprint**********************

**********************Quick Node**********************

- Assist with Quick Node Migration

************Node Hosting************

- Fully deprecate Sandboxnet by snapshotting and validating restoration
- Scale down Devnet to ideal size
- Scale down Canary to ideal size
- Execute infra clean up tasks
