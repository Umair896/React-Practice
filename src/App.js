import React, { Component } from "react";
import Code from "./code";

class App extends Component {
  state = {
    info: [
      { number: "1", name: "Umair", age: "23", location: "Bangalore" },
      { number: "2", name: "Ansari", age: "22", location: "Mysore" },
      { number: "3", name: "Ovais", age: "25", location: "Mumbai" },
    ],
  };
  render() {
    return (
      <div className="App">
        <h3>Lets Start</h3>
        <h4>These are the details of students</h4>
        <Code info={this.state.info} />
      </div>
    );
  }
}
export default App;
