# Using non-transpiled Gatsby plugins in a monorepo

This repo demonstrates how to use `gatsby-plugin-chakra-ui` in a monorepo using Yarn workspaces without transpiling it, as originally discussed in https://github.com/gatsbyjs/gatsby/issues/19042. This project has two workspaces: 

- `gatsby-theme-example`: A theme that implements [a non-transpiled version of `gatsby-plugin-chakra-ui`](https://github.com/trevorblades/gatsby-plugin-chakra-ui)
- `www`: A Gatsby site that implements the theme above

To try it out, clone this repo, install dependencies with `yarn` and start the development environment in the `www` directory.

```bash
yarn
yarn workspace www start # or yarn start
```
