import React from "react";

import './awards.css'
const Awards = () => {
  return (
    <div className="awards">
  <div className="AwardContainer">
    <div className="awardsHeading">
      <h3>Our Awards</h3>
      <h4>
        Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
      </h4>
    </div>
    <div className="rewardsCenterWrapper">
      <div className="rewardsOverView">
        <div>
          <i className="fa-solid fa-trophy"></i>
          <h1>32M</h1>
          <p>Blue Burmin Award</p>
        </div>
        <div>
          <i className="fa-solid fa-bag-shopping"></i>
          <h1>43M</h1>
          <p>Mimo X11 Award</p>
        </div>
        <div>
          <i className="fa-solid fa-lightbulb"></i>
          <h1>50M</h1>
          <p>Australian UGC Award</p>
        </div>
        <div>
          <i className="fa-regular fa-heart"></i>
          <h1>23M</h1>
          <p>IITCA Green Award</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Awards;
