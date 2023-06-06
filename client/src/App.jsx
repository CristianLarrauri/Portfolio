import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Resume from "./views/Resume";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/sobremi" Component={About} />
        <Route exact path="/proyectos" Component={Projects} />
        <Route exact path="/contacto" Component={Contact} />
        <Route exact path="/cv" Component={Resume} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
