import Title from './Title.component.js';
import Body from './Body.component.js';
import Layout from './Layout.component.js';
import Locations from '../Locations/Locations.component.js';
import MoveUnits from '../Units/MoveUnits.component.js';
import ScrollSummary from '../ScrollSummary/ScrollSummary.component.js';
import CONSTANTS from '../../constants.js';
import './Layout.scss';

const LayoutHandler = (props) => {
    const { view,
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
        } = props,
        title = CONSTANTS.TITLES[view];

    return (
        <Layout>
            <Title title={title} />
            <Body>
                {{
                    [CONSTANTS.VIEWS.SUMMARY]: (
                        <ScrollSummary scrolls={actionResults}
                                        doEnd={doEnd} />
                    ),
                    [CONSTANTS.VIEWS.UNITS]: (
                        <MoveUnits locations={locations}
                                    currentLocation={currentLocation}
                                    onCancel={onCancel}
                                    onUnitsMoved={onMoveUnitsConfirm}
                                    simulateAttack={simulateAttack}
                                    actions={actionResults}/>
                    ),
                    [CONSTANTS.VIEWS.LOCATIONS]: (
                        <Locations locations={locations}
                                    currentLocation={currentLocation}
                                    onLocationChange={onLocationChange}
                                    onMoveUnits={onMoveUnits}
                                    doNextDay={doNextDay} />
                    )
                }[view]}
            </Body>
        </Layout>
    );
};

export default LayoutHandler;
