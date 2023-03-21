import React from "react";
import { useGlobalContext } from "../../contextAPI/context";
import styled from "styled-components";
import Loading from "../utils/Loading";
const Container = styled.div``;
const Journeys = () => {
  const { loading, showJourney, setShowJourney } = useGlobalContext();

  if (loading) return <Loading />;

  return <Container></Container>;
};

export default Journeys;
