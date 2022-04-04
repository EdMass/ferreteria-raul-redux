import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerVendedorAccion} from '../redux/vendedorDucks'

const Vendedor = () => {

    const dispatch = useDispatch()

    const vendedor = useSelector(store => store.vendedor.array)
    console.log(vendedor)

  return (
    <div>
        Vendedores
        <br />
        <button onClick={() => dispatch(obtenerVendedorAccion()) }>Obtener Vendedores</button>
        <ul>
            {
                vendedor.map(item =>(
                    <li key={item.id} >
                        Nombre: {item.nombre}, Documento: {item.idVendedor}, Celular: {item.celular} 
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Vendedor