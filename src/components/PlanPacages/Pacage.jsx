import React from "react";

import { planList } from "../../data/data";
import './pacage.css';
const Pacage = () => {
  return (
    <div className="PlanPacageContainer">
      <div className="heading">
        <h3>Select Your Package</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
      </div>
      <div className="plans">
        {planList.map((plan,index) => {
          const {
            title,
            price,
            titleDescription,
            topTitle,
            cheekClass,
            p1,
            p2,
            p3,
            p4,
            p5,
            rejectClass,
            p4CheekClass,
          } = plan;
          return (
            <div className="plan" key={index}>
              <p className="topTitle">{topTitle}</p>
              <div className="planHeading">
                <h3>{title}</h3>
                <h1>{price}</h1>
                <p>{titleDescription}</p>
              </div>
              <div className="planBody">
                <ul>
                  <li>
                    <i className={cheekClass}></i>
                    <p>{p1}</p>
                  </li>
                  <li>
                    <i className={cheekClass}></i>
                    <p>{p2}</p>
                  </li>
                  <li>
                    <i className={cheekClass}></i>
                    <p>{p3}</p>
                  </li>
                  <li>
                    <i className={p4CheekClass ? p4CheekClass : rejectClass}>
                      {" "}
                    </i>
                    <p>{p4}</p>
                  </li>
                  <li>
                    <i className={rejectClass ? rejectClass : cheekClass}></i>
                    <p>{p5}</p>
                  </li>
                </ul>
              </div>
              <div className="planFooter">
                <button>{title}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pacage;
