import {
  flexColumnAlignItemsCenter,
  flexRowCenter,
  // flexRowCenter,
} from "@/src/Theme/util/layout.flex";

export const heroContainerSx = {
  width: "100%",
  minWidth: "42rem",

  backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  ...flexColumnAlignItemsCenter,
  gap: 3,

  "&::after": {
    content: '""',
    position: "absolute",
    // bottom: "-1rem",
    left: 0,
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

  height: "15vh",
  minHeight: "25rem",
  ...flexColumnAlignItemsCenter,
  justifyContent: "center",
  gap: 3,
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

  zIndex: 99,
  position: "relative",
  top: "-2rem",
  height: "8vh",
  gap: 3,
  minHeight: "10rem",
};

export const inputSx = {
  position: "relative",
  pointerEvents: "auto",
  zIndex: 999,
  ...flexColumnAlignItemsCenter,
  justifyContent: "center",
  width: {
    xs: "38rem",
    md: "40rem",
    lg: "60rem",
  },
  padding: "1rem",
};

export const searchResultSx = {
  position: "relative",
  width: "100%",
  pointerEvents: "none",
  ...flexRowCenter,
  borderRadius: "1rem",
  minHeight: "20rem",
};
