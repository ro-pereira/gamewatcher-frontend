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
  zIndex: 0,
  height: "100vh",
  width: "100vw",
  display: "flex",
  pointerEvents: "none",
  // alignItems: "flex-start",
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
        { height: "100vh" },
        {
          height: "250px", // altura mínima final
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
        { yPercent: 50 }, // começa na metade inferior do header
        {
          yPercent: 0, // termina centralizado no header final
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
    <Box ref={headerRef} sx={headerStyle}>
      <Box ref={inputBoxRef} sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="primary.contrastText">
          Onde assistir? Pesquise aqui!
        </Typography>
        <OutlinedInput placeholder="Pesquise pelo time, canal ou campeonato..." />
      </Box>
    </Box>
  );
};
