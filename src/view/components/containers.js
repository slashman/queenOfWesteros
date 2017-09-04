import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLocation, moveUnitsStart, cancelUnitMovements, moveUnitsConfirm } from '../actions';
// import Locations from './Locations/Locations.component.js';
import LayoutHandler from './LayoutHandler/LayoutHandler.component.js';


export const ViewHandlerComponent = connect(
    ({view, locations, currentLocation}) => {
        return {
            view,
            locations: [...locations],
            currentLocation
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
                console.log("in dispatch");
                dispatch(moveUnitsConfirm(data));
            }
        };
    }
)(LayoutHandler);
