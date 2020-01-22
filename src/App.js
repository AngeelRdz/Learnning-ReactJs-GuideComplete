import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <p>Description working</p>
        <Person name="Angeel" age="27" />
        <Person name="Alonzo" age="29">
          My hobbies: Slepping{" "}
        </Person>
      </div>
    );
  }
}

export default App;
