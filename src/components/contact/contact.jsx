import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./contact.module.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SuccessMessage: "",
    };
  }
  render() {
    const handleSubmit = () => {
      this.setState({ SuccessMessage: "Thanks for your message!" });
    };
    return (
      <section className={style.contact} id="contact">
        <div className={style.contact_container + " " + style.bd_grid}>
          <h2>Contact</h2>
          <h3 className={style.success}>{this.state.SuccessMessage}</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className={style.contact_form}
            onSubmit={handleSubmit}
          >
            <div className={style.contact_inputs}>
              <input
                type="hidden"
                name="form-name"
                value="contact"
                className={style.contact_input}
              />
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className={style.contact_input}
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className={style.contact_input}
              />
              <textarea
                required
                name="message"
                type="text"
                placeholder="Tell me something"
                className={style.contact_input}
              ></textarea>
              <button type="submit" className={style.contact_button}>
                Send
              </button>
            </div>
          </form>
        </div>
        <div
          className={
            this.state.SuccessMessage
              ? style.margin + " " + style.contact_info
              : style.contact_info
          }
        >
          <p className={style.contact_text}>hi@crisariza.com</p>
          <a
            href="https://linkedin.com/in/crisariza/"
            aria-label="linkedin"
            style={{ marginRight: 1 + "em" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/criiz8" aria-label="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
    );
  }
}
