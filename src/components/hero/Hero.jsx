import React from "react";

import "./hero.css";
const Hero = () => {
  return (
    <div className="heroSection">
    <div className="homeTop">
      <div>
        <div className="heading">
          <h1 className="title">Search Your Next Home </h1>
          <p className="text">Find new & featured property located in your local city.</p>
        </div>
        <div>
          <form className="inputForm">
            <div className="input">
              <label htmlFor="City/Street">City/Street</label>
              <input
                type="text"
                name="City/Street"
                id="City/Street"
                placeholder="Location"
              />
            </div>
            <div className="input">
              <label htmlFor="PropertyType">Property Type</label>
              <input
                type="text"
                name="PropertyType"
                id="PropertyType"
                placeholder="Property Type"
              />
            </div>
            <div className="input">
              <label htmlFor="PriceRange">Price Range</label>
              <input
                type="text"
                name="PriceRange"
                id="PriceRange"
                placeholder="Price Range"
              />
            </div>
            <div className="input">
              <p>Advace Filter</p>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
