import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { currentLocation, locations, view, actionResults } from "./reducers";
import CONSTANTS from "../constants.js";
import * as model from "../../model/model.js";

const preloadedState = {
  view: CONSTANTS.VIEWS.LOCATIONS,
  locations: [...model.getKnownLocationInfo()],
  currentLocation: 17,
  actionResults: [],
};

const reducer = {
  currentLocation,
  locations,
  view,
  actionResults,
};

export default configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
