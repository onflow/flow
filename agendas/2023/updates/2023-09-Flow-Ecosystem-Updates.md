# Flow Ecosystem Updates, September 2023

## Announcements and Wins! 🎉
* Flow announced it's [EVM interoperability plan](https://forum.onflow.org/t/evm-on-flow-beyond-solidity/5260) - check it out!
  * [Slides](https://docs.google.com/presentation/d/1_rHKDeMfU07HZldAk-vzwlWKABNeu9CGAdksHEwGlNk/edit#slide=id.g241b055a5c0_0_91) from Dete's talk at EthMilan
* Flow Reference Wallet was [released](https://flow.com/post/flow-reference-wallet-unlocking-flows-potential-with-a-fully-open-source-reference-wallet-for-builders)! This wallet showcases some of the advanced features of Flow's Account Abstraction model including support for Account Linking
* Flow & Magic.link [integration](https://flow.com/post/flow-magic-integration) is live and available to use!

## 🗒 Flow Updates: 

### Educational, learning resources, tutorials and documentation
* Flow [Developer Docs](https://developers.flow.com/) site has been getting a huge overhaul. The DevEx team has been crushing it! Some highlights include:
  * Simplified navigation and structure and addressing inconsistencies 
  * Revamped Hello World tutorials
  * New embedded Script Quickstart
  *  New Flow CLI Quickstart
  *  New FCL Quickstart 
* Cadence reference docs are moving: https://cadence-lang.org/
* Added documentation to help understand [transaction time](https://developers.flow.com/build/advanced-concepts/transaction-time)

### Tooling, infrastructure and other software for builders
* [FCL-discovery feature for wallets](https://github.com/onflow/fcl-discovery/pull/161) - if an application requires Account Linking, it informs the user if their wallet supports it

### Protocol, core contracts and node updates
* Event streaming [REST API](https://github.com/onflow/flow-go/issues/4379) for Access nodes was completed. Currently on canarynet, scheduled for next spork releases to testnet/mainnet
* Completed identity-changing operations [safety proof document](https://www.notion.so/dapperlabs/Identity-Changing-Operations-610bb2d3b63f4d3dae12e405d3c5a097)

### Cadence and smart contract updates
* Cadence Compact Format was [updated to RC3](https://github.com/onflow/ccf/issues/4)
* [Random Function Cadence FLIP](https://github.com/onflow/flips/pull/120) was approved!
* Released [DexSyncSwap](https://forum.onflow.org/t/dex-standard-on-flow/4607) smart contract standard to [testnet](https://testnet.contractbrowser.com/A.1892acb0b380cc30.DexSyncSwap) 

### Innovation, composability and advanced concepts
* 

### Mainnet, Sporks
* Next mainnet spork: Nov 8th
* Metrika released a new [dashboard](https://app.metrika.co/flow/dashboard/slas?tr=YTD) to monitor Flow network SLA

------------------------------------------

## Grant project updates
* Cadence testing framework has been getting a lot of [updates](https://forum.onflow.org/t/major-uplift-for-cadence-testing-framework/5232/4)! Check out the [updated docs](https://developers.flow.com/guides/smart-contracts/testing) and start testing Cadence with Cadence!
* Finalized 'Request for Proposal' (RFP) process for BFT Testing Framework ([BFTune](https://github.com/onflow/bftune)) for which we're actively accepting proposals from academic researchers to find BFT attack vulnerabilities in Flow

------------------------------------------
## Community updates 

* Emerald City DAO - so many updates! Jacob Tucker is on 🔥
  * Several [updates](https://docs.ecdao.org/products/emerald-bot/dapper-sports/nba-wnba-topshot) to Emerald Discord bot to allow you to create challenges for NBA Topshot, NFL All Day or UFC Strike directly in Discord!
  * [Cadence competition](https://flow.com/post/september-2023-cadence-competition) launched!
  * Launched FLOATS 2.0! https://floats.city/
    * You can now log in using Apple or Google sign in. Simply click "Connect" -> "Blocto" and you will see both options!
    * Now also supports Animated FLOATs!
  * Added 5 new code snippets on Account Linking
    * Setup a child account: https://academy.ecdao.org/en/snippets/cadence-set-up-child-account
    * Publish a child account: https://academy.ecdao.org/en/snippets/cadence-publish-a-child-account
    * Redeem a child account: https://academy.ecdao.org/en/snippets/cadence-redeem-a-child-account
    * Remove a child account: https://academy.ecdao.org/en/snippets/cadence-remove-a-child-account
    * Remove a parent account: https://academy.ecdao.org/en/snippets/cadence-remove-a-parent-account   
* LearnWeb3 started a [Hackathon](https://learnweb3.io/hackathons/decentralized-intelligence-season-1) with a prize sponsored by Flow
* [Flowty](https://www.flowty.io/) - Account Linking, Developer Docs, and volume milestones!
  * Account Linking is live on Flowty!
    * [Account Linking](https://docs.flowty.io/developer-docs/hybrid-custody) is a revolutionary feature that introduces exciting functionality today and opens up a world of opportunity for users, creators, builders, and stakeholders in the future
    * Flowty users are now able to sign in with a single account and list NFTs from any linked account. This will enable users to take out a loan using NFTs in a Dapper Wallet (a feature previously restricted to non-Dapper Wallets), pay for an NFT with one account while receiving the NFT in a second account and much more
    * Learn more by visiting [Flowty's Account Linking Hub](https://flowtyio.substack.com/p/account-linking-on-flowty?r=2lscjn&utm_campaign=post&utm_medium=web) and [Flow's Account Linking Post](https://flow.com/post/account-linking-the-future-of-flow)
  * Flowty published NFT Metadata Standard Developer Documents
    * In an effort to move Flow forward and promote a composable, open ecosystem, Flowty published [NFT metadata standard developer docs](https://docs.flowty.io/developer-docs/)
  * Flowty crossed $1 million in secondary sales volume
    * With a [$23k sale of a LeBron James Cosmic NBA Top Shot Moment](https://twitter.com/flowty_io/status/1709963736943857873?s=20), Flowty crossed $1 million in secondary sales
    * Flowty celebrated by running a [$500 Flowty Shopping Spree giveaway](https://twitter.com/flowty_io/status/1709997911407296938?s=20)

------------------------------------------
## Other misc items and updates
* ICYMI: Helpful [cheat sheet](https://gist.github.com/chasefleming/0d5e21606cf8c9a3d5584a0625544c29) for Cadence syntax and conventions
