import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section className="ml5Grid__wrapper">
      <div className="ml5Grid__container">
        <section className="ml5Grid__sidebar">
          <div className="Sidebar__container" />
        </section>

        <div className="ml5Grid__content">
          <h1>Sorry, we lost a page here, but we found a Shiffman video!</h1>
          <div class="iframe__container iframe__container--video">
            <iframe
              title="404"
              src="https://www.youtube.com/embed/jmznx0Q1fP0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
