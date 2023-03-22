import React, { useState } from "react";
import TableHeader, { columns } from "./TableHeader";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import {
  TablePagination,
  TableContainer,
  Table,
  Paper,
  TableCell,
  TableBody,
  TableRow,
  Box,
  AppBar,
  InputBase,
} from "@mui/material";

// condition when "b" in order bigger than "a" in order then return 1 and vice versa
const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

// condition like a toggle when click on top of the row, return ascending or descending result
const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};
// map element array in order
const sortedRowInformation = (rowArray, comparator) => {
  const stablizedRowArray = rowArray.map((el, index) => [el, index]);
  stablizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stablizedRowArray.map((el) => el[0]);
};

const MainTable = ({ journeys }) => {
  // states for sorting asc and desc
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("id");
  // states for pagination
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [page, setPage] = useState(0);

  // state for search name
  const [search, setSearch] = useState("");

  // sorting function
  const handleSorting = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  // pagination function
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
        width: "65%",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      {/* SEARCH BAR */}
      <AppBar position="static" sx={{ background: "black" }}>
        <Box
          component="span"
          sx={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <DirectionsBikeIcon />
          <InputBase
            placeholder="Search by typing journey name "
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ color: "white", padding: "10px", width: "20rem" }}
          />
        </Box>
      </AppBar>
      {/* TABLE */}
      <TableContainer sx={{ maxHeight: 440, padding: "10px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleSorting={handleSorting}
          />
          <TableBody>
            {sortedRowInformation(
              journeys,
              getComparator(orderDirection, valueToOrderBy)
            )
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.Nimi.toLowerCase().includes(search) ||
                      item.Osoite.toLowerCase().includes(search);
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((journey, _id) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={journey._id}
                  >
                    {columns.map((column) => {
                      const value = journey[column.id];
                      return (
                        <TableCell key={journey.index}>
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
      {/* PAGINATION */}
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={journeys.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MainTable;
