# Overview

### Team Wins 🎉

- External security audit complete

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
| Total downtime     |           | 0          | 240       | 317.39    | 0            | 0           | 32     | 349.39  |                                                  |
| YTD (06/05/26) SLA |           | 100.00%    | 99.89%    | 99.86%    | 100.00%      | 100.00%     | 99.98% | 99.84%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- HCU next sprint, exact dates are still tbd.


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

- no new FLIP added this week.
  - Execution weight recalibration - internal review
  - Inflation reduction - internal review
  - Storage Fees - Data collection complete
---


# Working Group Updates


---

### **Core Protocol** \[Vishal]

**Last sprint completed, ongoing and starting**

Project board: [Flow Core 2026](https://github.com/orgs/onflow/projects/109)
[OKRs](https://docs.google.com/document/d/1GILdIH6jO6xgUklR-5CyhaQs2GvB_tUGF5XElOjrGTA)

Last sprint:

- Cadence and Atree updates to be rolled out as part of the HCU
- External security audit complete
- Reduce redundant infra ([#1247](https://github.com/onflow/ff-sre-infrastructure/issues/1247))
- Storehouse design discussion ([#231](https://github.com/onflow/flow-okrs/issues/231))
- Investigate the Flow bridge issue ([#235](https://github.com/onflow/flow-okrs/issues/235))
- Data collection for the Storage Fee FLIP ([#7213](https://github.com/onflow/flow-go-internal/issues/7213))
- Recalibration of execution weights FLIP ([#211](https://github.com/onflow/flow-okrs/issues/211))
- Flow EVM Gateway fix to resolve issue reported by DFNS.
- Flow Python SDK release with Access API updates - https://github.com/onflow/flow-py-sdk/releases/tag/v2.0.3
- Started the FindLabs infra migration([#215](https://github.com/onflow/flow-okrs/issues/215))
- Expand the e2e test coverage ([#72](https://github.com/onflow/flow-e2e-tests/issues/72))
  - Added tests for EVM
  - Improved the scaffold
  - New Claude skill `add-e2e-test` that makes it easy to add new tests

Next sprint:

- HCU to roll out Cadence and Atree update and the fix for stale cluster topic metrics ([#8555](https://github.com/onflow/flow-go/issues/8555)
- Continue working on the Storehouse design and implementation
- Continue the FindLabs infra migration
- Investigate the Flow bridge issue ([#235](https://github.com/onflow/flow-okrs/issues/235))
- Publish the three FLIPS
  - Execution weight recalibration
  - Inflation reduction
  - Storage Fees

---

## Riptide [Jan]

**Done Last Sprint**
- Researched and discussed Reputation platform
- Pivoted to validation research and delivered validation demo app

**This Sprint**
- Expanding the validation demo to collaboration demo




