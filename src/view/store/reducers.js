import { createSlice } from "@reduxjs/toolkit";

import CONSTANTS from "../constants.js";
import * as model from "../../model/model.js";

export const currentLocation = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_LOCATION:
      let newId = state;
      if (action.movement === "increase") {
        newId = (action.index + 1) % action.length;
      } else if (action.movement === "decrease") {
        newId = action.index - 1 < 0 ? action.length - 1 : action.index - 1;
      }
      return newId;
    default:
      return state;
  }
};

export const locations = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.MOVE_UNITS_CONFIRM:
      debugger;
      const { data } = action;
      const { from, to, units } = data;
      const actionData = {
        type: CONSTANTS.MOVE_TROOPS,
        from: from || "DRAGONSTONE",
        to: to || "CASTERLY_ROCK",
        units: [...units],
      };
      model.scheduleAction(actionData);

      return [...model.getKnownLocationInfo()];

    default:
      return state;
  }
};

export const view = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.MOVE_UNITS_START:
      return CONSTANTS.VIEWS.UNITS;
    case CONSTANTS.CANCEL_MOVE_UNITS:
      return CONSTANTS.VIEWS.LOCATIONS;
    case CONSTANTS.MOVE_UNITS_CONFIRM:
      return CONSTANTS.VIEWS.LOCATIONS;
    case CONSTANTS.NEXT_DAY:
      return CONSTANTS.VIEWS.SUMMARY;
    case CONSTANTS.SIMULATE_ATTACK:
      return CONSTANTS.VIEWS.UNITS;
    case CONSTANTS.END_TICK:
    default:
      return CONSTANTS.VIEWS.LOCATIONS;
  }
};

export const actionResults = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.SIMULATE_ATTACK: {
      const { data } = action;
      const actionData = {
        type: CONSTANTS.MOVE_TROOPS,
        ...data,
      };
      const res = model.planAction(actionData);
      return [res];
    }
    case CONSTANTS.NEXT_DAY: {
      const results = model.simulateDay();
      return [...results];
    }
    default:
      return state;
  }
};
