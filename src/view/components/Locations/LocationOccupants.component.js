const LocationOccupants = ({ house, domain }) => {
    return (
        <div className="row occupants">
            {(house || domain)
                ? (
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <label>Occupied by:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 house">
                                <h4>{ house.name }</h4>
                            </div>
                            <div className="col-6 domain">
                                <h4>({ domain.name })</h4>
                            </div>
                        </div>
                    </div>
                )
                : null
            }
        </div>
    );
};
export default LocationOccupants;
