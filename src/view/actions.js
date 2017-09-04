import CONSTANTS from './constants'

export const changeLocation = (index, movement, length) => {
    return {
        type: CONSTANTS.CHANGE_LOCATION,
        index,
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
export const cancelUnitMovements = (index) => {
    return {
        type: CONSTANTS.CANCEL_MOVE_UNITS,
        index
    };
}

export const moveUnitsConfirm = (data) => {
    return {
        type: CONSTANTS.MOVE_UNITS_CONFIRM,
        data
    }
};
