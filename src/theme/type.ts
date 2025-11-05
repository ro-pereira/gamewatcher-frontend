import type {
  ColorSystemOptions,
  CssVarsThemeOptions,
  SupportedColorScheme,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material/styles";

export type ThemeColorScheme = SupportedColorScheme;

type ColorSchemeOptionsExtended = ColorSystemOptions;

export type ThemeOptions = Omit<MuiThemeOptions, "components"> &
  Pick<CssVarsThemeOptions, "defaultColorScheme" | "components"> & {
    colorSchemes?: Partial<
      Record<ThemeColorScheme, ColorSchemeOptionsExtended>
    >;
  };
