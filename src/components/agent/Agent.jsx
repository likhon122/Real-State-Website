import React from "react";

import "./agent.css";
import { agentList } from "../../data/data";
const Agent = () => {
  return (
    <div className="agentSection">
      <div className="AgentContainer">
        <div className="AgentHeading">
          <h3>Our Featured Agents</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="agets">
          {agentList.map(({ heading, image, address, userName }, index) => {
            return (
              <div className="agent" key={index}>
                <div className="agentHeading">
                  <p>{heading}</p>
                </div>
                <div className="agentBody">
                  <img src={image} alt="Image" />
                  <div className="address">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{address}</p>
                  </div>
                  <h5>{userName}</h5>
                  <div className="socialId">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="agentFooter">
                    <button className="meassageButton">
                      <i className="fa-solid fa-message"></i>
                      <p>Message</p>
                    </button>
                    <button className="phoneButton">
                      <i className="fa-solid fa-phone"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Agent;
