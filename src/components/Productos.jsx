import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductoAccion} from '../redux/productoDucks'

const Productos = () => {

    const dispatch = useDispatch()

    const productos = useSelector(store => store.productos.array)
    console.log(productos)


  return (
    <div>
        Productos
        <br />
        <button onClick={() => dispatch(obtenerProductoAccion()) }>Obtener Productos</button>
        <ul>
            {
                productos.map(item =>(
                    <li key={item.id} >
                        Nombre: {item.nombre}, Precio: {item.precio}, Almecenados: {item.almacenados} 
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Productos