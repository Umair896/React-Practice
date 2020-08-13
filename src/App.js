import React, { Component } from "react";
import Code from "./code";
import AddCode from "./AddCode";

class App extends Component {
  state = {
    info: [
      { number: "1", name: "Umair", age: "23", location: "Bangalore" },
      { number: "2", name: "Ansari", age: "22", location: "Mysore" },
      { number: "3", name: "Ovais", age: "25", location: "Mumbai" },
    ],
  };
  addCode = (ninja) => {
    ninja.id = Math.random();
    let info = [...this.state.info, ninja];
    this.setState({
      info: info,
    });
  };
  render() {
    return (
      <div className="App">
        <h3>Lets Start</h3>
        <h4>These are the details of students</h4>
        <Code info={this.state.info} />
        <AddCode addCode={this.addCode} />
      </div>
    );
  }
}
export default App;
