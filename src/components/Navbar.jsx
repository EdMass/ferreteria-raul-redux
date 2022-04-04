import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(fireApp);

function Navbar(props) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <main>
      <nav className="navbar navbar-dark page">
        <div className="container">
          <Link className="navbar-brand " to="/">
            Ferreteria Don Raul
          </Link>
          <div>
            <div className="d-flex">
              <NavLink className="btn btn-dark mr-2" to="/">
                Inicio
              </NavLink>
              {props.firebaseUser !== null ? (
                <NavLink className="btn btn-dark mr-2" to="/admin">
                  Admin
                </NavLink>
              ) : null}

              {props.firebaseUser !== null ? (
                <button
                  className="btn btn-dark mr-2"
                  onClick={() => cerrarSesion()}
                >
                  Cerrar Sesion
                </button>
              ) : (
                <NavLink className="btn btn-dark mr-2" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
