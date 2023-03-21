import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

const AppContext = React.createContext("");

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [journeys, setJourneys] = useState([]);
  const [stations, setStations] = useState([]);

  //fetch all journeys
  useEffect(() => {
    const fetchJourney = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/api/journeys");
        if (response) {
          const journeys = response.data;
          console.log("journeys", journeys);
          setJourneys(journeys);
        } else {
          setJourneys([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchJourney();
  }, []);

  //fetch all stations
  useEffect(() => {
    const fetchStations = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/api/stations");
        if (response) {
          const stations = response.data;
          console.log("Stations", stations);
          setStations(stations);
        } else {
          setStations([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchStations();
  }, []);

  // wrap all states in usememo
  const value = useMemo(
    () => [loading, setLoading, journeys, setJourneys, stations, setStations],
    []
  );

  return (
    //provide initial context values
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};
// create global context conveniently
export const useGlobalContext = () => {
  return useContext(AppContext);
};
//export AppProvider to the root
export { AppContext, AppProvider };
