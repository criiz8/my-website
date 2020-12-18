import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <section className={style.contact} id="contact">
      <div className={style.contact_container + " " + style.bd_grid}>
        <h2>Contact</h2>
        <form
          action=""
          className={style.contact_form}
          name="contact"
          netlify="true"
        >
          <div className={style.contact_inputs}>
            <input
              type="text"
              placeholder="Name"
              className={style.contact_input}
            />
            <input
              type="email"
              placeholder="Email"
              className={style.contact_input}
            />
            <textarea
              className={style.contact_input}
              placeholder="Tell me something"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className={style.contact_button}
            />
          </div>
        </form>
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
