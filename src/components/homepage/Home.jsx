import React from "react";
import styled from "styled-components";
import { motion as m } from "framer-motion";
import Footer from "../footer/Footer";
import bgVideo from "../../assets/bgVideo.mp4";

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
  @media (max-width: 700px) {
    bottom: 10px;
    text-align: center;
  }
`;

const VideoContainer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -99;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  letter-spacing: 16px;
  color: black !important;
  -webkit-text-stroke: 0.5px white;
`;

const LandingPage = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "circInOut" }}
    >
      <BigContainer>
        <VideoContainer src={bgVideo} autoPlay loop muted />
        <Container>
          {" "}
          <m.div
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Title>HELSINKI CITY BIKES </Title>
          </m.div>
        </Container>
      </BigContainer>
      <Footer />
    </m.div>
  );
};

export default LandingPage;
