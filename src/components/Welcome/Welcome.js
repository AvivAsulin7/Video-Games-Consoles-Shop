import React from "react";
import "./Welcome.css";
import { useState } from "react";

function Welcome() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1 className="title">VIDEO GAMES STORE</h1>
      <h2>Hello {headingText}</h2>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button className="welcome" type="submit">
          Welcome
        </button>
      </form>
    </div>
  );
}

export default Welcome;
