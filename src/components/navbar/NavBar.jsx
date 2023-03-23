import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../utils/Styled";

const NavBarContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin: 0 auto;
  background-color: black;
  gap: 10px;
`;

const Logo = styled.div``;

const LogoImage = styled.img`
  width: 60px;
`;
const Text = styled.h5`
  font-family: "Righteous", cursive;
  font-size: 25px;
  color: white;

  &:focus,
  &:active {
    text-decoration: none;
  }
`;

const NavButton = styled(Button)`
  background-color: transparent;
  border: none;
  &:hover {
    border-radius: 7px;
    border: 5px solid transparent;
    mask-composite: exclude;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/journeys" style={{ textDecoration: "none" }}>
        <NavButton>
          <Text>Journeys</Text>
        </NavButton>
      </Link>
      <Logo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavButton>
            <LogoImage src="https://m.media-amazon.com/images/I/51-G-vCgr2L.png" />
          </NavButton>
        </Link>
      </Logo>
      <Link to="/stations" style={{ textDecoration: "none" }}>
        <NavButton>
          <Text>Stations</Text>
        </NavButton>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
