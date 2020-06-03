import React, { useState, createContext, useEffect } from "react";

const colors = {
  white: "white",
  black: "black"
};

// audios: https://www.youtube.com/watch?v=_R23Sogt9qI
// https://drive.google.com/file/d/1iKVL4MMMw9ur2h3HUDA-_qwnehT3Z2M1/view

const keys = [
  {
    note: "C",
    color: colors.white
  },
  {
    note: "Db",
    color: colors.black
  },
  {
    note: "D",
    color: colors.white
  },
  {
    note: "Eb",
    color: colors.black
  },
  {
    note: "E",
    color: colors.white
  },
  {
    note: "F",
    color: colors.white
  },
  {
    note: "Gb",
    color: colors.black
  },
  {
    note: "G",
    color: colors.white
  },
  {
    note: "Ab",
    color: colors.black
  },
  {
    note: "A",
    color: colors.white
  },
  {
    note: "Bb",
    color: colors.black
  },
  {
    note: "B",
    color: colors.white
  },
  {
    note: "C1",
    color: colors.white
  }
];

const pianoOptions = ["classic", "electric"];

const config = {
  audioBasePath: "/assets/audios"
};

const PianoContext = createContext({});

const PianoProvider = ({ children }) => {
  const [on, setOn] = useState(false);
  const [pianoStyle, setPianoStyle] = useState("none");

  const toggleOn = () => {
    setOn(!on);
  };

  useEffect(() => {
    on ? setPianoStyle(pianoOptions[0]) : setPianoStyle("none");
  }, [on]);

  return (
    <PianoContext.Provider
      value={{
        keys,
        config,
        setPianoStyle,
        pianoStyle,
        on,
        toggleOn,
        pianoOptions
      }}
    >
      {children}
    </PianoContext.Provider>
  );
};

export { PianoProvider, PianoContext };
