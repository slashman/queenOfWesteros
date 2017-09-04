import { PropTypes } from 'react';

const Units = ({units}) => {
    let log = "hello";
    debugger;
    return (
        <ul className="units">
            {units.map(({type, q}) =>
                <li className="unit">
                    <span className="unit-type">
                        {type.type}
                    </span>
                    <span className="unit-quantity">
                        {q}
                    </span>
                </li>
            )}
        </ul>
    )
};

Units.PropTypes = {
    units: PropTypes.array
};

export default Units;
