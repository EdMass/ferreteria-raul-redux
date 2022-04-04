import React, { useState } from "react";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Clientes from "./Clientes";
import Productos from "./Productos";
import Vendedor from "./Vendedor";

const auth = getAuth(fireApp);

const Admin = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handlerCliente = () => {
    navigate("/admin/clientes");
  };

  const handlerProducto = () => {
    navigate("/admin/productos");
  };

  const handlerVendedor = () => {
    navigate("/admin/vendedor");
  };

  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe el usuario");
      setUser(auth.currentUser);
    } else {
      console.log("no existe el usuario");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="">
       <div
      class="btn-group"
      role="group"
      aria-label="Basic example"
    >
  <button type="button" className="btn btn-dark btn-lg" onClick={handlerCliente}>Clientes</button>
  <button type="button" className="btn btn-dark btn-lg" onClick={handlerProducto} >Productos</button>
  <button type="button" className="btn btn-dark btn-lg" onClick={handlerVendedor}>Vendedor</button>     
      
    </div>
    <br />
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/vendedor" element={<Vendedor />} />
      </Routes>
    </div>
   
  );
};

export default Admin;
/*
 {user && <h3>{user.email}</h3>}
<button
        className="btn btn-dark btn-sm  "
        type="button"
        style={{ margin: "0 auto" }}
        
      >
        
      </button>

*/