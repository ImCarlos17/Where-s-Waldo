import { createContext } from "react";
import useTimer from "../hooks/useTimer";


const timerContext = createContext();


const ProviderTimerContext = ({ children }) => {
  
  const {minutes, seconds, hours, stopTime } = useTimer();
 

  const data = { hours,minutes,seconds, stopTime };

  return <timerContext.Provider value={data}>{children}</timerContext.Provider>;
};

export { ProviderTimerContext };
export default timerContext;
