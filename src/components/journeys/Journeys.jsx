import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchJourney } from "../../api/axios";
import Journey from "././Journey";
import Loading from "../utils/Loading";
import { Container } from "../utils/Styled";
import { Typography } from "@mui/material";

const Journeys = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: journeys,
    isFetching,
  } = useQuery(["/journeys", page], () => fetchJourney(page));

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <Container>
      <Typography variant="h5" sx={{ color: "#ffffff" }}>
        All City Bikes Journeys
      </Typography>
      {isFetching && (
        <div>
          <Loading />
        </div>
      )}
      <Journey journeys={journeys} />
    </Container>
  );
};

export default Journeys;
