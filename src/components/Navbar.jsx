import React from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <main>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand " to="/">Ferreteria Don Raul</Link>
          <div>
            <div className="d-flex">
              <NavLink className="btn btn-dark mr-2" to="/" >Inicio</NavLink>
              <NavLink className="btn btn-dark mr-2" to="/admin">Admin</NavLink>              
              <NavLink className="btn btn-dark mr-2" to="/login">Login</NavLink>  
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
