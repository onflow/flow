# Overview

### Team Wins 🎉

* OpenWorkFlow 
    - launched [LLM oracle webapp](https://openworkflow-oracle-webapp.vercel.app/) on mainnet supporting FLOW and USDC.e as accepted payment types (USDC, pyUSD and USDT coming up soon).
    - Settled on the first public app to launch next sprint, enabling experimentation with agent coordination.

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
| Total downtime     |           | 0          | 240       | 317.26    | 0            | 0           | 32     | 349.26  |                                                  |
| YTD (04/24/26) SLA |           | 100.00%    | 99.87%    | 99.83%    | 100.00%      | 100.00%     | 99.98% | 99.81%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- Zero-downtime upgrade:
  - Testnet: Tuesday, 12th May
  - Mainnet: Wednesday, 13th May

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    9    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     5      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **61**  |
| Total       |   **20**    | **55**  |   **21**   |  **21**  | **117** |

- Released: [FLIP-367](https://github.com/onflow/flips/pull/368): Remove unresponsive Lilico verification node from approved list

---


# Working Group Updates


---

### **Core Protocol** \[Vishal]

**Last sprint completed, ongoing and starting**

Project board: [Flow Core 2026](https://github.com/orgs/onflow/projects/109)
[OKRs](https://docs.google.com/document/d/1GILdIH6jO6xgUklR-5CyhaQs2GvB_tUGF5XElOjrGTA)

Last sprint:
- Finalized OKRs
- Drafted [OKRs](https://docs.google.com/document/d/1GILdIH6jO6xgUklR-5CyhaQs2GvB_tUGF5XElOjrGTA/edit?usp=sharing)
- Rolled out a fix to address HackenProof security report (252) ([#4](https://github.com/onflow/flow-core-contracts-internal/issues/4))
- Core contract upgrades with Claude suggested changes ([#207](https://github.com/onflow/flow-okrs/issues/207)) (13/24)

- Cadence security update ([#222](https://github.com/onflow/flow-okrs/issues/222))
  - PR reviews
  - Assisting partners to update their contracts.
  - Compatibility testing
- Governance:
  - Drafted internal version of FLIP proposing the new inflation reduction plan ([#220](https://github.com/onflow/flow-okrs/issues/220))


Next sprint:
- Continue core contract upgrades (#207)
- Address additional security reports received recently.
- Rollout Cadence security update as zero-downtime HCU (#222)
- Finalize the inflation reduction plan (#220)
- Final index backfill tasks (account and nft metadata)
- Finalize flowscan migration plan

---

## Riptide [Jan]

**Done Last Sprint**

- Launched LLM oracle webapp on Mainnet
- Demoed ResearchTown example on emulator
- Aligned on first public launch scope

**This Sprint**

- First public launch
- Add more payment token yupes to LLM Oracle Webapp
- Enable Claude managed agents as second oracle type
- Expand docs - "deploy your first agent" section
- Continue investigation on OpenClaw / NanoClaw / Hermes agents joining the agent ecosystem autonomously.
