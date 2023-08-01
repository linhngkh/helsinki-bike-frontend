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
const Text = styled.p`
  color: white;
`;
const Anchor = styled.a`
  font-size: 50px;
  color: white;
  margin-left: 4px;
`;

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Text>&#169; {thisYear} Zoe Linh Nguyen - Write code with love!</Text>
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
