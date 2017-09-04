import CONSTANTS from './constants'

export const changeLocation = (id, movement, length) => {
    return {
        type: CONSTANTS.CHANGE_LOCATION,
        id,
        movement,
        length
    };
}
export const viewLocation = (id) => {
    return {
        type: CONSTANTS.VIEW_LOCATION,
        id
    };
};
