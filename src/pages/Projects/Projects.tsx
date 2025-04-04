import "./styles.css";
import React from "react";
import husdatabillede from "../../images/husdata_billede.png";
import transformerbillede from "../../images/transformer_screenshot.png";
import portfoliobillede from "../../images/portfolio.png";
import noteappbillede from "../../images/notetakingapp.png";
import { Fade } from "react-awesome-reveal";

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
import raspberrypi from "../../images/skills/raspberrypi.png";
import aws from "../../images/skills/aws.png";
import unity from "../../images/skills/unity.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="sectionHeader">My projects</h1>
      <div id="mastersproject" className="projectListings">
        <div className="projectInformation">
          {/* <img
            className="projectImage"
            id="transformer"
            src={transformerbillede}
          ></img> */}
          <h2>
            (IN PROGRESS) Master's Thesis: AR Video Placement During Cardio
            Exercise - An intensity-based adaptive approach
          </h2>

          <h3>Technologies used</h3>

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
              <img className="experienceImage" src={unity}></img>
              Unity
            </div>
          </div>

          <div className="projectText">
            <h3>What is the research of this project?</h3>
            <p>
              During cardio machine exercise, such as the treadmill, many people
              enjoy watching videos on their phone. However, the viewing
              experience is not optimal as the phone screen is small. The
              research investigates the application of Augmented Reality in
              cardio exercise to improve the video viewing experience by
              dynamically adjusting the videos size based on the level of
              exercise intensity (such as walking vs jogging vs sprinting).
            </p>
            <h3>My role</h3>
            <p>
              I have the role of developing the adaptive approach. I am
              developing a Unity application for Oculus, which means I am
              working with C# and a Meta Quest 3S.
            </p>
            {/* <a href="https://docdro.id/0yJjytH" target="_blank">
              <h4>Link to the paper</h4>
            </a> */}
            <a href="https://github.com/Kristoffermg/ARVid" target="_blank">
              <i className="fa fa-github" id="github"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div id="bachelorprojekt" className="projectListings">
        <div className="projectInformation">
          <img
            className="projectImage"
            id="transformer"
            src={transformerbillede}
          ></img>
          <h2>
            Bachelor project: Time-Series Forecasting for Predicting the Oil
            Temperature in Electrical Transformers
          </h2>

          <h3>Technologies used</h3>

          <div className="experiencesContainer">
            <div className="experience">
              <img className="experienceImage" src={python}></img>
              Python
            </div>
            <div className="experience">
              <img className="experienceImage" src={csharp}></img>
              C# .NET
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
              <img className="experienceImage" src={azure}></img>
              Azure
            </div>
            <div className="experience">
              <img className="experienceImage" src={pytorch}></img>
              PyTorch
            </div>
            <div className="experience">
              <img className="experienceImage" src={html}></img>
              HTML
            </div>
            <div className="experience">
              <img className="experienceImage" src={css}></img>
              CSS
            </div>
          </div>

          <div className="projectText">
            <h3>What does this project solve?</h3>
            <p>
              Over time, higher oil temperatures in electrical transformers
              break down the transformer at a significant rate. In this project,
              we made a platform that makes the predictions on the oil
              temperature easily accessible. We trained a <b>linear model</b>{" "}
              with Sklearn to perform <b>time-series forecasting</b>. We also
              trained a <b>multilayer perceptron</b> with PyTorch to estimate
              the oil temperature given a set of load values. We programmed
              these models in <b>Python</b>. We connected the models to a{" "}
              <b>front-end interface in C# with Blazor</b>, which was
              specifically designed with MudBlazor. We also used ChartJs.Blazor
              to make interactive graphs that displays the predictions. To
              communicate between the front-end and back-end we used a MySQL
              database which we hosted on Azure, and we also made good use of
              JSON files.
            </p>
            <p></p>
            <h3>My role</h3>
            <p>
              In this project, I <b>came up with the requirements</b> for the
              project and which technologies we should use. I{" "}
              <b>gave out tasks</b> to the other group members so we all had
              ways to contribute to the project. I <b>made the linear model</b>{" "}
              which performs the time-series forecasts. I{" "}
              <b>set up and designed the database</b>, and{" "}
              <b>wrote the SQL queries</b> which are used to communicate between
              the front-end and back-end. I helped on the front-end by{" "}
              <b>adding interactive graphs</b>. Throughout the project,{" "}
              <b>I helped the other group members with various things</b>, both
              front-end and back-end, if they were stuck. In general, I{" "}
              <b>worked as a lead fullstack developer</b>, where I{" "}
              <b>primarily worked on the back-end.</b>
            </p>
            <h3>What I learned</h3>
            <p>
              In the course of this project, I significantly enhanced my
              practical proficiency with machine learning models. Additionally,
              I made substantial progress in advancing my capabilities as a
              fullstack developer, particularly in establishing effective
              communication channels between the project's frontend and backend
              components. My project management skills also grew, with a notable
              focus on effectively resolving group-related challenges to ensure
              uninterrupted workflow progression.
            </p>
            <a
              href="https://drive.google.com/file/d/1PHx8NFw2Od8hC347pkeAXJy-tLLyfoMf/view?usp=sharing"
              target="_blank"
            >
              <h4>Link to the paper</h4>
            </a>
            <a
              href="https://github.com/SW6-Transformer-Forecasting/Transformer-Forecasting"
              target="_blank"
            >
              <i className="fa fa-github" id="github"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div id="kristofferhusdata" className="projectListings">
        <div className="projectInformation">
          <img className="projectImage" id="husdata" src={husdatabillede}></img>
          <h2>Kristofferhusdata</h2>

          <h3>Technologies used</h3>

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
              <img className="experienceImage" src={mysql}></img>
              MySQL
            </div>
            <div className="experience">
              <img className="experienceImage" src={blazor}></img>
              Blazor
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
              <img className="experienceImage" src={azure}></img>
              Azure
            </div>
            <div className="experience">
              <img className="experienceImage" src={raspberrypi}></img>
              Raspberry Pi
            </div>
          </div>

          <div className="projectText">
            <h3>What does this project solve?</h3>
            <p>
              I wanted a way to monitor the temperature and air humidity in my
              room. With the gathered data, I can monitor how big of an effect
              the surrounding conditions have on the readings, and ultimately
              find a way to avoid unpleasant temperatures and air humidity in my
              room.
            </p>
            <p></p>
            <h3>My role</h3>
            <p>
              This is a project that I have been working on in my free time by
              myself. This taught me how to{" "}
              <b>independently work on a project as a fullstack developer</b>.
            </p>
            <h3>What I learned</h3>
            <p>
              I learned how to work with Blazor, how to use a DHT22 sensor with
              my Raspberry Pi and how to display nice and interactive graphs in
              Blazor. I also learned how to use Azure to host and manage
              websites and databases. My learning experience from this project
              ultimately taught me a lot about{" "}
              <b>
                useful technologies that I could apply in my Bachelors project.
              </b>
            </p>
            {/* <a
              href={"https://kristofferhusdata.azurewebsites.net"}
              target="_blank"
            >
              <h3>Live demo (username: guest, password: 123)</h3>
            </a> */}
            <a
              href="https://github.com/Kristoffermg/kristofferhusdata"
              target="_blank"
            >
              <i className="fa fa-github" id="github"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div id="portfolio" className="projectListings">
        <div className="projectInformation">
          <img className="projectImage" id="portfolio" src={portfoliobillede} />
          <h2>Personal portfolio</h2>

          <h3>Technologies used</h3>

          <div className="experiencesContainer">
            <div className="experience">
              <img className="experienceImage" src={react}></img>
              React
            </div>
            <div className="experience">
              <img className="experienceImage" src={typescript}></img>
              TypeScript
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
              <img className="experienceImage" src={aws}></img>
              AWS
            </div>
          </div>

          <h3>What I learned</h3>
          <p>
            Making this portfolio taught me more about designing front-end
            applications. It was very exciting to work with some new libraries.
          </p>
          <a
            href="https://github.com/Kristoffermg/kristofferportfolio"
            target="_blank"
          >
            <i className="fa fa-github" id="github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
