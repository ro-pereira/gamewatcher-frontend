"use client";

import { Box, Grid, Typography } from "@mui/material";
// import Image from "next/image";
import { useEffect } from "react";
import {
  heroHeaderBoxSx,
  searchContainerSx,
  subtitleContainerSx,
  titleContainerSx,
} from "./hero.style";
import { ArrowDown } from "../ArrowIconAnimation";
type HeroProps = {
  heroRef: React.RefObject<HTMLDivElement | null>;
};

export const Hero = ({ heroRef }: HeroProps) => {
  useEffect(() => {
    async function loadGsap() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        heroRef.current,
        { y: 0 },
        {
          y: -350,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top+=1000",
            scrub: 3,
            scroller: "#smooth-content", 
          },
        }
      );
    }

    loadGsap();
  }, [heroRef]);

  return (
    <Grid
      ref={heroRef}
      sx={{
        minHeight: "80vh",
        paddingTop: "2rem",
        top: 0,
        pointerEvents: "none",
      }}
    >
      <Grid container flexDirection="column" position="relative">
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
              Descubra onde assistir aos jogos de futebol ao vivo – TV, YouTube
              ou streaming. Pesquise e nunca mais perca uma partida!
            </Typography>
          </Box>
        </Box>

        <Box sx={searchContainerSx}>
          <Box>
            <ArrowDown heroRef={heroRef} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
