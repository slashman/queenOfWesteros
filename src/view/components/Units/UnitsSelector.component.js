import {Component} from 'react';
// import UnitSelector from './UnitSelector.component.js';

export default class UnitSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {units} = this.props;

        return (
            <div>
                {units.map((unit, index) =>
                    <div className="unit" key={unit.type.id}>
                        <span className="unit">{unit.type.name}</span>
                        <input type="text" defaultValue={unit.aq} ref={`ref-${unit.type.id}`} required/>
                    </div>
                )}
            </div>
        );
    }
}


// const UnitsSelector = ({units}) => {
//     let something = 'hello';
//     return (
//         <div>
//             {units.map((unit, index) =>
//                 <UnitSelector unit={unit} key={index} />
//             )}
//         </div>
//     );
// };
//
// export default UnitsSelector;
