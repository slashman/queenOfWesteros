import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLocation, moveUnitsStart, cancelUnitMovements, moveUnitsConfirm, nextDay, endTick } from '../actions';
import LayoutHandler from './LayoutHandler/LayoutHandler.component.js';


export const ViewHandlerComponent = connect(
    ({view, locations, currentLocation, actionResults}) => {
        return {
            view,
            locations: [...locations],
            currentLocation,
            actionResults: [...actionResults]
        }
    },
    (dispatch) => {     //mapDispatchToProps
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
                dispatch(nextDay())
            },
            doEnd() {
                dispatch(endTick())
            }
        };
    }
)(LayoutHandler);
