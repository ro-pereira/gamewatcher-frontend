import { flexRowJustifyContentCenter } from "@/src/Theme/core/layout.flex";

export const paginationButtonBoxSx = {
  width: {
    xs: "100%",
    sm: "55rem",
    md: "80rem",
    lg: "100rem",
  },

  padding: {
    xs: "0.5rem 1.5rem",
    sm: "1rem",
  },
  gap: {
    xs: "0.5rem",
    sm: "1rem",
  },
  boxSizing: "border-box",
  ...flexRowJustifyContentCenter,
};

export const paginationButtonSx = {
  textTransform: "capitalize",
  flex: {
    xs: "1 1 0",
    sm: "0 1 auto",
  },

  width: {
    xs: "auto",
    sm: "100%",
  },

  height: {
    xs: "4.8rem",
    sm: "4rem",
  },

  minWidth: {
    xs: 0,
    sm: "auto",
  },

  borderRadius: {
    xs: "0.8rem",
    sm: "0.5rem",
  },

  padding: 0,
};
