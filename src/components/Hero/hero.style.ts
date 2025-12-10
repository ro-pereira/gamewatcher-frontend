import {
  flexColumnAlignItemsCenter,
  // flexColumnCenter,
  flexRowCenter,
} from "@/src/Theme/util/layout.flex";

// export const heroContainerStyle = {
//   // backgroundImage: "url('/the-soccer-ball.jpg')",
//   // backgroundRepeat: "no-repeat",
//   // backgroundSize: "cover",
//   // backgroundPosition: "center",
//     backgrond: "#00ff2a54",
// };

export const heroHeaderBoxSx = {
  width: "80%",
  height: "50%",
  justifyContent: { xs: "center", sm: "end" },
  paddingTop: "calc(1rem + 1.4rem)",
  paddingBottom: "1rem",
  // zIndez: 999,
  ...flexColumnAlignItemsCenter,
  
};

export const titleContainerSx = {
  width: {
    xs: "60%",
    sm: "35rem",
    md: "40rem",
    lg: "50rem",
  },
  height: {
    xs: "8rem",
    sm: "14rem",
    md: "14rem",
    lg: "16rem",
  },

  ...flexRowCenter,
  boxShadow: "5px 5px 8px 4px rgba(1, 2, 5, 1)",
  borderRadius: "2rem",
  bgcolor: "secondary.main",
};

export const subtitleContainerSx = {
  maxWidth: "calc(60% - 2rem)",
  width: {
    xs: "50%",
    sm: "30rem",
    lg: "40rem",
  },
  height: {
    lg: "14rem",
  },
  position: "relative",
  ...flexRowCenter,
  padding: { xs: "2rem", lg: "4rem" },
  top: { xs: "-1rem", sm: "-2rem", md: "-2rem", lg: "-3rem" },
  boxShadow: "5px 5px 8px 4px rgb(1, 2, 5)",
  borderRadius: "2rem",
  bgcolor: "primary.main",
};

export const searchContainerSx = {
  position: "relative",
  top: "35%",
  // bgcolor: "red"
};

export const searchInputSx = {
  display: "flex",
  flexDirection: "column",
  width: "50rem",
  height: "100%",
  maxWidth: "80%",
  gap: 0.4,
};
