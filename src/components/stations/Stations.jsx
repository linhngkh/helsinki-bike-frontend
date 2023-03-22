import React, { useState } from "react";
import { fetchStation } from "../../api/axios";
import { useQuery } from "react-query";
import Loading from "../utils/Loading";
import MainTable from "././MainTable";
import { Container } from "../utils/Styled";

const Stations = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: stations,
    isFetching,
  } = useQuery(["stations", page], () => fetchStation(page));

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
      <MainTable stations={stations} />
    </Container>
  );
};

export default Stations;
