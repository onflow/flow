# Flow Documentation

https://docs.onflow.org

## Local development

- `npm install` in this directory
- Create a [GitHub personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) (used to fetch GitHub content).
- Use the `public_repo` permission for the token
- `GITHUB_ACCESS_TOKEN=<your-token> npm start` in this directory
- Open a browser to the link provided in the console.

## Adding sections

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


## Search

Search is provided using [DocSearch](https://docsearch.algolia.com/) by Algolia.

The configuration file can be found here:
https://github.com/algolia/docsearch-configs/blob/master/configs/onflow.json

This application accesses the DocSearch API using the API key specified in the `ALGOLIA_API_KEY` 
environment variable.
