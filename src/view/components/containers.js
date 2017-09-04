import { connect } from 'react-redux';
import { changeLocation, moveUnitsStart, cancelUnitMovements } from '../actions';
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
                dispatch(cancelUnitMovements(index))
            }
        };
    }
)(LayoutHandler);

// export const LocationsComponent = connect(
//     ({locations, currentLocation}) => { //mapStateToProps
//         return {
//             locations: [...locations],
//             currentLocation
//         }
//     },
//     (dispatch) => {     //mapDispatchToProps
//         return {
//             onLocationChange(id, movement, length) {
//                 dispatch(changeLocation(id, movement, length));
//             },
//             onMoveUnits(id) {
//                 dispatch(moveUnitsStart(id));
//             }
//         };
//     }
// )(Locations);
