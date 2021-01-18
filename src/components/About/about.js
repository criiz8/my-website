import React from "react";
import style from "./about.module.css";

const About = () => {
  return (
    <section className={style.about} id="about">
      <div className={style.about_container + " " + style.bd_grid}>
        <div className={style.me_container}>
          <h2>I am a web developer</h2>
          <p>
            I studied web development at Henry's Bootcamp. My main goal is to
            bring you the best quality. I love to code things and talk with my
            coworkers. Problem solver.
          </p>
        </div>
        <div className={style.skills_container}>
          <h2>Skills</h2>
          <div className={style.skills_box}>
            <ul className={style.skills_list + " " + style.skills_first}>
              <h3 className={style.skills_subtitle}>Front End</h3>
              <li>
                <span className={style.skills_name}>HTML</span>
                <span className={style.skills_name}>Bootstrap</span>
                <span className={style.skills_name}>CSS</span>
                <span className={style.skills_name}>Sass</span>
                <span className={style.skills_name}>Javascript</span>
                <span className={style.skills_name}>React</span>
                <span className={style.skills_name}>Redux</span>
              </li>
            </ul>
            <ul className={style.skills_list}>
              <h3 className={style.skills_subtitle}>Back End</h3>
              <li>
                <span className={style.skills_name}>Node.js</span>
                <span className={style.skills_name}>Express</span>
                <span className={style.skills_name + " " + style.last}>
                  mySQL
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.portfolio_container}>
          <h2>Portfolio</h2>
          <div className={style.portfolio_images + " " + style.bd_grid}>
            <a
              href="https://soyhenry.com/"
              className={style.portfolio_link_name}
            >
              <div className={style.portfolio_img}>
                <img
                  src="https://raw.githubusercontent.com/criiz8/my-website/main/src/img/work1.png"
                  alt="SoyHenry"
                />
                <div className={style.portfolio_link}>
                  Responsive E-commerce
                </div>
              </div>
            </a>
            <a
              href="https://veganizate.netlify.app/"
              className={style.portfolio_link_name}
            >
              <div className={style.portfolio_img}>
                <img
                  src="https://raw.githubusercontent.com/criiz8/my-website/main/src/img/work2.png"
                  alt="Veganizate"
                />
                <div className={style.portfolio_link}>Veganizate</div>
              </div>
            </a>
            <a
              href="https://codepen.io/criiz"
              className={style.portfolio_link_name}
            >
              <div className={style.portfolio_img}>
                <img
                  src="https://raw.githubusercontent.com/criiz8/my-website/main/src/img/work3.png"
                  alt="FreeCodeCamp"
                />
                <div className={style.portfolio_link}>Small Projects</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
