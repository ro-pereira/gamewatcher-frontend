import { palette } from "./core/palette";
import { typography } from "./core/typography";
import { createTheme, type Theme } from "@mui/material/styles";
import { ThemeOptions } from "./type";

export const baseTheme: ThemeOptions = {
  colorSchemes: {
    light: { palette },
  },
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
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
  },
};

type CreateThemeProps = {
  themeOverrides?: ThemeOptions;
};

export function createThemeConfig({
  themeOverrides = {},
}: CreateThemeProps = {}): Theme {
  const theme = createTheme(baseTheme, themeOverrides);

  return theme;
}
