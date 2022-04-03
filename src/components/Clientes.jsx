import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerClientesAccion} from '../redux/clienteDucks'

const Clientes = () => {

    const dispatch = useDispatch()

  return (
    <div>
        Clientes
        <br />
        <button onClick={() => dispatch(obtenerClientesAccion()) }>Obtener Clientes</button>
    </div>
  )
}

export default Clientes