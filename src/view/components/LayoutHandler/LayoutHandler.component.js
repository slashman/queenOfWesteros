import Locations from '../Locations/Locations.component.js';
import MoveUnits from '../Units/MoveUnits.component.js';
import ActionsSummary from '../ActionsSummary/ActionsSummary.component.js';
import CONSTANTS from '../../constants.js';

const LayoutHandler = ({
    view,
    locations,
    currentLocation,
    onLocationChange,
    onMoveUnits,
    onMoveUnitsConfirm,
    onCancel,
    doNextDay,
    actionResults,
    doEnd,
    simulateAttack
}) => {
    let targetComponent = null;
    switch (view) {
        case CONSTANTS.VIEWS.SUMMARY:
            targetComponent = <ActionsSummary actions={actionResults} doEnd={doEnd} />
            break;
        case CONSTANTS.VIEWS.UNITS:
            targetComponent = <MoveUnits locations={locations} currentLocation={currentLocation} onCancel={onCancel} onUnitsMoved={onMoveUnitsConfirm} simulateAttack={simulateAttack} actions={actionResults}/>
            break;
        case CONSTANTS.VIEWS.LOCATIONS:
        default:
            targetComponent = <Locations locations={locations} currentLocation={currentLocation} onLocationChange={onLocationChange} onMoveUnits={onMoveUnits} doNextDay={doNextDay} />
            break;
    }
    return targetComponent;
};

export default LayoutHandler;
