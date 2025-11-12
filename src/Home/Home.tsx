import { Container } from "@mui/material";
import Hero from "../components/Hero/Hero.component";

function Home() {
  return (
  <Container sx={{
        display: 'flex',
        flexDirection: 'column', 
        minHeight: "100vh",
        alignItems: "center",
        width: "100vw",
        // border: "1px solid red",
        position: "relative"
      }}>
        <Hero/>
  
    </Container>
  );
}
      // xs: 0,
      // sm: 600,
      // md: 900,
      // lg: 1200,
      // xl: 1536,
export default Home;

