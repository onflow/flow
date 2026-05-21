# Overview

### Team Wins 🎉

- Zero-downtime testnet and mainnet HCU done.
  - Release notes:
    - Flow-go: https://github.com/onflow/flow-go/releases/tag/v0.49.0
    - Cadence: https://github.com/onflow/cadence/releases/tag/v1.10.3

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
| YTD (04/24/26) SLA |           | 100.00%    | 99.88%    | 99.84%    | 100.00%      | 100.00%     | 99.98% | 99.83%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- TBD


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

- No new FLIPS added
- Three FLIPS coming up soon:
  - Execution weight recalibration
  - Inflation reduction
  - Storage Fees

---


# Working Group Updates


---

### **Core Protocol** \[Vishal]

**Last sprint completed, ongoing and starting**

Project board: [Flow Core 2026](https://github.com/orgs/onflow/projects/109)
[OKRs](https://docs.google.com/document/d/1GILdIH6jO6xgUklR-5CyhaQs2GvB_tUGF5XElOjrGTA)

Last sprint:

- Rolled Cadence, networking and EVM tx cost optimization update as a zero-downtime HCU ([#222](https://github.com/onflow/flow-okrs/issues/222))
- Recalibration of execution weights ([#211](https://github.com/onflow/flow-okrs/issues/211))
  - Technical analysis
  - Draft internal version of the FLIP
  - Investiaged a recent spike in execution saturation ([#228](https://github.com/onflow/flow-okrs/issues/228))
- Core contract upgrades with Claude suggested changes ([#207](https://github.com/onflow/flow-okrs/issues/207)) (23/24)
- Started the work for the Ethereum Glamsterdam upgrade ([#961](https://github.com/onflow/flow-evm-gateway/issues/961))
  - [PR1](https://github.com/onflow/flow-go/pull/8554), [PR2](https://github.com/onflow/flow-evm-gateway/pull/962)
- Storehouse design ([#231](https://github.com/onflow/flow-okrs/issues/231))
- Clean up stale cluster topic metrics ([#8555](https://github.com/onflow/flow-go/issues/8555))

Next sprint:

- Cadence updates
- Reduce redundant infra ([#1247](https://github.com/onflow/ff-sre-infrastructure/issues/1247))
- Continue Storehouse design ([#231](https://github.com/onflow/flow-okrs/issues/231))
- Investigate the Flow bridge issue ([#235](https://github.com/onflow/flow-okrs/issues/235))
- Draft first version of the Storage Fee FLIP ([#232](https://github.com/onflow/flow-okrs/issues/232))
  - Data collection ([#7213](https://github.com/onflow/flow-go-internal/issues/7213))
- Expand the e2e test coverage ([#72](https://github.com/onflow/flow-e2e-tests/issues/72))
- Rolling upgrade for #8555.


Reminder:
- Move to `#flow-core-new` channel on the Foundation slack.

---

## Riptide [Jan]

**Done Last Sprint**


**This Sprint**


