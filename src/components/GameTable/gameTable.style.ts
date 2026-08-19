import {
  flexColumnAlignItemsCenter,
  flexColumnCenter,
  flexRowCenter,
} from "@/src/Theme/core/layout.flex";

export const tableSx = {
  width: {
    xs: "calc(100% - 4rem)",
    sm: "55rem",
    md: "80rem",
    lg: "100rem",
  },

  minWidth: 0,

  padding: 0,

  boxSizing: "border-box",

  ...flexColumnAlignItemsCenter,

  marginTop: { xs: 2, sm: 0 },
};

export const infoContentTableSx = {
  overflow: "hidden",
  height: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const tableContainerSx = {
  position: "relative",
  width: {
    xs: "42rem",
    sm: "55rem",
    md: "80rem",
    lg: "100rem",
  },

  minHeight: "300px",
};

export const tableRowSx = {
  width: "100%",
  minWidth: 0,

  display: "flex",

  flexDirection: {
    xs: "column",
    sm: "row",
  },

  alignItems: "stretch",
  justifyContent: "center",

  background: {
    xs: "rgba(255, 255, 255, 0.06)",
    sm: "transparent",
  },

  backdropFilter: {
    xs: "blur(30px)",
    sm: "none",
  },

  WebkitBackdropFilter: {
    xs: "blur(30px)",
    sm: "none",
  },

  boxShadow: {
    xs: "0 8px 32px rgba(0, 0, 0, 0.18)",
    sm: "none",
  },

  borderBottom: {
    xs: "none",
    sm: "1px solid #fbfbfb3e",
  },

  borderRadius: {
    xs: "16px",
    sm: 0,
  },

  minHeight: {
    xs: "auto",
    sm: "14rem",
  },
  overflow: "hidden",

  transition: "all 0.25s ease",

  "&:hover": {
    xs: {
      background: "rgba(255, 255, 255, 0.09)",
      transform: "translateY(-2px)",
    },

    sm: {
      background: "transparent",
      transform: "none",
    },
  },
};

export const tableCellInfoTeamSx = {
  ...flexRowCenter,

  flex: {
    xs: "none",
    sm: 2,
  },

  width: {
    xs: "100%",
    sm: "auto",
  },

  minWidth: 0,

  borderBottom: "none",
  bgcolor: "#04040454",
};

export const tableCellInfoGameMatchSx = {
  ...flexColumnCenter,

  flex: {
    xs: "none",
    sm: 1,
  },

  width: {
    xs: "100%",
    sm: "auto",
  },

  minWidth: 0,

  // gap: 0.1,

  borderBottom: {
    xs: "none",
    sm: "none",
  },
  // bgcolor: "red",
  padding: {
    // xs: "0.5rem 1rem 1.5rem",
    xs: "2rem",
    sm: "1rem",
  },
};

export const tableCellInfoChannelSx = {
  ...flexRowCenter,

  flex: {
    xs: "none",
    sm: 2,
  },

  width: {
    xs: "100%",
    sm: "auto",
  },

  minWidth: 0,

  borderBottom: {
    xs: "none",
    sm: "none",
  },
  padding: {
    xs: "3rem",
    sm: "1rem",
  },

  bgcolor: "#04040454",
};
