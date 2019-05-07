# New ml5 website

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

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

This repo contains ml5.js website 2.0 that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Preview Link](https://ml5-documentation-site-preview.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Documentation

**Site files**

markdown source files

- [docs/reference/](): API documentation
- [docs/tutorial/](): Getting start docs
- [docs/community/](): Experiments, currently feature image doesn't support gif and svg files
- [docs/about.md](): about page content
- [src/pages/index.md](): home page content

React pages

- [src/pages](): routes that are a portal page for reference, community
- [src/templates](): templates for different pages
- [src/components](): react components

Assets

- [docs/assets](): post assets
- [src/img](): site assets, logos, social platform icons
- [static/img](): images that used in page content

**Style files**

- [scss/abstract]()
- [scss/base]()
- [scss/components]()
- [scss/layout]()
- [scss/pages]()
- [scss/vendors]()
- [main.scss]()

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

### Machine Learning Model Template

- [model page markdown template]()
- [tutorial page markdown template]()
- [community post markdown template]()
