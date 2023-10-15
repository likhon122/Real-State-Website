import React from "react";

import "./footer.css";
import { footerData } from "../../data/data";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="upperFooter">
        <div className="contantUpperfooter">
          <div className="text">
            <h1>Do You Have Questions ?</h1>
            <p>We'll help you to grow your career and growth.</p>
          </div>
          <div className="button">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className="mainFooter">
        <div className="mainFooterContant">
          <div className="leftSidebar">
            <img src="../../public/Images/logo-light.png" alt="Logo" />
            <h3>Do You Need Help With Anything?</h3>
            <p>
              Receive updates, hot deals, tutorials,sent straignt in
              your inbox every month.
            </p>
            <div>
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="rightSidebar">
            {footerData.map((data , index) => {
              const { title, li1, li2, li3, li4, li5, li6 } = data;
              return (
                <div className="featurs" key={index}>
                  <h3>{title}</h3>
                  <ul>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                    <li>{li4}</li>
                    <li>{li5}</li>
                    <li>{li6}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          @CopyRight by Likhon <span>LZ</span> Since 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
