import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

export const columns = [
  { id: "Nimi", label: "Name", minWidth: 170 },
  { id: "Osoite", label: "Address", minWidth: 100 },
  {
    id: "Kapasiteet",
    label: "Capacity",
    minWidth: 170,
  },
];
const TableHeader = (props) => {
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

export default TableHeader;
