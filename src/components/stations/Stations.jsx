import React from "react";
import { useGlobalContext } from "../../contextAPI/context";
import styled from "styled-components";
import Station from "./Station";
import Loading from "../utils/Loading";

const Stations = () => {
  const { loading, stations, setStations } = useGlobalContext();
  if (loading) return <Loading />;

  return <Station />;
};

export default Stations;
