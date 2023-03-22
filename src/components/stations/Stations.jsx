import React, { useState } from "react";
import { fetchStation } from "../../api/axios";
import { useQuery } from "react-query";
import Loading from "../utils/Loading";
import MainTable from "././MainTable";
import { TableContainer, Table, Paper } from "@mui/material";
const Stations = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: stations,
    isFetching,
  } = useQuery(["stations", page], () => fetchStation(page), {});

  if (isLoading) return <Loading />;
  if (isFetching) return <Loading />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <Paper
      sx={{
        width: "55%",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <TableContainer sx={{ maxHeight: 440, padding: "10px" }}>
        <MainTable stations={stations} />
      </TableContainer>
    </Paper>
  );
};

export default Stations;
