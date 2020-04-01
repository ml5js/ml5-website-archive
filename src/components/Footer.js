import React from "react";
import { Link } from "gatsby";

import logo from "../img/itp_logo.png";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="Footer ml5Grid__wrapper">
        <div className="ml5Grid__footerContainer">
          <div className="ml5Grid__itplogo">
            <img src={logo} alt="itp logo" />
          </div>

          <div className="ml5Grid__content ml5Grid__content--footerlinks">
            <div className="flexContainer__item">
              <section className="menu">
                <ul className="Footer_list">
                  <li>
                    <span
                      className="Footer__item Footer__item--title"
                      to="/start"
                    >
                      Docs
                    </span>
                  </li>
                  <li>
                    <a className="Footer__item" href="https://learn.ml5js.org/docs/#/">
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a className="Footer__item" href="https://learn.ml5js.org/docs/#/reference/index">
                      API Reference
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="flexContainer__item">
              <section>
                <ul className="Footer_list">
                  <li>
                    <span
                      className="Footer__item Footer__item--title"
                      to="/start"
                    >
                      Community
                    </span>
                  </li>
                  <li>
                    <Link className="Footer__item" to="/community">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a className="Footer__item" href="https://docs.google.com/forms/d/e/1FAIpQLSdPz0ICzTSVdLAteIKwJ-zFzX6dX5l3dOpjWGzm6LIZutKvlA/viewform" target="_blank" rel="noopener noreferrer">
                      Submit
                    </a>
                  </li>
                  <li>
                    <a
                      className="Footer__item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Log In
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="flexContainer__item">
              <section>
                <ul className="Footer_list">
                  <li>
                    <span
                      className="Footer__item--title Footer__item"
                      to="/start"
                    >
                      Contribute
                    </span>
                  </li>
                  <li>
                    <a
                      className="Footer__item"
                      href="https://github.com/ml5js/ml5-library"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="flexContainer__item">
              <section>
                <ul className="Footer_list">
                  <li>
                    <span className="Footer__item--title Footer__item">
                      <a href="https://www.netlify.com" 
                         target="_blank"
                         rel="noopener noreferrer">
                        <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
                      </a>
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* <div className="Footer__social">
            <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="vimeo" href="https://vimeo.com">
              <img
                src={vimeo}
                alt="Vimeo"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </div> */}
        </div>
      </footer>
    );
  }
};

export default Footer;
