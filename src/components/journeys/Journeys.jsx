import React from "react";
import { useGlobalContext } from "../../contextAPI/context";
import Journey from "./Journey";
import Loading from "../utils/Loading";

const Journeys = () => {
  const { loading, data } = useGlobalContext();

  if (loading) return <Loading />;

  return <Journey data={data} />;
};

export default Journeys;
