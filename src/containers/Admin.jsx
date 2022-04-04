import React, { useState } from "react";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Clientes from "../components/Clientes";
import Productos from "../components/Productos";
import Vendedor from "../components/Vendedor";
import Proveedor from "../components/Proveedor";
import Facturas from "../components/Facturas";

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

  const handlerProveedor = () => {
    navigate("/admin/proveedor");
  };

  const handlerFacturas = () => {
    navigate("/admin/factura");
  };

  React.useEffect(() => {
    if (auth.currentUser) {
      
      setUser(auth.currentUser);
    } else {
    
      navigate("/login");
    }
  }, [navigate]);

  return user !== null ? (
    <div className="">
       <div
      className="btn-group"
      role="group"
      aria-label="Basic example"
    >
  <button type="button" className="btn btn-dark btn-lg page" onClick={handlerCliente}>Clientes</button>
  <button type="button" className="btn btn-dark btn-lg page" onClick={handlerProducto} >Productos</button>
  <button type="button" className="btn btn-dark btn-lg page" onClick={handlerVendedor}>Vendedor</button>  
  <button type="button" className="btn btn-dark btn-lg page" onClick={handlerProveedor}>Proveedor</button>
  <button type="button" className="btn btn-dark btn-lg page" onClick={handlerFacturas}>Factura</button>     
      
    </div>
    <br />
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/vendedor" element={<Vendedor />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/factura" element={<Facturas />} />
      </Routes>
    </div>
   
  ): (
    <center>
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </center>
  );
};

export default Admin;
