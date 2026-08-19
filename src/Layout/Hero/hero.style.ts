"use client";

import { flexColumnAlignItemsCenter } from "@/src/Theme/core/layout.flex";
import {
  heroTitleContainer
} from "@/src/Theme/core/variables";

export const heroContainerSx = {
  position: "relative",

  width: "100%",
  minWidth: 0,

  backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",

  ...flexColumnAlignItemsCenter,

  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,

    width: "100%",
    height: "100%",

    backdropFilter: "blur(14px)",

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
    xs: "100%",
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

export const heroTitleSx = {
  color: "secondary.contrastText",
  fontWeight: 800,
  textAlign: "center",
};

export const heroSubtitleSx = {
  color: "primary.contrastText",
  ...flexColumnAlignItemsCenter,
  textAlign: "center",
  width: {
    xs: "calc(100% - 2rem)",
    sm: "25rem",
    md: "30rem",
    lg: "30vw",
  },

  maxWidth: "30rem",
};

export const searchContainerSx = {
  width: {
    xs: "calc(100% - 4rem)",
    sm: "55rem",
    md: "80rem",
    lg: "97rem",
  },

  display: "flex",
  flexDirection: "column",
  gap: 2,

  minWidth: 0,

  pointerEvents: "auto",
  zIndex: 99,
};

export const outlineInputSx = {
  width: "100%",
  pointerEvents: "auto",
  zIndex: 999,
};

export const boxInfoNotfoundSx = {
  width: "100%",
  height: "12rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "1.6rem",
  backgroundColor: "background.paper",
};
