import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = connect(
  ({ view, locations, currentLocation, actionResults }) => {
    //mapStateToProps
    return {
      view,
      locations: [...locations],
      currentLocation,
      actionResults: [...actionResults],
    };
  },
  (dispatch) => {
    //mapDispatchToProps
    return {
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
  }
)(LayoutHandler);

export default App;
