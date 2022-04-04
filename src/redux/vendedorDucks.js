//constantes
const dataInicial = {
    array : []
}

// types
const OBTENER_VENDEDORES_EXITO = 'OBTENER_VENDEDORES_EXITO'

//reducer
export default function vendedorReducer (state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_VENDEDORES_EXITO:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

//acciones
export const obtenerVendedorAccion = () => async (dispatch, getState) => {
    try {
        const res = await fetch (`https://ferreteriaraul.herokuapp.com/vendedores`)
        const contenido = await res.json();
        dispatch({
            type : OBTENER_VENDEDORES_EXITO,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}
