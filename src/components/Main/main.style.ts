import {
  flexColumnAlignItemsCenter,
  flexRowCenter,
} from "@/src/Theme/core/layout.flex";

export const mainContainerSx = {
  position: "relative",
  minHeight: "100vh",
  zIndex: 0,
  ...flexColumnAlignItemsCenter,
  padding: "2rem 4rem 12rem 4rem",
  gap: "2rem",
  width: "100%",

};

export const paginationButtonBoxSx = {
  width: {
    xs: "42rem",
    sm: "55rem",
    md: "80rem",
    lg: "100rem",
  },
  minWidth: "42rem",
  maxWidth: "100rem",
  ...flexRowCenter,
  gap: 1
};

export const paginationButtonSx = {
  textTransform: "capitalize",
  width: "100%",
  height: "4rem",
};

export const tableSx = {
    width: {
    xs: "42rem",
    sm: "55rem",
    md: "80rem",
    lg: "100rem",
  },
  minWidth: "42rem",
}
