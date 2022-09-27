import React, { createContext, useState, useEffect, useContext } from "react";
import timerContext from "./timerContext";

const gameOverContext = createContext();

const ProviderGameOverContext = ({ children }) => {
  const [gameOver, setGameOver] = useState(true);
  const data = { gameOver, setGameOver };
  const { stopTime } = useContext(timerContext);

  useEffect(() => {
    if (gameOver) {
      stopTime();
    }

    return () => {};
  }, [gameOver, stopTime]);

  return (
    <gameOverContext.Provider value={data}>
      {" "}
      {children}
    </gameOverContext.Provider>
  );
};

export { ProviderGameOverContext };
export default gameOverContext;
