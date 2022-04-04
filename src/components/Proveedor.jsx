import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProveedorAccion} from '../redux/proveedorDucks'

const Proveedor = () => {

    const dispatch = useDispatch()

    const proveedor = useSelector(store => store.proveedor.array)
    console.log(proveedor)

  return (
    <div>
        Proveedores
        <br />
        <button onClick={() => dispatch(obtenerProveedorAccion()) }>Obtener Proveedores</button>
        <ul>
            {
                proveedor.map(item =>(
                    <li key={item.id} >
                        Nombre: {item.nombre}, Documento: {item.idProveedor}, Celular: {item.celular} 
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Proveedor
