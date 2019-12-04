var proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "ml5js·Friendly Machine Learning For The Web",
    description:
      "ml5.js aims to make machine learning approachable for a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js with no other external dependencies."
  },
  plugins: [
    `gatsby-transformer-documentationjs`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs`
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/docs/assets`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    // Class prefix for <pre> tags containing syntax highlighting;
                    // defaults to 'language-' (eg <pre class="language-js">).
                    // If your site loads Prism into the browser at runtime,
                    // (eg for use with libraries like react-live),
                    // you may use this to prevent Prism from re-processing syntax.
                    // This is an uncommon use-case though;
                    // If you're unsure, it's best to use the default value.
                    classPrefix: "language-",
                    // This is used to allow setting a language for inline code
                    // (i.e. single backticks) by creating a separator.
                    // This separator is a string and will do no white-space
                    // stripping.
                    // A suggested value for English speakers is the non-ascii
                    // character '›'.
                    inlineCodeMarker: null,
                    // This lets you set up language aliases.  For example,
                    // setting this to '{ sh: "bash" }' will let you use
                    // the language "sh" which will highlight using the
                    // bash highlighter.
                    aliases: {},
                    // This toggles the display of line numbers globally alongside the code.
                    // To use it, add the following line in src/layouts/index.js
                    // right after importing the prism color scheme:
                    //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                    // Defaults to false.
                    // If you wish to only show line numbers on certain code blocks,
                    // leave false and use the {numberLines: true} syntax below
                    showLineNumbers: false,
                    // If setting this to true, the parser won't handle and highlight inline
                    // code used in markdown i.e. single backtick code like `this`.
                    noInlineHighlight: false
                  }
                }
              ]
            }
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120901334-1",
        anonymize: true,
        respectDNT: true
      },
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  }
};
