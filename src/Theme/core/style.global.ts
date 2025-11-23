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

  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiInputBase-root": {
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.78)",
          color: "primary.contrastText",
          border: "2px solid rgba(255, 255, 255)",
          transition: "all 0.3s ease",
          boxShadow: "5px 5px 8px 4px",
        },
        "& .MuiInputBase-root.Mui-focused": {
          borderColor: "rgba(255, 255, 255)",
        },
        "& .MuiOutlinedInput-notchedOutline": {
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
        alignItems: "center",
      },
    },
  },
};
