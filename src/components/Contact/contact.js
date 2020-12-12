import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="contact_container bd-grid">
        <h2>Contact</h2>
        <form action="" class="contact_form" name="contact" netlify>
          <div class="contact_inputs">
            <input type="text" placeholder="Name" class="contact_input" />
            <input type="email" placeholder="Email" class="contact_input" />
            <textarea
              class="contact_input"
              placeholder="Tell me something"
            ></textarea>
            <input type="submit" value="Send" class="contact_button" />
          </div>
        </form>
      </div>
      <div class="contact_info">
        <a class="contact_text">info@cristianariza.tech</a>
        <a href="https://www.linkedin.com/in/crisariza/" class="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.github.com/criiz8" class="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
