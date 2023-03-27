import styled from "styled-components";

export const Button = styled.button`
  background-color: #ff7b00;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s ease-out;
  letter-spacing: 2px;
  font-family: "Righteous", cursive;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0 auto;
`;

export const NavBarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: red;
  width: 400px;
  @media (min-width: 700px) {
    display: none;
  }
`;
