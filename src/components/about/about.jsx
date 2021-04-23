import React from "react";
import style from "./about.module.css";

const About = () => {
  return (
    <section className={style.about} id="about">
      <div className={style.bd_grid}>
        <div className={style.me_container}>
          <h1 className={style.about_title}>I am a Full Stack Developer</h1>
          <p>
            I am looking for a position in a company where I can learn more and
            bring value through my development skills. In Henry Bootcamp, I
            started without knowing how to code to Full Stack Developer in just
            6 months.
          </p>
        </div>
        <div>
          <h1 className={style.about_title}>Skills</h1>
          <div className={style.skills_box}>
            <ul className={style.skills_list + " " + style.skills_first}>
              <h2 className={style.skills_subtitle}>Front End</h2>
              <li>
                <span className={style.skills_name}>HTML</span>
                <span className={style.skills_name}>CSS</span>
                <span className={style.skills_name}>Javascript</span>
                <span className={style.skills_name}>React</span>
                <span className={style.skills_name}>Redux</span>
              </li>
            </ul>
            <ul className={style.skills_list}>
              <h2 className={style.skills_subtitle}>Back End</h2>
              <li>
                <span className={style.skills_name}>Node</span>
                <span className={style.skills_name}>Express</span>
                <span className={style.skills_name}>PostgreSQL</span>
                <span className={style.skills_name + " " + style.last}>
                  Sequelize
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.portfolio_container}>
          <h1 className={style.about_title}>Portfolio</h1>
          <div className={style.portfolio_images + " " + style.bd_grid}>
            <div className={style.portfolio_div}>
              {" "}
              <a href="https://g4shirts.netlify.app">
                <h2 className={style.title}>G4 Shirts</h2>
              </a>{" "}
              <a href="https://g4shirts.netlify.app">
                {" "}
                <img
                  className={style.img}
                  src="https://raw.githubusercontent.com/criiz8/my-website/main/src/img/work1.png"
                  alt="G4 Shirts"
                />
              </a>
              <p className={style.description}>
                {" "}
                SCRUM methodologies with 7 people.
                <br></br> Authentication, SQL database, Stripe API, orders
                management, and automated emails.
                <br></br>
                Redux global state, shopping cart, and React components with
                protected routes.
              </p>{" "}
              <a href="https://github.com/criiz8/mondo-front">
                {" "}
                <p className={style.source}>Source code</p>{" "}
              </a>
            </div>{" "}
            <div className={style.portfolio_div}>
              {" "}
              <a href="https://mondocountries.netlify.app">
                <h2 className={style.title}>Mondo Countries</h2>{" "}
              </a>{" "}
              <a href="https://mondocountries.netlify.app">
                {" "}
                <img
                  className={style.img}
                  src="https://raw.githubusercontent.com/criiz8/my-website/main/src/img/work2.png"
                  alt="Mondo"
                />
              </a>
              <p className={style.description}>
                Controlled forms, SQL database, searches, external API, filters,
                and React components.
                <br></br> Complex searches, optimized queries, photos
                management.
                <br></br> Deployed with Heroku and Netlify.
              </p>{" "}
              <a href="https://github.com/criiz8/mondo-front">
                {" "}
                <p className={style.source}>Source code</p>{" "}
              </a>
            </div>
            <div className={style.portfolio_div}>
              {" "}
              <a href="https://cristianariza.tech">
                <h2 className={style.title}>My Website</h2>{" "}
              </a>{" "}
              <a href="https://cristianariza.tech">
                {" "}
                <img
                  className={style.img}
                  src="https://raw.githubusercontent.com/criiz8/my-website/main/src/img/work3.png"
                  alt="Mondo"
                />
              </a>
              <p className={style.description}>
                Responsive react app, contact form, skills, and who I am.
              </p>{" "}
              <a href="https://github.com/criiz8/cristianariza">
                {" "}
                <p className={style.source}>Source code</p>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
