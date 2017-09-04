import { createStore, combineReducers, applyMiddleware } from 'redux'
import { currentLocation, locations } from './reducers.js';
import { getKnownLocationInfo } from '../../model/model.js';

const initialState = {
    locations: getKnownLocationInfo(),
    currentLocation: 0
};

const logger = (store) => (next) => (action) => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
}

const storeFactory = (state = initialState) =>
    applyMiddleware(logger)(createStore)(
        combineReducers({locations, currentLocation}),
        initialState
    )

export default storeFactory;
