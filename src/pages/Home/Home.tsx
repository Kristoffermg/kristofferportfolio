import React from "react";
import "./styles.css";
import ReferencesButtons from "../ReferencesButtons";
import About from "../About/About";
import Experience from "../Experience/Experience";
import TechStack from "../TechStack/TechStack";
import Projects from "../Projects/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className={"header"}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className={"container"}
        >
          <div className="title">
            <h1>Fullstack Software Developer</h1>
            <h2 id="location">
              <i className="fa fa-map-marker" /> Aalborg, Denmark
            </h2>
          </div>
          <ReferencesButtons />
        </motion.div>
        <a href="#aboutme" className="scrollIndicator">
          <span />
        </a>
      </section>
      <section className={"information"}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <About />
          <TechStack />
          <Experience />
          <Projects />
        </motion.div>
      </section>
      <footer id="footer">
        <p id="footerName">Kristoffer Gregersen</p>
        <div className="footerReferences">
          <a
            href="https://www.linkedin.com/in/kristoffer-gregersen-65622320a/"
            className="footerReference"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Kristoffermg"
            className="footerReference"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:kristoffermollergregersen@gmail.com"
            className="footerReference"
          >
            <i className="fa fa-envelope"></i>
            <span>Email</span>
          </a>
          <a
            href="https://drive.google.com/file/d/16eg__GNYpUoLwxHqMjn3n_mdEQ8HQp-e/view?usp=sharing"
            className="footerReference"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-newspaper-o"></i>
            <span>CV</span>
          </a>
        </div>
      </footer>
    </>
  );
}
