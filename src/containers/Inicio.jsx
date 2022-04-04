import React from "react";
import LogoInicio from "../styles/logo/ferreteriaDonRaul.jpg";

const Inicio = () => {
  return (
    <div>
      <div className=" justify-content-center">
        <center>
          <h1>Ferreteria Don Raul</h1>
          <h2>Para iniciar sesión o regístrarte dirígete a la pesataña Login</h2>
        </center>
      </div>
      <img src={LogoInicio} className="img" alt="Logo" />
      <div className="container"></div>
    </div>
  );
};

export default Inicio;
