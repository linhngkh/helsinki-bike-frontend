import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

export const columns = [
  { id: "Departure", label: "Departure", minWidth: 170 },
  { id: "Return", label: "Return", minWidth: 170 },
  {
    id: "Covered_distance",
    label: "Distance(km)",
    minWidth: 100,
  },
  {
    id: "Duration",
    label: "Duration(min)",
    minWidth: 100,
  },
];
const TableHeader = (props) => {
  // receive props from main table
  const { orderDirection, valueToOrderBy, handleSorting } = props;

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
              direction={orderDirection == column.id ? orderDirection : "desc"}
              onClick={createHandleSorting(column.id)}
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
