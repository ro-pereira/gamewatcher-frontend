import {
  flexColumnAlignItemsCenter,
  // flexRowCenter,
} from "@/src/Theme/util/layout.flex";

export const heroContainerSx = {
  height: "55vh",
  minHeight: "40rem",
  width: "100%",
  minWidth: "42rem",

    backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",

  pointerEvents: "none",

  ...flexColumnAlignItemsCenter,
  justifyContent: "center",

  gap: 6,
  // // paddingTop: "8rem",
  // background: "#34ff425e",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-1rem",
    left: 0,
    width: "100%",
    height: "100%",
  backdropFilter: "blur(14px)",
  transform: "scale(1.1)", /* evita bordas duras */
    WebkitBackdropFilter: "blur(14px)",
      inset: 0,

    // background: "linear-gradient(to top, rgb(1, 2, 5), transparent)",
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
  // minWidth: "34rem",
  // // height: "14rem",
  // height: {
  //   xs: "12rem",
  //   lg: "14rem"
  // },
  // minHeight: "14rem",

  ...flexColumnAlignItemsCenter,
  gap: 1,
  // boxShadow: "5px 5px 8px 4px rgba(1, 2, 5, 1)",
  // borderRadius: "2rem",
  // bgcolor: "secondary.main",
};

// export const subtitleContainerSx = {
//   width: {
//     xs: "26rem",
//     sm: "30rem",
//     md: "36rem",
//     lg: "40rem",
//   },

//   minWidth: "26rem",
//   height: "14rem",
//   position: "relative",
//   ...flexRowCenter,
//   padding: { xs: "4rem", lg: "6rem" },
//   top: "-3rem",
//   // boxShadow: "5px 5px 8px 4px rgb(1, 2, 5)",
//   borderRadius: "2rem",
//   // bgcolor: "primary.main",
// };



export const inputHeroSx = {
  // backgroundImage: "url('/the-soccer-ball.jpg')",
  // backgroundSize: "cover",
  // backgroundPosition: "center",

  ...flexColumnAlignItemsCenter,
  justifyContent: "flex-end",

  // position: "relative",
  // top: 0,
  // zIndex: 1,

  // height: "55vh",
  // minHeight: "calc(30rem + 25rem)",
  width: "100%",
  minWidth: "42rem",

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
};


export const inputSx = {
  position: "relative",
  pointerEvents: "auto",
  zIndex: 99,
  ...flexColumnAlignItemsCenter,
  justifyContent: "center",
  // gap: 1,
  // height: "25rem",
  // background: "#ff000070",
  width: {
    xs: "38rem",
    md: "40rem",
    lg: "60rem",
  },
  padding: "1rem",
};
