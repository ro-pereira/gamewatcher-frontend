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

  height: "calc(50vh + 15rem)",
  minHeight: "calc(30rem + 15rem)",
  width: "100%",
  minWidth: "42rem",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "20%",
    background: "linear-gradient(to top, rgb(0, 0, 0), transparent)",
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

  height: "18rem",
  width: {
    xs: "38rem",
    md: "40rem",
    lg: "60rem",
  },
  padding: "1rem",
};
