import React from "react";

export default function NavBar() {
  return (
    <nav id="nav" className="nav">
      <a href={"#nav"} className="site-name">
        Kristoffer Gregersen
      </a>
      <ul>
        <li>
          <a href={"#aboutme"}>About</a>
        </li>
        <li>
          <a href={"#projects"}>Projects</a>
        </li>
      </ul>
    </nav>
  );
}
