# Flow Documentation

https://docs.onflow.org

## Local development
This repo powers the [Flow documentation site](https://docs.onflow.org). While many contents (i.e. FAQ, Dapp development introduction, [the glossary page](./content/intro/glossary.md)) in the Flow documentation sites are coming from this repo, some contents are pulled from other repos. For example, contents of Flow Client Library API reference page come from https://github.com/onflow/fcl-js/blob/master/docs/reference/api.md. When you want to update the Flow documentation site, you would need to follow different steps depending on which repo stores the contents.

### Basic setup
- `npm install` in this directory
- Create a [GitHub personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) (used to fetch GitHub content).
- Use the `public_repo` permission for the token
- `GITHUB_ACCESS_TOKEN=<your-token> npm start` in this directory
- Open a browser to the link provided in the console.

### Update contents within the Flow repo

If changes are coming from [https://github.com/onflow/flow](https://github.com/onflow/flow) repo directly, simply follow steps in [local development process](https://github.com/onflow/flow/tree/master/docs). Make sure you preview the changes via the local server as a simple way to test changes. Once the PR is merged in, deployment process is auto triggered, and the changes should be reflected in the production site within minutes. 

### Update contents outside the Flow repo

Suppose you would like to update conents from outside the Flow repo, say from the Flow Client Library (whose docs are hosted [here](https://github.com/onflow/fcl-js/tree/master/docs)), here are steps to follow:

- Checkout the [FCL code repo](https://github.com/onflow/fcl-js/), create a new branch say '`fcl_doc_update`' , and make content updates in this branch
- Search for "[https://github.com/onflow/fcl-js](https://github.com/onflow/fcl-js)" in  [docs/gatsby-config.js](https://github.com/onflow/flow/blob/master/docs/gatsby-config.js) within the '`sources`' constant
- Change the 'branch' attribute to be '`fcl_doc_update`' -- this tells the Gatsby to fetch contents from branch '`fcl_doc_update`' of *fcl-js repo* instead of from the master branch
- Restart the local Flow documentation site server by running `npm install` to install the dependencies, followed by `npm start` . Visually verify the changes.
- Submit a pull request in *fcl-js repo* for review.
- Once the pull request in fcl-js repo is approved, make a empty PR in the *Flow repo* by `git commit --allow-empty` as a way to trigger deployment. Please list all changes from dependent repos (in this example, fcl-js) to illustrate what changes will be deployed.

## Tips
### Adding sections

The documentation site is split into several sections,
each of which acts as its own microsite.

To add a section, add an entry to the `sections` definition in `gastby-config.js`:

```js
const sections = [
  // ...
  {
    patterns: ["cadence/**/*"],
    sidebar: {
      null: ["cadence/index", "cadence/glossary"],
      Tutorial: [
        "cadence/tutorial/index",
        "cadence/tutorial/resources",
        "cadence/tutorial/contracts",
        // ...
      ],
    },
  },
  // ...
];
```

The `patterns` array holds the file patterns that describe the content
to be included in the section. Any `.md` or `.mdx` files matched by these
patterns will be included in the section.

For example, the `"cadence/**/*"` pattern will match the following files:

```
- cadence/
  - index.md
  - glossary.md
  - tutorial/
    - index.md
    - resources.mdx
    - contracts.mdx
```

Each file will be available at the URL that corresponds to its relative filepath:

- `cadence/index.md => https://docs.onflow.org/cadence` (`index` is omitted from the URL)
- `cadence/tutorial/resources.mdx => https://docs.onflow.org/cadence/tutorial/resources`

The `sidebar` object describes the structure of the section sidebar.
Each page included in the section will display the same sidebar.

The sidebar navigation can optionally be split into categories,
each of which is a separate list in the `sidebar` object.

For each category, the object key is used as the title for that category.
The category with a `null` key will not display a title and can be used to
render sidebar content at the root level.

### Double check references
When changing the name of a section in a doc, please ensure its references are updated accordingly — we do want to offer the best learning experience to developers, and making sure navigation between our contents is one of the basic functionality we can offer.

### Avoid 404
If URL of a page is changed, any pages — within the Flow doc site or external websites — will see a 404 error when access the old URL. To reduce such unpleasant experience, please update [docs/vercel.json](https://github.com/onflow/flow/blob/master/docs/vercel.json) accordingly so that the visitor will be redirected to the new URL.

### "Contents" side bar
Currently only ## sections (\<h2\> headers) will appear to the navigation bar on the right. 


### Search

Search is provided using [DocSearch](https://docsearch.algolia.com/) by Algolia.

The configuration file can be found here:
https://github.com/algolia/docsearch-configs/blob/master/configs/onflow.json

This application accesses the DocSearch API using the API key specified in the `ALGOLIA_API_KEY`
environment variable.

### Linking to images

1. Upload the image to the `flow-resources` bucket
2. Link to it using a Markdown image tag, in the form `![description](URL)`.

  For example, if the image has the path `documentation-assets/token delivery assets/FlowPort Ledger connect screen.png` in the bucket,
  the Markdown tag should look like:

  `![](https://storage.googleapis.com/flow-resources/documentation-assets/token%20delivery%20assets/Ledger1.png)`

  **NOTE:** Ensure the domain is public (`googleapis.com`) instead of private (`cloud.google.com`)!
