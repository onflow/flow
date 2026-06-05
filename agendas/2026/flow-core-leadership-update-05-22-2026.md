# Flow Core — Monthly Leadership Update (Late April – May 2026)

*Prepared for verbal delivery. Estimated read time: ~4–5 minutes.*

---

## OKR 1: Zero Downtime

No unplanned incidents this month. Zero minutes of unplanned downtime.

Year-to-date overall SLA is 99.83% against a target of 99.93%. The gap is entirely Q1 — the security incident recovery in January and the 240-minute consensus halt in February. Since March, the record is clean. The trend is the right one.

On the planned downtime side, we executed a zero-downtime upgrade on May 13th — testnet Tuesday, mainnet Wednesday — which included Cadence fixes, networking improvements, and EVM transaction cost optimizations. No user impact.

Looking at the upgrade roadmap for the year, here's where we stand on the five planned upgrades:

- **Upgrade 1** — the Cadence security HCU — is **done and shipped**.
- **Upgrade 2** — the follow-up HCU for a possible second Cadence audit — is on the roadmap pending audit outcomes.
- **Upgrade 3** — core contract upgrades — is effectively **complete**: 23 of 24 upgrades are done.
- **Upgrades 4 and 5** — concurrent execution and the compiler/VM — are in design and planning phases.

---

## OKR 2: Security Without Compromise

Zero critical or high-severity incidents on mainnet in the past month. The security track record is intact.

We resolved two issues reported through HackenProof — both addressed with coordinated zero-downtime upgrades, within the 7-day target. Separately, we shipped a Cadence fix addressing a developer vulnerability, coordinating with two ecosystem partners whose contracts were affected. We also resolved four networking-related security reports.

We're working through the backlog of security reports. No critical items outstanding.

The pattern worth noting for leadership: we've now shipped six security-related upgrades this year, all with zero user-facing downtime. The process is working.

---

## OKR 3: App-Driven Protocol Work

Three protocol initiatives are in active development, all tied to documented application-level need:

**Execution weight recalibration.** We're re-tuning the computational cost model for transactions. This is directly tied to the capacity headroom OKR — we need accurate weights to correctly measure saturation and enforce the 50% headroom target. We had a recent spike in execution saturation and investigated it; that investigation is informing the recalibration work. Technical analysis is done. A FLIP is in draft. Public proposal coming next sprint.

**Ethereum Glamsterdam support.** This is the next EVM protocol fork. Work has started — two PRs are open. This is driven by EVM compatibility requirements from applications building on Flow EVM.

**Storage fee redesign.** We're in the data collection phase for a FLIP that would redesign how on-chain storage costs work. This is tied to long-term sustainability and usage patterns across FCM, Peak Money, and other applications. Draft FLIP coming soon.

**Inflation reduction.** The internal FLIP is drafted and ready for broader review. This is a governance initiative — not a protocol feature — but it's squarely in scope for the team. We'll need leadership visibility on the public rollout process.

**On execution saturation specifically:** we're actively monitoring hourly and daily averages. We investigated a recent spike and found no cause for concern, but it reinforced the need for the recalibration work. Capacity projections for FCM and Peak Money demand are part of our quarterly planning process.

---

## What's Coming

Three FLIPs are in preparation and will go public in the next sprint or two:

1. **Execution weight recalibration**
2. **Inflation reduction**
3. **Storage fees**

Beyond that: Storehouse design is underway (infrastructure for how state is stored on execution nodes), we're expanding end-to-end test coverage, and we're beginning to reduce redundant infrastructure.

---

## Summary

The network is stable, security posture is strong, and the work we're doing is tied to real application needs — not features for features' sake.
