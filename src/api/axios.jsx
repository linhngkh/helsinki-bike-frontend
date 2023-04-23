import axios from "axios";

const baseURL = "https://helsinki-bike-backend.vercel.app/api";

export const axiosFetch = axios.create({
  baseURL: baseURL,
});

export const fetchJourney = async () => {
  const response = await axiosFetch.get(`/journeys`);
  console.log(response.data);
  const journeys = response.data;
  return journeys;
};

export const fetchStation = async () => {
  const response = await axiosFetch.get(`/stations`);
  console.log(response.data);
  const stations = response.data;
  return stations;
};
