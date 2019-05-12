import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import ModelList from "../components/ModelList";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug} className="ModelList__item">
        <div className="ModelList__title">
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </div>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const tagHeader = `${tag}`;

    return (
      <Layout>
        <section className="ml5Grid__wrapper">
          <Helmet title={`${tag} | ${title}`} />
          <div className="ml5Grid__container">
            <section className="ml5Grid__sidebar">
              <div className="Sidebar__container">
                <div>
                  <span className="ml5Grid__sidebarTitle">Reference</span>
                </div>
                <ModelList />
              </div>
            </section>

            <article className="ml5Grid__content">
              <div>
                <h2>{tagHeader}</h2>
                <ul className="taglist">
                  {postLinks}
                  <li className="ModelList__item">
                    <div>
                      <Link to="/reference/" className="ml5Grid__sidebarTitle">
                        Back to API Reference
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
