"use client";

import { Box, OutlinedInput, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export const headerStyle = {
  backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  display: "flex",
  justifyContent: "center",
};

type HeaderProps = {
  heroTriggerRef: React.RefObject<HTMLDivElement | null>;
};

export const Header = ({ heroTriggerRef }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadGsap() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
         { height: "130vh", filter: "blur(2px)" },
        {
          height: "30rem",
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: heroTriggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        inputBoxRef.current,
        { top: "55%" },
        {
           top: "5%",
          ease: "none",
          scrollTrigger: {
            trigger: heroTriggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    loadGsap();
  }, [heroTriggerRef]);

  return (
    <>
      <Box ref={headerRef} sx={headerStyle} />
      <Box
        ref={inputBoxRef}
        sx={{
          position: "fixed",
          top: "55%",
          pointerEvents: "auto",
          zIndex: 9999,
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems:"center"
        }}
      >
        <Typography variant="body2" color="primary.contrastText">
          Onde assistir? Pesquise aqui!
        </Typography>
        <OutlinedInput
          sx={{ width: "40rem", pointerEvents: "auto" }}
          placeholder="Pesquise pelo time, canal ou campeonato..."
        />
      </Box>
    </>
  );
};
