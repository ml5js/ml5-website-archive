import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ModelList from "../components/ModelList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MarkdownContent from "../components/MarkdownContent";
import Highlight from "react-highlight.js";

export const ModelPageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  examples,
  tutorials,
  training,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <article className="ml5Grid__content">
      {helmet || ""}
      <div className="docs">
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
        <MarkdownContent content={description} />
        <Tabs>
          <TabList>
            <Tab>documentation</Tab>
            <Tab>examples</Tab>
            {tutorials ? <Tab>tutorial</Tab> : null}
            {training ? <Tab>training</Tab> : null}
          </TabList>

          <TabPanel>
            {/* <h2>Documentation</h2> */}
            <PostContent className="ml5Grid__postWrapper" content={content} />
          </TabPanel>

          <TabPanel>
            <h2>Examples</h2>
            {/* <MarkdownContent content={example} />
                <pre className="language-javascript">
                  <code
                    className="language-javascript"
                    dangerouslySetInnerHTML={{
                      __html: example
                    }}
                  />
                </pre> */}
            {examples
              ? examples.map(example => (
                  <div key="">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: example.demo
                      }}
                    />
                    <MarkdownContent content={example.demo} />
                    <Highlight language="javascript">{example.code}</Highlight>
                  </div>
                ))
              : null}
          </TabPanel>
          {tutorials ? (
            <TabPanel>
              <h2>Tutorial</h2>
            </TabPanel>
          ) : null}

          {training ? (
            <TabPanel>
              <h2>Training</h2>
            </TabPanel>
          ) : null}
        </Tabs>
      </div>
    </article>
  );
};

ModelPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const ModelPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <section className="ml5Grid__wrapper">
        <div className="ml5Grid__container">
          <section className="ml5Grid__sidebar">
            <div className="Sidebar__container">
              <div>
                <span className="ml5Grid__sidebarTitle">Reference</span>
              </div>
              <ModelList />
            </div>
          </section>
          <ModelPageTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
              <Helmet titleTemplate="%s | Models">
                <title>{`${post.frontmatter.title}`}</title>
                <meta
                  name="description"
                  content={`${post.frontmatter.description}`}
                />
                <link
                  rel="stylesheet"
                  href="https://highlightjs.org/static/demo/styles/solarized-light.css"
                />
              </Helmet>
            }
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
            examples={post.frontmatter.examples}
            tutorials={post.frontmatter.tutorials}
            training={post.frontmatter.training}
          />
        </div>
      </section>
    </Layout>
  );
};

ModelPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ModelPage;

export const pageQuery = graphql`
  query ModelByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        examples {
          demo
          code
        }
        tutorials
        training
      }
    }
  }
`;
