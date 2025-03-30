import React, { Fragment } from "react";

export default function ContactButtons() {
  return (
    <Fragment>
      <a href={"google.com"} className={"contact"}>
        <i className="linkedin"></i>
        <span>LinkedIn</span>
      </a>
    </Fragment>
  );
}
