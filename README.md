# New ml5 website
[![All Contributors](https://img.shields.io/badge/all_contributors-16-orange.svg?style=flat-square)](#contributors)

## Description

This is the experimental repo for a ml5 website redesign! ml5.js is a library for beginners and creative coders. We want to create a website that is usable, embeds concepts around critical ML research, and can be easily adapted as the project grows.

See below for our roadmap and how to get involved in the project.

## Road Map

Here is what we are currently working on:

- **Creating a centralized reference page**

  We want to create one documentation page that lists all of the objects in the library and their methods (see [p5.js](https://p5js.org/reference/) for reference). When users click on a method, it should link to example pages with contain more of an explanation, code with details, and demo for how to use.

- **Fleshing Out Tutorials**

  The tutorials page will contain step-by-step information for how to create projects using ml5.js. It will include videos and more in-depth text, and will be an opportunity to pull together projects that use multiple objects, as well as a chance to fold in topics related to ethics and more critical situatings of ml technologies.

  We also want to find a way of tagging tutorials with their level of difficulty/

- **Glossary**

  We want to revisit the glossary, and make sure that we only define terms that people coding with ml5.js would come across while using the examples and references on the site. With this in mind, we are planning on building the glossary after we've worked out the reference and tutorials pages.

  We also plan to have a tooltip glossary function, so that when people mouseover over a word that they don't know, the definition (maybe pulling from the glossary page), the definition will show up on hover.

# ml5.js website 2.0

[![Netlify Status](https://api.netlify.com/api/v1/badges/924e3469-3080-465f-a02b-26600b91c69b/deploy-status)](https://app.netlify.com/sites/ml5-website-2/deploys)

This repo contains ml5.js website 2.0 that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Preview Link](https://ml5-website-2.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Updating Instructions

### markdown source files

- [docs/index.md](https://github.com/ml5js/ml5-website-2/blob/master/docs/index.md): home page content
- [docs/getting-started/](https://github.com/ml5js/ml5-website-2/tree/master/docs/getting-started): Getting start docs, sorted by file names, except index.md
- [docs/reference/](https://github.com/ml5js/ml5-website-2/tree/master/docs/reference): API documentation, no sorting
- [docs/community/](https://github.com/ml5js/ml5-website-2/tree/master/docs/community): Experiments, currently feature image doesn't support gif and svg files
- [docs/about.md](https://github.com/ml5js/ml5-website-2/blob/master/docs/about.md): about page content

### markdown templates

- [getting-start markdown template](<https://github.com/ml5js/ml5-website-2/blob/master/markdown_templates/model(reference)-markdown-template.md>)
- [Model(Reference) markdown template](https://github.com/ml5js/ml5-website-2/blob/master/markdown_templates/getting-started-template.md)
- [community post markdown template](https://github.com/ml5js/ml5-website-2/blob/master/markdown_templates/community-markdown-template.md)

### React pages

- [src/pages](https://github.com/ml5js/ml5-website-2/tree/master/src/pages): pages(routes) that serve as a collective page of a group of child pages, ex. reference collective page, community collective page, tag collective page
- [src/templates](https://github.com/ml5js/ml5-website-2/tree/master/src/templates): serve as the layout template for single markdown files

### Assets

- [docs/assets](https://github.com/ml5js/ml5-website-2/tree/master/docs/assets): markdown file assets, use relative path `../assets/` or `./assets/` to embed in markdown files.
- [src/img](https://github.com/ml5js/ml5-website-2/tree/master/src/img): site assets, logos, social platform icons
- [static/img](https://github.com/ml5js/ml5-website-2/tree/master/static/assets/img)(**depracated**): images that used in templates

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run start
```

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ npm run serve
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Running Netlify CMS

```
$ netlify dev # or ntl dev
```

## Contributors

* See: [ml5 contributors](https://github.com/ml5js/ml5-library#contributors)