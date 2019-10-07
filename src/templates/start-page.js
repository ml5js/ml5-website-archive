import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
// import StartList from "../components/StartList";
import "react-tabs/style/react-tabs.css";

export const StartPageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  draft,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <article className="ml5Grid__content">
      {helmet || ""}
      <div className="">
        <h1 className="">
          {title}
          {tags && tags.length ? (
            <span className="TagList__wrapper">
              <ul className="TagList">
                {tags.map(tag => (
                  <li key={tag + `tag`} className={`TagList__` + tag}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </span>
          ) : null}
        </h1>
        <p>{description}</p>
        <PostContent content={content} />
      </div>
    </article>
  );
};

StartPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  draft: PropTypes.bool
};

const StartPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <section className="ml5Grid__wrapper">
        <div className="ml5Grid__container">
          <section className="ml5Grid__sidebar">
            <div className="Sidebar__container">
              <div>
                <span className="ml5Grid__sidebarTitle">Getting Started</span>
              </div>
            </div>
            {/* <StartList /> */}
          </section>
          <StartPageTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
              <Helmet titleTemplate="%s | Tutorial">
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
        </div>
      </section>
    </Layout>
  );
};

StartPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default StartPage;

export const pageQuery = graphql`
  query StartByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        draft
      }
    }
  }
`;
