import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

export const columns = [
  { id: "Nimi", label: "Name", minWidth: 170 },
  { id: "Osoite", label: "Address", minWidth: 100 },
  {
    id: "Kaupunki",
    label: "City",
    minWidth: 170,
    align: "right",
  },
  {
    id: "Kapasiteet",
    label: "Capacity",
    minWidth: 170,
    align: "right",
  },
];
const StationsHeader = (props) => {
  const { orderDirection, orderValueBy, handleSorting } = props;

  const createHandleSorting = (property) => (event) => {
    handleSorting(event, property);
  };

  return (
    <TableHead >
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
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

export default StationsHeader;
