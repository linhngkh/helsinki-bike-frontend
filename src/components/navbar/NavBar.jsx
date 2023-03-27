import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, NavBarExtendedContainer } from "../utils/Styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NavBarContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  height: {
    $(props) = > {
      (props.extendNavbar? "100vh": "70px");
    }
  }
  width: 100%;
  background-color: black;
  gap: 10px;
`;

const HamburgerButton = styled.button`
  position: relative;
  left: 140px;
  margin-top: 10px;
  width: 60px;
  height: 40px;
  border: none;
  color: white;
  background: none;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

const Logo = styled.div``;

const LogoImage = styled.img`
  width: 50px;
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
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavBarLinkExtended = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px;
`;

const NavBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);

  return (
    <NavBarContainer extendNavbar={extendNavBar}>
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
      {/* hamburger bar for mobile size */}
      <HamburgerButton
        onClick={() => {
          setExtendNavBar((current) => !current);
        }}
      >
        {extendNavBar ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
      </HamburgerButton>
      {/* navbar container for mobile size */}
      {extendNavBar && (
        <NavBarExtendedContainer>
          <NavBarLinkExtended to="/" style={{ textDecoration: "none" }}>
            <NavButton>
              <Text>Home</Text>
            </NavButton>
          </NavBarLinkExtended>
          <NavBarLinkExtended to="/journeys" style={{ textDecoration: "none" }}>
            <NavButton>
              <Text>Journeys</Text>
            </NavButton>
          </NavBarLinkExtended>
          <NavBarLinkExtended to="/stations" style={{ textDecoration: "none" }}>
            <NavButton>
              <Text>Stations</Text>
            </NavButton>
          </NavBarLinkExtended>
        </NavBarExtendedContainer>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
