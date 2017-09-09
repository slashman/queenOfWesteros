import {Component} from 'react';
import ScrollsList from '../ScrollSummary/ScrollsList.component.js';
import UnitsForm from './UnitsForm.component.js';

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
        const { locations, currentLocation } = this.props;
        const location = locations[currentLocation];
        const { units } = location;

        let data = {
            units: units.map((unit, index) => {
                let ref = `ref-${unit.type.id}`;
                return {
                    type: unit.type.id,
                    q: parseInt(this.refs.unitsData.refs[ref].value, 10)
                };
            }).filter((item) => item.q > 0),
            from: location.id,
            to: this.refs.unitsData.refs.target.value
        };
        return data;
    }

    moveUnits() {
        this.props.onUnitsMoved(this.getBattleData());
    }

    targetChanged() {
        this.props.simulateAttack(this.getBattleData());
    }

    cancel() {
        let {onCancel, currentLocation} = this.props;
        onCancel(currentLocation);
    }

    render() {
        const { locations, currentLocation, actions } = this.props;
        const location = locations[currentLocation];
        const {units} = location;
        const targetChanged = this.targetChanged.bind(this);
        let scrollActions = actions.map(({planDescription, days}) => {
                return `${planDescription} will take ${days} days`
            });

        return (
            <div className="move-units container">
                <UnitsForm ref="unitsData"
                            units={units}
                            locations={locations}
                            currentLocation={currentLocation}
                            targetChanged={targetChanged} />
                <ScrollsList scrolls={scrollActions} />
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
}
