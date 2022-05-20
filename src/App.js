import React from "react";
import Card from "./components/Card"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Switcher from "./components/Switcher";

AOS.init()

function App() {
  return (
<div className = "min-h-screen py-10 px-3 sm:px-5 transition-colors dark:bg-zinc-700">
  <Switcher className="transition duration-200"/>  
  <Card/>
  <About/>
  <Skills/>
  <Projects/>
  <ContactMe/>
  <Footer/>
</div>
  );
}

export default App;
