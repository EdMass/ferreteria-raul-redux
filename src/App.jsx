import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Redireccion from "./components/Redireccion";

function App() {



  return (
    <Router>

      <div className="container">
        <Navbar />
        <Redireccion />
        <Routes>
          <Route path="/" element={<div>Inicio... </div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<div>Admin... </div>} />
          <Route path="*" element={<h1>404 NotFoundPage</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
