import React from "react";
import PlayerData from "./PlayerData";

const ModalGameOver = () => {
  return (
    <div className="flex flex-col  items-center border-black border-2 rounded min-h w-6/12 bg-black opacity-90 text-white">
      <PlayerData />
    </div>
  );
};

export default ModalGameOver;
