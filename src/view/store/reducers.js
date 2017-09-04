import CONSTANTS from '../constants.js';

export const locations = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_LOCATION:
            // debugger;
            // let nextLocation;
            // if (action.movement === 'increase') {
            //     nextLocation = state.currentLocation + 1 >= state.locations.length
            //         ? 0
            //         : state.currentLocation + 1;
            // } else if (action.movement === 'decrease'){
            //     nextLocation = state.currentLocation - 1 < state.locations.length
            //         ? state.locations.length -1
            //         : state.currentLocation - 1;
            // }
            // debugger;
            return {
                ...state,
                currentLocation: 0
            }
            break;
        default:
            return state;
    }
};
