import React, { useContext } from "react";
import gameOverContext from "../context/gameOverContext";

const Modal = ({ children }) => {
  const { gameOver } = useContext(gameOverContext);
  return (
    gameOver && (
      <div className="flex items-center justify-center w-full h-full fixed top-0 left-0  bg-black">
        {children}
      </div>
    )
  );
};

export default Modal;
