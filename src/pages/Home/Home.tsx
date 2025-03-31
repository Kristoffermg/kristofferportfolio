import React, { Fragment } from "react";
import "./styles.css";
import ReferencesButtons from "../ReferencesButtons";
import About from "../About/About";
import Experience from "../Experience/Experience";
import TechStack from "../TechStack/TechStack";
import Projects from "../Projects/Projects";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Fragment>
      <div className={"responsiveness"}>
        <section className={"header"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={"container"}
          >
            <div className="title">
              <h1>Fullstack Software Developer</h1>
              <h2 id="location">
                <i className="fa fa-map-marker" /> Aalborg
              </h2>
            </div>
            <ReferencesButtons />
          </motion.div>
        </section>
        <section className={"information"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <About />
            <TechStack />
            <Experience />
            <Projects />
          </motion.div>
        </section>
        <div id="footer">
          <p id="footerName">Kristoffer Gregersen</p>
          <div className="footerReferences">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <a
              href={
                "https://www.linkedin.com/in/kristoffer-gregersen-65622320a/"
              }
              className={"footerReference"}
              target={"_blank"}
            >
              <i className="fa fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href={"https://github.com/Kristoffermg"}
              className={"footerReference"}
              target={"_blank"}
            >
              <i className="fa fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href={"mailto:kristoffermollergregersen@gmail.com"}
              className={"footerReference"}
            >
              <i className="fa fa-envelope"></i>
              <span>Email</span>
            </a>
            <a
              href={
                "https://drive.google.com/file/d/16eg__GNYpUoLwxHqMjn3n_mdEQ8HQp-e/view?usp=sharing"
              }
              className={"footerReference"}
              target="_blank"
            >
              <i className="fa fa-newspaper-o"></i>
              <span>CV</span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
