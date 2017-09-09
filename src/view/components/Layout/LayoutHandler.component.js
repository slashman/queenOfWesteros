import Title from './Title.component.js';
import Body from './Body.component.js';
import Layout from './Layout.component.js';
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
            title = "Raven Scrolls";
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
        <Layout>
            <Title title={title} />
            <Body>
                {targetComponent}
            </Body>
        </Layout>
    );
};

export default LayoutHandler;
