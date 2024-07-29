import React from "react";
import "./App.css";
import Nav from "./Components/Navbar";
import Studentinfo from "./Components/Studentinfo";
import Mark from "./Components/Marklist";
import Rank from "./Components/Rank";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentsProvider } from "./Components/StudentsContext";

function App() {
  return (
    <div>
      <header className="App">
        <h1>Students-Portal</h1>
      </header>
      <Nav />
      <StudentsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Studentinfo />} />
            <Route path="/Mark" element={<Mark />} />
            <Route path="/Rank" element={<Rank />} />
          </Routes>
        </BrowserRouter>
      </StudentsProvider>
    </div>
  );
}

export default App;
