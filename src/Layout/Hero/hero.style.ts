"use client";

import {
  heroTitleContainer,
  searchContainer,
} from "@/src/Theme/core/variables";
import { flexColumnAlignItemsCenter } from "@/src/Theme/core/layout.flex";
import { SxProps, Theme } from "@mui/material";

export const heroContainerSx: SxProps<Theme> = {
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

export const titleContainerSx: SxProps<Theme> = {
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

export const heroTitleSx: SxProps<Theme> = {
  color: "secondary.contrastText",
  fontWeight: 800,
  textAlign: "center",
};

export const heroSubtitleSx: SxProps<Theme> = {
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

export const searchContainerSx: SxProps<Theme> = {
  width: {
    xs: "calc(100% - 4rem)",
    sm: "55rem",
    md: "80rem",
    lg: "100rem",
  },

  minWidth: 0,

  pointerEvents: "auto",
  zIndex: 99,
  height: searchContainer.height,
  minHeight: searchContainer.minHeight,
};

export const outlineInputSx: SxProps<Theme> = {
  width: "100%",
  pointerEvents: "auto",
  zIndex: 999,
};
