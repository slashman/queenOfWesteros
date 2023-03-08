import React, { Component } from "react";

export default class UnitsForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { units, locations, currentLocation, targetChanged } = this.props;
    const location = locations[currentLocation];
    const availableLocations = locations.filter((location, index) => index !== currentLocation);
    return (
      <div className="row">
        <div className="col-12">
          <form noValidate>
            {units.map((unit, index) => (
              <div className="form-group" key={unit.type.id}>
                <label htmlFor={unit.type.id}>
                  <strong>{unit.type.name}</strong> ({unit.type.type})
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={unit.aq}
                  ref={`ref-${unit.type.id}`}
                  id={unit.type.id}
                />
              </div>
            ))}
            <div className="form-group">
              <label htmlFor="target">Target</label>
              <select className="form-control" ref="target" id="target" onChange={targetChanged}>
                {availableLocations.map((location, index) => (
                  <option key={index} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
