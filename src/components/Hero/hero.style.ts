"use client";

import {
  heroTitleContainer,
  searchContainer,
} from "@/src/Theme/core/variables";
import { flexColumnAlignItemsCenter } from "@/src/Theme/core/layout.flex";
import { SxProps, Theme } from "@mui/material";

export const heroContainerSx: SxProps<Theme> = {
  width: "100%",
  minWidth: "42rem",

  backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  ...flexColumnAlignItemsCenter,

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

export const titleContainerSx: SxProps<Theme> = {
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

export const heroTitleSx: SxProps<Theme> = {
  color: "secondary.contrastText",
  fontWeight: 700,
};

export const heroSubtitleSx: SxProps<Theme> = {
  color: "primary.contrastText",
  width: "60%",
  mx: "auto",
  mt: 2,
};

export const searchContainerSx: SxProps<Theme> = {
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

export const outlineInputSx: SxProps<Theme> = {
  width: "100%",
  pointerEvents: "auto",
  zIndex: 999,
};
