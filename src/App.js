import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Main />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
