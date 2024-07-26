import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App">
        <h1>Student</h1>
      </header>
      <body>
        <div className="in">
          <label>Student name:</label>
          <input type="text" required />
          <label>STD:</label>
          <input type="number" required />
          <button className="btn">Submit</button>
        </div>
      </body>
      <div>
        <nav className="vertical-navbar">
          <ul>
            <ol>Student</ol>
            <ol>Mark list</ol>
            <ol>Rank</ol>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
