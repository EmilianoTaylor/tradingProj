import { useEffect, useState } from "react";
import "./timeIntervalBlock.scss";

const TimeIntervalBlock = ({ onIntervalChange }) => {
	const intervals = [
    { label: "24h", value: "24h" },
    { label: "7 days", value: "7d" },
    { label: "30 days", value: "30d" },
    { label: "All time", value: "all_time" }
  ];

	const [activeInterval, setActiveInterval] = useState(() => {
    return localStorage.getItem("selectedInterval") || "all_time";
  });

  const handleClick = (value) => {
    setActiveInterval(value);
    onIntervalChange(value);
    localStorage.setItem("selectedInterval", value);
  };

  
  return (
    <div className="time-interval-block">
      <span className="time-label">Time Range:</span>
      {intervals.map(({ label, value }) => (
        <button
          key={value}
          className={`time-button ${activeInterval === value ? "active" : ""}`}
          onClick={() => handleClick(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TimeIntervalBlock;