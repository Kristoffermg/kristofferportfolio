import "./styles.css";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import clearskyReal from "../../images/ClearskyReal.jpg";
import clearskySceneClassification from "../../images/ClearskySceneClassification.jpg";

export default function Experience() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section id="experience">
      <h1 className="sectionHeader">Job Experience</h1>
      <h3>ClearSky Vision (Oct 2023 - Present)</h3>
      <p>
        As a Junior Developer at ClearSky Vision, I collaborated with another
        developer on various tasks. My primary contribution involves designing
        and implementing a scene classification model from the ground up, making
        sure it works with any image size while maximizing accuracy across
        different geographies and seasons. Below, you can view a demo of the
        model in action.
      </p>

      <div className="demo-container">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="dropdown-toggle"
        >
          {isDropdownOpen ? "Hide Demo" : "Show Demo"}
        </button>
      </div>
      {isDropdownOpen && (
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
                  <span className="legend-box buildingsAndRoads"></span>{" "}
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
                  <span className="legend-box non-vegetated"></span>{" "}
                  Non-vegetated
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
      <hr />
    </section>
  );
}
