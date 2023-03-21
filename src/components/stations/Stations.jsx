import React from "react";
import { useGlobalContext } from "../../contextAPI/context";
import styled from "styled-components";
const Container = styled.div``;

const Stations = () => {
  const { loading, showStations, setShowStations } = useGlobalContext();
  if (loading) return <Loading />;


  return (<Container>Stations</Container>);
};

export default Stations;
