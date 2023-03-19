import React from "react";

export const JourneyTable = ({ journey }) => {
  const {
    Departure_station_name,
    Duration,
    Covered_distance,
    Return_station_name,
  } = journey;


  
  return (
    <div>
      <h2>{Departure_station_name}</h2>
      <p>{Return_station_name}</p>
      <p>{Covered_distance}</p>
      <p>{Duration} </p>
    </div>
  );
};
