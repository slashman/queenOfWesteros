import { connect } from 'react-redux';
import { changeLocation } from '../actions';
import Locations from './Locations/Locations.component.js';

export const LocationsComponent = connect(
    state =>
    ({
        locations: [...state.locations],
        currentLocation: 0
    }),
    dispatch =>
    ({
        onLocationChange(id, movement) {
            dispatch(changeLocation(id, movement))
        }
    })
)(Locations);
