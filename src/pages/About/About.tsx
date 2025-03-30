import React from "react";
import "./styles.css";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function About() {
  return (
    <section id="aboutme" className="aboutme">
      <h1 className="sectionHeader">About Me</h1>
      <motion.div
        className="content"
        initial={{ scale: 0.8 }} // Start with a smaller scale
        animate={{ scale: 1 }} // Zoom in to normal scale
        transition={{ duration: 1 }} // Control duration of the zoom effect
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
