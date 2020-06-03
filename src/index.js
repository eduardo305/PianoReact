import React from "react";
import ReactDOM from "react-dom";
import Piano from "./components/piano";
import { PianoProvider } from "./contexts/Piano";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PianoProvider>
        <Piano />
      </PianoProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
