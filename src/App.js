import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import ScrollToTop from "./components/ScrollToTop/scrolltoptop";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Route exact path="/" render={() => <Nav />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/" render={() => <Contact />} />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
