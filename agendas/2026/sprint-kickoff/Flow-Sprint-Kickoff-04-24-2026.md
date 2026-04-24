# Overview

### Team Wins 🎉



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
| YTD (04/22/26) SLA |           | 100.00%    | 99.85%    | 99.80%    | 100.00%      | 100.00%     | 99.98% | 99.78%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- Zero-downtime upgrade: TBD

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    9    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **61**  |
| Total       |   **20**    | **55**  |   **20**   |  **21**  | **116** |

- Released: [FLIP-365](https://github.com/onflow/flips/blob/main/governance/20260413-removing-blocto-from-multi-sig.md): Removing Blocto as a multi-signer

---


# Working Group Updates


---

### **Core Protocol** \[Vishal]

Objectives:


**Last sprint completed, ongoing and starting**

Last sprint:


Next sprint:


---

### DeFi - FCM and FYV \[Alex/Jeff]

**In Progress**

* **[Consumer Finance on/offsite](https://dapperlabs.slack.com/archives/C0AUHHCB3HS/p1776807213156489)** — prep last week, offsite next week (Apr 27–30, Vancouver) for Q2 planning; split across a Peak Money / Consumer App track and an FCM / Protocol track.

* **Scouting a route to high confidence** (ALP + FYV)
  * [FCM v0.2 MoSCoW Prioritization](https://gist.github.com/JeffreyDoyle/7da479f8e545de03f21a1da0cd804b8a): what is in/out of the rebuild
  * broader [FCM Protocol Product Roadmap](https://docs.google.com/document/d/1XX6OtE7kSmMrfieA9RKV3AB-BZWjuVmOWWxClRa3yMo/edit):  path from today's v0.1 to an immutable, revenue-generating v1.0
  * [Ask](https://dapperlabs.slack.com/archives/C0AT1TSDFAL/p1776978252474419):
     > please review this document and think it through. It's what we'll discuss next week during the onsite, and I'd like us all to have had time to reflect on it and be ready Monday with thoughts and suggestions. This is not a finished document, but a starting place we can refine, discuss and iterate on. Please feel free to leave comments and edit suggestions directly on it for us to discuss as a group. My expectation is that this document will change significantly after our team discussions next week.
  * [**Q&A and Design sessions**](https://docs.google.com/document/d/1Hpohh6KNcRGDIkJMPeiPpPYNDhgboLUz8MiR61P35jE/edit): working through oracle panic handling, volatility circuit breaker, health trigger registration, numeraire semantics, deposit/withdraw API, governance overrides

* **Repository bootstrapping** — CI/GitHub Actions hardening and repo setup for [flow-credit-markets](https://github.com/onflow/flow-credit-markets) merged.

* **Open PRs on [flow-credit-markets](https://github.com/onflow/flow-credit-markets/pulls):**
  * [skeleton for **FlowALP**](https://github.com/onflow/flow-credit-markets/pull/3): preliminary data structures and stub methods outlining the automated lending protocol
  * [**YieldVaults Early Access**](https://github.com/onflow/flow-credit-markets/pull/4): allowlist gate restricting vault creation to vetted participants during launch, with per-pass capped allowances
  * [**YieldVaults structure**](https://github.com/onflow/flow-credit-markets/pull/8) _(draft)_: admin-curated registry of yield strategies, letting users open a vault by strategy name behind a uniform interface
  * [documentation guidelines](https://github.com/onflow/flow-credit-markets/pull/10): conventions for Cadence source documentation, based on the Cadence docgen tool
  * [**YieldVaults lending strategy**](https://github.com/onflow/flow-credit-markets/pull/11) _(draft)_: first concrete lending strategy implementation for yield vaults
  * [spec for **Health Trigger Manager**](https://github.com/onflow/flow-credit-markets/pull/12): component that fires callbacks when a position's health factor crosses registered bounds
  * [spec for **Numeraire**](https://github.com/onflow/flow-credit-markets/pull/13): USD as the protocol's unit of account for prices, with partial implementation
  * [spec for **Price Oracle**](https://github.com/onflow/flow-credit-markets/pull/14) _(draft)_: price oracle component specification
  * [README polish](https://github.com/onflow/flow-credit-markets/pull/15): clearer H1 and Flow ecosystem footer for better discoverability
  * [**invariant-based software design**](https://github.com/onflow/flow-credit-markets/pull/16) _(draft)_: exploration of an invariant-based coding style for the contracts



* **[FCM Primer](https://docs.google.com/document/d/1Ph9xnx1JvvJQdMVZoEDtTagnx_FLo0wiQZCi1BjqxyE/edit) polish** — light editorial polish on our public-facing overview of FCM's active-rebalancing lending model (live doc).




---

### Security [Jan]

**Done Last Sprint**



**This Sprint**




---


### **Governance** \[Vishal]

Objectives:

**Done last sprint**
* No updates


**This sprint**
* No Updates

---
