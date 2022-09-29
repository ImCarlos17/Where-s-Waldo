import React from "react";
import useRecordsTable from "../hooks/useRecordsTable";
import PlayersTable from "./PlayersTable";

const RecordsTable = () => {
  const { recordsTable } = useRecordsTable();
  return (
    <div className="flex flex-col gap-2.5 justify-center items-center">
      <div>
        <h1 className="text-2xl">thanks for playing!</h1>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl"> BEST SCORES</h1>
        <table class="rounded-t-lg m-5 w-96 mx-auto bg-gray-200 text-gray-800 text-lg">
          <tr class="text-left border-b-2 border-gray-300">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Score</th>
          </tr>

          {recordsTable &&
            recordsTable
              .sort((a, b) => a.score.timeRecord - b.score.timeRecord)
              .map((user, index) => (
                <PlayersTable user={user} position={index} />
              ))}
        </table>
      </div>
    </div>
  );
};

export default RecordsTable;
