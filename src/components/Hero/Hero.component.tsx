"use client";

import { Games } from "@/src/components/Types/type";
import useHeroHeightAnimation from "@/src/hooks/useHeroHeightAnimation";
import useHorizontalScroll from "@/src/hooks/useHorizontalScroll";
import useSearchResult from "@/src/hooks/useSearchResult";
import {
  heroTitleContainer,
  searchContainer,
} from "@/src/Theme/core/variables";
import { Box, OutlinedInput, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { CardChampionchip } from "../CardChampionship/CardChampionship.component";
import { SearchCarousel } from "../SearchCarousel/SearchCarousel.component";
import { HeroProps } from "../Types/interface";
import {
  heroContainerSx,
  heroSubtitleSx,
  heroTitleSx,
  outlineInputSx,
  searchContainerSx,
  titleContainerSx,
} from "./hero.style";

export const Hero = ({ upcomingGamesList }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [changeInput, setChangeInput] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useHeroHeightAnimation(
    heroRef,
    !!changeInput,
    heroTitleContainer,
    searchContainer,
  );

  const searchResult = useSearchResult(upcomingGamesList, changeInput);

  useHorizontalScroll(containerRef);

  return (
    <Box ref={heroRef} sx={heroContainerSx}>
      <Box sx={titleContainerSx}>
        <Typography variant="h1" sx={heroTitleSx}>
          Onde assistir os próximos jogos?
        </Typography>
        <Typography variant="body1" sx={heroSubtitleSx}>
          Descubra onde assistir aos jogos de futebol ao vivo – TV, YouTube ou
          streaming. Pesquise e nunca mais perca uma partida!
        </Typography>
      </Box>

      <Box sx={searchContainerSx}>
        <OutlinedInput
          sx={outlineInputSx}
          placeholder="Digite o nome do time de futebol..."
          value={changeInput}
          onChange={(e) => setChangeInput(e.target.value)}
        />
        {changeInput && (
          <SearchCarousel>
            {searchResult.map((games: Games, index) => {
              return <CardChampionchip key={index} game={games} />;
            })}
          </SearchCarousel>
        )}
      </Box>
    </Box>
  );
};
