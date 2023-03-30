import React, { useState } from "react";
import TableHeader from "./TableHeader";
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
  Typography,
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

const Journey = ({ journeys }) => {
  // state for search name
  const [search, setSearch] = useState("");

  // states for sorting asc and desc

  const [valueToOrderBy, setValueToOrderBy] = useState("id");
  const [orderDirection, setOrderDirection] = useState("asc");
  // states for pagination
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [page, setPage] = useState(0);

  // pagination function. can't delete "event" prop here
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // sorting function , cant delete event prop here
  const handleSorting = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  return (
    <Paper
      sx={{
        width: "55%",
        overflow: "hidden",
        margin: "20px auto",
      }}
    >
      {/* SEARCH BAR */}
      <AppBar position="static" sx={{ background: "#24292f" }}>
        <Box
          component="span"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <DirectionsBikeIcon />
          <InputBase
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by typing name or address"
            inputProps={{ "aria-label": "search" }}
            sx={{ color: "white", padding: "10px", width: "20rem" }}
          />
          <Typography
            variant="body"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            JOURNEYS
          </Typography>
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
              // ordering per column
              getComparator(orderDirection, valueToOrderBy)
            )
              // filter search bar
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.Departure_station_name.toLowerCase().includes(
                      search
                    ) ||
                      item.Return_station_name.toLowerCase().includes(search);
              }) // slice pagination
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((journey, _id) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={journey._id}
                  >
                    <TableCell>{journey.Departure_station_name}</TableCell>
                    <TableCell>{journey.Return_station_name}</TableCell>
                    <TableCell>
                      {(journey.Covered_distance / 1000).toFixed(2)}
                    </TableCell>
                    <TableCell>{(journey.Duration / 60).toFixed(2)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* PAGINATION */}
      <TablePagination
        rowsPerPageOptions={[20, 100, 500]}
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

export default Journey;
