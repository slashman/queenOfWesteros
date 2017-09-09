const LocationSelector = ({ onLocationChange, currentLocation, locations, name}) => {
    return (
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
    );
};
export default LocationSelector;
