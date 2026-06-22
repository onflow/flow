# Flow Engineering, Board Update (mid-March to mid-June 2026)

## Headline: the network has been rock-solid since recovery

The board's last read on Flow was dominated by the January exploit. The story since is the opposite: zero incidents for roughly 4 consecutive months, and we have fundamentally upgraded how we ship.

### Reliability KPIs

- Overall network SLA climbed every sprint, from 99.66% to 99.84% YTD, and 99.93% for 2026 activity (Collection, Verification, and Access all at 100%).
- Zero incidents since late February. Every recorded incident this year sits in the Jan to Feb exploit-recovery window; nothing since.
- All network upgrades are now zero-downtime. We ran three zero-downtime HCUs (Apr 7, May 18, and the May HCU) at roughly 0.13 min impact each, versus the disruptive 8 to 9 min HCUs forced during incident recovery in January. Business context: upgrading the live network without taking it down is the operational maturity signal the board should take away.

## Security, the direct answer to the exploit

This was the top investment area and it is where the post-exploit work shows up:

- External security audit complete (early June), conducted by Otto, a deeply experienced Flow and Cadence security researcher from our community who has surfaced several important issues for us in the past. A clean independent pass from someone with this much protocol-specific depth is a strong signal.
- Real-time token supply monitoring live on mainnet, transaction-level detection of any unexpected supply change. This is the direct structural defense against the class of issue behind the exploit; we now catch it the moment it happens.
- Bug bounty (HackenProof) upgraded to v1.2 and actively producing, with multiple reported issues found and fixed through the program this quarter.
- EVM emergency-pause added: the governance multisig can now halt all EVM APIs instantly if needed.
- Sustained Cadence security hardening, 15+ security PRs, "developer foot-gun" fixes, plus fixes for 4 networking-layer reports.
- Ongoing cryptography research (SPoCK) with Spearbit to strengthen the protocol's security proofs.

## Releases and new features shipped

- Releases: flow-go v0.49.0, Cadence v1.10.3, flow-py-sdk v2.0.3.
- Performance: cross-VM bridging optimizations (up to 13.7x faster, 8x less memory on key ops); concurrent transaction execution validated on testnet; sharded fee collection on mainnet.
- New explorers live: Blockscout EVM explorers (evm.flow.com mainnet and testnet) and a redesigned Flow explorer backed by a new indexer serving full history back to Nov 2023.
- Wallet: full EOA support across all platforms, asset-claim flow, multi-account per profile.

## Next 90 days

- Three governance FLIPs publishing: inflation reduction, execution-weight recalibration, and storage fees, directly tied to token economics and network sustainability.
- Storehouse, a redesign of how execution state is stored and served. This is the foundation for scaling state to meet the demand we expect from AI agents (Riptide) and DeFi, both of which drive large, sustained growth in on-chain state and throughput.
- FindLabs infra migration and continued e2e test-coverage expansion.
- Next HCU (Cadence + Atree update) and continued Glamsterdam Ethereum-compatibility work for the EVM.
