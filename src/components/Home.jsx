import React from "react";
import styled from "styled-components";
import { Button } from "./styled/ButtonStyled";
import { Link, NavLink } from "react-router-dom";

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0 auto;
  background-image: url("/src/assets/bd.jpeg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  position: relative;
  bottom: 220px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonGroup = styled(Button)`
  color: white;

  &:hover {
    background-color: #b45309;
  }
`;

const LandingPage = () => {
  return (
    <BigContainer>
      <Container>
        <Title>HELSINKI CITY BIKES </Title>
        <ButtonContainer>
          <Link to="/journeys">
            <ButtonGroup>VIEW JOURNEYS</ButtonGroup>
          </Link>
          <Link to="/stations">
            <ButtonGroup>VIEW STATIONS</ButtonGroup>
          </Link>
        </ButtonContainer>
      </Container>
    </BigContainer>
  );
};

export default LandingPage;
