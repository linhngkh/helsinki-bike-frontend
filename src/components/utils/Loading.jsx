import styled from "styled-components";
import { Skeleton } from "@mui/material";
const Container = styled.div`
            display: "flex";
            align-items: "center":
            justify-content: "center";
            padding: "20px";
`;

const Loading = () => {
  return (
    <Container>
      <Skeleton
        variant="rectangular"
        width={"70%"}
        height={500}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      />
    </Container>
  );
};

export default Loading;
