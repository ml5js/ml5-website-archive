import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class ModelList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: models } = data.allMarkdownRemark;

    return (
      <ul className="ModelList">
        {models &&
          models.map(({ node: model }) => (
            <li className="ModelList__item" key={model.id}>
              <div className="ModelList__title">
                <Link
                  activeClassName="ModelList__link--active"
                  to={model.fields.slug}
                >
                  {model.frontmatter.title}
                </Link>
              </div>
            </li>
          ))}
      </ul>
    );
  }
}

ModelList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query ModelListQuery {
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
    `}
    render={(data, count) => <ModelList data={data} count={count} />}
  />
);
