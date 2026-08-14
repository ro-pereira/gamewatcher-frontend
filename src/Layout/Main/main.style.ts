import {
  flexColumnAlignItemsCenter,
} from "@/src/Theme/core/layout.flex";

export const mainContainerSx = {
  position: "relative",
  minHeight: "100vh",
  zIndex: 0,
  ...flexColumnAlignItemsCenter,
  padding: {
    xs: "0 1rem 14rem",
    sm: "0 4rem 12rem 4rem",
  },

  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",
};
