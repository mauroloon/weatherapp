import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from '../reducers/city';

const initialState = {
  city: 'Santiago'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//el middleware es para hacer llamadas fetch con redux (thunk)
export const store = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk))); 
  