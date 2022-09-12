import { useState, createContext } from "react";
import useTimer from "../hooks/useTimer";


const gameContext = createContext();

const initialStateGame = false;


const ProviderGameContext = ({ children }) => {
  const [isOver, setIsOver] = useState(initialStateGame);
  const {minutes, seconds, hours } = useTimer();
 

  const data = { isOver, setIsOver, hours,minutes,seconds };

  return <gameContext.Provider value={data}>{children}</gameContext.Provider>;
};

export { ProviderGameContext };
export default gameContext;
