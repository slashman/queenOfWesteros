import Locations from '../Locations/Locations.component.js';
import MoveUnits from '../Units/MoveUnits.component.js';
import ActionsSummary from '../ActionsSummary/ActionsSummary.component.js';
import CONSTANTS from '../../constants.js';
import './Layout.scss';

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
    let targetComponent = null,
        title;
    switch (view) {
        case CONSTANTS.VIEWS.SUMMARY:
            title = "Day Summary";
            targetComponent = <ActionsSummary actions={actionResults} doEnd={doEnd} />
            break;
        case CONSTANTS.VIEWS.UNITS:
            title = "Move Units";
            targetComponent = <MoveUnits locations={locations} currentLocation={currentLocation} onCancel={onCancel} onUnitsMoved={onMoveUnitsConfirm} simulateAttack={simulateAttack} actions={actionResults}/>
            break;
        case CONSTANTS.VIEWS.LOCATIONS:
        default:
            title = "Map Room";
            targetComponent = <Locations locations={locations} currentLocation={currentLocation} onLocationChange={onLocationChange} onMoveUnits={onMoveUnits} doNextDay={doNextDay} />
            break;
    }

    return (
        <div className="app-container">
            <div className="row">
                <div className="col-12">
                    <h1 className="app-title">{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    {targetComponent}
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    );
};

export default LayoutHandler;
