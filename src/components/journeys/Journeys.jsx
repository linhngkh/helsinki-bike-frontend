import { useState } from "react";
import { useQuery } from "react-query";
import { getJourneysData } from "../../api/axios";
import Journey from "./Journey";
import styled from "styled-components";

const Container = styled.div``;

export const Journeys = () => {
  const [showJourney, setShowJourney] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: journeys,
    isFetching,
    isPreviousData,
  } = useQuery(["/journeys", showJourney], () => getJourneysData(showJourney), {
    keepPreviousData: true,
  });

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
        <h2>Loading journey... Please wait for a moment...⏳ </h2>
      </div>
    );
  if (isError) return <p>Error: {error.message}</p>;
  const content = journeys.map((journey, _index) => (
    <Journey key={_index} journey={journey} />
  ));

  return (
    <Container id="change">
      {isFetching && <span>Loading ...</span>}
      {content}
    </Container>
  );
};
