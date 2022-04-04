import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerClientesAccion} from '../redux/clienteDucks'

const Clientes = () => {

    const dispatch = useDispatch()

    const clientes = useSelector(store => store.clientes.array)
    console.log(clientes)


  return (
    <div>
        Clientes
        <br />
        <button onClick={() => dispatch(obtenerClientesAccion()) }>Obtener Clientes</button>
        <ul>
            {
                clientes.map(item =>(
                    <li key={item.id} >
                        Nombre: {item.nombre}, Documento: {item.idCliente}, Celular: {item.celular} 
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Clientes