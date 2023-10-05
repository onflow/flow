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
* Event streaming REST API for Access nodes was completed. Currently on canarynet, scheduled for next spork releases to testnet/mainnet
* Completed identity-changing operations [safety proof document](https://www.notion.so/dapperlabs/Identity-Changing-Operations-610bb2d3b63f4d3dae12e405d3c5a097)

### Cadence and smart contract updates
* Cadence Compact Format was [updated to RC3](https://github.com/onflow/ccf/issues/4)
* [Random Function Cadence FLIP](https://github.com/onflow/flips/pull/120) was approved!
* Released [DexSyncSwap](https://forum.onflow.org/t/dex-standard-on-flow/4607) smart contract standard to [testnet](https://testnet.contractbrowser.com/A.1892acb0b380cc30.DexSyncSwap) 

### Innovation, composability and advanced concepts
* 

### CI/CD and Testing
*

### Mainnet, Sporks, uptime/SLO
* Next spork: Nov 8th
* Metrika released a new [dashboard](https://app.metrika.co/flow/dashboard/slas?tr=YTD) to monitor Flow network SLA

------------------------------------------

## Grant project updates
* Cadence testing framework has been getting a lot of [updates](https://forum.onflow.org/t/major-uplift-for-cadence-testing-framework/5232/4)! Check out the [updated docs](https://developers.flow.com/guides/smart-contracts/testing) and start testing Cadence with Cadence!

------------------------------------------
## Community updates 

* **[Emerald City DAO]** - so many updates! Jacob Tucker is on 🔥
* Several [updates](https://docs.ecdao.org/products/emerald-bot/dapper-sports/nba-wnba-topshot) to Emerald Discord bot to allow you to create challenges for NBA Topshot, NFL All Day or UFC Strike directly in Discord!
  * [Cadence competition]((https://flow.com/post/september-2023-cadence-competition)) launched!
  * Launched FLOATS 2.0! https://floats.city/
    * You can now log in using Apple or Google sign in. Simply click "Connect" -> "Blocto" and you will see both options!
    * Now also supports Animated FlOATs!
  * Added 5 new code snippets on Account Linking
    * Setup a child account: https://academy.ecdao.org/en/snippets/cadence-set-up-child-account
    * Publish a child account: https://academy.ecdao.org/en/snippets/cadence-publish-a-child-account
    * Redeem a child account: https://academy.ecdao.org/en/snippets/cadence-redeem-a-child-account
    * Remove a child account: https://academy.ecdao.org/en/snippets/cadence-remove-a-child-account
    * Remove a parent account: https://academy.ecdao.org/en/snippets/cadence-remove-a-parent-account   
* **[LearnWeb3 Hackathon]** LearnWeb3 started a [Hackathon](https://learnweb3.io/hackathons/decentralized-intelligence-season-1) with a prize sponsored by Flow

------------------------------------------
## Other misc items and updates
* ICYMI: Helpful [cheat sheet](https://gist.github.com/chasefleming/0d5e21606cf8c9a3d5584a0625544c29) for Cadence syntax and conventions
