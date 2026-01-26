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

  paddingTop: "5rem",

  position: "absolute",
  zIndex: 2,
  top: 0,
};

export const titleContainerSx = {
  width: {
    xs: "38rem",
    md: "40rem",
    lg: "60rem",
  },
  minWidth: "34rem",
  height:{
    xs: "14rem",
    lg: "18rem"
  },
  minHeight: "14rem",

  ...flexRowCenter,
  boxShadow: "5px 5px 8px 4px rgba(1, 2, 5, 1)",
  borderRadius: "2rem",
  bgcolor: "secondary.main",
};

export const subtitleContainerSx = {
  width: {
    xs: "30rem",
    lg: "50rem",
  },
  minWidth: "30rem",
  height: {
    xs: "14rem",
    lg: "18rem"
  },
  minHeight: "14rem",

  position: "relative",
  ...flexRowCenter,
  padding: { xs: "2rem", lg: "4rem" },
  top: "-3rem",
  boxShadow: "5px 5px 8px 4px rgb(1, 2, 5)",
  borderRadius: "2rem",
  bgcolor: "primary.main",
};
