import { PropTypes } from 'react'

const Locations = ({ locations }) => {
    let { name, house, domain, units } = locations[0];
    return (
        <div className="location-view">
            <div className="bar">
                <button className="left btn">LEFT</button>
                <h2 className="location">{ name }</h2>
                <button className="right btn">RIGHT</button>
            </div>
            <label>Occupied by>:</label>
            <div className="owner-data">
                <span className="house">{ house }</span>
                <span className="domain">{ domain }</span>
            </div>
            <ul className="units">
                units.map(({type, quantity}) =>
                    <li className="unit">
                        <span className="unit-type">
                            {type}
                        </span>
                        <span className="unit-quantity">
                            {quantity}
                        </span>
                    </li>
                )
            </ul>
        </div>
    );
}

export default Locations;
