import React from "react";
import Led from "../../Led";

const OptionButton = ({ name, on, onClick }) => {
  const handleClick = name => {
    onClick && onClick(name);
  };

  return (
    <>
      <Led on={on} />
      <button onClick={() => handleClick(name)} />
    </>
  );
};

export default OptionButton;
