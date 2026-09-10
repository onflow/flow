# Overview

### Team Wins 🎉

- AnkrFlow Security incident has been addressed (see [postmortem](https://x.com/AnkrLabsTeam/status/2094909584712638632) posted by Ankr)

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
| HCU                | 7/02/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| HCU                | 8/18/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| Total downtime     |           | 0          | 240       | 317.65    | 0            | 0           | 32     | 349.65  |                                                  |
| YTD (09/10/26) SLA |           | 100.00%    | 99.93%    | 99.91%    | 100.00%      | 100.00%     | 99.99% | 99.90%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- no incidents


#### Planned downtime

- No planned downtime.

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

- Storehouse ([#231](https://github.com/onflow/flow-okrs/issues/231))
  - Continue testing on testnet (2 out of the 3 ENs are running storehouse)
  - PR reviews
- EVM GW DFNS issue [Issue-983](https://github.com/onflow/flow-evm-gateway/issues/983)
  - DFNS traffic moved over to the public node
  - Addressed a follow-up issue reported by Alchemy ([flow-evm-gw#993](#https://github.com/onflow/flow-evm-gateway/pull/993)) through release [v1.5.8](https://github.com/onflow/flow-evm-gateway/releases/tag/v1.5.8)
- Flow-EVM-Bridge:
  - Address multiple issues reported through Hackenproof and found through an internal audit.
- Infra-cost optimization
  - Analysis of cost-optimization.
- Storage Fee FLIP
  - Data analysis to decide on the rollout plan
- Kimi K3 audit
  - Reviewing PRs

Next sprint:

- Storehouse
  - Continue PR reviews
  - Deploy to additional testnet Execution nodes (EN3)
- Address additional Hackenproof security reports
- Cadence:
  - Run the backward compatibility test suite once more, for the last Cadence security fix(es).
  - Once above is completed, do another Cadence release
  - Re-run the execution-results comparison tool for compiler/vm.
- Implement additional infra-cost optimizations
- Storage Fee FLIP
  - Second round of internal review.
  - FLIP draft

---

## Riptide [Jan]

**Done Last Sprint**



**This Sprint**


  

