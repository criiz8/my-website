import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Nav extends React.Component {
  state = {
    active: false,
  };

  render() {
    if (this.state.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return (
      <header class="l-header">
        <nav class="nav bd-grid">
          <div>
            <Link to="/" onClick={() => this.setState({ active: false })}>
              <b class="nav_link firm">cristian ariza</b>
            </Link>
          </div>
          <div
            className={this.state.active ? "nav_menu show" : "nav_menu"}
            id="nav-menu"
          >
            <ul class="nav_list">
              <li class="nav_item">
                <a
                  href="#about"
                  class="nav_link test-1"
                  onClick={() => this.setState({ active: false })}
                >
                  About me
                </a>
              </li>
              <li class="nav_item">
                <a
                  href="#contact"
                  class="nav_link"
                  onClick={() => this.setState({ active: false })}
                >
                  Contact
                </a>
              </li>
              <li class="nav_item">
                <a
                  href="https://drive.google.com/uc?export=download&id=12PmIZtI0yupa8JmvMraEqQuSycrJMG2k"
                  class="nav_link"
                  onClick={() => this.setState({ active: false })}
                >
                  CV
                </a>
              </li>
            </ul>
            <div class="nav_social">
              <a class="contact_text">info@cristianariza.tech</a>
              <a href="https://www.linkedin.com/in/crisariza/" class="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com/criiz8" class="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <a
            onClick={() => this.setState({ active: !this.state.active })}
            id="nav-toggle"
          >
            NavToggle{" "}
          </a>
          <FontAwesomeIcon icon={faBars} />
        </nav>
      </header>
    );
  }
}

export default Nav;
