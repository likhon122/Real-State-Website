import React, { useState } from "react";
import "./resistration.css";

import InputElement from "./InputElement";
const Resister = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [toggle, setToggle] = useState(false);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const passwordToggle = (value) => {
    setToggle(value);
  };

  const cheekToggle = () => {
    if (toggle == true) {
      return <i className="fa-solid fa-eye"></i>;
    } else if (toggle == false) {
      return <i className="fa-solid fa-eye-slash"></i>;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      userName: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });
  };
  const inputs = [
    {
      id: 1,
      name: "userName",
      labelValue: "UserName",
      type: "text",
      placeholder: "User Name",
      Error:
        "User Name must have 3-16 charecter and don't use space and any spacial charecter!",
      pattern: `^[a-zA-Z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 2,
      name: "email",
      labelValue: "Email",
      type: "email",
      placeholder: "Enter Email",
      Error: "Your email is valid !",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      labelValue: "Birthday",
      type: "date",
      required: true,
    },
    {
      id: 4,
      name: "password",
      labelValue: "Password",
      type: toggle == true ? "text" : "password",
      placeholder: "Enter Password",
      Error:
        "Password shuld be 6-16 charecters and include 1 Uppercse , 1 Lowercse and 1 any Special charecter.",
      pattern: `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{6,16}$`,
      icon: cheekToggle(),
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      labelValue: "Confirm Password",
      type: toggle == true ? "text" : "password",
      placeholder: "Confirm Password",
      Error: "Password doesn't match!",
      pattern: values.password,
      icon: cheekToggle(),
      required: true,
    },
  ];
  return (
    <div className="main">
      <div className="formDiv">
        <div className="Logo">
          <h3>Register</h3>
          <div className="formStart">
            <form onSubmit={submitHandler}>
              {inputs.map((input) => (
                <InputElement
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  passwordToggle={passwordToggle}
                />
              ))}
              <div className="buttons">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
