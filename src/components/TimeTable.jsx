import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";

const TimeTable = ({ journey }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>
                Departure Station
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Return Station</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Distance(km)</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Duration(minutes)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell> {journey.Departure_station_name}</TableCell>
              <TableCell>{journey.Return_station_name}</TableCell>
              <TableCell>
                {" "}
                {(journey.Covered_distance / 100).toFixed(1)}
              </TableCell>
              <TableCell>{(journey.Duration / 60).toFixed(1)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TimeTable;
