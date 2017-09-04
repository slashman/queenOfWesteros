import CONSTANTS from './constants'

export const changeLocation = (id, movement, length) => {
    return {
        type: CONSTANTS.CHANGE_LOCATION,
        id,
        movement,
        length
    };
}
export const moveUnitsStart = (id) => {
    return {
        type: CONSTANTS.MOVE_UNITS_START,
        id
    };
};
