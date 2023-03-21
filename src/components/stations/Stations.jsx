import { useState } from "react";
import styled from "styled-components";
import Station from "./Station";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

const Container = styled.div``;

const Stations = () => {
  const [showStations, setShowStations] = useState([]);

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h2>Loading station... Please wait for a moment...⏳ </h2>
      </div>
    );
  if (isError) return <p>Error: {error.message}</p>;

  const content = stations.map((station, index) => (
    <Table key={index} sx={{ tableLayout: "fixed" }}>
      <TableHead sx={{ verticalAlign: "middle" }}>
        <TableRow
          sx={{ textAlign: "left", fontSize: "18px", fontWeight: "bold" }}
        >
          <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <Station key={index} station={station} />
      </TableBody>
    </Table>
  ));

  return (
    <Container>
      {isFetching && <span>Loading ...</span>}
      {content}
    </Container>
  );
};

export default Stations;


