import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/About"
import Projects from "./pages/Projects/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  let component;
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
