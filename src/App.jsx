import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>          
          <Route path="/" element={<div>Inicio... </div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<div>Admin... </div>} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
