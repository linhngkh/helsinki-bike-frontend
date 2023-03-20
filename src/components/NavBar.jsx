import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const NavBarContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 90px;
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
    color: #ffa600;
  }
`;
const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo>
        <LogoImage src="https://m.media-amazon.com/images/I/51-G-vCgr2L.png" />
        <Text style={{ fontSize: "25px" }}>CITYBIKES</Text>
      </Logo>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Text>Home</Text>
      </Link>
      <Link to="/journeys" style={{ textDecoration: "none" }}>
        <Text>All Journeys Information</Text>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
