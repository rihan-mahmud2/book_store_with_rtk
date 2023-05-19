import React from "react";
import Home from "./components/pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Edit from "./components/pages/Edit";
import Add from "./components/pages/Add";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editBook/:id" element={<Edit />} />
        <Route path="/addBook" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
