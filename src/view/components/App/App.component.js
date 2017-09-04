import { Component } from 'react';
// import {LocationsComponent} from '../containers.js';
import Locations from '../Locations/Locations.component.js';
import stateData from '../../../data/initialState';
const App = () => {
    return (
        <Locations locations={stateData.locations} currentLocation={stateData.currentLocation} />
    );
}

export default App;
