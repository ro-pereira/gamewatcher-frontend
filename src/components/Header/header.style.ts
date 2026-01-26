import { flexColumnAlignItemsCenter } from "@/src/Theme/util/layout.flex";

export const headerContainerSx = {
  backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",

  ...flexColumnAlignItemsCenter,
  justifyContent: "flex-end",

  position: "relative",
  top: 0,
  zIndex: 1,

  height: "calc(40vh + 25rem)",
  minHeight: "calc(30rem + 25rem)",
  width: "100%",
  minWidth: "42rem",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-1rem",
    left: 0,
    width: "100%",
    height: "20%",
    background: "linear-gradient(to top, rgb(1, 2, 5), transparent)",
    pointerEvents: "none",
  },
};

export const inputBoxSx = {
  position: "relative",
  pointerEvents: "auto",
  zIndex: 99,
  ...flexColumnAlignItemsCenter,
  justifyContent: "center",
  gap: 1,
  height: "25rem",
  width: {
    xs: "38rem",
    md: "40rem",
    lg: "60rem",
  },
  padding: "1rem",
};
