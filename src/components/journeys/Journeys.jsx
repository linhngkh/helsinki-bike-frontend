import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchJourney } from "../../api/axios";
import TableJourney from "./TableJourney";
import Loading from "../utils/Loading";

const Journeys = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: journeys,
    isFetching,
  } = useQuery(["journeys", page], () => fetchJourney(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      {isFetching && <Loading />}

      <TableJourney journeys={journeys} />
    </>
  );
};

export default Journeys;
