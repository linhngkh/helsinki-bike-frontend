import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

const JourneyHeader = () => {
  const columns = [
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

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            <TableSortLabel
              active={"id" === "id"}
              direction="asc"
              // onClick={}
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
