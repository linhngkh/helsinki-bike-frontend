import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchJourney } from "../../api/axios";
import MainTable from "././MainTable";
import Loading from "../utils/Loading";
import { Container } from "../utils/Styled";

const Journeys = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: journeys,
    isFetching,
  } = useQuery(["journeys", page], () => fetchJourney(page));

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <Container>
      {isFetching && (
        <div>
          <Loading />
        </div>
      )}
      <MainTable journeys={journeys} />
    </Container>
  );
};

export default Journeys;
