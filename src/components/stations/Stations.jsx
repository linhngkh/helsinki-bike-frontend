import { useState } from "react";
import { useQuery } from "react-query";
import { getStationsData } from "../../api/axios";
import styled from "styled-components";

const Container = styled.div``;

import Station from "./Station";
const Stations = () => {
  const [showStations, setShowStations] = useState([]);

  const {
    isLoading,
    isError,
    error,
    data: stations,
    isFetching,
    isPreviousData,
  } = useQuery(
    ["/stations", showStations],
    () => getStationsData(showStations),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h2>Loading station... Please wait for a moment...⏳ </h2>
      </div>
    );
  if (isError) return <p>Error: {error.message}</p>;

  const content = stations.map((station, _index) => (
    <Station key={_index} station={station} />
  ));

  return (
    <Container>
      {isFetching && <span>Loading ...</span>}
      {content}
    </Container>
  );
};

export default Stations;
