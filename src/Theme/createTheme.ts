import { createTheme, type Theme } from "@mui/material/styles";
import { palette } from "./core/palette";
import { styleComponentGlobal } from "./core/style.global";
import { typography } from "./core/typography";
import { ThemeOptions } from "../components/Types/type";

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
  components: styleComponentGlobal,
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
