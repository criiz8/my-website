import React from "react";
import work1 from "../../img/work1.png";
import work2 from "../../img/work2.png";
import work3 from "../../img/work3.png";

const About = () => {
  return (
    <section class="about" id="about">
      <div class="about_container bd-grid">
        <div class="me_container">
          <h2>I am a web developer</h2>
          <p>
            I studied web development at Henry's Bootcamp. My main goal is to
            bring you the best quality. I love to code things and talk with my
            coworkers. Problem solver.
          </p>
        </div>
        <div class="skills_container">
          <h2>Skills</h2>
          <div class="skills_box">
            <ul class="skills_list skills_first">
              <h3 class="skills_subtitle">Front-End</h3>
              <li>
                <span class="skills_name">Html</span>
                <span class="skills_name">Css</span>
                <span class="skills_name">Javascript</span>
                <span class="skills_name">Sass</span>
                <span class="skills_name">React</span>
                <span class="skills_name">Redux</span>
              </li>
            </ul>
            <ul class="skills_list">
              <h3 class="skills_subtitle">Back-End</h3>
              <li>
                <span class="skills_name">NodeJS</span>
                <span class="skills_name">Express</span>
                <span class="skills_name last">mySQL</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="portfolio_container">
          <h2>Portfolio</h2>
          <div class="portfolio_images bd-grid">
            <div
              class="portfolio_img"
              onclick="window.open('https://codepen.io/criiz','mywindow');"
            >
              <img src={work1} alt="" />
              <div class="portfolio_link">
                <a href="#" class="portfolio_link-name">
                  Mobile Bank App
                </a>
              </div>
            </div>
            <div
              class="portfolio_img"
              onclick="window.open('https://codepen.io/criiz','mywindow');"
            >
              <img src={work2} alt="" />
              <div class="portfolio_link">
                <a href="#" class="portfolio_link-name">
                  Responsive E-commerce
                </a>
              </div>
            </div>
            <div class="portfolio_img">
              <img src={work3} alt="" />
              <div
                class="portfolio_link"
                onclick="window.open('https://codepen.io/criiz','mywindow');"
              >
                <a class="portfolio_link-name">Small Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
