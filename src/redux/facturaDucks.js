
//constantes
const dataInicial = {
    array : []
}

// types
const OBTENER_FACTURAS_EXITO = 'OBTENER_FACTURAS_EXITO'

//reducer
export default function facturaReducer (state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_FACTURAS_EXITO:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

//acciones
export const obtenerFacturaAccion = () => async (dispatch, getState) => {
    try {
        const res = await fetch (`https://ferreteriaraul.herokuapp.com/facturas`)
        const contenido = await res.json();
        dispatch({
            type : OBTENER_FACTURAS_EXITO,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}