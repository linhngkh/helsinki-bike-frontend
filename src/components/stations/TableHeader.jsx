import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

export const columns = [
  { id: "Nimi", name: "Name", minWidth: 100 },
  { id: "Osoite", name: "Address", minWidth: 100 },
  {
    id: "Kapasiteet",
    name: "Capacity",
    minWidth: 100,
  },
];
const TableHeader = (props) => {
  // receive props from main table
  const { orderDirection, valueToOrderBy, handleSorting } = props;

  // sorting event
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
              active={valueToOrderBy === column.id}
              direction={orderDirection == column.name ? order : "asc"}
              onClick={createHandleSorting(column.id)}
            >
              {column.name}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
