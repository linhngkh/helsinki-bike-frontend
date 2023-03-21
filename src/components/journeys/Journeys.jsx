import React from "react";
import { useGlobalContext } from "../../contextAPI/context";
import Loading from "../utils/Loading";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Journeys = () => {
  const { loading, journeys } = useGlobalContext();

  if (loading) return <Loading />;

  return (
    <Paper sx={{ width: "70%", overflow: "hidden", margin: "0 auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader />
          <TableBody journeys={journeys} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Journeys;
