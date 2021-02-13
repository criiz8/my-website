import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "./nav.module.css";

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
                  href="https://drive.google.com/uc?export=download&id=12PmIZtI0yupa8JmvMraEqQuSycrJMG2k"
                  className={style.nav_link}
                  onClick={() => this.setState({ active: false })}
                >
                  Download CV
                </a>
              </li>
            </ul>
            <div className={style.nav_social}>
              <p className={style.contact_text}>info@cristianariza.tech</p>
              <a
                href="https://www.linkedin.com/in/crisariza/"
                className={style.icon}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com/criiz8" className={style.icon}>
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
