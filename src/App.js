import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {" "}
        Developed by{" "}
        <a target="_blank" href="https://shrinivashunnur08.github.io/ShreeFolio.com/">
          Shrinivas Hunnur
        </a>{" "}
        | All Content{" "}
        <a target="_blank" href="https://github.com/shrinivashunnur08">
        © Shrinivas Hunnur - Rights are Reserved !
        </a>
      </div>
    </>
  );
}

export default App;
