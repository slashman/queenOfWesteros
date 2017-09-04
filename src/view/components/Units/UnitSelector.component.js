const UnitSelector = ({unit}) => {
    let ref = `${unit.type.id}-quantity`;
    return (
        <div className="unit">
            <span className="unit">{unit.type.type}</span>
            <input type="text" value={unit.aq} ref={ref} required/>
        </div>
    );
};

export default UnitSelector;
