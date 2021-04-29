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
            bring value through my development skills.
          </p>
        </div>
        <div>
          <h1 className={style.about_title}>Skills</h1>
          <div className={style.skills_box}>
            <div>
              <h2 className={style.skills_subtitle}>Front End</h2>
              <ul className={style.skills_list}>
                <li className={style.skills_name}>HTML</li>
                <li className={style.skills_name}>CSS</li>
                <li className={style.skills_name}>Javascript</li>
                <li className={style.skills_name}>React</li>
                <li className={style.skills_name}>Redux</li>
              </ul>
            </div>
            <div>
              <h2 className={style.skills_subtitle}>Back End</h2>
              <ul className={style.skills_list}>
                <li className={style.skills_name}>Node</li>
                <li className={style.skills_name}>Express</li>
                <li className={style.skills_name}>PostgreSQL</li>
                <li className={style.skills_name + " " + style.last}>
                  Sequelize
                </li>
              </ul>
            </div>
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
                <picture>
                  <source type="image/webp" srcSet="img/work1.webp" />
                  <source type="image/png" srcSet="img/work1.png" />
                  <img
                    className={style.img}
                    alt="G4 Shirts"
                    src="img/work1.png"
                  />
                </picture>
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
                <picture>
                  <source type="image/webp" srcSet="img/work2.webp" />
                  <source type="image/png" srcSet="img/work2.png" />
                  <img className={style.img} alt="Mondo" src="img/work2.png" />
                </picture>
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
                <picture>
                  <source type="image/webp" srcSet="img/work3.webp" />
                  <source type="image/png" srcSet="img/work3.png" />
                  <img
                    className={style.img}
                    alt="Cristian Ariza"
                    src="img/work3.png"
                  />
                </picture>
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
