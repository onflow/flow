# Overview

 ### Team Wins 🎉

* Tidal Onsite - General Milestones and outcomes decided upon
* EVM Pectra update live on Flow Mainnet!
* First version of [Execution node with Compiler + VM integrated](https://github.com/onflow/flow-go/pull/7369) to run Fee deduction, Account balance and Storage limits checks ready for testing!
* Cadence [Compiler Milestone 5: All interpreter tests for existing functionality](https://github.com/onflow/cadence/issues/3922) progressing super well, 60% of test coverage (~500/800 tests) now run on the VM.

---

### Mainnet Uptime - Last 14 days (05/02/25 to 05/16/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
| ---------------------- |-----------|------------|-----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |            |           | 5         |              | 5      |               |
| Total downtime in mins |           | 210        | 210       | 235       | 210          | 230    |               |
| YTD (5/16/25) SLA       |           | 99.89%     | 99.89%    | 99.88%    | 99.89%       | 99.88% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 99.96%       | 99.96% |               |

### Incidents

### Integrations

### Mainnet
- P0 and P1: None

### Testnet
#### P0
- 14th May 12:50 AM Pacific: EVM GW nodes stopped on testnet.
  - Root cause: EVM GWs were mistakenly updated to incorrect node software version.

#### P1
- 13th May 9:08 AM Pacific: Block explorer (flowscan) couldn't index new contracts.
  - Root cause: AN1 on testnet was behind in terms of block height. Removing AN1 from load balancer rotation solved the problem.


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

* No change

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
    - [Port non-compiler/VM changes from feature branch to master](https://github.com/onflow/cadence/pull/3919)
- [Compiler Milestone 5: All interpreter tests for existing functionality](https://github.com/onflow/cadence/issues/3922)
    - [[Compiler] Run more tests with the compiler and VM](https://github.com/onflow/cadence/pull/3921)
    - [[Compiler] Run for-statement tests with compiler](https://github.com/onflow/cadence/pull/3923)
    - [[Compiler] Refactor test utility functions](https://github.com/onflow/cadence/pull/3924)
    - [[Compiler] Run more tests with the compiler](https://github.com/onflow/cadence/pull/3925)
    - [[Compiler] Run `interpreter/misc_test.go` with compiler](https://github.com/onflow/cadence/pull/3926)
    - [[Compiler] Enable more misc tests](https://github.com/onflow/cadence/pull/3928)
    - [[Compiler] Pass `vm.Context` instead of `vm.Config` to contract function handler](https://github.com/onflow/cadence/pull/3933)
    - [[Compiler] Fix compilation of inherited conditions with different parameters](https://github.com/onflow/cadence/pull/3932)
    - [[Compiler] Refactor function invocation on vm](https://github.com/onflow/cadence/pull/3934)
    - [[Compiler] Add receiver validation for bound functions](https://github.com/onflow/cadence/pull/3935)
    - [[Compiler] Add string stdlib functions](https://github.com/onflow/cadence/pull/3936)
    - [Refactor type constructors](https://github.com/onflow/cadence/pull/3942)
    - [[Compiler] Run most metatype tests and all interface tests with compiler/VM](https://github.com/onflow/cadence/pull/3941)
    - [[Compiler] Register type constructor functions in VM, run runtime-type tests with compiler/VM](https://github.com/onflow/cadence/pull/3945)
- [Compiler - Next Milestone](https://github.com/onflow/cadence/issues/3804)
    - [[Compiler] Enable conditions test](https://github.com/onflow/cadence/pull/3917)
    - [[Compiler] Compile global variables](https://github.com/onflow/cadence/pull/3920)
    - [[Compiler] Compile position info as a line-number table](https://github.com/onflow/cadence/pull/3939)
- Tech debt
    - [Improve error wrapping of runtime interface calls](https://github.com/onflow/cadence/pull/3927)
    - [Improve computation metering interface](https://github.com/onflow/cadence/pull/3929)
- Chore
    - [Port non-compiler/VM changes from feature branch to master](https://github.com/onflow/cadence/pull/3930)
    - [Update linter, lint](https://github.com/onflow/cadence/pull/3940)
    - [ Port non-compiler/VM changes from feature branch to master ](https://github.com/onflow/cadence/pull/3943)
    - [Sync compiler/VM feature branch](https://github.com/onflow/cadence/pull/3944)

**Cadence Execution**
- [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
    - [Add lock context to storage cache](https://github.com/onflow/flow-go/pull/7393)
    - [[Storing] Refactor hotstuff Persister](https://github.com/onflow/flow-go/pull/7358)
    - [[Util] Refactor the flags for reading datadir and pebble-dir](https://github.com/onflow/flow-go/pull/7380)
- Checkpointing performance improvement:
    - [Reduce state extraction w/o migration by ~29 minutes (~2.5x speedup)](https://github.com/onflow/flow-go/pull/7373)
- Testing improvement:
    - [Add additional test to check for state commitment changes](https://github.com/onflow/flow-go/pull/7377)
- End-End tests updates:
    - [Update flow-go](https://github.com/onflow/flow-e2e-tests/pull/63)
    - [Skip AccountV2Migration contract checking](https://github.com/onflow/flow-e2e-tests/pull/64)
- TPS loader fixes & improvements
    - [Localnet hooks for TPS loader](https://github.com/onflow/flow-go/pull/7165)
    - [Continous loading](https://github.com/onflow/flow-execution-effort-estimation/pull/32)
    - [Refactor Component Engine](https://github.com/onflow/flow-execution-effort-estimation/pull/36)
    - [Read starting TPS from big query](https://github.com/onflow/flow-execution-effort-estimation/pull/37)
    - [Loader fixes](https://github.com/onflow/flow-execution-effort-estimation/pull/38)
    - [Extract block emmiter from transaction sender](https://github.com/onflow/flow-execution-effort-estimation/pull/39)
    - [Transaction Data Scraper](https://github.com/onflow/flow-execution-effort-estimation/pull/40)

**EVM**
- Pectra upgrade prep:
    - [Update to and enable EVM Pectra hard-fork](https://github.com/onflow/flow-go/pull/7328)
    - [Sync with Geth version `v1.15.10`](https://github.com/onflow/go-ethereum/pull/24)
    - [Update to EVM Pectra hard-fork](https://github.com/onflow/flow-evm-gateway/pull/805)
    - [Back-port EVM Pectra hard-fork to soft finality](https://github.com/onflow/flow-evm-gateway/pull/816)
- Bugfixes:
- [Create `ValidationOptions` for each tx submission](https://github.com/onflow/flow-evm-gateway/pull/818)
- [Return authorization list for `SetCodeTx` type](https://github.com/onflow/flow-evm-gateway/pull/821)


**This sprint**

- Cadence Language
  - Test [Compiler Milestone 4](https://github.com/onflow/cadence/issues/3856) on migration TN and capture CPU profiles.
  - Continue working on [Compiler Milestone 5: All interpreter tests for existing functionality](https://github.com/onflow/cadence/issues/3922)

- Cadence Execution
  - Continue new Trie research
  - Continue work on [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
  - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
  - Wrap-up hackathon project

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
  * KROK Team

    * Done:

      [[Access] The WebSoket connection closes after a few seconds of being active on testnet](https://github.com/onflow/flow-go/issues/7403) - Investigated root case of an issue. But this appears to be a machine configuration issue. I'm not sure if we will need any more input from us.

      **_Optimistic Syncing:_**

      [[DataAvailability] Implement Persister interface](https://github.com/onflow/flow-go/issues/7198)

      [[DataAvailability] Implement processing pipeline state machine](https://github.com/onflow/flow-go/issues/7201)


    * In Review:

      **_Optimistic Syncing:_**

      [[DataAvailability] Implement Index step logic](https://github.com/onflow/flow-go/issues/7203)

      [[DataAvailability] Implement Download step logic](https://github.com/onflow/flow-go/issues/7202)

      [[DataAvailability] Create a module that downloads the tx result error messages](https://github.com/onflow/flow-go/issues/7356)

      [[DataAvailability] Implement Download step logic](https://github.com/onflow/flow-go/issues/7202)

    * In Progress:

      **_Optimistic Syncing:_**

      [[DataAvailability] Implement Persist step logic](https://github.com/onflow/flow-go/issues/7204)


* <ins>Malleability</ins>
  * Supported KROK with PR reviews for `cluster.Block`, `flow.Block`.
  * ID caching strategy discussion and review.
  *  KROK Team
     * Done:

       [[Malleability C] cluster.Block](https://github.com/onflow/flow-go/issues/6660)
     * In Review:

       [[Malleability C] flow.Block](https://github.com/onflow/flow-go/issues/6716)

       [[Malleability Immutable] Enforce immutability for EpochRecover (draft)](https://github.com/onflow/flow-go/issues/7285)

       [[Malleability Immutable] Enforce immutability for EpochSetup (draft)](https://github.com/onflow/flow-go/issues/7284)

       [[Malleability Immutable] Enforce immutability for EpochCommit (draft)](https://github.com/onflow/flow-go/issues/7286)

       [[Malleability Immutable] Enforce immutability for MissingCollection.](https://github.com/onflow/flow-go/issues/7275)

       [[Malleability Immutable] Enforce immutability for Vote.](https://github.com/onflow/flow-go/issues/7273)

       [[Malleability Immutable] Enforce immutability for IncorporatedResult.](https://github.com/onflow/flow-go/issues/7292)

     * In Progress:

       [[Malleability Immutable] Enforce immutability for MinEpochStateEntry](https://github.com/onflow/flow-go/issues/7293)

       [[Malleability Immutable] Enforce immutability for EpochStateEntry](https://github.com/onflow/flow-go/issues/7295)

       [[Malleability Immutable] Enforce immutability for RichEpochStateEntry](https://github.com/onflow/flow-go/issues/7296)

       [[Malleability Immutable] Enforce immutability for Collection.](https://github.com/onflow/flow-go/issues/7281)

       [[Malleability Immutable] Enforce immutability for CollectionGuarantee.](https://github.com/onflow/flow-go/issues/7283)

       [[Malleability Immutable] Enforce immutability for QuorumCertificate.](https://github.com/onflow/flow-go/issues/7297)

* <ins>Cryptography</ins>
  - SPoCK aggregation research.
    - Finished reading Boldyreva’s 2003 verif-aggregate proof (KOSK based) - sketching a KOSK-based proof for SPoCK aggregation - reading 2018 Boneh-Drijvers new proofs (PoP based) for multi-verif and verif-aggregate - looked at surjective hashing assumptions - looked at link of Spock aggregation and strong transitivity
  - Proof of Possession:
    - Check with partner to support the update
    - Update bootstrapping tool PR
  - Randomness: Reviewed Kit (the fcl tool) for usages of randomness, provided feedback and updated tool's docs.
  - Passkeys: Worked on the draft implementation of the Passkey FLIP.

**This sprint**

* <ins>Data Availability</ins>

  * KROK Team

      **_Optimistic Syncing:_**

      [[DataAvailability] Integrate pipeline processing steps into Core](https://github.com/onflow/flow-go/issues/7374)

      Continue working towards [milestone 1](https://www.notion.so/flowfoundation/Optimistic-Syncing-System-Design-1c11aee12324807d9b42f3f25f6ab7db?pvs=4#1c11aee1232480b7ac2af58af084107a) for Optimistic syncing new issues and Review Remarks
  
 

* <ins>Malleability</ins>
    
    * KROK Team      
      
        Continue working on Malleability Immutable tasks and the [flow.Block](https://github.com/onflow/flow-go/issues/6716) malleability review remarks.

* <ins>Cryptography</ins>
  * Continue SPoCK aggregation research
    * Continue on strong transitivity assumptions - Refine the current SPoCk agg definitions (multi-verif or agg-verif or both) - security proofs of Boneh-Drivers for same message and PoP-based

* <ins>Protocol misc</ins>

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

Tidal Onsite
- Outlined the stages of deliverables
 - Tracer Bullet
 - Closed Beta
 - Open Beta
- Tracer Bullet
 - Front End scaffold complete
 - Backend Infrastructure Setup, including emulator setup
 - On Chain Event Interfaces complete

WFLOW LayerZero OFT
- Design implementation plan
- Setup Safe on ETH Mainnet
- Transfer ownership of WFLOW contract from Wrapped team
- Verify and remove roles
- Write scripts and complete transfer of ownership
- Write foundry scripts for
 - MintAndBurnAdapter deployment
 - Give minting and burning rights on ETH mainnet
 - Configuring LayerZero Decenteralized Verifier Networks
 - Set peers
 - NOFT deployment on Flow EVM
 - Collateralize NOFT gas adapter on Flow EVM
- Ongoing Fork testing

**This sprint**
Tidal
- Continue working on Tracer Bullet
 - Replace mock data with Backend Interactions
 - Move backend towards more onchain interactions
 - Continue connecting onchain work flow via DeFi blocks
 - Continue working towards one full "position" user flow

WFLOW LayerZero OFT
- Transfer Flow from Wrapped Anchorage Account to Flow EVM
- Complete Fork Testing
- Start Mainnet deployment and configuration

**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

**Done last sprint**

- Set up automated API documentation generation for FCL/SDK using TypeScript and JSDoc
- Migrated the cross-VM batch transaction hook from the scaffold to `@onflow/kit`
- Added a theming system for components in `@onflow/kit`
- Added a cross-VM balance hook to `@onflow/kit`
- Participated in a hackathon

**This sprint**

- Set up CI for automated documentation generation
- Convert FCL core exposed APIs to TypeScript
- Build a profile component for `@onflow/kit`
- Build a transaction component for `@onflow/kit`
- Add a cross-VM FT spend hook to `@onflow/kit`
- Add a cross-VM NFT spend hook to `@onflow/kit`
- Add an NFT hook to `@onflow/kit`
- Add a child accounts hook to `@onflow/kit`

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (Apr 21): 1.25/week

**Done last sprint**

**This sprint**



**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**DNS Migration**
- [Delete the benchmark.onflow.org CloudFlare zone](https://github.com/onflow/ff-sre-infrastructure/issues/300)
- [Deleted unused DNS load balancers](https://github.com/onflow/ff-sre-infrastructure/issues/293)
- [Duplicate historical node records that have not been moved to standard deployment](https://github.com/onflow/ff-sre-infrastructure/issues/368)
- [Duplicate non node records to onflow.org](https://github.com/onflow/ff-sre-infrastructure/issues/370)
- [Identify key telemetry for monitoring Grafana Alloy agent](https://github.com/onflow/ff-sre-infrastructure/issues/260)
- [Migrate Devnet EVM GW LB to CNAME](https://github.com/onflow/ff-sre-infrastructure/issues/291)
- [Migrate Mainnet DNS Load Balancers to CNAME records](https://github.com/onflow/ff-sre-infrastructure/issues/292)
- [Migrate Migration Testnet DNS Load Balancers](https://github.com/onflow/ff-sre-infrastructure/issues/302)
- [Migrate access.devnet.nodes.onflow.org to TCP LB](https://github.com/onflow/ff-sre-infrastructure/issues/379)
- [Migrate atlantis.ops.onflow.org to onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/340)
- [Migrate benchnet.onflow.org records to onflow.org](https://github.com/onflow/ff-sre-infrastructure/issues/301)
- [Recreate Mainnet historical DNS records in the onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/295)
- [Recreate Migration network records](https://github.com/onflow/ff-sre-infrastructure/issues/361)
- [Recreate the Devnet DNS records in the onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/297)
- [Recreate the Mainnet DNS records in the onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/296)
- [Update Mainnet to support pulling private images](https://github.com/onflow/ff-sre-infrastructure/issues/229)
- [Update network terraform module to include additional records on onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/299)

-**Support**
- [Enable networking.googleapis.com service in ff-sre-production](https://github.com/onflow/ff-sre-infrastructure/issues/376)
- [Fix Envoy config not being templated for LNs](https://github.com/onflow/ff-sre-infrastructure/issues/351)
- [Grant Migration Testnet Service Account access to TN EVM KMS keys](https://github.com/onflow/ff-sre-infrastructure/issues/344)
- [Increase AN8 instance size to have more memory](https://github.com/onflow/ff-sre-infrastructure/issues/341)
- [Update DL LNs & VNs to include GOMEMLIMIT](https://github.com/onflow/ff-sre-infrastructure/issues/352)
- [Update checkpoint extraction workflow to be more robust](https://github.com/onflow/ff-sre-infrastructure/issues/328)

**Grafana Alloy Implementation**
- [Create bucket to store Alloy binaries](https://github.com/onflow/ff-sre-infrastructure/issues/322)
- [Create secrets for configuration and load at VM startup](https://github.com/onflow/ff-sre-infrastructure/issues/102)


**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Support Private Image Builds](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=104950609&issue=onflow%7Cff-sre-infrastructure%7C225)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation [DONE]
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
N/A

**This sprint**

1. Onboard 5 new consensus nodes that will be run by QuickNode.
2. Continue Flow tokenomics framework discussion with Dete

---
