import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Layout from "../components/Layout";
import Features from "../components/Features";
import Features2 from "../components/Features2";

const BLMSolidarityModal = () => {
  const [display, setDisplay] = useState({ display: true });

  const handleClose = (evt) => {
    setDisplay({ display: false });
  };

  return (
    <div
      class="modal-container"
      style={{
        display: display.display === true ? "flex" : "none",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 9999999,
        backgroundColor: "rgba(0,0,0,0.85)",
      }}
    >
      <div class="modal" style={{
          maxWidth:"800px",
          padding:"1rem",
          borderRadius: "4px",
          backgroundColor: "black",
          color:"white",
          lineHeight: 1.4,
          margin:"0 auto",
          border:"2px solid yellow",
        }}>
        <header class="modal-header">
          <h1 style={{maxWidth:"600px", color:"#A15FFB"}}>
            The ml5.js community stands in solidarity with Black Lives Matter.
          </h1>
        </header>
        <main class="modal-main" style={{maxHeight:"200px",
          overflowY:"scroll", marginBottom:"1rem"}}>
          <p style={{marginBottom:"1rem"}}>
            Breonna Taylor, George Floyd, Ahmaud Arbery, Tony McDade, Regis Korchinski-Paquet, Nina Pop, 
            Monika Diamond, Yassin Mohamed, Finan H. Berhe, Sean Reed, Steven Demarco 
            Taylor, Sandra Bland, David McAtee, Ariane McCree, Terrance 
            Franklin, Miles Hall, Darius Tarver, William Green, Samuel David
            Mallard, Kwame Jones, De’von Bailey, Christopher Whitfield, Anthony
            Hill, De’Von Bailey, Eric Logan, Jamarion Robinson, Gregory Hill Jr,
            JaQuavion Slaton, Ryan Twyman, Brandon Webber, Jimmy Atchison,
            Willie McCoy, Emantic Fitzgerald Bradford J, D’ettrick Griffin,
            Jemel Roberson, DeAndre Ballard, Botham Shem Jean, Robert Lawrence
            White, Anthony Lamar Smith, Ramarley Graham, Manuel Loggins Jr,
            Trayvon Martin, Wendell Allen, Kendrec McDade, Larry Jackson Jr,
            Jonathan Ferrell, Jordan Baker, Victor White III, Dontre Hamilton,
            Eric Garner, John Crawford III, Michael Brown, Ezell Ford, Dante
            Parker, Kajieme Powell, Laquan McDonald, Akai Gurley, Tamir Rice,
            Rumain Brisbon, Jerame Reid, Charly Keunang, Tony Robinson, Walter
            Scott, Freddie Gray, Brendon Glenn, Samuel DuBose, Christian Taylor,
            Jamar Clark, Mario Woods, Quintonio LeGrier, Gregory Gunn, Akiel
            Denkins, Alton Sterling, Philando Castile, Terrence Sterling,
            Terence Crutcher, Keith Lamont Scott, Alfred Olango, Jordan Edwards,
            Stephon Clark, Danny Ray Thomas, DeJuan Guillory, Patrick Harmon,
            Jonathan Hart, Maurice Granton, Julius Johnson, Jamee Johnson,
            Michael Dean, and too many more to list here...
          </p>
        </main>
        <p style={{marginBottom:"1rem"}}>
            Please consider donating to <a href="https://bailfunds.github.io/">your local bail fund</a>,&nbsp;
            <a href="https://codecooperative.org/">Code Cooperative</a>,&nbsp;
            <a href="https://emergencyreleasefund.com/">Emergency Release Fund</a>,&nbsp;
            <a href="https://spny.wedid.it/campaigns/7636/contribute">Survived & Punished Mutual Aid Fund</a>,&nbsp;
            <a href="https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor">Justice for Breonna Taylor</a>,&nbsp;
            <a href="https://www.gofundme.com/f/georgefloyd">George Floyd Memorial Fund</a>,&nbsp;
            and
            <a href="https://m4bl.org/">Movement for Black Lives</a>. 
        </p>
        <button aria-label="Close" style={{
          border:"1px solid yellow",
          boxShadow:"2px 2px 0px #A15FFB",
          fontSize:"1.2rem",
          padding:"0.5rem 1rem",
          cursor:"pointer"
        }} onClick={handleClose}><span aria-label="solidarity fist" role="img">✊🏿</span>No Justice, No Peace</button>
      </div>
    </div>
  );
};

export const HomePageTemplate = ({
  content,
  heading,
  subheading,
  mainpitch,
  acknowledgements,
  intro,
  model,
  team,
}) => (
  <div className="ml5Grid__container--homePage">
    <BLMSolidarityModal/>
    <section
      className="circles-1"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="home__overlay" />
      <Link style={{ zIndex: "9" }} to="">
        {/* heading */}
        <h2
          style={{
            width: "100%",
            maxWidth: "680px",
            fontSize: "4rem",
            color: "#a15ffb",
            backgroundColor: "white",
            textAlign: "center",
          }}
          className="home__heading"
        >
          {heading}
        </h2>
        {/* subheading */}
        <p
          style={{
            width: "100%",
            maxWidth: "680px",
            fontSize: "1.5rem",
            color: "#a15ffb",
            backgroundColor: "white",
            textAlign: "center",
          }}
          className="home__subheading"
        >
          {subheading}
        </p>
      </Link>
    </section>

    <section className="home__container home__gridContainer">
      <div className="home__gridItem--6out12">
        <h2 className="Button__wrapper">
          <Link className="Button" to="/getting-started">
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
            __html: content,
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

    <section className="home__container home__acknowledgements">
      <h2>{acknowledgements.heading}</h2>
      <Features2 gridItems={acknowledgements.blurbs} />
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  acknowledgements: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const content = data.markdownRemark.html;

  return (
    <Layout>
      <HomePageTemplate
        content={content}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        acknowledgements={frontmatter.acknowledgements}
        intro={frontmatter.intro}
        model={frontmatter.model}
        team={frontmatter.team}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      html
      frontmatter {
        heading
        subheading

        mainpitch {
          title
          description
        }

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
        }

        acknowledgements {
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
