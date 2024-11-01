# Overview

### Team Wins 🎉

- Trado bugs blocking Flow Wallet fixed
- Hyperlane validators needed for BTC bridge now stood up and being tested
- Unblocked DevDock to use FCL w native Cadence for primary integration (AI domain partner builder)
- Offer for Tim accepted as Protocol Eng I, starting Nov 18th
- Integration test Emulator dependency removed
- All reported Cadence security issues fixed & deployed
- Deployed FVM feature that enables no-downtime Cadence update (short-term using version beacon, will be updated to use dynamic protocol state)
- Cadence Source compatibility suite update - we now run unit tests on community repos to validate new Cadence versions & expaneded the suite to run tests using Cadence Testing Framework.
- Validated Pebble DB releases data during pruning - we were able to prune the Data chunk pack DB from GBs after few days of running to ~6MB.
- Cadence working group - Reviewed 8 open FLIPS, 3 approved ([275](https://github.com/onflow/flips/pull/276), [288](https://github.com/onflow/flips/pull/289), [293](https://github.com/onflow/flips/pull/294)), 1 ice-boxed ([#41](https://github.com/onflow/flips/pull/41)), 1 remains open for community contribution ([251](https://github.com/onflow/flips/pull/245)), 3 require follow-up ([198](https://github.com/onflow/flips/pull/198), [255](https://github.com/onflow/flips/pull/256), [295](https://github.com/onflow/flips/pull/295)).
- Flow AI added to Docs
- Docs: Reduced steps in getting started and refocused docs home page focus from EVM to Cadence
- Worked with community (Deniz) to optimize Cadence NFT serialization en route to EVM
- Highest ever weekly FCL downloads besides v1.0 release
- FCL-JS fully compatible with Telegram Apps


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (10/18/24 to 10/31/24) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%      |       0%          |
| Block Finalization      | 99.9%   |    100%      |       0%          |
| Transaction Execution   | 99.9%   |    99.95%    |       49.6%       |
| Block Sealing           | 99.9%   |    99.96%    |       24.8%       |
| Access API Liveness     | 99.9%   |    99.31%    |       694.44%     |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

YTD SLA: 99.52%

## Incidents
1. Oct 30th 8:40 PM to 11:00 PM Pacific Sev 1 - `onflow.org` domain expired and failed to auto-renew ([Incident Response](https://www.notion.so/flowfoundation/Flow-onflow-org-domain-expiry-resulting-in-platform-wide-outages-10-30-2024-1301aee123248053b0d1d325ea99a809))

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - TBD

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]

**Cycle Objectives**

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**
- Feature:
    - Community request: [Add string formatting function](https://github.com/onflow/cadence/issues/3579)
    - [FLIP 275](https://github.com/onflow/flips/blob/aff797600512cf1432474659035ee5a0b5ea195f/cadence/20240604-cadence-type-removal.md) implementation: [Allow removing type declarations from contracts](https://github.com/onflow/cadence/issues/3210)
    - [Add a WebAssembly API](https://github.com/onflow/cadence/issues/2853)
        - [Add meter method which returns remaining computation for given computation kind](https://github.com/onflow/flow-go/pull/6215)
    - [Updating Source compatibility suite for C1.0](https://github.com/onflow/cadence/issues/3608)
- Contribute to Cadence learning app POC:
    - [Add first version of GoldStar contract](https://github.com/onflow/gold-star/pull/1)
    - [Add a "deployed a contract" challenge](https://github.com/onflow/gold-star/pull/3)
    - [Add a "no-op" challenge](https://github.com/onflow/gold-star/pull/2)
- Bugfix:
    - [Port security fixes](https://github.com/onflow/cadence/pull/3654)
    - [v1.0 Port security fixes](https://github.com/onflow/cadence/pull/3653)
    - security fixes: [1](https://github.com/onflow/cadence-internal/pull/273), [2](https://github.com/onflow/cadence-internal/pull/272)
- Tech-debt removal:
    - [Refactor and update struct stringer tests](https://github.com/onflow/cadence/pull/3661)
    - [Refactor test utils](https://github.com/onflow/cadence/pull/3652)
    - [Refactor tests](https://github.com/onflow/cadence/pull/3651)
    - [Move architecture diagram to contributor documentation directory](https://github.com/onflow/cadence/pull/3650)
    - [Update old uses of pub and priv](https://github.com/onflow/cadence/pull/3647)
    - [Source Compatibility Suite update - enable tests using Cadence Testing Framework](https://github.com/onflow/cadence/pull/3644) - also added [green-goo-dao](https://github.com/green-goo-dao) community repo.
        - [Update source compatibility suite for latest cadence v1.0.1](https://github.com/onflow/cadence/pull/3616)
    - [Fix and improve CCF CDDL in comments](https://github.com/onflow/cadence/pull/3643)
    - [Remove attachments enabling flag](https://github.com/onflow/cadence/pull/3642)
    - [Move the crypto contract outside of cadence](https://github.com/onflow/cadence/issues/3135)
        - [Resolve location of imported values](https://github.com/onflow/cadence/pull/3634)
    - [Update contracts-compatibility-checker](https://github.com/onflow/cadence/pull/3631) to always use latest Cadence version.
    - [Cleanup outdated FT/NFT related contract codes and tests](https://github.com/onflow/cadence/pull/3630)
    - [Fix storage explorer tool](https://github.com/onflow/cadence/pull/3627)
    - [Reorganize repository](https://github.com/onflow/cadence/issues/526)
- FLIPs:
    - approved [FLIP 275: Removal of Types in Contract Updates](https://github.com/onflow/flips/pull/276)
    - approved [FLIP 293: StructStringer interface](https://github.com/onflow/flips/pull/294)
    - approved [FLIP 288: Simple String Interpolation](https://github.com/onflow/flips/pull/289)
- Chores:
    - [Add a GitHub Action to get all contracts](https://github.com/onflow/cadence/pull/3663)
    - [Update the config of the update tool](https://github.com/onflow/cadence/pull/3641)
    - [Re-enable and update the Source Compatiblity Suite GitHub action](https://github.com/onflow/cadence/pull/3632)
- Docs
    - [Document Go patterns used in the codebase](https://github.com/onflow/cadence/pull/3649)
    - [Remove details about unavailable type-removal pragma](https://github.com/onflow/cadence-lang.org/pull/167)
    - [Remove Callout and Admonition mapping](https://github.com/onflow/cadence-lang.org/pull/165)
    - [Update release docs with a section for versioning strategy](https://github.com/onflow/cadence/pull/3629)

**Cadence Execution**
- Feature
    - Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
        - [Add function to check if address has unsaved changes in storage](https://github.com/onflow/atree/pull/450)
    - Enabling No-downtime Cadence update: [Expose minimum required version to cadence interface
](https://github.com/onflow/cadence/pull/3616)
- Tech-debt
    - [Remove deprecated ingestion engine](https://github.com/onflow/flow-go/pull/6510)
    - [Remove Cadence 1.0 / Crescendo migrations](https://github.com/onflow/flow-go/pull/6572)
- Dependency updates: [1](https://github.com/onflow/flow-go/pull/6608), [2](https://github.com/onflow/flow-go-sdk/pull/796), [3](https://github.com/onflow/flow-go/pull/6607), [4](https://github.com/onflow/flow-go-internal/pull/6990), [5](https://github.com/onflow/flow-go-internal/pull/6989), [6](https://github.com/onflow/flow-go-internal/pull/6988), [7](https://github.com/onflow/flow-evm-gateway/pull/623), [8](https://github.com/onflow/flixkit-go/pull/83), [9](https://github.com/onflow/cadence-tools/pull/441), [9](https://github.com/onflow/flowkit/pull/77), [10](https://github.com/onflow/cadence-tools/pull/440), [11](https://github.com/onflow/cadence-tools/pull/439), [12](https://github.com/onflow/flow-emulator/pull/765), [13](https://github.com/onflow/flow-go-sdk/pull/788), [14](https://github.com/onflow/flow-go-sdk/pull/787), [15](https://github.com/onflow/flow-go/pull/6581), [16](https://github.com/onflow/flow-go-sdk/pull/786)

**EVM Core**
- Package for Gateway dry-run feature:
    - [Offchain package - part 2](https://github.com/onflow/flow-go/pull/6545)
    - [Offchain package - part 3](https://github.com/onflow/flow-go/pull/6546)
- bugfix:
    - [Fix COA ownership proof](https://github.com/onflow/flow-go/pull/6550)
- Improvements:
    - enables concurrent use of emulator: [Make chain config concurrency safe](https://github.com/onflow/flow-go/pull/6578)
- Util:
    - New methods to test EVM Tx replayability: [adding event collection and verification utilities](https://github.com/onflow/flow-go/pull/6582)
    - [add utility command to export EVM state](https://github.com/onflow/flow-go/pull/6561)
    - [Adding account/slot/code iterators to the base storage](https://github.com/onflow/flow-go/pull/6555)

**EVM Gateway**
- Dry-run feature:
    - [Remove traces downloader](https://github.com/onflow/flow-evm-gateway/pull/639)
- Stabilization:
    - [Fix block ingestion stalls](https://github.com/onflow/flow-go/issues/6609)
- Bugfix:
    - [Broken Chain in JSON rpc nodes with Flow-Testnet](https://github.com/onflow/flow-evm-gateway/issues/534)
- Improvements:
    - [Add the EVM GW version to log lines](https://github.com/onflow/flow-evm-gateway/pull/596)
    - [Use the released tag version to identify newly-created docker images](https://github.com/onflow/flow-evm-gateway/pull/592)
- API updates & improvements
    - [Avoid logging debug info for invalid JSON-RPC methods](https://github.com/onflow/flow-evm-gateway/pull/611)
    - [Update the list of valid JSON-RPC methods](https://github.com/onflow/flow-evm-gateway/pull/613)

**This sprint**

- Continue work on [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539)

- Cadence Language
  - Complete remaining Tech-debt [Tech Debt](https://github.com/onflow/cadence/issues/3595)
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC](https://github.com/onflow/cadence/issues/3612)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)

- Cadence Execution
  - Continue work on [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)
  
**Completed OKRs**
  
**On Hold**

- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Faster transaction results to improve user experience [IN PROGRESS]
* Address vectors which risk network downtime
  1. Protocol level HCU] [IN PROGRESS]
  2. Operationalize EFM Recovery [NOT STARTED]
* Add passkey support: Protocol design and scoping [NOT STARTED]
* Furthering permissionless participation
  1. Proof of Possession [IN PROGRESS]
  2. KR2: SPoCK Research

**Done last Sprint:**
  * Offer for Tim accepted as Protocol Eng I, starting Nov 18th
  * 

* <ins>EFM Recovery</ins>

* <ins>Cryptography</ins>

* <ins>Data Availability</ins>
  - KROK Team
    - Websockets initial design complete
    - Add Time To Seal metric ([PR #6512](https://github.com/onflow/flow-go/pull/6512), [PR #6605](https://github.com/onflow/flow-go/pull/6605))
    - Store tx result error messages in database ([PR #6468](https://github.com/onflow/flow-go/pull/6468))
    - SDK alignment [1](https://github.com/onflow/flow-go-sdk/pull/778), [2](https://github.com/onflow/flow-go-sdk/pull/779), [3](https://github.com/onflow/flow-go-sdk/pull/780), [4](https://github.com/onflow/flow-go-sdk/pull/790)
    - Address tech debt [1](https://github.com/onflow/flow-go/pull/6547), [2](https://github.com/onflow/flow-go/pull/6554)

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**This sprint**

* <ins>EFM Recovery</ins>
  - [Implement an integration test for EFM and DKG IndexMap](https://github.com/onflow/flow-go/issues/6331)
  - Complete main EFM recovery logic PR
  - [Merge Protocol version upgrade PR](https://github.com/onflow/flow-core-contracts/pull/419)
  - Merge open PRs that are under review
  - Finish integration test and related DKG issue
    
* <ins>Data Availability</ins>
  - KROK Team
    - Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
      - Implement router ([Issue #6593](https://github.com/onflow/flow-go/issues/6593) - In review, [Issue #6583](https://github.com/onflow/flow-go/issues/6583) - In progress, [Issue #6584](https://github.com/onflow/flow-go/issues/6584) - In progress)
      - Improvements to tx result streaming endpoint ([Issue #6573](https://github.com/onflow/flow-go/issues/6573), [Issue #6574](https://github.com/onflow/flow-go/issues/6574), [Issue #6575](https://github.com/onflow/flow-go/issues/6575), [Issue #6604](https://github.com/onflow/flow-go/issues/6604))
    - Registers db pruning ([Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Backfill tool for tx result errors ([Issue #6413](https://github.com/onflow/flow-go/issues/6413) - In review)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)
    - Access API / Go SDK alignment ([Epic #735](https://github.com/onflow/flow-go-sdk/issues/735))
      - Unify streaming endpoints code duplication ([Issue #763](https://github.com/onflow/flow-go-sdk/issues/763) - In review)
      - Fixes/Improvements [1](https://github.com/onflow/flow-go-sdk/issues/783), [2](https://github.com/onflow/flow-go-sdk/issues/784), [3](https://github.com/onflow/flow-go-sdk/issues/767)
    - Tech debt [1](https://github.com/onflow/flow-go/issues/6564), [2](https://github.com/onflow/flow-go/issues/6566), [3](https://github.com/onflow/flow-go/issues/6497)

* <ins>Cryptography</ins>
  - Passkeys reading (understanding the standard)
  - PoP:
    - Polish the contract - Ledger backward compatibility
    - Setup the Ledger environment to build Ledger apps
  - SPoCK aggregation: continue reading the KOSK-based proof

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**On Hold**

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**
  * Supported Hyperlane to get validator nodes setup for BTC bridge
  * Unblocked DevDock to use FCL w native Cadence for primary integration (AI domain partner builder)
  * Funded Axelar pools (nearly) critical mass of validators for bridge activation
  * Trado bugs blocking Flow Wallet fixed
  * Continuing merging update to JVM SDK to reach Go SDK parity

**This sprint**
  * Resolve 2x Axelar nodes activation issues to unblock bridge 
  * Keep helping partners and node operators
  * Review/merge upcoming JVM SDK PRs to get to Go SDK parity
  * Soft launch Hyperlane BTC bridge (hopefully)
  * Kick off Credora (off to on chain credit scoring) and Ethereum Attestion Service integration
  
**On Hold**

---

### **User Experience** \[Greg]

Cycle Objective(s):
 - Improve Quality of Life, Level Up Dev Documentation and Learning Path, Supercharge EVMxCadence, Inspire and Excite Wave of New Flow Devs

**Done last sprint**
**Crescendo Rewards** 
- Update Cryptoys image (https://github.com/onflow/crescendo-rewards/issues/483 )
- Update Terms of Service (https://github.com/onflow/crescendo-rewards/issues/487 )
- Remove claim section and move points box (https://github.com/onflow/crescendo-rewards/issues/489 )
- Add store banner (https://github.com/onflow/crescendo-rewards/issues/491 )
**Smart Contracts**
- Deploy and test Crypto contract on testnet and mainnet
- Updated LockedTokens to help reclaim leases
- Upgraded FlowStakingCollection with better error messages
- Blog post for broken Crescendo contracts
**VM Bridge**
- Fix cases of underflow in event of storage decrease
- Update display type serialization
- Optimize serialization
- X-Chain Axelar Bridge (bridge.flow.com
**FCL Discovery**
- [[FEATURE] Capture SWR errors with Sentry](https://github.com/onflow/fcl-discovery/issues/271)
FCL
- [[FEATURE] Improved Cadence Error Reporting](https://github.com/onflow/fcl-js/issues/1891)
- [[BUG] Mobile wallets deeplink during both authn & authz phase](https://github.com/onflow/fcl-js/issues/1971)
- [[BUG] Mobile deep linking generates extra blank tab & doesnt work with in-app browsers](https://github.com/onflow/fcl-js/issues/1972)
- [[TS] Provider type is missing fields](https://github.com/onflow/fcl-js/issues/1973)
- [[Tech Debt] Update development dependencies (bunding dependencies, plugins, jest, typescript)](https://github.com/onflow/fcl-js/issues/1974)
- [[FEATURE] Decrease transaction polling interval](https://github.com/onflow/fcl-js/issues/1988)
- [[FEATURE] Add a check to prevent major version bumps](https://github.com/onflow/fcl-js/issues/1992)
- [Restore FCL-WC deeplinking during authz request when initiated by non-WC/RPC pre-authz](https://github.com/onflow/fcl-js/issues/1998)
**Flow Port**
- Add Fungible Token list view
Ledger Specific:
- Fixed bug, Tell user they need to update Flow Ledger App (https://github.com/onflow/fcl-ledger-web/issues/79)
- Updated fcl-ledger-web to use public key indexer for account discovery
- Updated fcl-ledger-web to use proxy to future proof against spamming hardware-wallet-api account creation. (https://github.com/onflow/fcl-ledger-web/issues/80)
**Docs**
- Rewrite Step One Getting Started Page (https://github.com/onflow/docs/issues/947) 
- Change focus of home page to Cadence (https://github.com/onflow/docs/issues/948 )
- [Bug] part 1 autoscrolls to iframe on first load (https://github.com/onflow/docs/issues/954 )
- Move flow runner output to right panel (https://github.com/onflow/docs/issues/955 )
- Embedded runner in getting started should have code pre-populated (https://github.com/onflow/docs/issues/960 )
- Fix any old references to flow setup (https://github.com/onflow/docs/issues/972 )
- Consolidate Flow CLI instructions that are duplicated (https://github.com/onflow/docs/issues/974 )
**Flow Go SDK**
- [Fix Cadence examples #793](https://github.com/onflow/flow-go-sdk/pull/793)
**Public Key Indexer** 
- Added isReverted, signing/hash algo
**Cadence VSCode Extension**
- [Button to create flow.json file fails](https://github.com/onflow/vscode-cadence/issues/697)
- [[LS] import Crypto no longer available](https://github.com/onflow/cadence-tools/issues/443)

**This sprint**
**Sprint Goal: Improve Quality of Life, Dev Documentation and Learning Path, Supercharge EVMxCadence,  Rewards Handoff, Lost and Found (Integration - Flow Port, Flow Wallet)**

- [EPIC] Dev Docs - Crucial Guides and Improvments [#745](https://github.com/onflow/docs/issues/745)
- [EPIC] Streamline Mobile Wallet Support [#1976](https://github.com/onflow/fcl-js/issues/1976)
- [EPIC] Improve Quality of Life and Reduce Technical Debt [#29](https://github.com/onflow/dx-internal/issues/29)
- [EPIC] Verify Completion of Commitments for EVM Launch Partners #25
- [EPIC] Flow Rewards (RAIN)
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
- [EPIC Solving Initialization/Storage Issues - Lost and Found FLIP and Port integration](https://github.com/onflow/flow-port/issues/292)
- [Flow Bridge App Epic](https://github.com/onflow/flow-bridge-app/issues/1)

Issues
- Docs Improvements https://github.com/onflow/docs/issues/745
- Slack Issue Bot
- Deprecation of js-testing
- Transaction Management Guide
- Cadence X EVM Examples (SC)
- L&F integration (Flow Port)
- Snag Handoff (Site domain, Auto Unlock, API Update for Flipside)
- Flow Wallet Chrome Extension support and improvements
- EVM Apps Using Cadence (Supercharge Example)


**On Hold**

- bridge.flow.com

---

### **Wallet** \[Jeff]

Cycle Objective(s): 

- [Please enter cycle objectives for Q4 2024]

**Done last sprint**

**This sprint**


**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
**Done last sprint**

**BTC Bridge Integration**
- Created new network & observability infra for hyperlane validators
- Created configuration & infra for hyperlane nodes

**Atlantis Migration**
- Coordinated creation of Atlantis App in onflow Org
- Created new atlantis infrastructure in FF SRE project
- Created new GH teams in onflow org to match FF 
- Created production SRE project
- Migrated infra repos to onflow org
- Reconfigured IAM to infra repos in onflow org
- Migrated secrets for atlantis to FF SRE project
- Migrated & rebuilt terraform modules to only include FF modules & code

**IAM Group Migration**
- Created FF IAM Google groups
- Added FF members to groups

**Support**
- Created DNS record for new subdomain

**This Sprint**
- Complete GCP IAM migration to Flow Foundation groups
- Assist in fixing workflows with GH repo migration
- Assist in improving integration test execution
