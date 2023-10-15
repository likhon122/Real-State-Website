import React, { useState } from "react";

import "./resistration.css";
const InputElement = (props) => {
  const {
    id,
    onChange,
    icon,
    passwordToggle,
    labelValue,
    Error,
    ...inputValue
  } = props;

  const [focusd, setFocusd] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleBlur = () => {
    setFocusd(true);
  };
  const handleChange = () => {
    setToggle(!toggle);
    passwordToggle(toggle);
  };

  return (
    <div className="formInput">
      <label htmlFor={labelValue}>{labelValue}</label>
      <input
        {...inputValue}
        onChange={onChange}
        id={labelValue}
        autoComplete="off"
        onBlur={handleBlur}
        onFocus={() => inputValue.name == "confirmPassword" && setFocusd(true)}
        focusd={focusd.toString()}
      />
      <div onClick={handleChange} className="icon">
        <div className="icon2">{icon}</div>
      </div>
      <span className="span">{Error}</span>
    </div>
  );
};

export default InputElement;
