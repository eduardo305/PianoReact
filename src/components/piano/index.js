import React, { useContext } from "react";
import Key from "../key";
import Button from "../Button";
import PowerButton from "../Button/PowerButton";
import OptionButton from "../Button/OptionButton";
import { PianoContext } from "../../contexts/Piano";

import "./Piano.scss";

// https://freesound.org/people/pinkyfinger/packs/4409/
const Piano = () => {
  const {
    keys,
    pianoStyle,
    config,
    setPianoStyle,
    on,
    toggleOn,
    pianoOptions
  } = useContext(PianoContext);

  const renderKey = key => {
    const audioPath = on
      ? `${config.audioBasePath}/${pianoStyle}/${key.note}.wav`
      : "";

    return <Key {...key} key={key.note} audioPath={audioPath} />;
  };

  const renderKeyboard = () => {
    return keys.map(key => renderKey(key));
  };

  const handlePianoStyleSelection = style => {
    on && setPianoStyle(style);
  };

  const renderPowerButton = () => {
    return <PowerButton on={on} onClick={toggleOn} />;
  };

  const renderOptionButton = option => {
    return (
      <OptionButton
        name={option}
        onClick={handlePianoStyleSelection}
        on={pianoStyle === option}
      />
    );
  };

  const renderButtons = () => {
    return pianoOptions.map(option => {
      return (
        <li>
          <Button key={option} label={option} render={renderOptionButton} />
        </li>
      );
    });
  };

  return (
    <div className="piano">
      <div className="dashboard">
        <div className="logo">Roland</div>
        <ul className="dashboard__controls">
          <li>
            <Button label="power" render={renderPowerButton} />
          </li>
          {renderButtons()}
        </ul>
      </div>

      <ul className="keyboard">{renderKeyboard()}</ul>
    </div>
  );
};

export default Piano;
