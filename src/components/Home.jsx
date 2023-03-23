import React from "react";
import styled from "styled-components";
import { Button } from "./utils/Styled";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { container } from "./utils/Animations";
import Footer from "./footer/Footer";
import bgVideo from "../assets/bgVideo.mp4";

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  position: relative;
  bottom: 280px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 16px;
  -webkit-text-stroke: 0.5px white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Ulist = styled.ul``;

const ButtonGroup = styled(Button)`
  color: white;
  margin-left: 15px;

  &:hover {
    background-color: #b45309;
  }
`;

const LandingPage = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "circInOut" }}
    >
      <BigContainer>
        <video src={bgVideo} autoPlay loop muted />
        <Container>
          <m.div
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Title>HELSINKI CITY BIKES </Title>
          </m.div>

          <ButtonContainer>
            <Ulist variants={container} initial="hidden" animate="show">
              {" "}
              <Link to="/journeys">
                <ButtonGroup>VIEW JOURNEYS</ButtonGroup>
              </Link>
              <Link to="/stations">
                <ButtonGroup>VIEW STATIONS</ButtonGroup>
              </Link>
            </Ulist>
          </ButtonContainer>
        </Container>
      </BigContainer>
      <Footer />
    </m.div>
  );
};

export default LandingPage;
