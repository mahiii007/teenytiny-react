import React, { useEffect, useState } from "react";
import "./Progressbar.css";

export const Progressbar = ({}) => {
  const [progress, setProgress] = useState(0);
  const progrssBar = {
    width: `${progress}%`,
    "border-radius": "50px",
    "background-color": "aqua",
  };
  useEffect(() => {
    if (progress === 100) {
      return;
    }

    const tim = setInterval(() => {
      setProgress((p) => p + 1);
    }, 100);

    return () => clearInterval(tim);
  }, [progress]);
  return (
    <div className="progrssbar-container">
      <div style={progrssBar}>{progress}%</div>
    </div>
  );
};
