import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <section className={style.contact} id="contact">
      <div className={style.contact_container + " " + style.bd_grid}>
        <h2>Contact</h2>
      </div>
      <div className={style.contact_info}>
        <p className={style.contact_text}>info@cristianariza.tech</p>
        <a href="https://www.linkedin.com/in/crisariza/" className={style.icon}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.github.com/criiz8" className={style.icon}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
