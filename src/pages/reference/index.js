import React from "react";

import Layout from "../../components/Layout";
import ModelList from "../../components/ModelList";

export default class ReferenceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="ml5Grid__wrapper">
          <div className="ml5Grid__container">
            <section className="ml5Grid__sidebar">
              <div className="Sidebar__container">
                <div>
                  <span className="ml5Grid__sidebarTitle">Models</span>
                </div>
                <ModelList />
              </div>
            </section>
            <article className="ml5Grid__content">
              <h1>Reference</h1>
              <div className="reference__wrapper">
                <ModelList />
              </div>
            </article>
          </div>
        </section>
      </Layout>
    );
  }
}

export const referencePageQuery = graphql`
  query referencePageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "model-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
          }
        }
      }
    }
  }
`;
