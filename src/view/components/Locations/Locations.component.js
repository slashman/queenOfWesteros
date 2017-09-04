import { PropTypes } from 'react';
import Units from '../Units/Units.component.js';
import './Locations.scss';

const Locations = ({ locations }) => {
    let { name, house, domain, units } = locations[0];
    return (
        <div className="location-view">
            <div className="bar">
                <button className="left btn">LEFT</button>
                <h2 className="location">{ name }</h2>
                <button className="right btn">RIGHT</button>
            </div>
            <label>Occupied by:</label>
            <div className="owner-data">
                <span className="house">{ house.name }</span>
                <span className="domain">{ domain.name }</span>
            </div>
            <Units units={units} />
        </div>
    );
}

export default Locations;
