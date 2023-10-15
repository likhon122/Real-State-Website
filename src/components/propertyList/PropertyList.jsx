import React from "react";

import { propertyList } from "../../data/data";
import "./propertyList.css";
const PropertyList = () => {
  return (
    <div className="PropertyListContainer">
      <div className="heading">
        <h3>Recent Property Listed</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="carts">
        {propertyList.map(
          ({ image, header, title, location, price, type }, index) => {
            return (
              <div className="cart" key={index}>
                <div className="image">
                  <img src={image} alt="image" />
                </div>
                <div className="cartElement">
                  <div className="header">
                    <span>{header}</span>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="cardBody">
                    <h4>{title}</h4>
                    <div>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>{location}</p>
                    </div>
                    <div className="footer">
                      <div>
                        <button>{price}</button>
                        <p>/sqft</p>
                      </div>
                      <div>
                        <p>{type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default PropertyList;
