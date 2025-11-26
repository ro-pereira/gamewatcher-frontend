import { Components, Theme } from "@mui/material/styles";

export const styleComponentGlobal: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      html: {
        fontSize: "62.5%",
      },
      root: {
        width: "100vw",
        margin: 0,
      },
      body: {
        overflowX: "hidden",
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      disableGutters: true,
      maxWidth: false,
    },
  },

  MuiOutlinedInput: {
    defaultProps: { disableInjectingGlobalStyles: true },
    styleOverrides: {
      root: {
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.27)",
        // color: "rgba(0, 0, 0, 1)",
        backdropFilter: "blur(6px)",
        border: "2px solid rgba(255, 255, 255)",
        transition: "all 0.3s ease",
        boxShadow: "5px 5px 8px 4px #010205",
        notchedOutline: {
          border: "none",
        },
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        height: "100vh",
        minHeight: "500px",
        maxHeight: "1200px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
};
