import React from "react";

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="app-title">{title}</h1>
      </div>
    </div>
  );
};
export default Title;
