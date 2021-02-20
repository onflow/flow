---
title: Testnet Testing Guidelines
sidebar_title: 3. Testnet Testing
---

Early adopters wishing to deploy applications to Flow Mainnet are required to have their applications tested first on Testnet before they are able to submit their smart contracts to the Flow team for review.

We're doing this in the early stages of development of the Flow network for a number of reasons. Primarily, it's to help developers understand how to create stable and robust applications using the Flow development stack.

Your application will be part of the first impression users will have about what it's like to use apps built on Flow, and we want to help you make sure that you're delivering the best experience possible to your users.

Before submitting your application for review, we're asking that you make sure to read these guidelines and complete the requirements they describe.

## Testing Your Application

### Automated Testing of Contract Code

All contracts submitted for review should include test coverage for _all contract functions_. The Flow team will review your tests to make sure you've accounted for success and failure cases appropriately.

Submitted projects should have instructions describing how to run tests locally. Tests should also be runnable in automated environments (CI).

There are currently JavaScript and Go testing frameworks you can use to create tests for your smart contract code:

- [https://github.com/onflow/flow-js-testing](https://github.com/onflow/flow-js-testing)
- [https://github.com/onflow/cadence-testing-go](https://github.com/onflow/cadence-testing-go) (Coming soon)

### Stress Testing Live Applications Before Mainnet

After your app has been approved and deployed, a period of observation will begin. During this time the Flow team will record how your application handles traffic, to ensure there aren't any problems that could affect the wider network or your application's user-experience.

During the observation period, we'd like to see your application handle non-trivial amounts of traffic so we can be sure there are no issues. If we don't see enough traffic, we may delay Mainnet approval.

Including your own automated load testing or load-testing metrics could help your application get approval for Mainnet faster. The Flow team has some knowledge of problematic patterns that could cause problems, so please reach out before implementing your idea if you're unsure!
