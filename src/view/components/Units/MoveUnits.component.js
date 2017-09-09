import {Component} from 'react';

import './MoveUnits.scss';

export default class MoveUnits extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount(){
        this.targetChanged();
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
        data.to = this.refs.target.value;

        return data;
    }

    moveUnits() {
        let {onUnitsMoved} = this.props,
            data = this.getBattleData();

        onUnitsMoved(data);
    }

    cancel() {
        let {onCancel, currentLocation} = this.props;
        onCancel(currentLocation);
    }

    targetChanged() {
        let {simulateAttack} = this.props,
            data = this.getBattleData();
        simulateAttack(data)
    }

    render() {
        let {locations, currentLocation, actions} = this.props,
            location = locations[currentLocation],
            availableLocations = locations.filter((location, index) => index !== currentLocation),
            {units} = location,
            renderTarget = null;

        if (location) {
            renderTarget = (
                <div className="move-units container">
                    <div className="row">
                        <div className="col-12">
                            <form noValidate>
                                {units.map((unit, index) =>
                                    <div className="form-group" key={unit.type.id}>
                                        <label htmlFor={unit.type.id}>
                                            <strong>{unit.type.name}</strong> ({unit.type.type})
                                        </label>
                                        <input type="text" className="form-control" defaultValue={unit.aq} ref={`ref-${unit.type.id}`} id={unit.type.id} />
                                    </div>
                                )}
                                <div className="form-group">
                                    <label htmlFor="target">Target</label>
                                    <select className="form-control" ref='target' id="target" onChange={this.targetChanged.bind(this)}>
                                        { availableLocations.map((location, index) =>
                                            <option key={index} value={location.id}>{location.name}</option>
                                        )}
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="list-unstyled">
                                { (actions && actions.length > 0)
                                    ? actions.map((action, index) =>
                                        <li className="action" key={index}>
                                            <blockquote className="blockquote">
                                                <p>{action.planDescription}</p>
                                                <footer>Estimated days: {action.days}</footer>
                                            </blockquote>
                                        </li>)
                                    : null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="row actions">
                        <div className="col">
                            <button className="btn btn-block btn-action btn-danger"
                                    onClick={this.moveUnits.bind(this)}>
                                Ok
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-block btn-action btn-danger"
                                    onClick={this.cancel.bind(this)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        return renderTarget;
    }
}
