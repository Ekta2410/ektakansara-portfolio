import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Portfolio = () => {
  return (
    <div className="App grain relative">

      <Nav />

      <main>

        <Hero />

        <Stats />

        <About />

        <Skills />

        <Work />

        <Experience />

        <Education />

        <Leadership />

        <Contact />

      </main>

      <Footer />

    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;