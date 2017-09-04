import CONSTANTS from './constants'

export const changeLocation = (id, movement) => {
    ({
        type: CONSTANTS.CHANGE_LOCATION,
        id,
        movement
    })
}
export const viewLocation = (id) => {
    ({
        type: CONSTANTS.VIEW_LOCATION,
        id
    })
};
export const getLocations = () => {
    ({
        type:CONSTANTS.GET_LOCATIONS
    })
};
