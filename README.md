# ml5-website-archive

[![All Contributors](https://img.shields.io/badge/all_contributors-16-orange.svg?style=flat-square)](#contributors)

[![Netlify Status](https://api.netlify.com/api/v1/badges/924e3469-3080-465f-a02b-26600b91c69b/deploy-status)](https://app.netlify.com/sites/ml5-website-2/deploys)

This repo contains the legacy version of ml5.js website that is built with [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org). This website hosted at [archive.ml5js.org](https://archive.ml5js.org).

 > [!WARNING]
 > This repository is now archived. The latest ml5.js website is hosted at [ml5js.org](https://ml5js.org) and its source code is available at [ml5-website-v02-gatsby](https://github.com/ml5js/ml5-website-v02-gatsby).


## Updating Instructions

### markdown source files

- [docs/index.md](https://github.com/ml5js/ml5-website-2/blob/master/docs/index.md): home page content
- [docs/community/](https://github.com/ml5js/ml5-website-2/tree/master/docs/community): Experiments, currently feature image doesn't support gif and svg files
- [docs/about.md](https://github.com/ml5js/ml5-website-2/blob/master/docs/about.md): about page content

### markdown templates

- [community post markdown template](https://github.com/ml5js/ml5-website-2/blob/master/markdown_templates/community-markdown-template.md)

### React pages

- [src/pages](https://github.com/ml5js/ml5-website-2/tree/master/src/pages): pages(routes) that serve as a collective page of a group of child pages, ex. reference collective page, community collective page, tag collective page
- [src/templates](https://github.com/ml5js/ml5-website-2/tree/master/src/templates): serve as the layout template for single markdown files

### Assets

- [docs/assets](https://github.com/ml5js/ml5-website-2/tree/master/docs/assets): markdown file assets, use relative path `../assets/` or `./assets/` to embed in markdown files.
- [src/img](https://github.com/ml5js/ml5-website-2/tree/master/src/img): site assets, logos, social platform icons
- [static/img](https://github.com/ml5js/ml5-website-2/tree/master/static/assets/img)(**depracated**): images that used in templates

## Prerequisites

- Node
  - version: `v10.19.0`
  - Recommend using [nvm](https://github.com/nvm-sh/nvm)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```console
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ nvm install // if you have nvm installed
$ npm i
$ npm run start
```

To test the CMS locally, you'll need run a production build of the site:

```console
$ npm run build
$ npm run serve
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Running Netlify CMS

```
$ netlify dev # or ntl dev
```
