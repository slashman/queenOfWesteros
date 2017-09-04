import CONSTANTS from './constants'

export const changeLocation = (id, movement) => {
    return {
        type: CONSTANTS.CHANGE_LOCATION,
        id,
        movement
    };
}
export const viewLocation = (id) => {
    return {
        type: CONSTANTS.VIEW_LOCATION,
        id
    };
};
export const getLocations = () => {
    return {
        type: CONSTANTS.GET_LOCATIONS
    };
};
