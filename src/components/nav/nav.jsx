import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "./nav.module.css";

class Nav extends React.Component {
  state = {
    active: false,
    theme: "dark",
  };

  render() {
    if (this.state.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return (
      <header className={style.l_header}>
        <nav className={style.nav + " " + style.bd_grid}>
          <div>
            <Link to="/" onClick={() => this.setState({ active: false })}>
              <b className={style.nav_link + " " + style.firm}>
                cristian ariza
              </b>
            </Link>
          </div>
          <div
            className={
              this.state.active
                ? style.nav_menu + " " + style.show
                : style.nav_menu
            }
            id="nav-menu"
          >
            <ul className={style.nav_list}>
              <li className={style.nav_item}>
                <a
                  href="#about"
                  className={style.nav_link}
                  onClick={() => this.setState({ active: false })}
                >
                  About me
                </a>
              </li>
              <li className={style.nav_item}>
                <a
                  href="#contact"
                  className={style.nav_link}
                  onClick={() => this.setState({ active: false })}
                >
                  Contact
                </a>
              </li>
              <li className={style.nav_item}>
                <a
                  href="/full_stack_dev-cristian_ariza-resume.pdf"
                  className={style.nav_link}
                  onClick={() => this.setState({ active: false })}
                >
                  Resume
                </a>
              </li>{" "}
            </ul>{" "}
            <div className={style.nav_social}>
              <p className={style.contact_text}>info@cristianariza.tech</p>
              <a
                href="https://linkedin.com/in/crisariza/"
                className={style.icon}
                aria-label="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/criiz8"
                className={style.icon}
                aria-label="github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div
            onClick={() => this.setState({ active: !this.state.active })}
            className={style.nav_toggle}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
