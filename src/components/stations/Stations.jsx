import React, { useState } from "react";
import { fetchStation } from "../../api/axios";
import { useQuery } from "react-query";
import Loading from "../utils/Loading";
import Station from "./Station";
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
  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <Container>
      {isFetching && (
        <div>
          <Loading />
        </div>
      )}
      <Station stations={stations} />
    </Container>
  );
};

export default Stations;
