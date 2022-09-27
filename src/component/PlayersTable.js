import React from "react";

const PlayersTable = ({ user }) => {
  return (
    <tr class="bg-gray-100 border-b border-gray-200">
      <td class="px-4 py-3">1</td>
      <td class="px-4 py-3">{user.player}</td>
      <td class="px-4 py-3">
        {user.score.hours < 10 ? "0" + user.score.hours : user.score.hours}:
        {user.score.minutes < 10
          ? "0" + user.score.minutes
          : user.score.minutes}{" "}
        :{" "}
        {user.score.seconds < 10
          ? "0" + user.score.seconds
          : user.score.seconds}
      </td>
    </tr>
  );
};

export default PlayersTable;
