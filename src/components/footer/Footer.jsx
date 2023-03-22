import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0 auto;
  height: 50px;
  margin-top: auto;
`;
const Text = styled.p``;
const Anchor = styled.a`
  font-size: 50px;
  color: black;
  margin-left: 4px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text>&#169; 2023 Linh Nguyen - Dear code with love!</Text>
      <Anchor
        href="https://github.com/linh-nguyenkhanh/helsinki-bike-frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </Anchor>
    </FooterContainer>
  );
};

export default Footer;
