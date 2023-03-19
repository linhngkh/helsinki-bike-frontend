import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const colums = [
  { id: "departure", label: "Departure Station", minWidth: 100 },
  { id: "return", label: "Return Station", minWidth: 170 },
  {
    id: "distance",
    label: "Distance(km)",
    minWidth: 100,
    align: "right",
  },
  {
    id: "duration",
    label: "Duration(minutes)",
    minWidth: 100,
    align: "right",
  },
];

export const JourneyHead = ({ journey }) => {
  const {
    Departure_station_name,
    Return_station_name,
    Duration,
    Covered_distance,
  } = journey;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          {/* table head */}
          <TableHead>
            <TableRow>
              {colums.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            {/* {(Duration / 60).toFixed(2)} */}
          </TableHead>
          {/* table body */}
        </Table>
      </TableContainer>
    </Paper>
  );
};
