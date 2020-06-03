import React, { useState, useRef } from "react";
import classNames from "classnames";

import "./Key.scss";

const Key = ({ color = "white", note, audioPath, on }) => {
  const [pressed, setPressed] = useState(false);
  const keyRef = useRef();

  const cssClass = classNames("key", {
    "key--white": color === "white",
    "key--black": color === "black",
    "key--pressed": pressed
  });

  const playAudio = () => {
    if (keyRef.current) {
      keyRef.current.currentTime = 0;
      keyRef.current.play();
    }
  };

  const pressKey = () => {
    setPressed(!pressed);
    playAudio();
  };

  const handleMouseDown = () => {
    pressKey();
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const handleKeyDown = () => {
    pressKey();
  };

  const handleKeyUp = () => {
    setPressed(false);
  };

  return (
    <li
      className={cssClass}
      data-note={note}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      {audioPath && (
        <audio
          id={note}
          className="hidden"
          src={audioPath}
          ref={keyRef}
          preload="auto"
        />
      )}
    </li>
  );
};

export default Key;
