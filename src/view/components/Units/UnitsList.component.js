import React from "react";
import "./Units.scss";

const UnitsList = ({ units = [] }) => {
  return (
    <div className="row units">
      <div className="col-12">
        {units.length > 0 ? (
          <ul className="units list-unstyled">
            {units.map(({ type, aq }, index) => (
              <li className="unit" key={index}>
                <div className="media">
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">{type.name}</h5>
                    Type: {type.type}
                    <br />
                    Quantity: {aq}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="alert alert-danger" role="alert">
            This castle is <strong>empty!</strong> Move units into it to <strong>claim it.</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitsList;
