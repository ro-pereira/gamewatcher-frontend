import { Box, Grid, OutlinedInput, Typography } from "@mui/material";
import Image from "next/image";
import {
  heroContainerStyle,
  heroHeaderBoxSx,
  searchContainerSx,
  searchInputSx,
  subtitleContainerSx,
  titleContainerSx,
} from "./hero.style";

export const Hero = () => {
  return (
    <Grid
      container
      flexDirection="column"
      position="relative"
      sx={heroContainerStyle}
    >
      <Box sx={heroHeaderBoxSx}>
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
          <OutlinedInput placeholder="Pesquise pelo time, canal ou campeonato..." />
        </Box>

        <Box sx={{ zIndex: 99 }}>
          <Image
            src="/arrow-down.png"
            height={50}
            width={60}
            alt="Arrow down"
          />
        </Box>
      </Box>
    </Grid>
  );
};
