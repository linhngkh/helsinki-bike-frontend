import { useState } from "react";
import { useQuery } from "react-query";
import { getStationsData } from "../../api/axios";

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

  return <div>Stations</div>;
};

export default Stations;
