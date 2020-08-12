import React, { Component } from "react";

class Code extends Component {
  render() {
    const { name, age, location } = this.props;
    return (
      <div className="details">
        <div>Name : {name}</div>
        <div>age : {age}</div>
        <div>location: {location}</div>
      </div>
    );
  }
}

export default Code;
