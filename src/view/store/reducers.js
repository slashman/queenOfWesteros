import CONSTANTS from '../constants.js';
import * as model from '../../model/model.js';

export const currentLocation = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_LOCATION:
            let newId = state;
            if (action.movement === 'increase') {
                newId = (action.index + 1) % action.length;
            } else if (action.movement === 'decrease') {
                newId = (action.index - 1) < 0
                    ? action.length - 1
                    : action.index - 1
            }
            return newId;
        default:
            return state;
    }
};

export const locations = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.MOVE_UNITS_CONFIRM:
            return model.getKnownLocationInfo();
        default:
            return state;
    }
}

export const view = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.MOVE_UNITS_START:
            return CONSTANTS.VIEWS.UNITS
        case CONSTANTS.CANCEL_MOVE_UNITS:
            return CONSTANTS.VIEWS.LOCATIONS;
        case CONSTANTS.MOVE_UNITS_CONFIRM:
            return CONSTANTS.VIEWS.LOCATIONS;
        case CONSTANTS.NEXT_DAY:
            return CONSTANTS.VIEWS.SUMMARY;
        case CONSTANTS.SIMULATE_ATTACK:
            return CONSTANTS.VIEWS.UNITS;
        case CONSTANTS.END_TICK:
        default:
            return CONSTANTS.VIEWS.LOCATIONS;
    }
}

export const actionResults = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.SIMULATE_ATTACK:
            console.log("Action:", action);
            return [ action.results];
        case CONSTANTS.NEXT_DAY:
            return [...action.results];
        default:
            return state;
    }
}
