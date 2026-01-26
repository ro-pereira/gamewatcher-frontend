"use client";

import { Box, OutlinedInput, Typography } from "@mui/material";
import { useRef } from "react";
import { headerContainerSx, inputBoxSx } from "./header.style";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Box ref={headerRef} sx={headerContainerSx}>
      <Box ref={inputBoxRef} sx={inputBoxSx}>
        <Typography
          variant="body2"
          width="100%"
          textAlign="initial"
          color="primary.contrastText"
        >
          Onde assistir? Pesquise aqui!
        </Typography>
        <OutlinedInput
          sx={{ width: "100%" }}
          placeholder="Pesquise pelo time, canal ou campeonato..."
        />
      </Box>
    </Box>
  );
};
