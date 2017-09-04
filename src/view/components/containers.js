import { connect } from 'react-redux';
import { changeLocation } from '../actions';
import Locations from './Locations/Locations.component.js';

const mapStateToProps = (state) => {
    return {
        locations: [...state.locations],
        currentLocation: 0
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLocationChange(id, movement) {
            dispatch(changeLocation(id, movement));
        }
    };
};

export const LocationsComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
