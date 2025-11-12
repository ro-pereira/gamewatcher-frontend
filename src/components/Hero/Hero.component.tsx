import { Box, Grid, TextField, Typography } from "@mui/material";
import arrowDown from "../../assets/icons8-sort-down-64.png";
import {
  heroContainerStyle,
  heroHeaderBoxSx,
  searchContainerSx,
  searchInputSx,
  subtitleContainerSx,
  titleContainerSx,
} from "./hero.style";

const Hero = () => {
  return (
    <Grid
      container
      flexDirection="column"
      position="relative"
      sx={heroContainerStyle}
    >
      <Box
        sx={heroHeaderBoxSx}
      >
        <Box sx={titleContainerSx}>
          <Typography
            variant="h1"
            align="center"
            color="secondary.contrastText"
          >
            Futebol 2025
          </Typography>
        </Box>

        <Box sx={subtitleContainerSx}>
          <Typography
            variant="body1"
            align="center"
            color="primary.contrastText"
          >
            Descubra onde assistir aos jogos de futebol ao vivo – TV, YouTube ou
            streaming. Pesquise e nunca mais perca uma partida!
          </Typography>
        </Box>
      </Box>

      <Box sx={searchContainerSx}>
        <Box sx={searchInputSx}>
          <Typography variant="body2" color="primary.contrastText">
            Onde assistir? Pesquise aqui!
          </Typography>
          <TextField />
        </Box>

        <Box>
          <img width="54rem" height="40rem" src={arrowDown} alt="arrow down" />
        </Box>
      </Box>
    </Grid>
  );
};
export default Hero;
