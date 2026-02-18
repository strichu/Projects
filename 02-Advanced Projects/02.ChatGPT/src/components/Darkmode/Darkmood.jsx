import { FiSun } from "react-icons/fi";
import "./darkmode.css";
import { useEffect, useState } from "react";

import { FaMoon } from "react-icons/fa6";
function Darkmood() {
  const [mode, setMode] = useState("darkmode");

  const toggle = () => {
    if (mode === "darkmode") {
      setMode("lightmode");
    } else {
      setMode("darkmode");
    }
  };
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div>
      <button
        onClick={() => {
          toggle();
        }}
        className="darkmoodbtn"
      >
        {mode==="lightmode"?<FaMoon />:<FiSun />}
      </button>
    </div>
  );
}

export default Darkmood;
