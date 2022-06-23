# Cadence Style Guide

| Status        | (Proposed)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author** | Álvaro Lillo Igualada (alvaro.lillo@dapperlabs.com) |
| **Sponsor**   | Josh Hannan (josh.hannan@dapperlabs.com)             |
| **Updated**   | 2022-06-23                                           | 

## Objective

To provide developers with better guidelines for how to write clean cadence code.

## Motivation

As the Cadence developer base extends, we need to unificate the coding style to make all Cadence code easy to read and save developers time writing it.


## User Benefit

Having unified rules when writting Cadence code will help Cadence learners understanding code and all kind of Cadence based projects not wasting time deciding how to present their code.

## Design Proposal

There are several points we need to address for defining the Cadence Style Guide:

1. [Line length]
1. [Comments]
1. [Identation]
1. [Whitespace between code lines]
1. [Declaring variables and constants
1. [Bracket spaces]
1. [Panic messages]
1. [Naming and capitalization]


### Drawbacks

Having a defined set of style rules when writting Cadende code should not have any comebacks, as long as we agree on a sufficient wide set of rules and they are flexible enought to cover most cases.


### Engineering Impact

When the style guide is defined, we should update all existing Cadence code to fullfil the agreed patterns.

### Best Practices

The resulting document should become a part of the Flow Team best practices.

### Tutorials and Examples

The style guide will include code snippets showing how each point of the guide will look in real code.

### User Impact

It will not be compulsory, but highly recomended for Cadence developers to update their existing projects to satisfy the acorded guidelines. 

## Related Issues

Guidelines on how to write tests for Cadence code should be addressed on a different document in the future.

## Prior Art

Almost any programming language have defined style guides, we will be paying attention to some of then in order to elaborate our document, such as: 
* https://www.swift.org/documentation/api-design-guidelines/
* https://kotlinlang.org/docs/coding-conventions.html
* https://doc.rust-lang.org/1.0.0/style/

## Questions and Discussion Topics

Are there any points we need to cover in adition to the ones detailed in the design proposal?
