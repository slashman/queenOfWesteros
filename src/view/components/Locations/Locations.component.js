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
        let {name, house, domain} = location;
        return (
            <div className="location-view container">
                <div className="row selector">
                    <div className="col-3">
                        <button className="left btn"
                                onClick={prev}>
                            ←
                        </button>
                    </div>
                    <div className="col-6">
                        <h2 className="location">{ name }</h2>
                    </div>
                    <div className="col-3">
                        <button className="right btn"
                                onClick={next}>
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
                                        <h4>{ domain.name }</h4>
                                    </div>
                                </div>
                            </div>
                        )
                        : null
                    }
                </div>
                <div className="row units">
                    { (location.units && location.units.length > 0)
                        ? <UnitsList units={location.units} />
                        : <div className="col-12">
                            <div className="alert alert-info" role="alert">
                                This castle is <strong>empty!</strong> Move units into it to <strong>claim it.</strong>
                            </div>
                        </div>
                    }
                </div>
                <div className="row actions">
                    { (location.domain && location.domain.name === 'Targaryen')
                        ? (<div className="col">
                            <button className="btn btn-block btn-action btn-danger"
                                onClick={move}>
                                Move Troops
                            </button>
                        </div>)
                        : null
                    }
                    <div className="col">
                        <button className="btn btn-block btn-action btn-danger"
                            onClick={nextDay}>
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
