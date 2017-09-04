import CONSTANTS from '../constants.js';

export const currentLocation = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_LOCATION:
            let newId = state;
            if (action.movement === 'increase') {
                newId = (action.id + 1) % action.length;
            } else if (action.movement === 'decrease') {
                newId = (action.id - 1) < 0
                    ? action.length - 1
                    : action.id - 1
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
        default:
            return CONSTANTS.VIEWS.LOCATIONS;

    }
}
