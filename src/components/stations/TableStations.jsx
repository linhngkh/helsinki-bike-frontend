import React, { useState } from "react";
import StationsBody from "./StationsBody";
import StationsHeader from "./StationsHeader";
import { TablePagination, TableContainer, Table, Paper } from "@mui/material";


const TableStations = ({ station }) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderValueBy, setOrderValueBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSorting = (event, property) => {
    const isAscending = orderValueBy === property && orderDirection === "asc";
    setOrderValueBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  return (
    <Paper
      sx={{
        width: "70%",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ verticalAlign: "start" }}
        >
          <StationsHeader
            orderValueBy={orderValueBy}
            orderDirection={orderDirection}
            handleSorting={handleSorting}
          />
          <StationsBody station={station} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={457}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableStations;
