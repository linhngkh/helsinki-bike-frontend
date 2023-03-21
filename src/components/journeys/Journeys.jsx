import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchJourney } from "../../api/axios";
import TableJourney from "./TableJourney";
import Loading from "../utils/Loading";
import PaginationButton from "../utils/PaginationButton";

const Journeys = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: journeys,
    isFetching,
    isPreviousData,
  } = useQuery(["journeys", page], () => fetchJourney(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;

  if (isError) return <p>Error: {error.message}</p>;

  const lastPage = () => setPage(journeys.total_pages);

  const firstPage = () => setPage(0);

  const pagesArray = Array(journeys.total_pages)
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
        disabled={isPreviousData || page === journeys.total_pages}
      >
        &gt;&gt;
      </button>
    </nav>
  );

  return (
    <>
      {isFetching && <Loading />}
      {journeys.map((journey, index) => (
        <TableJourney key={index.id} journey={journey} />
      ))}
      {nav}
    </>
  );
};

export default Journeys;
