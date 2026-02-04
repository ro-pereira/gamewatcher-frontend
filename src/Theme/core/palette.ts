import { PaletteOptions } from "@mui/material/styles";

export const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "rgb(18, 225, 42)",
    // main: "rgb(225, 170, 18)",
// 
    contrastText: "rgb(255, 247, 247)",
  },
  secondary: {
    main: "rgb(18, 225, 42)",
    // main: "rgb(0, 176, 166)",
    contrastText: "rgb(18, 225, 42)",
  },
  background: {
    default: "rgb(1, 2, 4)",
  },
  info: {
    light: "rgb(97, 243, 243)",
    main: "rgb(0, 184, 217)",
    dark: "rgb(0, 108, 156)",
    contrastText: "rgb(255, 255, 255)",
  },
  success: {
    light: "rgb(119, 237, 139)",
    main: "rgb(34, 197, 94)",
    dark: "rgb(17, 141, 87)",
    contrastText: "rgb(255, 255, 255)",
  },
  warning: {
    light: "rgb(255, 214, 102)",
    main: "rgb(255, 171, 0)",
    dark: "rgb(183, 110, 0)",
    contrastText: "rgb(28, 37, 46)",
  },
  error: {
    light: "rgb(255, 172, 130)",
    main: "rgb(255, 86, 48)",
    dark: "rgb(183, 29, 24)",
    contrastText: "rgb(255, 255, 255)",
  },
  grey: {
    200: "rgb(244, 246, 248)",
    300: "rgb(223, 227, 232)",
    400: "rgb(196, 205, 213)",
    500: "rgb(145, 158, 171)",
    600: "rgb(99, 115, 129)",
    700: "rgb(69, 79, 91)",
    800: "rgb(28, 37, 46)",
    900: "rgb(20, 26, 33)",
  },
};
