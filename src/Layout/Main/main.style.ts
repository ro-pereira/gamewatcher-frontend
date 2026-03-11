import {
  flexColumnAlignItemsCenter,
  flexRowCenter,
} from "@/src/Theme/core/layout.flex";

export const mainContainerSx = {
  position: "relative",
  minHeight: "100vh",
  zIndex: 0,
  ...flexColumnAlignItemsCenter,
  alingSelf: "center",
  padding: {
    xs: 2,
    sm: "2rem 4rem 12rem 4rem"
  },
  width: "100%",
  minWidth: "42rem",

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
  gap: {xs: 0, sm: 1}
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
