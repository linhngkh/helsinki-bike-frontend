import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
const FooterContainer = styled.div`
  position: sticky;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0 auto;
  height: 50px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&#169; Linh Nguyen - 2023 From Code With Love</p>
      <a
        href="https://github.com/linh-nguyenkhanh/helsinki-bike-frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="medium" />
      </a>
    </FooterContainer>
  );
};

export default Footer;
