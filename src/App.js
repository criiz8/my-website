import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="App max-w-screen-xl m-auto">
        <div className="h-screen">
          <Nav></Nav>
          <Home></Home>
        </div>
        <Skills></Skills>
        <Experiences></Experiences>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
