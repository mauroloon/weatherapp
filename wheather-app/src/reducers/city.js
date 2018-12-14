import { SET_CITY } from './../actions';

//para actualizar el estado // NUNCA AGREGAR A TRAVES DEL STATE.PROP 
export const city = (state = {}, action) => {
    switch(action.type){
        case SET_CITY:
            return {...state , city: action.payload}; //si existe city, se cambia, sino se agrega
        default:
            return state;   
    }
}