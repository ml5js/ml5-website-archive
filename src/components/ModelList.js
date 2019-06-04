import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";


function displaySectionByTag(models, tag){
  if(!models) return ""

  const selected = models.filter( ({ node: model }) => model.frontmatter.tags.includes(tag));
  console.log(selected)
  return (
      <section id={`section-${tag}`}>
          <h2 style={{"paddingLeft":"0.75rem"}}>{tag}</h2>
          <ul className="ModelList">
          
          {selected.map(({ node: model }) => (
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
      </section>
  )

}

class ModelList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: models } = data.allMarkdownRemark;

    const modelsFiltered = models.filter( ({ node: model }) => {
      return !model.frontmatter.tags.includes('reference')
    })

    

    return (
      <ul className="ModelList" style={{"paddingBottom":"6rem"}}>
        {/* {modelsFiltered &&
          modelsFiltered.map(({ node: model }) => (
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
          ))} */}
          { displaySectionByTag(modelsFiltered, 'image')}
          { displaySectionByTag(modelsFiltered, 'sound')}
          { displaySectionByTag(modelsFiltered, 'text')}
          { displaySectionByTag(modelsFiltered, 'helpers')}
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
          sort: { order: ASC, fields: [frontmatter___order] }
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
                tags
                order
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ModelList data={data} count={count} />}
  />
);
