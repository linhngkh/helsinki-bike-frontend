import React, { useState } from "react";
import { fetchStation } from "../../api/axios";
import { useQuery } from "react-query";

import Loading from "../utils/Loading";
import TableStations from "./TableStations";

const Stations = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: stations,
    isFetching,
  } = useQuery(["stations", page], () => fetchStation(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      {isFetching && <Loading />}
      <TableStations stations={stations} />
    </>
  );
};

export default Stations;
