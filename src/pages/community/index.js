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
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
