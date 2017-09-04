import Locations from '../Locations/Locations.component.js';
import MoveUnits from '../Units/MoveUnits.component.js';
import CONSTANTS from '../../constants.js';

const LayoutHandler = ({
    view,
    locations,
    currentLocation,
    onLocationChange,
    onMoveUnits,
    onCancel
}) => {
    let targetComponent = null;
    switch (view) {
        case CONSTANTS.VIEWS.UNITS:
            targetComponent = <MoveUnits locations={locations} currentLocation={currentLocation} onUnitsMoved={onMoveUnits} onCancel={onCancel} />
            break;
        case CONSTANTS.VIEWS.LOCATIONS:
        default:
            targetComponent = <Locations locations={locations} currentLocation={currentLocation} onLocationChange={onLocationChange} onMoveUnits={onMoveUnits} />
            break;
    }
    return targetComponent;
};

export default LayoutHandler;
