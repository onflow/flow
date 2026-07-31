# Overview

### Team Wins 🎉

- [FLIP-370](https://github.com/onflow/flips/blob/main/protocol/20260611-execution-effort-3.md) is now live on mainnet (see [blog](https://flow.com/post/transaction-fees-rising-flow-issuance-falling))
- FindInfra migration is complete

---

#### YTD SLA \[Vishal]

| Incident/upgrade   | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                         |
|--------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|--------------------------------------------------|
| HCU                | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                                 |
| HCU                | 1/6/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| EVM GW Issue       | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable                  |
| HCU                | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| HCU                | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| Sealing halt       | 2/11/2026 |            |           | 7         |              |             |        | 7       | FF and DL execution nodes went OOM and restarted |
| HCU                | 2/13/2026 |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| Sealing Halt       | 2/23/2026 |            | 240       | 240       |              |             |        | 240     | Consensus halted                                 |
| HCU                | 2/24/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| HCU                | 4/07/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| HCU                | 5/18/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| HCU                | 7/03/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| Total downtime     |           | 0          | 240       | 317.52    | 0            | 0           | 32     | 349.52  |                                                  |
| YTD (07/31/26) SLA |           | 100.00%    | 99.92%    | 99.90%    | 100.00%      | 100.00%     | 99.99% | 99.89%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]


- Mainnet Peak Money Prize Link Account incident (Sev 2):
  - Tue, 28th July.
  - Peak Money users were unable to withdraw from the Prize Linked Account due to transaction failure
  - Root cause was that the withdrawal transactions went over the max computation limit of 9999 after the execution weights were adjusted with FLIP-370.
  - We audited the transaction and provided a fix report and guidance on how the transaction could be revised and optimized to be well under the max limit. PeakMoney implemented the changes.

- Mainnet EVM GW incident (Sev 2):
  - Wed, 29th July.
  - HiFi/DFNS transactions for DL were getting rejected with `ErrInFlightNonce` errors
  - Root cause was that a shortcoming in the recent queuing mechanism that didn't have a reconsildation logic to recover from EVM transaction failure.
  - We are working on the solution. FF EVM GW has been reverted to the previous image and is serving HiFi/DFNS traffic for now.
  - [Issue-983](https://github.com/onflow/flow-evm-gateway/issues/983)


#### Planned downtime

- HCU in mid-Aug

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    9    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    1     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     12     |    10    | **63**  |
| Total       |   **20**    | **55**  |   **21**   |  **22**  | **118** |

- No changes

---


# Working Group Updates


---

### **Core Protocol** \[Vishal]

**Last sprint completed, ongoing and starting**

Project board: [Flow Core 2026](https://github.com/orgs/onflow/projects/109)
[OKRs](https://docs.google.com/document/d/1GILdIH6jO6xgUklR-5CyhaQs2GvB_tUGF5XElOjrGTA)

Last sprint:

- Execution weight recalibration FLIP-370
  - Rollout: Testnet Jul 22, mainnet Jul 27 ([flips#370](https://github.com/onflow/flips/issues/369), [service-account#462](https://github.com/onflow/service-account/issues/462), [flow-go#8622](https://github.com/onflow/flow-go/issues/8622))
  - Triaged the one breakage (Peak Money) and handed off a fix report.
- Storehouse ([#231](https://github.com/onflow/flow-okrs/issues/231))
  - Addressing PR review comments
  - Monitoring the payloadless trie feature on both mainnet shadow EN and one deployed testnet EN.
    - Testnet EN’s memory usage is looking very stable (62GB peak out of 270GB)
    - Mainnet shadow EN, the memory usage is also stable, below the cap 180GB.
- FindLabs infra migration([#215](https://github.com/onflow/flow-okrs/issues/215))
  - Final cutover by switching to our infra.
  - Dune and Bigquery integration.
- Addressed Hackenproof security reports
  - FLOWPROT-362 — fee underpayment root-caused; regression tests up, FlowFees mainnet upgrade deployed + synced ([flow-core-contracts#617](https://github.com/onflow/flow-core-contracts/issues/617))
  - FLOWPROT-359 — explainer written; non-critical, deprioritized
  - Fixes for two additional reports.
- Rosetta
  - Rosetta fee tracking mechanishm wasn't upto date with the multi-received fee changes on testnet.
  - [rosetta#100](https://github.com/onflow/rosetta/pull/100).
  - Fix: fee-receiver getter merged ([flow-core-contracts#615](https://github.com/onflow/flow-core-contracts/pull/615))
  - Fixed [flow-e2e-tests#95](https://github.com/onflow/flow-e2e-tests/issues/95).
- Improvement to FVM Metering
  - FVM metering fix stack fully approved — [flow-go-internal#7233](https://github.com/onflow/flow-go-internal/issues/7233), [flow-go#8610](https://github.com/onflow/flow-go/issues/8610), [flow-go#8607](https://github.com/onflow/flow-go/issues/8607)
- Reliability:
  - 0x2F register-lookup bug fixed ([flow-go#8618](https://github.com/onflow/flow-go/issues/8618))
  - Improvements to token-tracker minting check ([flow-go#8590](https://github.com/onflow/flow-go/pull/8590))
    - Token inspection now uses transaction signer information when available, improving detection of token-related issues.
    - Token monitoring now reports allow-list violations in addition to standard balance/token accounting changes.
- Kimi K3 audit of flow-go and Cadence
- Cadence:
  - Ran backward compatibility suite for latest Cadence fixes
    - Uncovered and issue and have a fix for FlowFees.
  - Ran the compiler/vm comparison tool
    - Identified some differences
    - Fixed some of them, started working on the remaining
    - Did some improvements to the tool along the way.
  - Addressed issues identified by the Kimi K3 audit.
- Infra-cost analysis
- CI/CD:
  - ~8 flaky-test/CI fixes merged or approved.
  - Modernize  the branch protection on flow-go and migrate it to rulesets [flow-go#8613](https://github.com/onflow/flow-go/pull/8613)
  - New workflow to run Claude code review on any PR touching FVM [flow-go#8614](https://github.com/onflow/flow-go/pull/8614)

Next sprint:

- Storehouse
  - Continue PR reviews
  - Deploy to additional testnet Execution nodes (EN3)
  - Investigate memory spikes happening every hour on testnet and mainnet ENs.
- Roll out the solution for EVM GW [Issue-983](https://github.com/onflow/flow-evm-gateway/issues/983)
- Address additional Hackenproof security reports
- FVM metering — merge the approved stack; needs an HCU to ship.
- First steps for rolling out concurrent execution
  - mainnet child fee accounts setup ([service-account#460](https://github.com/onflow/service-account/issues/460))
  - Run additional ENs with concurrent transaction.
- Rosetta e2e testing
  - Complete PR reviews ([rosetta#99](https://github.com/onflow/rosetta/issues/99), [#100](https://github.com/onflow/rosetta/issues/100))
  - Address [flow-e2e-tests#94](https://github.com/onflow/flow-e2e-tests/pull/94).
- Address the Kimi K3 audit findings
- Cadence:
  - Re-Run backward compatibility suite for latest Cadence fixes once more blocks are executed on MN with the updated FlowFees.
    - Fix the remaining mismatches
  - Compiler/VM - Continue re-executing blocks and compare results.
- Crypto library update from Go 1.25 to 1.26
- Implement a few infra-cost optimizations

---

## Riptide [Jan]

**Done Last Sprint**

- RipTide was deployed to [staging](https://riptide-staging.vercel.app/).
- Built automated spec -> deploy pipeline to iterate on RipTide's product shape.
- Current version is a two-phase marketplace (spec, build) tokenizing founders projects.

**This Sprint**

- Prototyping tokenized roadmaps
- Exploring agent contracts, terms, and negotiation
