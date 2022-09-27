import React, { useState, useEffect } from "react";
import getUsers from "../functions/getUsers";

const useRecordsTable = () => {
  const [recordsTable, setRecordsTable] = useState("");

  const getRecordUser = async () => {
    const playerRecords = await getUsers();
    setRecordsTable(playerRecords);
  };
  useEffect(() => {
    getRecordUser();

    return () => {};
  }, [setRecordsTable]);

  return { recordsTable, setRecordsTable };
};

export default useRecordsTable;
