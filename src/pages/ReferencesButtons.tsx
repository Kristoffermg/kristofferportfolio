import React, { Fragment } from "react";

export default function ReferencesButtons() {
  return (
    <div className="references">
      <a
        href={"https://www.linkedin.com/in/kristoffer-gregersen-65622320a/"}
        className={"reference"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a
        href={"https://github.com/Kristoffermg"}
        className={"reference"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <i className="fa fa-github"></i>
        <span>GitHub</span>
      </a>
      <a
        href={"mailto:kristoffermollergregersen@gmail.com"}
        className={"reference"}
      >
        <i className="fa fa-envelope"></i>
        <span>Email</span>
      </a>
      <a
        href={
          "https://drive.google.com/file/d/16eg__GNYpUoLwxHqMjn3n_mdEQ8HQp-e/view?usp=sharing"
        }
        className={"reference"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-newspaper-o"></i>
        <span>CV</span>
      </a>
    </div>
  );
}
