import React from "react";
import Code from "./code";

function App() {
  return (
    <div className="App">
      <h3>Lets Start</h3>
      <h4>These are the details of students</h4>
      <Code name="Umair" age="23" location="Bangalore" />
      <Code name="Ansari" age="22" location="Mysore" />
    </div>
  );
}

export default App;
