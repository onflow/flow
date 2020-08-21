# Flow Improvement Proposals (FLIPs)

The purpose of a FLIP is to engage the Flow community in development by 
leveraging the collective ideas, insights, and experience of contributors and 
experts while also communicating design changes broadly.

## Who is involved?

Everyone is welcome to propose and provide feedback on a FLIP.

A **FLIP author** writes a FLIP and is committed to championing it through the process.

A **FLIP sponsor** is any maintainer who sponsors the FLIP and will shepherd it
through the FLIP review process.

A **review committee** is a group of maintainers who are responsible for the 
strategic direction of components, subcomponents, and public APIs.
They have the responsibility to accept or reject the adoption of the FLIP via a community vote.

## What is a FLIP?

A FLIP is a document that describes a requirement and the proposed changes that
will solve it. Specifically, the FLIP will:

* be formatted according to the FLIP template
* be submitted as a pull request to the
  [onflow/flow/flips](https://github.com/onflow/flow/tree/master/flips) directory
* be subject to discussion and a review meeting prior to acceptance

## FLIP process

Before submitting a new FLIP, check for prior proposals in the `flips` directory, the [Flow community forum](https://forum.onflow.org/) and ask in the [Discord server](https://discord.gg/flow). The idea may have been proposed before or may be in active discussion. Consider contributing or giving feedback to existing proposals.

If a new proposal is appropriate, propose a rough sketch of the idea in the forum [Flow community forum](https://forum.onflow.org/) and engage in discussion with the community, project contributors, and maintainers, to get early feedback. Continue to expand the rough sketch into a draft using the FLIP template and further refine the proposal on the forums.

After writing the FLIP draft, gather feedback from project contributors and
maintainers before submitting it. 

Once the FLIP is ready for review:

1. _(Optional)_ Recruit a sponsor from the maintainers of the project for which your FLIP concerns.

   You are not required to recruit a sponsor; this step is entirely optional. 
   However, a sponsor acts as a valuable resource who can streamline the 
   review process and increase the likelihood of your FLIP being accepted.

   If you do recruit a sponsor, identify them in the FLIP before posting the PR in step 2.

2. Submit your FLIP as a pull request to this repository ([`onflow/flow`](https://github.com/onflow/flow)).

   Name your FLIP file using the [template](./yyyymmdd-flip-template.md) `YYYYMMDD-descriptive-name.md`, 
   where YYYYMMDD is the date of submission, and ‘descriptive-name’ relates to the
   title of your FLIP. For instance, if your FLIP is titled "Event Streaming API",
   you might use the filename `20180531-event-streaming-api.md`. If you have images
   or other auxiliary files, create a directory of the form `YYYYMMDD-descriptive-name`
   in which to store those files.

   Include the header table and the contents of the **Objective** section 
   in the comment of your pull request, using Markdown. For an example,
   please see [this example FLIP](https://github.com/onflow/flow/pull/5). 
   Include a mention of any of the GitHub handles of co-authors, reviewers 
   and sponsors.

   At the top of the PR identify how long the comment period will be. This
   should be a minimum of two weeks from posting the PR.

3. Send a message to the #developers channel on [Discord](https://discord.gg/flow) with 
   a brief description, and a link to the PR and a request for review.

4. The sponsor may request a review committee meeting after sufficient discussion has 
   taken place. This meeting will include the FLIP author, 
   core contributors and interested community members. If discussion is lively, 
   wait until it has settled before going to review. 
   The goal of the review meeting is to resolve minor issues; 
   consensus should be reached on major issues beforehand.

5. The meeting may approve the FLIP, reject it, or require changes before it
   can be considered again. FLIPs will be merged into this repository 
   ([`onflow/flow`](https://github.com/onflow)) with the outcome of the 
   review process (approval, rejection).

6. Implementations of a successful FLIP should reference it in their
   documentation, and work with the sponsor to successfully land the code.

While implementation code is not necessary to start the FLIP process, its
existence in full or part may help the design discussion.

If in any doubt about this process, feel free to ask on [Discord](https://discord.gg/flow), 
the [community forum](https://forum.onflow.org/), or file an issue in this repository 
([`onflow/flow`](https://github.com/onflow/flow/issues)).

## Proposal states

* **Proposed:** The FLIP has been proposed and is awaiting review.
* **Rejected:** The FLIP has been reviewed and been rejected.
* **Accepted:** The FLIP has been accepted and is either awaiting implementation or is actively being implemented.
* **Implemented (in VERSION):** The FLIP has been implemented.

## Community members

As the purpose of FLIPs is to ensure the community is well represented and served
by new changes to Flow, it is the responsibility of community members to
participate in reviewing FLIPs where they have an interest in the outcome.

Community members should:

* provide feedback as soon as possible to allow adequate time for consideration
* read FLIPs thoroughly before providing feedback
* be civil and constructive (see [Code of Conduct](../CODE_OF_CONDUCT.md))

## Review committees

The constitution of a review committee may change according to the particular
governance style and leadership of each project. For the core Flow Protocol, the
committee will exist of contributors to Flow who have expertise in the domain area concerned.

Review committees must:

* ensure that substantive items of public feedback have been accounted for
* add their meeting notes as comments to the PR
* provide reasons for their decisions

If a review committee requires changes before acceptance, it is the
responsibility of the sponsor to ensure these are made and seek subsequent
approval from the committee members.

## FLIP sponsors

A sponsor is a Flow maintainer responsible for ensuring the best possible
outcome of the FLIP process. In particular this includes:

* advocating for the proposed design
* guiding the FLIP to adhere to existing design and style conventions
* guiding the review committee to come to a productive consensus
* if the FLIP is approved and moves to implementation:
  * ensuring proposed implementation adheres to the design
  * liaison with appropriate parties to successfully land implementation

## Keeping the bar high

While we encourage and celebrate every contributor, the bar for FLIP acceptance
should be kept intentionally high. A design may be rejected or need significant
revision at any one of these stages:

* initial design conversations on the [Flow community forum](https://forum.onflow.org/) or [Discord server](https://discord.gg/flow)
* failure to recruit a sponsor
* critical objections during the feedback phase
* failure to achieve consensus during the design review
* concerns raised during implementation (e.g., inability to achieve backwards
  compatibility, concerns about maintenance appearing once a partial implementation
  is available)

If this process is functioning well, FLIPs are expected to fail in the earlier,
rather than later, stages.

## FLIP Template

Use the template [from GitHub](./yyyymmdd-flip-template.md), being sure to follow the naming conventions described above.

## FLIP Evaluation 

FLIPs should be evaluated for their impact on the three pillars of Flow. These are: 
* Community - consider how the FLIP will impact the ability for others to participate in the ongoing design and operation of the Flow network and the applications which depend on it. 
* Empowerment - consider how the FLIP will improve the economic opportunity for creators, contributors, and participants in the community and will net positive on the marginal benefits and costs to all the impacted individuals (who choose to register their preference/vote on an issue)
* Reliability - and finally, think about how the FLIP will impact the consistency, observerability, verifiability, and overall performance of the network for its users
