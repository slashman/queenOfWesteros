import { createStore, combineReducers, applyMiddleware } from 'redux'
import { locations } from './reducers.js';
import stateData from '../../data/initialState';

debugger;

const logger = store => next => action => {
    let result;
   console.groupCollapsed("dispatching", action.type);
   console.log('prev state', store.getState());
   console.log('action', action);
   result = next(action);
   console.log('next state', store.getState());
   console.groupEnd();
   return result;
}

const storeFactory = (initialState = stateData) =>
    applyMiddleware(logger)(createStore)(
        combineReducers({locations}),
        stateData
    );

export default storeFactory;
