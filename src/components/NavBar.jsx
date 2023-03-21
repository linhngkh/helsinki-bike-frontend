import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styled/Styled";

const NavBarContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin: 10px auto;
  background-color: transparent;
`;

const Logo = styled.div``;

const LogoImage = styled.img`
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
  background-color: transparent;

  &:hover {
    background-color: #ff7b00;
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
          <LogoImage src="https://m.media-amazon.com/images/I/51-G-vCgr2L.png" />
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
