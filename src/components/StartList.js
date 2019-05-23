import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
// import PreviewCompatibleImage from "./PreviewCompatibleImage";

class StartList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: models } = data.allMarkdownRemark;

    const filteredPages = models.filter(({ node: item })  => item.frontmatter.draft !== true )

    return (
      <ul className="">
        {models &&
          filteredPages.map(({ node: model }) => (
            <li className="ModelList__item" key={model.id}>
              <div className="ModelList__title">
                <Link
                  className=""
                  to={model.fields.slug}
                  activeClassName="ModelList__link--active"
                >
                  {model.frontmatter.sidebar_label
                    ? model.frontmatter.sidebar_label
                    : model.frontmatter.title}
                </Link>
              </div>
            </li>
          ))}
      </ul>
    );
  }
}

StartList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query StartListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "start-page" } } }
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
                sidebar_label
                draft
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <StartList data={data} count={count} />}
  />
);
