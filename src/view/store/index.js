import { createStore, combineReducers, applyMiddleware } from 'redux'
import { locations } from './reducers.js';

const initialState = {
    locations: [
        {
            name: "The Reach",
            house: {
                name: "Tyrell"
            },
            domain: {
                name: "Targaryen"
            },
            units: [
                {
                    type: {
                        type: "Infantry",
                        name: "Unsullied"
                    },
                    q: 5
                }
            ]
        }
    ]
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
        combineReducers({locations}),
        initialState
    )

export default storeFactory;
