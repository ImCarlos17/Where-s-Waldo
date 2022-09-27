import React, { useState, useEffect } from "react";
import getUsers from "../functions/getUsers";

const useRecordsTable = () => {
  const [recordsTable, setRecordsTable] = useState("");

  useEffect(() => {
    const getRecordUser = async () => {
      const playerRecords = await getUsers();
      setRecordsTable(playerRecords);
    };

    getRecordUser();

    return () => {};
  }, [recordsTable]);

  return { recordsTable, setRecordsTable };
};

export default useRecordsTable;
