import React from "react";
import "./Button.scss";

const Button = ({ render, label }) => {
  return (
    <div className="button-wrapper">
      {render(label)}
      <label>{label}</label>
    </div>
  );
};

export default Button;
