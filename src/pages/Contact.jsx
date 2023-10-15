import React from "react";

import "../components/common/contact.css";
const Contact = () => {
  return (
    <>
      <div className="contactPageHeaderText">
        <div className="aboutheaderText">
          <h4>Contact Us</h4>
          <h1>Get Helps & Friendly Support</h1>
        </div>
      </div>
      <div className="ContactSection">
        <div className="form">
          <form>
            <h3>Fillup The Form</h3>
            <div className="NameOrEmail">
              <input type="text" placeholder="text" required/>
              <input type="email" placeholder="Email" required/>
            </div>
            <div className="subjectInput">
              <input type="text" placeholder="Subject" required/>
            </div>
            <div>
              <textarea
                cols="30"
                rows="10"
                placeholder="Write Your Comment" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
