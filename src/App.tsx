import React from "react";
import "./App.css";
import Nav from "./Components/Navbar";
import Studentinfo from "./Components/Studentinfo";
import Mark from "./Components/Marklist";
import Rank from "./Components/Rank";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="App">
        <h1>Student</h1>
      </header>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Studentinfo />} />
          <Route path="/Mark" element={<Mark />} />
          <Route path="/Rank" element={<Rank />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
