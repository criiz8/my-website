import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import me from "../../img/me.png";

const Home = () => {
  return (
    <section class="home bd-grid" id="home">
      <div class="home_container">
        <h1 class="home_title">
          <span>HE</span>
          <br />
          <span>LLO.</span>
        </h1>
        <div class="home_scroll">
          <a href="#about" class="home_scroll-link">
            <FontAwesomeIcon icon={faChevronDown} />
            Scroll down
          </a>
        </div>
        <img src={me} alt="" class="home_img" />
      </div>
    </section>
  );
};

export default Home;
