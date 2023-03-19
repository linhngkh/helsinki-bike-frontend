import { useState } from "react";
import { useQuery } from "react-query";
import { getJourneysData } from "../api/axios";
import { JourneyHead } from "./JourneyHead";

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

  if (isLoading) return <p>Loading journeys...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const content = journeys.map((journey, id, index) => (
    <JourneyHead key={id} journey={journey} />
  ));

  return (
    <div>
      {isFetching && <span>Loading ...</span>}
      {content}
    </div>
  );
};
