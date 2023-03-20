import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;
const Button = styled.button`
  background-color: #ff7b00;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  color: white;
`;

const LandingPage = () => {
  return (
    <Container>
      <Title>HELSINKI CITY BIKES </Title>
      <Button>VIEW DETAILS</Button>
    </Container>
  );
};

export default LandingPage;
