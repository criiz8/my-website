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
        <div>
          <picture>
            <source type="image/webp" srcset="img/me.webp" />
            <source type="image/png" srcset="img/me.png" />
            <img
              className={style.home_img}
              alt="Cristian Ariza"
              src="img/me.png"
            />
          </picture>
        </div>{" "}
        <div className={style.home_scroll}>
          <a href="#about" className={style.home_scroll_link}>
            <FontAwesomeIcon icon={faChevronDown} />
            Scroll down
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
