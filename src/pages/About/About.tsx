import "./styles.css";

const Zoom = require("react-reveal/Zoom");

export default function About() {
  return (
    <section id="aboutme" className="aboutme">
      <h1 className="sectionHeader">About me</h1>
      <div className="content">
        <p>
          {" "}
          I am an upcoming Masters Thesis Graduate in Software Engineering at
          Aalborg University. I specialize in C#, Python, TypeScript and SQL,
          with experience in many other technologies. My other hobbies are
          fitness, great food and traveling 😄
        </p>
      </div>
    </section>
  );
}
