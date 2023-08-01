import axios from "axios";

const baseURL =
  "https://helsinki-bike-backend-6io18ii9d-linh-nguyenkhanh.vercel.app/api/";

export const axiosFetch = axios.create({
  baseURL: baseURL,
});

export const fetchJourney = async () => {
  const response = await axiosFetch.get(`/journeys`);
  const journeys = response.data;
  return journeys;
};

export const fetchStation = async () => {
  const response = await axiosFetch.get(`/stations`);
  const stations = response.data;
  return stations;
};
export const fetchStationId = async () => {
  const response = await axiosFetch.get(`/stations/${id}`);
  const stationId = response.data;
  return stationId;
};
