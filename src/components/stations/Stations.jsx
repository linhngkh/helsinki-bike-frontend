import React, { useState } from "react";
import { fetchStation } from "../../api/axios";
import { useQuery } from "react-query";
import Loading from "../utils/Loading";
import MainTable from "././MainTable";

const Stations = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: stations,
    isFetching,
  } = useQuery(["stations", page], () => fetchStation(page), {});

  if (isLoading) return <Loading />;
  if (isFetching) return <Loading />;
  if (isError) return <p>Error: {error.message}</p>;

  return <MainTable stations={stations} />;
};

export default Stations;
