import Units from '../Units/Units.component.js';
import './Locations.scss';

const Locations = ({ locations = [], currentLocation, onLocationChange=f=>f }) => {

    const prev = (event) => {
        event.preventDefault();
        onLocationChange(currentLocation, 'decrease', locations.length);
    };

    const next = (event) => {
        event.preventDefault();
        onLocationChange(currentLocation, 'increase', locations.length);
    };

    let location = locations[currentLocation];
    if (location) {
        let {name} = location;
        return (
            <div className="location-view">
                <div className="bar">
                    <button className="left btn"
                        onClick={prev}
                    >LEFT</button>
                    <h2 className="location">{ name }</h2>
                    <button className="right btn"
                        onClick={next}
                    >RIGHT</button>
                </div>
                {(location.house && location.domain)
                    ? (
                        <div>
                            <label>Occupied by:</label>
                            <div className="owner-data">
                                <span className="house">{ location.house.name }</span>
                                <span className="domain"> ({ location.domain.name })</span>
                            </div>
                        </div>
                    )
                    : null
                }
                { (location.units && location.units.length > 0)
                    ? <Units units={location.units} />
                    : null
                }
            </div>
        );
    } else {
        return null;
    }
}

export default Locations;
