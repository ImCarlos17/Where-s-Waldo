import React, { useState, useContext } from "react";
import timerContext from "../context/timerContext";
import RecordsTable from "./RecordsTable";
import postUsers from "../functions/postUsers";
import FormDataPlayer from "./FormDataPlayer";
import getUsers from "../functions/getUsers";
import useRecordsTable from "../hooks/useRecordsTable";

const PlayerData = () => {
  const { minutes, seconds, hours } = useContext(timerContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const { recordsTable, setRecordsTable } = useRecordsTable();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { player } = e.target.elements;
      const playerData = {
        player: player.value,
        score: { hours: hours, minutes: minutes, seconds: seconds },
      };
      postUsers(playerData);
      setIsSubmit(true);
      const playerRecords = await getUsers();
      setRecordsTable(playerRecords);
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
        <h1 className="text-2xl">thanks for playing!</h1>
      ) : (
        <FormDataPlayer handleSubmit={handleSubmit} />
      )}
      <RecordsTable />
    </div>
  );
};

export default PlayerData;
