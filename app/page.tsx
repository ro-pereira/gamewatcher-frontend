"use client";

import { Hero } from "@/src/components/Hero";
import { Main } from "@/src/components/Main";
import { useEffect, useState } from "react";

const Home = () => {
  const [changeInput, setChangeInput] = useState<string>("");
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

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero setChangeInput={setChangeInput} changeInput={changeInput} />
        <Main />
      </div>
    </div>
  );
};

export default Home;

