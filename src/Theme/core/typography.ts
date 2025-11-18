import { TypographyVariantsOptions } from "@mui/material/styles";

export const typography: TypographyVariantsOptions = {
  fontFamily: ['"Inter"', '"Monomaniac One"', "sans-serif"].join(","),
  h1: {
    fontFamily: "Monomaniac One, sans-serif",
    fontSize: "5.8rem",
    "@media (max-width:1200px)": {
      fontSize: "3.8rem",
    },
  },
  h2: {
    fontFamily: "Monomaniac One, sans-serif",
    fontSize: "3rem",
  },
  h3: {
    fontFamily: "Monomaniac One, sans-serif",
    fontSize: "2rem",
  },
  body1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.6rem",
    lineHeight: 1.4,
    letterSpacing: "-1%",
    "@media (max-width:1200px)": {
      fontSize: "1.4rem",
      
    },
  },
  body2: {
    fontFamily: "Inter, sans-serif", 
    fontSize: "1.6rem",
    fontWeight: "400"
  },
  subtitle1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.8rem",
  },
};
