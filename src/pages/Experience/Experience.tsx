import "./styles.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import clearskyReal from "../../images/ClearskyReal.jpg";
import clearskySceneClassification from "../../images/ClearskySceneClassification.jpg";

const jobs = [
  {
    id: "rina",
    company: "RINA Digital Solutions",
    title: "Fullstack Software Developer",
    period: "Aug 2025 - Present",
  },
  {
    id: "clearsky",
    company: "ClearSky Vision",
    title: "Junior Developer",
    period: "Oct 2023 - May 2025",
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState("rina");
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section id="experience">
      <h1 className="sectionHeader">Job Experience</h1>

      <div className="expTabs">
        {jobs.map((job) => (
          <button
            key={job.id}
            className={`expTab ${activeJob === job.id ? "expTabActive" : ""}`}
            onClick={() => { setActiveJob(job.id); setIsDemoOpen(false); }}
          >
            {job.company}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeJob === "rina" && (
          <motion.div
            key="rina"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="expContent"
          >
            <div className="expRole">
              <span className="expTitle">Fullstack Software Developer</span>
              <span className="expPeriod">Aug 2025 - Present</span>
            </div>
            <p>
              As a Fullstack Software Developer at RINA Digital Solutions, I work
              on developing and maintaining full-scale web applications.
              I contribute across the entire stack, from designing and building
              responsive front-end interfaces to implementing back-end services
              and APIs.
            </p>
          </motion.div>
        )}

        {activeJob === "clearsky" && (
          <motion.div
            key="clearsky"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="expContent"
          >
            <div className="expRole">
              <span className="expTitle">Junior Developer</span>
              <span className="expPeriod">Oct 2023 - May 2025</span>
            </div>
            <p>
              As a Junior Developer at ClearSky Vision, I collaborated with another
              developer on various tasks. My primary contribution involves designing
              and implementing a scene classification model from the ground up, making
              sure it works with any image size while maximizing accuracy across
              different geographies and seasons.
            </p>

            <div className="demo-container">
              <button
                onClick={() => setIsDemoOpen(!isDemoOpen)}
                className="dropdown-toggle"
              >
                {isDemoOpen ? "Hide Demo" : "Show Demo"}
              </button>
            </div>

            {isDemoOpen && (
              <motion.div
                className="clearskyImageShowcase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage src={clearskyReal} alt="Real image" />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={clearskySceneClassification}
                        alt="Scene classification"
                      />
                    }
                  />
                  <div className="color-legend-overlay">
                    <h4>Land Cover Labels</h4>
                    <ul>
                      <li>
                        <span className="legend-box buildingsAndRoads"></span>
                        Buildings & Roads
                      </li>
                      <li>
                        <span className="legend-box trees"></span> Trees
                      </li>
                      <li>
                        <span className="legend-box grassland"></span> Grassland
                      </li>
                      <li>
                        <span className="legend-box agriculture"></span> Agriculture
                      </li>
                      <li>
                        <span className="legend-box water"></span> Water
                      </li>
                      <li>
                        <span className="legend-box non-vegetated"></span>
                        Non-vegetated
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
