import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerFacturaAccion } from "../redux/facturaDucks";
import { generarPDF } from "./GenerarPdf";

const Facturas = () => {
  const productos = [];

  const dispatch = useDispatch();

  const factura = useSelector((store) => store.factura.array);

  const handlerFactura = (item) => {
    generarPDF(item);
  };

  console.log(productos);
  React.useEffect(() => {
    dispatch(obtenerFacturaAccion());
  }, [dispatch]);

  return (
    <div>
      <br />
      <div className="row">
        {factura.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card" style={{ minWidth: "230px" }}>
              <div className="card-body">
                <h5>Factura # {item.consecutivo}</h5>
                <h5>Ferreteria Don Raul</h5>
                <p>Productos: </p>
                {item.listaProductos.map((p) => {
                  return (
                    <div key={p.id}>
                      <p>
                        Nombre: {p.nombre} Precio:{p.precio} Cantidad: x{" "}
                      </p>
                    </div>
                  );
                })}
                {console.log(item)}

                <p>Total: {item.total} </p>
                <button
                  type="button"
                  className="btn btn-dark btn-lg page"
                  onClick={() => handlerFactura(item)}
                >
                  Imprimir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facturas;
