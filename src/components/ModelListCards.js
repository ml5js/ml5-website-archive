import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class ModelListCards extends React.Component {
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
              <div style={{width:"200px", 
            height:"200px", 
            padding:"1rem"}}>
                <img alt={model.frontmatter.description || "tbd"} style={{border:"2px solid black", width:"100%", height:"100%"}} 
                src={model.frontmatter.exampleimgsrc || "../img/logo-purple-circle.png"}/>
            </div>
            </li>
          ))}
      </ul>
    );
  }
}

ModelListCards.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query ModelListCardsQuery {
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
                exampleimgsrc
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ModelListCards data={data} count={count} />}
  />
);
