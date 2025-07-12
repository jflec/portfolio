// App.jsx
import { useEffect, useState, useRef } from "react";
import Renderer from "./components/Renderer";
import Portfolio from "./components/Portfolio";

import "./style/general.css";

export default function App() {
  return (
    <div className="app-container">
      <Portfolio />
      <Renderer />
    </div>
  );
}
