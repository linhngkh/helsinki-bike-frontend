import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableHeader, { headers } from "./TableHeader";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import {
  Tooltip,
  TableBody,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TablePagination,
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

const Station = ({ stations }) => {
  // states for sorting asc and desc
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("id");

  // states for pagination
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [page, setPage] = useState(0);

  // state for search name
  const [search, setSearch] = useState("");

  // sorting function , cant delete event prop here
  const handleSorting = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  // pagination function. can't delete "event" prop here
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
        width: "40%",
        overflow: "hidden",
        margin: "20px auto",
      }}
    >
      {/* SEARCH BAR */}
      <AppBar position="static" sx={{ background: "#24292f" }}>
        <Box
          component="span"
          sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        >
          <DirectionsBikeIcon />
          <InputBase
            placeholder="Search by typing name or address"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ color: "white", padding: "10px", width: "20rem" }}
          />
          <Tooltip title="Search by info of row shown per page" arrow>
            <TipsAndUpdatesIcon>Arrow</TipsAndUpdatesIcon>
          </Tooltip>
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
              stations,
              // ordering per column
              getComparator(orderDirection, valueToOrderBy)
            )
              // filter search bar
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.Nimi.toLowerCase().includes(search) ||
                      item.Osoite.toLowerCase().includes(search);
              })
              // slice pagination
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((station, _index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={_index}>
                    {/* mapping column with station data's rows */}
                    {headers.map((header, index) => {
                      const value = station[header.id];
                      return (
                        <TableCell key={index}>
                          <Link
                            to={`/stations/${station.ID}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {header.format && typeof value === "number"
                              ? header.format(value)
                              : value}
                          </Link>
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
        rowsPerPageOptions={[20, 50, 200]}
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

export default Station;
