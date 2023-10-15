import React, { useState } from "react";
import { navbar } from "../../data/data";
import { Link, NavLink } from "react-router-dom";
import "../navbar/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <header>
      <div className="flex navbar">
        <div>
          <Link to="/">
            <img src="/Images/logo.png" className="logoPng" alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className={click ? "flex lists" : "flex lists showHide"}>
            {navbar.map((navItem, index) => {
              const { name, url } = navItem;
              return (
                <li key={index}>
                  <NavLink to={url} activeclassname="active">
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" signUp">
          <span>2</span>
          <NavLink to={"/register"}>
            <button>
              <i className="fa-solid fa-arrow-right"></i>Sign up
            </button>
          </NavLink>
        </div>
        <div className="barIcon" onClick={() => setClick(!click)}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
