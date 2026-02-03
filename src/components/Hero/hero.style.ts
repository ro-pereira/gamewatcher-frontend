import {
  flexColumnAlignItemsCenter,
  flexRowCenter,
} from "@/src/Theme/util/layout.flex";

export const heroContainerSx = {
  height: "50vh",
  minHeight: "30rem",
  width: "100%",
  minWidth: "42rem",

  pointerEvents: "none",

  ...flexColumnAlignItemsCenter,
  justifyContent: "flex-end",

  position: "absolute",
  zIndex: 2,
  top: 0,
};

export const titleContainerSx = {
  width: {
    xs: "34rem",
    sm: "40rem",
    md: "46rem",
    lg: "50rem",
  },
  minWidth: "34rem",
  height: {
    xs: "12rem",
    lg: "14rem"
  },

  ...flexRowCenter,
  boxShadow: "5px 5px 8px 4px rgba(1, 2, 5, 1)",
  borderRadius: "2rem",
  bgcolor: "secondary.main",
};

export const subtitleContainerSx = {
  width: {
    xs: "26rem",
    sm: "30rem",
    md: "36rem",
    lg: "40rem",
  },
  minWidth: "26rem",
    height: {
    xs: "12rem",
    lg: "14rem"
  },

  position: "relative",
  ...flexRowCenter,
  padding: { xs: "4rem", lg: "6rem" },
  top: "-3rem",
  boxShadow: "5px 5px 8px 4px rgb(1, 2, 5)",
  borderRadius: "2rem",
  bgcolor: "primary.main",
};
