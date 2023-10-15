import React from "react";

import "../components/common/blogPage.css";
import PropertyList from "../components/propertyList/PropertyList";
const Blog = () => {
  return (
    <>
      <div className="BlogPeaderText">
        <div className="aboutheaderText">
          <h4>About Us</h4>
          <h1>About Us - Who We Are?</h1>
        </div>
      </div>
      <PropertyList />
    </>
  );
};

export default Blog;
