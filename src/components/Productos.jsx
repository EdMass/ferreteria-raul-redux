import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductoAccion} from '../redux/productoDucks'

const Productos = () => {

    const dispatch = useDispatch()

    const productos = useSelector(store => store.productos.array)

    React.useEffect(() => {
        dispatch(obtenerProductoAccion()) 
      }, [dispatch])


  return (
    <div>
         <br />
       <div className="row">
        {productos.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card" style={{ minWidth: "230px" }}>
              
              <div className="card-body">
                <h5>{item.nombre}</h5>
                <p>Precio: {item.precio}</p>
                <p>Almecenados: {item.almacenados}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Productos