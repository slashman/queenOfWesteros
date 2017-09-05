import CONSTANTS from './constants';
import * as model from '../model/model.js';

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
    let actionData = {
        type: "MOVE_TROOPS",
        from: data.from || "DRAGONSTONE",
        to: data.to || "CASTERLY_ROCK",
        units: data.units
    };
    model.scheduleAction(actionData);
    return {
        type: CONSTANTS.MOVE_UNITS_CONFIRM,
        data
    }
};

export const nextDay = () => {
    let results = model.simulateDay();
    return {
        type: CONSTANTS.NEXT_DAY,
        results
    };
};

export const endTick = () => {
    return {
        type: CONSTANTS.END_TICK
    }
}

export const simulateAttack = (data) => {
    let actionData = {
        type: "MOVE_TROOPS",
        ...data
    },
    results = model.planAction(actionData);
    return {
        type: CONSTANTS.SIMULATE_ATTACK,
        results
    };
}
