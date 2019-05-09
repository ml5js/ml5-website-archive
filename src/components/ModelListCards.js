import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { tag } from "postcss-selector-parser";


function displaySectionByTag(models, tag){
    if(!models) return ""

    const selected = models.filter( ({ node: model }) => model.frontmatter.tags.includes(tag));

    return (
        <section id={`section-${tag}`}>
            <h2 style={{fontSize:"28px"}}>{tag}</h2>
            <ul className="ModelList">
            {selected.map(({ node: model }) => (
                <li style={{padding:"0.5rem"}} className="ModelList__item" key={model.id}>
                <div style={{border:"1px solid #D8D8D8", padding:"0.5rem",  borderRadius:"2px"}}>
                <div className="ModelList__title">
                    <Link
                    activeClassName="ModelList__link--active"
                    to={model.fields.slug}
                    >
                    {model.frontmatter.title}
                    </Link>
                </div>
                <div style={{width:"100%", 
                padding:"none"}}>
                    <img alt={model.frontmatter.description || "tbd"} style={{border:"0px solid black", width:"100%", height:"100%"}} 
                    src={model.frontmatter.exampleimgsrc || "../img/logo-purple-circle.png"}/>
                </div>
                </div>
                </li>
            ))}
        </ul>
        </section>
    )

}

const aTagRefStyle = {
    textDecoration:'underline',
    padding:"1rem 1rem 1rem 0rem"
}

class ModelListCards extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: models } = data.allMarkdownRemark;

    return (
        <div>
        <p>Welcome to the ml5.js reference page! Here you can browse the various categories of functionality that ml5.js provides. We have categorized the functionality of ml5.js based on the types of input and output that you might be interested to work with.</p>
        <h3>We currently have 4 categories:
        <ul style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", width: "100%"}}>
            <a style={aTagRefStyle} href="#section-image">Image</a>
            <a style={aTagRefStyle} href="#section-sound">Sound</a>
            <a style={aTagRefStyle} href="#section-text">Text</a> 
            <a style={aTagRefStyle} href="#section-helpers">Helpers</a>
        </ul>
        </h3>
        { displaySectionByTag(models, 'image')}
        { displaySectionByTag(models, 'sound')}
        { displaySectionByTag(models, 'text')}
        { displaySectionByTag(models, 'helpers')}
        </div>
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
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ModelListCards data={data} count={count} />}
  />
);
