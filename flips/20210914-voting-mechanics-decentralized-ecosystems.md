# Voting Mechanics in Decentralized Ecosystems

| Status        | Proposed                                             |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    |                                                      |
| **Author(s)** | Jeffrey Doyle (jeffrey.doyle@dapperlabs.com),        |
| **Sponsor**   | Jeffrey Doyle (jeffrey.doyle@dapperlabs.com)         |
| **Updated**   | 2020-09-14                                           |

## Overview

In decentralized organizations, governance is often constructed such that
authority in the organization is distributed horizontally to many or all
organizational participants, rather than vertically in such a way that grants
some participants authority in decision making while others do not have a voice.

The topic of decentralized governance has been explored many times across
various blockchain projects. Often a DAO (Decentralized Autonomous Organization)
is constructed, represented as a Smart Contract, which facilitates a structure
of rules that outline how the organization performs actions upon a system it
controls. When constructed, the DAO is given control of some system, and the
ability to impact change upon that system. The actions performed by the DAO upon
the system it controls are often _proposed_, and then _voted_ upon by members or
participants of the organization. If conditions are met such that a vote is
passed, the proposed action is carried out autonomously by the DAO.

What a DAO can do is virtually limitless. However, the mechanic that enables
community participation in the actions performed by a DAO, or any other
decentralized ecosystem is contentious. There has yet to be discovered a
universally accepted set of best practices for enabling decentralized, community
driven governance in a decentralized system.

This FLIP aims to gather ideas, feedback, and debate on what might be an ideal
set of best practices for community driven governance via voting in a
decentralized system.

## Motivation

Voting is a mechanic often employed by a DAO to enable it's governance. Members
of an organization are given an ability to _vote_, and thus individually gain an
ability to impact change. It's the mechanic behind the voting system of a DAO
that is often contentious.

There have been throughout human history many implementations of governmental
systems. Today, countries around the world approach the topic of governance in
many different ways. Each governmental system gives it's countries citizens a
varying degree of ability to impact and direct change. In some systems, citizens
each have an equal vote. In other systems, citizens elect representatives and
thereby delegate their voting power to an authority. In some systems, citizens
don't have an ability to vote at all.

What is rather consistent among many democratized countries is that a citizen's
ability to vote is tied to their identity as an individual. Excluding fraudulent
situations, a citizen is only able to vote once.

In blockchains, individuals often control a number of different blockchain
"Accounts". On Flow, an Account is a record of which maintains a unique
identifier (an Address), a set of Keys, Contracts, and Storage where it's
digital assets are kept. On Ethereum, individuals own Addresses which are
derived from a Public / Private key pair. Individual's Ethereum assets are
therefor assets that are assigned ownership to the addresses they control.

If a DAO allows membership (it's entirely possible to construct a DAO that
avoids any concept of membership altogether) to any Account, and then allows
that Account to vote once on proposals for the DAO, it is therefore allowing any
Account on the blockchain to cast one vote. But remember, an individual can
control any number of Accounts! Therefore, an individual can cast as many votes
as they create Accounts. This is a problem, as there is a rather obvious path
for individuals to exploit the system and sway a vote in their desired favour.

To avoid this, DAOs can create a concept of membership. A DAO might choose to
only allow membership if an Account pays to it some amount of value, such as an
amount of a Fungible Token. Only once an Account pays the membership fee would
it then be allowed to vote. However, this system is not without it's own
drawbacks; as while it certainly increases the cost it would require to exploit
the system, it still allows for an exploiter with enough funds to do so.

Given enough time, many derivative ideas / mechanics of how a DAO could enable
voting can be thought up. All of these ideas carry with them a set of features
as well as drawbacks. Deciding which mechanic to facilitate voting therefore
becomes an exercise of evaluating tradeoffs. The lens of which these tradeoffs
are evaluated is often philosophical and values driven.

This FLIP aims to spark debate, and act as an open collection of voting ideas
and mechanics that are important and preferred by the Flow community. Once
enough voices are heard, a ideal voting mechanic could be agreed upon that takes
into account the values, opinions and strategies the Flow community thinks are
best; of which can be used by projects that require a voting mechanic for their
governance.

### Leading ideas to think about

> Note: There are plenty of other considerations to think about, these are
> simply a few to start your thought process.

- How might a voting solution that involves a users true identity work? Could a
  system be constructed such that an individual, regardless of the number of
  accounts they control, only be able to cast one vote. What are the tradeoffs
  involved in such a solution?
- How could a _weighted voting_ mechanic work to reduce an individuals ability
  to have more influence on a given vote than their fair share. What are the
  tradeoffs involved with such a mechanic?
- Should there be a cost associated with casting a vote? What should be the
  unit(s) of value be that are charged to participate in voting? How are these
  unit(s) of value created (if applicable)? What are the tradeoffs involved with
  this mechanic?

## Prior Art

- MakerDAO (https://makerdao.com/en/)
- Compound (https://compound.finance/governance)
- Uniswap (https://app.uniswap.org/#/vote)

## Discussion Topics

What is an ideal voting mechanic, a set of best practices, that developers
should use when attempting to build voting into their system's governance
process. What are the pros, cons and tradeoffs considered with the voting
mechanic?
