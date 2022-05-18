# Title of FLIP

| Status        | (Proposed / Rejected / Accepted / Implemented)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #) |
| **Author(s)** | Bjate Stien Karlsen (bjarte@find.xyz)         |
| **Sponsor**   | AN Expert (core-contributor@example.org)      |
| **Updated**   | 2022-05-18                                    |

## Objective

One of the most asked questions in the discord server is "how do i know what user called this method". In solidty the answer is "msg.sender", that pattern does not work on flow and it is not recommended to do things that way. 

One of the reasons it is not recommended is that there is no secure way of doing that. 

This FLIP aims to create an way to do it securely. Note that the FLIP does not cover when you should use this instead of other patterns for identifying the sender, it only covers that _if_ you need to do it you have a save way to do si.

## Motivation

Make is secure to identify that a particular auth account signed a transaction

## User Benefit

It makes it possible to use patterns that are common to solidity developers in flow

## Design Proposal

The design proposal and a implementation is provided in the following PR
https://github.com/onflow/cadence/pull/1363/files

### Drawbacks

It makes it possible to do something that it is documented is not best practice. Should this documentation be changed?


### Best Practices

It makes it possible to do something that it is documented is not best practice. Should this documentation be changed?

### Tutorials and Examples

See PR for examples and changed docs

### User Impact

A user will be able to call `authAccount.identity` and get something that can verify that account but cannot be obtained any other way


## Related Issues

https://github.com/onflow/cadence/pull/1363/files

## Prior Art

Solidity user msg.sender to identify who as signed a transaction
