import React, { useState } from "react";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Clientes from "./Clientes";
import Productos from "./Productos";
import Vendedor from "./Vendedor";
import Proveedor from "./Proveedor";
import Facturas from "./Facturas";

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

  return (
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
   
  );
};

export default Admin;
