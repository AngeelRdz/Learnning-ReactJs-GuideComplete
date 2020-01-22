import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Angeel", age: 27 },
      { name: "Alonso", age: 29 },
      { name: "Christian", age: 35 }
    ]
  };

  switchNameHanlder = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Alonso", age: 39 },
        { name: "Christian", age: 55 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Angelo', age: 27 },
        { name: event.target.value, age: 29 },
        { name: "Christian", age: 35 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <p>Description working</p>
        <button onClick={() => this.switchNameHanlder('Angeel bebe')}>Switch Me</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHanlder('Angelito')}
          changed={this.nameChangeHandler}
        >
          My hobbies: Slepping{" "}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
