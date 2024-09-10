import './App.css';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
  );
}

export default App;
