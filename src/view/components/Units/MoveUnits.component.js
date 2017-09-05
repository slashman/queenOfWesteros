import {Component} from 'react';

export default class MoveUnits extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    getBattleData() {
        let { locations, currentLocation} = this.props,
            location = locations[currentLocation],
            {units} = location,
            data = {};

        data.units = units.map((unit, index) => {
            let ref = `ref-${unit.type.id}`;
            return {
                type: unit.type.id,
                q: parseInt(this.refs[ref].value, 10)
            };
        }).filter((item) => item.q > 0);
        data.from = location.id,
        data.to = this.refs.select.value;

        return data;
    }

    moveUnits(event) {
        let {onUnitsMoved} = this.props,
            data = this.getBattleData();

        event.preventDefault();
        onUnitsMoved(data);
    }

    cancel(event) {
        let {onCancel, currentLocation} = this.props;
        event.preventDefault();
        onCancel(currentLocation);
    }

    targetChanged(event) {
        let {simulateAttack} = this.props,
            data = this.getBattleData();
        event.preventDefault();
        simulateAttack(data)
        // console.log('data', data);
    }

    render() {
        let {locations, currentLocation, actions} = this.props,
            location = locations[currentLocation],
            availableLocations = locations.filter((location, index) => index !== currentLocation),
            {units} = location,
            renderTarget = null;

        if (location) {
            renderTarget = (
                <div>
                    <h1>MOVE UNITS</h1>
                    {units.map((unit, index) =>
                        <div className="unit" key={unit.type.id}>
                            <span className="unit">{unit.type.name}</span>
                            <input type="text" defaultValue={unit.aq} ref={`ref-${unit.type.id}`}/>
                        </div>
                    )}
                    <select className="select" ref='select' onChange={this.targetChanged.bind(this)}>
                        { availableLocations.map((location, index) =>
                            <option key={index} value={location.id}>{location.name}</option>
                        )}
                    </select>
                    {actions.length > 0
                        ? (
                            <div className="actions-container">
                                {actions.map((action, index) =>
                                    <div className="action" key={index}>
                                        <p>{action.planDescription}</p>
                                        <p>Estimated days: {action.days}</p>
                                    </div>
                                )}
                            </div>
                        )
                        : null
                    }
                    <div>
                        <button onClick={this.moveUnits.bind(this)}>OK</button>
                        <button onClick={this.cancel.bind(this)}>CANCEL</button>
                    </div>
                </div>
            );
        }
        return renderTarget;
    }
}
//
// const MoveUnits = ({
//     locations,
//     currentLocation,
//     onUnitsMoved = (f) => f,
//     onCancel = (f) => f
// }) => {
//
//     let location = locations[currentLocation],
//         renderTarget = null;
//
//     const moveUnits = (event) => {
//         event.preventDefault();
//         let data = {
//             from: location.id,
//             to:
//         }
//         // let actionData = {
//         //     type: "MOVE_TROOPS",
//         //     from: data.from || "DRAGONSTONE",
//         //     to: data.to || "CASTERLY_ROCK",
//         //     units: data.units
//         // };
//         // onUnitsMoved(data);
//     };
//
//     const cancel = (event) => {
//         event.preventDefault();
//         onCancel(currentLocation);
//     };
//
//     if (location) {
//         let {units} = location,
//             availableLocations = locations.filter((location, index) => index !== currentLocation);
        // renderTarget = (
        //     <div>
        //         <UnitsSelector units={units} />
        //         <select className="select"
        //             onChange={}>
        //             { availableLocations.map((location, index) =>
        //                 <option key={index} value={location.id}>{location.name}</option>
        //             )}
        //         </select>
        //         <button onClick={moveUnits}>OK</button>
        //         <button onClick={cancel}>CANCEL</button>
        //     </div>
        // );
//     }
//     return renderTarget;
// };
// export default MoveUnits;
