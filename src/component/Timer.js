import React, { useContext } from "react";
import timerContext from "../context/timerContext";



const Timer = () => {
  const { seconds, minutes, hours} = useContext(timerContext);


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
