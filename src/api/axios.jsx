import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const axiosFetch = axios.create({
  baseURL: baseURL,
});

export const fetchJourney = async (pageParam = 0) => {
  const response = await axiosFetch.get(`/journeys?page=${pageParam}`);
  console.log(response.data);
  const journeys = response.data;
  return journeys;
};

export const fetchStation = async (pageParam = 0) => {
  const response = await axiosFetch.get(`/stations?page=${pageParam}`);
  console.log(response.data);
  const stations = response.data;
  return stations;
};
