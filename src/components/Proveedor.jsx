import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProveedorAccion} from '../redux/proveedorDucks'

const Proveedor = () => {

    const dispatch = useDispatch()

    const proveedor = useSelector(store => store.proveedor.array)
    console.log(proveedor)

    React.useEffect(() => {
        dispatch(obtenerProveedorAccion()) 
      }, [dispatch])

  return (
    <div>
        <br />
       <div className="row">
        {proveedor.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card" style={{ minWidth: "230px" }}>
              
              <div className="card-body">
                <h5>{item.nombre}</h5>
                <p>Documento: {item.idProveedor}</p>
                <p>Celular: {item.celular} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Proveedor
