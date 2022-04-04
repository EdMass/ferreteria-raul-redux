import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerFacturaAccion } from "../redux/facturaDucks";

const Facturas = () => {
  const productos = [];

  const dispatch = useDispatch();

  const factura = useSelector((store) => store.factura.array);

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
                {item.listaProductos.map(p => {
                    return(
                        <div key={p.id} >
                            <p>Nombre {p.nombre} {p.precio}  1</p>
                        </div>
                    )
                })}
                {console.log(item)}

                <p>Total: {item.total} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facturas;
