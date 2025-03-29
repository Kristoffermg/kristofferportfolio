import "./styles.css";
import React, { useState } from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import clearskyReal from "../../images/ClearskyReal.png";
import clearskySceneClassification from "../../images/ClearskySceneClassification.png";

export default function Experience() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section id="experience">
      <h1 className="sectionHeader">Job Experience</h1>
      <h3>ClearSky Vision (Oct 2023 - Present)</h3>
      <p>
        As a Junior Developer at ClearSky Vision, I collaborated with another
        developer on various tasks. My primary contribution is designing and
        implementing a scene classification model from the ground up, ensuring
        it works with any image size while maximizing accuracy across different
        geographies and seasons. Below, you can view a demo of the model in
        action.
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
        <div className="clearskyImageShowcase">
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
        </div>
      )}
    </section>
  );
}
