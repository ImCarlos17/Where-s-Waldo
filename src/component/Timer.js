import React from "react";
import useTimer from "../hooks/useTimer";

const Timer = () => {
  const { seconds, minutes, hours, stopTime } = useTimer();

  return (
    <div>
      <h1 className="text-white font-bold">Timer</h1>
      <span className="text-white font-semibold">
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    </div>
  );
};

export default Timer;
