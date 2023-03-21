import React, { useState } from "react";
import { fetchStation } from "../../api/axios";
import { useQuery } from "react-query";
import styled from "styled-components";

import Loading from "../utils/Loading";
import PaginationButton from "../utils/PaginationButton";
import TableStations from "./TableStations";

const Stations = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: stations,
    isFetching,
    isPreviousData,
  } = useQuery(["stations", page], () => fetchStation(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;

  if (isError) return <p>Error: {error.message}</p>;

  const lastPage = () => setPage(stations.total_pages);

  const firstPage = () => setPage(0);

  const pagesArray = Array(stations.total_pages)
    .fill()
    .map((_, index) => index + 1);

  const nav = (
    <nav>
      <button onClick={firstPage} disabled={isPreviousData || page === 0}>
        &lt;&lt;
      </button>
      {pagesArray.map((pg) => (
        <PaginationButton key={pg} pg={pg} setPage={setPage} />
      ))}
      <button
        onClick={lastPage}
        disabled={isPreviousData || page === stations.total_pages}
      >
        &gt;&gt;
      </button>
    </nav>
  );

  return (
    <>
      {nav}
      {isFetching && <Loading />}

      <TableStations stations={stations} />
    </>
  );
};

export default Stations;
