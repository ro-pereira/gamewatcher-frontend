import { Container } from "@mui/material";
import { flexColumnAlignItemsCenter } from "../theme/utils/layout.flex";
import { Hero } from "../components/Hero/index";

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
}

export default Home;

