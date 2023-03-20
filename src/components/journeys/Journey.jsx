import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TablePagination,
} from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const Journey = ({ journey }) => {
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
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "50px",
          borderCollapse: "collapse",
        }}
      >
        <Table sx={{ tableLayout: "fixed" }}>
          <TableHead sx={{ verticalAlign: "middle" }}>
            <TableRow sx={{ textAlign: "left", fontSize: "18px" }}>
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
              <TableCell>
                <DirectionsBikeIcon sx={{ mr: 1 }} />
                {journey.Departure_station_name}
              </TableCell>
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

export default Journey;