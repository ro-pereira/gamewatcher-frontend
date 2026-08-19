"use client";

import { Games } from "@/src/Types/type";
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

import { HeroProps } from "../../Types/interface";
import {
  boxInfoNotfoundSx,
  heroContainerSx,
  heroSubtitleSx,
  heroTitleSx,
  outlineInputSx,
  searchContainerSx,
  titleContainerSx,
} from "./hero.style";
import { SearchCarousel } from "@/src/components/SearchCarousel/SearchCarousel.component";
import { GameCard } from "@/src/components/GameCard/GameCard.component";

export const Hero = ({ upcomingGamesList }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [changeInput, setChangeInput] = useState<string>("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const searchResult = useSearchResult(upcomingGamesList, changeInput);
  const hasInput = changeInput.length > 0;
  const hasSearch = hasInput && searchResult.length > 0;
  const showNoResults = hasInput && searchResult.length === 0;

  gsap.registerPlugin(ScrollTrigger);

  useHeroHeightAnimation(
    heroRef,
    hasSearch,
    showNoResults,
    heroTitleContainer,
    searchContainer,
  );
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

      <Box ref={searchContainerRef} sx={searchContainerSx}>
        <OutlinedInput
          sx={outlineInputSx}
          placeholder="Digite o nome do time de futebol..."
          value={changeInput}
          onChange={(e) => setChangeInput(e.target.value)}
        />
        
        {changeInput && searchResult.length > 0 && (
          <SearchCarousel>
            {searchResult.map((games: Games, index) => {
              return <GameCard key={index} game={games} />;
            })}
          </SearchCarousel>
        )}

        {showNoResults && (
          <Box sx={boxInfoNotfoundSx}>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
            >
              Nenhum jogo encontrado para &quot;{changeInput}&quot;.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
