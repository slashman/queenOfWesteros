const UnitsList = ({units}) => {
    return (
        <ul className="units">
            {units.map(({type, q}, index) =>
                <li className="unit" key={index}>
                    <span className="unit-type">
                        {type.name}:
                    </span>
                    <span className="unit-quantity">
                        {q}
                    </span>
                </li>
            )}
        </ul>
    );
};


export default UnitsList;
