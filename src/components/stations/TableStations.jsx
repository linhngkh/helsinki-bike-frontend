import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import StationsBody from "./StationsBody";
import StationsHeader from "./StationsHeader";

const TableStations = ({ station }) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderValueBy, setOrderValueBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSorting = (event, property) => {
    const isAscending = orderValueBy === property && orderDirection === "asc";
    setOrderValueBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  return (
    <Paper sx={{ width: "70%", overflow: "hidden", margin: "0 auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <StationsHeader
            orderValueBy={orderValueBy}
            orderDirection={orderDirection}
            handleSorting={handleSorting}
          />
          <StationsBody station={station} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableStations;
