import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div data-ns-test = "MyProject" id="main">
    <h1 data-ns-test = "project-name">My Project</h1>
    <p data-ns-test = "project-description">This is my first project</p>
    </div>
  )
}


export default App;
