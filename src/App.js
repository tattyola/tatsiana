import './App.css';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <Home/>
          <About/>
          <Project/>
          <Contact/>
          <Footer/>
      </div>
  );
}

export default App;
