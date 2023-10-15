import React from "react";

import { featuredProperty } from "../../data/data";
import"./features.css"
const Features = () => {
  return (
    <div className="feature">
        <div className="container">
      <div className="heading">
        <h2>Featured Property Types</h2>
        <p>Find All Type of Property.</p>
      </div>
      <div className="featureCard">
        {featuredProperty.map(({ image, houseName, propertyValid }, index) => {
          return (
            <div key={index}>
              <img src={image} alt="Image" />
              <h3>{houseName}</h3>
              <p>{propertyValid}</p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Features;
