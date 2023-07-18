import axios from "axios";

const baseURL =
  "https://helsinki-bike-backend-6io18ii9d-linh-nguyenkhanh.vercel.app/api/";

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
  const stations = response.data;
  return stations;
};
export const fetchStationId = async () => {
  const response = await axiosFetch.get(`/stations/${id}`);
  console.log(response.data);
  console.log("🚀 ~ file: axios.jsx:25 ~ fetchStationId ~ response:", response);
  const stationId = response.data;
  return stationId;
};
