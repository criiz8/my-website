import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home.jsx";
import Nav from "./components/nav/nav.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Scroll from "./components/scroll/scroll.jsx";
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
