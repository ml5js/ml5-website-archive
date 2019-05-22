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
              <br/><br/>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
