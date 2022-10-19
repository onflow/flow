# Contributing Content to the Developer Portal

In most cases you should be able to iterate and deploy changes to your documentation without needing to involved the engineering team that is maintaining the Developer Portal.

## How To Contribute

### Before You Start

Before you can contribute to the Developer Portal, you’ll need a GitHub Account, and you’ll need to be logged into GitHub.

If you don’t have a GitHub account [go here](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91) and sign-up. Once you have a GitHub account you can proceed with the following steps.

### Types of Contributors, Is This You?

How can I contribute if I am a:

- **Developer from the Open Source Community**
    - [I want to list a new developer-tool or SDK on the Developer Portal](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)
- **A Non-Technical, External Contributor**
    - ?
- **A developer member of Dapper Labs or Flow**
    - [I want to make updates to my project’s documentation](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)
    - [I want to integrate a new repository into the Developer Portal](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)
    - [I want to submit improvements to a page on the Developer Portal](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)
- **A non-developer member of the Flow or Dapper Labs teams**
    - [I want to submit improvements to the documentation on the Developer Portal](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)
    - [I want to contribute new content to the Developer Portal](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)

### Basic Contribution Workflow

The basic contribution workflow is the same for everyone. 

1) Create a PR into the `main` branch of the GitHub repository you’re working with. 

2) Wait for check runs to complete and correct any validation errors. 

3) Provide any redirects indicated in the check run, in your `flow-docs.json` file.

4) Preview your updated pages using the provided preview links to make sure they are rendering and displaying as you wish.

5) Merge your PR, and updates to your docs are immediately available on [https://developers.flow.com](https://developer.flow.com)!

Note: there is no “Staging” environment for your documentation. Previews are rendered by fetching content from a specified Git branch, using a URL query string, 

eg: `?preview=chasefleming%2Fdiscovery-docs-include`

However, only the staging instance of the Developer Portal is configured to process the preview query strings, which is why your previews appear on the “staging” domain `https://flow-docs-staging.fly.dev`. 

If you require help integrating your documentation updates, you can make a request in `#flow-documentation` Slack channel.

## Making Updates to Existing Content

Contributing to the Developer Portal is as easy as making a PR to a GitHub repository. To update existing content, look for the “Edit on Github” link in the right-hand side of each page, in the header. Here is what the header looks like. 

![editheader.png](Contributing%20Content%20to%20the%20Developer%20Portal%2035900becfeaa474598f5db2b3dd1eb91/editheader.png)

Clicking the “Edit in GitHub” link will take you directly to the source code of the document you are viewing.

## Contributing New Content

### Non-Technical Contributors

**Internal Team Members**
For members of the Dapper Labs team, that have access to Dapper Labs internal Slack, It’s not strictly necessary to have a GitHub account to contribute to the Developer Portal

**External Non-Technical Contributors**

?

**Working With Markdown**

For your documentation to be displayed on the Developer Portal, it must be authored in Markdown format. To learn more about how to use Markdown syntax for creating documents, please review the following resources:

- [https://www.markdowntutorial.com/](https://www.markdowntutorial.com/)
- [https://www.markdownguide.org/](https://www.markdownguide.org/)

**From Google Doc → Developer Portal (Markdown)**

Markdown is not the ideal format for authoring documentation that requires collaboration during the editorial process. If you are using Google Docs to create documentation, you can use this tool to automatically generate Markdown files, which can then be submitted to the Developer Portal engineering team, using this browser plugin:

- [https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607](https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607)

### Contributors Familiar with Github

If you are familiar with Github, please follow the rest of this guide, starting with the [Basic Contribution Workflow](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)

## Adding a New Developer Tool or SDK

Adding a new Tools or SDK requires some manual intervention from the Flow Developer Portal engineering team. In the future we hope this process can be self-serve. 

Documentation for SDKs and other tools belongs under the “tools” section in the information hierarchy of the Developer Portal. You can review the information hierarchy of the Developer Portal [here](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91): 

### **Adding Your SDK Documentation**

If you are familiar with Github, please follow the rest of this guide, starting with the [Basic Contribution Workflow](https://www.notion.so/Contributing-Content-to-the-Developer-Portal-35900becfeaa474598f5db2b3dd1eb91)

### **Adding Callouts on Feature (Landing) Pages**

The Developer Portal has special sections used to “call out” specific tools or other documentation. For example, the `/tools` landing page contains the following categories.

To make your content easy for users to find, you’ll place your Callout under one of the following categories, seen here in the top-level page navigation: 

![callouts.png](Contributing%20Content%20to%20the%20Developer%20Portal%2035900becfeaa474598f5db2b3dd1eb91/callouts.png)

 (See [this reference](https://www.notion.so/Onsite-22-Retro-03b402e1c6cb40d6b493968bd1019130) for a list of the specific landing pages and sections available on the Developer Portal) 

Here is an example of a Callout section featuring available SDKs, on the `/tools` landing page:

![callout specific.png](Contributing%20Content%20to%20the%20Developer%20Portal%2035900becfeaa474598f5db2b3dd1eb91/callout_specific.png)

Data for these sections is currently part of the Developer Portal source code. 

## Adding a New Tutorial, Guide or Other Learning Content

## Integrating a New Repository

### **Integrating Documentation From Your Own Repository**

For security and content auditing reasons, it is currently not possible to integrate 3rd party Repositories into the Developer Portal. See the following sections for information about integrating your Documentation.

### Integrating Documentation From Existing Flow Repositories

## Troubleshooting

- Link checking hints don’t make sense
-