import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Scroll from "./components/scroll/scroll";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Scroll />
        <Route exact path="/" render={() => <Nav />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/" render={() => <Contact />} />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
