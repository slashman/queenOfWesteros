import CONSTANTS from "./constants";
import * as model from "../model/model.js";

export const changeLocation = (index, movement, length) => {
  return {
    type: CONSTANTS.CHANGE_LOCATION,
    index,
    movement,
    length,
  };
};
export const moveUnitsStart = (id) => {
  return {
    type: CONSTANTS.MOVE_UNITS_START,
    id,
  };
};
export const cancelUnitMovements = (index) => {
  return {
    type: CONSTANTS.CANCEL_MOVE_UNITS,
    index,
  };
};

export const moveUnitsConfirm = (data) => {
  return {
    type: CONSTANTS.MOVE_UNITS_CONFIRM,
    data,
  };
};

export const nextDay = () => {
  return {
    type: CONSTANTS.NEXT_DAY,
  };
};

export const endTick = () => {
  return {
    type: CONSTANTS.END_TICK,
  };
};

export const simulateAttack = (data) => {
  return {
    type: CONSTANTS.SIMULATE_ATTACK,
    data,
  };
};
