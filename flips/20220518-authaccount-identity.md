# Title of FLIP

| Status        | (Proposed / Rejected / Accepted / Implemented)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #) |
| **Author(s)** | Bjate Stien Karlsen (bjarte@find.xyz)         |
| **Sponsor**   | AN Expert (core-contributor@example.org)      |
| **Updated**   | 2022-05-18                                    |

## Objective

One of the most asked questions regarding access control in Cadence is: "How do I know what user called this method?". In Solidity the answer is `msg.sender`. 
However, [this pattern has several problems](https://docs.onflow.org/cadence/msg-sender/) and it is not recommended.

One of the reasons it is not recommended is that there is no secure way of doing that.  This FLIP aims to create a way to do it securely.

*Note: This FLIP does not cover __when__ you should use this instead of other patterns for identifying the sender, it only provides a way to do it safely  _if_ you need to do it.

## Motivation

Add a secure to identify if  a particular auth account signed a transaction. 

## User Benefit

It makes it possible to use patterns that are common to Solidity developers in Flow.

## Design Proposal

The design proposal and a implementation is provided in the following PR
https://github.com/onflow/cadence/pull/1363/files

### Drawbacks

Currently the documentation states that this pattern is not a best practice. Should this documentation be changed?


### Best Practices

It makes it possible to do something that it is documented is not best practice. Should this documentation be changed?

### Tutorials and Examples

See PR for examples and changed docs

### User Impact

A user will be able to call `authAccount.identity` and get something that can verify that account but cannot be obtained any other way


## Related Issues

https://github.com/onflow/cadence/pull/1363/files

## Prior Art

Solidity provides the `msg.sender` field which allows identifying who signed the currently running transaction.
