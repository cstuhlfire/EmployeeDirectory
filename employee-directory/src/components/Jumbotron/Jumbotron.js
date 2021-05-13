import React from "react";
import "./styles.css";

function Jumbotron(props) {
  return (
  <div className="jumbotron custom-jumbo">
    <div className="container">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.subtext}</p>
    </div>
  </div>
  )
}

export default Jumbotron;
