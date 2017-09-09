import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers.js';
import * as model from '../../model/model.js';
import CONSTANTS from '../constants.js';

const initialState = {
    view: CONSTANTS.VIEWS.LOCATIONS,
    locations: model.getKnownLocationInfo(),
    currentLocation: 17,
    actionResults: []
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
        combineReducers({...reducers}),
        initialState
    )

export default storeFactory;
