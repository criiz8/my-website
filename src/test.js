import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Nav extends React.Component {
  state = {
    active: false,
  };

  render() {
    return (
      <div className="header">
        <i className="border hide-on-small-and-down"></i>
        <div className="container">
          <button onClick={() => this.setState({ active: !this.state.active })}>
            <div
              className={
                this.state.active ? "square switch-on" : "square switch-off"
              }
            ></div>
            {this.state.active ? "on" : "off"}
            asdasdasdasdasdasdasdasdasdaasdasdasdasdasdasdasdasdasdaasdasdasdasdasdasdasdasdasdaasdasdasdasdasdasdasdasd
          </button>
        </div>
      </div>
    );
  }

  toggleSidenav() {
    var css = this.props.showHideSidenav === "hidden" ? "show" : "hidden";
    this.setState({ showHideSidenav: css });
  }
}

export default Nav;
