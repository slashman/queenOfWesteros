import { connect } from 'react-redux';
import { changeLocation } from '../actions';
import Locations from './Locations/Locations.component.js';

const mapStateToProps = ({locations, currentLocation}) => {
    return {
        locations: [...locations],
        currentLocation: currentLocation
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLocationChange(id, movement, length) {
            dispatch(changeLocation(id, movement, length));
        }
    };
};

export const LocationsComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
