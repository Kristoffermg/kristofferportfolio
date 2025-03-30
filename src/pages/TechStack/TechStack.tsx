import "./styles.css";
import React from "react";

import c from "../../images/skills/C.png";
import blazor from "../../images/skills/blazor.png";
import csharp from "../../images/skills/csharp.png";
import css from "../../images/skills/css.png";
import html from "../../images/skills/html.png";
import java from "../../images/skills/java.png";
import javascript from "../../images/skills/javascript.png";
import mysql from "../../images/skills/mysql.png";
import python from "../../images/skills/python.png";
import react from "../../images/skills/react.png";
import typescript from "../../images/skills/typescript.png";
import pytorch from "../../images/skills/pytorch.png";
import azure from "../../images/skills/azure.png";
import git from "../../images/skills/git.png";

export default function TechStack() {
  return (
    <section id="experiences">
      <h1 className="sectionHeader">My Tech Stack</h1>

      <div className="experiencesContainer">
        <div className="experience">
          <img className="experienceImage" src={csharp}></img>
          C# .NET
        </div>
        <div className="experience">
          <img className="experienceImage" src={python}></img>
          Python
        </div>
        <div className="experience">
          <img className="experienceImage" src={c}></img>C
        </div>
        <div className="experience">
          <img className="experienceImage" src={java}></img>
          Java
        </div>
        <div className="experience">
          <img className="experienceImage" src={typescript}></img>
          TypeScript
        </div>
        <div className="experience">
          <img className="experienceImage" src={javascript}></img>
          JavaScript
        </div>
        <div className="experience">
          <img className="experienceImage" src={html}></img>
          HTML
        </div>
        <div className="experience">
          <img className="experienceImage" src={css}></img>
          CSS
        </div>
        <div className="experience">
          <img className="experienceImage" src={mysql}></img>
          MySQL
        </div>
        <div className="experience">
          <img className="experienceImage" src={blazor}></img>
          Blazor
        </div>
        <div className="experience">
          <img className="experienceImage" src={react}></img>
          React
        </div>
        <div className="experience">
          <img className="experienceImage" src={pytorch}></img>
          PyTorch
        </div>
        <div className="experience">
          <img className="experienceImage" src={azure}></img>
          Azure
        </div>
        <div className="experience">
          <img className="experienceImage" src={git}></img>
          Git
        </div>
      </div>
      <hr></hr>
    </section>
  );
}
