import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./contact.module.css";

export default class MainContact extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      SuccessMessage: "",
    };
  } */

  render() {
    /* const handleSubmit = (e) => {
      this.setState({
        SuccessMessage: (this.state.SuccessMessage =
          "Thanks for your message!"),
      });
      e.preventDefault();
    }; */
    return (
      <section className={style.contact} id="contact">
        <div className={style.contact_container + " " + style.bd_grid}>
          <h2>Contact</h2>
          <h4 className={style.success}>{this.state.SuccessMessage}</h4>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className={style.contact_form}
          >
            <div className={style.contact_inputs}>
              <input
                type="hidden"
                name="form-name"
                value="contact"
                className={style.contact_input}
              />
              <input
                label="name"
                name="name"
                type="text"
                placeholder="Name"
                className={style.contact_input}
              />
              <input
                label="email"
                name="email"
                type="email"
                placeholder="Email"
                className={style.contact_input}
              />
              <textarea
                name="message"
                type="text"
                placeholder="Tell me something"
                className={style.contact_input}
              ></textarea>
              <button
                type="submit"
                className={style.contact_button}
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div>
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
      </section>
    );
  }
}
