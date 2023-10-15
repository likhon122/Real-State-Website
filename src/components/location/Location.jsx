import React from "react";
import "./location.css";
import { locationData } from "../../data/data";

const Location = () => {
  return (
    <div className="LocationContainer">
      <div className="heading">
        <h3>Explore By Location</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="locationCards">
        {locationData.map(
          ({ image, title, peragraph1, peragraph2, peragraph3 }, index) => {
            return (
              <div className="locationImages" key={index}>
                <div className="image">
                  <img src={image} alt="Image" />
                </div>
                <div className="overlay">
                  <h3>{title}</h3>
                  <div>
                    <p>{peragraph1}</p>
                    <p>{peragraph2}</p>
                    <p>{peragraph3}</p>
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

export default Location;
