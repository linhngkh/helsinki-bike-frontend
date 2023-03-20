import axios from "axios";

// http://localhost:8080/api/journeys?page=32333

const BASE_URL = "http://localhost:8080/api";

export const axiosFetch = axios.create({
  baseURL: BASE_URL,
});

export const getJourneysData = async (pageParam = 0) => {
  const response = await axiosFetch.get(`/journeys?page=${pageParam}`);
  console.log(response.data);
  return response.data;
};
