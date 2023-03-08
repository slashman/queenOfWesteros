import React from "react";
import ScrollsList from "./ScrollsList.component.js";

const ScrollSummary = ({ doEnd = () => {}, scrolls = ["No scrolls arrived today"] }) => {
  return (
    <div className="scrolls-summary container">
      <ScrollsList scrolls={scrolls} />
      <div className="row actions">
        <button className="btn btn-block btn-action btn-danger" onClick={doEnd}>
          OK
        </button>
      </div>
    </div>
  );
};
export default ScrollSummary;
