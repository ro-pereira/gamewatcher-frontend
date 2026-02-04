"use client";

import { Box, OutlinedInput, Typography } from "@mui/material";
import { heroContainerSx, inputHeroSx, inputSx, titleContainerSx } from "./hero.style";
// import { headerContainerSx, inputBoxSx } from "../Header/header.style";
import { Dispatch, SetStateAction } from "react";

interface IHero {
  setChangeInput: Dispatch<SetStateAction<string>>;
  changeInput: string;
}

export const Hero = ({ changeInput, setChangeInput }: IHero) => {
  return (
    <Box sx={heroContainerSx}>
      <Box sx={titleContainerSx}>
        <Typography variant="h1" align="center" color="secondary.contrastText">
          Onde assistir os próximos jogos?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="primary.contrastText"
          width={"60%"}
        >
          Descubra onde assistir aos jogos de futebol ao vivo – TV, YouTube ou
          streaming. Pesquise e nunca mais perca uma partida!
        </Typography>
      </Box>

      <Box sx={inputHeroSx }>
        <Box sx={inputSx}>
          <OutlinedInput
            sx={{ width: "100%" }}
            placeholder="Digite o nome do time de futebol..."
            value={changeInput}
            onChange={(e) => setChangeInput(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  );
};
