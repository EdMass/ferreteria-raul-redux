
//constantes
const dataInicial = {
    array : []
}

// types
const OBTENER_CLIENTES_EXITO = 'OBTENER_CLIENTES_EXITO'

//reducer
export default function clienteReducer (state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_CLIENTES_EXITO:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

//acciones
export const obtenerClientesAccion = () => async (dispatch, getState) => {
    try {
        const res = await fetch (`https://ferreteriaraul.herokuapp.com/clientes`)
        const contenido = await res.json();
        dispatch({
            type : OBTENER_CLIENTES_EXITO,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}