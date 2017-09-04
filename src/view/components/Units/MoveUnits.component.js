
const MoveUnits = ({ locations, currentLocation }) => {
    let location, renderTarget;
    location = locations[currentLocation];
    renderTarget = null;

    if (location) {
        let {units} = location;
        renderTarget = (
            <div>
                Hello;
            </div>
        );
    }
    return renderTarget;
};
export default MoveUnits;
