import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const CommunityPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="ml5Grid__wrapper">
      {helmet || ""}
      <div className="ml5Grid__container ml5Grid__container--communityPage">
        <section className="ml5Grid__sidebar">
          <div className="Sidebar__container" />
        </section>
        <div className="ml5Grid__content">
          <h1>{title}</h1>
          {/* {tags && tags.length ? (
            <div>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null} */}
          <h3>{description}</h3>
          <div ml5Grid__contentPost>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

CommunityPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const CommunityPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CommunityPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

CommunityPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default CommunityPost;

export const pageQuery = graphql`
  query CommunityPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
