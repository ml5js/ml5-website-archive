import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="ml5Grid__wrapper">
          <div className="ml5Grid__container ml5Grid__container--communityPage">
            <section className="ml5Grid__sidebar">
              <div className="Sidebar__container" />
            </section>
            <div className="ml5Grid__content">
              <h1>Community</h1>
              <p>The ml5.js community page is dedicated to highlighting artists, technologists, makers, activists, thinkers, tinkerers, researchers, scientists, designers, students, and anyone/everyone who are working in and around machine learning in thoughtful ways. 
                Many of these posts not only showcase what is possible with ml5.js but also what can be done when applying machine learning methodologies and technologies more broadly. Special emphasis is given to projects that highlight ethical and critical engagement with technology and/or are simply delightful.
              </p>
              <br/>
              <p>If you are interested to share your work, highlight an interesting article/video, or get in touch, we'd love to hear from you. Get in touch via Google Forms here: <a href="https://forms.gle/18aaSc6J2QbDmLdz6" target="_blank" rel="noopener noreferrer">ml5js.org Community Submission Form</a>.</p>
              <br/><br/>
              <BlogRoll />
              <h3>Have something to share? Get in touch via Google Forms here: <br/>↳<a rel="noopener noreferrer" href="https://forms.gle/18aaSc6J2QbDmLdz6" target="_blank">ml5js.org Community Submission Form</a>.</h3>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
