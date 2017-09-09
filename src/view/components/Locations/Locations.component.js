import UnitsList from '../Units/UnitsList.component.js';
import LocationSelector from './LocationSelector.component.js';
import LocationOccupants from './LocationOccupants.component.js';
import './Locations.scss';

const Locations = (props) => {
    const {
            locations = [],
            currentLocation,
            onLocationChange = () => {},
            onMoveUnits = () => {},
            doNextDay = () => {}
        } = props,
        location = locations[currentLocation];

    if (location) {
        let {name, house, domain, units} = location;
        return (
            <div className="location-view container">
                <LocationSelector onLocationChange={onLocationChange}
                                    currentLocation={currentLocation}
                                    locations={locations}
                                    name={name}/>
                <LocationOccupants house={house} domain={domain} />
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
