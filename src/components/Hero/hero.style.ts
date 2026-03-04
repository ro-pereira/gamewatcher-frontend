"use client"

import {
  heroTitleContainer,
  searchContainer,
} from "@/src/Theme/core/variables";
import {
  flexColumnAlignItemsCenter,
} from "@/src/Theme/core/layout.flex";

export const heroContainerSx = {
  width: "100%",
  minWidth: "42rem",

  backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  ...flexColumnAlignItemsCenter,
  // gap: 2,

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    minWidth: "42rem",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(14px)",
    transform: "scale(1.1)",
    WebkitBackdropFilter: "blur(14px)",
    inset: 0,
    background: `
    linear-gradient(
      to top,
      rgb(1, 2, 5) 0%,
      rgba(1, 2, 5, 0.46) 40%,
      rgba(0, 0, 0, 0) 100%
    )
  `,
    pointerEvents: "none",
  },
};

export const titleContainerSx = {
  zIndex: 99,
  width: {
    xs: "34rem",
    sm: "40rem",
    md: "46rem",
    lg: "50vw",
  },

  height: heroTitleContainer.height,
  minHeight: heroTitleContainer.minHeight,
  ...flexColumnAlignItemsCenter,
  justifyContent: "center",
  gap: 2,
};

export const searchContainerSx = {
  ...flexColumnAlignItemsCenter,
  justifyContent: "flex-start",
  width: {
    xs: "42rem",
    sm: "55rem",
    md: "80rem",
    lg: "100rem",
  },
  minWidth: "42rem",
  pointerEvents: "auto",
  zIndex: 99,
  position: "relative",
  height: searchContainer.height,
  gap: 3,
  minHeight: searchContainer.minHeight,
};

export const inputSx = {
  position: "relative",
  zIndex: 99,
  ...flexColumnAlignItemsCenter,
  justifyContent: "center",
  height: "1.7rem",
  width: {
    xs: "38rem",
    md: "40rem",
    lg: "60rem",
  },
  padding: "1rem",
};
