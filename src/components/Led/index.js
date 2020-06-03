import React from "react";
import classNames from "classnames";

import "./Led.scss";

const Led = ({ on }) => {
  const cssClass = classNames("led", {
    "led--on": on
  });

  return <div className={cssClass} />;
};

export default Led;
