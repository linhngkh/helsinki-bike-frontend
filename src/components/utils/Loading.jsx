import styled from "styled-components";

const Container = styled.div`
            display: "flex";
            align-items: "center":
            justify-content: "center";
            padding: "20px";
`;

const Loading = () => {
  return (
    <Container>
      <h2>Loading station... Please wait for a moment...⏳ </h2>
    </Container>
  );
};

export default Loading;
