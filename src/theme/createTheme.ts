import { palette } from "./core/palette";
import { typography } from "./core/typography";
import { ThemeOptions } from "./type";
import { createTheme, type Theme } from "@mui/material/styles";

export const baseTheme: ThemeOptions = {
  colorSchemes: {
    light: { palette },
  },
  typography,
  shape: { borderRadius: 8 },
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
