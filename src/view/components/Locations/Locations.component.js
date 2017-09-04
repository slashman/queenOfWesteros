import UnitsList from '../Units/UnitsList.component.js';
import './Locations.scss';

const Locations = ({
    locations = [],
    currentLocation,
    onLocationChange = (f) => f,
    onMoveUnits = (f) => f,
    doNextDay = (f) => f
}) => {
    let location = locations[currentLocation];

    const prev = (event) => {
        event.preventDefault();
        onLocationChange(currentLocation, 'decrease', locations.length);
    };

    const next = (event) => {
        event.preventDefault();
        onLocationChange(currentLocation, 'increase', locations.length);
    };

    const move = (event) => {
        event.preventDefault();
        onMoveUnits(location.id)
    };

    const nextDay = (event) => {
        event.preventDefault();
        doNextDay();
    }

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
                {(location.house || location.domain)
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
                    ? <UnitsList units={location.units} />
                    : null
                }
                { (location.domain && location.domain.name === 'Targaryen')
                    ? (
                        <button className="action btn"
                            onClick={move}>
                            MOVE UNITS
                        </button>
                    )
                    : null
                }
                <button className="action btn"
                    onClick={nextDay}>
                        NEXT DAY
                </button>
            </div>
        );
    } else {
        return null;
    }
};

export default Locations;
