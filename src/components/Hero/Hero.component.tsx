"use client";

import {
  heroTitleContainer,
  searchContainer,
} from "@/src/Theme/core/variables";
import { TGames } from "@/src/Theme/type";
import { Box, OutlinedInput, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import { CardChampionchip } from "../CardChampionship/CardChampionship.component";
import { SearchCarousel } from "../SearchCarousel/SearchCarousel.component";
import {
  heroContainerSx,
  searchContainerSx,
  titleContainerSx,
} from "./hero.style";

interface IHero {
  upcomingGamesList: TGames[];
}

export const Hero = ({ upcomingGamesList }: IHero) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [changeInput, setChangeInput] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.to(heroRef.current, {
      height: changeInput
        ? `calc(${heroTitleContainer.height} + ${searchContainer.height} + 16vh)`
        : `calc(${heroTitleContainer.height} + ${searchContainer.height})`,
      minHeight: changeInput
        ? `calc(${heroTitleContainer.minHeight} + ${searchContainer.minHeight} + 30rem)`
        : `calc(${heroTitleContainer.minHeight} + ${searchContainer.minHeight})`,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [changeInput]);

  const searchResult = useMemo(() => {
    const today = new Date();

    const gameFiltered = upcomingGamesList.filter((game: TGames) => {
      return new Date(game.date) >= today;
    });

    const sortByDateGames = [...gameFiltered].sort(
      (a: TGames, b: TGames): number => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      },
    );

    if (!changeInput) return sortByDateGames;

    return sortByDateGames.filter((game: TGames) => {
      return (
        game.team_1_name.toLowerCase().includes(changeInput.toLowerCase()) ||
        game.team_2_name.toLowerCase().includes(changeInput.toLowerCase())
      );
    });
  }, [changeInput, upcomingGamesList]);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    gsap.to(el, {
      x: () => -(el.scrollWidth - el.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: () => `+=${el.scrollWidth}`,
        scrub: true,
        pin: true,
      },
    });
  }, []);

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
        {changeInput && (
          <SearchCarousel>
            {searchResult.map((games: TGames, index) => {
              return <CardChampionchip key={index} game={games} />;
            })}
          </SearchCarousel>
        )}
      </Box>
    </Box>
  );
};
