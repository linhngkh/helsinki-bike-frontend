import { useState } from "react";
import { useQuery } from "react-query";
import { getJourneysData } from "../api/axios";

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

  return <div>Journeys</div>;
};
