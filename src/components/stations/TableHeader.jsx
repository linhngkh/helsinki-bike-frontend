import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

export const headers = [
  { id: "Nimi", name: "Name", minWidth: 100 },
  { id: "Osoite", name: "Address", minWidth: 100 },
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
        {headers.map((header) => (
          <TableCell
            key={header.id}
            style={{
              minWidth: header.minWidth,
              fontSize: "20px",
              fontWeight: "bold",
              background: "black",
              color: "white",
            }}
          >
            <TableSortLabel
              active={valueToOrderBy === header.id}
              direction={orderDirection == header.id ? order : "asc"}
              onClick={createHandleSorting(header.id)}
            >
              {header.name}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
