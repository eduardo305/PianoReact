import React from "react";
import classNames from "classnames";

import "./PowerButton.scss";

const PowerButton = ({ on, onClick }) => {
  const cssClass = classNames("power-button", {
    "power-button--on": on
  });

  return <button className={cssClass} onClick={onClick} />;
};

export default PowerButton;
