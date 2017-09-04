import UnitsSelector from './UnitsSelector.component.js';

const MoveUnits = ({
    locations,
    currentLocation,
    onUnitsMoved = (f) => f,
    onCancel = (f) => f
}) => {
    const moveUnits = (event) => {
        event.preventDefault();
        console.log('move');
    };

    const cancel = (event) => {
        event.preventDefault();
        onCancel(currentLocation);
    };

    let location = locations[currentLocation],
        renderTarget = null;

    if (location) {
        let {units} = location,
            availableLocations = locations.filter((location, index) => index !== currentLocation);
        renderTarget = (
            <div>
                <UnitsSelector units={units} />
                <select className="select">
                    { availableLocations.map((location, index) =>
                        <option key={index} value={location.id}>{location.name}</option>
                    )}
                </select>
                <button onClick={moveUnits}>OK</button>
                <button onClick={cancel}>CANCEL</button>
            </div>
        );
    }
    return renderTarget;
};
export default MoveUnits;
