import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styled/ButtonStyled";

const NavBarContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
  margin: 0 auto;
  background-color: white;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  border-radius: 50%;
  width: 60px;
`;
const Text = styled.h5`
  font-family: "Righteous", cursive;
  font-size: 25px;
  color: black;

  &:focus,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: white;
  }
`;

const TextTitle = styled(Text)`
  fontsize: "25px";
  &:hover {
    color: black;
  }
`;

const NavButton = styled(Button)`
  background-color: white;
  padding: 5px 10px;
  &:hover {
    background-color: #ff7b00;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo>
        <LogoImage src="https://m.media-amazon.com/images/I/51-G-vCgr2L.png" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <TextTitle>CITYBIKES</TextTitle>
        </Link>
      </Logo>

      <Link to="/journeys" style={{ textDecoration: "none" }}>
        <NavButton>
          <Text>Journeys</Text>
        </NavButton>
      </Link>
      <Link to="/stations" style={{ textDecoration: "none" }}>
        <NavButton>
          <Text>Stations</Text>
        </NavButton>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
