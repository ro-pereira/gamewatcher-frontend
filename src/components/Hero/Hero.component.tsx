"use client";

import { Box, Typography } from "@mui/material";
import { heroContainerSx, subtitleContainerSx, titleContainerSx } from "./hero.style";

export const Hero = () => {
  return (
    <Box
      sx={heroContainerSx}
    >
      <Box
        sx={titleContainerSx}
      >
        <Typography variant="h1" align="center" color="secondary.contrastText">
          Futebol 2025
        </Typography>
      </Box>

      <Box
        sx={subtitleContainerSx}
      >
        <Typography variant="body1" align="center" color="primary.contrastText">
          Descubra onde assistir aos jogos de futebol ao vivo – TV, YouTube ou
          streaming. Pesquise e nunca mais perca uma partida!
        </Typography>
      </Box>
    </Box>
  );
};
