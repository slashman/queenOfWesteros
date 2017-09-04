import {Component} from 'react';
// import UnitSelector from './UnitSelector.component.js';

export default class UnitSelector extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let {units} = this.props;

        return (
            <div>
                
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
