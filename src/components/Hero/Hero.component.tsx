"use client";

import { TGames } from "@/src/Theme/type";
import { Box, OutlinedInput, Typography } from "@mui/material";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import {
  heroContainerSx,
  // inputSx,
  searchContainerSx,
  searchResultSx,
  titleContainerSx,
} from "./hero.style";

interface IHero {
  upcomingGamesList: TGames[];
}

export const Hero = ({ upcomingGamesList }: IHero) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
    const [changeInput, setChangeInput] = useState< string | null>(null);
  

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.to(heroRef.current, {
      height: changeInput ? "calc(15vh + 10vh + 5vh)" : "calc(15vh + 10vh)",
      minHeight: changeInput
        ? "calc(25rem + 15rem + 20rem)"
        : "calc(25rem + 15rem )",
      duration: 0.5,
      ease: "power3.out",
    });
  }, [changeInput]);

  return (
    <Box ref={heroRef} sx={heroContainerSx}>
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

      <Box sx={searchContainerSx}>
        <OutlinedInput
          sx={{ width: "100%", pointerEvents: "auto", zIndex: 999 }}
          placeholder="Digite o nome do time de futebol..."
          value={changeInput}
          onChange={(e) => setChangeInput(e.target.value)}
        />
      </Box>
      {changeInput && <Box sx={searchResultSx}>d</Box>}
    </Box>


  );
};
