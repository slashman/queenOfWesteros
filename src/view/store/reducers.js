import CONSTANTS from '../constants.js';

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
            return newId
        default:
            return state;
    }
};

export const locations = (state = {}, action) => {
    switch (action.type) {
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
        default:
            return CONSTANTS.VIEWS.LOCATIONS;

    }
}
