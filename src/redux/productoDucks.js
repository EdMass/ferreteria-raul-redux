//constantes
const dataInicial = {
    array : []
}

// types
const OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO'

//reducer
export default function productoReducer (state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_PRODUCTOS_EXITO:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

//acciones
export const obtenerProductoAccion = () => async (dispatch, getState) => {
    try {
        const res = await fetch (`https://ferreteriaraul.herokuapp.com/productos`)
        const contenido = await res.json();
        dispatch({
            type : OBTENER_PRODUCTOS_EXITO,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}