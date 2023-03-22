import React, { useState } from "react";
import { columns } from "./StationsHeader";
import StationsHeader from "./StationsHeader";
import { TablePagination, TableContainer, Table, Paper } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableStations = ({ stations }) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderValueBy, setOrderValueBy] = useState("id");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = useState(0);
  const handleSorting = (event, property) => {
    const isAscending = orderValueBy === property && orderDirection === "asc";
    setOrderValueBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper
      sx={{
        width: "55%",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <TableContainer sx={{ maxHeight: 440, padding: "10px" }}>
        <Table stickyHeader aria-label="sticky table">
          <StationsHeader
            orderValueBy={orderValueBy}
            orderDirection={orderDirection}
            handleSorting={handleSorting}
          />
          <TableBody>
            {stations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((station, _index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={station._index}
                  >
                    {columns.map((column) => {
                      const value = station[column.id];
                      return (
                        <TableCell key={station.index} sx={{}}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 30, 100]}
        component="div"
        count={stations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableStations;
