import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, NavbarExtendedContainer } from "../utils/Styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NavBarContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: black;
  gap: 10px;

  @media (min-width: 700px) {
    height: 80px;
    display: none;
  }
`;

const HamburgerButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
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
  color: white;
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

const NavbarLink = styled(Link)`
  text-decoration: none;
  margin: 10px;

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
      <NavbarLink to="/journeys">
        <NavButton>
          <Text>Journeys</Text>
        </NavButton>
      </NavbarLink>
      <Logo>
        <NavbarLink to="/">
          <NavButton>
            <LogoImage src="https://m.media-amazon.com/images/I/51-G-vCgr2L.png" />
          </NavButton>
        </NavbarLink>
      </Logo>
      <NavbarLink to="/stations">
        <NavButton>
          <Text>Stations</Text>
        </NavButton>
      </NavbarLink>
      {/* hamburger bar for mobile size */}
      <HamburgerButton
        onClick={() => {
          setExtendNavBar((current) => !current);
        }}
      >
        {extendNavBar ? (
          <>
            <AiOutlineCloseCircle />
          </>
        ) : (
          <div>
            <GiHamburgerMenu />
          </div>
        )}
      </HamburgerButton>
      {/* navbar container for mobile size */}
      {extendNavBar && (
        <NavbarExtendedContainer>
          <Text>
            {" "}
            <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
          </Text>
          <Text>
            {" "}
            <NavBarLinkExtended to="/journeys">Journeys</NavBarLinkExtended>
          </Text>
          <Text>
            {" "}
            <NavBarLinkExtended to="/stations">Stations</NavBarLinkExtended>
          </Text>
        </NavbarExtendedContainer>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
