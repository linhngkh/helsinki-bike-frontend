import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

export const columns = [
  { id: "id", label: "Departure", minWidth: 170 },
  { id: "return", label: "Return", minWidth: 100 },
  {
    id: "distance",
    label: "Distance(kilometers)",
    minWidth: 170,
    align: "right",
    format: (value) => (value / 1000).toFixed(1),
  },
  {
    id: "duration",
    label: "Duration(minutes)",
    minWidth: 170,
    align: "right",
    format: (value) => (value / 60).toFixed(1),
  },
];
const JourneyHeader = (props) => {
  const { orderDirection, orderValueBy, handleSorting } = props;

  const createHandleSorting = (property) => (event) => {
    handleSorting(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{
              minWidth: column.minWidth,
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <TableSortLabel
              active={orderValueBy === "column.id"}
              direction={
                orderDirection == "column.label" ? orderDirection : "asc"
              }
              onClick={createHandleSorting}
            >
              {column.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default JourneyHeader;
