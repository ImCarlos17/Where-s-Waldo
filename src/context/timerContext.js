import React, { createContext } from "react";
import useTimer from "../hooks/useTimer";

const timerContext = createContext();

const ProviderTimerContext = ({ children }) => {
  const { minutes, seconds, hours, stopTime, timeRecord } = useTimer();

  const data = { hours, minutes, seconds, stopTime, timeRecord };

  return <timerContext.Provider value={data}>{children}</timerContext.Provider>;
};

export { ProviderTimerContext };
export default timerContext;
