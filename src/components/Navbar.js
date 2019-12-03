import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/ml5_logo_purple.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="Navbar" role="navigation" aria-label="main-navigation">
        <div className={`Navbar__wrapper ${this.state.navBarActiveClass}`}>
          <div className="Navbar__brand">
            <Link to="/" className="Navbar__item" title="Logo">
              <img src={logo} alt="ml5.js logo" />
            </Link>
            <div
              className={`Navbar__tagline ${this.state.navBarActiveClass}`}
            />
            {/* Hamburger menu */}
            <div
              className={`Burger navbar-burger burger ${
                this.state.navBarActiveClass
              }`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navMenu"
            className={`Navbar__menu ${this.state.navBarActiveClass}`}
          >
            <div className="Navbar__itemContainer">
              <a
                className="Navbar__item"
                activeclassname="is-active"
                href="https://ml5js.github.io/ml5-library/docs/#/"
              >
                Getting Started
              </a>
              <a
                className="Navbar__item"
                activeclassname="is-active"
                href="https://ml5js.github.io/ml5-library/docs/#/reference/index"
              >
                Reference
              </a>
              <Link
                className="Navbar__item"
                activeclassname="is-active"
                to="/community"
              >
                Community
              </Link>
              <Link
                className="Navbar__item"
                activeclassname="is-active"
                to="/about"
              >
                About
              </Link>

              {/* <Link className="navbar-item" to="/contact">
                Contact
              </Link> */}
              {/*<Link className="navbar-item" to="/contact/examples">*/}
              {/*  Form Examples*/}
              {/*</Link>*/}
            </div>
            <div className="Navbar__itemContainer">
              <a
                className="Navbar__item"
                href="https://github.com/ml5js/ml5-library"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>

            {/* <div className="Navbar__itemContainer">
              <form className="Navbar__item">
                <input type="text" name="search" value="search placeholder" />
              </form>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
