import { Components, Theme } from "@mui/material/styles";
import { flexRowJustifyContentCenter } from "./layout.flex";

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
      body: {
        overflowX: "hidden",
        overscrollBehavior: "none",
      },

      "@media (max-width: 300px)": {
        body: {
          overflowX: "auto",
          // overscrollBehavior: "auto"
        },
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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
};


// export const pageIndexStyle = {
//   minWidth: "30rem",
// };