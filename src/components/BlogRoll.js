import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    

    return (
      <div className="GridContainer GridContainer--vertical">
        {posts &&
          posts.map(({ node: post }) => {
            return(
            <div className="Post" key={post.id}>
              <div
                className={`Post__wrapper ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                {post.frontmatter.featuredimage ? (
                  <div className="Post__thumbnail featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`
                      }}
                    />
                  </div>
                ) : null}
                <header className="Post__meta">
                  <h2>
                    {post.frontmatter.externalLink ? (
                      <a
                        className="Post__title"
                        href={post.frontmatter.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {post.frontmatter.title}
                      </a>
                    ) : (
                      <Link className="Post__title" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    )}
                  </h2>
                  <h3 className="Post__author">By {post.frontmatter.author}</h3>
                  <p>
                    {post.frontmatter.description}
                    {/* {post.excerpt} */}
                    <br />
                    <br />
                    {post.frontmatter.externalLink ? (
                      <a
                        className="Post__link"
                        href={post.frontmatter.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        
                        <span role="img" aria-label="arrow">
                          {" "}
                          →
                        </span>
                        {" "} visit
                      </a>
                    ) : (
                      <Link className="Post__link" to={post.fields.slug}>
                        Keep Reading
                        <span role="img" aria-label="reading">
                          {" "}
                          👓
                        </span>
                      </Link>
                    )}
                  </p>
                </header>
              </div>
            </div>
            )
          }
          )}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "community-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                author
                description
                externalLink
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1440, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
