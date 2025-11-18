import CssBaseline from "@mui/material/CssBaseline";
import type { ThemeProviderProps as MuiThemeProviderProps } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { createThemeConfig } from "./createTheme";
import { ThemeOptions } from "./type";

type ThemeProviderProps = Partial<MuiThemeProviderProps> & {
  themeOverrides?: ThemeOptions;
  children: ReactNode;
};

function ThemeProvider({
  themeOverrides,
  children,
  ...other
}: ThemeProviderProps) {
  const theme = createThemeConfig({
    themeOverrides,
  });

  return (
    <MuiThemeProvider theme={theme} {...other}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
