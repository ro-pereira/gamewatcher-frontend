import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Typography variant="h1" align="center" color="secondary.contrastText">
        Futebol 2025
      </Typography>
    </Container>
  );
};

export default Home;

