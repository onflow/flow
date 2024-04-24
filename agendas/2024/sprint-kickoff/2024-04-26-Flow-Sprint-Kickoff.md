# Overview


### Team Wins 🎉

### General updates


### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)
- Starting this week:

---

### Mainnet Uptime - Last 7 days (xx/yy/24 to xx/yy/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.99%    |       9.82%       |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents


### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: 5/22/24
  - Mainnet: June/July 2024 (exact date TBD)
- Two testnet migration test runs completed

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    8   |       0          |       5          |        **20**          |
| Proposed    | 3  |    2     |       2          |       1          |        **8**          |
| Accepted    | 2  |    1     |       1       |       2          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       2       |       0          |        **22**          |
| Released    | 4  |    0     |       3       |       4          |        **11**          |
| Total       | **17**  |    **30**    |       **9**       |       **12**          |        **68**          |

- No new FLIPs or changes during the sprint
- Some FLIPs are still not reflected in the project tracker. **Remember**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
### Untagged FLIPs -
- https://github.com/onflow/flips/pull/246 
- https://github.com/onflow/flips/pull/250
- https://github.com/onflow/flips/pull/256
  
---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

1) Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
2) Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption.
3) Analyze execution runtime trends and risks to plan next set of scalability OKRs.

* Stretch-goals:
4) Expand testing capability of storehouse so that we can validate execution correctness and benchmark performance on Mainnet data
5) Design a new Trie to improve performance of update operation, reduce memory usage and size of proofs and to support more flexible proof queries.
6) Enable Concurrent Execution on one EN on Mainnet to validate correctness of the implementation (Detect execution forks)
7) Improve execution performance to mitigate the impact of adding metadata to token standards

**Done last sprint**


**This sprint**

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* [Emulator release is ready](https://github.com/onflow/flow-cli/releases/tag/v1.17.0-cadence-v1.0.0-preview.19), support devs that are teting migration, monitor Discord questions.

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Testnet migration completed, moving on to adding [Atree register inlining](https://github.com/onflow/cadence/pull/3048) migration and validating migrated state on the TN migration environment.
* Continue work on migration optimizations.
* Continue with [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) for production readiness.

Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
* Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Continue refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
* Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

* Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)

**On Hold**

Objective 2: Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption
- KR1: Update weights for the execution operations on TN and MN
  - [Execution effort recalibration - data collection](https://github.com/onflow/flow-go/issues/5026)


**Active Epics**

Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
- KR4: Testnet Upgrade to Crescendo Release
- KR6: Develop & share with community a disaster recovery plan to address potential issues after migration to Crescendo Release.
- KR7: Decision on how to deal with contracts that have not been upgraded to Cadence 1.0 by developers.
Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
- KR1: Measure execution state growth trends, identify future bottlenecks and prioritize by urgency

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Translate crypto performance improvements to consensus block rate increase
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**


**This sprint**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - [Finalize and merge PR for querying of KV Store](https://github.com/onflow/flow-go/pull/5650)
  - Cleanup and fix tests (large!)
  - Finish smart contract to coordinate protocol upgrade ([PR #411](https://github.com/onflow/flow-core-contracts/pull/411))
  - Continue on integration tests ([draft PR #5477](https://github.com/onflow/flow-go/pull/5477))
  - Implementation and PR reviews of remaining loose ends for KV Store integration
  - Completing https://github.com/onflow/flow-go/pull/5656
  - Version upgrade protocol integration test will be unblocked, [preparing for review](https://github.com/onflow/flow-go/pull/5477)

* <ins>EFM Recovery</ins>
  - Generate data for EFM recovery (complete [PR #5576](https://github.com/onflow/flow-go/pull/5576) and potential follow-up)
  - Start on [Governance Transaction to initiate EFM recovery](https://github.com/dapperlabs/flow-go/issues/6956)
  - [Wrap up cadence changes](https://github.com/onflow/flow-go/issues/5638)
  - [EFM recovery e2e integration tests](https://github.com/onflow/flow-go/issues/5639)

* <ins>Cryptography</ins>
   - Randomness-on chain contract: merge then deploy contracts onchain
   - BLS proof of possession: check the state of old epic and remaining work


* <ins>Data Availability:</ins>
  - Continue to rollout local script exec to additional QN ANs
  - Test local script exec with remaining studio nodes
  - Enable programs cache on AN (complete [PR #5585](https://github.com/onflow/flow-go/pull/5585))
  - KROK Team
    - Complete adding tx results to streaming SendAndSubscribe response ([PR #5566](https://github.com/onflow/flow-go/issues/5566))
    - Fix race condition in Access ingestion engine ([Issue #5420](https://github.com/onflow/flow-go/issues/5420))
    - Support enabling indexing on Dynamic bootstrapped AN ([Issue #5423](https://github.com/onflow/flow-go/issues/5423))
    - Event streaming blog post


**On Hold**
* Deliver public roadmap & vision for technical protocol decentralization focusing on current challenges and upcoming updates for permissionless consensus on Flow.
* Implement BFT mitigations to enable 20 permissionless ANs

**Active Epics**

- Reinforcing Flow’s commitment to full protocol autonomy and scalability
- Improve network performance
- Improve network availability 
- Simplify community contributions to core protocol and maintainability
- Improve network reliability and data availability for dApp developers
- Data-driven Prioritization and Scaling Engineering

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Resolving Circle's existing engineering improvements for USDC on Flow
- DEX Prep - IncrementFi
- Bridge Prep - Axelar

**Done last sprint**

**This sprint**

* Review plan/proposal for next phase of JVM SDK update to bring it back to feature parity after years of being overlooked
* Start ramping [DeBridge](https://docs.debridge.finance/) integration for EVM

**On Hold**
- Axelar Cadence bridge release waiting confirmation of new timeline, no engineering ongoing

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Greg]

Cycle Objective(s):

- Bring Cadence 1.0 to market as part of the Crescendo release to minimize customer impact and developer effort
- Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
- Use the Crescendo Release grow Flow's developer base and network activity

**Done last sprint**

**This sprint**
**Sprint goal focusing on updating EVM docs, tooling support, CLI Interactive Setup**

- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] FlowEVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] Enhance CLI init Command with Interactive Setup, Config Automation, and Default Project Structure [#1390](https://github.com/onflow/flow-cli/issues/1390)
- [EPIC] Update Internal Tools and Repos for C1.0 Support [#530](https://github.com/onflow/docs/issues/530)
- Write new doc on Sponsored Transactions under Advanced Topics [#692](https://github.com/onflow/docs/issues/692)
- Testing Ledger Cadence v1.0 transactions [#20](https://github.com/onflow/fcl-six/issues/20)
- Testing complex contracts deployment to previewnet EVM [#713](https://github.com/onflow/docs/issues/713)
- Stage and test core contracts 
- Circle USDC contract changes and integrations
- Add newsletter signup to developer landing page [#717](https://github.com/onflow/docs/issues/717)


**On Hold**

- Update Flow port for Cadence Crescendo instance [#279](https://github.com/onflow/flow-port/issues/279)
- Blocked: Update Playground to support Cadence 1.0 [#760](https://github.com/onflow/flow-playground/issues/760)

---

### **Wallet** \[Jeff]

Cycle Objective(s): 

- Ensure there exists a wallet ecosystem supports FlowEVM
  - Release version 2.2 of Flow Wallet which supports FlowEVM
    - Support Authn / Authz / User Sign with Web3.js and WalletConnect
    - Support FT and NFT management cross VMs
    - FlowEVM onboarding and COA creation
  - Ensure commitments from key EVM wallet providers to support FlowEVM
    - Secure FlowEVM as an option in the network selector list for MetaMask.
    - Reach out to Coinbase wallet for a commitment to support FlowEVM
  - Ensure commitments from key EVM wallet providers to support FlowEVM
    - Reach out to Privy for a commitment to support FlowEVM
    - Reach out to Bastion for a commitment to support FlowEVM
    - Ensure awareness for existing Cadence aware wallet (aside from Flow Wallet) to support FlowEVM
  - Provide a design document outlining the steps existing Cadence aware wallets can take to support FlowEVM.
    - Reach out to Blocto for a commitment to support FlowEVM
    - Reach out to Shadow wallet for a commitment to support FlowEVM
    - Reach out to Magic for a commitment to support FlowEVM

- Promote safe, human readable transaction authorization on Flow
  - Secure a partnership with Blockaid to integrate their transaction simulation and security platform with FlowEVM.
  - Ensure the existing MetaMask Blockaid integration is compatible with FlowEVM.

- Modernize and improve FCL Discovery
  - Create a PRD and associated community bounty/grant for UI/UX improvements and analytics additions to FCL Discovery.

**Done last sprint**


**This sprint**

- Complete Web3.js integration, authorization
- VM Bridge integration, moving FT and NFT in app.
- Product scoping for next cycle:
  - Identifying needed polish + bug fixes
  - Next product opportunities
- CTD: Outreach with Coinbase Wallet, MetaMask, Shadow Wallet and Blocto
- CTD: Working with Apple on app approval & release

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 
- Finish GCP project migration to the Flow Foundation org
- Remove dependency on Gen2 cluster resources for CloudFlare migration
- Continue assisting with DevEx migration to Cloud Run

**Done last sprint**

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Finish Gen2 cluster clean up and migration to GCP load balancing
- Move GCP projects to Flow Foundation as needed

---

### **Governance and Tokenomics** \[Vishal]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**

**This sprint**

- Gather and respond to community feedback on the forum post
- For decentralization efforts, work with a16z to consolidate three nodes, and with Coinbase to reduce one node they operate on leased stake
- Continue work on automation of the decentralization dashboard to send messages when critical thresholds are crossed
- Draft FLIP on EVM gas to compute ratio and compute limit hike.
- Update FLIP on transaction fee to suggest a transaction fee multiplier closely tied to FLOW token's market price
- Continue research on Inflation (new strategies, other networks, validator impact, etc.) and have a second round of review.
  

**On Hold**


**Active Epics**

- N/A
