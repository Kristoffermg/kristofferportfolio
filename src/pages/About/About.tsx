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
          I hold a M.Sc. in Software Engineering from Aalborg University, where
          my thesis explored adaptive AR video placement during cardio exercise.
          I specialize in Python, TypeScript, C#, and SQL, and currently work as
          a Fullstack Software Developer at RINA Digital Solutions.
        </p>

        <div className="education">
          <h3 className="educationTitle">Education</h3>
          <div className="educationItem">
            <div className="educationHeader">
              <span className="educationDegree">M.Sc. in Software Engineering</span>
              <span className="educationPeriod">2023 - 2025</span>
            </div>
            <span className="educationSchool">Aalborg University</span>
            <p className="educationThesis">
              Thesis: "AR Video Watching During Cardio Exercise – An Intensity-Based Adaptive Approach"
            </p>
          </div>
          <div className="educationItem">
            <div className="educationHeader">
              <span className="educationDegree">B.Sc. in Software Engineering</span>
              <span className="educationPeriod">2020 - 2023</span>
            </div>
            <span className="educationSchool">Aalborg University</span>
            <p className="educationThesis">
              Thesis: "Time-Series Forecasting for Predicting the Oil Temperature in Electrical Transformers"
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
