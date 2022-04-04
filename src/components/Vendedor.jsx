import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerVendedorAccion} from '../redux/vendedorDucks'

const Vendedor = () => {

    const dispatch = useDispatch()

    const vendedor = useSelector(store => store.vendedor.array)

    React.useEffect(() => {
        dispatch(obtenerVendedorAccion()) 
      }, [dispatch])

  return (
    <div>
         <br />
       <div className="row">
        {vendedor.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card" style={{ minWidth: "230px" }}>
              
              <div className="card-body">
                <h5>{item.nombre}</h5>
                <p>Documento: {item.idVendedor}</p>
                <p>Celular: {item.celular} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
       
    </div>
  )
}

export default Vendedor