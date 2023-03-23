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
  Typography,
} from "@mui/material";

const Journey = ({ journeys }) => {
  const {
    durartion: Duration,
    departure_name: Departure_station_name,
    return_name: Return_station_name,
    covered_distance: Covered_distance,
  } = journeys;

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
          <TableHeader />
          <TableBody>
            {journeys.map((journey, _id) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={journey._id}>
                  <TableCell>{durartion}</TableCell>
                  <TableCell>{departure_name}</TableCell>
                  <TableCell>{return_name}</TableCell>
                  <TableCell>{columns}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Journey;
