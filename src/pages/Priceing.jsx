import React from "react";

import "../components/common/priceing.css";
import Pacage from "../components/PlanPacages/Pacage";
const Priceing = () => {
  return (
    <>
      <div className="priceingHeaderText">
        <div className="aboutheaderText">
          <h4>30 days money back guarantee</h4>
          <h1>No Extra Fees. Friendly Support</h1>
        </div>
      </div>
      <Pacage />
    </>
  );
};

export default Priceing;
