import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
const AppContext = React.createContext();

const BASE_URL = "http://localhost:8080/api";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showJourney, setShowJourney] = useState([]);
  const [showStations, setShowStations] = useState([]);

  //fetch all journeys
  const fetchJourney = async (pageParam = 0) => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/journeys");
      if (response) {
        const journeys = response.data;
        console.log("Journey", journeys);
      } else {
        setShowJourney([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  //fetch all station
  const fetchStations = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/stations");
      if (response) {
        const stations = response.data;
        console.log("Stations", stations);
      } else {
        setShowStations([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJourney();
    fetchStations();
  }, []);

  const value = useMemo(
    () => [
      loading,
      setLoading,
      showJourney,
      setShowJourney,
      showStations,
      setShowStations,
    ],
    []
  );

  return (
    //providing initial context values
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
//export AppProvider to main and wrap App
export { AppContext, AppProvider };
