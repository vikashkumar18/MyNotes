# Notes
this is my small attempt to refresh and document all my data structure learnings.

### Guide
go through node guide to understand event loop https://nodejs.org/en/docs/guides/
### Setup
1. [editorconfig](http://editorconfig.org/) is used to have same style follwed by all developer.
2. install eslint to follow JS best practices
  - `npm install eslint --save-dev` this will install eslint for your project locally
  - enter command prompt with present working directory set to root of this project
  - `> pwd` should give `/fork/MyNotes`
  - `/fork/MyNotes> ./node_modules/eslint/bin/eslint.js --init`
  - follow the prompts
3. [GitHub Pages](https://help.github.com/categories/github-pages-basics/) is used to generate documents
  -  `./node_modules/.bin/jsdoc </path/to/*.js> -d docs` creates static html document in `docs` folder for the specified file.

Creating HTML docs is manual process right now, but will be addressed and made automatic npm task in future [#issue](https://github.com/vikashkumar18/MyNotes/issues/1).
