"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/src/components/Header/Header.component";
import { Hero } from "@/src/components/Hero";
import { Section } from "@/src/components/Section";
import { flexColumnAlignItemsCenter } from "@/src/Theme/util/layout.flex";
import { Container } from "@mui/material";

const Home = () => {
  useEffect(() => {
    async function loadGsap() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
    }

    loadGsap();
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div id="smooth-wrapper">
      <Header heroTriggerRef={heroRef} />
      <div id="smooth-content">
        <Container
          sx={{
            ...flexColumnAlignItemsCenter,
            minHeight: "100vh",
            width: "100vw",
            position: "relative",
            overflow: "visible",
          }}
        >
          <Hero heroRef={heroRef} />
          <Section />
        </Container>
      </div>
    </div>
  );
};

export default Home;

