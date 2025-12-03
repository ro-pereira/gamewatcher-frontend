"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import {
  heroContainerStyle,
  heroHeaderBoxSx,
  searchContainerSx,
  subtitleContainerSx,
  titleContainerSx,
} from "./hero.style";
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
        { height: "100vh" },
        {
          // opacity: 0,
          y: -100,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    loadGsap();
  }, [heroRef]);

  return (
    <Grid
      ref={heroRef}
      container
      flexDirection="column"
      position="relative"
      sx={{
        minHeight: "80vh",
        paddingTop: "2rem",
        zIndex: 9999,
        position: "relative",
        top: 0,
        pointerEvents: "auto",
      }}
    >
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
              Descubra onde assistir aos jogos de futebol ao vivo – TV, YouTube
              ou streaming. Pesquise e nunca mais perca uma partida!
            </Typography>
          </Box>
        </Box>

        <Box sx={searchContainerSx}>
          <Box sx={{ zIndex: 99 }}>
            {/* SUMIR AO scrollar OU AO CLICAR PARA DIGITAR */}
            <Image
              src="/arrow-down.png"
              height={50}
              width={60}
              alt="Arrow down"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
