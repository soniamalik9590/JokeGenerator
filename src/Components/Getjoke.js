import React, { useState } from "react";
import axios from "axios";
import Printjoke from "./Printjoke";
import "./Getjoke.css";

export default function Getjoke() {
  var [joke, setJoke] = useState("Joke of the Day");

  var handleClick = async () => {
    let j = await axios.get("https://icanhazdadjoke.com/slack");
    console.log(j);
    setJoke(j.data.attachments[0].text);
  };
  return (
    <div>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <Printjoke j={joke} />
      <button type="button" class="btn btn-info" onClick={handleClick}>
        Get New Joke
      </button>
    </div>
  );
}
