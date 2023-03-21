import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const JourneyBody = ({ journeys }) => {
  const {
    Departure_station_name,
    Return_station_name,
    Covered_distance,
    Duration,
  } = journeys || {};
  return (
    <TableBody>
      {/* {JSON.stringify(journeys)
        .map((journey) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === "number"
                      ? column.format(value)
                      : value}
                  </TableCell>
                );
              })}
            </TableRow> 
          );
        })}*/}
    </TableBody>
  );
};

export default JourneyBody;
