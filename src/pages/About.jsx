import React from "react";

import "../components/common/About.css";
import myImage from "../../public/Images/about/aboutPageStory.jpg";
const About = () => {
  return (
    <div>
      <div className="headerText">
        <div className="aboutheaderText">
          <h4>About Us</h4>
          <h1>About Us - Who We Are?</h1>
        </div>
      </div>
      <div className="mainAboutSection">
        <div className="rightSide">
          <h2>Our Agency Story</h2>
          <p>Check out our company story and work process</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            maxime quam perferendis. Labore, repudiandae. Doloribus voluptatibus
            unde commodi soluta, suscipit beatae? Nulla, quas quo modi libero
            odio impedit magnam exercitationem.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            laboriosam placeat optio aperiam laborum ratione minus quaerat
            dolorum illum animi!
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            consectetur!
          </p>
          <button>More About Us</button>
        </div>
        <div className="leftSide">
          <img src={myImage} alt="About Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
