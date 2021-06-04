---
title: "Governance"
slug: "governance"
excerpt: "Early governance on Flow"
hidden: true
createdAt: "2020-04-27T17:37:20.678Z"
updatedAt: "2020-08-21T18:21:05.093Z"
---
## Participation 
Participating in the governance process can take three forms:
* Being elected as a council member on the governing committee 
* Putting forth a proposal for the community to vote on
* Staking to receive voting rights

Votes will be weighted based on locked tokens. All tokens staked by node operators will be eligible for voting, but other users can lock up their tokens to be given voting power. Anyone will be able to stake a Flow token to vote on issues (even if they aren’t participating as a staked node). 

### Token Holder Rights 
Tokens may be staked for operation or governance rights which gives holders the right to participate in running a node and/or to participate in public votes. 

## Process 
Proposals can be brought forward on a public forum where they will be evaluated by the governing committee. All decisions are made publicly and any stakeholder has the opportunity to organize grassroots action to veto specific decisions or to vote in or remove council members. 

To ensure the progress of the network, the elected council first assesses the proposal and selects an answer they agree to be the "default choice". Voters can freely vote how they choose, but having a well-considered default allows forward progress without being blocked by passive participants. All decisions are voted on by all participants and decisions made by the council must be ratified by a public vote on the network. 

### Timing
Vote outcomes and upcoming votes will be published every Friday by 7am PT. All upcoming votes are available for review and voting for at least two weeks following their publication.

## Protocol Set Parameters
The following parameters will be set on the network on day 1 and will not be candidates for a public vote when the network first launches. 
  * The staking ratio preserved between each node type 
  * The maximum inflation rate 
  * The role of FLOW as the main reserve asset for collateralized secondary tokens (e.g. stablecoins)
  * The mechanism through which transaction inclusion, computation, and storage fees are determined and paid for

## Early Governance of the Protocol 
Once governance is enabled, the community can participate in the following:
 * Protocol upgrades, including things like:
        - the consensus algorithm
        - the low-level network communication structure
        - the execution environment
        - the number of seats available for each node type 
 * Management of Ecosystem Development Fund, including:
        - issuance of grants
        - bug & feature bounties
 * Selecting council members  
 * Committee budgets for each of the operational arms of the Foundation, including the executive, technical, operational, legal, pricing, financial, and marketing branches.
* Management of legal affairs, including:
        - enforcing license and patent infringements
        - issuing takedown notices and copyright infringement
        - freezing accounts if illegal activity occurs
        - updating the community, security, contribution policies

During the Bootstrapping Phase, anyone may apply online to be set as a Validator by the Company. Approved Validators must then Stake a fixed minimum of FLOWs based on Validator type. Other FLOW holders may become “Delegators” when they dedicate or “Delegate” their FLOWs to approved Node Operators as a signal that they believe that Validator to be an effective and honest participant of the network. Staking and Delegation features are already enabled as of the Effective Date.

Each Validator makes an individual decision of which Protocol Version they choose to use. Since the value of blockchain networks is primarily due to the collectively verified execution state, there is a strong incentive for Validators to choose a Protocol Version that is compatible with the Protocol Version selected by the majority of other Validators. As a practical matter, the Protocol Version chosen by the overwhelming majority of Validators is likely to be the most recent Protocol Version produced and recommended by the Core Team, provided the proposed changes are not contentious. However, if a significant fraction of the community disagrees with any aspect of the most recent Protocol Version, they can band together to use a previous Protocol Version, or some other Protocol Version defined independently from the Core Team. This process of a “contentious forking” is rare, but does have several precedents in other networks (REF: Ethereum Classic, Bitcoin Cash).

The process by which the Core Team chooses the updates for each new Protocol Version follows the open process described above, using GitHub as an open discussion platform to gauge the priorities and needs of the entire Flow ecosystem. The proposed changes by the Core Team will be announced and discussed well before they are implemented, and any community member can propose their own changes or contribute code updates to implement any proposed changes. The details of a new Protocol Version are publicly available no less than 14 days before that version is formally recommended for use by Validators (a “Release”), with the complete implementation source code visible for no less than 7 days before a Release.