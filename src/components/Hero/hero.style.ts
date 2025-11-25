import {
  flexColumnAlignItemsCenter,
  flexColumnCenter,
  flexRowCenter,
} from "@/src/Theme/util/layout.flex";

export const heroContainerStyle = {
  backgroundImage: "url('/the-soccer-ball.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "10%",
    background: "linear-gradient( #00000002, #000000ff)",
  },
};

export const heroHeaderBoxSx = {
  width: "80%",
  height: "50%",
  justifyContent: { xs: "center", sm: "end" },
  paddingTop: "calc(1rem + 1.4rem)",
  paddingBottom: "1rem",
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
  boxShadow: "5px 5px 8px 4px",
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
  boxShadow: "5px 5px 8px 4px",
  borderRadius: "2rem",
  bgcolor: "primary.main",
};

export const searchContainerSx = {
  width: "80%",
  minHeight: "50%",
  padding: 5,
  position: "relative",
  ...flexColumnCenter,
};

export const searchInputSx = {
  display: "flex",
  flexDirection: "column",
  width: "50rem",
  height: "100%",
  maxWidth: "80%",
  gap: 0.4,
};
