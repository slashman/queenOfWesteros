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


export default Units;
