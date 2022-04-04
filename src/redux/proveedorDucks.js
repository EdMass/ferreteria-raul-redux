//constantes
const dataInicial = {
    array : []
}

// types
const OBTENER_PROVEEDOR_EXITO = 'OBTENER_PROVEEDOR_EXITO'

//reducer
export default function proveedorReducer (state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_PROVEEDOR_EXITO:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

//acciones
export const obtenerProveedorAccion = () => async (dispatch, getState) => {
    try {
        const res = await fetch (`https://ferreteriaraul.herokuapp.com/proveedores`)
        const contenido = await res.json();
        dispatch({
            type : OBTENER_PROVEEDOR_EXITO,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}