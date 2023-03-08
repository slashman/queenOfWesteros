import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLocation,
  moveUnitsStart,
  cancelUnitMovements,
  moveUnitsConfirm,
  nextDay,
  endTick,
  simulateAttack,
} from "../../actions.js";
import LayoutHandler from "../Layout/LayoutHandler.component.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();

  // state selectors
  const view = useSelector(({ view }) => view);
  const locations = useSelector(({ locations }) => locations);
  const currentLocation = useSelector(({ currentLocation }) => currentLocation);
  const actionResults = useSelector(({ actionResults }) => actionResults);

  // redux actions
  const actions = {
    onLocationChange(index, movement, length) {
      dispatch(changeLocation(index, movement, length));
    },
    onMoveUnits(id) {
      dispatch(moveUnitsStart(id));
    },
    onCancel(index) {
      dispatch(cancelUnitMovements(index));
    },
    onMoveUnitsConfirm(data) {
      dispatch(moveUnitsConfirm(data));
    },
    doNextDay() {
      dispatch(nextDay());
    },
    doEnd() {
      dispatch(endTick());
    },
    simulateAttack(data) {
      dispatch(simulateAttack(data));
    },
  };

  const props = {
    view,
    locations,
    currentLocation,
    actionResults,
    ...actions,
  };

  return <LayoutHandler {...props} />;
};

export default App;
