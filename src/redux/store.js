import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import clienteReducer from './clienteDucks'
import productoReducer from './productoDucks'
import vendedorReducer from './vendedorDucks'

 
const rootReducer = combineReducers({
    clientes: clienteReducer,
    productos : productoReducer,
    vendedor : vendedorReducer
      
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}