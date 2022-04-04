import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerClientesAccion} from '../redux/clienteDucks'

const Clientes = () => {

    const dispatch = useDispatch()

    const clientes = useSelector(store => store.clientes.array)

    React.useEffect(() => {
        dispatch(obtenerClientesAccion()) 
      }, [dispatch])

  return (
    <div>
        <br />
       <div className="row">
        {clientes.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card" style={{ minWidth: "230px" }}>
              
              <div className="card-body">
                <h5>{item.nombre}</h5>
                <p>Documento: {item.idCliente}</p>
                <p>Celular: {item.celular} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Clientes

