import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Layout from "../components/Layout";
import Features from "../components/Features";

export const HomePageTemplate = ({
  content,
  image,
  title,
  heading,
  mainpitch,
  description,
  intro,
  version,
  model,
  team
}) => (
  <div className="ml5Grid__container--homePage">
    <section
      className="home__featuredImage"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <div className="home__overlay" />
      <Link to="">
        <h2 className="home__featuredTitle">{heading}</h2>
      </Link>
    </section>

    <section className="home__container home__gridContainer">
      <div className="home__gridItem--6out12">
        <h2 className="Button__wrapper">
          <Link className="Button" to="/start">
            Get started with ml5.js
          </Link>
        </h2>
        <h2 className="home__pitchTitle">{mainpitch.title}</h2>
        <p className="home__pitchDescription">{mainpitch.description}</p>
      </div>
    </section>

    <section className="home__container home__gridContainer">
      <div className="home__gridItem--10out12 home__blurbs">
        <Features gridItems={intro.blurbs} />
      </div>
    </section>

    <section className="home__update home__gridContainer">
      <div className="home__gridItem--6out12">
        <div
          className="home__updateContent"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </div>
    </section>

    <section className="home__container home__model">
      <h2>{model.heading}</h2>
      <Features gridItems={model.blurbs} />
    </section>

    <section className="home__team">
      <h2>{team.heading}</h2>
      <div className="GridContainer">
        <div className="home__teamWrapper">
          <div className="home__teamHeadshot">
            <PreviewCompatibleImage imageInfo={team} />
          </div>
          <p>{team.profile}</p>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const content = data.markdownRemark.html;

  return (
    <Layout>
      <HomePageTemplate
        content={content}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        version={frontmatter.version}
        model={frontmatter.model}
        team={frontmatter.team}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading

        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        version {
          heading
          recent
          snippet
        }

        model {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        team {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          profile
        }
      }
    }
  }
`;
