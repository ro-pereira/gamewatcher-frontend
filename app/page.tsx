"use client";

import { Header } from "@/src/components/Header/Header.component";
import { Hero } from "@/src/components/Hero";
import { Section } from "@/src/components/Section";

const Home = () => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <Hero />
        <Section />
      </div>
    </div>
  );
};

export default Home;

