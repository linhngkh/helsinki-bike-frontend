import React from "react";
import { useGlobalContext } from "../../contextAPI/context";
import styled from "styled-components";

const Container = styled.div``;
const Journeys = () => {
  const { loading, showJourney, setShowJourney } = useGlobalContext();

  return <div>Journeys</div>;
};

export default Journeys;
