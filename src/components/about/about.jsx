import React from "react";
import style from "./about.module.css";

const About = () => {
  return (
    <section className={style.about} id="about">
      <div className={style.bd_grid}>
        <div className={style.me_container}>
          <h1 className={style.about_title}>I am a Full Stack Developer</h1>
          <p>
            I studied web development at Henry's Bootcamp. My main goal is to
            bring you the best quality. I love to code things. Problem solver.
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
              <a href="https://soyhenry.com">
                <h2 className={style.title}>G4 Shirts</h2>
              </a>{" "}
              <a href="https://soyhenry.com">
                {" "}
                <img className={style.img} src="/work1.png" alt="Mondo" />
              </a>
              <p className={style.description}>
                {" "}
                Worked with 7 persons doing teamwork and presenting the project
                to Henry's staff. · Authentication, 2FA, database management
                with Sequelize, Express routing, password hashing with Bcrypt.
              </p>{" "}
              <a href="https://github.com/criiz8/mondo-front">
                {" "}
                <p className={style.source}>Source code</p>{" "}
              </a>
            </div>{" "}
            <div className={style.portfolio_div}>
              {" "}
              <a href="https://mondocountries.netlify.com">
                <h2 className={style.title}>Mondo Countries</h2>{" "}
              </a>{" "}
              <a href="https://mondocountries.netlify.com">
                {" "}
                <img className={style.img} src="/work1.png" alt="Mondo" />
              </a>
              <p className={style.description}>
                Controlled forms, database management with PostgreSQL, React and
                Redux states, complex searches, optimized queries, photos
                management. Deployed with Heroku and Netlify.
              </p>{" "}
              <a href="https://github.com/criiz8/mondo-front">
                {" "}
                <p className={style.source}>Source code</p>{" "}
              </a>
            </div>
            <div className={style.portfolio_div}>
              {" "}
              <a href="https://mondocountries.netlify.com">
                <h2 className={style.title}>My Website</h2>{" "}
              </a>{" "}
              <a href="https://cristianariza.tech">
                {" "}
                <img className={style.img} src="/work1.png" alt="Mondo" />
              </a>
              <p className={style.description}>
                Responsive react app to show my portfolio, contact form, skills
                and who I am.
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
