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
      },
      body: {
        overflowX: "hidden",
        overScrollBehavior: "none"
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
        backgroundColor: "rgb(52, 52, 52)",
        // backdropFilter: "blur(.2rem)",
        border: "2px solid rgba(255, 255, 255)",
        transition: "all 0.3s ease",
        boxShadow: "5px 5px 8px 4px rgb(1, 2, 5)",
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
