import React from "react";
import "./Printjoke.css";
import Logo from "./laughing emoji.png";

export default function Printjoke(props) {
  return (
    <div class="container">
      <h5>{props.j}</h5>
      <br />
      <img src={Logo} />
    </div>
  );
}
