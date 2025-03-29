import "./styles.css";

const Zoom = require("react-reveal/Zoom");

export default function About() {
  return (
    <section id="aboutme" className="aboutme">
      <h1 className="sectionHeader">About Me</h1>
      <div className="content">
        <p>
          {" "}
          I am an upcoming Masters Thesis Graduate in Software Engineering at
          Aalborg University. I specialize in C#, Python, TypeScript and SQL,
          with experience in many other technologies.
        </p>
      </div>
    </section>
  );
}
