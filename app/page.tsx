import { Hero } from "@/src/components/Hero";
import { flexColumnAlignItemsCenter } from "@/src/Theme/util/layout.flex";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        ...flexColumnAlignItemsCenter,
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Hero />
    </Container>
  );
};

export default Home;

