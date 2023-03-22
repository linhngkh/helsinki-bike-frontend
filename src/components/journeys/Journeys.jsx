import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchJourney } from "../../api/axios";
import MainTable from "././MainTable";
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
      <MainTable journeys={journeys} />
    </>
  );
};

export default Journeys;
