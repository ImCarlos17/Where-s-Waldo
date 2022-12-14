import React, { useState, useContext } from "react";
import timerContext from "../context/timerContext";
import RecordsTable from "./RecordsTable";
import postUsers from "../services/postUsers";
import FormDataPlayer from "./FormDataPlayer";

const PlayerData = () => {
  const { minutes, seconds, hours, timeRecord } = useContext(timerContext);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { player } = e.target.elements;
      const playerData = {
        player: player.value,
        score: {
          hours,
          minutes,
          seconds,
          timeRecord,
        },
      };
      postUsers(playerData);
      setIsSubmit(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-12 mt-5 items-center rounded min-h min-w bg-gray-600 text-white p-5">
      <h1 className="text-2xl">
        YOUR TIME: {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}{" "}
      </h1>

      {isSubmit ? (
        <RecordsTable />
      ) : (
        <FormDataPlayer handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default PlayerData;
