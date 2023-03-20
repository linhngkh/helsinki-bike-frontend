import React from "react";
import styled from "styled-components";
import { Button } from "./styled/ButtonStyled";

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0 auto;
  background-image: url("/public/assets/bd.jpeg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  position: relative;
  bottom: 160px;
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
          <ButtonGroup>VIEW STATIONS </ButtonGroup>
          <ButtonGroup>VIEW JOURNEYS</ButtonGroup>
        </ButtonContainer>
      </Container>
    </BigContainer>
  );
};

export default LandingPage;
