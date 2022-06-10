---
title: Smart Contract Testing Guidelines
sidebar_title: 1. Smart Contract Testing
---

Achieving good test coverage is vital for assuring the quality of code written to be deployed on the Flow blockchain.

Automated tests can be run locally in the Flow emulator, and on the Flow testnet. These tests should include both unit tests; to exercise each feature of a contract, and integration tests; to exercise the behavior of different parts of the project as a whole.

Human-driven tests, in which individual testers work manually through user stories via the project's user interface or custom transactions, can also be performed locally. Tests with groups of testers can be performed similarly on testnet in a similar manner.

Finally, unstructured closed testing with a limited audience on testnet can gain valuable information about performance and security by capturing usage data from more organic interaction with the project's smart contracts over days or weeks.

## Testing Requirements

> **Important**: This chapter will not be relevant as soon as [permissionless deployment](https://permissionless.onflow.org/) rolls out on Flow (ETA summer 2022). Once rolled out, you can deploy to the mainnet directly without going through a review process. However, good testing practices are important and should be followed as a best practice.

If you are submitting your new contract for review prior to permissionless deployment being rolled out, the following has to be included in the code repository containing the smart contracts to be reviewed:

- Every publicly exposed feature of a contract and its resources should have unit tests that check both for success with correct input _and_ for failure with incorrect input.
  These tests should be capable of being run locally with the Flow emulator, with no or minimal extra resources or configuration, and with a single command.
- Each user story or workflow that uses the smart contracts should have an integration test that ensures that the series of steps required to complete it does so successfully with test data.

For manual testing prior to approval for deployment to mainnet the code must be deployed on testnet and used for two weeks. This is to test the code in conditions as close to those it will be used in on mainnet if and when it is deployed there.

## Writing Tests

There are official SDKs for Flow in both Go and JavaScript.

In both cases, the code will need to deploy the contracts, configure accounts to interact with them and send transactions to them. It will then have to wait for the transactions to be sealed and check the results by catching exceptions, checking for events, and querying state using scripts.

### Go Tests

Tests in Go can be written using [flow-go-sdk](https://github.com/onflow/flow-go-sdk) and the go test command.

You can find examples of Go tests in the following projects: [flow-core-contracts](https://github.com/onflow/flow-core-contracts/tree/master/lib/go/test), [flow-nft](https://github.com/onflow/flow-nft/tree/master/lib/go/test), [flow-ft](https://github.com/onflow/flow-ft/tree/master/lib/go/test).

> **Note**: These tests are tied to the emulator but can be refactored to run on testnet

### JavaScript Tests

Tests in JavaScript can be written using [flow-js-testing](https://github.com/onflow/flow-js-testing).