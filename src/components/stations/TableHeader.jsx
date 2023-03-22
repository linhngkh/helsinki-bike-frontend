import React from "react";

import { TableSortLabel, TableHead, TableRow, TableCell } from "@mui/material";

export const columns = [
  { id: "Nimi", name: "Name", minWidth: 170 },
  { id: "Osoite", name: "Address", minWidth: 100 },
  {
    id: "Kapasiteet",
    name: "Capacity",
    minWidth: 170,
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
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            ></TableSortLabel> */}
            <TableSortLabel
              active={valueToOrderBy === column.id}
              direction={orderDirection == column.name ? order : "desc"}
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
