import styled from "styled-components";
import { Skeleton } from "@mui/material";

const Container = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: "center";
  padding: "20px";
`;

const Loading = () => {
  return (
    <Container>
      <Skeleton
        variant="rectangular"
        width={"50%"}
        height={500}
        sx={{
          margin: "0 auto",
          bgcolor: "gray",
        }}
      />
    </Container>
  );
};

export default Loading;
