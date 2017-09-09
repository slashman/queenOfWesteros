import UnitsList from '../Units/UnitsList.component.js';
import './Locations.scss';

const Locations = ({
    locations = [],
    currentLocation,
    onLocationChange = () => {},
    onMoveUnits = () => {},
    doNextDay = () => {}
}) => {
    let location = locations[currentLocation];

    if (location) {
        let {name, house, domain, units} = location;
        return (
            <div className="location-view container">
                <div className="row selector">
                    <div className="col-1">
                        <button className="left btn"
                                onClick={onLocationChange.bind(null, currentLocation, 'decrease', locations.length)}>
                            ←
                        </button>
                    </div>
                    <div className="col-9">
                        <h2 className="location">{ name }</h2>
                    </div>
                    <div className="col-1">
                        <button className="right btn"
                                onClick={onLocationChange.bind(null, currentLocation, 'increase', locations.length)}>
                            →
                        </button>
                    </div>
                </div>
                <div className="row occupants">
                    {(house || domain)
                        ? (
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <label>Occupied by:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 house">
                                        <h4>{ house.name }</h4>
                                    </div>
                                    <div className="col-6 domain">
                                        <h4>({ domain.name })</h4>
                                    </div>
                                </div>
                            </div>
                        )
                        : null
                    }
                </div>
                <UnitsList units={units} />
                <div className="row actions">
                    { (location.domain && location.domain.name === 'Targaryen')
                        ? (<div className="col">
                            <button className="btn btn-block btn-action btn-danger"
                                onClick={onMoveUnits.bind(null, location.id)}>
                                Move Troops
                            </button>
                        </div>)
                        : null
                    }
                    <div className="col">
                        <button className="btn btn-block btn-action btn-danger"
                            onClick={doNextDay}>
                                Next Day
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Locations;
