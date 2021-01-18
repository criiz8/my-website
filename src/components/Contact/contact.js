import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <section className={style.contact} id="contact">
      <div className={style.contact_container + " " + style.bd_grid}>
        <h2>Contact</h2>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
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
