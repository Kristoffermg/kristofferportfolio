import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="aboutme" className="aboutme">
      <h1 className="sectionHeader">About Me</h1>
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I am an upcoming Masters Thesis Graduate in Software Engineering at
          Aalborg University. I specialize in C#, Python, TypeScript, and SQL,
          with experience in many other technologies.
        </p>
      </motion.div>
    </section>
  );
}
