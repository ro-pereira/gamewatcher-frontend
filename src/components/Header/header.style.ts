import { flexColumnAlignItemsCenter } from "@/src/Theme/util/layout.flex";

// export const headerContainerSx = {
//   backgroundImage: "url('/the-soccer-ball.jpg')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",

//   ...flexColumnAlignItemsCenter,
//   justifyContent: "flex-end",

//   position: "relative",
//   top: 0,
//   zIndex: 1,

//   height: "55vh",
//   // minHeight: "calc(30rem + 25rem)",
//   width: "100%",
//   minWidth: "42rem",

//   "&::after": {
//     content: '""',
//     position: "absolute",
//     bottom: "-1rem",
//     left: 0,
//     width: "100%",
//     height: "100%",
//   backdropFilter: "blur(14px)",
//   transform: "scale(1.1)", /* evita bordas duras */
//     WebkitBackdropFilter: "blur(14px)",
//       inset: 0,

//     // background: "linear-gradient(to top, rgb(1, 2, 5), transparent)",
// background: `
//   linear-gradient(
//     to top,
//     rgb(1, 2, 5) 0%,
//     rgba(1, 2, 5, 0.46) 40%,
//     rgba(0, 0, 0, 0) 100%
//   )
// `,
//     pointerEvents: "none",
//   },
// };

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
