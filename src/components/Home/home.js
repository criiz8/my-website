import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import style from "./home.module.css";

const Home = () => {
  return (
    <section className={style.home + " " + style.bd_grid} id="home">
      <div className={style.home_container}>
        <h1 className={style.home_title}>
          <span>HE</span>
          <br />
          <span>LLO.</span>
        </h1>
        <div className={style.home_scroll}>
          <a href="#about" className={style.home_scroll_link}>
            <FontAwesomeIcon icon={faChevronDown} />
            Scroll down
          </a>
        </div>
        <img
          src="https://raw.githubusercontent.com/criiz8/my-website/main/src/img/me.png"
          alt="Cristian Ariza"
          className={style.home_img}
        />
      </div>
    </section>
  );
};

export default Home;
